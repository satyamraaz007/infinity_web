import { useParams, Link, Navigate } from 'react-router-dom';
import { getCategoryBySlug, getAllCategories } from '@/data/products';
import { Container } from '@/components/common/Container';
import { ProductCard } from '@/components/products/ProductCard';
import { ContactCTA } from '@/components/home/ContactCTA';
import { ChevronRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { IconByName } from '@/components/common/IconByName';

export function CategoryPage() {
    const { categorySlug } = useParams<{ categorySlug: string }>();
    const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
    const allCategories = getAllCategories();

    if (!category) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className="bg-[#f5f6f8]">
            {/* Breadcrumb Bar */}
            <div className="border-b border-slate-200 bg-white py-3">
                <Container className="flex items-center gap-1.5 text-xs text-muted">
                    <Link to="/" className="hover:text-navy transition-colors font-medium">Home</Link>
                    <ChevronRight size={13} className="text-slate-400" />
                    <Link to="/products" className="hover:text-navy transition-colors font-medium">Products</Link>
                    <ChevronRight size={13} className="text-slate-400" />
                    <span className="font-bold text-navy">{category.title}</span>
                </Container>
            </div>

            {/* Category Hero Banner */}
            <section className="relative overflow-hidden bg-navy py-16 sm:py-24 text-white">
                <img
                    src={category.heroImage}
                    alt={category.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />

                <Container className="relative">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center gap-2 rounded bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold border border-gold/40 mb-4">
                            <IconByName name={category.icon} size={15} />
                            <span>{category.eyebrow}</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
                            {category.title}
                        </h1>

                        <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-300">
                            {category.description}
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-xs font-semibold text-white/90">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle2 size={16} className="text-gold" />
                                <span>{category.products.length} Engineered Sub-Systems</span>
                            </span>
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck size={16} className="text-gold" />
                                <span>Fully Certified to Global Life-Safety Standards</span>
                            </span>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Quick Category Switcher Tabs */}
            <div className="border-b border-slate-200 bg-white sticky top-[86px] z-20 shadow-sm">
                <Container className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
                    <Link
                        to="/products"
                        className="shrink-0 rounded px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-muted hover:bg-slate-100 hover:text-navy transition-colors"
                    >
                        All Categories
                    </Link>
                    {allCategories.map(cat => {
                        const isActive = cat.slug === category.slug;
                        return (
                            <Link
                                key={cat.slug}
                                to={`/products/${cat.slug}`}
                                className={`shrink-0 rounded px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-all ${
                                    isActive
                                        ? 'bg-navy text-gold shadow-sm'
                                        : 'text-muted hover:bg-slate-100 hover:text-navy'
                                }`}
                            >
                                {cat.title}
                            </Link>
                        );
                    })}
                </Container>
            </div>

            {/* Products Grid Section */}
            <section className="py-16 sm:py-20">
                <Container>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
                        <div>
                            <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                                Specialized Sub-Systems
                            </span>
                            <h2 className="text-3xl font-bold uppercase tracking-tight text-navy mt-1">
                                Products in {category.title}
                            </h2>
                        </div>
                        <p className="text-xs sm:text-sm text-muted max-w-md">
                            Select a product below to review technical specifications, testing certifications, real-world applications, and engineering FAQ.
                        </p>
                    </div>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {category.products.map(product => (
                            <ProductCard key={product.slug} product={product} />
                        ))}
                    </div>
                </Container>
            </section>

            {/* Contact CTA */}
            <ContactCTA />
        </div>
    );
}
