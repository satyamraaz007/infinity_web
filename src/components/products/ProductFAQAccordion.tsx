import { useState } from 'react';
import { ProductFAQ } from '@/types/products';
import { HelpCircle, ChevronDown } from 'lucide-react';

export function ProductFAQAccordion({
    faqs,
    productTitle,
}: {
    faqs: ProductFAQ[];
    productTitle: string;
}) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (idx: number) => {
        setOpenIndex(prev => (prev === idx ? null : idx));
    };

    if (!faqs || faqs.length === 0) return null;

    return (
        <section className="rounded-xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm">
            <div className="max-w-2xl mb-8">
                <div className="flex items-center gap-2 text-gold text-xs font-bold uppercase tracking-widest mb-2">
                    <HelpCircle size={16} />
                    <span>Frequently Asked Questions</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-navy">
                    Technical &amp; Specification FAQ
                </h3>
                <p className="mt-2 text-sm text-muted">
                    Clear answers to frequent engineering, procurement, and architectural queries regarding {productTitle}.
                </p>
            </div>

            <div className="space-y-3.5">
                {faqs.map((faq, idx) => {
                    const isOpen = openIndex === idx;
                    return (
                        <div
                            key={faq.question}
                            className={`rounded-lg border transition-all duration-200 ${
                                isOpen ? 'border-gold/80 bg-[#fafbfc] shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                            }`}
                        >
                            <button
                                type="button"
                                onClick={() => toggle(idx)}
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between p-5 text-left transition-colors"
                            >
                                <span className="text-sm sm:text-base font-bold text-navy pr-4">
                                    {faq.question}
                                </span>
                                <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                                        isOpen
                                            ? 'border-gold bg-gold text-navy rotate-180'
                                            : 'border-slate-200 bg-paper text-slate-500'
                                    }`}
                                >
                                    <ChevronDown size={16} />
                                </div>
                            </button>

                            {isOpen && (
                                <div className="border-t border-slate-100 px-5 pb-5 pt-3">
                                    <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

