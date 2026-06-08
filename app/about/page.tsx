import React from "react";
import type { Metadata } from "next";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import StatisticsSection from "@/components/home/StatisticsSection";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { ShieldAlert, Users, Award, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about CabPremium's dedication to providing safe, comfortable, and reliable taxi services across Kolkata and surrounding outstations.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Our Identity</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">About CabPremium</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We started with a simple vision: to eliminate the stress of local commuting and airport transfers by delivering a highly professional chauffeur service.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main Context */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Story Column */}
            <ScrollReveal direction="right">
              <div>
                <span className="text-xs font-bold text-accent uppercase tracking-widest">Our Journey</span>
                <h2 className="text-3xl font-extrabold text-primary mt-2 mb-6">
                  Setting New Benchmarks for Passenger Comfort
                </h2>
                <p className="text-primary/80 text-sm leading-relaxed mb-6">
                  At CabPremium, we believe that a taxi ride shouldn't be a gamble. You shouldn't have to worry about driver cancellations, dirty seats, or hidden surge prices. We designed a customer-centric logistics system that handles everything for you.
                </p>
                <p className="text-primary/80 text-sm leading-relaxed mb-8">
                  Over the years, we have grown from a small fleet of local cabs to a premium dispatch brand, operating sedans, SUVs, and luxury coaches across West Bengal, Odisha, and beyond.
                </p>
                
                {/* Core Principles Mini-grid */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex gap-3">
                    <Shield className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-primary">Uncompromising Safety</h4>
                      <p className="text-xs text-primary/60 mt-1">Real-time GPS logs, active support, and verified drivers.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-primary">Customer Centric</h4>
                      <p className="text-xs text-primary/60 mt-1">Transparent flat-rates, clean airconditioned fleets, and polite chauffeurs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side Visual Grid */}
            <ScrollReveal direction="left" className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-[32px] rotate-3 pointer-events-none" />
              <div className="relative rounded-[32px] overflow-hidden shadow-xl aspect-[4/3] bg-gradient-to-br from-primary/5 to-accent/5">
                <img
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80"
                  alt="Premium Sedan Detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Numerical Analytics Banner */}
      <StatisticsSection />

      {/* Standard Core Benefits Grid */}
      <WhyChooseUs />
    </div>
  );
}
