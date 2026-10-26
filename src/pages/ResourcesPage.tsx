import { ResourcesHero } from '@/components/resources/ResourcesHero';
import { ResourceGrid } from '@/components/resources/ResourceGrid';
import { ContactCTA } from '@/components/home/ContactCTA';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
export function ResourcesPage() { return <><ResourcesHero /><section className="bg-paper py-20"><Container><div className="mb-12 max-w-2xl"><SectionHeading eyebrow="Information centre" title="Guidance that keeps projects moving" /><p className="mt-5 text-lg leading-7 text-muted">Browse our growing library of product information and practical fire-safety guidance. Documents are only enabled once genuine source files are supplied.</p></div><ResourceGrid /></Container></section><ContactCTA /></>; }
