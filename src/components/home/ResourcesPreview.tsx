import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
export function ResourcesPreview() { return <section className="bg-white py-20"><Container className="grid items-center gap-10 lg:grid-cols-[1fr_.8fr]"><SectionHeading eyebrow="Knowledge for better decisions" title="Plan your protection with clarity" /><div><p className="text-lg leading-7 text-muted">Explore product information, fire-safety guidance and technical support material. Genuine documents can be added here as they become available.</p><Button to="/resources" variant="light" className="mt-7">View resources</Button></div></Container></section>; }
