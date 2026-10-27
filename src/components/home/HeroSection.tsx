import { ShieldCheck } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Container } from '@/components/common/Container';
import { company } from '@/data/company';
import cooper_logo from '@/assets/logos/cooper_logo.png';
import hero_img from '@/assets/images/homePageImg/home_page_hero_img.png';


export function HeroSection() {
    return (
        <section className="relative min-h-[640px] overflow-hidden sm:min-h-[690px]">
            <img
                src={hero_img}
                alt="Modern building interior"
                className="absolute inset-0 h-full w-full object-cover object-center opacity-55"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-navy/55 to-navy/15" />

            <Container className="relative flex min-h-[640px] items-center py-16 sm:min-h-[690px]">
                <div className="max-w-[720px] animate-[reveal-up_700ms_ease_both]">
                    <h1 className="text-[45px] font-bold leading-[1.07] tracking-[-0.045em] text-white sm:text-6xl lg:text-[66px]">
                        Protecting Lives with Intelligent{' '}
                        <span className="text-gold">
                            Fire &amp;
                            <br className="hidden sm:block" /> Smoke Curtain
                        </span>{' '}
                        Systems
                    </h1>

                    <p className="mt-8 max-w-[590px] text-lg leading-7 text-white/80 sm:text-xl">
                        India's Trusted Passive Fire Protection Specialist And Authorized
                        Partner of Coopers Fire UK.
                    </p>

                    <Button to="/contact" className="mt-8">
                        Contact Us
                    </Button>

                    <div className="mt-12 flex items-center gap-5">
                        <span className="text-sm text-white/80">
                            {company.partner}
                        </span>

                        <div className="hidden h-8 w-px bg-white/30 sm:block" />

                        <img
                            src={cooper_logo}
                            alt="Coopers Smoke & Fire Systems"
                            className="h-12 w-auto max-w-[180px] object-contain"
                        />
                    </div>
                </div>
            </Container>

            <div className="absolute bottom-10 right-[4%] hidden w-[280px] rounded-lg bg-blue p-7 text-white shadow-2xl lg:block">
                <div className="flex items-start gap-4">
                    <div className="border border-white/70 p-2">
                        <ShieldCheck size={25} />
                    </div>

                    <p className="text-xs font-bold leading-5 tracking-[0.08em]">
                        FIRE &amp; SMOKE CURTAIN
                        <br />
                        Tested. Certified. Trusted.
                    </p>
                </div>

                <p className="mt-5 text-sm leading-6 text-white/65">
                    Contain fire, restrict smoke, protect lives and assets.
                </p>

                <a
                    href="#solutions"
                    className="mt-4 inline-block text-xs font-bold text-red"
                >
                    Learn More&nbsp; →
                </a>
            </div>
        </section>
    );
}