export function SectionHeading({ eyebrow, title, centered = false, light = false }: { eyebrow?: string; title: string; centered?: boolean; light?: boolean }) {
    return <div className={`${centered ? 'mx-auto text-center' : ''} max-w-3xl`}>
        {eyebrow && <p className={`mb-4 text-[11px] font-bold uppercase tracking-[0.18em] ${light ? 'text-gold' : 'text-blue'}`}>{eyebrow}</p>}
        <h2 className={`text-3xl font-bold uppercase leading-[1.08] tracking-[-0.025em] sm:text-4xl lg:text-[46px] ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
    </div>;
}
