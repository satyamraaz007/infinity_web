import { Link } from 'react-router-dom';
import { Container } from '@/components/common/Container';

export function AboutHero() {
    return (
        <section className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center overflow-hidden bg-[#071A35]">
            {/* Background Image with Dark Blue / Dusk Atmosphere */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url('/images/about/hero_clean_bg_2x.png')`,
                }}
            />

            {/* Gradient Overlay ensuring high contrast for typography */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#071A35]/95 via-[#071A35]/75 to-[#071A35]/30" />

            <Container className="relative z-10 py-20 sm:py-28">
                <div className="max-w-2xl animate-[reveal-up_700ms_ease_both]">
                    {/* Main Title */}
                    <h1 className="text-3xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.12] tracking-tight">
                        Engineering Safer Spaces
                        <br />
                        Through Innovation
                    </h1>

                    {/* Subtitle */}
                    <p className="mt-6 max-w-xl text-sm sm:text-base lg:text-lg text-white/85 leading-relaxed font-normal">
                        Global Leaders In Fire And Smoke Protection Solutions, Ensuring Industrial Integrity And Human Safety Through Precision Engineering.
                    </p>

                    {/* Button */}
                    <div className="mt-8 sm:mt-10">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2.5 rounded-md border border-white/30 bg-[#091D38]/85 px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-white shadow-xl transition-all duration-300 hover:bg-gold hover:text-[#091D38] hover:border-gold hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>CONTACT US</span>
                            <span className="text-sm font-bold">→</span>
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
