import { AboutHero } from '@/components/about/AboutHero';
import { CompanyOverview } from '@/components/about/CompanyOverview';
import { OurJourney } from '@/components/about/OurJourney';
import { MissionVision } from '@/components/about/MissionVision';
import { EngineeringExcellence } from '@/components/about/EngineeringExcellence';
import { AccreditationsBar } from '@/components/about/AccreditationsBar';
import { ProjectImpact } from '@/components/about/ProjectImpact';
import { AboutCTA } from '@/components/about/AboutCTA';

export function AboutPage() {
    return (
        <>
            {/* 1. Hero Section */}
            <AboutHero />

            {/* 2. 'infinity engineerings' (Company Overview) */}
            <CompanyOverview />

            {/* 3. 'our journey' */}
            <OurJourney />

            {/* 4. 'our mission and our vision' */}
            <MissionVision />

            {/* 5. 'ENGINEERING EXCELLENCE' */}
            <EngineeringExcellence />

            {/* 6. Accreditations / Certifications Bar */}
            <AccreditationsBar />

            {/* 7. 'PROJECT IMPACT' */}
            <ProjectImpact />

            {/* 8. 'Ready to Protect Your Building?' Call To Action */}
            <AboutCTA />
        </>
    );
}
