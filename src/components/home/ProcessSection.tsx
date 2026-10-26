import { MessageSquare, Compass, DraftingCompass, Building2, Clock, Headset } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { processSteps } from '@/data/process';

const iconMap = {
    MessageSquare,
    Compass,
    DraftingCompass,
    Building2,
    Clock,
    Headset,
};

export function ProcessSection() {
    return (
        <section className="bg-[#091D38] py-20 sm:py-28 text-white">
            <Container className="grid gap-12 lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_380px] items-center">
                {/* Left Side: Process Steps */}
                <div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-white/70 mb-12">
                        OUR PROCESS
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-4">
                        {processSteps.map((step) => {
                            const IconComponent = iconMap[step.icon as keyof typeof iconMap] || MessageSquare;

                            return (
                                <div key={step.step} className="flex flex-col items-center text-center">
                                    {/* Circular Icon with Number Badge */}
                                    <div className="relative mb-4 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 bg-navy/60 text-white transition-all duration-300 hover:border-gold hover:text-gold hover:scale-105">
                                        <IconComponent size={28} strokeWidth={1.7} />
                                        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-white text-[11px] font-black text-[#091D38] shadow-md">
                                            {step.step}
                                        </span>
                                    </div>

                                    {/* Step Title */}
                                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white leading-tight">
                                        {step.title}
                                    </h3>

                                    {/* Step Subtitle */}
                                    <p className="mt-1.5 text-[11px] sm:text-xs text-white/65 leading-relaxed max-w-[130px]">
                                        {step.subtitle}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Side: CTA Card */}
                <div className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md p-7 sm:p-9 text-white shadow-2xl flex flex-col justify-between">
                    <div>
                        <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-3">
                            Secure Your Building with Certified Passive Fire Protection
                        </h3>
                        <p className="text-sm text-white/80 leading-relaxed mb-8">
                            Let our experts help you find the right solution for your building.
                        </p>
                    </div>
                    <Link
                        to="/contact"
                        className="w-full rounded-lg bg-white py-3.5 text-center text-sm font-bold text-[#091D38] shadow-md transition-all duration-300 hover:bg-gold hover:text-[#091D38] hover:-translate-y-0.5 block"
                    >
                        Get in Touch
                    </Link>
                </div>
            </Container>
        </section>
    );
}
