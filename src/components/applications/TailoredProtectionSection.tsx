import { Container } from '@/components/common/Container';
import { Shield, Building2, LifeBuoy, CheckCircle2 } from 'lucide-react';
import tailoredProtectionImg from '@/assets/images/applications/tailored_protection.jpg';

export function TailoredProtectionSection() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
                    {/* Left: Architectural Atrium Lobby Image */}
                    <div className="relative overflow-hidden rounded-2xl shadow-xl border border-slate-200/80 bg-slate-100 aspect-[1.08/1]">
                        <img
                            src={tailoredProtectionImg}
                            alt="Tailored Protection For Every Environment"
                            className="h-full w-full object-cover object-center"
                        />
                    </div>

                    {/* Right: Text & 4 Key Metrics */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold uppercase tracking-tight text-navy leading-[1.12]">
                            TAILORED PROTECTION<br />FOR EVERY ENVIRONMENT
                        </h2>

                        <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-600">
                            Our Team Delivers High-Performance Fire And Smoke Barrier Solutions Across Diverse Architectural Settings. Each System Is Rigorously Tested And Independently Certified To Meet The Strictest Global Standards.
                        </p>

                        {/* 4 Stats Grid */}
                        <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-y-7 gap-x-6 sm:gap-x-10">
                            {/* Stat 1: 25+ */}
                            <div className="flex items-center gap-3.5 sm:gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm">
                                    <Shield size={22} className="stroke-[2.2]" />
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-navy leading-none">
                                        25+
                                    </div>
                                    <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        YEARS IN THE FIELD
                                    </div>
                                </div>
                            </div>

                            {/* Stat 2: 750+ */}
                            <div className="flex items-center gap-3.5 sm:gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm">
                                    <Building2 size={22} className="stroke-[2.2]" />
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-navy leading-none">
                                        750+
                                    </div>
                                    <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        INSTALLATIONS WORLDWIDE
                                    </div>
                                </div>
                            </div>

                            {/* Stat 3: 24/7 */}
                            <div className="flex items-center gap-3.5 sm:gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm">
                                    <LifeBuoy size={22} className="stroke-[2.2]" />
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-navy leading-none">
                                        24/7
                                    </div>
                                    <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        EMERGENCY RESPONSE
                                    </div>
                                </div>
                            </div>

                            {/* Stat 4: 100% */}
                            <div className="flex items-center gap-3.5 sm:gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-navy text-white shadow-sm">
                                    <CheckCircle2 size={22} className="stroke-[2.2]" />
                                </div>
                                <div>
                                    <div className="text-2xl sm:text-3xl font-bold text-navy leading-none">
                                        100%
                                    </div>
                                    <div className="mt-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-500">
                                        CODE COMPLIANT
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}

