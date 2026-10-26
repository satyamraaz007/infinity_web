import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInformation } from '@/components/contact/ContactInformation';
import { ContactForm } from '@/components/contact/ContactForm';
import { LocationSection } from '@/components/contact/LocationSection';
import { Container } from '@/components/common/Container';
export function ContactPage() { return <><ContactHero /><ContactInformation /><section className="bg-paper pb-20"><Container className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-blue">Project enquiry</p><h2 className="mt-4 text-4xl font-bold uppercase leading-tight text-navy">Let's discuss what your building needs.</h2><p className="mt-5 leading-7 text-muted">Share a few details and our team can help you identify the right next conversation. This form is a client-side demo until an enquiry inbox is connected.</p></div><ContactForm /></Container></section><LocationSection /></>; }
