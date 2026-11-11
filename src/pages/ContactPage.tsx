import { ContactHero } from '@/components/contact/ContactHero';
import { WhyPartnerSection } from '@/components/contact/WhyPartnerSection';
import { ReadyToProtectSection } from '@/components/contact/ReadyToProtectSection';

export function ContactPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <ContactHero />

            {/* 2. 'WHY PARTNER WITH INFINITY?' (Contact Info Cards + Form + Engineering Value Cards) */}
            <WhyPartnerSection />

            {/* 3. 'Ready to Protect Your Building?' Call To Action */}
            <ReadyToProtectSection />
        </>
    );
}
