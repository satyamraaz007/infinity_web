import { Link } from 'react-router-dom';
import { navigation } from '@/data/navigation';
import { IconByName } from '@/components/common/IconByName';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function MobileMenu({ onNavigate }: { onNavigate: () => void }) {
    const [productsOpen, setProductsOpen] = useState(false);
    const [activeCat, setActiveCat] = useState<string | null>(null);

    return (
        <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
            {navigation.map(item => {
                if (item.isMegaMenu) {
                    return (
                        <div key={item.label} className="border-b border-white/10 py-2">
                            <div className="flex items-center justify-between py-2 text-white">
                                <Link to={item.href} onClick={onNavigate} className="font-bold text-white hover:text-gold">
                                    {item.label}
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => setProductsOpen(!productsOpen)}
                                    className="p-1 text-gold"
                                >
                                    <ChevronDown size={16} className={productsOpen ? 'rotate-180' : ''} />
                                </button>
                            </div>
                            {productsOpen && item.categories && (
                                <div className="space-y-2 pl-3 pt-1">
                                    {item.categories.map(cat => (
                                        <div key={cat.slug} className="rounded bg-navy/50 p-2">
                                            <button
                                                type="button"
                                                onClick={() => setActiveCat(activeCat === cat.slug ? null : cat.slug)}
                                                className="flex w-full items-center justify-between text-xs font-bold text-white/90"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <IconByName name={cat.icon} size={14} className="text-gold" />
                                                    <span>{cat.title}</span>
                                                </div>
                                                <ChevronDown size={14} className={activeCat === cat.slug ? 'rotate-180' : ''} />
                                            </button>
                                            {activeCat === cat.slug && (
                                                <div className="mt-2 space-y-1 pl-4 text-xs">
                                                    {cat.items.map(sub => (
                                                        <Link
                                                            key={sub.href}
                                                            to={sub.href}
                                                            onClick={onNavigate}
                                                            className="block py-1 text-white/70 hover:text-gold"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                }
                return (
                    <Link
                        key={item.href}
                        to={item.href}
                        onClick={onNavigate}
                        className="border-b border-white/10 py-3 text-white hover:text-gold"
                    >
                        {item.label}
                    </Link>
                );
            })}
        </nav>
    );
}
