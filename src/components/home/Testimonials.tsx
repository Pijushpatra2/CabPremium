"use client";

import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const REVIEWS = [
  {
    name: "Arindam Mukherjee",
    role: "Corporate Executive, TCS",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "I use CabPremium for all my airport trips and corporate travels. Their punctuality is impressive — driver coordinates are shared on time, cars are spotless, and the billing is completely transparent. Highly recommended!",
  },
  {
    name: "Priyanka Sen",
    role: "Travel Blogger",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "Booked a sedan for an outstation trip from Kolkata to Mandarmani. The driver was extremely professional and knew the highway roads perfectly. Safe driving, great comfort, and affordable prices.",
  },
  {
    name: "Vikram Malhotra",
    role: "Regular Commuter",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    review: "I rented a wedding car packages and SUV rides for my family guests. The team was highly accommodating with timing adjustments, and the driver coordinates were dispatched early. Exceptional hospitality!",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const slideLeft = () => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? REVIEWS.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setDirection(1);
    setCurrent((prev) => (prev === REVIEWS.length - 1 ? 0 : prev + 1));
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      slideRight();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section className="py-20 bg-light relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-[-10%] w-[400px] h-[400px] rounded-full bg-accent-light/40 filter blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Loved by Thousands of Riders
            </h2>
            <p className="text-primary/70 text-base leading-relaxed">
              Don't take our word for it. Here is what our regular commuters, business houses, and vacationers say about their experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* Carousel Wrapper */}
        <ScrollReveal direction="up" delay={0.2} className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-primary/5 shadow-xl shadow-primary/2 min-h-[350px] sm:min-h-[280px] flex flex-col justify-between overflow-hidden">
            
            {/* Quote Icon Background */}
            <Quote className="absolute top-8 right-8 h-20 w-20 text-accent/5 pointer-events-none" />

            <div className="relative flex-grow flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="w-full flex flex-col gap-6"
                >
                  {/* Rating Stars */}
                  <div className="flex gap-1">
                    {Array.from({ length: REVIEWS[current].rating }).map((_, idx) => (
                      <Star key={idx} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base sm:text-lg text-primary/80 italic font-medium leading-relaxed">
                    "{REVIEWS[current].review}"
                  </p>

                  {/* Author Details */}
                  <div className="flex items-center gap-4 mt-2">
                    <img
                      src={REVIEWS[current].photo}
                      alt={REVIEWS[current].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-accent/25"
                    />
                    <div>
                      <h4 className="font-extrabold text-primary text-base leading-snug">
                        {REVIEWS[current].name}
                      </h4>
                      <p className="text-xs text-primary/50 font-semibold mt-0.5">
                        {REVIEWS[current].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Toggle Buttons */}
            <div className="flex justify-end gap-3 mt-6 sm:mt-0 relative z-10">
              <button
                onClick={slideLeft}
                className="w-11 h-11 rounded-xl border border-primary/10 hover:border-primary/20 flex items-center justify-center text-primary hover:bg-primary/5 transition-all"
                aria-label="Previous Review"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={slideRight}
                className="w-11 h-11 rounded-xl bg-primary hover:bg-secondary text-white flex items-center justify-center shadow-md shadow-primary/10 transition-all"
                aria-label="Next Review"
              >
                <ChevronRight className="h-5 w-5 text-accent" />
              </button>
            </div>
            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
