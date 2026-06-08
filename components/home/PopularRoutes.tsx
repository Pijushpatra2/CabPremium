"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Milestone,
  Clock,
  IndianRupee,
} from "lucide-react";
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
    const bookingSection = document.getElementById("booking-section");

    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: "smooth",
      });
    }

    setTimeout(() => {
      const pickupInput = document.querySelector(
        'input[name="pickup"]'
      ) as HTMLInputElement;

      const dropInput = document.querySelector(
        'input[name="drop"]'
      ) as HTMLInputElement;

      if (pickupInput && dropInput) {
        pickupInput.value = from;
        dropInput.value = to;

        pickupInput.dispatchEvent(
          new Event("input", {
            bubbles: true,
          })
        );

        dropInput.dispatchEvent(
          new Event("input", {
            bubbles: true,
          })
        );
      }
    }, 800);
  };

  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[350px] w-[350px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[250px] w-[250px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                <span>||||</span>
                <span>Popular Routes</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Popular Outstation Routes
              </h2>

              <p className="text-muted text-base leading-relaxed">
                Check estimated rates for our most-frequented routes from
                Kolkata. Transparent pricing, professional drivers and
                comfortable rides.
              </p>
            </div>

            <Link
              href="/routes"
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors shrink-0 group border-b border-primary/20 pb-1"
            >
              See All Routes & Rates

              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Routes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {ROUTES.map((route, index) => (
            <ScrollReveal
              key={index}
              direction="up"
              delay={0.1 * index}
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                className="bg-card rounded-3xl p-5 sm:p-6 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  {/* Route Details */}
                  <div className="flex items-center gap-2 mb-6 flex-wrap sm:flex-nowrap">
                    {/* From */}
                    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
                      <span className="text-xs text-muted-light font-bold uppercase tracking-wider">
                        From
                      </span>

                      <span className="text-sm font-bold text-white flex items-center gap-1 truncate">
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                        {route.from}
                      </span>
                    </div>

                    <ArrowRight className="h-4 w-4 text-primary mx-auto shrink-0 mt-4 hidden sm:block" />

                    {/* To */}
                    <div className="flex flex-col gap-0.5 text-right flex-1 min-w-0">
                      <span className="text-xs text-muted-light font-bold uppercase tracking-wider">
                        To
                      </span>

                      <span className="text-sm font-bold text-white flex items-center gap-1 justify-end truncate">
                        {route.to}
                        <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-primary/10 mb-6 bg-dark/30 rounded-2xl px-4">
                    <div className="flex items-center gap-2">
                      <Milestone className="h-4 w-4 text-primary shrink-0" />

                      <div>
                        <p className="text-[10px] text-muted-light font-bold uppercase">
                          Distance
                        </p>

                        <p className="text-xs font-bold text-white">
                          {route.distance}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 border-l border-primary/10 pl-4">
                      <Clock className="h-4 w-4 text-primary shrink-0" />

                      <div>
                        <p className="text-[10px] text-muted-light font-bold uppercase">
                          Travel Time
                        </p>

                        <p className="text-xs font-bold text-white">
                          {route.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between gap-4 mt-auto">
                  <div>
                    <span className="text-[10px] text-muted-light font-bold uppercase block">
                      Estimated Rate
                    </span>

                    <span className="text-xl font-black text-white flex items-center">
                      <IndianRupee className="h-4 w-4 text-primary shrink-0" />
                      {route.price.replace("₹", "")}
                    </span>
                  </div>

                  <button
                    onClick={() =>
                      handleBookRoute(route.from, route.to)
                    }
                    className="bg-primary hover:bg-secondary text-dark px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-300 flex items-center gap-1 group/btn hover:-translate-y-0.5 cursor-pointer"
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