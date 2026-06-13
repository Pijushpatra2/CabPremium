"use client";

import React from "react";
import Counter from "@/components/shared/Counter";
import ScrollReveal from "@/components/shared/ScrollReveal";
import {
  Car,
  Users,
  ShieldCheck,
  Headphones,
} from "lucide-react";

const STATS = [
  {
    target: 10000,
    suffix: "+",
    label: "Rides Completed",
    description: "Safe and successful rides delivered.",
    icon: Car,
  },
  {
    target: 5000,
    suffix: "+",
    label: "Happy Customers",
    description: "Trusted by travelers every day.",
    icon: Users,
  },
  {
    target: 100,
    suffix: "+",
    label: "Verified Drivers",
    description: "Background checked professionals.",
    icon: ShieldCheck,
  },
  {
    target: 24,
    suffix: "/7",
    label: "Customer Support",
    description: "Available anytime you need help.",
    icon: Headphones,
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative py-24 bg-dark overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
              <span>||||</span>
              <span>Our Achievements</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Trusted by Thousands
              <span className="text-primary"> Across India</span>
            </h2>

            <p className="text-muted text-lg leading-relaxed">
              Delivering premium taxi services with reliability,
              safety, and customer satisfaction at the core.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 0.1}
              >
                <div className="group relative bg-card border border-border rounded-3xl p-6 lg:p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:border-primary/30">
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-primary/0 group-hover:bg-primary/[0.03] transition-all duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6 shadow-gold">
                    <Icon className="w-7 h-7 text-dark" />
                  </div>

                  {/* Number */}
                  <div className="relative z-10 text-2xl md:text-4xl lg:text-5xl font-black text-white mb-3">
                    <Counter
                      target={stat.target}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  </div>

                  {/* Label */}
                  <h3 className="relative z-10 text-lg font-bold text-white mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-muted leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Strip */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 bg-card border border-border rounded-3xl p-6 lg:p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <h3 className="text-primary text-2xl font-black mb-2">
                  4.9/5
                </h3>
                <p className="text-muted">
                  Average Customer Rating
                </p>
              </div>

              <div>
                <h3 className="text-primary text-2xl font-black mb-2">
                  99%
                </h3>
                <p className="text-muted">
                  On-Time Pickup Success
                </p>
              </div>

              <div>
                <h3 className="text-primary text-2xl font-black mb-2">
                  15+
                </h3>
                <p className="text-muted">
                  Cities Served Daily
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}