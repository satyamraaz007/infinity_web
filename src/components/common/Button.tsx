import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

type ButtonProps = { children: React.ReactNode; to?: string; href?: string; onClick?: () => void; variant?: 'primary' | 'light' | 'red'; className?: string; type?: 'button' | 'submit' };

export function Button({ children, to, href, onClick, variant = 'primary', className, type = 'button' }: ButtonProps) {
    const styles = cn('inline-flex items-center justify-center gap-3 border px-6 py-3.5 text-[12px] font-bold tracking-[0.12em] transition-all duration-300 hover:-translate-y-0.5', variant === 'primary' && 'border-gold bg-navy text-white hover:bg-blue', variant === 'light' && 'border-gold bg-transparent text-navy hover:bg-gold', variant === 'red' && 'border-red bg-red text-white hover:bg-red/90', className);
    const content = <>{children}<ArrowRight size={17} strokeWidth={1.8} /></>;
    if (to) return <Link className={styles} to={to}>{content}</Link>;
    if (href) return <a className={styles} href={href}>{content}</a>;
    return <button className={styles} onClick={onClick} type={type}>{content}</button>;
}
