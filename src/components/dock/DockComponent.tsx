// src/components/dock/DockComponent.tsx
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { useMotionValue } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { getDockConfig } from './dockConfig';
import { getDockItems } from './dockItems';
import { Dock } from '../ui/dock';

const DockItem = lazy(() => import('./DockItem'));
const TooltipProvider = lazy(() => import('@radix-ui/react-tooltip').then(module => ({ default: module.Provider })));
const ToastContainer = lazy(() => import('react-toastify').then(module => ({ default: module.ToastContainer })));

const debounce = <T extends unknown[]>(func: (...args: T) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (...args: T) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
};

const DockComponent: React.FC = () => {
    const mouseX = useMotionValue(Infinity);
    const { i18n, t } = useTranslation();
    const [dockConfig, setDockConfig] = useState(getDockConfig(typeof window !== 'undefined' ? window.innerWidth : 1024));

    useEffect(() => {
        const handleResize = debounce(() => {
            setDockConfig(getDockConfig(window.innerWidth));
        }, 200);
        
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
    };

    const dockItems = getDockItems(t, handleLanguageChange);

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <TooltipProvider>
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    closeOnClick
                    pauseOnHover={false}
                    draggable
                    theme="dark"
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
            </TooltipProvider>
        </Suspense>
    );
};

export default DockComponent;
