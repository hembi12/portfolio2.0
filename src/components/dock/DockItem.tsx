// src/components/dock/DockItem.tsx
import React, { useRef, useLayoutEffect, useState } from 'react';
import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';
import * as Tooltip from '@radix-ui/react-tooltip';
import { DockIcon } from '../ui/dock';

type DockItemType = {
    href?: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    label: string;
    onClick?: () => void;
};

type DockItemProps = {
    item: DockItemType;
    mouseX: MotionValue<number>;
    size: number;
    magnification: number;
    distance: number;
};

const DockItem: React.FC<DockItemProps> = ({ item, mouseX, size, magnification, distance }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [bounds, setBounds] = useState<{ left: number; width: number } | null>(null);

    useLayoutEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setBounds({ left: rect.left, width: rect.width });
        }
    }, []);

    const distanceCalc = useTransform(mouseX, (x: number) => {
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
                    style={{ width: springSize, height: springSize }}
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
            <Tooltip.Portal>
                <Tooltip.Content side="top" align="center" className="rounded bg-white px-2 py-1 text-xs text-black shadow-lg">
                    {item.label}
                    <Tooltip.Arrow className="fill-black" />
                </Tooltip.Content>
            </Tooltip.Portal>
        </Tooltip.Root>
    );
};

export default DockItem;
