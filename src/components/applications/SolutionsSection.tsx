import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

import compartmentBarriersImg from '@/assets/images/applications/compartment_barriers.jpg';
import stairwellsEscalatorsImg from '@/assets/images/applications/stairwells_escalators.jpg';
import elevatorLobbiesImg from '@/assets/images/applications/elevator_lobbies.jpg';
import refugeAreasImg from '@/assets/images/applications/refuge_areas.jpg';
import atriumsLobbiesImg from '@/assets/images/applications/atriums_lobbies.jpg';
import wallOpeningsImg from '@/assets/images/applications/wall_openings.jpg';
import egressCorridorImg from '@/assets/images/applications/egress_corridor.jpg';
import perimeterDefenceImg from '@/assets/images/applications/perimeter_defence.jpg';

interface SolutionItem {
    title: string;
    description: string;
    image: string;
    link: string;
}

const solutionsData: SolutionItem[] = [
    {
        title: 'Compartment Barriers',
        description: 'Subdivide floor plates into isolated fire zones automatically.',
        image: compartmentBarriersImg,
        link: '/products/fire-smoke-protection/fire-curtains',
    },
    {
        title: 'Stairwells & Escalators',
        description: 'Seal vertical shafts to prevent smoke and fire migration.',
        image: stairwellsEscalatorsImg,
        link: '/products/fire-smoke-protection/fire-curtains',
    },
    {
        title: 'Elevator Lobbies',
        description: 'Shield lift cores and lobbies from smoke infiltration on every floor.',
        image: elevatorLobbiesImg,
        link: '/products/fire-smoke-protection/smoke-curtains',
    },
    {
        title: 'Refuge Areas & Safe Havens',
        description: 'Establish protected zones for safe occupant assembly during events.',
        image: refugeAreasImg,
        link: '/products/fire-rated-doors/metal-fire-rated-doors',
    },
    {
        title: 'Atriums & Grand Lobbies',
        description: 'Contain smoke spread in expansive multi-storey void spaces.',
        image: atriumsLobbiesImg,
        link: '/products/fire-smoke-protection/smoke-curtains',
    },
    {
        title: 'Wall Openings',
        description: 'Seal unprotected openings with deployable fire-rated barriers.',
        image: wallOpeningsImg,
        link: '/products/fire-smoke-protection/fire-curtains',
    },
    {
        title: 'Egress & Corridor Protection',
        description: 'Maintain clear evacuation paths with rapid-deploying curtains.',
        image: egressCorridorImg,
        link: '/products/door-hardware-security/panic-bars-exit-devices',
    },
    {
        title: 'Perimeter Defence',
        description: 'Guard external façades against radiant heat and flame spread.',
        image: perimeterDefenceImg,
        link: '/products/fire-rated-glass/fire-rated-glazing',
    },
];

export function SolutionsSection() {
    return (
        <section id="solutions" className="bg-[#f8f9fb] py-16 sm:py-24 border-t border-slate-200/80">
            <Container>
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold uppercase tracking-tight text-navy">
                        SOLUTIONS
                    </h2>
                    <p className="mt-2 text-base text-slate-600 font-normal">
                        Purpose-Built For Every Application
                    </p>
                </div>

                {/* 8 Solutions Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutionsData.map(solution => (
                        <div
                            key={solution.title}
                            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:border-gold/60 hover:-translate-y-1"
                        >
                            {/* Card Image */}
                            <div className="aspect-[1.46/1] overflow-hidden bg-slate-100">
                                <img
                                    src={solution.image}
                                    alt={solution.title}
                                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>

                            {/* Card Body */}
                            <div className="flex flex-1 flex-col justify-between p-6">
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-navy group-hover:text-blue transition-colors">
                                        {solution.title}
                                    </h3>
                                    <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                                        {solution.description}
                                    </p>
                                </div>

                                <div className="mt-6 pt-2">
                                    <Link
                                        to={solution.link}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e50019] group-hover:text-gold transition-colors"
                                    >
                                        <span>READ MORE</span>
                                        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
