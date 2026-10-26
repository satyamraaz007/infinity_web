import { Container } from '@/components/common/Container';

export function EngineeringExcellence() {
    return (
        <section className="bg-white py-16 sm:py-24 border-t border-slate-100 overflow-hidden">
            <Container>
                {/* Heading & Subtitle */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#091D38]">
                        ENGINEERING EXCELLENCE
                    </h2>
                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
                        Our End-To-End Capabilities Ensure No Detail Is Overlooked In Your Safety Strategy.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
                    {/* Left Column (2/3 width on desktop): Top Wide Card + Bottom Two Cards */}
                    <div className="lg:col-span-2 flex flex-col gap-5 sm:gap-6">
                        {/* 1. Precision Design (Wide Card) */}
                        <div className="group relative h-[250px] sm:h-[280px] lg:h-[260px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 transition-all duration-500 hover:shadow-2xl">
                            <img
                                src="/images/about/excellence/precision_design.png"
                                alt="Engineers reviewing precision blueprints"
                                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                            {/* Card Content at Bottom Left */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-gold">
                                    Precision Design
                                </h3>
                                <p className="mt-1 text-xs sm:text-sm text-white/85 font-normal leading-relaxed max-w-md">
                                    Custom-Engineered Blueprints For Complex Industrial Layouts.
                                </p>
                            </div>
                        </div>

                        {/* Bottom Row: 2 Cards Side-by-Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                            {/* 2. Seamless Installation */}
                            <div className="group relative h-[230px] sm:h-[250px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 transition-all duration-500 hover:shadow-2xl">
                                <img
                                    src="/images/about/excellence/seamless_installation.png"
                                    alt="Industrial fire suppression installation"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-gold">
                                        Seamless Installation
                                    </h3>
                                    <p className="mt-1 text-xs sm:text-sm text-white/85 font-normal leading-relaxed">
                                        Certified Field Engineers Ensuring Flawless Deployment.
                                    </p>
                                </div>
                            </div>

                            {/* 3. Integrity Maintenance */}
                            <div className="group relative h-[230px] sm:h-[250px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 transition-all duration-500 hover:shadow-2xl">
                                <img
                                    src="/images/about/excellence/integrity_maintenance.png"
                                    alt="Engineers performing integrity maintenance"
                                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-gold">
                                        Integrity Maintenance
                                    </h3>
                                    <p className="mt-1 text-xs sm:text-sm text-white/85 font-normal leading-relaxed">
                                        24/7 Monitoring And Predictive Maintenance Protocols.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (1/3 width, full height spanning card): 4. Advanced Manufacturing */}
                    <div className="group relative h-[300px] sm:h-[380px] lg:h-full min-h-[260px] w-full rounded-3xl overflow-hidden shadow-md border border-slate-100 transition-all duration-500 hover:shadow-2xl">
                        <img
                            src="/images/about/excellence/advanced_manufacturing.png"
                            alt="Industrial manufacturing facility"
                            className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10">
                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide transition-colors duration-300 group-hover:text-gold">
                                Advanced Manufacturing
                            </h3>
                            <p className="mt-1 text-xs sm:text-sm text-white/85 font-normal leading-relaxed max-w-xs">
                                In-House Production With Global Grade Quality Control.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
