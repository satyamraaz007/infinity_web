import { ProductCategory, ProductItem } from '@/types/products';

export const productCategories: ProductCategory[] = [
    {
        id: 'fire-smoke-protection',
        slug: 'fire-smoke-protection',
        title: 'Fire & Smoke Protection',
        shortTitle: 'Fire & Smoke',
        eyebrow: 'Engineered Containment Systems',
        badge: 'Life Safety Critical',
        description: 'Advanced automated flexible barrier systems engineered to compartmentalize fire, contain lethal smoke gases, and preserve critical egress corridors in modern architecture.',
        heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1600&q=80',
        icon: 'Flame',
        products: [
            {
                id: 'fire-curtains',
                slug: 'fire-curtains',
                categorySlug: 'fire-smoke-protection',
                categoryTitle: 'Fire & Smoke Protection',
                title: 'Automatic Fire Curtains',
                shortTitle: 'Fire Curtains',
                badge: 'BS EN 1634-1 & UL 10D Certified',
                tagline: 'Invisible passive fire containment deploying automatically upon fire alarm trigger.',
                overview: 'Engineered for seamless architectural integration, our Automatic Fire Curtains remain concealed within ceiling headboxes until deployed by fire detection signals. Built with multi-layer woven fiberglass reinforced with stainless steel wire and intumescent silicone coatings, they provide up to 240 minutes of integrity (E) and radiant heat limitation (EW), preserving escape corridors and preventing fire leap in high-rise buildings and atriums.',
                fullDescription: [
                    'Modern architectural designs demand vast, open floor plans, soaring atriums, and minimal structural clutter. Traditional fire doors and masonry partitions restrict spatial freedom. Our Automatic Fire Curtains provide an invisible yet uncompromising life-safety barrier that activates solely during fire emergencies.',
                    'Engineered with gravity fail-safe motorization, the system descends at a controlled speed even during complete mains power disruption. The curtain assembly features heavy-duty side guides with patented retention mechanisms capable of withstanding turbulent air pressure differentials generated in fire events.',
                    'Fully tested and certified to BS EN 1634-1, BS EN 1634-3, UL 10D, and NFPA 80, Infinity fire curtains represent the gold standard for compartmentalization in airports, metro stations, commercial centers, and high-occupancy public venues.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Automatic fire curtain deployed within a multi-level commercial atrium'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Ceiling headbox concealed flush within architectural gypsum ceiling'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Stainless steel retaining side guides and weighted bottom bar system'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Fire control panel with intelligent battery backup and BMS interface'
                    }
                ],
                quickSpecs: [
                    { label: 'Fire Rating', value: 'Up to 240 Mins (E & EW)', highlight: true },
                    { label: 'Deployment', value: 'Gravity Fail-Safe Controlled Speed' },
                    { label: 'Max Width', value: 'Unlimited Modular Spans' },
                    { label: 'Standards', value: 'BS EN 1634-1, UL 10D, NFPA 80', highlight: true },
                    { label: 'Fabric Composition', value: 'Woven Glass Fibre + SS Wire Mesh' },
                    { label: 'Power Backup', value: '24V DC Monitored Battery Standby' }
                ],
                features: [
                    {
                        title: 'Gravity Fail-Safe Operation',
                        description: 'Descends reliably at 0.15 - 0.3 m/s using internal mechanical gravity governors even in total electrical failure.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Ultra-Compact Ceiling Headbox',
                        description: 'Requires minimal overhead clearance (as low as 150mm), enabling seamless flush integration into false ceilings.',
                        icon: 'Layers'
                    },
                    {
                        title: 'Radiant Heat Attenuation (EW)',
                        description: 'Specially coated intumescent fabric reduces lethal heat radiation transfer below 15 kW/m² for safer egress.',
                        icon: 'Flame'
                    },
                    {
                        title: 'Intelligent Motor Controller',
                        description: 'Features two-stage staged descent for human escape, delay timers, obstruction sensors, and 72-hour battery backup.',
                        icon: 'Cpu'
                    },
                    {
                        title: 'Continuous Smoke & Air Sealing',
                        description: 'Precision engineered side guide channels with low-friction seals prevent fire gas bypass and flutter under pressure.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'BMS & Fire Alarm Interfacing',
                        description: 'Volt-free contacts provide real-time status reporting (fault, deployed, retracting, power) to building management.',
                        icon: 'Settings'
                    }
                ],
                specifications: [
                    {
                        group: 'Fire & Structural Performance',
                        items: [
                            { name: 'Fire Integrity (E)', value: 'E60, E120, E180, E240 (BS EN 1634-1)' },
                            { name: 'Radiation Control (EW)', value: 'EW30, EW60, EW90 (BS EN 1634-1)' },
                            { name: 'Temperature Exposure', value: 'Withstands in excess of 1000°C for rated duration' },
                            { name: 'Deflection Resistance', value: 'High air velocity certified up to 20 m/s' }
                        ]
                    },
                    {
                        group: 'Mechanical & Construction',
                        items: [
                            { name: 'Fabric Material', value: 'Stainless steel wire reinforced fiberglass with intumescent silicone topcoat' },
                            { name: 'Headbox Construction', value: '1.5mm galvanized steel (RAL powder coat / stainless finish available)' },
                            { name: 'Side Guide Dimensions', value: '80mm x 60mm deep channel with captive fabric retention lips' },
                            { name: 'Bottom Bar Type', value: 'Weighted extruded aluminum / steel with internal ballast' }
                        ]
                    },
                    {
                        group: 'Electrical & Automation',
                        items: [
                            { name: 'Operating Voltage', value: '230V AC supply with internal 24V DC fail-safe motor' },
                            { name: 'Current Consumption', value: '1.2A per motor in standby; 3.5A during drive reset' },
                            { name: 'Battery Standby Time', value: 'Up to 72 hours under loss of mains supply' },
                            { name: 'Trigger Inputs', value: 'Normally closed volt-free contact from Fire Alarm Panel (FAP)' }
                        ]
                    },
                    {
                        group: 'Testing Standards & Certifications',
                        items: [
                            { name: 'European Standards', value: 'BS EN 1634-1, BS EN 1634-3, EN 13501-2' },
                            { name: 'American Standards', value: 'UL 10D, NFPA 80, NFPA 105' },
                            { name: 'Quality Management', value: 'ISO 9001:2015 accredited manufacturing' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Atriums & Escalator Openings',
                        description: 'Maintains open vertical sightlines while creating 2-hour compartmental barriers during fire alarms.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Airport & Transit Terminals',
                        description: 'Protects critical concourses and baggage handling openings without interrupting 24/7 foot traffic.',
                        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Commercial Offices & Lobbies',
                        description: 'Replaces bulky sliding fire doors with invisible overhead pockets flush with high-end ceiling aesthetics.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Hospitality & Shopping Centers',
                        description: 'Ensures safe egress routing across multi-level retail gallerias while maximizing tenant storefront visibility.',
                        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BS EN 1634-1', standard: 'Fire Resistance Test for Doors and Shutters', body: 'Warringtonfire / Exova', description: 'Certified for up to 240 minutes fire integrity' },
                    { code: 'UL 10D', standard: 'Fire Tests of Fire Protective Curtains', body: 'Underwriters Laboratories', description: 'North American certification for passive barrier systems' },
                    { code: 'BS EN 13501-2', standard: 'Fire Classification of Construction Products', body: 'BRE Global', description: 'Integrity and radiation reduction classification' }
                ],
                faqs: [
                    {
                        question: 'How do automatic fire curtains deploy if there is a complete power outage?',
                        answer: 'Our fire curtains operate on a gravity fail-safe system. Controlled by an internal electromagnetic brake and centrifugal speed governor, the curtain automatically descends at a controlled rate (0.15 - 0.3 m/s) even if electrical power to the building is completely severed.'
                    },
                    {
                        question: 'Can fire curtains be integrated into a Building Management System (BMS)?',
                        answer: 'Yes. Every control panel includes volt-free relay outputs for alarm trigger, fault monitoring, deployed position confirmation, and battery health reporting directly into BMS or SCADA architectures.'
                    },
                    {
                        question: 'What is the maximum span width available for a single curtain assembly?',
                        answer: 'Infinity fire curtains can span unlimited widths using overlapping modular roller assemblies with synchronized multi-motor systems, eliminating the need for unsightly intermediate structural posts.'
                    },
                    {
                        question: 'What is the difference between Fire Integrity (E) and Radiation Limitation (EW)?',
                        answer: 'Fire Integrity (E) measures the curtain ability to prevent the passage of flames and hot gases. Radiation Limitation (EW) additionally ensures that radiated heat transmission does not exceed 15 kW/m² on the unexposed side, protecting people evacuating down adjacent corridors.'
                    },
                    {
                        question: 'What routine maintenance is required for fire curtains?',
                        answer: 'In compliance with BS 9999 and NFPA 80, systems should undergo visual inspection monthly, test drops every 6 months, and an exhaustive annual servicing by certified technicians, which our nationwide service team provides.'
                    }
                ]
            },
            {
                id: 'smoke-curtains',
                slug: 'smoke-curtains',
                categorySlug: 'fire-smoke-protection',
                categoryTitle: 'Fire & Smoke Protection',
                title: 'Automatic Smoke Curtains',
                shortTitle: 'Smoke Curtains',
                badge: 'BS EN 12101-1 Certified (Class D120 / DH120)',
                tagline: 'Precision smoke channelization and reservoir containment for safe evacuation.',
                overview: 'Smoke inhalation causes over 70% of fire-related fatalities. Infinity Automatic Smoke Curtains deploy to establish designated smoke reservoirs beneath ceilings, preventing the lateral migration of toxic gases and hot combustion products. Working in synergy with natural or mechanical smoke extraction systems, they maintain a tenable, smoke-free evacuation layer across vast building spaces.',
                fullDescription: [
                    'In high-volume public facilities such as transit hubs, shopping malls, exhibition centers, and manufacturing plants, smoke rapidly cools and descends to human breathing level if not properly channelized. Infinity Automatic Smoke Curtains create defined ceiling reservoirs that trap buoyant hot gases directly above smoke exhaust louvers.',
                    'Engineered to meet the stringent requirements of BS EN 12101-1 Class D120 (withstands 600°C for 120 minutes) and Class DH120 (withstands time-temperature curve up to 1000°C), these curtains utilize lightweight, high-tensile glass fabrics treated with polyurethanes and fire-retardant polymers.',
                    'The curtains can be specified with partial drop settings to create overhead baffles while allowing unrestricted human movement beneath, or full drops to seal off entire zones.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-volume smoke reservoir curtain deployed in airport terminal concourse'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Ceiling edge smoke barrier channeling smoke toward mechanical exhaust extractors'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Architecturally concealed slimline casing recessed in retail mall ceiling'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Multi-layer fire-retardant smoke barrier textile close-up'
                    }
                ],
                quickSpecs: [
                    { label: 'Classification', value: 'BS EN 12101-1 Class D120 / DH120', highlight: true },
                    { label: 'Thermal Resistance', value: '600°C to 1000°C for 120 Mins' },
                    { label: 'Operation', value: 'Gravity Fail-Safe Drop to Intermediate Depth' },
                    { label: 'Permeability', value: '< 25 m³/hr per m² at 50 Pa', highlight: true },
                    { label: 'Fabric Weight', value: '460 g/m² Treated Glass Filament' },
                    { label: 'Drop Heights', value: 'Custom engineered up to 10m drop' }
                ],
                features: [
                    {
                        title: 'Smoke Reservoir Channelization',
                        description: 'Creates dedicated overhead reservoirs that channel hot toxic gases directly to smoke clearance fans and vents.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Dual Temperature Rating',
                        description: 'Certified to Class D120 (600°C constant) and Class DH120 (standard ISO 834 fire curve reaching 1000°C).',
                        icon: 'Flame'
                    },
                    {
                        title: 'Low Air Permeability Fabric',
                        description: 'High-density woven glass fabric with polyurethane coating prevents smoke seepage under high exhaust pressure.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Variable Drop Positions',
                        description: 'Programmable intermediate stopping depths maintain a clear headroom layer for occupants while trapping smoke aloft.',
                        icon: 'Sliders'
                    },
                    {
                        title: 'Zero Overhead Clutter',
                        description: 'Ultra-slim headbox dimensions fit within modern ceiling cavities without disrupting architectural lighting or HVAC.',
                        icon: 'Layers'
                    },
                    {
                        title: 'Synchronized Group Deployment',
                        description: 'Central group controller manages up to 16 curtains simultaneously with synchronized gravity descent.',
                        icon: 'Zap'
                    }
                ],
                specifications: [
                    {
                        group: 'Thermal & Smoke Control',
                        items: [
                            { name: 'Standard Rating', value: 'BS EN 12101-1:2005 + A1:2006' },
                            { name: 'Classification', value: 'D120 (600°C constant) / DH120 (1000°C fire curve)' },
                            { name: 'Smoke Leakage', value: 'Measures well below EN 12101 limits at 50 Pa pressure' },
                            { name: 'Operational Reliability', value: 'Tested to 1,000 cycles without degradation (Type AS)' }
                        ]
                    },
                    {
                        group: 'Fabric & Mechanical Assembly',
                        items: [
                            { name: 'Fabric Structure', value: 'E-Glass filament woven fabric with specialized polymer finish' },
                            { name: 'Fabric Weight & Thickness', value: 'Approx. 460 g/m²; 0.45mm nominal thickness' },
                            { name: 'Bottom Bar Design', value: 'Weighted extruded aluminum with cleanline bottom seal' },
                            { name: 'Roller Barrel', value: 'High rigidity galvanized steel tube with precision bearings' }
                        ]
                    },
                    {
                        group: 'Electrical Controls',
                        items: [
                            { name: 'Motor Type', value: '24V DC planetary geared tubular motor' },
                            { name: 'Power Supply', value: '230V AC input, monitored 24V DC output with battery reserve' },
                            { name: 'Descent Velocity', value: 'Controlled at 0.15 - 0.25 m/s' },
                            { name: 'Signal Compatibility', value: 'Direct FAP relay, optical smoke detector input, BMS telemetry' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Large Commercial Atriums',
                        description: 'Prevents upper mezzanine smoke inundation during atrium ground-floor fire incidents.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Industrial Warehouses & Logistics',
                        description: 'Divides large open roof spans into controlled smoke extraction zones.',
                        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Railway & Metro Stations',
                        description: 'Guides smoke away from platform waiting areas and upward into tunnel vent shafts.',
                        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Convention Centers & Arenas',
                        description: 'Maintains required sightline clearances while providing life-safety code compliance for thousands of visitors.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BS EN 12101-1', standard: 'Smoke and Heat Control Systems — Part 1: Specification for smoke barriers', body: 'Certifire / Warringtonfire', description: 'Certified Class D120 and DH120 performance' },
                    { code: 'CE Marking', standard: 'Construction Products Regulation (CPR 305/2011)', body: 'Notified Body 0833', description: 'Full EU and UK conformity compliance' }
                ],
                faqs: [
                    {
                        question: 'What is the primary difference between a smoke curtain and a fire curtain?',
                        answer: 'While fire curtains are designed to withstand direct flames, intense radiant heat, and prevent fire spread (E & EW ratings), smoke curtains are specifically designed to channel smoke and toxic fumes at ceiling level into extract systems, preserving clear evacuation layers below.'
                    },
                    {
                        question: 'Can smoke curtains be configured without side guides?',
                        answer: 'Yes! Smoke curtains frequently use free-hanging weighted bottom bars without side guides, utilizing slight fabric overlap where wide continuous runs are required, preserving sleek architectural finishes.'
                    },
                    {
                        question: 'What temperature can the smoke curtain fabric withstand?',
                        answer: 'Our Class DH120 curtains withstand continuous exposure to 600°C and follow the ISO 834 fire time-temperature curve reaching up to 1000°C for a verified duration of 120 minutes.'
                    },
                    {
                        question: 'How do smoke curtains assist fire service personnel?',
                        answer: 'By keeping smoke trapped in ceiling reservoirs, smoke curtains preserve optical visibility at ground level, allowing firefighters to rapidly locate the seat of the fire and assist trapped occupants.'
                    }
                ]
            }
        ]
    },
    {
        id: 'fire-rated-glass',
        slug: 'fire-rated-glass',
        title: 'Fire-Rated Glass',
        shortTitle: 'Fire Glass',
        eyebrow: 'Architectural Transparency Meets Fire Science',
        badge: 'EI 30 - EI 120 Insulation',
        description: 'Optically pristine, multi-laminate fire-resistant glass solutions offering uncompromised daylighting, acoustic attenuation, and certified thermal insulation against extreme fire conditions.',
        heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        icon: 'Shield',
        products: [
            {
                id: 'advanced-fire-resistant-glass',
                slug: 'advanced-fire-resistant-glass',
                categorySlug: 'fire-rated-glass',
                categoryTitle: 'Fire-Rated Glass',
                title: 'Advanced Fire-Resistant Glass',
                shortTitle: 'Fire-Resistant Glass',
                badge: 'EI 30 to EI 120 Thermal Insulation',
                tagline: 'Multi-layer intumescent glass that blocks fire, radiant heat, and lethal temperatures.',
                overview: 'Infinity Advanced Fire-Resistant Glass combines crystal-clear aesthetic transparency with life-saving thermal barrier science. Constructed using multiple plies of low-iron toughened float glass separated by transparent intumescent gel interlayers, this glass transforms during a fire into an opaque, solid heat-shield, maintaining the non-fire side temperature below 140°C even when exposed to over 1000°C on the fire side.',
                fullDescription: [
                    'Architects and structural engineers no longer need to sacrifice natural light, spatial openness, and visual connectivity for fire safety. Our Advanced Fire-Resistant Glass is certified to the highest European standard classification: EI (Integrity and Thermal Insulation).',
                    'When exposed to heat exceeding 120°C, the transparent intumescent interlayers react by foaming and expanding into a thick, milky-white insulating shield. This reactive expansion blocks 100% of flaming gas passage and reduces dangerous heat radiation down to near zero.',
                    'Available in double-glazed and triple-glazed insulated glass units (IGUs) with Low-E and solar control coatings, our fire glass solutions achieve exceptional acoustic performance (Rw up to 47 dB) and energy efficiency for both internal partitions and exterior facades.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Full-height fire-rated glazed wall with EI 120 performance in office headquarters'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Pristine acoustic and fire glass partition separating meeting suites'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Intumescent interlayer technology reacting under extreme heat test conditions'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Butt-jointed frameless fire glass installation preserving visual flow'
                    }
                ],
                quickSpecs: [
                    { label: 'Classification', value: 'EI 30, EI 60, EI 90, EI 120 (EN 13501-2)', highlight: true },
                    { label: 'Thermal Insulation', value: '< 140°C Mean Temp Rise on Unexposed Face' },
                    { label: 'Acoustic Rating', value: 'Rw up to 47 dB Sound Reduction', highlight: true },
                    { label: 'Light Transmission', value: 'Up to 88% (Low Iron Substrate)' },
                    { label: 'Glass Thickness', value: '15mm to 52mm depending on rating' },
                    { label: 'Impact Safety', value: 'Class 1(B)1 to EN 12600' }
                ],
                features: [
                    {
                        title: 'Total Thermal Insulation (EI)',
                        description: 'Blocks heat radiation completely, preventing spontaneous ignition of materials on the protected side.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Ultra-Clear Low-Iron Float Glass',
                        description: 'Delivers pristine optical clarity with minimal green tint and up to 88% visible light transmission.',
                        icon: 'Sparkles'
                    },
                    {
                        title: 'Reactive Intumescent Interlayer',
                        description: 'Expands into an opaque ceramic foam shield under fire conditions to prevent occupant panic during evacuation.',
                        icon: 'Flame'
                    },
                    {
                        title: 'Superb Acoustic Insulation',
                        description: 'The dense gel interlayer naturally absorbs sound vibrations, achieving sound attenuation ratings up to Rw 47 dB.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Safety Impact Certified',
                        description: 'Fully complies with EN 12600 Class 1(B)1 human impact safety standards for barrier loading and partitions.',
                        icon: 'Award'
                    },
                    {
                        title: 'UV Stable & Moisture Proof',
                        description: 'Edge-sealed with specialized hermetic barriers to prevent clouding, delamination, or discoloration over decades.',
                        icon: 'CheckCircle2'
                    }
                ],
                specifications: [
                    {
                        group: 'Fire & Insulation Ratings',
                        items: [
                            { name: 'Fire Resistance Standard', value: 'BS EN 1364-1 (Non-loadbearing walls), BS EN 1634-1 (Doors)' },
                            { name: 'Integrity & Insulation', value: 'EI 30 (15-18mm), EI 60 (23-28mm), EI 90 (35-42mm), EI 120 (48-54mm)' },
                            { name: 'Heat Radiation Limit', value: '< 1 kW/m² measured at 1 meter distance' },
                            { name: 'Unexposed Side Temp Rise', value: 'Max ΔT 140°C average / 180°C single point' }
                        ]
                    },
                    {
                        group: 'Optical & Physical Properties',
                        items: [
                            { name: 'Substrate Type', value: 'Extra-clear low-iron toughened safety glass' },
                            { name: 'Visible Light Transmission', value: '82% - 88% (single glazing depending on thickness)' },
                            { name: 'Solar Heat Gain Coeff. (SHGC)', value: '0.68 (monolithic) / customizable down to 0.28 with solar coatings' },
                            { name: 'Weight per m²', value: '38 kg/m² (EI30) to 115 kg/m² (EI120)' }
                        ]
                    },
                    {
                        group: 'Safety & Environmental',
                        items: [
                            { name: 'Impact Resistance', value: 'EN 12600 Class 1(B)1' },
                            { name: 'Sound Attenuation', value: '40 dB (EI30) to 47 dB (EI120) Rw (C;Ctr)' },
                            { name: 'Temperature Operating Range', value: '-20°C to +50°C' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Fire Escape Corridors & Stairwells',
                        description: 'Enables bright, glass-lined exit stairs that protect evacuees from deadly radiant heat.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Executive Boardrooms & Partitions',
                        description: 'Achieves high acoustic confidentiality alongside stringent building code fire separation.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Healthcare & Laboratories',
                        description: 'Provides sterile, easily cleanable transparent partitions that prevent toxic smoke and fire transmission.',
                        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Data Centers & Server Rooms',
                        description: 'Protects critical server infrastructure from adjacent hazards while facilitating visitor viewing corridors.',
                        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BS EN 1363-1 / 1364-1', standard: 'Fire Resistance Tests for Non-Loadbearing Elements', body: 'Efectis / Warringtonfire', description: 'Certified for up to 120 minutes full integrity and insulation' },
                    { code: 'EN 12600', standard: 'Glass in Building — Pendulum Test Impact Resistance', body: 'TÜV Rheinland', description: 'Highest Class 1(B)1 safety classification' },
                    { code: 'UL 9 / UL 10C', standard: 'Standard for Fire Tests of Window and Door Assemblies', body: 'Underwriters Laboratories', description: 'Certified for North American building safety codes' }
                ],
                faqs: [
                    {
                        question: 'What is the crucial difference between E, EW, and EI rated fire glass?',
                        answer: 'E (Integrity) prevents only flame and hot gas passage. EW (Radiation) restricts heat transmission to 15 kW/m². EI (Insulation) is the highest standard: it completely blocks both flame passage and thermal radiation, keeping the glass cool to the touch (under 140°C rise) so combustible materials cannot ignite on the other side.'
                    },
                    {
                        question: 'Can Advanced Fire-Resistant Glass be cut or trimmed on-site?',
                        answer: 'No. Because each pane utilizes specialized toughened safety glass and hermetically sealed intumescent chemical gel layers, all fire-rated glass must be factory-manufactured to exact site dimensions.'
                    },
                    {
                        question: 'Can this glass be incorporated into external insulated glass units (IGUs)?',
                        answer: 'Yes! We manufacture double and triple glazed units pairing our fire-resistant glass with Low-E, acoustic laminated, or tinted solar-control glass panes for exterior building facades.'
                    },
                    {
                        question: 'How long does the fire-resistant performance last under normal conditions?',
                        answer: 'When installed according to our engineering guidelines, our fire glass possesses an expected service life exceeding 25 years with high UV resistance and zero hazing or delamination.'
                    }
                ]
            },
            {
                id: 'fire-rated-glazing',
                slug: 'fire-rated-glazing',
                categorySlug: 'fire-rated-glass',
                categoryTitle: 'Fire-Rated Glass',
                title: 'Fire-Rated Glazing Systems',
                shortTitle: 'Fire-Rated Glazing',
                badge: 'EN 1364-1 / EN 1364-3 Tested Systems',
                tagline: 'Complete engineered steel and aluminum architectural framing with tested fire glass.',
                overview: 'A fire-rated glass pane is only as resilient as the framing system holding it. Infinity Fire-Rated Glazing Systems offer complete, factory-certified assemblies consisting of thermally broken steel or aluminum framing, intumescent glazing gaskets, and precision glass clamping channels. Tested as complete structural assemblies, they guarantee certified fire containment up to 120 minutes.',
                fullDescription: [
                    'Specifying fire-rated glass requires certified framing that will not buckle, distort, or allow flame bypass under extreme thermal expansion. Our systems utilize heavy-duty cold-rolled steel profiles with ceramic core inserts or thermally broken architectural aluminum profiles.',
                    'Engineered for both interior screen walls and exterior curtain walls, these systems support spans up to 4.5 meters in height without horizontal transoms, providing architects with panoramic floor-to-ceiling glass expanses.',
                    'The framing accommodates concealed cabling, magnetic lock integration, and architectural finishes including powder coating in any RAL shade, high-grade brushed stainless steel, and bronze anodized finishes.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Thermally broken fire-rated steel curtain wall facade system'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Floor-to-ceiling interior fire glazing partition with sleek sightlines'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Butt-jointed siliconized fire glass partition with concealed perimeter framing'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Precision stainless steel profile fabrication and corner joint detail'
                    }
                ],
                quickSpecs: [
                    { label: 'System Rating', value: 'EI 30 to EI 120 (Complete Assembly)', highlight: true },
                    { label: 'Frame Material', value: 'Insulated Cold-Rolled Steel / Aluminum' },
                    { label: 'Profile Sightline', value: 'Slim 50mm - 70mm Visual Width', highlight: true },
                    { label: 'Max Span Height', value: 'Up to 4,500mm Continuous Span' },
                    { label: 'Thermal Transmittance', value: 'Uf down to 1.3 W/m²K' },
                    { label: 'Finishes', value: 'RAL Powder Coat, Brushed SS, Anodized' }
                ],
                features: [
                    {
                        title: 'Fully Tested System Compatibility',
                        description: 'Glass, frame profiles, setting blocks, and intumescent gaskets are tested and certified together as a complete unit.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Ultra-Slim 50mm Sightlines',
                        description: 'Engineered high-yield steel provides extreme structural load capacity with exceptionally minimalist profiles.',
                        icon: 'Layers'
                    },
                    {
                        title: 'Thermally Broken Technology',
                        description: 'Ceramic insulated thermal breaks eliminate thermal bridging for exterior building envelope energy compliance.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Butt-Joint Frameless Options',
                        description: 'Achieve sweeping panoramic spans using clear fire-rated silicone joints without vertical profile mullions.',
                        icon: 'Sparkles'
                    },
                    {
                        title: 'High Acoustic Performance',
                        description: 'Comprehensive acoustic gaskets provide sound attenuation up to 48 dB for sensitive meeting environments.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Modular Site Assembly',
                        description: 'Prefabricated precision-welded or mechanically fastened modular units ensure fast, defect-free site erection.',
                        icon: 'Wrench'
                    }
                ],
                specifications: [
                    {
                        group: 'Framing & Structural Design',
                        items: [
                            { name: 'Profile Construction', value: '1.5mm - 2.0mm high-tensile cold-rolled steel with silicate insulation cores' },
                            { name: 'Profile Depth', value: '50mm (EI30), 65mm (EI60), 80mm (EI90), 95mm (EI120)' },
                            { name: 'Face Width (Sightline)', value: '50mm to 70mm standard' },
                            { name: 'Connection Method', value: 'Full penetration robotic welded corners or mechanical bracket joints' }
                        ]
                    },
                    {
                        group: 'Glazing & Seals',
                        items: [
                            { name: 'Glazing Beads', value: 'Snap-on steel or aluminum beads with concealed clip fasteners' },
                            { name: 'Intumescent Seals', value: 'Graphite-based intumescent tape expanding 15x at 180°C' },
                            { name: 'Setting Blocks', value: 'High-temperature alkaline earth silicate fiber blocks' },
                            { name: 'Weather Gaskets', value: 'EPDM / silicone weatherseals certified to EN 12207 Class 4' }
                        ]
                    },
                    {
                        group: 'Thermal & Acoustic Specs',
                        items: [
                            { name: 'Thermal Insulation (Uf)', value: '1.3 to 2.1 W/m²K depending on thermal break type' },
                            { name: 'Acoustic Sound Barrier', value: 'Rw 38 dB to 48 dB' },
                            { name: 'Wind Load Resistance', value: 'Up to 3.0 kPa design load (EN 12210 Class C5)' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Atrium Fire Walls & Lift Enclosures',
                        description: 'Ensures vertical shaft protection without darkening panoramic building elevators.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Exterior Glazed Curtain Walls',
                        description: 'Prevents vertical flame spread between floors across multi-story modern glazed building envelopes.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Airport Terminal Partitions',
                        description: 'Divides security check, customs, and public concourses while meeting international fire regulations.',
                        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Museums & Heritage Restorations',
                        description: 'Provides discreet, museum-grade security and fire division without compromising historic aesthetics.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BS EN 1364-1 & 1364-3', standard: 'Fire Resistance for Non-Loadbearing Walls and Curtain Walling', body: 'Warringtonfire', description: 'Certified EI 30 through EI 120 complete systems' },
                    { code: 'EN 12210 / EN 12207', standard: 'Wind Load and Air Permeability Standards', body: 'ift Rosenheim', description: 'Full architectural building envelope certification' }
                ],
                faqs: [
                    {
                        question: 'Why can regular aluminum or steel frames not be used with fire-rated glass?',
                        answer: 'Standard aluminum frames melt at approximately 660°C within the first 10 minutes of a standard fire curve. Standard steel warps dramatically without internal thermal insulating silicate cores, allowing the glass to dislodge and fail. Only certified fire-rated framing assemblies retain structural integrity during a fire.'
                    },
                    {
                        question: 'Can these glazing systems integrate fire-rated single and double doors?',
                        answer: 'Yes! Our glazing systems seamlessly integrate fully certified flush-glazed fire doors matching the profile dimensions, hardware finishes, and fire ratings of the surrounding screen.'
                    },
                    {
                        question: 'What finishes are available for the profiles?',
                        answer: 'Profiles can be finished in any standard or metallic RAL powder-coat, anodized architectural finishes, or clad in Grade 304/316 brushed stainless steel or architectural bronze.'
                    }
                ]
            }
        ]
    },
    {
        id: 'fire-rated-doors',
        slug: 'fire-rated-doors',
        title: 'Fire-Rated Doors',
        shortTitle: 'Fire Doors',
        eyebrow: 'Certified Egress & Barrier Systems',
        badge: 'UL 10C & BS 476 Certified',
        description: 'Heavy-duty steel and precision architectural timber fire-rated doors engineered to deliver up to 240 minutes of structural stability, smoke containment, and emergency egress safety.',
        heroImage: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1600&q=80',
        icon: 'DoorClosed',
        products: [
            {
                id: 'metal-fire-rated-doors',
                slug: 'metal-fire-rated-doors',
                categorySlug: 'fire-rated-doors',
                categoryTitle: 'Fire-Rated Doors',
                title: 'Metal Fire-Rated Doors',
                shortTitle: 'Metal Fire Doors',
                badge: '120 - 240 Mins Fire Rating (UL 10C / BS 476)',
                tagline: 'High-strength galvanized steel doors engineered for severe duty and fire integrity.',
                overview: 'Infinity Metal Fire-Rated Doors are precision engineered for industrial plants, stairwell egress shafts, commercial complexes, and healthcare facilities. Fabricated with electro-galvanized or stainless steel skins bonded to high-density rockwool or honeycomb insulated cores, these doors withstand severe physical abuse while ensuring dependable fire and smoke containment up to 4 hours.',
                fullDescription: [
                    'In emergency evacuations, fire exit doors serve as the final barrier between life safety and lethal smoke or heat. Our metal fire doors are manufactured on automated CNC bending lines with interlocking mechanical seam edges, eliminating visible weld marks while maximizing torsional rigidity.',
                    'The door leaves feature internal reinforcement plates for heavy-duty panic bars, overhead door closers, and mortise locks. High-grade intumescent perimeter seals expand dramatically under elevated temperatures to seal microscopic perimeter gaps against smoke penetration.',
                    'Tested to UL 10C (positive pressure), BS 476 Part 22, and IS 3614, these doors are offered in single, unequal double, and equal double leaf configurations with fire-rated vision panels and certified louvers.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Double leaf metal fire door assembly with UL-listed panic hardware in exit stairwell'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Galvanized steel construction with premium epoxy primer and RAL powder finish'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Precision reinforced hinges and integrated intumescent smoke acoustic drop seals'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Fire-rated ceramic vision glass panel integrated with flush steel beading'
                    }
                ],
                quickSpecs: [
                    { label: 'Fire Rating', value: '60, 120, 180, 240 Mins (BS 476 / UL 10C)', highlight: true },
                    { label: 'Door Thickness', value: '45mm to 55mm Leaf Thickness' },
                    { label: 'Material', value: '1.2mm - 1.6mm Galvanized Steel / SS 304/316' },
                    { label: 'Core Insulation', value: 'High Density Rockwool (96-120 kg/m³)', highlight: true },
                    { label: 'Frame Profile', value: '100mm - 150mm Double Rebate Frame' },
                    { label: 'Durability', value: 'Tested to 1 Million Cycles (Severe Duty)' }
                ],
                features: [
                    {
                        title: 'Interlocking Seam Construction',
                        description: 'Mechanical lock-seam edges provide maximum strength without visible welds or heat-distortion stress points.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'High-Density Rockwool Core',
                        description: 'Infused with 96-120 kg/m³ non-combustible rockwool for superior fire insulation and acoustic dampening.',
                        icon: 'Flame'
                    },
                    {
                        title: 'Heavy-Duty Hardware Reinforcements',
                        description: 'Internal 3mm steel mounting plates pre-welded for hinges, panic exit hardware, and overhead door closers.',
                        icon: 'Wrench'
                    },
                    {
                        title: 'Integrated Smoke & Draft Gaskets',
                        description: 'Thermal intumescent graphite seals expand at 180°C to hermetically seal door perimeter against toxic fumes.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Positive Pressure UL 10C Tested',
                        description: 'Certified to withstand aggressive positive air pressures and sudden hose-stream impact testing.',
                        icon: 'Award'
                    },
                    {
                        title: 'Corrosion-Resistant Powder Coat',
                        description: 'Pure polyester powder coating with zinc-rich epoxy primer provides 1,000-hour salt spray corrosion resistance.',
                        icon: 'CheckCircle2'
                    }
                ],
                specifications: [
                    {
                        group: 'Fire & Mechanical Ratings',
                        items: [
                            { name: 'Fire Standards', value: 'BS 476 Part 22, UL 10B/10C, IS 3614 Part 2' },
                            { name: 'Rated Durations', value: '60, 120, 180, 240 minutes' },
                            { name: 'Hose Stream Test', value: 'Passed 30 psi / 45 psi water stream impact post-burn' },
                            { name: 'Cycle Testing', value: 'ANSI A250.4 Level 1 (1,000,000 full operating cycles)' }
                        ]
                    },
                    {
                        group: 'Material & Dimensions',
                        items: [
                            { name: 'Door Leaf Sheet', value: '1.2mm (18 gauge) or 1.6mm (16 gauge) galvanized steel sheet' },
                            { name: 'Frame Sheet', value: '1.5mm (16 gauge) or 2.0mm (14 gauge) galvanized steel profile' },
                            { name: 'Core Material', value: 'Resin-bonded rockwool slab (100 kg/m³) or honeycomb core' },
                            { name: 'Leaf Thickness', value: '45mm standard / 55mm for 240-minute assemblies' }
                        ]
                    },
                    {
                        group: 'Hardware & Accessories',
                        items: [
                            { name: 'Hinge Prep', value: 'Template-prepared for 4.5" x 4.5" ball bearing stainless steel hinges' },
                            { name: 'Lock Prep', value: 'Mortise lock ANSI A156.13 / Panic exit device ANSI A156.3 prep' },
                            { name: 'Vision Panel', value: 'Up to 2-hour clear fire glass (max 100 sq inches for UL)' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Fire Exit Stairwells & Shafts',
                        description: 'Guarantees safe egress corridors for high-rise commercial towers and residential complexes.',
                        image: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Industrial Plants & Sub-stations',
                        description: 'Isolates high-voltage electrical transformers, generator rooms, and boiler installations.',
                        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Data Centers & Server Halls',
                        description: 'Provides airtight compartmentation protecting server racks and gas-suppression fire zones.',
                        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Hospitals & Healthcare Facilities',
                        description: 'Provides antimicrobial powder finishes with quiet, reliable panic hardware for patient wings.',
                        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'UL 10C', standard: 'Positive Pressure Fire Tests of Door Assemblies', body: 'Underwriters Laboratories Inc.', description: 'Certified for 180 mins with hose-stream resistance' },
                    { code: 'BS 476 Part 22', standard: 'Fire Tests on Building Materials and Structures', body: 'Warringtonfire', description: 'Certified for 120 and 240 minutes fire resistance' },
                    { code: 'IS 3614', standard: 'Fire Check Doors Specification', body: 'Bureau of Indian Standards (BIS)', description: 'Full national building code compliance' }
                ],
                faqs: [
                    {
                        question: 'What is positive pressure UL 10C testing and why is it important?',
                        answer: 'In real building fires, hot gases expand creating positive air pressure in the upper two-thirds of the room. UL 10C tests doors under realistic positive pressure conditions, verifying that hot gases and flames do not breach the door head and perimeter.'
                    },
                    {
                        question: 'Can metal fire doors include glass vision panels?',
                        answer: 'Yes! We provide factory-fitted fire-rated vision panels up to 120 or 180 minutes using certified steel glazing bezels and specialized clear fire-resistant glass.'
                    },
                    {
                        question: 'What surface finishes are offered?',
                        answer: 'Standard finishes include zinc-chromate primer, architectural powder coating in any RAL shade, or heavy-duty brushed Grade 304 / Grade 316 stainless steel for sterile or coastal environments.'
                    }
                ]
            },
            {
                id: 'wooden-fire-rated-doors',
                slug: 'wooden-fire-rated-doors',
                categorySlug: 'fire-rated-doors',
                categoryTitle: 'Fire-Rated Doors',
                title: 'Wooden Fire-Rated Doors',
                shortTitle: 'Timber Fire Doors',
                badge: 'FD 30 to FD 120 (BS 476 Part 22)',
                tagline: 'Exquisite natural wood finishes harmonized with certified fire barrier cores.',
                overview: 'Engineered for luxury hospitality, corporate headquarters, and high-end residential interiors where architectural elegance is paramount, Infinity Wooden Fire-Rated Doors offer certified fire protection from 30 to 120 minutes without compromising interior design aesthetics. Finished in premium natural timber veneers, laminates, or polyurethane lacquers, they blend safety seamlessly into luxury spaces.',
                fullDescription: [
                    'Combining natural timber craftsmanship with fire engineering, our wooden fire doors are constructed with dense mineral or solid particle fire cores wrapped in hardwood lippings and acoustic intumescent perimeter seals.',
                    'Every door leaf is factory-machined on computer-controlled 5-axis CNC centres for exact hardware tolerances, ensuring that intumescent pads around mortise locks, hinges, and concealed door closers expand reliably during fire exposure.',
                    'In addition to fire resistance, these assemblies deliver outstanding acoustic performance up to 44 dB, making them the preferred choice for 5-star hotel guestrooms, executive boardrooms, and private cinema suites.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Luxury hotel guestroom entrance door with FD 60 fire and 42 dB acoustic rating'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Executive boardroom flush natural walnut veneer fire door assembly'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Concealed overhead door closer and magnetic drop-down acoustic bottom seal'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Precision hardwood lipping detail with rebated intumescent smoke strips'
                    }
                ],
                quickSpecs: [
                    { label: 'Fire Rating', value: 'FD 30, FD 60, FD 90, FD 120 (BS 476 Part 22)', highlight: true },
                    { label: 'Acoustic Sound', value: 'Sound Reduction Rw 32 dB to 44 dB', highlight: true },
                    { label: 'Core Material', value: 'Solid Mineral / High-Density Halspan Core' },
                    { label: 'Leaf Thickness', value: '44mm (FD30), 54mm (FD60), 64mm (FD120)' },
                    { label: 'Veneers', value: 'Natural Walnut, Oak, Teak, Ash, Custom Lacquer' },
                    { label: 'Smoke Control', value: 'BS 476 Part 31.1 Cold Smoke Tested' }
                ],
                features: [
                    {
                        title: 'Architectural Wood Finishes',
                        description: 'Available in book-matched natural veneers, engineered wood grains, high-pressure laminates, or custom RAL lacquers.',
                        icon: 'Sparkles'
                    },
                    {
                        title: 'Certified Solid Fire Core',
                        description: 'Utilizes high-density solid composite or mineral particleboard cores certified under the BM TRADA Q-Mark scheme.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Superior Acoustic Isolation',
                        description: 'Delivers acoustic sound transmission class ratings up to 44 dB for ultimate acoustic privacy and quietness.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'CNC Factory Machining',
                        description: 'Pre-machined under strict factory tolerances for concealed closers, electronic locks, and flush drop seals.',
                        icon: 'Wrench'
                    },
                    {
                        title: 'Hardwood Concealed Lippings',
                        description: 'High-density European oak or beech perimeter lippings conceal internal cores while enhancing edge impact strength.',
                        icon: 'Layers'
                    },
                    {
                        title: 'Intumescent Gasket Protection',
                        description: 'Graphite-based intumescent seals encased in PVC carriers fit flush into door leaf or frame rebates.',
                        icon: 'Flame'
                    }
                ],
                specifications: [
                    {
                        group: 'Fire & Acoustic Ratings',
                        items: [
                            { name: 'Fire Resistance Test', value: 'BS 476 Part 22:1987 / BS EN 1634-1' },
                            { name: 'Classification', value: 'FD 30, FD 60, FD 90, FD 120 minutes' },
                            { name: 'Smoke Seal Rating', value: 'BS 476 Part 31.1 (< 3 m³/hr per meter perimeter at 25 Pa)' },
                            { name: 'Acoustic Performance', value: '32 dB to 44 dB Rw (tested to BS EN ISO 140-3)' }
                        ]
                    },
                    {
                        group: 'Door Construction',
                        items: [
                            { name: 'Internal Core', value: 'Halspan / Strebord solid agrowaste or mineral fire core' },
                            { name: 'Hardwood Edging', value: 'Minimum 8mm - 12mm solid kiln-dried hardwood lipping' },
                            { name: 'Facing Substrate', value: 'High-density moisture-resistant MDF or marine ply sub-face' },
                            { name: 'Frame Profile', value: 'Matching solid hardwood frame (min 650 kg/m³ density) or metal frame' }
                        ]
                    },
                    {
                        group: 'Dimensions & Hardware Prep',
                        items: [
                            { name: 'Leaf Thickness', value: '44mm (FD30), 54mm (FD60), 64mm (FD120)' },
                            { name: 'Max Leaf Dimensions', value: 'Up to 2,800mm height x 1,200mm width per leaf' },
                            { name: 'Concealed Drop Seal', value: 'Heavy-duty automatic acoustic drop seal routed into door bottom' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: '5-Star Hotel Guestrooms',
                        description: 'Provides guests with peaceful acoustic quietness and certified FD 60 life safety.',
                        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Corporate Executive Suites',
                        description: 'Combines rich natural wood veneers with stringent commercial building code compliance.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'High-End Luxury Residences',
                        description: 'Blends seamlessly into luxury residential interior architectural design schemes.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Conference & Auditoriums',
                        description: 'Provides high acoustic dampening alongside wide emergency egress door spans.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BM TRADA Q-Mark', standard: 'Fire Door Manufacturer Scheme', body: 'BM TRADA', description: 'Third-party certified quality assurance and traceability' },
                    { code: 'BS 476 Part 22', standard: 'Fire Tests on Building Materials and Structures', body: 'Chiltern International Fire', description: 'Certified for up to 120 minutes fire integrity' },
                    { code: 'FSC Certified', standard: 'Forest Stewardship Council Certified Timber', body: 'FSC International', description: '100% sustainable timber sourcing compliance' }
                ],
                faqs: [
                    {
                        question: 'Can wooden fire doors achieve acoustic ratings at the same time?',
                        answer: 'Yes! Our wooden fire doors are engineered as dual-performance assemblies. By combining high-density solid cores, intumescent-acoustic perimeter perimeter seals, and automatic bottom drop seals, we achieve sound attenuation ratings up to 44 dB.'
                    },
                    {
                        question: 'Can I install electronic locks or keycard handles on wooden fire doors?',
                        answer: 'Yes. All hardware mortises are factory CNC machined and lined with specialized 1mm - 2mm intumescent pads that swell during fire exposure, protecting lock cavities from burning through.'
                    },
                    {
                        question: 'What veneer species are available?',
                        answer: 'We offer an extensive library of architectural wood veneers including American Walnut, European White Oak, Natural Teak, Santos Rosewood, Wenge, and Crown Cut Ash, finished in open-pore or high-gloss UV lacquers.'
                    }
                ]
            }
        ]
    },
    {
        id: 'led-lighting',
        slug: 'led-lighting',
        title: 'LED Lighting',
        shortTitle: 'LED Lighting',
        eyebrow: 'High-Efficacy Professional Illumination',
        badge: 'Up to 170 lm/W • IP66 & DALI-2',
        description: 'Comprehensive solid-state luminaire systems engineered for industrial warehouses, high-end commercial workspaces, municipal roadways, and dynamic architectural facades.',
        heroImage: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1600&q=80',
        icon: 'Lightbulb',
        products: [
            {
                id: 'industrial-led-lighting',
                slug: 'industrial-led-lighting',
                categorySlug: 'led-lighting',
                categoryTitle: 'LED Lighting',
                title: 'Industrial LED Lighting',
                shortTitle: 'Industrial LED',
                badge: '170 lm/W • IP66 / IK10 Heavy Duty',
                tagline: 'High-bay and low-bay luminaires engineered for extreme thermal, dusty, and factory environments.',
                overview: 'Engineered for logistics centers, heavy manufacturing facilities, hangars, and chemical plants, Infinity Industrial LED Luminaires deliver high luminous flux up to 60,000 lumens with efficacy up to 170 lm/W. Featuring die-cast ADC12 aluminum housings with patented multi-fin thermal chimneys, they ensure continuous 24/7/365 operation in ambient temperatures up to +55°C without lumen depreciation.',
                fullDescription: [
                    'Industrial environments subject lighting to severe electrical surges, vibrational stress, dust accumulation, and elevated temperatures. Our industrial luminaires are constructed with isolated Mean Well / Inventronics drivers and Lumileds / Nichia LED chips protected by tempered optical glass lenses.',
                    'With IP66 ingress protection and IK10 mechanical impact ratings, these fixtures are immune to pressurized washdowns, airborne particulate, and mechanical impacts from forklifts.',
                    'Options include DALI-2 intelligent dimming, Zigbee wireless mesh control, integrated daylight harvesting and PIR microwave motion sensors, reducing facility energy consumption by up to 75% compared to legacy metal halide fixtures.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-bay industrial LED fixtures installed in automated fulfillment warehouse'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Precision optical distribution illuminating narrow warehouse racking aisles'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
                        caption: 'ADC12 die-cast thermal chimney heat sink and isolated industrial driver'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'IP66 waterproof cleanroom and corrosive vapor protection seal detail'
                    }
                ],
                quickSpecs: [
                    { label: 'Efficacy', value: 'Up to 170 lm/W High Efficiency', highlight: true },
                    { label: 'Ingress / Impact', value: 'IP66 Dust & Water / IK10 Impact', highlight: true },
                    { label: 'Power Options', value: '100W, 150W, 200W, 240W, 400W' },
                    { label: 'Operating Temp', value: '-30°C to +55°C Ambient Range' },
                    { label: 'Lifespan', value: 'L90B10 > 100,000 Hours (TM-21)' },
                    { label: 'Surge Protection', value: '10kV / 20kV Internal SPD' }
                ],
                features: [
                    {
                        title: 'Ultra-High Efficacy (170 lm/W)',
                        description: 'Top-tier Nichia / Lumileds LED engines reduce industrial kilowatt consumption by up to 75%.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Patented Thermal Chimney Cooling',
                        description: 'Pure copper core heat-pipe technology with aerodynamic aluminum fins prevents thermal throttling at +55°C.',
                        icon: 'Flame'
                    },
                    {
                        title: 'IP66 & IK10 Vandal Resistance',
                        description: 'Fully sealed against dust ingress and high-pressure water jets, rated IK10 against 20 joules mechanical impact.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Specialized Optical Beam Angles',
                        description: 'Available in 60°, 90°, 120° symmetrical and 40°x90° narrow-aisle beam patterns for high-bay warehouse aisles.',
                        icon: 'Sparkles'
                    },
                    {
                        title: 'Smart DALI-2 & Motion Controls',
                        description: 'Integrated microwave occupancy sensing and automated daylight compensation maximize energy savings.',
                        icon: 'Cpu'
                    },
                    {
                        title: 'Extreme 10kV Surge Protection',
                        description: 'Equipped with heavy-duty surge protection devices to withstand industrial line transients and lightning strikes.',
                        icon: 'Award'
                    }
                ],
                specifications: [
                    {
                        group: 'Photometric Performance',
                        items: [
                            { name: 'Luminous Flux', value: '17,000 lm (100W) to 68,000 lm (400W)' },
                            { name: 'System Efficacy', value: '160 - 170 lm/W' },
                            { name: 'Color Temperature (CCT)', value: '4000K, 5000K, 5700K (ANSI C78.377)' },
                            { name: 'Color Rendering Index (CRI)', value: 'Ra > 80 (Ra > 90 available on request)' },
                            { name: 'Color Consistency', value: '3-Step MacAdam Ellipse (SDCM < 3)' }
                        ]
                    },
                    {
                        group: 'Electrical & Controls',
                        items: [
                            { name: 'Input Voltage', value: '100-277V AC / 347-480V AC, 50/60Hz' },
                            { name: 'Power Factor (PF)', value: '> 0.96 at full load' },
                            { name: 'Total Harmonic Distortion (THD)', value: '< 10%' },
                            { name: 'Dimming Protocols', value: '0-10V, 1-10V, DALI-2, Zigbee / BLE Mesh' }
                        ]
                    },
                    {
                        group: 'Physical & Environmental',
                        items: [
                            { name: 'Housing Material', value: 'Die-cast aluminum ADC12 with AkzoNobel powder coating' },
                            { name: 'Lens Material', value: 'Tempered optical glass or UV-stabilized polycarbonate' },
                            { name: 'Protection Class', value: 'Class I (grounded)' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Logistics Centers & High-Bay Racks',
                        description: 'Optimized vertical rack illuminance with zero glare for high-speed forklift operators.',
                        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Manufacturing & Automotive Plants',
                        description: 'High color fidelity and flicker-free illumination ensuring flawless quality inspection.',
                        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Aircraft Hangars & Shipyards',
                        description: 'High-power flood optics capable of mounting at heights above 25 meters.',
                        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Cold Storage & Food Processing',
                        description: 'IP66 sealed washdown construction operable down to -30°C in refrigerated warehouses.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'CE / RoHS', standard: 'European Directives on EMC, LVD, and Hazardous Substances', body: 'TÜV SÜD', description: 'Certified compliance for global deployment' },
                    { code: 'UL 1598', standard: 'Standard for Luminaires for Wet Locations', body: 'Underwriters Laboratories', description: 'Certified for high-bay and wet location installations' },
                    { code: 'DLC Premium', standard: 'DesignLights Consortium Qualified Products List', body: 'DLC', description: 'Qualifies for top-tier utility energy rebate programs' }
                ],
                faqs: [
                    {
                        question: 'How does the luminaire handle extreme factory ambient temperatures?',
                        answer: 'Our industrial high-bays feature an aerodynamic central thermal chimney that induces natural air convection over die-cast aluminum heat sinks. This maintains LED junction temperatures well below 65°C even in +55°C ambient air, preventing thermal decay.'
                    },
                    {
                        question: 'Are these fixtures compatible with wireless building automation systems?',
                        answer: 'Yes! We supply smart IoT-ready nodes supporting DALI-2, Zigbee 3.0, and Bluetooth Mesh, allowing automated occupancy zoning, scheduled dimming, and energy monitoring via cloud dashboards.'
                    },
                    {
                        question: 'What is the expected lifespan under 24/7 continuous operation?',
                        answer: 'Tested to IESNA LM-80 and TM-21 standards, our industrial luminaires achieve an L90B10 rating exceeding 100,000 hours, equivalent to over 11 years of continuous round-the-clock operation.'
                    }
                ]
            },
            {
                id: 'commercial-led-lighting',
                slug: 'commercial-led-lighting',
                categorySlug: 'led-lighting',
                categoryTitle: 'LED Lighting',
                title: 'Commercial LED Lighting',
                shortTitle: 'Commercial LED',
                badge: 'UGR < 16 • CRI > 95 • Tunable White',
                tagline: 'Architectural linear, recessed, and downlight luminaires for modern workplace wellness.',
                overview: 'Designed for corporate headquarters, financial institutions, premium retail flagship stores, and educational institutions, Infinity Commercial LED Lighting combines minimalist architectural elegance with human-centric lighting science. Featuring micro-prismatic optics achieving UGR < 16 and high color rendering (CRI > 95 / R9 > 60), our fixtures eliminate glare, eye fatigue, and visual discomfort.',
                fullDescription: [
                    'The modern workplace is centered around occupant productivity and well-being. Our commercial portfolio includes continuous seamless linear pendant systems, ultra-shallow recessed troffers, magnetic architectural track systems, and deep-recessed glare-free downlights.',
                    'Engineered with dual-channel Tunable White technology (2700K to 6500K), our luminaires replicate the natural circadian rhythm of daylight, boosting alertness during morning hours and supporting relaxation in the late afternoon.',
                    'With seamless push-in interconnecting joiners, installers can create continuous runs exceeding 100 meters without light leakage, visible joints, or shadow gaps.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Seamless architectural linear pendant fixtures in corporate open-plan office'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Deep-recessed low-glare UGR < 16 downlights in modern reception lobby'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Magnetic track system with spotlight and wall-washer modular inserts'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Micro-prismatic optical diffuser providing uniform, shadowless illumination'
                    }
                ],
                quickSpecs: [
                    { label: 'Glare Rating', value: 'UGR < 16 Ultra Low Glare (EN 12464-1)', highlight: true },
                    { label: 'Color Rendering', value: 'CRI > 95, R9 > 60 High Fidelity', highlight: true },
                    { label: 'Tunable White', value: '2700K - 6500K Circadian Control' },
                    { label: 'Flicker Index', value: 'IEEE 1789 Compliant Flicker-Free' },
                    { label: 'System Efficacy', value: '135 - 150 lm/W' },
                    { label: 'Driver Control', value: 'DALI-2 / 0-10V / Casambi Bluetooth' }
                ],
                features: [
                    {
                        title: 'Ultra-Low Glare (UGR < 16)',
                        description: 'Micro-prismatic optical diffusers and dark-light reflectors eliminate screen reflections and ocular strain.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'High-CRI Color Rendering (> 95)',
                        description: 'Reveals true, vibrant colors with high R9 red saturation essential for architecture, art, and retail.',
                        icon: 'Sparkles'
                    },
                    {
                        title: 'Human-Centric Tunable White',
                        description: 'Dynamically shifts color temperature throughout the day to harmonize with human circadian biological cycles.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Continuous Seamless Spans',
                        description: 'Continuous continuous-run light lines with zero optical gaps or light bleed between modules.',
                        icon: 'Layers'
                    },
                    {
                        title: 'Direct / Indirect Dual Output',
                        description: 'Provides 70% downward task lighting and 30% upward ceiling wash to eliminate the cave effect.',
                        icon: 'Lightbulb'
                    },
                    {
                        title: 'Smart Wireless Casambi Mesh',
                        description: 'Control scenes, dimming schedules, and sensor behaviors directly from smartphone or tablet apps.',
                        icon: 'Cpu'
                    }
                ],
                specifications: [
                    {
                        group: 'Photometric Data',
                        items: [
                            { name: 'Unified Glare Rating (UGR)', value: '< 16 for office desks / < 19 for general circulation' },
                            { name: 'Color Rendering (CRI)', value: 'Ra > 90 standard; Ra > 95 premium (R9 > 65)' },
                            { name: 'CCT Range', value: '3000K, 4000K, or Tunable 2700K - 6500K' },
                            { name: 'Beam Angles', value: '15°, 24°, 36°, 60°, and Batwing wide asymmetric' }
                        ]
                    },
                    {
                        group: 'Electrical & Controls',
                        items: [
                            { name: 'Flicker Percentage', value: '< 1% across 100% to 1% dimming range (Pst LM < 1.0)' },
                            { name: 'Dimming Protocol', value: 'DALI-2 Type 8 (Dt8 for tunable white), 0-10V, Casambi' },
                            { name: 'Input Voltage', value: '220-240V AC, 50/60Hz' },
                            { name: 'Standby Power', value: '< 0.3W per driver' }
                        ]
                    },
                    {
                        group: 'Mechanical & Finish',
                        items: [
                            { name: 'Profile Material', value: '6063-T5 extruded architectural aluminum' },
                            { name: 'Surface Finish', value: 'Fine-texture powder coat (Matte White, Jet Black, Anodized Silver)' },
                            { name: 'Mounting Styles', value: 'Suspended (aircraft wire), Surface, Recessed Trimless' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Corporate Headquarters & Open Offices',
                        description: 'Enhances productivity while meeting WELL Building Standard and LEED lighting credits.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Luxury Retail & Flagship Boutiques',
                        description: 'High CRI 95+ spotlights showcase textile textures and diamond brilliance.',
                        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Conference Rooms & Boardrooms',
                        description: 'Scene-controlled illumination for video-conferencing, presentations, and team workshops.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Educational Campuses & Universities',
                        description: 'Provides uniform, glare-free lighting that prevents fatigue during extended study sessions.',
                        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'WELL Certified Ready', standard: 'WELL v2 Light Concept Compliance', body: 'IWBI', description: 'Meets circadian, glare, and visual quality credits' },
                    { code: 'EN 12464-1', standard: 'Light and Lighting of Indoor Work Places', body: 'CEN', description: 'Complies with mandatory European office lighting norms' },
                    { code: 'DALI-2 Certified', standard: 'IEC 62386 Digital Addressable Lighting Interface', body: 'DiiA', description: 'Certified interoperability with all DALI-2 systems' }
                ],
                faqs: [
                    {
                        question: 'What is UGR < 16 and why does it matter for office projects?',
                        answer: 'Unified Glare Rating (UGR) measures psychological glare caused by luminaires. A UGR below 16 represents virtually imperceptible glare, ensuring that workers using monitors experience zero reflections or headaches, directly supporting WELL Building standards.'
                    },
                    {
                        question: 'How does Tunable White Circadian lighting work?',
                        answer: 'Tunable White uses dual warm white (2700K) and cool white (6500K) LEDs inside each luminaire. Controlled via DALI-2 Dt8, the system automatically transitions from energizing 5000K daylight in the morning to calm 2700K warm light in the evening.'
                    },
                    {
                        question: 'Can the linear profiles be cut to custom lengths?',
                        answer: 'Yes! While standard lengths are 1.2m, 1.5m, and 2.4m, we precision-manufacture custom linear profiles to millimeter-exact project specifications.'
                    }
                ]
            },
            {
                id: 'street-led-lighting',
                slug: 'street-led-lighting',
                categorySlug: 'led-lighting',
                categoryTitle: 'LED Lighting',
                title: 'Street & Highway LED Lighting',
                shortTitle: 'Street LED',
                badge: '160 lm/W • 10kV SPD • Smart NEMA/Zhaga',
                tagline: 'High-performance aerodynamic roadway luminaires engineered for municipal and highway safety.',
                overview: 'Infinity Street & Highway LED Luminaires represent the vanguard of municipal roadway engineering. Designed with aerodynamic self-cleaning cast aluminum bodies, precision batwing asymmetrical optics, and 10kV / 20kV surge suppression, they deliver uniform road surface luminance (M1 to M5 classifications) while drastically cutting city municipal energy expenditure and maintenance costs.',
                fullDescription: [
                    'Roadway illumination demands stringent photometric control to eliminate dark spots, reduce back-light trespassing into residential windows, and withstand harsh outdoor environmental exposures.',
                    'Our street lighting luminaires feature tool-free opening latches for rapid maintenance, an automatic power-cutoff disconnect knife switch upon opening, and standard ANSI C136.41 7-pin NEMA or Zhaga Book 18 receptacles for plug-and-play smart city CMS controllers.',
                    'Available with specialized optical distributions engineered for multi-lane highways (Type II Medium, Type III Short), urban boulevards, roundabout intersections, and pedestrian pathways.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-efficiency aerodynamic LED street lights along an express highway'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Precision asymmetric roadway optical distribution with zero upward light pollution'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Die-cast ADC12 aerodynamic housing with tool-free quick access latch'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Smart city 7-pin NEMA socket receptacle supporting cellular IoT photocells'
                    }
                ],
                quickSpecs: [
                    { label: 'Efficacy', value: 'Up to 160 lm/W High Efficiency', highlight: true },
                    { label: 'Ingress / Impact', value: 'IP66 Waterproof / IK09 Mechanical', highlight: true },
                    { label: 'Surge Protection', value: '10kV / 20kV SPD Built-In', highlight: true },
                    { label: 'Smart Socket', value: 'ANSI 7-Pin NEMA or Zhaga Book 18' },
                    { label: 'Wattage Range', value: '30W to 300W High Lumen Models' },
                    { label: 'Wind Resistance', value: 'Wind tunnel tested up to 60 m/s' }
                ],
                features: [
                    {
                        title: 'Aerodynamic Self-Cleaning Body',
                        description: 'Smooth exterior housing profile naturally sheds rainwater, bird droppings, and desert sand accumulation.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Zero Upward Light Spill (Dark Sky)',
                        description: 'Strict G4 / G6 luminous intensity glare limits protect nocturnal ecosystems and preserve dark skies.',
                        icon: 'Sparkles'
                    },
                    {
                        title: 'Smart City CMS Integration',
                        description: 'Pre-wired with standard 7-pin NEMA or Zhaga receptacles for LoRaWAN, NB-IoT, and cellular central management.',
                        icon: 'Cpu'
                    },
                    {
                        title: 'Tool-Free Safe Maintenance',
                        description: 'Double stainless steel latches allow toolless opening with integrated electrical disconnect knife switch for technician safety.',
                        icon: 'Wrench'
                    },
                    {
                        title: 'High-Performance 20kV Surge Guard',
                        description: 'Equipped with dual-stage varistor surge suppression against violent thunderstorm lightning strikes.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Flexible Pole Spigot Mounting',
                        description: 'Adjustable spigot accommodates both horizontal side-entry and vertical post-top mounting from -15° to +15° tilt.',
                        icon: 'Sliders'
                    }
                ],
                specifications: [
                    {
                        group: 'Photometric Specifications',
                        items: [
                            { name: 'Lumen Output', value: '4,800 lm (30W) to 48,000 lm (300W)' },
                            { name: 'Road Optics', value: 'IESNA Type II, Type III, Type IV Asymmetric' },
                            { name: 'Color Temperature (CCT)', value: '3000K (Dark Sky Friendly), 4000K, 5700K' },
                            { name: 'Color Rendering (CRI)', value: 'Ra > 70 (Roadway) / Ra > 80 (Urban Pedestrian)' }
                        ]
                    },
                    {
                        group: 'Electrical & Protection',
                        items: [
                            { name: 'Surge Suppression', value: '10kV (L-N) / 20kV (L,N-PE) to IEEE C62.41.2' },
                            { name: 'Driver Longevity', value: '100,000 hours with auto thermal foldback protection' },
                            { name: 'Operating Voltage', value: '100-277V AC / 50-60Hz' },
                            { name: 'Power Factor', value: '> 0.95 at 230V AC' }
                        ]
                    },
                    {
                        group: 'Mechanical & Standards',
                        items: [
                            { name: 'Ingress Protection', value: 'IP66 complete optical and gear compartment' },
                            { name: 'Mechanical Impact', value: 'IK09 toughened glass / IK10 polycarbonate lens' },
                            { name: 'Spigot Diameter', value: 'Fits 48mm, 60mm, and 76mm pole tenons' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Highways & Expressways',
                        description: 'Delivers high-speed visual clarity meeting M1 / M2 roadway illumination standards.',
                        image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Municipal Urban Boulevards',
                        description: 'Pleasant pedestrian color temperatures with zero glare for urban avenues and city centers.',
                        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Industrial Parks & Ports',
                        description: 'Heavy-duty coastal salt-spray resistant powder coating for shipyards and logistics perimeters.',
                        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Smart City Infrastructure',
                        description: 'Provides automated street-by-street dimming schedules linked to traffic flow monitoring sensors.',
                        image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'EN 13201', standard: 'Road Lighting Standards (M, C, and P classes)', body: 'CEN', description: 'Certified road luminance and uniformity compliance' },
                    { code: 'DarkSky Approved', standard: 'International Dark-Sky Association Criteria', body: 'IDA', description: 'Zero uplight certified for wildlife and astronomical protection' },
                    { code: 'CE / CB / ENEC', standard: 'European Electrical Safety Certification', body: 'DEKRA', description: 'Full international electrical safety accreditation' }
                ],
                faqs: [
                    {
                        question: 'What is the purpose of the 7-pin NEMA or Zhaga socket?',
                        answer: 'These standardized outdoor sockets allow municipalities to twist-lock wireless smart controllers (LoRaWAN, cellular NB-IoT, or photocells) onto the luminaire without opening the housing or running new wiring, enabling remote dimming and automated fault alerts.'
                    },
                    {
                        question: 'How does the luminaire protect against lightning surges?',
                        answer: 'Every fixture integrates a dedicated heavy-duty Surge Protection Device (SPD) rated up to 10kV line-to-line and 20kV line-to-ground, absorbing massive electrical transients during severe electrical storms.'
                    },
                    {
                        question: 'Can the tilt angle be adjusted on existing poles?',
                        answer: 'Yes! The universal mounting spigot features an internal indexing scale that allows tilt adjustments from -15° to +15° in 5° increments, ensuring ideal beam alignment on both straight and curved roadways.'
                    }
                ]
            },
            {
                id: 'facade-rgb-lighting',
                slug: 'facade-rgb-lighting',
                categorySlug: 'led-lighting',
                categoryTitle: 'LED Lighting',
                title: 'Facade & RGB Lighting',
                shortTitle: 'Facade & RGB',
                badge: 'DMX512 / RDM • IP67 • Dynamic Media Architecture',
                tagline: 'Architectural floodlights, wall washers, and pixel media systems turning facades into iconic landmarks.',
                overview: 'Infinity Facade & RGB Architectural Lighting systems transform urban skyscrapers, bridges, monuments, and commercial towers into vibrant visual spectacles. Built with high-precision optical collimator lenses, DMX512 / RDM dynamic color-changing controllers, and IP67 hermetic enclosures, our linear wall washers, exterior floodlights, and dot pixel matrices deliver breathtaking architectural illumination.',
                fullDescription: [
                    'Architectural lighting must balance dramatic artistic expression with stringent mechanical resilience against rain, thermal cycling, and ultraviolet radiation. Our exterior facade luminaires utilize marine-grade 6063-T6 extruded aluminum and tempered glass lenses treated with nanometer anti-condensation coatings.',
                    'With true 16-bit DMX512 / RDM digital dimming, the fixtures reproduce over 16.7 million colors plus dedicated true 3000K/4000K white (RGBW), ensuring silky smooth color transitions without stepping, flicker, or color fringing.',
                    'From ultra-narrow 3° pencil beams grazing 100-meter skyscraper pilasters to wide 60° flood optics washing monumental archways, our optical engineering ensures light is sculpted exactly onto building surfaces without polluting surrounding night skies.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-rise skyscraper dynamic RGBW facade illumination controlled via DMX'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Linear wall-washer grazing textured stone facade with uniform light dispersion'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-output narrow 3-degree architectural floodlight targeting tower pinnacle'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186c5f6?auto=format&fit=crop&w=1200&q=80',
                        caption: 'IP67 waterproof quick-connect cable harness and pressure equalization valve'
                    }
                ],
                quickSpecs: [
                    { label: 'Color System', value: 'RGBW 4-in-1 (Red, Green, Blue, 3000K/4000K White)', highlight: true },
                    { label: 'Control Protocol', value: 'DMX512 / RDM / Art-Net / sACN', highlight: true },
                    { label: 'Ingress Protection', value: 'IP67 Submersible Rated' },
                    { label: 'Beam Angles', value: '3°, 10°, 25°, 45°, 10°x60° Asymmetric' },
                    { label: 'Dimming Depth', value: '16-Bit Smooth (65,536 Dimming Steps)' },
                    { label: 'Operating Temp', value: '-40°C to +55°C All-Weather' }
                ],
                features: [
                    {
                        title: 'Dynamic RGBW 4-in-1 Color Engine',
                        description: 'Combines full spectrum RGB with dedicated high-CRI white diodes for pure architectural whites and rich saturation.',
                        icon: 'Sparkles'
                    },
                    {
                        title: '16-Bit Ultra-Smooth DMX Dimming',
                        description: '65,536 discrete dimming steps eliminate stepping, shudder, or flicker during slow, elegant architectural fades.',
                        icon: 'Sliders'
                    },
                    {
                        title: 'GORE Pressure Equalization Valve',
                        description: 'Integrated breathable membrane prevents internal vacuum pressure and glass fogging during rapid temperature swings.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Ultra-Narrow 3° Pencil Beams',
                        description: 'Custom PMMA total internal reflection (TIR) optics shoot sharp, focused columns of light up to 100 meters high.',
                        icon: 'Zap'
                    },
                    {
                        title: 'RDM Two-Way Remote Diagnostics',
                        description: 'Remotely query luminaire address, operating temperature, and voltage status directly from the central control console.',
                        icon: 'Cpu'
                    },
                    {
                        title: 'Marine-Grade Salt Spray Protection',
                        description: 'Chromate conversion coated aluminum with double epoxy primer resists corrosive coastal sea winds.',
                        icon: 'ShieldCheck'
                    }
                ],
                specifications: [
                    {
                        group: 'Optics & Photometrics',
                        items: [
                            { name: 'LED Engine', value: 'Cree / Osram high-power RGBW 4-in-1 emitters' },
                            { name: 'Beam Distributions', value: '3°, 8°, 15°, 30°, 60°, 10°x45° Elliptical wall-wash' },
                            { name: 'Lumen Maintenance', value: 'L70B50 > 70,000 hours at +50°C ambient' },
                            { name: 'Refresh Rate', value: '> 4,000 Hz flicker-free for 4K video recording' }
                        ]
                    },
                    {
                        group: 'Control & Interfacing',
                        items: [
                            { name: 'Protocol', value: 'USITT DMX512-A / ANSI E1.20 RDM' },
                            { name: 'Address Assignment', value: 'Auto-addressing via RDM controller or manual handheld programmer' },
                            { name: 'Input Cabling', value: 'IP67 quick-lock combined power and data bus cabling' }
                        ]
                    },
                    {
                        group: 'Housing & Environmental',
                        items: [
                            { name: 'Body Construction', value: 'High thermal conductivity 6063-T6 aluminum extrusion' },
                            { name: 'Front Cover', value: '4mm extra-clear tempered optical glass with ceramic frit edge' },
                            { name: 'Protection Level', value: 'IP67 (temporary submersion tested) / IK08 impact' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Commercial Skyscraper Facades',
                        description: 'Creates animated media facades and landmark skyline signatures visible across entire cities.',
                        image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Bridges & Infrastructure Monuments',
                        description: 'Rugged IP67 vibration-resistant floodlights washing cables and structural suspension pylons.',
                        image: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Historical & Heritage Architecture',
                        description: 'High-CRI warm white architectural grazing accentuates stone relief carvings without visible fixture intrusion.',
                        image: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Hospitality & Luxury Resorts',
                        description: 'Programmable dynamic evening scenes welcoming hotel guests with branded corporate colors.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'DMX / RDM E1.20', standard: 'ESTA Remote Device Management Protocol Standard', body: 'PLASA', description: 'Certified interoperability with grandMA, Pharos, and Madrix controllers' },
                    { code: 'IP67 / EN 60529', standard: 'Ingress Protection Testing for Wet Environments', body: 'TÜV Rheinland', description: 'Certified waterproof against intense weather and immersion' }
                ],
                faqs: [
                    {
                        question: 'What is RGBW and why is it superior to standard RGB?',
                        answer: 'Standard RGB mixes red, green, and blue to approximate white, producing a grayish, low-CRI white light with unnatural blue or pink tints. RGBW integrates a dedicated 4th pure white LED (3000K or 4000K), allowing genuine architectural white illumination alongside vivid colored scenes.'
                    },
                    {
                        question: 'How are DMX addresses configured across thousands of fixtures on a high-rise?',
                        answer: 'Using RDM (Remote Device Management) over the DMX cabling, our central console automatically detects, identifies, and programs addresses across thousands of luminaires in seconds, eliminating manual DIP switch setting on scaffolding.'
                    },
                    {
                        question: 'How do the fixtures prevent internal condensation?',
                        answer: 'Every fixture integrates a genuine GORE-TEX breathable pressure equalization membrane that allows water vapor molecules to escape while permanently blocking liquid water droplets and dust.'
                    }
                ]
            }
        ]
    },
    {
        id: 'door-hardware-security',
        slug: 'door-hardware-security',
        title: 'Door Hardware & Security',
        shortTitle: 'Hardware & Security',
        eyebrow: 'Access Control & Life Safety Hardware',
        badge: 'ANSI/BHMA Grade 1 & CE Certified',
        description: 'Commercial-grade egress panic hardware, precision hydraulic door closers, biometric access control systems, smart electronic mortise locks, and heavy-duty architectural accessories.',
        heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1600&q=80',
        icon: 'Lock',
        products: [
            {
                id: 'panic-bars-exit-devices',
                slug: 'panic-bars-exit-devices',
                categorySlug: 'door-hardware-security',
                categoryTitle: 'Door Hardware & Security',
                title: 'Panic Bars & Exit Devices',
                shortTitle: 'Panic Exit Devices',
                badge: 'ANSI/BHMA A156.3 Grade 1 & BS EN 1125',
                tagline: 'Life-safety emergency egress hardware engineered for instantaneous intuitive escape.',
                overview: 'During emergency evacuations, every second counts. Infinity Panic Bars & Exit Devices provide immediate, unhindered single-motion egress under crowd pressure while maintaining high security against exterior intrusion. Built with Grade 304 / Grade 316 stainless steel touch bars, heavy-duty deadlocking latchbolts, and tested beyond 1 million mechanical cycles, they meet the world most rigorous safety codes.',
                fullDescription: [
                    'Panic hardware is legally mandated on emergency exits in public assembly spaces, schools, hospitals, shopping malls, and transit terminals. Our exit devices are engineered to unlatch with minimal push force (under 15 lbs), ensuring children, elderly, and wheelchair users can trigger immediate door opening.',
                    'Available in Rim, Surface Vertical Rod (SVR), Concealed Vertical Rod (CVR), and Mortise exit configurations for single and double opening leaves up to 3 meters in height.',
                    'Options include electrified motorized latch retraction (MLR) for integration with building access control, high-decibel local alarm sirens, and delayed egress modules to prevent unauthorized retail inventory loss.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
                        caption: 'ANSI Grade 1 stainless steel push-bar exit device on fire stairwell door'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Surface vertical rod panic assembly installed on double leaf egress exit'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Exterior architectural lever trim with high-security Euro / mortise cylinder'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Electrified motorized latch retraction mechanism and internal monitoring switch'
                    }
                ],
                quickSpecs: [
                    { label: 'Grade Rating', value: 'ANSI/BHMA A156.3 Grade 1 (Top Tier)', highlight: true },
                    { label: 'Egress Standard', value: 'BS EN 1125 / UL 305 Panic Hardware', highlight: true },
                    { label: 'Fire Certification', value: 'UL 10C / BS 476 Part 22 up to 3 Hours' },
                    { label: 'Operating Force', value: '< 15 lbs (66 N) ADA Compliant' },
                    { label: 'Material', value: 'Solid Grade 304 / 316 Stainless Steel' },
                    { label: 'Endurance', value: 'Over 1,000,000 Full Egress Cycles' }
                ],
                features: [
                    {
                        title: 'ANSI/BHMA Grade 1 Certified',
                        description: 'Independently tested and verified to exceed 1,000,000 operational cycles under heavy abuse.',
                        icon: 'Award'
                    },
                    {
                        title: 'Ultra-Low Operating Force (< 15 lbs)',
                        description: 'Exceeds ADA accessibility guidelines, unlocking immediately under gentle body push pressure.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Deadlocking Anti-Friction Latchbolt',
                        description: 'Hardened 3/4" stainless steel latchbolt with auxiliary deadlatch resists credit card jimmying and physical attack.',
                        icon: 'Lock'
                    },
                    {
                        title: 'Electrified Latch Retraction (MLR)',
                        description: 'Smooth motor-driven latch pull allows seamless touchless access control card swipe integration.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Field-Sizable Touch Bar',
                        description: 'Touch bar push pad can be field-trimmed up to 6 inches for exact custom door width alignment.',
                        icon: 'Wrench'
                    },
                    {
                        title: 'Non-Handed Reversible Design',
                        description: 'Universal non-handed chassis simplifies site installation on both left-hand and right-hand swinging doors.',
                        icon: 'Sliders'
                    }
                ],
                specifications: [
                    {
                        group: 'Standards & Egress Compliance',
                        items: [
                            { name: 'North American Standards', value: 'ANSI/BHMA A156.3-2014 Grade 1, UL 305 (Panic), UL 10C (Fire)' },
                            { name: 'European Standards', value: 'BS EN 1125:2008 (Panic exit devices operated by horizontal bar)' },
                            { name: 'Fire Rating Duration', value: 'Up to 3 hours on UL-labeled steel fire doors' }
                        ]
                    },
                    {
                        group: 'Construction & Finishes',
                        items: [
                            { name: 'Touch Bar Material', value: 'Extruded Grade 304 or Grade 316 stainless steel' },
                            { name: 'Latchbolt Throw', value: '3/4" (19mm) throw deadlocking stainless steel latch' },
                            { name: 'Standard Door Widths', value: '36" (914mm) and 48" (1219mm) field sizeable' },
                            { name: 'Architectural Finishes', value: 'US32D Satin Stainless Steel, US32 Polished SS, Matte Black, US10B Bronze' }
                        ]
                    },
                    {
                        group: 'Electrification Options',
                        items: [
                            { name: 'Operating Voltage', value: '24V DC regulated supply' },
                            { name: 'Operating Current', value: '1.0A peak motor pull; 0.25A continuous hold' },
                            { name: 'Request to Exit (REX)', value: 'Internal microswitch SPDT volt-free contacts' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Auditoriums & Arenas',
                        description: 'Provides safe crowd egress compliance for large gathering venues and stadiums.',
                        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Commercial Towers & Escape Stairs',
                        description: 'High-security exit bars maintaining stairwell pressurization integrity.',
                        image: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Hospitals & Healthcare Facilities',
                        description: 'Antimicrobial-coated touch bars enabling hands-free elbow-push egress for medical staff.',
                        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Educational Campuses & Schools',
                        description: 'Heavy abuse resistance protecting thousands of students evacuating simultaneously.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'ANSI/BHMA A156.3', standard: 'American National Standard for Exit Devices (Grade 1)', body: 'BHMA / Intertek', description: 'Certified for 1,000,000 cycles and severe forced entry' },
                    { code: 'BS EN 1125', standard: 'Panic Exit Devices Operated by a Horizontal Bar', body: 'Warringtonfire', description: 'Certified CE / UKCA conformity marking' },
                    { code: 'UL 10C / UL 305', standard: 'Positive Pressure Fire Test and Panic Hardware', body: 'Underwriters Laboratories', description: 'Full North American life-safety certification' }
                ],
                faqs: [
                    {
                        question: 'What is the distinction between a panic exit device and an emergency exit push pad?',
                        answer: 'Panic devices (BS EN 1125) utilize a horizontal bar across at least 60% of the door width and are mandated for buildings where the public gathers without prior training. Emergency push pads (BS EN 179) are suitable only in non-public environments where occupants are familiar with the exit routes.'
                    },
                    {
                        question: 'Can these panic bars be linked to the building fire alarm system?',
                        answer: 'Yes! When equipped with electrified latch retraction or magnetic hold-open locks, the system automatically unlocks exterior doors upon fire alarm activation to facilitate emergency access for first responders while maintaining internal egress.'
                    },
                    {
                        question: 'Can the exterior side have an architectural key lock or lever handle?',
                        answer: 'Yes! We provide matching heavy-duty exterior architectural lever trims with high-security key cylinders, digital keypads, or touchless card readers.'
                    }
                ]
            },
            {
                id: 'door-closers',
                slug: 'door-closers',
                categorySlug: 'door-hardware-security',
                categoryTitle: 'Door Hardware & Security',
                title: 'Hydraulic Door Closers',
                shortTitle: 'Door Closers',
                badge: 'EN 1154 Size 1-6 & ANSI Grade 1',
                tagline: 'Precision engineered cam-action and rack-and-pinion hydraulic door control.',
                overview: 'A fire door that fails to latch completely is useless in a fire event. Infinity Hydraulic Door Closers guarantee controlled, dependable door closing under varying air pressure differentials, draft conditions, and high-frequency traffic. Engineered with heat-treated alloy steel pinions, all-weather silicon hydraulic fluid, and multi-valve independent speed regulation, they provide smooth door operation across 2 million test cycles.',
                fullDescription: [
                    'Our comprehensive closer portfolio covers overhead surface-mounted closers, concealed architectural transom closers, and heavy-duty floor springs. Featuring revolutionary Cam-Action technology, the opening resistance falls away rapidly, enabling effortless opening by children and individuals with reduced physical strength while exerting maximum latching power.',
                    'Independent precision thermo-constant valves control closing speed, latching action, hydraulic backcheck (cushioning violent door fling by sudden wind), and delayed action for accessible hospital bed transport.',
                    'Fully certified to EN 1154, UL 228, and ANSI/BHMA A156.4 Grade 1 for use on certified timber and steel fire door assemblies.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Architectural slide-channel overhead door closer installed on fire exit door'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Precision adjustment valves regulating sweep, latching, and backcheck'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Concealed architectural cam-action closer hidden completely in door leaf'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Heavy-duty commercial cast iron body closer with forged steel arm'
                    }
                ],
                quickSpecs: [
                    { label: 'Closing Power', value: 'EN 1-6 Fully Adjustable Power Size', highlight: true },
                    { label: 'Standards', value: 'BS EN 1154 & ANSI A156.4 Grade 1', highlight: true },
                    { label: 'Door Weight', value: 'Suitable for doors up to 250 kg' },
                    { label: 'Max Door Width', value: 'Up to 1,600mm Single Leaf' },
                    { label: 'Durability', value: 'Tested to 2,000,000 Operating Cycles' },
                    { label: 'Temperature Range', value: '-35°C to +45°C Thermo-Constant Fluid' }
                ],
                features: [
                    {
                        title: 'Cam-Action Rapid Resistance Falloff',
                        description: 'Cam-action mechanics drastically reduce opening force resistance immediately as the door begins to push open.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Thermo-Constant Hydraulic Fluid',
                        description: 'Specialized all-weather fluid maintains identical closing speed from sub-zero freezing winter to scorching summer.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Adjustable Hydraulic Backcheck',
                        description: 'Absorbs forceful door swing caused by sudden wind gusts, protecting adjacent walls, hinges, and users.',
                        icon: 'Sliders'
                    },
                    {
                        title: 'Delayed Action for Accessibility',
                        description: 'Adjustable delay holds door open briefly to allow safe transit for hospital stretchers, wheelchairs, and trolleys.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Concealed Architectural Mounting',
                        description: 'Completely concealed within the door leaf and frame header for pure, uninterrupted minimalist aesthetics.',
                        icon: 'Layers'
                    },
                    {
                        title: '2 Million Cycle Durability',
                        description: 'Precision forged steel pistons and needle roller bearings ensure decades of maintenance-free operation.',
                        icon: 'Wrench'
                    }
                ],
                specifications: [
                    {
                        group: 'Performance & Compliance',
                        items: [
                            { name: 'European Standard', value: 'BS EN 1154:1996 + A1:2002 (Classification 4 8 1-6 1 1 4)' },
                            { name: 'Fire Door Suitability', value: 'Approved for up to 240-minute fire doors (EN 1634-1)' },
                            { name: 'North American Standard', value: 'ANSI/BHMA A156.4 Grade 1 (2 Million Cycles)' }
                        ]
                    },
                    {
                        group: 'Adjustments & Functions',
                        items: [
                            { name: 'Closing Speed (Sweep)', value: 'Continuously adjustable from 180° to 15°' },
                            { name: 'Latching Speed', value: 'Continuously adjustable from 15° to 0°' },
                            { name: 'Backcheck Control', value: 'Hydraulic cushioning active from 70° to 180°' },
                            { name: 'Power Size Adjustment', value: 'Allen key adjustable spring tension EN 1 through EN 6' }
                        ]
                    },
                    {
                        group: 'Physical Materials',
                        items: [
                            { name: 'Closer Body', value: 'High-strength precision cast iron or extruded aluminum' },
                            { name: 'Pinion & Gears', value: 'Heat-treated chrome-molybdenum alloy steel' },
                            { name: 'Finish Options', value: 'Brushed Stainless, Polished Chrome, Matte Black, Satin Brass' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Commercial Office Tower Entrances',
                        description: 'Overcomes heavy air pressure and HVAC draft resistance to ensure positive latching.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Hospitals & Patient Corridors',
                        description: 'Delayed action function enables safe transit for stretchers and mobility equipment.',
                        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Luxury Hotel Suite Doors',
                        description: 'Concealed architectural closers maintaining pristine luxury wood veneer finishes.',
                        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Educational Campuses',
                        description: 'Cam-action mechanics enable lightweight opening effort compliant with ADA accessibility norms.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BS EN 1154', standard: 'Building Hardware — Controlled Door Closing Devices', body: 'Warringtonfire / Certifire', description: 'Certified for safety, fire resistance, and durability' },
                    { code: 'UL 228 / UL 10C', standard: 'Door Closers-Holders, With or Without Fire Detector', body: 'Underwriters Laboratories', description: 'Certified fire door control hardware' }
                ],
                faqs: [
                    {
                        question: 'Can a hold-open door closer be installed on a designated fire door?',
                        answer: 'Mechanical friction hold-open devices are strictly prohibited on fire doors by building codes because they prevent the door from shutting in a fire. However, electromagnetic hold-open closers connected to the fire alarm panel are fully approved, releasing immediately upon alarm trigger.'
                    },
                    {
                        question: 'What is the advantage of Cam-Action over standard rack-and-pinion closers?',
                        answer: 'Standard rack-and-pinion closers require increasing force as you open the door. Cam-action closers feature a linear drop in opening torque, making the door exceptionally easy to open (meeting ADA standards) while maintaining maximum snap closing force at the latch.'
                    },
                    {
                        question: 'Why do door closers slam or bounce shut in different seasons?',
                        answer: 'Budget closers use cheap mineral oil whose viscosity thins in summer and thickens in winter. Infinity closers use high-grade synthetic thermo-constant hydraulic fluid that maintains stable viscosity between -35°C and +45°C.'
                    }
                ]
            },
            {
                id: 'electronic-door-locks',
                slug: 'electronic-door-locks',
                categorySlug: 'door-hardware-security',
                categoryTitle: 'Door Hardware & Security',
                title: 'Electronic Door Locks',
                shortTitle: 'Electronic Locks',
                badge: 'Biometric • RFID • Zigbee & BLE • Grade 1',
                tagline: 'High-security smart mortise locks uniting military-grade encryption with luxury design.',
                overview: 'Infinity Electronic Door Locks deliver keyless security for executive offices, high-end residential suites, luxury hotels, and secure research facilities. Engineered with heavy-duty Grade 1 stainless steel mortise lockcases, our smart locks combine 3D semiconductor fingerprint recognition, Mifare RFID card credentials, scrambled anti-peep PIN entry, and smartphone Bluetooth / Zigbee app connectivity.',
                fullDescription: [
                    'Traditional mechanical keys are susceptible to cloning, loss, and unauthorized duplication. Our electronic locks utilize bank-grade AES-128 cryptographic authentication and tamper-evident microcontrollers to protect property against digital hacking and physical bypass.',
                    'The lock mortise features an anti-panic quick release function: pressing the interior handle immediately retracts both the latchbolt and the hardened deadbolt in a single motion for instantaneous emergency egress.',
                    'Integrated audit-trail logging records the timestamp and identity of every unlock event, accessible via smartphone app or enterprise cloud access control software.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Matte black electronic smart mortise lock with biometric fingerprint reader'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-security multi-point stainless steel motorized deadbolt lockcase'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Touchscreen numeric keypad with scrambled anti-peeping virtual PIN digits'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Emergency mechanical override cylinder and USB-C emergency power jump port'
                    }
                ],
                quickSpecs: [
                    { label: 'Access Methods', value: 'Fingerprint, PIN, RFID Card, App, Mechanical Key', highlight: true },
                    { label: 'Lockcase Standard', value: 'ANSI/BHMA Grade 1 Heavy Duty Mortise', highlight: true },
                    { label: 'Sensor Speed', value: '< 0.3s Recognition (False Accept < 0.0001%)' },
                    { label: 'Battery Longevity', value: 'Up to 18 Months (4x AA Alkaline)' },
                    { label: 'Connectivity', value: 'Bluetooth 5.0, Zigbee 3.0, Wi-Fi Gateway' },
                    { label: 'Emergency Power', value: 'Type-C USB External Jump Port' }
                ],
                features: [
                    {
                        title: '3D Semiconductor Biometric Sensor',
                        description: 'Reads living sub-dermal fingerprint ridges in under 0.3 seconds, rejecting 2D silicone fake prints.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Anti-Panic Single-Motion Egress',
                        description: 'Depressing the inside handle simultaneously retracts all latches and deadbolts for instantaneous escape.',
                        icon: 'Award'
                    },
                    {
                        title: 'Scrambled Anti-Peep PIN Entry',
                        description: 'Allows typing random decoy numbers before or after real PIN to prevent observers from guessing passwords.',
                        icon: 'Lock'
                    },
                    {
                        title: 'AES-128 Bank Grade Encryption',
                        description: 'All wireless communications between smartphones, gateways, and locks are secured with high-grade cryptography.',
                        icon: 'Cpu'
                    },
                    {
                        title: 'Tamper & Forced Entry Alarm',
                        description: 'Internal sensors trigger a piercing 85 dB local alarm if the outer chassis is pried or subjected to violent impact.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'Full Audit Trail History',
                        description: 'Tracks up to 10,000 historical access events with exact user names, timestamps, and credential types.',
                        icon: 'CheckCircle2'
                    }
                ],
                specifications: [
                    {
                        group: 'Credential Capacity & Auth',
                        items: [
                            { name: 'Fingerprint Capacity', value: 'Up to 100 biometric templates' },
                            { name: 'RFID Card Standard', value: 'Mifare Classic / Desfire EV2 / EV3 (13.56 MHz)' },
                            { name: 'PIN Code Length', value: '6 to 12 digits (capacity up to 100 codes)' },
                            { name: 'Recognition Speed', value: 'Under 300 milliseconds' }
                        ]
                    },
                    {
                        group: 'Mechanical & Power',
                        items: [
                            { name: 'Mortise Lock Body', value: 'Grade 304 Stainless Steel with hardened steel deadbolt' },
                            { name: 'Door Thickness Range', value: '40mm to 90mm standard' },
                            { name: 'Battery Power', value: '4x or 8x AA 1.5V Alkaline Batteries (approx. 15,000 cycles)' },
                            { name: 'Emergency Backup', value: 'Type-C USB 5V input port + high-security mechanical key' }
                        ]
                    },
                    {
                        group: 'Smart Management',
                        items: [
                            { name: 'App Ecosystem', value: 'iOS & Android app with remote e-key issuing and temporary guest codes' },
                            { name: 'Smart Home Interfacing', value: 'Works with Apple HomeKit, Google Home, Zigbee 3.0, and MQTT' },
                            { name: 'Finish Choices', value: 'Matte Space Gray, Deep Satin Black, Brushed Champagne Gold' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Executive Corporate Suites',
                        description: 'Eliminates lost key management while maintaining strict access logging for corporate boardrooms.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Luxury Hospitality & Resorts',
                        description: 'Enables mobile keyless room entry via guest smartphones without front desk check-in queues.',
                        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'High-End Residential Penthouses',
                        description: 'Provides biometric convenience and sleek contemporary front door architecture.',
                        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Server Rooms & Research Labs',
                        description: 'Restricts entry to authorized personnel with real-time tamper alarm notifications.',
                        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'ANSI/BHMA A156.13', standard: 'American National Standard for Mortise Locks (Grade 1)', body: 'Intertek', description: 'Certified heavy commercial high security' },
                    { code: 'FCC / CE-RED', standard: 'Radio Equipment and Electromagnetic Compatibility Directive', body: 'TÜV Rheinland', description: 'Certified Bluetooth and RFID emissions safety' }
                ],
                faqs: [
                    {
                        question: 'What happens if the electronic lock batteries run out completely?',
                        answer: 'The lock provides low-battery visual and audible warnings weeks before exhaustion. If completely depleted, you can jump-power the lock instantly using any standard phone power bank plugged into the exterior USB-C port, or use the hidden mechanical override key.'
                    },
                    {
                        question: 'Does the lock unlock from the inside in an emergency fire situation?',
                        answer: 'Yes! In strict compliance with life-safety egress codes, our locks feature an anti-panic quick-release interior handle. Depressing the handle immediately retracts both the latch and the deadbolt simultaneously with one natural motion.'
                    },
                    {
                        question: 'Can I generate temporary access codes for visitors or cleaners?',
                        answer: 'Yes! Through the management app, administrators can issue time-restricted OTPs (One-Time Passwords) or recurring weekly access schedules that automatically expire after use.'
                    }
                ]
            },
            {
                id: 'access-control-systems',
                slug: 'access-control-systems',
                categorySlug: 'door-hardware-security',
                categoryTitle: 'Door Hardware & Security',
                title: 'Access Control Systems',
                shortTitle: 'Access Control',
                badge: 'AI Facial Recognition • OSDP v2 • TCP/IP Cloud',
                tagline: 'Enterprise multi-door controllers, AI biometric terminals, and secure turnstile systems.',
                overview: 'Infinity Access Control Systems deliver comprehensive physical identity and access management (PIAM) across enterprise campuses, airports, data centers, and multi-tenant commercial towers. Encompassing IP-based multi-door controllers, touchless dual-camera AI facial recognition terminals, mobile Bluetooth credentials, and speed gate turnstiles, our hardware ensures impenetrable perimeter and interior zone security.',
                fullDescription: [
                    'Modern facility security requires frictionless touchless entry without compromising verification accuracy. Our AI facial recognition terminals utilize dual visible and infrared cameras with neural network liveness detection, identifying authorized personnel in under 0.2 seconds even while wearing masks or glasses, and eliminating 2D/3D photo spoofing.',
                    'The system controllers communicate via encrypted OSDP v2 (Open Supervised Device Protocol) over RS-485 and direct TCP/IP with TLS 1.3 encryption, protecting against eavesdropping or unauthorized reader tapping.',
                    'Integrated emergency override inputs automatically release all perimeter security doors and turnstiles upon receiving a confirmed signal from the building central fire alarm system.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-speed optical turnstile security lanes with integrated facial recognition'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Wall-mounted dual-camera AI biometric touchless recognition terminal'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Enterprise 4-door TCP/IP access controller panel with battery backup enclosure'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Mifare DESFire EV3 smart card reader with mobile NFC and BLE credentials'
                    }
                ],
                quickSpecs: [
                    { label: 'Biometric Speed', value: '< 0.2s Touchless Face Recognition', highlight: true },
                    { label: 'Security Protocol', value: 'OSDP v2 Encrypted & TLS 1.3 TCP/IP', highlight: true },
                    { label: 'User Capacity', value: 'Up to 50,000 Faces / 100,000 Cards' },
                    { label: 'Fire Integration', value: 'Dedicated Emergency Fail-Safe Fire Relay' },
                    { label: 'Ingress Rating', value: 'IP65 All-Weather Exterior Terminals' },
                    { label: 'Turnstile Types', value: 'Speed Gates, Flap Barriers, Full Height' }
                ],
                features: [
                    {
                        title: 'Dual-Camera AI Liveness Detection',
                        description: 'Combines RGB and infrared stereoscopic vision to distinguish living human faces from high-res photos and video screens.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'OSDP v2 High-Security Encryption',
                        description: 'Replaces obsolete unencrypted Wiegand wiring with bidirectionally encrypted OSDP v2 to eliminate sniffing hacks.',
                        icon: 'Lock'
                    },
                    {
                        title: 'Mobile Smartphone NFC & BLE Credentials',
                        description: 'Employees tap or simply wave their Apple or Android smartphone to unlock turnstiles and office doors.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Automated Fire Alarm Fail-Safe Egress',
                        description: 'Hardware interlock immediately removes power from magnetic locks and drops turnstile barriers upon fire alarm activation.',
                        icon: 'Flame'
                    },
                    {
                        title: 'Central Cloud & On-Prem Multi-Site Mgmt',
                        description: 'Manage 100,000+ employees, visitor passes, and multi-branch security permissions from a unified web interface.',
                        icon: 'Cpu'
                    },
                    {
                        title: 'Anti-Passback & Tailgating Detection',
                        description: 'Infrared light curtains detect unauthorized tailgating and prevent badge sharing between employees.',
                        icon: 'Award'
                    }
                ],
                specifications: [
                    {
                        group: 'Biometric & Credential Specs',
                        items: [
                            { name: 'Face Recognition Distance', value: '0.3m to 2.5m touchless detection range' },
                            { name: 'Accuracy Rate', value: '> 99.9% (False Rejection < 0.1% / False Acceptance < 0.0001%)' },
                            { name: 'Card Standards Supported', value: 'Mifare DESFire EV2/EV3, HID iCLASS, Seos, EM-Marine' },
                            { name: 'Mobile Credentials', value: 'Bluetooth Low Energy (BLE) and Apple Wallet / NFC' }
                        ]
                    },
                    {
                        group: 'Controller Architecture',
                        items: [
                            { name: 'Controller Capacities', value: '1-door, 2-door, 4-door, and 8-door expandable TCP/IP boards' },
                            { name: 'Onboard Memory', value: '100,000 users and 500,000 offline event transactions' },
                            { name: 'Reader Protocols', value: 'OSDP v2.2 (SIA Standard) and Wiegand 26/34/66' },
                            { name: 'Network Communications', value: '10/100/1000 Mbps Gigabit Ethernet with IPv6 & TLS 1.3' }
                        ]
                    },
                    {
                        group: 'Physical & Mechanical Hardware',
                        items: [
                            { name: 'Lock Interfaces', value: 'Form-C dry relay contacts (NC/NO selectable, 30V DC, 5A)' },
                            { name: 'Terminal Construction', value: 'Aircraft aluminum alloy housing with tempered glass front' },
                            { name: 'Operating Temperature', value: '-30°C to +65°C, IP65 rated' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Corporate Lobby Turnstiles',
                        description: 'Provides rapid, friction-free throughput of thousands of employees during peak morning rush hours.',
                        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Tier III & Tier IV Data Centers',
                        description: 'Enforces multi-factor authentication and mantrap interlocking between security perimeters.',
                        image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Financial Banking Headquarters',
                        description: 'Strict audit trails and zone-restricted biometric clearances for vaults and cash handling hubs.',
                        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Government & Embassy Compounds',
                        description: 'OSDP v2 encrypted controllers meeting strict anti-espionage and counter-tamper standards.',
                        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'SIA OSDP v2.2', standard: 'Security Industry Association Verified OSDP Protocol', body: 'SIA', description: 'Certified bidirectional encrypted reader communications' },
                    { code: 'ISO/IEC 27001', standard: 'Information Security Management System Certification', body: 'BSI', description: 'Enterprise cloud cybersecurity and privacy standard' },
                    { code: 'UL 294', standard: 'Standard for Access Control System Units', body: 'Underwriters Laboratories', description: 'Certified reliability for commercial life safety' }
                ],
                faqs: [
                    {
                        question: 'What is OSDP v2 and why is it replacing legacy Wiegand protocol?',
                        answer: 'Legacy Wiegand protocol transmits card credentials in raw, unencrypted plain text over copper wires, making it vulnerable to micro-controller sniffing devices. OSDP v2 uses AES-128 bidirectional encryption between reader and controller, preventing unauthorized tapping.'
                    },
                    {
                        question: 'Can the access control system unlock all doors during a fire alarm?',
                        answer: 'Yes! Our access controllers feature dedicated hardware fire alarm interface relays. Upon alarm activation, power to all fail-safe electromagnetic locks is instantly cut, unlocking all doors for immediate emergency escape.'
                    },
                    {
                        question: 'Can employees use their iPhones and Apple Watches instead of badges?',
                        answer: 'Yes! Our readers support mobile NFC credentials stored in Apple Wallet or Google Wallet, as well as Bluetooth Low Energy (BLE) background detection, allowing users to keep their phones in their pockets while walking through turnstiles.'
                    }
                ]
            },
            {
                id: 'door-accessories',
                slug: 'door-accessories',
                categorySlug: 'door-hardware-security',
                categoryTitle: 'Door Hardware & Security',
                title: 'Architectural Door Accessories',
                shortTitle: 'Door Accessories',
                badge: 'Grade 316 Stainless Steel & Fire Rated',
                tagline: 'Heavy-duty architectural hinges, electromagnetic holders, intumescent drop seals, and flush bolts.',
                overview: 'The performance of an engineered fire door depends on its supporting accessories. Infinity Architectural Door Accessories encompass high-capacity ball-bearing stainless steel hinges, electromagnetic fire door holders, automatic acoustic drop-down bottom seals, manual and automatic flush bolts, and door coordinators, ensuring full compliance with fire safety and architectural design standards.',
                fullDescription: [
                    'Every accessory in our hardware catalog is tested in combination with our fire doors to verify thermal endurance and mechanical longevity. Our Grade 316 stainless steel hinges feature welded stainless knuckle caps and precision ball bearings capable of carrying door leaves weighing up to 300 kg without sagging.',
                    'Our automatic bottom drop seals utilize spring-loaded internal scissor mechanisms that drop a silicone acoustic gasket down onto the floor threshold only when the door closes, retracting instantaneously when opened to prevent carpet or marble friction.',
                    'Electromagnetic door holders keep busy corridor doors safely open during normal operations, instantly releasing them upon fire alarm signal to compartmentalize smoke and heat.'
                ],
                heroImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=80',
                gallery: [
                    {
                        url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
                        caption: 'High-load Grade 316 ball bearing stainless steel architectural hinges'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Wall-mounted 24V DC electromagnetic door holder with manual release button'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Automatic mortised acoustic bottom drop seal mechanism and silicone gasket'
                    },
                    {
                        url: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80',
                        caption: 'Solid brass lever flush bolts for inactive leaves of double door pairs'
                    }
                ],
                quickSpecs: [
                    { label: 'Hinge Load Capacity', value: 'Up to 300 kg per 3-hinge set', highlight: true },
                    { label: 'Acoustic Drop Seal', value: 'Sound Reduction up to Rw 44 dB', highlight: true },
                    { label: 'Electromagnetic Hold', value: '650N (65 kg) Holding Force (EN 1155)' },
                    { label: 'Material Standard', value: 'AISI 316 Marine Grade Stainless Steel' },
                    { label: 'Fire Endurance', value: 'Certified up to 240 Mins (BS EN 1634-1)' },
                    { label: 'Drop Travel', value: 'Up to 20mm Automatic Drop Seal Clearance' }
                ],
                features: [
                    {
                        title: 'Grade 316 Stainless Steel Hinges',
                        description: 'Provides extreme tensile strength, fire integrity, and zero corrosion in coastal or chemical environments.',
                        icon: 'ShieldCheck'
                    },
                    {
                        title: 'Automatic Self-Leveling Drop Seals',
                        description: 'Spring mechanism drops silicone seal flat against uneven floors, blocking smoke, drafts, and sound.',
                        icon: 'Gauge'
                    },
                    {
                        title: 'EN 1155 Electromagnetic Door Holders',
                        description: 'Holds corridor doors open during normal hours, releasing instantaneously upon fire alarm trigger.',
                        icon: 'Zap'
                    },
                    {
                        title: 'Double Door Sequence Coordinators',
                        description: 'Ensures the inactive door leaf shuts before the active leaf to guarantee full latching engagement.',
                        icon: 'Sliders'
                    },
                    {
                        title: 'High-Security Manual & Auto Flush Bolts',
                        description: 'Heavy-duty steel flush bolts secure the top and bottom of the secondary leaf against forced entry.',
                        icon: 'Lock'
                    },
                    {
                        title: 'Architectural Finish Matching',
                        description: 'Precision finished in Satin Stainless, Matte Black, Polished Brass, or Antique Bronze.',
                        icon: 'Sparkles'
                    }
                ],
                specifications: [
                    {
                        group: 'Hinges & Load Ratings',
                        items: [
                            { name: 'Standard Compliance', value: 'BS EN 1935:2002 Grade 14 (Severe Duty / Fire Doors)' },
                            { name: 'Dimensions', value: '4" x 3", 4.5" x 4", 5" x 4" (3.0mm to 3.5mm leaf thickness)' },
                            { name: 'Bearings', value: 'Precision stainless steel ball bearings with maintenance-free grease' },
                            { name: 'Material', value: 'Grade 304 or Marine Grade 316 Stainless Steel' }
                        ]
                    },
                    {
                        group: 'Acoustic & Smoke Drop Seals',
                        items: [
                            { name: 'Seal Material', value: 'High-flexibility self-extinguishing silicone rubber gasket' },
                            { name: 'Acoustic Performance', value: 'Rw 42 - 44 dB sound attenuation' },
                            { name: 'Max Drop Height', value: '14mm to 20mm floor gap compensation' },
                            { name: 'Testing Cycles', value: 'Tested to 1,000,000 opening/closing cycles' }
                        ]
                    },
                    {
                        group: 'Electromagnetic Holders & Controls',
                        items: [
                            { name: 'Holding Force', value: '650N (65 kgf) to BS EN 1155 standard' },
                            { name: 'Operating Voltage', value: '24V DC / 60mA low power consumption' },
                            { name: 'Manual Release', value: 'Integrated test release push button' }
                        ]
                    }
                ],
                applications: [
                    {
                        title: 'Hospital Corridor Double Doors',
                        description: 'Electromagnetic holders keep corridors open for patient beds, closing automatically on fire alarm.',
                        image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Acoustic Recording Studios & Theaters',
                        description: 'Automatic drop seals block sound bleed under door thresholds without drag friction.',
                        image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'High-Rise Fire Exit Stairways',
                        description: 'Heavy duty Grade 14 ball-bearing hinges ensure positive door swing under negative stair pressure.',
                        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80'
                    },
                    {
                        title: 'Coastal Luxury Marine Resorts',
                        description: 'Grade 316 stainless steel construction resists harsh marine saltwater corrosion.',
                        image: 'https://images.unsplash.com/photo-1534237710431-e2fc698436d0?auto=format&fit=crop&w=800&q=80'
                    }
                ],
                certifications: [
                    { code: 'BS EN 1935', standard: 'Building Hardware — Single-Axis Hinges (Grade 14)', body: 'Certifire', description: 'Certified for 200,000 cycles on 160kg+ fire doors' },
                    { code: 'BS EN 1155', standard: 'Electrically Powered Hold-Open Devices for Swing Doors', body: 'Warringtonfire', description: 'Certified fail-safe release upon fire alarm' },
                    { code: 'BS EN 1634-1', standard: 'Fire Resistance and Smoke Control for Door Hardware', body: 'Exova', description: 'Certified 240-minute fire resistance integration' }
                ],
                faqs: [
                    {
                        question: 'Why are Grade 14 hinges necessary on fire-rated doors?',
                        answer: 'Standard commercial hinges are not engineered to withstand extreme thermal expansion during a fire. Grade 14 hinges (BS EN 1935) are tested under high temperatures with melting points above 1400°C, ensuring the door leaf does not sag or pull away from the frame during a 2 to 4 hour fire.'
                    },
                    {
                        question: 'How does an automatic bottom drop seal work without dragging on the floor?',
                        answer: 'The drop seal is concealed inside a mortise at the bottom of the door. When the door is open, the seal stays retracted inside. Only when the door closes do an actuator pin hit the frame rebate, driving the silicone seal down vertically against the floor with zero sliding friction.'
                    },
                    {
                        question: 'What is the function of a door coordinator on a double door?',
                        answer: 'On double doors with rebated overlapping meeting stiles, if the active leaf closes first, the door cannot seal properly. A mechanical door coordinator holds the active leaf open until the inactive leaf has closed first, guaranteeing correct fire compartmentalization.'
                    }
                ]
            }
        ]
    }
];

// Helper functions for easy querying across the application
export function getAllCategories(): ProductCategory[] {
    return productCategories;
}

export function getCategoryBySlug(slug: string): ProductCategory | undefined {
    return productCategories.find(c => c.slug === slug);
}

export function getAllProducts(): ProductItem[] {
    return productCategories.flatMap(c => c.products);
}

export function getProductBySlug(categorySlug: string, productSlug: string): ProductItem | undefined {
    const category = getCategoryBySlug(categorySlug);
    if (!category) return undefined;
    return category.products.find(p => p.slug === productSlug);
}

export function findProductBySlug(productSlug: string): { product: ProductItem; category: ProductCategory } | undefined {
    for (const category of productCategories) {
        const product = category.products.find(p => p.slug === productSlug);
        if (product) return { product, category };
    }
    return undefined;
}

export function getRelatedProducts(productSlug: string, limit = 3): ProductItem[] {
    const found = findProductBySlug(productSlug);
    if (!found) return getAllProducts().slice(0, limit);
    
    // First try other products in the same category
    const sameCategoryProducts = found.category.products.filter(p => p.slug !== productSlug);
    if (sameCategoryProducts.length >= limit) {
        return sameCategoryProducts.slice(0, limit);
    }
    
    // Supplement with products from other categories
    const otherProducts = getAllProducts().filter(p => p.slug !== productSlug && p.categorySlug !== found.category.slug);
    return [...sameCategoryProducts, ...otherProducts].slice(0, limit);
}

