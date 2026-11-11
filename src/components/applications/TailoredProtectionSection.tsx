import { Container } from '@/components/common/Container';
import { Shield, Building2, LifeBuoy, CheckCircle2 } from 'lucide-react';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from '@/components/common/MotionReveal';
import tailoredProtectionImg from '@/assets/images/applications/tailored_protection.jpg';

export function TailoredProtectionSection() {
    return (
        <section className="bg-white py-16 sm:py-24 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
                    {/* Left: Architectural Atrium Lobby Image with scroll reveal and hover shine */}
                    <MotionReveal direction="right" duration={0.8} distance={24}>
                        <div className="group relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/80 bg-slate-100 aspect-[1.08/1] shine-overlay transition-all duration-500 hover:shadow-2xl hover:shadow-navy/15 hover:border-gold/50">
                            <img
                                src={tailoredProtectionImg}
                                alt="Tailored Protection For Every Environment"
                                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-104"
                            />
                        </div>
                    </MotionReveal>

                    {/* Right: Text & 4 Key Metrics with staggered entrance */}
                    <div>
                        <MotionReveal direction="up" delay={0.1} duration={0.65}>
                            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold uppercase tracking-tight text-navy leading-[1.12]">
                                TAILORED PROTECTION<br />FOR EVERY ENVIRONMENT
                            </h2>
                        </MotionReveal>

                        <MotionReveal direction="up" delay={0.2} duration={0.65}>
                            <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
                                Our Team Delivers High-Performance Fire And Smoke Barrier Solutions Across Diverse Architectural Settings. Each System Is Rigorously Tested And Independently Certified To Meet The Strictest Global Standards.
                            </p>
                        </MotionReveal>

                        {/* 4 Stats Grid with Staggered Cascading Reveal and Micro-Interactions */}
                        <MotionStaggerContainer
                            staggerDelay={0.09}
                            className="mt-8 sm:mt-10 grid grid-cols-2 gap-y-7 gap-x-6 sm:gap-x-10"
                        >
                            {/* Stat 1: 25+ */}
                            <MotionStaggerItem>
                                <div className="group flex items-center gap-3.5 sm:gap-4 cursor-default">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:shadow-md">
                                        <Shield size={22} className="stroke-[2.2]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-navy leading-none transition-colors group-hover:text-blue">
                                            25+
                                        </div>
                                        <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                            YEARS IN THE FIELD
                                        </div>
                                    </div>
                                </div>
                            </MotionStaggerItem>

                            {/* Stat 2: 750+ */}
                            <MotionStaggerItem>
                                <div className="group flex items-center gap-3.5 sm:gap-4 cursor-default">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:shadow-md">
                                        <Building2 size={22} className="stroke-[2.2]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-navy leading-none transition-colors group-hover:text-blue">
                                            750+
                                        </div>
                                        <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                            INSTALLATIONS WORLDWIDE
                                        </div>
                                    </div>
                                </div>
                            </MotionStaggerItem>

                            {/* Stat 3: 24/7 */}
                            <MotionStaggerItem>
                                <div className="group flex items-center gap-3.5 sm:gap-4 cursor-default">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:shadow-md">
                                        <LifeBuoy size={22} className="stroke-[2.2]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-navy leading-none transition-colors group-hover:text-blue">
                                            24/7
                                        </div>
                                        <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                            EMERGENCY RESPONSE
                                        </div>
                                    </div>
                                </div>
                            </MotionStaggerItem>

                            {/* Stat 4: 100% */}
                            <MotionStaggerItem>
                                <div className="group flex items-center gap-3.5 sm:gap-4 cursor-default">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm transition-all duration-300 group-hover:bg-gold group-hover:text-navy group-hover:scale-110 group-hover:shadow-md">
                                        <CheckCircle2 size={22} className="stroke-[2.2]" />
                                    </div>
                                    <div>
                                        <div className="text-2xl sm:text-3xl font-bold text-navy leading-none transition-colors group-hover:text-blue">
                                            100%
                                        </div>
                                        <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                            CODE COMPLIANT
                                        </div>
                                    </div>
                                </div>
                            </MotionStaggerItem>
                        </MotionStaggerContainer>
                    </div>
                </div>
            </Container>
        </section>
    );
}
