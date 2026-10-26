import { NavLink } from 'react-router-dom';
import { navigation } from '@/data/navigation';

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
    return <nav aria-label="Mobile navigation" className="flex flex-col gap-1">{navigation.map(item => <NavLink key={item.href} to={item.href} onClick={onNavigate} className="border-b border-white/10 py-3 text-white">{item.label}</NavLink>)}</nav>;
}
