import React, { useRef, useState, useEffect } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Dock, DockIcon } from './ui/dock';
import { HomeIcon, SmileIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, ZapIcon, MailIcon, GlobeIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import * as Tooltip from '@radix-ui/react-tooltip';
import { toast, ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type DockItemType = {
    href?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void; // Para manejar acciones como cambio de idioma
};

const DockItem: React.FC<{
    item: DockItemType;
    mouseX: MotionValue<number>;
    size: number;
    magnification: number;
    distance: number;
}> = ({ item, mouseX, size, magnification, distance }) => {
    const ref = useRef<HTMLDivElement>(null);

    const distanceCalc = useTransform(mouseX, (x: number) => {
        const bounds = ref.current?.getBoundingClientRect();
        if (!bounds) return Infinity;
        return Math.abs(x - (bounds.left + bounds.width / 2));
    });

    const sizeTransform = useTransform(distanceCalc, [0, distance], [magnification, size]);
    const springSize = useSpring(sizeTransform, { stiffness: 300, damping: 20 });

    return (
        <Tooltip.Root>
            <Tooltip.Trigger asChild>
                <motion.div
                    ref={ref}
                    style={{
                        width: springSize,
                        height: springSize,
                    }}
                    className="flex items-center justify-center"
                >
                    <DockIcon>
                        {item.href ? (
                            <a href={item.href} aria-label={item.label} className="rounded-full p-2">
                                <item.icon className="w-6 h-6 hover:text-cyan-200 transition-colors duration-200" />
                            </a>
                        ) : (
                            <button
                                onClick={item.onClick}
                                aria-label={item.label}
                                className="rounded-full p-2 focus:outline-none"
                            >
                                <item.icon className="w-6 h-6 hover:text-cyan-200 transition-colors duration-200" />
                            </button>
                        )}
                    </DockIcon>
                </motion.div>
            </Tooltip.Trigger>
            <Tooltip.Content
                side="top"
                align="center"
                className="rounded bg-white px-2 py-1 text-xs text-black shadow-lg"
            >
                {item.label}
                <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
        </Tooltip.Root>
    );
};

const DockComponent: React.FC = () => {
    const mouseX = useMotionValue(Infinity);
    const { i18n, t } = useTranslation();
    const [dockConfig, setDockConfig] = useState({
        size: 40,
        magnification: 60,
        distance: 140,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setDockConfig({ size: 30, magnification: 50, distance: 100 });
            } else if (width < 1024) {
                setDockConfig({ size: 40, magnification: 60, distance: 120 });
            } else {
                setDockConfig({ size: 50, magnification: 80, distance: 140 });
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang); // Guarda el idioma en localStorage

        toast.success(t('languageChanged'), {
            position: 'top-center', // Notificación en la parte superior
            autoClose: 3000, // Se cierra en 3 segundos
            hideProgressBar: false, // Ocultar barra de progreso
            closeOnClick: true, // Cerrar al hacer clic
            pauseOnHover: false, // No pausar al pasar el mouse
            draggable: true, // Permitir arrastrar la notificación
            theme: 'dark', // Tema oscuro
            transition: Slide, // Animación Slide
        });
    };

    const dockItems: DockItemType[] = [
        { href: '#header', icon: HomeIcon, label: t('home') },
        { href: '#about', icon: SmileIcon, label: t('aboutdock') },
        { href: '#projects', icon: CodeIcon, label: t('projectsdock') },
        { href: '#skills', icon: ZapIcon, label: t('skillsdock') },
        { href: '#contact', icon: MailIcon, label: t('contact') },
        { href: '#work-experience', icon: BriefcaseIcon, label: t('workExperience') },
        { href: '#education', icon: GraduationCapIcon, label: t('education') },
        {
            icon: GlobeIcon,
            label: t('changeLanguage'),
            onClick: handleLanguageChange,
        },
    ];

    return (
        <Tooltip.Provider>
            {/* 🎨 Contenedor Personalizado para las Notificaciones */}
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                pauseOnHover={false}
                draggable
                theme="dark"
                transition={Slide}
            />

            <Dock
                className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 
                bg-black font-semibold rounded-lg shadow-lg p-2"
                iconSize={dockConfig.size}
                iconMagnification={dockConfig.magnification}
                iconDistance={dockConfig.distance}
                onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => mouseX.set(e.clientX)}
                onMouseLeave={() => mouseX.set(Infinity)}
            >
                {dockItems.map((item) => (
                    <DockItem
                        key={item.label}
                        item={item}
                        mouseX={mouseX}
                        size={dockConfig.size}
                        magnification={dockConfig.magnification}
                        distance={dockConfig.distance}
                    />
                ))}
            </Dock>
        </Tooltip.Provider>
    );
};

export default DockComponent;
