export interface ProcessStep {
    step: string;
    title: string;
    subtitle: string;
    icon: string;
}

export const processSteps: ProcessStep[] = [
    {
        step: '01',
        title: 'CONSULTATION',
        subtitle: 'Understanding your requirements',
        icon: 'MessageSquare',
    },
    {
        step: '02',
        title: 'SITE SURVEY',
        subtitle: 'Detailed assessment & evaluation',
        icon: 'Compass',
    },
    {
        step: '03',
        title: 'DESIGN',
        subtitle: 'Custom engineered solution',
        icon: 'DraftingCompass',
    },
    {
        step: '04',
        title: 'INSTALLATION',
        subtitle: 'Professional & safe installation',
        icon: 'Building2',
    },
    {
        step: '05',
        title: 'TESTING',
        subtitle: 'Rigorous testing & commissioning',
        icon: 'Clock',
    },
    {
        step: '06',
        title: 'AMC & SUPPORT',
        subtitle: 'Continuous maintenance & support',
        icon: 'Headset',
    },
];
