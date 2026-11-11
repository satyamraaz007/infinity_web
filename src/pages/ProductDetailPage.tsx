import { useParams, Link, Navigate } from 'react-router-dom';
import { getProductBySlug, findProductBySlug, getRelatedProducts } from '@/data/products';
import { Container } from '@/components/common/Container';
import { ProductGallery } from '@/components/products/ProductGallery';
import { ProductSpecsTable } from '@/components/products/ProductSpecsTable';
import { ProductFeaturesGrid } from '@/components/products/ProductFeaturesGrid';
import { ProductApplicationsGrid } from '@/components/products/ProductApplicationsGrid';
import { ProductCertifications } from '@/components/products/ProductCertifications';
import { ProductFAQAccordion } from '@/components/products/ProductFAQAccordion';
import { ProductEnquiryCTA } from '@/components/products/ProductEnquiryCTA';
import { RelatedProducts } from '@/components/products/RelatedProducts';
import { MotionReveal } from '@/components/common/MotionReveal';
import { ChevronRight, Phone, ShieldCheck, FileText, Share2, Check } from 'lucide-react';
import { company } from '@/data/company';
import { useState } from 'react';

export function ProductDetailPage() {
    const { categorySlug, productSlug } = useParams<{ categorySlug?: string; productSlug?: string }>();
    const [copied, setCopied] = useState(false);

    // Support both /products/:categorySlug/:productSlug and /products/:productSlug
    const product = (categorySlug && productSlug)
        ? getProductBySlug(categorySlug, productSlug)
        : productSlug
            ? findProductBySlug(productSlug)?.product
            : undefined;

    if (!product) {
        return <Navigate to="/products" replace />;
    }

    const relatedProducts = getRelatedProducts(product.slug, 3);

    const handleShare = () => {
        if (navigator.share) {
            navigator.share({
                title: product.title,
                text: product.tagline,
                url: window.location.href,
            }).catch(() => {});
        } else {
            navigator.clipboard.writeText(window.location.href);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="bg-[#f5f6f8]">
            {/* Top Breadcrumb & Metadata Navigation Bar */}
            <div className="border-b border-slate-200 bg-white py-3">
                <Container className="flex flex-wrap items-center justify-between gap-3 text-xs">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-muted">
                        <Link to="/" className="hover:text-navy transition-colors font-medium">Home</Link>
                        <ChevronRight size={13} className="text-slate-400" />
                        <Link to="/products" className="hover:text-navy transition-colors font-medium">Products</Link>
                        <ChevronRight size={13} className="text-slate-400" />
                        <Link
                            to={`/products/${product.categorySlug}`}
                            className="hover:text-navy transition-colors font-medium"
                        >
                            {product.categoryTitle}
                        </Link>
                        <ChevronRight size={13} className="text-slate-400" />
                        <span className="font-bold text-navy truncate max-w-[200px] sm:max-w-none">
                            {product.title}
                        </span>
                    </nav>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={handleShare}
                            className="inline-flex items-center gap-1.5 rounded border border-slate-200 bg-paper px-3 py-1.5 text-xs font-semibold text-navy hover:border-gold hover:text-gold transition-colors"
                            aria-label="Share product specification"
                        >
                            {copied ? <Check size={13} className="text-emerald-600" /> : <Share2 size={13} />}
                            <span>{copied ? 'Link Copied!' : 'Share Page'}</span>
                        </button>
                    </div>
                </Container>
            </div>

            {/* Product Hero Showcase Section */}
            <section className="bg-white border-b border-slate-200 py-10 sm:py-14">
                <Container>
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 xl:gap-16 items-start">
                        {/* Left: Interactive Media Gallery */}
                        <div>
                            <ProductGallery
                                images={product.gallery}
                                productTitle={product.title}
                            />
                        </div>

                        {/* Right: Product Executive Summary & Quick Specs */}
                        <div className="flex flex-col justify-between">
                            <div>
                                {/* Badges & Category */}
                                <div className="flex flex-wrap items-center gap-2 mb-3">
                                    <Link
                                        to={`/products/${product.categorySlug}`}
                                        className="rounded bg-navy px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white hover:bg-blue transition-colors"
                                    >
                                        {product.categoryTitle}
                                    </Link>
                                    {product.badge && (
                                        <span className="inline-flex items-center gap-1 rounded bg-gold/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-navy border border-gold/50">
                                            <ShieldCheck size={13} className="text-gold" />
                                            <span>{product.badge}</span>
                                        </span>
                                    )}
                                </div>

                                {/* Main Title & Tagline */}
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-navy leading-[1.05]">
                                    {product.title}
                                </h1>
                                <p className="mt-3 text-base sm:text-lg font-medium text-blue leading-snug">
                                    {product.tagline}
                                </p>

                                {/* Overview Description */}
                                <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-700">
                                    {product.overview}
                                </p>

                                {/* Quick Specs Highlight Box Grid */}
                                <div className="mt-6 rounded-xl border border-slate-200 bg-[#fafbfc] p-5 shadow-inner">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                        Core Technical Indicators
                                    </h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                        {product.quickSpecs.map(spec => (
                                            <div
                                                key={spec.label}
                                                className={`rounded-lg border p-3 ${
                                                    spec.highlight
                                                        ? 'border-gold/60 bg-gold/5'
                                                        : 'border-slate-200 bg-white'
                                                }`}
                                            >
                                                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 truncate">
                                                    {spec.label}
                                                </div>
                                                <div className="mt-1 text-xs sm:text-sm font-bold text-navy truncate">
                                                    {spec.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* CTAs */}
                            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-4">
                                <a
                                    href="#rfq-section"
                                    className="inline-flex items-center justify-center gap-2 rounded border border-gold bg-red px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-red/90"
                                >
                                    <FileText size={16} />
                                    <span>Request Spec Sheet &amp; Quote</span>
                                </a>

                                <a
                                    href={`tel:${company.phone}`}
                                    className="inline-flex items-center justify-center gap-2 rounded border border-navy bg-navy px-6 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all hover:bg-blue hover:-translate-y-0.5"
                                >
                                    <Phone size={15} />
                                    <span>Speak with Engineer</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Architectural Narrative */}
                    <div className="mt-12 pt-8 border-t border-slate-200">
                        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
                            Engineering Background &amp; Architecture
                        </h3>
                        <div className="grid gap-6 md:grid-cols-3 text-sm leading-relaxed text-slate-700">
                            {product.fullDescription.map((paragraph, idx) => (
                                <p key={idx} className="border-l-2 border-gold/40 pl-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Core Sections Stack */}
            <div className="py-14 sm:py-20 space-y-14 sm:space-y-20">
                <Container className="space-y-14 sm:space-y-20">
                    {/* 1. Feature Section */}
                    <MotionReveal direction="up">
                        <ProductFeaturesGrid
                            features={product.features}
                            productTitle={product.title}
                        />
                    </MotionReveal>

                    {/* 2. Specification Section */}
                    <MotionReveal direction="up">
                        <ProductSpecsTable
                            specifications={product.specifications}
                            productTitle={product.title}
                        />
                    </MotionReveal>

                    {/* 3. Applications Grid */}
                    <MotionReveal direction="up">
                        <ProductApplicationsGrid
                            applications={product.applications}
                            productTitle={product.title}
                        />
                    </MotionReveal>

                    {/* 4. Certifications & Standards */}
                    <MotionReveal direction="up">
                        <ProductCertifications
                            certifications={product.certifications}
                            productTitle={product.title}
                        />
                    </MotionReveal>

                    {/* 5. FAQ Section (as specifically requested at the end) */}
                    <MotionReveal direction="up">
                        <ProductFAQAccordion
                            faqs={product.faqs}
                            productTitle={product.title}
                        />
                    </MotionReveal>

                    {/* 6. RFQ & Direct Contact Box */}
                    <MotionReveal direction="up">
                        <ProductEnquiryCTA
                            productTitle={product.title}
                            categoryTitle={product.categoryTitle}
                        />
                    </MotionReveal>

                    {/* 7. Related Products Cross Navigation */}
                    <MotionReveal direction="up">
                        <RelatedProducts
                            products={relatedProducts}
                            categoryTitle={product.categoryTitle}
                            categorySlug={product.categorySlug}
                        />
                    </MotionReveal>
                </Container>
            </div>
        </div>
    );
}
