import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function ReadyToProtectSection() {
    const scrollToForm = () => {
        const element = document.getElementById('why-partner');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Optionally focus first input after scroll
            setTimeout(() => {
                const input = document.querySelector<HTMLInputElement>('#contact-form input');
                input?.focus();
            }, 600);
        }
    };

    return (
        <section className="bg-[#0B2546] py-20 sm:py-24 lg:py-28 overflow-hidden">
            <Container>
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                    {/* Title matching Image 1 */}
                    <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight">
                        Ready to Protect Your Building?
                    </h2>

                    {/* Subtitle matching Image 1 */}
                    <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-lg text-white/80 font-normal leading-relaxed max-w-[760px]">
                        Join Hundreds Of Global Enterprises That Trust Infinity For Their Life-Safety Infrastructure.
                    </p>

                    {/* Button matching Image 1 with gold border */}
                    <div className="mt-8 sm:mt-10">
                        <button
                            type="button"
                            onClick={scrollToForm}
                            className="group inline-flex items-center justify-center gap-2.5 rounded border border-[#D4AF37] bg-[#0B2546] px-8 py-3.5 sm:px-9 sm:py-4 text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-[#103562] hover:border-[#F2C94C] hover:shadow-xl hover:shadow-black/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                        >
                            <span>CONTACT OUR TEAM</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
