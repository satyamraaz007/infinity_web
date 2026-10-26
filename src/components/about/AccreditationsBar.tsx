import { Container } from '@/components/common/Container';

export function AccreditationsBar() {
    const accreditations = [
        {
            name: 'ISO 9001',
            icon: (
                <svg
                    className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 transition-all duration-300 group-hover:text-gold group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
        },
        {
            name: 'CE CERTIFIED',
            icon: (
                <svg
                    className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 transition-all duration-300 group-hover:text-gold group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z" />
                    <path d="m9 12 2 2 4-4" />
                </svg>
            ),
        },
        {
            name: 'UL LISTED',
            icon: (
                <svg
                    className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 transition-all duration-300 group-hover:text-gold group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="M12 2v20M4 11h16" />
                    <path d="M4 5l8 6v11c-8-4-8-10-8-10V5z" fill="currentColor" fillOpacity="0.2" />
                </svg>
            ),
        },
        {
            name: 'FIA MEMBER',
            icon: (
                <svg
                    className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 transition-all duration-300 group-hover:text-gold group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="11.5" r="3" />
                    <path d="M12 8.5a3 3 0 0 1 3 3v1a1.5 1.5 0 0 1-3 0v-1" />
                </svg>
            ),
        },
        {
            name: 'FM APPROVED',
            icon: (
                <svg
                    className="h-8 w-8 sm:h-9 sm:w-9 text-slate-600 transition-all duration-300 group-hover:text-gold group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <circle cx="12" cy="8" r="6" />
                    <polygon points="12 5 13.5 8 16.5 8.5 14.2 10.5 14.8 13.5 12 12 9.2 13.5 9.8 10.5 7.5 8.5 10.5 8 12 5" fill="currentColor" />
                    <path d="m8.2 13-2.2 8.5 6-3.5 6 3.5-2.2-8.5" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-white py-12 sm:py-16 border-t border-slate-100 overflow-hidden">
            <Container>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 items-center justify-items-center">
                    {accreditations.map((item) => (
                        <div
                            key={item.name}
                            className="group flex flex-col items-center justify-center text-center cursor-default transition-transform duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-3.5 flex items-center justify-center">
                                {item.icon}
                            </div>
                            <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-600 transition-colors duration-300 group-hover:text-[#091D38] uppercase">
                                {item.name}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
