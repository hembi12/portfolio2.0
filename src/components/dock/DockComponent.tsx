import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { getDockConfig } from './dockConfig';
import { getDockItems } from './dockItems';
import { Dock } from '../ui/dock';
import { useMotionValue } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos de toastify
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip'; // Importación directa

const DockItem = React.lazy(() => import('./DockItem'));

const DockComponent: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [dockConfig, setDockConfig] = useState(() =>
        getDockConfig(typeof window !== 'undefined' ? window.innerWidth : 1024)
    );
    const mouseX = useMotionValue(Infinity);

    // 🛠️ useCallback evita que handleResize cambie en cada render
    const handleResize = useCallback(() => {
        setDockConfig(getDockConfig(window.innerWidth));
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const handleLanguageChange = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
        localStorage.setItem('i18nextLng', newLang);
        
        // ✅ Notificación de éxito con traducción
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
        <>
            {/* ✅ ToastContainer siempre disponible */}
            <ToastContainer />

            <Suspense fallback={<div>Loading...</div>}>
                <TooltipProvider>
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
        </>
    );
};

export default DockComponent;
