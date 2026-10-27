import { Menu, Phone, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { navigation } from '@/data/navigation';
import { company } from '@/data/company';
import { useScrollPosition } from '@/hooks/useScrollPosition';
// import logo from '@/assets/logos/infinity-mark.svg';
import logo from '@/assets/logos/infinity_logo.png';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const scrolled = useScrollPosition() > 16;
    return <header className={`fixed inset-x-0 top-0 z-50 border-b border-gold/80 bg-navy transition-shadow ${scrolled ? 'shadow-xl shadow-navy/20' : ''}`}>
        <div className="mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
            <NavLink to="/" onClick={() => setOpen(false)} aria-label="Infinity Engineering home"><img src={logo} className="h-[53px] w-[153px]" alt="Infinity Engineering" /></NavLink>
            <nav className="hidden items-center gap-8 lg:flex">{navigation.map(item => <NavLink key={item.href} to={item.href} className={({ isActive }) => `text-[16px] transition-colors ${isActive ? 'text-gold' : 'text-white/90 hover:text-gold'}`}>{item.label}</NavLink>)}</nav>
            <a href={`tel:${company.phone}`} className="hidden items-center gap-2 rounded-md border border-gold bg-red px-4 py-3 text-sm font-bold tracking-[0.07em] text-white shadow-sm transition-transform hover:-translate-y-0.5 sm:flex"><Phone size={15} />{company.phone}</a>
            <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={27} /> : <Menu size={27} />}</button>
        </div>
        {open && <div className="border-t border-white/10 bg-navy px-5 py-5 lg:hidden"><nav className="flex flex-col gap-1">{navigation.map(item => <NavLink key={item.href} onClick={() => setOpen(false)} to={item.href} className={({ isActive }) => `border-b border-white/10 py-3 text-base ${isActive ? 'text-gold' : 'text-white'}`}>{item.label}</NavLink>)}</nav><a href={`tel:${company.phone}`} className="mt-5 flex w-fit items-center gap-2 bg-red px-4 py-3 text-sm font-bold text-white"><Phone size={15} />{company.phone}</a></div>}
    </header>;
}
