"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function HeroSection() {
  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("booking-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-20 lg:pt-32 lg:pb-32 flex items-center min-h-[90vh]">
      {/* Decorative Background Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent-light/60 filter blur-3xl opacity-70 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[450px] h-[450px] rounded-full bg-primary/5 filter blur-3xl opacity-80 pointer-events-none" />

      {/* Floating Animated Geometric Shapes */}
      <div className="absolute top-1/4 left-10 w-4 h-4 bg-accent/40 rounded-full animate-float pointer-events-none hidden md:block" />
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-primary/10 rounded-lg animate-float-delayed pointer-events-none hidden md:block" />
      <div className="absolute top-2/3 right-10 w-3 h-3 bg-secondary/30 rotate-45 pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col text-left">
            <ScrollReveal direction="right" delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-light text-primary text-xs font-bold mb-6 border border-accent/20">
                <ShieldCheck className="h-4 w-4 text-accent" />
                <span>Premium Ride, Professional Dispatch</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary leading-[1.1] mb-6">
                Reliable Taxi Service <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                  For Every Journey
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.3}>
              <p className="text-base sm:text-lg text-primary/80 mb-8 max-w-xl leading-relaxed">
                Book airport transfers, city rides, outstation trips, and corporate travel in minutes. Travel with clean vehicles and verified drivers.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#booking-section"
                  onClick={scrollToForm}
                  className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/20 hover:-translate-y-1 text-center flex items-center justify-center gap-2 group"
                >
                  Book Now
                  <ArrowRight className="h-5 w-5 text-accent group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="tel:+919876543210"
                  className="border-2 border-primary/10 hover:border-primary/20 bg-white/50 text-primary px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 hover:-translate-y-1 text-center flex items-center justify-center gap-2 hover:bg-primary/5"
                >
                  <Phone className="h-5 w-5 text-accent animate-pulse" />
                  Call +91 98765 43210
                </a>
              </div>
            </ScrollReveal>

            {/* Micro Highlights */}
            <ScrollReveal direction="up" delay={0.5}>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-primary/5">
                {[
                  { title: "Rated 4.9/5", desc: "by 5k+ customers", icon: <Star className="h-4 w-4 fill-accent text-accent" /> },
                  { title: "24/7 Service", desc: "No surge pricing", icon: "✓" },
                  { title: "GPS Enabled", desc: "Live trip tracking", icon: "✓" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="flex items-center gap-1 font-bold text-sm text-primary">
                      {typeof item.icon === "string" ? <span className="text-accent text-base">{item.icon}</span> : item.icon}
                      {item.title}
                    </div>
                    <span className="text-xs text-primary/60 mt-0.5">{item.desc}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right Image/Graphic Column */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <ScrollReveal direction="left" delay={0.3} className="relative w-full max-w-[450px] lg:max-w-none">
              
              {/* Premium Background Card Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-3xl opacity-10 blur-xl -rotate-6" />

              {/* Main Fleet Mock Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10 aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10">
                <img
                  src="https://images.unsplash.com/photo-1494783301193-11c00307c29e?auto=format&fit=crop&w=800&q=80"
                  alt="Premium Luxury Sedan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent" />
              </div>

              {/* Floating Widgets */}
              <motion.div
                initial={{ x: 20, y: 0, opacity: 0 }}
                animate={{ x: 0, y: [0, -10, 0], opacity: 1 }}
                transition={{
                  x: { delay: 0.6, duration: 0.5 },
                  y: { repeat: Infinity, duration: 6, ease: "easeInOut" }
                }}
                className="absolute -top-6 -right-4 bg-white/95 rounded-2xl p-4 shadow-xl border border-primary/5 flex items-center gap-3 glass-card pointer-events-none"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center text-primary font-extrabold text-lg">
                  🚕
                </div>
                <div>
                  <p className="text-xs text-primary/50 font-bold">Fastest Pickup</p>
                  <p className="text-sm font-extrabold text-primary">Within 10 Mins</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: -20, y: 0, opacity: 0 }}
                animate={{ x: 0, y: [0, 8, 0], opacity: 1 }}
                transition={{
                  x: { delay: 0.7, duration: 0.5 },
                  y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute -bottom-6 -left-4 bg-white/95 rounded-2xl p-4 shadow-xl border border-primary/5 flex items-center gap-3 glass-card pointer-events-none"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-xl">
                  👤
                </div>
                <div>
                  <p className="text-xs text-primary/50 font-bold">Expert Drivers</p>
                  <p className="text-sm font-extrabold text-primary">5-Star Verified</p>
                </div>
              </motion.div>

            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
