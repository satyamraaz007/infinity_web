import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function SpecifySystemSection() {
    return (
        <section className="relative overflow-hidden bg-navy py-20 sm:py-28 text-center text-white">
            {/* Background Night City Skyline Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=2000&q=80"
                    alt="City Skyline Night"
                    className="h-full w-full object-cover object-center brightness-40 contrast-125"
                />
                <div className="absolute inset-0 bg-[#07182c]/85" />
            </div>

            {/* Content Container */}
            <Container className="relative">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight">
                        Specify the Right System Today
                    </h2>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-slate-300 max-w-2xl mx-auto">
                        Connect With Our Fire Engineering Team To Discuss Your Project Requirements And Receive A Tailored Specification.
                    </p>

                    <div className="mt-8 sm:mt-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2.5 rounded border border-blue-400/50 bg-[#0d2b52] px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white shadow-2xl transition-all duration-300 hover:bg-blue hover:border-gold hover:-translate-y-0.5"
                        >
                            <span>SCHEDULE CONSULTATION</span>
                            <ArrowRight size={15} />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}

