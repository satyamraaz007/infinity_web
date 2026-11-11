import { useState } from 'react';
import { getAllCategories, getAllProducts } from '@/data/products';
import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { ContactCTA } from '@/components/home/ContactCTA';
import { PageBanner } from '@/components/common/PageBanner';
import { Search, ShieldCheck, Flame, Shield, DoorClosed, Lightbulb, Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ProductsPage() {
    const categories = getAllCategories();
    const allProducts = getAllProducts();

    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = allProducts.filter(product => {
        const matchesCategory = selectedCategory === 'all' || product.categorySlug === selectedCategory;
        const matchesSearch =
            product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.categoryTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.overview.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-[#f5f6f8]">
            {/* Page Banner */}
            <PageBanner
                eyebrow="Engineered Architectural & Safety Solutions"
                title="Product Systems & Catalog"
                image="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1600&q=80"
            />

            {/* Sticky Filter & Search Control Bar */}
            <div className="sticky top-[86px] z-30 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
                <Container className="py-4">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Category Filter Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 lg:pb-0 scrollbar-none">
                            <button
                                type="button"
                                onClick={() => setSelectedCategory('all')}
                                className={`shrink-0 rounded px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                    selectedCategory === 'all'
                                        ? 'bg-navy text-gold shadow-sm'
                                        : 'bg-paper text-muted hover:bg-slate-200 hover:text-navy'
                                }`}
                            >
                                All Systems ({allProducts.length})
                            </button>

                            {categories.map(cat => {
                                const isSelected = selectedCategory === cat.slug;
                                return (
                                    <button
                                        key={cat.slug}
                                        type="button"
                                        onClick={() => setSelectedCategory(cat.slug)}
                                        className={`shrink-0 rounded px-3.5 py-2 text-xs font-bold uppercase tracking-wider transition-all ${
                                            isSelected
                                                ? 'bg-navy text-gold shadow-sm'
                                                : 'bg-paper text-muted hover:bg-slate-200 hover:text-navy'
                                        }`}
                                    >
                                        {cat.shortTitle} ({cat.products.length})
                                    </button>
                                );
                            })}
                        </div>

                        {/* Search Input */}
                        <div className="relative w-full lg:w-72">
                            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={e => setSearchTerm(e.target.value)}
                                placeholder="Search by name, spec, standard..."
                                className="w-full rounded-md border border-slate-300 bg-paper py-2 pl-9 pr-3 text-xs text-navy placeholder-slate-400 focus:border-gold focus:bg-white focus:outline-none focus:ring-1 focus:ring-gold"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            {/* Catalog Categories Overview Cards */}
            {selectedCategory === 'all' && searchTerm === '' && (
                <section className="py-12 border-b border-slate-200 bg-white">
                    <Container>
                        <div className="mb-8">
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                                5 Core Engineering Divisions
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-navy mt-1">
                                Explore by Product Category
                            </h2>
                        </div>

                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                            {categories.map(cat => (
                                <Link
                                    key={cat.slug}
                                    to={`/products/${cat.slug}`}
                                    className="group flex flex-col justify-between rounded-lg border border-slate-200 bg-[#fafbfc] p-5 transition-all duration-300 hover:border-gold hover:bg-navy hover:text-white hover:-translate-y-1 hover:shadow-lg"
                                >
                                    <div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold group-hover:bg-gold group-hover:text-navy transition-colors">
                                            {cat.slug === 'fire-smoke-protection' && <Flame size={20} />}
                                            {cat.slug === 'fire-rated-glass' && <Shield size={20} />}
                                            {cat.slug === 'fire-rated-doors' && <DoorClosed size={20} />}
                                            {cat.slug === 'led-lighting' && <Lightbulb size={20} />}
                                            {cat.slug === 'door-hardware-security' && <Lock size={20} />}
                                        </div>
                                        <h3 className="mt-4 text-sm font-bold uppercase tracking-tight text-navy group-hover:text-white transition-colors">
                                            {cat.title}
                                        </h3>
                                        <p className="mt-1 text-xs text-muted group-hover:text-white/70 line-clamp-2">
                                            {cat.description}
                                        </p>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-white/20 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-gold">
                                        <span>{cat.products.length} Products</span>
                                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </Container>
                </section>
            )}

            {/* Filtered Products Grid */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-bold text-navy">
                                Showing {filteredProducts.length} Product Systems
                            </span>
                            {selectedCategory !== 'all' && (
                                <span className="rounded bg-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gold">
                                    {categories.find(c => c.slug === selectedCategory)?.title}
                                </span>
                            )}
                        </div>
                        {(selectedCategory !== 'all' || searchTerm !== '') && (
                            <button
                                type="button"
                                onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
                                className="text-xs font-bold text-gold hover:underline"
                            >
                                Clear Filters
                            </button>
                        )}
                    </div>

                    {filteredProducts.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center text-muted">
                            <ShieldCheck size={40} className="mx-auto text-slate-300 mb-3" />
                            <h3 className="text-lg font-bold text-navy">No products match your criteria</h3>
                            <p className="mt-1 text-sm text-muted">
                                Try searching for terms like &ldquo;curtains&rdquo;, &ldquo;glass&rdquo;, &ldquo;doors&rdquo;, &ldquo;lighting&rdquo;, or &ldquo;panic bar&rdquo;.
                            </p>
                            <button
                                type="button"
                                onClick={() => { setSelectedCategory('all'); setSearchTerm(''); }}
                                className="mt-4 rounded bg-navy px-4 py-2 text-xs font-bold uppercase tracking-wider text-gold hover:bg-blue"
                            >
                                Reset Search
                            </button>
                        </div>
                    ) : (
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.slug} product={product} />
                            ))}
                        </div>
                    )}
                </Container>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </div>
    );
}
