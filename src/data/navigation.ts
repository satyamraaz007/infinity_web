import { NavigationItem } from '@/types/navigation';

export const navigation: NavigationItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
        label: 'Products',
        href: '/products',
        isMegaMenu: true,
        categories: [
            {
                title: 'Fire & Smoke Protection',
                slug: 'fire-smoke-protection',
                description: 'Automated containment barriers & smoke reservoirs',
                icon: 'Flame',
                items: [
                    {
                        label: 'Fire Curtains',
                        href: '/products/fire-smoke-protection/fire-curtains',
                        description: 'Automatic fail-safe fire barrier curtains up to 240 mins',
                        badge: 'BS EN 1634'
                    },
                    {
                        label: 'Smoke Curtains',
                        href: '/products/fire-smoke-protection/smoke-curtains',
                        description: 'Smoke containment systems for safe egress routing',
                        badge: 'Class D120'
                    }
                ]
            },
            {
                title: 'Fire-Rated Glass',
                slug: 'fire-rated-glass',
                description: 'Optically clear fire barriers with thermal insulation',
                icon: 'Shield',
                items: [
                    {
                        label: 'Advanced Fire-Resistant Glass',
                        href: '/products/fire-rated-glass/advanced-fire-resistant-glass',
                        description: 'EI 30 - EI 120 intumescent multi-laminate glass',
                        badge: 'EI 120'
                    },
                    {
                        label: 'Fire-Rated Glazing',
                        href: '/products/fire-rated-glass/fire-rated-glazing',
                        description: 'Thermally broken steel & aluminum framed fire systems',
                        badge: 'EN 1364'
                    }
                ]
            },
            {
                title: 'Fire-Rated Doors',
                slug: 'fire-rated-doors',
                description: 'Heavy duty metal & architectural timber egress doors',
                icon: 'DoorClosed',
                items: [
                    {
                        label: 'Metal Fire-Rated Doors',
                        href: '/products/fire-rated-doors/metal-fire-rated-doors',
                        description: 'Galvanized steel doors tested up to 240 minutes',
                        badge: 'UL 10C'
                    },
                    {
                        label: 'Wooden Fire-Rated Doors',
                        href: '/products/fire-rated-doors/wooden-fire-rated-doors',
                        description: 'Luxury architectural timber veneer fire doors',
                        badge: 'FD 30-120'
                    }
                ]
            },
            {
                title: 'LED Lighting',
                slug: 'led-lighting',
                description: 'High-efficacy luminaires for industrial, commercial & facades',
                icon: 'Lightbulb',
                items: [
                    {
                        label: 'Industrial LED Lighting',
                        href: '/products/led-lighting/industrial-led-lighting',
                        description: 'IP66 / IK10 high-bay luminaires up to 170 lm/W',
                        badge: '170 lm/W'
                    },
                    {
                        label: 'Commercial LED Lighting',
                        href: '/products/led-lighting/commercial-led-lighting',
                        description: 'Low-glare UGR < 16 architectural linear & downlights',
                        badge: 'UGR < 16'
                    },
                    {
                        label: 'Street LED Lighting',
                        href: '/products/led-lighting/street-led-lighting',
                        description: 'Aerodynamic roadway luminaires with 10kV SPD',
                        badge: 'Smart NEMA'
                    },
                    {
                        label: 'Facade & RGB Lighting',
                        href: '/products/led-lighting/facade-rgb-lighting',
                        description: 'DMX512 / RDM dynamic architectural floodlighting',
                        badge: 'IP67'
                    }
                ]
            },
            {
                title: 'Door Hardware & Security',
                slug: 'door-hardware-security',
                description: 'ANSI Grade 1 panic hardware, closers & access systems',
                icon: 'Lock',
                items: [
                    {
                        label: 'Panic Bars & Exit Devices',
                        href: '/products/door-hardware-security/panic-bars-exit-devices',
                        description: 'Touch-bar emergency exit devices tested to 1M cycles',
                        badge: 'Grade 1'
                    },
                    {
                        label: 'Door Closers',
                        href: '/products/door-hardware-security/door-closers',
                        description: 'Precision hydraulic cam-action & rack-pinion closers',
                        badge: 'EN 1154'
                    },
                    {
                        label: 'Electronic Door Locks',
                        href: '/products/door-hardware-security/electronic-door-locks',
                        description: 'Biometric smart mortise locks with anti-panic release',
                        badge: 'AES-128'
                    },
                    {
                        label: 'Access Control Systems',
                        description: 'Touchless AI facial recognition terminals & speed gates',
                        href: '/products/door-hardware-security/access-control-systems',
                        badge: 'OSDP v2'
                    },
                    {
                        label: 'Door Accessories',
                        href: '/products/door-hardware-security/door-accessories',
                        description: 'Grade 316 hinges, magnetic holders & drop seals',
                        badge: 'Grade 316'
                    }
                ]
            }
        ]
    },
    { label: 'Applications', href: '/applications' },
    { label: 'Resources', href: '/resources' },
    { label: 'Contact', href: '/contact' },
];
