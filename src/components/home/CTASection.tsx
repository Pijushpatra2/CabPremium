"use client";

import React from "react";
import Link from "next/link";
import { Phone, ArrowRight, MessageSquareCode } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function CTASection() {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("booking-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-br from-primary via-secondary to-dark-bg text-white p-8 sm:p-16 shadow-2xl border border-white/5">
            {/* Visual background details */}
            <div className="absolute top-[-50%] right-[-20%] w-[600px] h-[600px] rounded-full bg-accent/15 filter blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute bottom-[-50%] left-[-20%] w-[500px] h-[500px] rounded-full bg-white/5 filter blur-3xl opacity-30 pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
              <span className="text-xs font-black text-accent uppercase tracking-widest bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
                Guaranteed Flat Rates
              </span>
              
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Need a Reliable Ride Today?
              </h2>
              
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need a quick airport transfer, a full day rental, or an outstation taxi, we have drivers standing by 24/7.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
                <a
                  href="#booking-section"
                  onClick={handleScrollToBooking}
                  className="bg-accent hover:bg-accent-hover text-primary px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-accent/10 hover:shadow-accent-hover/15 transition-all text-center flex items-center justify-center gap-2 hover:-translate-y-0.5"
                >
                  Book Taxi Now
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:border-white/30 bg-white/5 text-white px-8 py-4 rounded-xl text-sm font-bold transition-all text-center flex items-center justify-center gap-2 hover:bg-white/10 hover:-translate-y-0.5"
                >
                  <MessageSquareCode className="h-4 w-4 text-accent" />
                  Contact Support
                </Link>
              </div>

              {/* Instant Call Banner */}
              <div className="flex items-center gap-2 mt-6 text-xs sm:text-sm font-semibold text-white/95">
                <Phone className="h-4 w-4 text-accent animate-pulse" />
                Emergency Call Dispatch:{" "}
                <a href="tel:+919876543210" className="underline hover:text-accent font-bold">
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
