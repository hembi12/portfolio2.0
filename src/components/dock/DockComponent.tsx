import React, { useState, useEffect, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { getDockConfig } from './dockConfig';
import { getDockItems } from './dockItems';
import { Dock } from '../ui/dock';
import { useMotionValue } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Importa los estilos de toastify

const DockItem = React.lazy(() => import('./DockItem'));
const TooltipProvider = React.lazy(() => import('@radix-ui/react-tooltip').then(module => ({ default: module.Provider })));

const DockComponent: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [dockConfig, setDockConfig] = useState(getDockConfig(typeof window !== 'undefined' ? window.innerWidth : 1024));
    const mouseX = useMotionValue(Infinity);

    useEffect(() => {
        const handleResize = () => {
            setDockConfig(getDockConfig(window.innerWidth));
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
        
        // ✅ Muestra un mensaje de confirmación con toast
        toast.success(t('languageChanged'), {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            theme: 'dark',
        });
    };

    const dockItems = getDockItems(t, handleLanguageChange);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TooltipProvider>
                {/* ✅ ToastContainer siempre disponible */}
                <ToastContainer />

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
            </TooltipProvider>
        </Suspense>
    );
};

export default DockComponent;
