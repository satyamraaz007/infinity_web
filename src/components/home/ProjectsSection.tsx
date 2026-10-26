import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';
import { projectsData } from '@/data/projects';

export function ProjectsSection() {
    return (
        <section className="bg-white py-16 sm:py-24">
            <Container>
                {/* Header with Eyebrow, Title and View All Projects */}
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end mb-10">
                    <div>
                        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#091D38]/70 mb-2">
                            OUR PROJECTS
                        </p>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#091D38]">
                            COMPLETE PASSIVE FIRE PROTECTION SOLUTIONS
                        </h2>
                    </div>
                    <Link
                        to="/applications"
                        className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-[#091D38] transition-colors hover:text-gold whitespace-nowrap shrink-0 group"
                    >
                        View All Projects{' '}
                        <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* 6 Project Cards Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
                    {projectsData.map((project) => (
                        <article key={project.title} className="group flex flex-col">
                            <div className="overflow-hidden rounded-xl shadow-sm">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-36 sm:h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    loading="lazy"
                                />
                            </div>
                            <h3 className="mt-3 text-sm sm:text-[15px] font-bold text-[#091D38] leading-snug line-clamp-2">
                                {project.title}
                            </h3>
                            <div className="mt-1.5 flex items-center text-red">
                                <MapPin size={13} className="shrink-0 fill-red text-red" />
                                <span className="ml-1 text-xs font-semibold text-red">
                                    {project.location}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </Container>
        </section>
    );
}
