export type SubNavigationItem = {
    label: string;
    href: string;
    description?: string;
    badge?: string;
};

export type NavigationCategory = {
    title: string;
    slug: string;
    description: string;
    icon: string;
    items: SubNavigationItem[];
};

export type NavigationItem = {
    label: string;
    href: string;
    isMegaMenu?: boolean;
    categories?: NavigationCategory[];
};
