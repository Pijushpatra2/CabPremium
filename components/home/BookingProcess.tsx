"use client";

import React from "react";
import {
  FileText,
  ClipboardCheck,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Fill Booking Form",
    description:
      "Enter pickup & drop locations, choose your ride type, schedule date and preferred travel time.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Receive Confirmation",
    description:
      "Get an instant fare estimate and booking confirmation directly to your email and phone.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Driver Assigned",
    description:
      "Receive driver details, vehicle information and live tracking before pickup.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Enjoy Your Ride",
    description:
      "Sit back, relax and enjoy a safe, comfortable and premium travel experience.",
    icon: CheckCircle2,
  },
];

export default function BookingProcess() {
  return (
    <section className="relative py-24 overflow-hidden bg-dark">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
              <span>||||</span>
              <span>How It Works</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5">
              Book Your Ride In
              <span className="text-primary"> 4 Easy Steps</span>
            </h2>

            <p className="text-muted text-lg leading-relaxed">
              Fast, transparent and hassle-free booking process designed
              to get you moving in minutes.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Timeline */}
        <div className="hidden lg:block absolute top-[53%] left-0 right-0">
          <div className="max-w-6xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 relative">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <ScrollReveal
                key={step.number}
                direction="up"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{
                    y: -10,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative h-full"
                >
                  {/* Mobile Connector */}
                  {index !== STEPS.length - 1 && (
                    <div className="absolute left-8 top-24 w-[2px] h-16 bg-primary/20 lg:hidden" />
                  )}

                  <div className="relative bg-card border border-border rounded-3xl p-8 h-full group hover:border-primary/30 transition-all duration-500">
                    {/* Step Number */}
                    <div className="absolute top-5 right-5 text-5xl font-black text-primary/10 select-none">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-gold">
                        <Icon className="w-7 h-7 text-dark" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {step.title}
                    </h3>

                    <p className="text-muted leading-relaxed mb-6">
                      {step.description}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-semibold">
                      Step {step.number}
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <button className="btn-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-3">
              Book Your Ride Now
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}