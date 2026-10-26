export interface CertificationItem {
    id: string;
    name: string;
    fullName: string;
    badgeImage: string;
    category: string;
    description: string;
    highlight: string;
}

export const certificationsData: CertificationItem[] = [
    {
        id: 'asfp',
        name: 'ASFP',
        fullName: 'Association for Specialist Fire Protection',
        badgeImage: '/images/certifications/asfp_badge.png',
        category: 'Fire Safety Standards',
        description: 'Dedicated to built-in passive fire protection solutions ensuring structural fire safety.',
        highlight: 'Member of UK Passive Fire Body'
    },
    {
        id: 'ico',
        name: 'ico.',
        fullName: 'Information Commissioner\'s Office',
        badgeImage: '/images/certifications/ico_badge.png',
        category: 'Data & Information Rights',
        description: 'Independent official authority promoting openness of official information and data privacy.',
        highlight: 'Information & Compliance Authority'
    },
    {
        id: 'ifc',
        name: 'IFC Certification',
        fullName: 'IFC Certification (UKAS Accredited)',
        badgeImage: '/images/certifications/ifc_badge.png',
        category: 'Third-Party Audited',
        description: 'UKAS-accredited independent third-party certification of passive and active fire systems.',
        highlight: 'UKAS Accredited Body No. 043'
    },
    {
        id: 'chas',
        name: 'CHAS',
        fullName: 'Contractors Health & Safety Assessment Scheme',
        badgeImage: '/images/certifications/chas_badge.png',
        category: 'Health & Safety SSIP',
        description: 'Pioneering accreditation for health, safety and supply chain compliance in construction.',
        highlight: 'SSIP Pre-qualification Standard'
    },
    {
        id: 'constructionline',
        name: 'Constructionline',
        fullName: 'Constructionline Gold Member',
        badgeImage: '/images/certifications/constructionline_badge.png',
        category: 'Supply Chain Compliance',
        description: 'Gold membership demonstrating rigorous standards in environmental, governance and quality management.',
        highlight: 'Gold Member Accreditation'
    },
    {
        id: 'fia',
        name: 'FIA',
        fullName: 'Fire Industry Association',
        badgeImage: '/images/certifications/fia_badge.png',
        category: 'Trade Association',
        description: 'Europe\'s largest trade association for fire protection, research, training and standard setting.',
        highlight: 'CPD & Fire Engineering Standard'
    },
    {
        id: 'ul',
        name: 'UL',
        fullName: 'Underwriters Laboratories',
        badgeImage: '/images/certifications/ul_black.svg',
        category: 'Global Safety Testing',
        description: 'Global benchmark for rigorous product safety testing, certified performance and real-world durability.',
        highlight: 'International Safety Listed'
    },
    {
        id: 'ce',
        name: 'CE Marking',
        fullName: 'Conformité Européenne (CE)',
        badgeImage: '/images/certifications/ce.svg',
        category: 'European Standard',
        description: 'Certified European Conformity meeting mandatory EU safety, health and environmental directives.',
        highlight: 'EN / BS European Harmonized'
    }
];
