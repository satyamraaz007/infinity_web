export interface ProductQuickSpec {
    label: string;
    value: string;
    highlight?: boolean;
}

export interface ProductFeature {
    title: string;
    description: string;
    icon: string;
}

export interface ProductSpecItem {
    name: string;
    value: string;
}

export interface ProductSpecGroup {
    group: string;
    items: ProductSpecItem[];
}

export interface ProductApplicationItem {
    title: string;
    description: string;
    image: string;
}

export interface ProductCertification {
    code: string;
    standard: string;
    body: string;
    description: string;
}

export interface ProductFAQ {
    question: string;
    answer: string;
}

export interface ProductGalleryImage {
    url: string;
    caption: string;
    tag?: string;
}

export interface ProductItem {
    id: string;
    slug: string;
    categorySlug: string;
    categoryTitle: string;
    title: string;
    shortTitle?: string;
    badge: string;
    tagline: string;
    overview: string;
    fullDescription: string[];
    heroImage: string;
    gallery: ProductGalleryImage[];
    quickSpecs: ProductQuickSpec[];
    features: ProductFeature[];
    specifications: ProductSpecGroup[];
    applications: ProductApplicationItem[];
    certifications: ProductCertification[];
    faqs: ProductFAQ[];
    downloads?: {
        title: string;
        type: string;
        size: string;
    }[];
}

export interface ProductCategory {
    id: string;
    slug: string;
    title: string;
    shortTitle: string;
    eyebrow: string;
    badge?: string;
    description: string;
    heroImage: string;
    icon: string;
    accentColor?: string;
    products: ProductItem[];
}

