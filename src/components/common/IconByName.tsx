import React from 'react';
import {
    Flame,
    Shield,
    DoorClosed,
    Lightbulb,
    Lock,
    ShieldCheck,
    Cpu,
    Wrench,
    Layers,
    Gauge,
    Zap,
    CheckCircle2,
    Award,
    Sparkles,
    Sliders,
    HelpCircle,
    FileText,
    LucideProps
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    Flame,
    Shield,
    DoorClosed,
    Lightbulb,
    Lock,
    ShieldCheck,
    Cpu,
    Wrench,
    Layers,
    Gauge,
    Zap,
    CheckCircle2,
    Award,
    Sparkles,
    Sliders,
    HelpCircle,
    FileText,
};

export function IconByName({ name, className, size = 20 }: { name: string; className?: string; size?: number }) {
    const Component = iconMap[name] || ShieldCheck;
    return <Component className={className} size={size} />;
}

