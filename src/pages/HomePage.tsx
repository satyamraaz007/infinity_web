import { HeroSection } from '@/components/home/HeroSection';
import { StatisticsBar } from '@/components/home/StatisticsBar';
import { AboutPreview } from '@/components/home/AboutPreview';
import { ProductsPreview } from '@/components/home/ProductsPreview';
import { ApplicationsPreview } from '@/components/home/ApplicationsPreview';
import { IndustriesSection } from '@/components/home/IndustriesSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CertificationsSection } from '@/components/home/CertificationsSection';

export function HomePage() {
    return (
        <>
            <HeroSection />
            <StatisticsBar />
            <AboutPreview />
            <ProductsPreview />
            <ApplicationsPreview />
            <IndustriesSection />
            <ProjectsSection />
            <ProcessSection />
            <CertificationsSection />
            {/* <ResourcesPreview /> */}
            {/* <ContactCTA /> */}
        </>
    );
}
