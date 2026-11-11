import { ProductApplicationItem } from '@/types/products';
import { Building2 } from 'lucide-react';

export function ProductApplicationsGrid({
    applications,
    productTitle,
}: {
    applications: ProductApplicationItem[];
    productTitle: string;
}) {
    if (!applications || applications.length === 0) return null;

    return (
        <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
                    <Building2 size={16} />
                    <span>Deployment Environments</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-navy">
                    Typical Applications &amp; Sectors
                </h3>
                <p className="mt-2 text-sm text-muted">
                    Architectural and industrial environments where {productTitle} delivers proven, code-compliant performance.
                </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {applications.map(app => (
                    <div
                        key={app.title}
                        className="group relative overflow-hidden rounded-lg border border-slate-200 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-xl"
                    >
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src={app.image}
                                alt={app.title}
                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-90 transition-opacity group-hover:opacity-95" />
                        
                        <div className="absolute bottom-0 inset-x-0 p-5">
                            <h4 className="text-base font-bold uppercase tracking-tight text-white group-hover:text-gold transition-colors">
                                {app.title}
                            </h4>
                            <p className="mt-1.5 text-xs leading-relaxed text-white/80 line-clamp-2">
                                {app.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

