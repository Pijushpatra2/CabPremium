"use client";

import React from "react";
import { FileText, ClipboardCheck, Compass, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const STEPS = [
  {
    title: "Fill Booking Form",
    description: "Enter your pickup and drop-off coordinates, date, hours, and pick your preferred cab class.",
    icon: <FileText className="h-6 w-6 text-white" />,
  },
  {
    title: "Receive Confirmation",
    description: "Review instant quote calculation and automatically receive a booking confirmation email.",
    icon: <ClipboardCheck className="h-6 w-6 text-white" />,
  },
  {
    title: "Driver Assigned",
    description: "Receive driver photo, contact number, and vehicle registration numbers 30-45 minutes before departure.",
    icon: <Compass className="h-6 w-6 text-white" />,
  },
  {
    title: "Enjoy Your Ride",
    description: "Board the clean, air-conditioned vehicle, track details on GPS, and reach your destination safely.",
    icon: <CheckCircle2 className="h-6 w-6 text-white" />,
  },
];

export default function BookingProcess() {
  return (
    <section className="py-20 bg-light relative overflow-hidden">
      {/* Decorative timeline connectors */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/5 -translate-y-1/2 hidden lg:block z-0 max-w-6xl mx-auto" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Our Simple Booking Process
            </h2>
            <p className="text-primary/70 text-base leading-relaxed">
              Rent a premium cab in 4 simple steps. We take care of dispatch, coordination, and routes.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {STEPS.map((step, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.15 * idx}>
              <div className="flex flex-col items-center text-center group relative">
                
                {/* Visual Line for Mobile/Tablet */}
                {idx < 3 && (
                  <div className="absolute top-12 left-1/2 w-0.5 h-16 bg-primary/5 -translate-x-1/2 md:block lg:hidden z-0" />
                )}

                {/* Circle Icon Badge */}
                <motion.div
                  whileHover={{ scale: 1.1, backgroundColor: "#16855D" }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20 z-10 relative mb-6"
                >
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-primary font-extrabold text-xs flex items-center justify-center shadow border-2 border-white">
                    0{idx + 1}
                  </span>
                  {step.icon}
                </motion.div>

                <h3 className="text-lg font-bold text-primary mb-3 group-hover:text-secondary transition-colors duration-200">
                  {step.title}
                </h3>
                
                <p className="text-primary/70 text-sm leading-relaxed px-4 md:px-0">
                  {step.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
