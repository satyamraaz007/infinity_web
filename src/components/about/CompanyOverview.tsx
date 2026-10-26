import { Container } from '@/components/common/Container';

export function CompanyOverview() {
    const stats = [
        { value: '30+', label: 'Years Experience' },
        { value: '500+', label: 'Projects Done' },
        { value: '100+', label: 'Global Clients' },
        { value: '24/7', label: 'Support' },
    ];

    return (
        <section className="bg-white py-16 sm:py-24 lg:py-28 overflow-hidden">
            <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                {/* Left Side: Photo of the Engineer inspecting panel */}
                <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
                    <div className="overflow-hidden rounded-3xl border border-slate-100 shadow-2xl">
                        <img
                            src="/images/about/engineer_inspection_2x.png"
                            alt="Infinity Engineerings technician inspecting fire safety equipment"
                            className="h-[380px] sm:h-[480px] lg:h-[520px] w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
                        />
                    </div>
                </div>

                {/* Right Side: Heading, Description & Stat Cards */}
                <div>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#091D38]">
                        INFINITY ENGINEERINGS
                    </h2>

                    <p className="mt-5 text-sm sm:text-base lg:text-lg leading-relaxed text-slate-600 font-normal">
                        Founded On The Principles Of Technical Mastery And Unwavering Reliability, Infinity Engineerings Has Spent Decades Redefining Fire Safety Standards. We Don't Just Provide Equipment; We Engineer Holistic Safety Ecosystems That Protect The World's Most Critical Infrastructures.
                    </p>

                    {/* 2x2 Grid of Stat Cards */}
                    <div className="mt-8 sm:mt-10 grid grid-cols-2 gap-4 sm:gap-5">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm transition-all duration-300 hover:border-gold/60 hover:shadow-md hover:-translate-y-0.5"
                            >
                                <p className="text-2xl sm:text-3xl font-extrabold text-[#091D38] tracking-tight">
                                    {stat.value}
                                </p>
                                <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
