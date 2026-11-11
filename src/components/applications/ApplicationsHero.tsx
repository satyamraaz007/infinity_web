import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function ApplicationsHero() {
    return (
        <section className="relative flex min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] items-center overflow-hidden bg-navy text-white">
            {/* Background Image with Dark Vignette */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=2000&q=85"
                    alt="Advanced Fire Safety Systems Architecture"
                    className="h-full w-full object-cover object-center brightness-60 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Hero Content */}
            <Container className="relative py-16 sm:py-24">
                <div className="max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                        Advanced Fire<br />Safety Systems
                    </h1>

                    <p className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200">
                        Purpose-Built Fire And Smoke Curtain Technology For Modern Architecture. Safeguarding Occupants, Structures, And Assets With Precision Engineering.
                    </p>

                    <div className="mt-8">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2.5 rounded border border-gold/70 bg-[#091d38]/90 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-blue hover:border-gold hover:-translate-y-0.5"
                        >
                            <span>CONTACT US</span>
                            <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
