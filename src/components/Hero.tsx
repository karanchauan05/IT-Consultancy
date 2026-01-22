'use client';

import { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
    {
        id: 1,
        title: "Delivering extraordinary impact",
        subtitle: "Together we create technology that drives your business.",
        bgClass: "bg-tw-teal",
        image: "/images/hero-impact.webp"
    },
    {
        id: 2,
        title: "AI beyond the hype",
        subtitle: "Realizing the promise of artificial intelligence for your organization.",
        bgClass: "bg-slate-900",
        image: "/images/generative-ai.webp"
    },
    {
        id: 3,
        title: "Modern Digital Business",
        subtitle: "Evolve your operating model for the digital age.",
        bgClass: "bg-indigo-950",
        image: "/images/application-management.webp"
    }
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const slide = SLIDES[currentSlide];

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection === 1) {
            setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
        } else {
            setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
        }
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
            scale: 1.1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 } as any,
                opacity: { duration: 0.8 },
                scale: { duration: 10, ease: "linear" } as any // Slow zoom effect
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0,
            transition: {
                x: { type: "spring", stiffness: 300, damping: 30 } as any,
                opacity: { duration: 0.4 }
            }
        })
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0.5
            }
        }
    };

    return (
        <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-tw-black text-white mt-16 md:mt-0">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    <div
                        className={`absolute inset-0 bg-cover bg-center ${slide.bgClass}`}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-tw-black/60"></div>

                        {/* Animated gradient overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.3 }}
                            transition={{ duration: 2 }}
                            className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tw-crimson/40 via-transparent to-transparent"
                        />
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center max-w-5xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial="hidden"
                        animate="visible"
                        variants={contentVariants}
                    >
                        <h1 className="font-serif text-5xl md:text-7xl font-medium leading-tight mb-6">
                            {slide.id === 1 ? (
                                <span>
                                    Delivering <span className="text-tw-crimson decoration-tw-crimson/30 underline decoration-4 underline-offset-8">extraordinary</span> impact
                                </span>
                            ) : (
                                slide.title
                            )}
                        </h1>
                        <p className="font-serif italic text-lg md:text-xl mb-10 max-w-2xl text-gray-200">
                            {slide.subtitle}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="absolute bottom-12 right-12 flex gap-4 z-20">
                <button
                    onClick={() => paginate(-1)}
                    className="p-4 border border-white/30 rounded-full hover:bg-white hover:text-tw-black transition-all duration-300 text-white"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                    onClick={() => paginate(1)}
                    className="p-4 border border-white/30 rounded-full hover:bg-white hover:text-tw-black transition-all duration-300 text-white"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>

            {/* Indicators */}
            <div className="absolute bottom-14 left-12 flex items-center gap-3 z-20">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > currentSlide ? 1 : -1);
                            setCurrentSlide(index);
                        }}
                        className="group relative h-10 w-2"
                    >
                        <div className="absolute inset-0 bg-white/20 w-0.5 mx-auto rounded-full" />
                        <motion.div
                            className="absolute top-0 inset-x-0 bg-tw-crimson w-0.5 mx-auto rounded-full"
                            initial={{ height: 0 }}
                            animate={{ height: currentSlide === index ? '100%' : '0%' }}
                            transition={{ duration: 0.5 }}
                        />
                    </button>
                ))}
                <span className="text-xs font-mono text-white/60 ml-2">
                    0{currentSlide + 1} / 0{SLIDES.length}
                </span>
            </div>
        </section>
    );
}
