import { ProductItem } from '@/types/products';
import { ProductCard } from './ProductCard';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function RelatedProducts({
    products,
    categoryTitle,
    categorySlug,
}: {
    products: ProductItem[];
    categoryTitle: string;
    categorySlug: string;
}) {
    if (!products || products.length === 0) return null;

    return (
        <section className="mt-16">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                        Complementary Solutions
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-navy mt-1">
                        Related Products in {categoryTitle}
                    </h3>
                </div>
                <Link
                    to={`/products/${categorySlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-navy hover:text-gold transition-colors"
                >
                    <span>View All {categoryTitle}</span>
                    <ArrowRight size={14} />
                </Link>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map(product => (
                    <ProductCard key={product.slug} product={product} />
                ))}
            </div>
        </section>
    );
}

