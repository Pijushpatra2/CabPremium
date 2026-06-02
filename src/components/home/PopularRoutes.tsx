"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Milestone, Clock, IndianRupee } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const ROUTES = [
  {
    from: "Kolkata Airport",
    to: "Digha Beach",
    distance: "190 km",
    duration: "4.5 hours",
    price: "₹3,400",
  },
  {
    from: "Kolkata City",
    to: "Puri (Odisha)",
    distance: "500 km",
    duration: "9.5 hours",
    price: "₹8,500",
  },
  {
    from: "Kolkata City",
    to: "Mandarmani",
    distance: "175 km",
    duration: "4.0 hours",
    price: "₹3,200",
  },
  {
    from: "Kolkata City",
    to: "Kharagpur",
    distance: "140 km",
    duration: "3.2 hours",
    price: "₹2,500",
  },
  {
    from: "Kolkata City",
    to: "Durgapur",
    distance: "170 km",
    duration: "3.5 hours",
    price: "₹2,900",
  },
  {
    from: "Kolkata City",
    to: "Siliguri (Hills)",
    distance: "580 km",
    duration: "12 hours",
    price: "₹11,500",
  },
];

export default function PopularRoutes() {
  const handleBookRoute = (from: string, to: string) => {
    // Scroll to form
    const bookingSection = document.getElementById("booking-section");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }

    // Attempt to prefill values by dispatching a custom event or writing to standard inputs
    setTimeout(() => {
      const pickupInput = document.querySelector('input[name="pickup"]') as HTMLInputElement;
      const dropInput = document.querySelector('input[name="drop"]') as HTMLInputElement;
      if (pickupInput && dropInput) {
        pickupInput.value = from;
        dropInput.value = to;
        
        // Dispatch input events so React Hook Form registers changes
        pickupInput.dispatchEvent(new Event("input", { bubbles: true }));
        dropInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }, 800);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Popular Outstation Routes
              </h2>
              <p className="text-primary/70 text-base leading-relaxed">
                Check estimated rates for our most-frequented paths from Kolkata. Rates are flat and include all vehicle driver allowances.
              </p>
            </div>
            <Link
              href="/routes"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover transition-colors shrink-0 group border-b border-accent/20 pb-1"
            >
              See All Routes & Rates
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ROUTES.map((route, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <motion.div
                whileHover={{
                  y: -5,
                  borderColor: "rgba(32, 197, 137, 0.2)",
                  boxShadow: "0 12px 24px -8px rgba(11, 93, 72, 0.06)",
                }}
                className="bg-white rounded-3xl p-6 border border-primary/5 shadow-md shadow-primary/2 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Route details */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-xs text-primary/50 font-bold uppercase tracking-wider">From</span>
                      <span className="text-sm font-bold text-primary flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                        {route.from}
                      </span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent mx-auto shrink-0 mt-4" />
                    <div className="flex flex-col gap-0.5 text-right ml-auto">
                      <span className="text-xs text-primary/50 font-bold uppercase tracking-wider">To</span>
                      <span className="text-sm font-bold text-primary flex items-center gap-1 justify-end">
                        {route.to}
                        <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                      </span>
                    </div>
                  </div>

                  {/* Distance and Duration stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary/5 mb-6 bg-light/50 rounded-2xl px-4">
                    <div className="flex items-center gap-2">
                      <Milestone className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-[10px] text-primary/40 font-bold uppercase">Distance</p>
                        <p className="text-xs font-bold text-primary">{route.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 border-l border-primary/5 pl-4">
                      <Clock className="h-4 w-4 text-accent" />
                      <div>
                        <p className="text-[10px] text-primary/40 font-bold uppercase">Travel Time</p>
                        <p className="text-xs font-bold text-primary">{route.duration}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="text-[10px] text-primary/45 font-bold uppercase block">Estimated Rate</span>
                    <span className="text-xl font-black text-primary flex items-center">
                      <IndianRupee className="h-4.5 w-4.5 text-accent shrink-0" />
                      {route.price.replace("₹", "")}
                    </span>
                  </div>
                  <button
                    onClick={() => handleBookRoute(route.from, route.to)}
                    className="bg-primary/5 hover:bg-primary text-primary hover:text-white px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-1 group/btn hover:-translate-y-0.5 cursor-pointer"
                  >
                    Book Now
                    <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
