import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { certificationsData, type CertificationItem } from '@/data/certifications';

export function CertificationsSection() {
    const [isPaused, setIsPaused] = useState(false);
    const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Quadruple items to make infinite seamless circular marquee scroll
    const marqueeItems = [...certificationsData, ...certificationsData, ...certificationsData, ...certificationsData];

    const handleScroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = 280;
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section 
            id="certifications-partnerships" 
            className="relative bg-[#F8F9FA] py-16 sm:py-24 border-y border-slate-200/80 overflow-hidden"
            aria-label="Certifications and Partnerships"
        >
            {/* Background subtle ambient pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60" />

            <Container className="relative">
                {/* Heading same as in reference image */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#091D38]/60 mb-2">
                        Accreditations &amp; Global Standards
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#091D38] sm:tracking-wide">
                        CERTIFICATIONS &amp; PARTNERSHIPS
                    </h2>
                    <div className="mx-auto mt-3 h-1 w-16 bg-gold rounded-full" />
                    <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        Tested, approved, and accredited by premier passive fire protection, life-safety, and quality assurance authorities worldwide.
                    </p>
                </div>

                {/* Navigation Chevrons Bar */}
                <div className="flex items-center justify-end mb-4 px-2">
                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={() => handleScroll('left')}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-gold hover:text-navy hover:border-gold hover:scale-105 active:scale-95"
                            aria-label="Previous certifications"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            type="button"
                            onClick={() => handleScroll('right')}
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all hover:bg-gold hover:text-navy hover:border-gold hover:scale-105 active:scale-95"
                            aria-label="Next certifications"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Circular Carousel Slider Wrapper */}
                <div 
                    className="relative rounded-3xl bg-white/70 p-6 sm:p-8 backdrop-blur-sm border border-slate-200/90 shadow-sm overflow-hidden"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Left & Right gradient edge fades */}
                    <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-white via-white/80 to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-white via-white/80 to-transparent" />

                    {/* Infinite Marquee Track of Circular Badges */}
                    <div
                        ref={scrollContainerRef}
                        className="overflow-x-auto scrollbar-none py-4"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        <div
                            className={`flex items-center gap-8 sm:gap-10 ${
                                isPaused ? '' : 'animate-marquee'
                            }`}
                            style={{
                                animationPlayState: isPaused ? 'paused' : 'running',
                            }}
                        >
                            {marqueeItems.map((item, idx) => (
                                <div
                                    key={`${item.id}-${idx}`}
                                    onClick={() => setSelectedCert(item)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            setSelectedCert(item);
                                        }
                                    }}
                                    className="group relative flex-shrink-0 flex flex-col items-center cursor-pointer focus:outline-none"
                                >
                                    {/* Circular Logo Card Badge */}
                                    <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full border-2 border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-gold group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-gold/15">
                                        <img
                                            src={item.badgeImage}
                                            alt={`${item.fullName} logo`}
                                            className="max-h-full max-w-full object-contain filter transition-transform duration-300 group-hover:scale-110"
                                            loading="lazy"
                                        />
                                        
                                        {/* Golden verification indicator */}
                                        <span className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex h-6 w-6 items-center justify-center rounded-full bg-[#091D38] text-gold shadow-md">
                                            <ShieldCheck size={13} />
                                        </span>
                                    </div>

                                    {/* Name & Category Below Circle */}
                                    <div className="mt-3.5 text-center w-32 sm:w-36 px-1">
                                        <p className="text-xs sm:text-sm font-bold text-slate-800 tracking-wide truncate group-hover:text-gold transition-colors">
                                            {item.name}
                                        </p>
                                        <p className="text-[10px] sm:text-[11px] text-slate-500 truncate mt-0.5">
                                            {item.category}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Certification Detail Modal */}
            {selectedCert && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-[reveal-up_200ms_ease_both]"
                    onClick={() => setSelectedCert(null)}
                >
                    <div 
                        className="relative w-full max-w-md rounded-2xl bg-white p-6 sm:p-7 shadow-2xl border border-slate-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
                            aria-label="Close modal"
                        >
                            ✕
                        </button>

                        {/* Circular preview in modal */}
                        <div className="flex items-center justify-center mx-auto h-28 w-28 rounded-full bg-slate-50 p-4 border border-slate-100 mb-5 shadow-sm">
                            <img
                                src={selectedCert.badgeImage}
                                alt={selectedCert.fullName}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>

                        <div className="text-center">
                            <span className="inline-block rounded-md bg-gold/15 px-2.5 py-1 text-[11px] font-bold text-[#9a7309] uppercase tracking-wider mb-2">
                                {selectedCert.category}
                            </span>

                            <h3 className="text-xl font-bold text-[#091D38]">
                                {selectedCert.fullName}
                            </h3>

                            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                                {selectedCert.description}
                            </p>
                        </div>

                        <div className="mt-5 rounded-lg bg-slate-50 p-3 border border-slate-200/60 flex items-center gap-2.5">
                            <ShieldCheck size={18} className="text-emerald-600 shrink-0" />
                            <span className="text-xs font-semibold text-slate-700">
                                {selectedCert.highlight}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={() => setSelectedCert(null)}
                            className="mt-6 w-full rounded-lg bg-[#091D38] py-2.5 text-center text-sm font-bold text-white shadow-md hover:bg-gold hover:text-navy transition-colors"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
}
