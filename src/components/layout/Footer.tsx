import { Phone, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '@/assets/logos/infinity_logo.png';

export function Footer() {
    return (
        <footer className="bg-[#071A35] text-white">
            {/* Main Footer Content */}
            <div className="mx-auto max-w-[1360px] px-6 py-16 sm:px-10 sm:py-20 lg:px-14">
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1.1fr_1.1fr] lg:gap-14">
                    {/* Column 1: Logo, Disclaimer & Social Icons */}
                    <div className="flex flex-col justify-between">
                        <div>
                            {/* Infinity Engineerings Logo */}
                            <Link to="/" className="inline-block" aria-label="Infinity Engineerings Home">
                                <img
                                    src={logo}
                                    alt="Infinity Engineerings"
                                    className="h-14 sm:h-16 w-auto object-contain brightness-105"
                                />
                            </Link>

                            {/* Disclaimer Box with Gold Border */}
                            <div className="mt-7 max-w-[250px] border border-[#D9A51B] p-4 sm:p-5">
                                <p className="text-[10px] sm:text-[10.5px] font-medium uppercase leading-[1.65] tracking-wide text-slate-300">
                                    <span className="font-bold text-[#E5A812] mr-1">DISCLAIMER:</span>
                                    ALL THE PRODUCTS, PICTURES, PROJECTS, ACCREDITATIONS, CERTIFICATES, STANDARDS ARE SOLE PROPERTY OF COOPERS FIRE LIMITED U.K. NONE OF THEM DIRECTLY LINKED TO INFINITY ENGINEERINGS.
                                </p>
                            </div>
                        </div>

                        {/* Social Icons Row */}
                        <div className="mt-8 flex items-center gap-3.5 sm:gap-4 text-white">
                            {/* Facebook */}
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="flex h-7 w-7 items-center justify-center text-white transition-all hover:text-gold hover:scale-110"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Twitter / X */}
                            <a
                                href="https://twitter.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter / X"
                                className="flex h-7 w-7 items-center justify-center text-white transition-all hover:text-gold hover:scale-110"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-7 w-7 items-center justify-center text-white transition-all hover:text-gold hover:scale-110"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="flex h-7 w-7 items-center justify-center text-white transition-all hover:text-gold hover:scale-110"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>

                            {/* Mail */}
                            <a
                                href="mailto:sales@infinityengineerings.com"
                                aria-label="Email"
                                className="flex h-7 w-7 items-center justify-center text-white transition-all hover:text-gold hover:scale-110"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                                </svg>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/919718170004"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="flex h-7 w-7 items-center justify-center text-white transition-all hover:text-gold hover:scale-110"
                            >
                                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="relative mb-6 inline-block pb-1 text-base sm:text-lg font-bold text-white border-b-2 border-gold tracking-wide">
                            Quick Links
                        </h3>
                        <ul className="space-y-3.5 sm:space-y-4">
                            <li>
                                <Link to="/" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/applications" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Applications
                                </Link>
                            </li>
                            <li>
                                <Link to="/resources" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Service */}
                    <div>
                        <h3 className="relative mb-6 inline-block pb-1 text-base sm:text-lg font-bold text-white border-b-2 border-gold tracking-wide">
                            Service
                        </h3>
                        <ul className="space-y-3.5 sm:space-y-4">
                            <li>
                                <Link to="/applications" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Automatic Fire Curtains
                                </Link>
                            </li>
                            <li>
                                <Link to="/applications" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Automatic Smoke Curtains
                                </Link>
                            </li>
                            <li>
                                <Link to="/applications" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Compartmentation:
                                </Link>
                            </li>
                            <li>
                                <Link to="/applications" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Escape Routes Protection
                                </Link>
                            </li>
                            <li>
                                <Link to="/applications" className="text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium">
                                    Boundary &amp; Atrium Protection
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div>
                        <h3 className="relative mb-6 inline-block pb-1 text-base sm:text-lg font-bold text-white border-b-2 border-gold tracking-wide">
                            Contact
                        </h3>
                        <ul className="space-y-4 sm:space-y-5">
                            <li>
                                <a
                                    href="tel:+919718170004"
                                    className="group inline-flex items-center gap-3 text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium"
                                >
                                    <Phone size={17} className="shrink-0 text-white group-hover:text-gold transition-colors" />
                                    <span>+ 91 -9718170004</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:sales@infinityengineerings.com"
                                    className="group inline-flex items-center gap-3 text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium"
                                >
                                    <Mail size={17} className="shrink-0 text-white group-hover:text-gold transition-colors" />
                                    <span className="break-all">sales@infinityengineerings.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:estimating@infinityengineerings.com"
                                    className="group inline-flex items-center gap-3 text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium"
                                >
                                    <Mail size={17} className="shrink-0 text-white group-hover:text-gold transition-colors" />
                                    <span className="break-all">estimating@infinityengineerings.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.infinityengineerings.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 text-sm sm:text-base text-white/90 hover:text-gold transition-colors font-medium"
                                >
                                    <Globe size={17} className="shrink-0 text-white group-hover:text-gold transition-colors" />
                                    <span>www.infinityengineerings.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Radiant Gold Bottom Copyright Bar */}
            <div className="w-full bg-gradient-to-r from-[#ce8c00] via-[#f5d822] to-[#ce8c00] py-3.5 sm:py-4 px-4 shadow-inner">
                <p className="text-center text-xs sm:text-sm font-bold uppercase tracking-[0.14em] text-slate-950">
                    © COPYRIGHT 2026 ALL RIGHTS RESERVED. INFINITY ENGINEERINGS.
                </p>
            </div>
        </footer>
    );
}
