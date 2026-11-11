import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Shield, DoorClosed, Lightbulb, Lock } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { getAllCategories } from '@/data/products';

export function ProductsPreview() {
    const categories = getAllCategories();

    return (
        <section className="bg-white py-20 border-t border-slate-200">
            <Container>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
                    <SectionHeading
                        eyebrow="Engineered Catalog"
                        title="Comprehensive Architectural &amp; Safety Systems"
                    />
                    <Link
                        to="/products"
                        className="inline-flex items-center gap-2 rounded border border-gold bg-navy px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-blue transition-colors self-start sm:self-auto shrink-0"
                    >
                        <span>View All 15 Products</span>
                        <ArrowRight size={14} />
                    </Link>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    {categories.map(cat => (
                        <div
                            key={cat.slug}
                            className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-[#fafbfc] p-6 transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-xl hover:-translate-y-1"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold shadow-md group-hover:bg-gold group-hover:text-navy transition-all duration-300">
                                        {cat.slug === 'fire-smoke-protection' && <Flame size={22} />}
                                        {cat.slug === 'fire-rated-glass' && <Shield size={22} />}
                                        {cat.slug === 'fire-rated-doors' && <DoorClosed size={22} />}
                                        {cat.slug === 'led-lighting' && <Lightbulb size={22} />}
                                        {cat.slug === 'door-hardware-security' && <Lock size={22} />}
                                    </div>
                                    <span className="rounded bg-gold/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-navy border border-gold/30">
                                        {cat.products.length} Products
                                    </span>
                                </div>

                                <h3 className="mt-5 text-lg font-bold uppercase tracking-tight text-navy group-hover:text-blue transition-colors">
                                    {cat.title}
                                </h3>
                                <p className="mt-2 text-xs leading-relaxed text-muted line-clamp-3">
                                    {cat.description}
                                </p>

                                {/* Subsections quick list */}
                                <div className="mt-4 space-y-1.5 border-t border-slate-200/80 pt-3">
                                    {cat.products.slice(0, 3).map(p => (
                                        <Link
                                            key={p.slug}
                                            to={`/products/${cat.slug}/${p.slug}`}
                                            className="block text-xs font-medium text-slate-600 hover:text-gold transition-colors truncate"
                                        >
                                            • {p.title}
                                        </Link>
                                    ))}
                                    {cat.products.length > 3 && (
                                        <div className="text-[11px] text-slate-400 pl-2">
                                            +{cat.products.length - 3} more systems
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-200/80">
                                <Link
                                    to={`/products/${cat.slug}`}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy group-hover:text-gold transition-colors"
                                >
                                    <span>Explore Division</span>
                                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
