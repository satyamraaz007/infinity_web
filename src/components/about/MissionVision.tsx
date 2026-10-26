import { Container } from '@/components/common/Container';

export function MissionVision() {
    return (
        <section className="bg-[#071A35] py-20 sm:py-28 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    {/* Card 1: Our Mission */}
                    <div className="rounded-[28px] sm:rounded-3xl bg-white p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:shadow-gold/10 hover:-translate-y-1">
                        {/* Bullseye / Concentric Rings Icon */}
                        <div className="flex h-14 w-14 items-center justify-center text-[#091D38] mb-4 sm:mb-6">
                            <svg className="h-10 w-10 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2">
                                <circle cx="12" cy="12" r="9.5" />
                                <circle cx="12" cy="12" r="5.5" />
                                <circle cx="12" cy="12" r="2" fill="currentColor" />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091D38] mb-4">
                            Our Mission
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                            To Engineer The Most Reliable, Advanced Fire Protection Solutions That Safeguard Human Lives And Global Assets Through Constant Innovation And Technical Excellence.
                        </p>
                    </div>

                    {/* Card 2: Our Vision */}
                    <div className="rounded-[28px] sm:rounded-3xl bg-white p-8 sm:p-12 shadow-2xl transition-all duration-300 hover:shadow-gold/10 hover:-translate-y-1">
                        {/* Eye Icon */}
                        <div className="flex h-14 w-14 items-center justify-center text-[#091D38] mb-4 sm:mb-6">
                            <svg className="h-10 w-10 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                            </svg>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#091D38] mb-4">
                            Our Vision
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-normal">
                            To Become The Universal Benchmark For Safety Engineering, Where Every Building Worldwide Is Equipped With Infinity's Life-Saving Technologies.
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
