import { ApplicationsHero } from '@/components/applications/ApplicationsHero';
import { TailoredProtectionSection } from '@/components/applications/TailoredProtectionSection';
import { SolutionsSection } from '@/components/applications/SolutionsSection';
import { InfinityAdvantageSection } from '@/components/applications/InfinityAdvantageSection';
import { SpecifySystemSection } from '@/components/applications/SpecifySystemSection';

export function ApplicationsPage() {
    return (
        <div className="bg-white">
            {/* 1. Hero Section */}
            <ApplicationsHero />

            {/* 2. Tailored Protection For Every Environment */}
            <TailoredProtectionSection />

            {/* 3. Solutions Section (8 Cards) */}
            <SolutionsSection />

            {/* 4. The Infinity Advantage (6 Feature Cards) */}
            <InfinityAdvantageSection />

            {/* 5. Specify The Right System Today */}
            <SpecifySystemSection />
        </div>
    );
}
