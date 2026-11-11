import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { motion } from 'framer-motion';

export function ApplicationsHero() {
    return (
        <section className="relative flex min-h-[520px] sm:min-h-[580px] lg:min-h-[640px] items-center overflow-hidden bg-navy text-white">
            {/* Background Image with slow cinematic breathe */}
            <motion.div
                initial={{ scale: 1.08, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=2000&q=85"
                    alt="Advanced Fire Safety Systems Architecture"
                    className="h-full w-full object-cover object-center brightness-60 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            {/* Hero Content with staggered professional reveals */}
            <Container className="relative py-16 sm:py-24">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]"
                    >
                        Advanced Fire<br />Safety Systems
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-5 text-sm sm:text-base leading-relaxed text-slate-200"
                    >
                        Purpose-Built Fire And Smoke Curtain Technology For Modern Architecture. Safeguarding Occupants, Structures, And Assets With Precision Engineering.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8"
                    >
                        <Link
                            to="/contact"
                            className="group btn-shimmer inline-flex items-center gap-2.5 rounded border border-gold/70 bg-[#091d38]/90 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-xl backdrop-blur-sm transition-all duration-300 hover:bg-blue hover:border-gold hover:-translate-y-0.5 hover:shadow-gold/20"
                        >
                            <span>CONTACT US</span>
                            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                        </Link>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
