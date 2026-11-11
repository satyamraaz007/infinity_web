import { ProductCertification } from '@/types/products';
import { Award, CheckCircle2 } from 'lucide-react';

export function ProductCertifications({
    certifications,
    productTitle,
}: {
    certifications: ProductCertification[];
    productTitle: string;
}) {
    if (!certifications || certifications.length === 0) return null;

    return (
        <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
                    <Award size={16} />
                    <span>Compliance &amp; Accredited Testing</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-navy">
                    Third-Party Certifications &amp; Standards
                </h3>
                <p className="mt-2 text-sm text-muted">
                    Rigorous third-party lab testing guarantees that every {productTitle} assembly conforms to international statutory building codes.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {certifications.map(cert => (
                    <div
                        key={cert.code}
                        className="rounded-lg border border-slate-200 bg-[#fafbfc] p-5 transition-all hover:border-gold hover:bg-white hover:shadow-md"
                    >
                        <div className="flex items-center justify-between">
                            <span className="rounded bg-navy px-2.5 py-1 text-xs font-bold tracking-wider text-gold">
                                {cert.code}
                            </span>
                            <CheckCircle2 size={18} className="text-emerald-600" />
                        </div>
                        <h4 className="mt-3 text-sm font-bold text-navy">
                            {cert.standard}
                        </h4>
                        <div className="mt-1 text-xs font-semibold text-blue">
                            Audited by: {cert.body}
                        </div>
                        <p className="mt-2 text-xs text-muted leading-relaxed">
                            {cert.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

