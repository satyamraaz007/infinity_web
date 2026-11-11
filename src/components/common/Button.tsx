import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type ButtonProps = {
    children: React.ReactNode;
    to?: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'light' | 'red';
    className?: string;
    type?: 'button' | 'submit';
};

export function Button({
    children,
    to,
    href,
    onClick,
    variant = 'primary',
    className,
    type = 'button',
}: ButtonProps) {
    const styles = cn(
        'group btn-shimmer inline-flex items-center justify-center gap-3 border px-6 py-3.5 text-[12px] font-bold tracking-[0.12em] uppercase transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]',
        variant === 'primary' && 'border-gold bg-navy text-white hover:bg-blue hover:shadow-lg hover:shadow-navy/20',
        variant === 'light' && 'border-gold bg-transparent text-navy hover:bg-gold hover:text-navy hover:shadow-md',
        variant === 'red' && 'border-red bg-red text-white hover:bg-red/90 hover:shadow-lg hover:shadow-red/20',
        className
    );

    const content = (
        <>
            <span>{children}</span>
            <ArrowRight
                size={16}
                strokeWidth={2}
                className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
            />
        </>
    );

    if (to) return <Link className={styles} to={to}>{content}</Link>;
    if (href) return <a className={styles} href={href}>{content}</a>;
    return <button className={styles} onClick={onClick} type={type}>{content}</button>;
}
