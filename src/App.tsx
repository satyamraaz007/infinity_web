import { useState } from 'react';
import {
    ArrowRight,
    Building2,
    Check,
    Clock3,
    Headphones,
    MapPin,
    Menu,
    MessageSquare,
    Phone,
    ShieldCheck,
    SlidersHorizontal,
    Sparkles,
    UsersRound,
    X,
} from 'lucide-react';

const images = {
    hero: 'https://images.pexels.com/photos/5506033/pexels-photo-5506033.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    about: 'https://images.pexels.com/photos/18592583/pexels-photo-18592583.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    airport: 'https://images.pexels.com/photos/15273870/pexels-photo-15273870.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hospital: 'https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    hotel: 'https://images.pexels.com/photos/31836902/pexels-photo-31836902.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    metro: 'https://images.pexels.com/photos/15921368/pexels-photo-15921368.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    office: 'https://images.pexels.com/photos/38197381/pexels-photo-38197381.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

const solutions = [
    ['Fire Curtains', 'Automatic fire barrier curtains for compartmentalize fire and prevent its spread.', images.about],
    ['Smoke Curtains', 'Smoke containment systems for safe evacuation and smoke control.', images.hero],
    ['Fire Shutters', 'High-performance fire shutters for openings and separations.', images.office],
    ['Fire Doors', 'Certified fire doors ensuring maximum safety and compliance.', images.hotel],
    ['Installation', 'Professional installation by trained and certified technical teams.', images.about],
    ['AMC & Service', 'Inspection, testing, maintenance & 24×7 support across India.', images.hospital],
];

const industries = [
    ['Airports', images.airport], ['Hotels', images.hotel], ['Hospitals', images.hospital], ['Shopping Malls', images.office],
    ['Metro & Rail', images.metro], ['Commercial Buildings', images.about], ['Data Centres', images.hero], ['Educational Institutions', images.hospital],
];

const projects = [
    ['Kempegowda International Airport', 'Bengaluru', images.airport], ['Lulu Mall', 'Hyderabad', images.hotel], ['AIIMS Hospital', 'New Delhi', images.hospital],
    ['Taj Santacruz', 'Mumbai', images.office], ['Delhi Metro Phase 3', 'New Delhi', images.metro], ['Navi Mumbai International Airport', 'Navi Mumbai', images.airport],
];

function Brand() {
    return <a href="#home" className="brand" aria-label="Infinity Engineering home"><span className="brand-mark">∞</span><span className="brand-name">infinity<small>ENGINEERING</small></span></a>;
}

function App() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="site-shell">
            <header className="site-header">
                <div className="nav-wrap">
                    <Brand />
                    <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
                    <nav className={menuOpen ? 'main-nav open' : 'main-nav'}>
                        {['Home', 'About', 'Applications', 'Resources', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
                    </nav>
                    <a className="phone-button" href="tel:9718170004"><Phone size={16} />971-817-0004</a>
                </div>
            </header>

            <main>
                <section id="home" className="hero-section">
                    <img className="hero-image" src={images.hero} alt="Modern glass atrium" />
                    <div className="hero-overlay" />
                    <div className="hero-content">
                        <p className="eyebrow gold">PASSIVE FIRE PROTECTION SPECIALISTS</p>
                        <h1>Protecting Lives with<br />Intelligent <span>Fire &amp;<br className="desktop-break" /> Smoke Curtain</span> Systems</h1>
                        <p className="hero-copy">India's Trusted Passive Fire Protection Specialist And Authorized Partner Of Coopers Fire UK.</p>
                        <a className="primary-button" href="#contact">CONTACT US <ArrowRight size={19} /></a>
                        <div className="partner-row"><span>Exclusive India Partner Of Coopers Fire, UK</span><strong className="coopers">coopers<small>SMOKE &amp; FIRE CURTAINS</small></strong></div>
                    </div>
                    <aside className="hero-card"><div className="icon-box"><ShieldCheck size={25} /></div><div><strong>FIRE &amp; SMOKE CURTAIN<br />Tested. Certified. Trusted.</strong><p>Contain fire, restrict smoke, protect lives and assets.</p><a href="#solutions">Learn More <ArrowRight size={14} /></a></div></aside>
                </section>

                <section className="stats-strip">
                    {[['20+', 'Years of', 'Excellence', ShieldCheck], ['500+', 'Projects', 'Completed', UsersRound], ['PAN India', 'Installation', 'Network', Building2], ['24×7', 'Support &', 'Service', Clock3], ['100%', 'Tested &', 'Certified', ShieldCheck], ['TRUSTED BY', 'Leading Brands', 'Across India', UsersRound]].map(([number, line1, line2, Icon]) => <div className="stat" key={String(number)}><Icon size={39} /><div><strong>{number}</strong><span>{line1}<br />{line2}</span></div></div>)}
                </section>

                <section id="about" className="about-section section-container">
                    <div className="about-image-wrap"><img src={images.about} alt="Fire curtain in a modern building" /><span className="image-tag">20+ YEARS<br /><small>OF EXCELLENCE</small></span></div>
                    <div className="about-copy"><p className="eyebrow">ABOUT INFINITY</p><h2>20+ YEARS OF EXCELLENCE IN PASSIVE FIRE PROTECTION</h2><p className="lead">Infinity Engineering Delivers World-Class Fire Curtain And Smoke Curtain Systems That Help Contain Fire, Smoke And Radiant Heat, Ensuring Life Safety And Minimizing Property Damage.</p><ul>{['Authorized Distributor & Service Partner of Coopers Fire UK', 'Certified & tested fire and smoke curtain systems', 'End-to-end solution – Design, Supply, Installation & AMC', 'Compliant with international fire safety standards'].map((item) => <li key={item}><Check size={18} />{item}</li>)}</ul><a className="primary-button dark" href="#contact">KNOW MORE ABOUT US <ArrowRight size={19} /></a></div>
                </section>

                <section id="applications" className="solutions-section section-container"><div className="center-heading"><p className="eyebrow">WHAT WE DO</p><h2>OUR SOLUTIONS</h2><p>Complete Passive Fire Protection Solutions</p></div><div className="solution-grid">{solutions.map(([title, text, image]) => <article className="solution-card" key={title}><img src={image} alt={title} /><h3>{title}</h3><p>{text}</p><a href="#contact">LEARN MORE <ArrowRight size={14} /></a></article>)}</div></section>

                <section className="industries-section section-container"><div className="industries-list"><p className="eyebrow">WHERE WE WORK</p><h2>INDUSTRIES WE SERVE</h2><div className="industry-grid">{industries.map(([name, image]) => <div className="industry-card" key={name}><img src={image} alt={name} /><strong>{name}</strong></div>)}</div><a className="primary-button dark" href="#projects">VIEW ALL INDUSTRIES <ArrowRight size={19} /></a></div><div className="why-card"><h2>Why Choose Infinity</h2>{[['UK Technology', 'Global expertise from Coopers Fire UK', Sparkles], ['Certified Products', 'All systems tested as per BS & EN standards', ShieldCheck], ['Custom Design', 'Tailored solutions for every project requirement', SlidersHorizontal]].map(([title, text, Icon]) => <div className="why-item" key={String(title)}><span><Icon size={20} /></span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></section>

                <section id="projects" className="projects-section"><div className="projects-header section-container"><div><p className="eyebrow">OUR PROJECTS</p><h2>COMPLETE PASSIVE FIRE PROTECTION SOLUTIONS</h2></div><a href="#contact">View All Projects <ArrowRight size={18} /></a></div><div className="project-grid section-container">{projects.map(([title, city, image]) => <article className="project-card" key={title}><img src={image} alt={title} /><h3>{title}</h3><p><MapPin size={13} />{city}</p></article>)}</div></section>

                <section className="process-section"><div className="section-container process-inner"><div className="process-main"><p className="eyebrow">OUR PROCESS</p><div className="process-steps">{[['01', 'Consultation', MessageSquare], ['02', 'Assessment', Sparkles], ['03', 'Design', SlidersHorizontal], ['04', 'Installation', Building2], ['05', 'Support', Clock3], ['06', 'Care', Headphones]].map(([number, label, Icon]) => <div className="process-step" key={number}><div className="step-icon"><Icon size={27} /><b>{number}</b></div><span>{label}</span></div>)}</div></div><div className="process-card"><h2>Secure Your Building with Certified Passive Fire Protection</h2><p>Let our experts help you find the right solution for your building.</p><a href="#contact">Talk to an expert <ArrowRight size={16} /></a></div></div></section>
                <section id="contact" className="contact-section"><p className="eyebrow gold">READY TO PROTECT WHAT MATTERS?</p><h2>Let's build a safer tomorrow.</h2><a className="primary-button" href="tel:9718170004"><Phone size={18} /> CALL 971-817-0004</a></section>
            </main>
        </div>
    );
}

export default App;
