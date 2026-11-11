import { Container } from '@/components/common/Container';
import { CheckCircle2, Building2, Globe, Zap, FileText, Clock } from 'lucide-react';

const advantageItems = [
    {
        title: 'GLOBALLY CERTIFIED',
        description: 'Products tested and approved to BS, EN, UL, and AS standards.',
        icon: CheckCircle2,
    },
    {
        title: 'BESPOKE DESIGN',
        description: "Every solution custom-engineered to your building's geometry.",
        icon: Building2,
    },
    {
        title: 'PASSIVE FIRE SYSTEMS',
        description: 'Autonomous activation with no power or human intervention required.',
        icon: Globe,
    },
    {
        title: 'RAPID DEPLOYMENT',
        description: 'Streamlined installation to minimise site downtime and disruption.',
        icon: Zap,
    },
    {
        title: 'REGULATORY ALIGNMENT',
        description: 'Full compliance with local and international building codes.',
        icon: FileText,
    },
    {
        title: 'LIFETIME SERVICE',
        description: 'Ongoing maintenance, inspection, and 24/7 technical assistance.',
        icon: Clock,
    },
];

export function InfinityAdvantageSection() {
    return (
        <section className="bg-[#091d38] py-20 sm:py-28 text-white relative">
            <Container>
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-white/80 mb-3">
                        THE INFINITY ADVANTAGE
                    </p>
                    <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight">
                        Engineering Excellence. Uncompromising Safety.
                    </h2>
                </div>

                {/* 6 Advantage Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {advantageItems.map(item => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={item.title}
                                className="group rounded-xl border border-white/10 bg-[#0d274c]/50 p-8 sm:p-10 text-center transition-all duration-300 hover:border-gold/50 hover:bg-[#0d274c]/85 hover:-translate-y-1 shadow-inner"
                            >
                                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:text-gold">
                                    <Icon size={34} className="stroke-[1.75]" />
                                </div>
                                <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-white mb-2.5">
                                    {item.title}
                                </h3>
                                <p className="text-xs sm:text-sm leading-relaxed text-white/70 max-w-xs mx-auto">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
