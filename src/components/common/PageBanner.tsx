import { Container } from './Container';

export function PageBanner({ eyebrow, title, image }: { eyebrow: string; title: string; image: string }) {
    return <section className="relative flex min-h-[350px] items-end overflow-hidden bg-navy py-16 sm:min-h-[430px]">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/75 to-navy/15" />
        <Container className="relative"><p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold">{eyebrow}</p><h1 className="max-w-3xl text-5xl font-bold uppercase leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">{title}</h1></Container>
    </section>;
}
