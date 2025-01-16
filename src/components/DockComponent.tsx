import React, { useRef, useState, useEffect } from 'react';
import { motion, MotionValue, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Dock, DockIcon } from './ui/dock';
import { HomeIcon, SmileIcon, BriefcaseIcon, GraduationCapIcon, CodeIcon, ZapIcon, MailIcon } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

type DockItemType = {
    href: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
};

const DockItem: React.FC<{ item: DockItemType; mouseX: MotionValue<number>; size: number; magnification: number; distance: number }> = ({ item, mouseX, size, magnification, distance }) => {
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
                        <a href={item.href} aria-label={item.label} className="rounded-full p-2">
                            <item.icon className="w-6 h-6" />
                        </a>
                    </DockIcon>
                </motion.div>
            </Tooltip.Trigger>
            <Tooltip.Content
                side="top"
                align="center"
                className="rounded bg-black px-2 py-1 text-xs text-white shadow-lg"
            >
                {item.label}
                <Tooltip.Arrow className="fill-black" />
            </Tooltip.Content>
        </Tooltip.Root>
    );
};

const DockComponent: React.FC = () => {
    const mouseX = useMotionValue(Infinity);
    const [dockConfig, setDockConfig] = useState({
        size: 40,
        magnification: 60,
        distance: 140,
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;

            if (width < 640) {
                setDockConfig({ size: 30, magnification: 50, distance: 100 }); // Configuración para pantallas pequeñas
            } else if (width < 1024) {
                setDockConfig({ size: 40, magnification: 60, distance: 120 }); // Configuración para pantallas medianas
            } else {
                setDockConfig({ size: 50, magnification: 80, distance: 140 }); // Configuración para pantallas grandes
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Llama inicialmente para configurar los valores correctos
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const dockItems: DockItemType[] = [
        { href: '#header', icon: HomeIcon, label: 'Home' },
        { href: '#about', icon: SmileIcon, label: 'About' },
        { href: '#work-experience', icon: BriefcaseIcon, label: 'Work Experience' },
        { href: '#education', icon: GraduationCapIcon, label: 'Education' },
        { href: '#skills', icon: ZapIcon, label: 'Skills' },
        { href: '#projects', icon: CodeIcon, label: 'Projects' },
        { href: '#contact', icon: MailIcon, label: 'Contact' },
    ];

    return (
        <Tooltip.Provider>
            <Dock
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
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
