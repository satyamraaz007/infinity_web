import { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, Phone, X, ChevronDown, ChevronRight, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { navigation } from '@/data/navigation';
import { company } from '@/data/company';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { IconByName } from '@/components/common/IconByName';
import logo from '@/assets/logos/infinity_logo.png';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [megaMenuOpen, setMegaMenuOpen] = useState(false);
    const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
    const [mobileExpandedCategory, setMobileExpandedCategory] = useState<string | null>(null);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

    const location = useLocation();
    const scrolled = useScrollPosition() > 16;
    const megaMenuRef = useRef<HTMLDivElement>(null);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    // Close menus on route change
    useEffect(() => {
        setOpen(false);
        setMegaMenuOpen(false);
    }, [location.pathname]);

    // Handle ESC key to close mega menu
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setMegaMenuOpen(false);
                setOpen(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleMouseEnter = () => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        setMegaMenuOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setMegaMenuOpen(false);
        }, 180);
    };

    const productsNavItem = navigation.find(n => n.isMegaMenu);
    const activeCategory = productsNavItem?.categories?.[activeCategoryIndex];

    const isProductsActive = location.pathname.startsWith('/products');

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 border-b border-gold/70 bg-navy transition-all duration-300 ${
                scrolled ? 'shadow-2xl shadow-navy/80 bg-navy/98 backdrop-blur-md' : 'bg-navy'
            }`}
        >
            <div className="mx-auto flex h-[86px] max-w-[1320px] items-center justify-between px-5 sm:px-8 lg:px-10">
                {/* Brand Logo */}
                <NavLink
                    to="/"
                    onClick={() => setOpen(false)}
                    aria-label="Infinity Engineering home"
                    className="group relative flex items-center transition-transform hover:opacity-95"
                >
                    <img
                        src={logo}
                        className="h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                        alt="Infinity Engineering"
                    />
                </NavLink>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-7 lg:flex">
                    {navigation.map(item => {
                        if (item.isMegaMenu) {
                            return (
                                <div
                                    key={item.label}
                                    className="relative py-6"
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <NavLink
                                        to={item.href}
                                        className={`inline-flex items-center gap-1.5 text-[15px] font-semibold tracking-wide transition-colors ${
                                            isProductsActive || megaMenuOpen ? 'text-gold' : 'text-white/90 hover:text-gold'
                                        }`}
                                    >
                                        <span>{item.label}</span>
                                        <ChevronDown
                                            size={15}
                                            className={`transition-transform duration-200 ${
                                                megaMenuOpen ? 'rotate-180 text-gold' : 'text-white/60'
                                            }`}
                                        />
                                    </NavLink>
                                </div>
                            );
                        }

                        return (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-[15px] font-semibold tracking-wide transition-colors ${
                                        isActive ? 'text-gold' : 'text-white/90 hover:text-gold'
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Right Call-To-Action Button */}
                <div className="hidden items-center gap-4 sm:flex">
                    <a
                        href={`tel:${company.phone}`}
                        className="group flex items-center gap-2 rounded-sm border border-gold/90 bg-red px-4 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-white shadow-md transition-all duration-300 hover:bg-red/90 hover:-translate-y-0.5 hover:shadow-red/20 hover:border-gold"
                    >
                        <Phone size={14} className="transition-transform group-hover:rotate-12" />
                        <span>{company.phone}</span>
                    </a>
                </div>

                {/* Mobile Hamburger Toggle Button */}
                <button
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition-colors hover:border-gold hover:text-gold lg:hidden"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    aria-expanded={open}
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Desktop Mega Menu Dropdown */}
            {megaMenuOpen && productsNavItem?.categories && (
                <div
                    ref={megaMenuRef}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className="absolute left-0 right-0 top-full hidden lg:block border-t border-gold/70 bg-[#07172c] shadow-2xl shadow-black/80 backdrop-blur-xl animate-fadeIn"
                >
                    <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 py-8">
                        {/* Mega Menu Grid Container */}
                        <div className="grid grid-cols-[340px_1fr] gap-8 rounded-lg border border-white/10 bg-[#091d38]/95 p-6 shadow-inner">
                            {/* Left Column: Categories List */}
                            <div className="border-r border-white/10 pr-6">
                                <div className="mb-4 flex items-center justify-between pb-3 border-b border-white/10">
                                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
                                        Product Categories
                                    </span>
                                    <Link
                                        to="/products"
                                        onClick={() => setMegaMenuOpen(false)}
                                        className="text-xs text-white/70 hover:text-gold transition-colors inline-flex items-center gap-1 font-medium"
                                    >
                                        View All
                                        <ChevronRight size={13} />
                                    </Link>
                                </div>

                                <div className="space-y-1.5">
                                    {productsNavItem.categories.map((cat, idx) => {
                                        const isSelected = idx === activeCategoryIndex;
                                        return (
                                            <button
                                                key={cat.slug}
                                                type="button"
                                                onMouseEnter={() => setActiveCategoryIndex(idx)}
                                                onClick={() => setActiveCategoryIndex(idx)}
                                                className={`group flex w-full items-center justify-between rounded-md px-3.5 py-3 text-left transition-all duration-200 ${
                                                    isSelected
                                                        ? 'bg-blue text-white shadow-md border-l-4 border-gold'
                                                        : 'text-white/80 hover:bg-white/5 hover:text-white'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded transition-colors ${
                                                            isSelected ? 'bg-gold/20 text-gold' : 'bg-white/5 text-white/70 group-hover:text-gold'
                                                        }`}
                                                    >
                                                        <IconByName name={cat.icon} size={18} />
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold tracking-wide">
                                                            {cat.title}
                                                        </div>
                                                        <div className="text-[11px] text-white/60 line-clamp-1">
                                                            {cat.items.length} Products
                                                        </div>
                                                    </div>
                                                </div>
                                                <ChevronRight
                                                    size={15}
                                                    className={`transition-transform ${
                                                        isSelected ? 'translate-x-0.5 text-gold' : 'text-white/30 group-hover:text-white/70'
                                                    }`}
                                                />
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Consultation Box */}
                                <div className="mt-6 rounded border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-4">
                                    <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-wider mb-1">
                                        <ShieldCheck size={15} />
                                        <span>Certified Engineering</span>
                                    </div>
                                    <p className="text-[12px] text-white/80 leading-relaxed">
                                        Need custom dimensions, specifications or fire-engineering consultation?
                                    </p>
                                    <Link
                                        to="/contact"
                                        onClick={() => setMegaMenuOpen(false)}
                                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gold hover:text-white transition-colors"
                                    >
                                        <span>Contact Specialist</span>
                                        <ArrowRight size={13} />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Active Category Sub-Products */}
                            {activeCategory && (
                                <div className="flex flex-col justify-between pl-2">
                                    <div>
                                        {/* Category Header */}
                                        <div className="mb-6 flex items-start justify-between border-b border-white/10 pb-4">
                                            <div>
                                                <div className="flex items-center gap-2">
                                                    <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
                                                    <h3 className="text-xl font-bold uppercase tracking-wide text-white">
                                                        {activeCategory.title}
                                                    </h3>
                                                </div>
                                                <p className="mt-1 text-xs text-white/70 max-w-xl">
                                                    {activeCategory.description}
                                                </p>
                                            </div>
                                            <Link
                                                to={`/products/${activeCategory.slug}`}
                                                onClick={() => setMegaMenuOpen(false)}
                                                className="inline-flex items-center gap-1.5 rounded border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-semibold text-white/90 hover:border-gold hover:bg-gold hover:text-navy transition-all duration-200"
                                            >
                                                <span>Category Overview</span>
                                                <ArrowRight size={13} />
                                            </Link>
                                        </div>

                                        {/* Products Subsections Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {activeCategory.items.map(subItem => (
                                                <Link
                                                    key={subItem.href}
                                                    to={subItem.href}
                                                    onClick={() => setMegaMenuOpen(false)}
                                                    className="group relative flex flex-col justify-between rounded-lg border border-white/10 bg-[#08172c] p-4 transition-all duration-300 hover:border-gold/80 hover:bg-[#0c2445] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-black/40"
                                                >
                                                    <div>
                                                        <div className="flex items-center justify-between gap-2">
                                                            <h4 className="text-sm font-bold text-white group-hover:text-gold transition-colors">
                                                                {subItem.label}
                                                            </h4>
                                                            {subItem.badge && (
                                                                <span className="shrink-0 rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold border border-gold/30">
                                                                    {subItem.badge}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-2">
                                                            {subItem.description}
                                                        </p>
                                                    </div>
                                                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-gold opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                                                        <span>View Technical Specs</span>
                                                        <ArrowRight size={13} />
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Bottom Mega Menu Bar */}
                                    <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1.5 text-slate-300">
                                                <Sparkles size={14} className="text-gold" />
                                                <span>Full Compliance Testing: BS EN, UL, NFPA, CE, ISO</span>
                                            </span>
                                        </div>
                                        <Link
                                            to="/products"
                                            onClick={() => setMegaMenuOpen(false)}
                                            className="font-bold text-gold hover:text-white transition-colors uppercase tracking-wider flex items-center gap-1"
                                        >
                                            <span>Explore All 15 Products</span>
                                            <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Navigation Drawer */}
            {open && (
                <div className="max-h-[calc(100vh-86px)] overflow-y-auto border-t border-white/10 bg-[#07172c] px-5 py-6 lg:hidden">
                    <nav className="flex flex-col space-y-1">
                        {navigation.map(item => {
                            if (item.isMegaMenu) {
                                return (
                                    <div key={item.label} className="border-b border-white/10 pb-2">
                                        {/* Products Main Toggle */}
                                        <div className="flex items-center justify-between py-3">
                                            <NavLink
                                                to={item.href}
                                                onClick={() => setOpen(false)}
                                                className={`text-base font-bold uppercase tracking-wide ${
                                                    isProductsActive ? 'text-gold' : 'text-white'
                                                }`}
                                            >
                                                {item.label}
                                            </NavLink>
                                            <button
                                                type="button"
                                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                                className="p-1.5 text-white/80 hover:text-gold"
                                                aria-label="Toggle products dropdown"
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform duration-200 ${
                                                        mobileProductsOpen ? 'rotate-180 text-gold' : ''
                                                    }`}
                                                />
                                            </button>
                                        </div>

                                        {/* Nested Categories in Mobile */}
                                        {mobileProductsOpen && item.categories && (
                                            <div className="mt-1 space-y-2 pl-2">
                                                <Link
                                                    to="/products"
                                                    onClick={() => setOpen(false)}
                                                    className="block rounded bg-gold/15 p-2.5 text-center text-xs font-bold uppercase tracking-wider text-gold border border-gold/40"
                                                >
                                                    View All Products Catalog
                                                </Link>

                                                {item.categories.map(cat => {
                                                    const isCatOpen = mobileExpandedCategory === cat.slug;
                                                    return (
                                                        <div
                                                            key={cat.slug}
                                                            className="rounded-md border border-white/10 bg-navy/60 p-2"
                                                        >
                                                            <button
                                                                type="button"
                                                                onClick={() =>
                                                                    setMobileExpandedCategory(
                                                                        isCatOpen ? null : cat.slug
                                                                    )
                                                                }
                                                                className="flex w-full items-center justify-between py-2 text-left text-sm font-bold text-white hover:text-gold"
                                                            >
                                                                <div className="flex items-center gap-2.5">
                                                                    <div className="flex h-7 w-7 items-center justify-center rounded bg-white/5 text-gold">
                                                                        <IconByName name={cat.icon} size={15} />
                                                                    </div>
                                                                    <span>{cat.title}</span>
                                                                </div>
                                                                <ChevronDown
                                                                    size={15}
                                                                    className={`transition-transform duration-200 ${
                                                                        isCatOpen ? 'rotate-180 text-gold' : 'text-white/50'
                                                                    }`}
                                                                />
                                                            </button>

                                                            {/* Nested Sub-Products in Mobile */}
                                                            {isCatOpen && (
                                                                <div className="mt-2 space-y-1.5 border-t border-white/10 pt-2 pl-3">
                                                                    <Link
                                                                        to={`/products/${cat.slug}`}
                                                                        onClick={() => setOpen(false)}
                                                                        className="block py-1.5 text-xs font-semibold text-gold underline underline-offset-4"
                                                                    >
                                                                        Overview: {cat.title} &rarr;
                                                                    </Link>
                                                                    {cat.items.map(subItem => (
                                                                        <Link
                                                                            key={subItem.href}
                                                                            to={subItem.href}
                                                                            onClick={() => setOpen(false)}
                                                                            className="group flex items-center justify-between rounded p-2 text-xs text-white/90 hover:bg-white/10 hover:text-gold"
                                                                        >
                                                                            <span className="font-medium">
                                                                                {subItem.label}
                                                                            </span>
                                                                            {subItem.badge && (
                                                                                <span className="rounded bg-gold/20 px-1.5 py-0.5 text-[9px] font-bold text-gold">
                                                                                    {subItem.badge}
                                                                                </span>
                                                                            )}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                );
                            }

                            return (
                                <NavLink
                                    key={item.href}
                                    to={item.href}
                                    onClick={() => setOpen(false)}
                                    className={({ isActive }) =>
                                        `border-b border-white/10 py-3 text-base font-bold uppercase tracking-wide ${
                                            isActive ? 'text-gold' : 'text-white hover:text-gold'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            );
                        })}
                    </nav>

                    {/* Mobile Phone Call Button */}
                    <a
                        href={`tel:${company.phone}`}
                        className="mt-6 flex w-full items-center justify-center gap-2 rounded border border-gold bg-red px-5 py-3.5 text-center text-sm font-bold uppercase tracking-wider text-white shadow-md"
                    >
                        <Phone size={16} />
                        <span>{company.phone}</span>
                    </a>
                </div>
            )}
        </header>
    );
}
