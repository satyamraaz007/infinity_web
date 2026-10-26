import { Lightbulb, Globe } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function OurJourney() {
    const milestones = [
        {
            title: 'Founding',
            description: '1994: Established with a vision for smarter fire safety.',
            icon: (
                <svg className="h-7 w-7 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M4 18h16M5 18V9l7-5 7 5v9M10 18v-5h4v5M8 12h8" />
                </svg>
            ),
        },
        {
            title: 'Expansion',
            description: '2005: Regional office openings and service diversification.',
            icon: (
                <svg className="h-7 w-7 text-white stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l2.4 2.4 3.4-.4 1 3.2 3.1 1.4-1 3.2 2 2.8-2 2.8 1 3.2-3.1 1.4-1 3.2-3.4-.4L12 22l-2.4-2.4-3.4.4-1-3.2-3.1-1.4 1-3.2-2-2.8 2-2.8-1-3.2 3.1-1.4 1-3.2 3.4.4L12 2z" />
                    <circle cx="12" cy="12" r="3" />
                </svg>
            ),
        },
        {
            title: 'Innovation',
            description: '2016: Launch of proprietary AI-driven detection systems.',
            icon: <Lightbulb size={26} className="text-white" strokeWidth={1.8} />,
        },
        {
            title: 'Leadership',
            description: '2024: Globally recognized leader in smoke protection.',
            icon: <Globe size={26} className="text-white" strokeWidth={1.8} />,
        },
    ];

    return (
        <section className="bg-white py-16 sm:py-24 border-t border-slate-100 overflow-hidden">
            <Container>
                {/* Heading & Subtitle */}
                <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#091D38]">
                        OUR JOURNEY
                    </h2>
                    <p className="mt-3 text-sm sm:text-base lg:text-lg text-slate-600 font-normal">
                        From A Small Engineering Firm To A Global Leader In Fire Protection.
                    </p>
                </div>

                {/* 4 Milestones */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 text-center">
                    {milestones.map((item) => (
                        <div key={item.title} className="group flex flex-col items-center">
                            {/* Circular Navy Icon Badge */}
                            <div className="flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-[#071A35] text-white shadow-md mb-5 transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-[#091D38] group-hover:shadow-lg">
                                {item.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-bold text-[#091D38] group-hover:text-gold transition-colors">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="mt-2 text-xs sm:text-sm text-slate-500 leading-relaxed max-w-[210px] mx-auto">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
