"use client";

import React from "react";
import { UserCheck, Clock, IndianRupee, Compass, Shield, Timer } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const ADVANTAGES = [
  {
    title: "Professional Drivers",
    description: "Highly trained, verified, and courteous chauffeurs committed to safety and professional conduct.",
    icon: <UserCheck className="h-6 w-6 text-accent" />,
  },
  {
    title: "24/7 Availability",
    description: "Round-the-clock booking system and dispatch services. We are ready when you need to travel.",
    icon: <Clock className="h-6 w-6 text-accent" />,
  },
  {
    title: "Affordable Pricing",
    description: "Completely transparent flat-rates per route or distance. No surprise booking fees or surge pricing.",
    icon: <IndianRupee className="h-6 w-6 text-accent" />,
  },
  {
    title: "GPS Live Tracking",
    description: "Live coordinates sent to your family and dashboard. Trace ride progress and route efficiency in real-time.",
    icon: <Compass className="h-6 w-6 text-accent" />,
  },
  {
    title: "Safe & Secure",
    description: "Strict safety audits, cleaned vehicles, emergency SOS button, and complete customer verification.",
    icon: <Shield className="h-6 w-6 text-accent" />,
  },
  {
    title: "On-Time Pickup",
    description: "Punctuality is our guarantee. Driver reaches your pickup location 10 minutes prior to scheduled time.",
    icon: <Timer className="h-6 w-6 text-accent" />,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Why Travellers Choose Us
            </h2>
            <p className="text-primary/70 text-base leading-relaxed">
              We focus on premium comfort, strict punctuality, and absolute safety, setting the standard for professional taxi services.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ADVANTAGES.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
              <motion.div
                whileHover={{
                  y: -8,
                  borderColor: "rgba(32, 197, 137, 0.3)",
                  boxShadow: "0 15px 30px -10px rgba(11, 93, 72, 0.08)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl p-8 border border-primary/5 shadow-md shadow-primary/2 hover:shadow-xl transition-all duration-300 flex flex-col items-start gap-5 group"
              >
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-2xl bg-accent-light flex items-center justify-center group-hover:bg-primary/5 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-primary/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
