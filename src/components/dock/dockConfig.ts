// src/components/dock/dockConfig.ts
export const getDockConfig = (width: number) => {
    if (width < 640) return { size: 30, magnification: 50, distance: 100 };
    if (width < 1024) return { size: 40, magnification: 60, distance: 120 };
    return { size: 50, magnification: 80, distance: 140 };
};