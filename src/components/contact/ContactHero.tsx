import { Container } from '@/components/common/Container';

export function ContactHero() {
    const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const element = document.getElementById('why-partner');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center overflow-hidden bg-[#071A35] border-t border-[#D4AF37]/50">
            {/* Background Image: High-res Building with illuminated architecture & blueprint night sky */}
            <div 
                className="absolute inset-0 bg-cover bg-right sm:bg-center bg-no-repeat transition-transform duration-700 ease-out"
                style={{
                    backgroundImage: `url('/images/contact/hero_clean_bg_2x.png')`,
                }}
            />

            {/* Gradient Overlay for optimal typographic contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#06152B]/95 via-[#071A35]/85 sm:via-[#071A35]/70 to-[#071A35]/20" />

            <Container className="relative z-10 py-16 sm:py-24 lg:py-28">
                <div className="max-w-[650px] animate-[reveal-up_700ms_ease_both]">
                    {/* Main Title matching Image 4 */}
                    <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold text-white leading-[1.12] tracking-tight">
                        Let's Discuss Your Fire{' '}
                        <br className="hidden sm:inline" />
                        Safety Requirements
                    </h1>

                    {/* Subtitle matching Image 4 */}
                    <p className="mt-5 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-white/85 leading-relaxed font-normal max-w-[580px]">
                        Connect With Our Engineering Experts For Consultation, Project Planning, Installation, Maintenance, And Comprehensive Fire Protection Solutions.
                    </p>

                    {/* Button matching Image 4 */}
                    <div className="mt-8 sm:mt-10">
                        <a
                            href="#why-partner"
                            onClick={scrollToContact}
                            className="inline-flex items-center gap-3 rounded border border-[#D4AF37] bg-[#0B2546]/90 px-7 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-white shadow-xl transition-all duration-300 hover:bg-[#103562] hover:border-[#F2C94C] hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>CONTACT US</span>
                            <span className="text-sm font-bold">→</span>
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}
