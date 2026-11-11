import { ProductFeature } from '@/types/products';
import { IconByName } from '@/components/common/IconByName';
import { Sparkles } from 'lucide-react';

export function ProductFeaturesGrid({
    features,
    productTitle,
}: {
    features: ProductFeature[];
    productTitle: string;
}) {
    return (
        <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
                    <Sparkles size={16} />
                    <span>Engineered Advantages</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-navy">
                    Key Features &amp; Performance Benefits
                </h3>
                <p className="mt-2 text-sm text-muted">
                    Engineered to exceed international life-safety and durability standards, the {productTitle} incorporates industry-leading innovations.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature, idx) => (
                    <div
                        key={feature.title}
                        className="group relative rounded-lg border border-slate-200/90 bg-[#fafbfc] p-6 transition-all duration-300 hover:border-gold hover:bg-white hover:shadow-lg hover:-translate-y-1"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold shadow-md transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-105">
                                <IconByName name={feature.icon} size={22} />
                            </div>
                            <span className="text-[11px] font-bold text-slate-400 group-hover:text-gold transition-colors">
                                0{idx + 1}
                            </span>
                        </div>

                        <h4 className="mt-5 text-base font-bold uppercase tracking-tight text-navy group-hover:text-blue transition-colors">
                            {feature.title}
                        </h4>
                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

