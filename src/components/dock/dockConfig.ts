// src/components/dock/dockConfig.ts

interface DockConfig {
    size: number;
    magnification: number;
    distance: number;
}

export const getDockConfig = (width: number): DockConfig => {
    const MOBILE_CONFIG: DockConfig = { size: 30, magnification: 50, distance: 100 };
    const TABLET_CONFIG: DockConfig = { size: 40, magnification: 60, distance: 120 };
    const DESKTOP_CONFIG: DockConfig = { size: 50, magnification: 80, distance: 140 };

    if (width < 640) return MOBILE_CONFIG;
    if (width < 1024) return TABLET_CONFIG;
    return DESKTOP_CONFIG;
};
