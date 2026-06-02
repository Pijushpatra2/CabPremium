"use client";

import React from "react";
import Counter from "@/components/shared/Counter";
import ScrollReveal from "@/components/shared/ScrollReveal";

const STATS = [
  {
    target: 10000,
    suffix: "+",
    label: "Rides Completed",
    description: "Reliable journeys across cities.",
  },
  {
    target: 5000,
    suffix: "+",
    label: "Happy Customers",
    description: "Rated 4.9/5 stars overall.",
  },
  {
    target: 100,
    suffix: "+",
    label: "Professional Drivers",
    description: "Verified and police cleared.",
  },
  {
    target: 24,
    suffix: "/7",
    label: "Active Support",
    description: "Dispatch and call assistance.",
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary to-dark overflow-hidden text-white border-y border-white/5">
      {/* Decorative Blur Circles */}
      <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accent/20 filter blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-secondary/15 filter blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {STATS.map((stat, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <div className="flex flex-col items-center">
                {/* Animated counter number */}
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-accent block mb-2">
                  <Counter target={stat.target} duration={2} suffix={stat.suffix} />
                </span>
                
                {/* Labels */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1.5 leading-snug">
                  {stat.label}
                </h3>
                
                <p className="text-white/60 text-xs sm:text-sm font-medium">
                  {stat.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
