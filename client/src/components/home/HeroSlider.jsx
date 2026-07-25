import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
const summerTraining = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133511/kidscodingai/assets/images/training/summer-training.jpg';
const trainingImage2 = 'https://res.cloudinary.com/dy9zlgjh6/image/upload/v1784133512/kidscodingai/assets/images/training/training-image-2.png';

const SWIPE_MIN_PX = 50;

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(null);

    const slides = useMemo(
        () => [
            { id: 1, image: '/kids-coding-ai-interactive.jpeg' },
            { id: 2, image: '/kids-coding--ai-unlock.jpeg' },
            { id: 3, image: '/kids-coding-ai-master.jpeg' },
            /** Training slide: full-bleed side-by-side like other carousel slides */
            { id: 4, image: summerTraining, pairImages: [summerTraining, trainingImage2] },
        ],
        []
    );

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = useCallback(() => setCurrentSlide((prev) => (prev + 1) % slides.length), []);
    const prevSlide = useCallback(() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length), []);

    const onTouchStart = (e) => {
        touchStartX.current = e.changedTouches[0].screenX;
    };

    const onTouchEnd = (e) => {
        if (touchStartX.current == null) return;
        const endX = e.changedTouches[0].screenX;
        const diff = touchStartX.current - endX;
        touchStartX.current = null;
        if (diff > SWIPE_MIN_PX) nextSlide();
        else if (diff < -SWIPE_MIN_PX) prevSlide();
    };

    return (
        <div className="group relative w-full min-w-0 overflow-hidden bg-slate-950">
            <div className="relative w-full max-w-none overflow-hidden shadow-[0_0_0_3px_rgba(250,204,21,0.35),0_25px_50px_-12px_rgba(0,0,0,0.45)] ring-1 ring-inset ring-amber-400/30 sm:shadow-[0_0_0_4px_rgba(250,204,21,0.35),0_25px_50px_-12px_rgba(0,0,0,0.45)]">
                {/* Taller responsive heights reduce text cropping in promotional images */}
                <div
                    className="relative aspect-[5/4] w-full min-w-0 max-w-[100vw] overflow-hidden sm:aspect-[1/1] md:aspect-[4/3] lg:aspect-auto lg:h-[min(93svh,1160px)] lg:min-h-[700px] xl:min-h-[800px]"
                    onTouchStart={onTouchStart}
                    onTouchEnd={onTouchEnd}
                >
                    {slides.map((slide, index) => {
                        const isContain = slide.imageFit === 'contain';
                        const isPairSlide = Array.isArray(slide.pairImages);
                        const kenBurnsInactive = !isContain && index !== currentSlide;
                        const imgTransform = kenBurnsInactive ? 'scale(1.03)' : 'scale(1)';

                        return (
                            <div
                                key={slide.id}
                                className={`absolute inset-0 bg-slate-950 transition-opacity duration-1000 ease-in-out ${
                                    index === currentSlide ? 'z-10 opacity-100' : 'z-0 opacity-0'
                                }`}
                            >
                                {isPairSlide ? (
                                    <div className="relative z-[1] grid h-full w-full grid-cols-2 gap-2 p-2 sm:gap-3 sm:p-3 md:gap-4 md:p-4">
                                        {slide.pairImages.map((imgSrc, pairIndex) => (
                                            <div
                                                key={`${slide.id}-pair-${pairIndex}`}
                                                className="relative h-full w-full overflow-hidden rounded-xl"
                                            >
                                                <img
                                                    src={imgSrc}
                                                    alt=""
                                                    aria-hidden
                                                    decoding="async"
                                                    sizes="50vw"
                                                    className="absolute inset-0 h-full w-full scale-110 object-cover object-center blur-xl"
                                                />
                                                <div className="absolute inset-0 bg-slate-950/30" />
                                                <img
                                                    src={imgSrc}
                                                    alt={`KidsCodingAI summer training poster ${pairIndex + 1}`}
                                                    decoding={index === 0 ? 'sync' : 'async'}
                                                    fetchpriority={index === 0 ? 'high' : 'auto'}
                                                    sizes="50vw"
                                                    className="relative z-[1] h-full w-full min-h-0 object-contain object-center transition-transform duration-[10000ms] ease-linear"
                                                    style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.03)' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                ) : isContain ? (
                                    <>
                                        {/* Full-bleed blurred fill so the slide matches other covers; sharp poster stays legible on top */}
                                        <div
                                            className="pointer-events-none absolute inset-0 overflow-hidden"
                                            aria-hidden
                                        >
                                            <img
                                                src={slide.image}
                                                alt=""
                                                decoding="async"
                                                fetchpriority="auto"
                                                sizes="100vw"
                                                className="h-full min-h-full w-full min-w-full scale-110 object-cover object-center blur-2xl saturate-150"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/25 to-slate-950/65" />
                                            <div className="absolute inset-0 bg-slate-950/20" />
                                        </div>
                                        <div className="relative z-[1] flex h-full w-full items-center justify-center px-3 py-5 sm:px-8 sm:py-10 md:px-12 md:py-12">
                                            <img
                                                src={slide.image}
                                                alt={`KidsCodingAI promotional slide ${index + 1}`}
                                                decoding={index === 0 ? 'sync' : 'async'}
                                                fetchpriority={index === 0 ? 'high' : 'auto'}
                                                sizes="100vw"
                                                className="max-h-full max-w-full min-h-0 min-w-0 object-contain object-center drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)] transition-transform duration-[10000ms] ease-linear"
                                                style={{ transform: imgTransform }}
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <img
                                        src={slide.image}
                                        alt={`KidsCodingAI promotional slide ${index + 1}`}
                                        decoding={index === 0 ? 'sync' : 'async'}
                                        fetchpriority={index === 0 ? 'high' : 'auto'}
                                        sizes="100vw"
                                        className="h-full w-full min-h-0 min-w-0 max-w-full object-cover object-center transition-transform duration-[10000ms] ease-linear"
                                        style={{
                                            transform: index === currentSlide ? 'scale(1)' : 'scale(1.03)',
                                        }}
                                    />
                                )}
                            </div>
                        );
                    })}

                    <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2 px-3 sm:bottom-6 sm:gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                onClick={() => setCurrentSlide(index)}
                                className={`h-2.5 rounded-full transition-all sm:h-3 ${
                                    index === currentSlide
                                        ? 'w-7 bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] sm:w-8'
                                        : 'w-2.5 bg-white/50 hover:bg-white/80 sm:w-3'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={prevSlide}
                        className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-95 sm:left-4 sm:h-12 sm:w-12"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    <button
                        type="button"
                        onClick={nextSlide}
                        className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-black/35 text-white backdrop-blur-sm transition-all hover:bg-black/50 active:scale-95 sm:right-4 sm:h-12 sm:w-12"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSlider;
