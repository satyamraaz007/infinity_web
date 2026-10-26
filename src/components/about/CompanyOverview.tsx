import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { company } from '@/data/company';
export function CompanyOverview() { return <section className="bg-paper py-20 sm:py-28"><Container className="grid items-start gap-12 lg:grid-cols-[.85fr_1.15fr]"><SectionHeading eyebrow="The company" title="A practical approach to passive fire protection" /><div className="space-y-6 text-lg leading-8 text-muted"><p>{company.intro}</p><p>We work with project teams to understand the building, the movement of people and the protection objectives before recommending a considered solution. This page intentionally keeps company credentials editable until verified details are supplied.</p></div></Container></section>; }
