import React, { ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
    as?: React.ElementType;
}

export function Container({ children, className, as: Component = 'div', ...props }: ContainerProps) {
    return (
        <Component
            className={cn('mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10', className)}
            {...props}
        >
            {children}
        </Component>
    );
}
