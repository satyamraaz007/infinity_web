import { useState } from 'react';
import { Phone, Mail, FileDown, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import { company } from '@/data/company';

export function ProductEnquiryCTA({
    productTitle,
    categoryTitle,
}: {
    productTitle: string;
    categoryTitle: string;
}) {
    const [submitted, setSubmitted] = useState(false);
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: 'Commercial Tower',
        notes: `Interested in technical specifications, quotation, and submittal drawings for ${productTitle}.`,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="rfq-section" className="overflow-hidden rounded-2xl bg-gradient-to-br from-navy via-[#0c2445] to-navy p-8 sm:p-12 text-white shadow-xl border border-gold/40">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                {/* Left Info Column */}
                <div>
                    <div className="inline-flex items-center gap-2 rounded bg-gold/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-gold border border-gold/40">
                        <ShieldCheck size={14} />
                        <span>Engineering Advisory &amp; Submittals</span>
                    </div>

                    <h3 className="mt-4 text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-tight">
                        Request Specification &amp; Pricing for {productTitle}
                    </h3>

                    <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                        Our certified technical engineers assist architects, MEP consultants, and main contractors with tailored schedule submittals, BIM models, and compliance certifications.
                    </p>

                    <div className="mt-8 space-y-4">
                        <a
                            href={`tel:${company.phone}`}
                            className="flex items-center gap-3.5 text-sm sm:text-base text-white hover:text-gold transition-colors font-semibold"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red text-white shadow-md">
                                <Phone size={18} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-normal">Direct Technical Line</div>
                                <span>{company.phone}</span>
                            </div>
                        </a>

                        <a
                            href={`mailto:${company.salesEmail}`}
                            className="flex items-center gap-3.5 text-sm sm:text-base text-white hover:text-gold transition-colors font-semibold"
                        >
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue text-white shadow-md">
                                <Mail size={18} />
                            </div>
                            <div>
                                <div className="text-xs text-slate-400 font-normal">Estimating &amp; Tender Enquiries</div>
                                <span className="break-all">{company.salesEmail}</span>
                            </div>
                        </a>

                        <div className="flex items-center gap-3.5 text-sm text-slate-300 pt-2 border-t border-white/10">
                            <FileDown size={18} className="text-gold shrink-0" />
                            <span>Downloadable CAD details, CSI MasterFormat specs &amp; test reports provided upon request.</span>
                        </div>
                    </div>
                </div>

                {/* Right Form Card */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
                    {submitted ? (
                        <div className="py-8 text-center animate-fadeIn">
                            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">
                                <CheckCircle2 size={32} />
                            </div>
                            <h4 className="mt-4 text-xl font-bold text-white">Inquiry Received</h4>
                            <p className="mt-2 text-xs sm:text-sm text-slate-300">
                                Thank you for your inquiry regarding <strong>{productTitle}</strong>. Our engineering estimation specialist will reach out within 24 hours.
                            </p>
                            <button
                                type="button"
                                onClick={() => setSubmitted(false)}
                                className="mt-6 rounded border border-gold bg-transparent px-5 py-2 text-xs font-bold uppercase tracking-wider text-gold hover:bg-gold hover:text-navy transition-all"
                            >
                                Submit Another Request
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <h4 className="text-base font-bold uppercase tracking-wider text-gold">
                                Project Specification Request
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                                        Your Name *
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        value={formState.name}
                                        onChange={e => setFormState({ ...formState, name: e.target.value })}
                                        placeholder="Full name"
                                        className="w-full rounded border border-white/20 bg-navy/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-gold focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                                        Business Email *
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        value={formState.email}
                                        onChange={e => setFormState({ ...formState, email: e.target.value })}
                                        placeholder="name@company.com"
                                        className="w-full rounded border border-white/20 bg-navy/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-gold focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                                        Contact Phone *
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        value={formState.phone}
                                        onChange={e => setFormState({ ...formState, phone: e.target.value })}
                                        placeholder="+91 Phone number"
                                        className="w-full rounded border border-white/20 bg-navy/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-gold focus:outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                                        Company / Firm
                                    </label>
                                    <input
                                        type="text"
                                        value={formState.company}
                                        onChange={e => setFormState({ ...formState, company: e.target.value })}
                                        placeholder="Architecture / Contracting firm"
                                        className="w-full rounded border border-white/20 bg-navy/80 px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:border-gold focus:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1">
                                    Project Requirements / Message
                                </label>
                                <textarea
                                    rows={3}
                                    value={formState.notes}
                                    onChange={e => setFormState({ ...formState, notes: e.target.value })}
                                    className="w-full rounded border border-white/20 bg-navy/80 px-3.5 py-2 text-xs text-white placeholder-slate-400 focus:border-gold focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center gap-2 rounded border border-gold bg-red py-3 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-red/90"
                            >
                                <Send size={14} />
                                <span>Request Technical Specification</span>
                            </button>
                            <p className="text-[10px] text-center text-slate-400">
                                Category: {categoryTitle} • Confidential commercial inquiry
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

