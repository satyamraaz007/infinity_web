import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';

export function AboutCTA() {
    return (
        <section className="bg-[#011022] py-20 sm:py-24 lg:py-28 overflow-hidden">
            <Container>
                <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
                        Ready to Protect Your Building?
                    </h2>

                    <p className="mt-4 sm:mt-5 text-sm sm:text-base lg:text-[17px] text-[#b1c8eb] font-normal leading-relaxed max-w-[740px]">
                        Consult With Our Expert Engineers Today To Design A Customized Fire Safety System Tailored To Your Unique Infrastructure Requirements.
                    </p>

                    <div className="mt-8 sm:mt-9">
                        <Link
                            to="/contact"
                            className="group inline-flex items-center justify-center gap-2.5 rounded border border-[#d9a51b] bg-[#0b2e5c] px-7 py-3.5 sm:px-8 sm:py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#103b70] hover:border-gold hover:shadow-lg hover:shadow-blue-950/50 hover:-translate-y-0.5 active:translate-y-0"
                        >
                            <span>SCHEDULE CONSULTATION</span>
                            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
}
