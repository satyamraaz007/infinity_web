import { ArrowRight, Zap, ShieldCheck, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { industriesData, whyChooseData } from '@/data/industries';

export function IndustriesSection() {
    return (
        <section className="bg-[#f8fafc] py-16 sm:py-24">
            <Container className="grid gap-8 lg:grid-cols-[1.5fr_1fr] items-stretch">
                {/* Left Side: Industries Grid */}
                <div className="flex flex-col justify-between">
                    <div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#091D38] mb-8">
                            INDUSTRIES WE SERVE
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {industriesData.map((item) => (
                                <div
                                    key={item.title}
                                    className="group rounded-lg border border-slate-100 bg-white p-2.5 sm:p-3 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                                >
                                    <div className="overflow-hidden rounded-md mb-2.5">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="h-24 sm:h-28 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-xs sm:text-sm font-bold text-[#091D38] transition-colors group-hover:text-blue leading-tight">
                                        {item.title}
                                    </h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-8">
                        <Link
                            to="/applications"
                            className="inline-flex items-center gap-2 rounded-md border border-gold/40 bg-[#091D38] px-6 py-3.5 text-xs sm:text-sm font-bold tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-blue hover:border-gold hover:-translate-y-0.5 uppercase"
                        >
                            VIEW ALL INDUSTRIES <ArrowRight size={16} />
                        </Link>
                    </div>
                </div>

                {/* Right Side: Why Choose Infinity Card */}
                <div className="rounded-2xl sm:rounded-3xl bg-[#091D38] p-8 sm:p-10 text-white shadow-xl flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
                        Why Choose Infinity
                    </h3>
                    <div className="space-y-7">
                        {whyChooseData.map((item) => {
                            const IconComponent =
                                item.icon === 'Zap'
                                    ? Zap
                                    : item.icon === 'ShieldCheck'
                                    ? ShieldCheck
                                    : SlidersHorizontal;

                            return (
                                <div key={item.title} className="flex items-start gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white">
                                        <IconComponent size={22} strokeWidth={1.8} />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Container>
        </section>
    );
}
