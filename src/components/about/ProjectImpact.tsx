import { Container } from '@/components/common/Container';

export function ProjectImpact() {
    const projects = [
        {
            title: 'Global Airport Hub',
            description: 'Full Smoke Management And Fire Curtain Installation For A 50M+ Passenger Terminal.',
            image: '/images/about/projects/global_airport.png',
            alt: 'Global airport terminal fire protection installation',
        },
        {
            title: 'Majestic Heights Tower',
            description: 'Implementation Of Advanced Water Mist Systems Across 80 Floors Of Premium Real Estate.',
            image: '/images/about/projects/majestic_heights.png',
            alt: 'Majestic Heights luxury tower exterior',
        },
        {
            title: 'PharmaCorp Global',
            description: 'Explosion-Proof Safety Infrastructure For A Cutting-Edge Laboratory Facility.',
            image: '/images/about/projects/pharmacorp.png',
            alt: 'PharmaCorp cutting-edge pharmaceutical cleanroom laboratory',
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-24 border-t border-slate-100 overflow-hidden">
            <Container>
                {/* Heading & Subtitle */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#091D38]">
                        PROJECT IMPACT
                    </h2>
                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
                        Safeguarding Iconic Structures And Critical Industrial Sites Globally.
                    </p>
                </div>

                {/* 3 Project Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className="group rounded-[26px] bg-white p-4 sm:p-5 shadow-sm border border-slate-100/90 transition-all duration-300 hover:shadow-2xl hover:border-gold/40 hover:-translate-y-1"
                        >
                            {/* Card Image with Rounded Corners */}
                            <div className="relative aspect-[295/205] w-full overflow-hidden rounded-2xl bg-slate-100">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="pt-5 pb-2 px-1">
                                <h3 className="text-lg sm:text-xl font-bold text-[#091D38] transition-colors duration-300 group-hover:text-gold">
                                    {project.title}
                                </h3>
                                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
