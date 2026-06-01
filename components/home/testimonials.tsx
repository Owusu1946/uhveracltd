"use client";

import { Smile, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback } from "react"
import { AnimatePresence, motion } from "framer-motion"

const testimonials = [
    {
        name: "Kenneth Owusu",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
        quote: "Uhverac delivered our IT rollout on time and with clear communication throughout. A reliable partner for growing businesses."
    },
    {
        name: "Ama Serwaa",
        role: "Business Consultant",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
        quote: "Their consultancy team helped us streamline operations. Professional, practical, and focused on results."
    },
    {
        name: "Kwasi Appiah",
        role: "Software Engineer",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
        quote: "We use Uhverac for supply and travel coordination. Consistent quality and responsive support every time."
    },
    {
        name: "Abena Boateng",
        role: "Education Specialist",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop",
        quote: "A modern company with a human touch. They understand what clients need and deliver with integrity."
    }
];

export function Testimonials() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const next = useCallback(() => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 6000);
        return () => clearInterval(timer);
    }, [next]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 100 : -100,
            opacity: 0,
            scale: 0.95
        })
    };

    return (
        <section className="relative flex w-full flex-col items-center overflow-hidden bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24">

            {/* Decorative Arc */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] h-[150vw] md:w-[120vw] md:h-[120vw] bg-transparent border-[1px] border-gray-100 rounded-full pointer-events-none -translate-y-1/2 z-0"></div>

            <div className="relative z-10 mx-auto mt-8 max-w-4xl px-2 text-center sm:mt-12 md:mt-16">

                {/* Header Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 mb-12 bg-gray-50 px-6 py-2 rounded-full border border-gray-100 shadow-sm"
                >
                    <span className="font-bold text-sm md:text-base tracking-wider uppercase text-gray-500">Testimonials</span>
                    <Smile className="h-5 w-5 text-black" />
                </motion.div>

                <div className="relative flex min-h-[240px] flex-col items-center justify-center sm:min-h-[280px] md:min-h-[300px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={index}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="w-full"
                        >
                            {/* Quote */}
                            <div className="relative mb-12">
                                <span className="absolute -left-2 -top-8 select-none font-serif text-5xl text-gray-100 sm:-left-4 sm:-top-12 sm:text-6xl md:-left-12 md:text-8xl">❝</span>
                                <p className="text-lg font-medium italic leading-relaxed tracking-tight text-black sm:text-2xl md:text-3xl lg:text-4xl">
                                    {testimonials[index].quote}
                                </p>
                            </div>

                            {/* User Profile */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border-4 border-white transform rotate-3 transition-transform hover:rotate-0 duration-500">
                                    <Image
                                        src={testimonials[index].image}
                                        alt={testimonials[index].name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl md:text-2xl text-black transition-all">{testimonials[index].name}</h4>
                                    <p className="text-gray-400 font-medium tracking-wide uppercase text-xs md:text-sm mt-1">{testimonials[index].role}</p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls & Dots */}
                <div className="mt-10 flex flex-col items-center gap-6 sm:mt-16 sm:gap-8">
                    <div className="flex items-center gap-4 sm:gap-6">
                        <button
                            onClick={prev}
                            className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-all shadow-sm active:scale-90"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <div className="flex justify-center gap-2.5">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => {
                                        setDirection(i > index ? 1 : -1);
                                        setIndex(i);
                                    }}
                                    className={`h-2 transition-all duration-300 rounded-full ${index === i ? "bg-black w-8" : "bg-gray-200 w-2 hover:bg-gray-400"
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={next}
                            className="h-12 w-12 rounded-full border border-gray-100 flex items-center justify-center bg-white text-black hover:bg-black hover:text-white transition-all shadow-sm active:scale-90"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}
