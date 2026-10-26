import { Phone } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { company } from '@/data/company';
import { Button } from '@/components/common/Button';
export function ContactCTA() { return <section className="bg-navy py-16"><Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-gold">Have a project in mind?</p><h2 className="mt-3 max-w-xl text-3xl font-bold text-white sm:text-4xl">Build safer spaces with a considered protection plan.</h2></div><div className="flex flex-col gap-4 sm:items-end"><Button to="/contact" variant="light">Talk to our team</Button><a href={`tel:${company.phone}`} className="flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-gold"><Phone size={15} />{company.phone}</a></div></Container></section>; }
