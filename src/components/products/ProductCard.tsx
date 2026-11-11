import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { ProductItem } from '@/types/products';

export function ProductCard({ product }: { product: ProductItem }) {
    const primarySpec = product.quickSpecs.find(s => s.highlight) || product.quickSpecs[0];

    return (
        <div className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-sm transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-gold hover:shadow-2xl hover:shadow-navy/10">
            {/* Image Header with Specular Shine and Badge */}
            <div className="shine-overlay relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                    src={product.heroImage}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-106 group-hover:brightness-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />

                {/* Category & Rating Badges */}
                <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    <span className="rounded bg-navy/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm border border-white/20 shadow-sm">
                        {product.categoryTitle}
                    </span>
                </div>

                {product.badge && (
                    <div className="absolute bottom-3 left-3 right-3">
                        <span className="inline-flex items-center gap-1.5 rounded bg-gold/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-navy shadow-md">
                            <ShieldCheck size={13} />
                            <span className="truncate">{product.badge}</span>
                        </span>
                    </div>
                )}
            </div>

            {/* Card Content */}
            <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-navy transition-colors duration-200 group-hover:text-blue">
                        {product.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted line-clamp-2">
                        {product.tagline}
                    </p>

                    {/* Quick Specs Highlight Bar */}
                    {primarySpec && (
                        <div className="mt-4 rounded-lg bg-paper p-3 border border-slate-200/80 transition-colors duration-300 group-hover:border-gold/40 group-hover:bg-gold/5">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block">
                                {primarySpec.label}
                            </span>
                            <span className="text-xs font-bold text-navy truncate block">
                                {primarySpec.value}
                            </span>
                        </div>
                    )}
                </div>

                {/* Footer Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                        to={`/products/${product.categorySlug}/${product.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-navy group-hover:text-gold transition-colors duration-200"
                    >
                        <span>Full Specifications</span>
                        <ArrowRight
                            size={14}
                            className="transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
