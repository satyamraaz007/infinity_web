import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/common/Container';
import { SectionHeading } from '@/components/common/SectionHeading';
import { applications } from '@/data/applications';
export function ApplicationsPreview() { return <section id="solutions" className="bg-paper pb-24 pt-10"><Container><SectionHeading centered title="Our solutions" eyebrow="Complete passive fire protection solutions" /><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">{applications.map(item => <article key={item.title} className="group rounded-lg bg-white p-5 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"><img src={item.image} alt="" className="h-24 w-full rounded object-cover" /><h3 className="mt-5 text-sm font-bold text-navy">{item.title}</h3><p className="mt-3 min-h-[66px] text-xs leading-5 text-muted">{item.description}</p><Link to="/applications" className="mt-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.08em] text-red">Learn more <ArrowRight size={13} /></Link></article>)}</div></Container></section>; }
