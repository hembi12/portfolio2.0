import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { getDockConfig } from './dockConfig';
import { getDockItems } from './dockItems';
import { Dock } from '../ui/dock';
import { useMotionValue } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider as TooltipProvider } from '@radix-ui/react-tooltip';
import { Link } from "react-scroll"; // ✅ Importamos Link de react-scroll

const DockItem = React.lazy(() => import('./DockItem'));

const DockComponent: React.FC = () => {
    const { i18n, t } = useTranslation();
    const [dockConfig, setDockConfig] = useState(() =>
        getDockConfig(typeof window !== 'undefined' ? window.innerWidth : 1024)
    );
    const mouseX = useMotionValue(Infinity);

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

    // 🔹 Agregamos el identificador de sección en cada `dockItem`
    const dockItems = getDockItems(t, handleLanguageChange).map(item => ({
        ...item,
        sectionId: item.sectionId || item.label.toLowerCase().replace(/\s/g, "-")
    }));    

    return (
        <>
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
                            <Link
                                key={item.label}
                                to={item.sectionId} // 🔹 Ahora apunta a un ID de sección
                                smooth={true}
                                duration={500}
                                className="cursor-pointer"
                            >
                                <DockItem
                                    item={item}
                                    mouseX={mouseX}
                                    size={dockConfig.size}
                                    magnification={dockConfig.magnification}
                                    distance={dockConfig.distance}
                                />
                            </Link>
                        ))}
                    </Dock>
                </TooltipProvider>
            </Suspense>
        </>
    );
};

export default DockComponent;
