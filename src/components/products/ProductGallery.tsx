import { useState, useEffect } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductGalleryImage } from '@/types/products';

export function ProductGallery({
    images,
    productTitle,
}: {
    images: ProductGalleryImage[];
    productTitle: string;
}) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    // Keyboard support for lightbox
    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxOpen(false);
            if (e.key === 'ArrowRight') setActiveIndex(prev => (prev + 1) % images.length);
            if (e.key === 'ArrowLeft') setActiveIndex(prev => (prev - 1 + images.length) % images.length);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, images.length]);

    const activeImage = images[activeIndex] || images[0];

    return (
        <div className="space-y-4">
            {/* Main Stage Image */}
            <div className="group relative aspect-[16/10] sm:aspect-[16/11] overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-md">
                <img
                    src={activeImage.url}
                    alt={activeImage.caption || productTitle}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-102"
                />

                {/* Gradient Overlay for Caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

                {/* Expand / Lightbox Trigger */}
                <button
                    type="button"
                    onClick={() => setLightboxOpen(true)}
                    className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 text-white backdrop-blur-md border border-white/20 transition-all hover:bg-gold hover:text-navy hover:scale-110 shadow-lg"
                    aria-label="View high resolution image"
                >
                    <Maximize2 size={16} />
                </button>

                {/* Arrow navigation over main image */}
                {images.length > 1 && (
                    <>
                        <button
                            type="button"
                            onClick={() => setActiveIndex(prev => (prev - 1 + images.length) % images.length)}
                            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-navy/70 text-white backdrop-blur-sm transition-all hover:bg-gold hover:text-navy"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveIndex(prev => (prev + 1) % images.length)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-navy/70 text-white backdrop-blur-sm transition-all hover:bg-gold hover:text-navy"
                            aria-label="Next image"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </>
                )}

                {/* Caption Bar */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
                    <p className="text-xs sm:text-sm font-medium text-white/95 leading-snug drop-shadow-sm">
                        {activeImage.caption}
                    </p>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-white/60">
                        <span>Figure {activeIndex + 1} of {images.length}</span>
                        <span className="text-gold font-semibold uppercase tracking-wider">Engineering Detail</span>
                    </div>
                </div>
            </div>

            {/* Thumbnail Row */}
            {images.length > 1 && (
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                    {images.map((img, idx) => {
                        const isSelected = idx === activeIndex;
                        return (
                            <button
                                key={img.url}
                                type="button"
                                onClick={() => setActiveIndex(idx)}
                                className={`group relative aspect-[16/10] overflow-hidden rounded-md border-2 transition-all duration-200 ${
                                    isSelected
                                        ? 'border-gold shadow-md ring-2 ring-gold/40'
                                        : 'border-slate-200 opacity-70 hover:opacity-100 hover:border-slate-400'
                                }`}
                                aria-label={`Select figure ${idx + 1}`}
                            >
                                <img
                                    src={img.url}
                                    alt=""
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {isSelected && (
                                    <div className="absolute inset-0 bg-gold/10 pointer-events-none" />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}

            {/* Fullscreen Lightbox Modal */}
            {lightboxOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fadeIn">
                    <button
                        type="button"
                        onClick={() => setLightboxOpen(false)}
                        className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-red hover:text-white"
                        aria-label="Close preview"
                    >
                        <X size={24} />
                    </button>

                    {/* Prev / Next buttons */}
                    <button
                        type="button"
                        onClick={() => setActiveIndex(prev => (prev - 1 + images.length) % images.length)}
                        className="absolute left-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
                        aria-label="Previous image"
                    >
                        <ChevronLeft size={28} />
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveIndex(prev => (prev + 1) % images.length)}
                        className="absolute right-6 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-gold hover:text-navy"
                        aria-label="Next image"
                    >
                        <ChevronRight size={28} />
                    </button>

                    {/* Image in Modal */}
                    <div className="max-w-5xl max-h-[85vh] flex flex-col items-center">
                        <img
                            src={activeImage.url}
                            alt={activeImage.caption}
                            className="max-h-[75vh] w-auto max-w-full rounded-md object-contain shadow-2xl"
                        />
                        <div className="mt-4 text-center">
                            <p className="text-base font-semibold text-white">
                                {activeImage.caption}
                            </p>
                            <p className="text-xs text-gold/80 mt-1 uppercase tracking-wider">
                                {productTitle} • Technical Photo {activeIndex + 1} / {images.length}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

