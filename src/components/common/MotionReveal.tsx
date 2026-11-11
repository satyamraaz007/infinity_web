import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export interface MotionRevealProps {
    children: React.ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
    delay?: number;
    duration?: number;
    distance?: number;
    className?: string;
    threshold?: number;
    scale?: boolean;
}

export function MotionReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 0.65,
    distance = 22,
    className = '',
    scale = false,
}: MotionRevealProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    const getInitialPosition = () => {
        switch (direction) {
            case 'up':
                return { y: distance, x: 0 };
            case 'down':
                return { y: -distance, x: 0 };
            case 'left':
                return { x: distance, y: 0 };
            case 'right':
                return { x: -distance, y: 0 };
            case 'none':
            default:
                return { x: 0, y: 0 };
        }
    };

    const initial = {
        opacity: 0,
        ...getInitialPosition(),
        ...(scale ? { scale: 0.96 } : {}),
    };

    const animate = {
        opacity: 1,
        x: 0,
        y: 0,
        ...(scale ? { scale: 1 } : {}),
    };

    return (
        <motion.div
            initial={initial}
            whileInView={animate}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Custom smooth ease-out quint curve
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function MotionStaggerContainer({
    children,
    className = '',
    staggerDelay = 0.08,
}: {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.05,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export function MotionStaggerItem({
    children,
    className = '',
    yOffset = 20,
}: {
    children: React.ReactNode;
    className?: string;
    yOffset?: number;
}) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: yOffset },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.16, 1, 0.3, 1],
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

