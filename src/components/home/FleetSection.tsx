"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users, Briefcase, Shield, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const VEHICLES = [
  {
    type: "Sedan",
    tagline: "Comfortable & economical city rides",
    capacity: "Up to 4 Passengers",
    luggage: "2 bags",
    priceKm: "₹12/km onwards",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    features: ["Climate Control AC", "Luggage Space", "USB Charger", "Bluetooth Audio"],
  },
  {
    type: "SUV",
    tagline: "Perfect for family travel & rough roads",
    capacity: "Up to 6 Passengers",
    luggage: "4 bags",
    priceKm: "₹18/km onwards",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
    features: ["Extra Headroom & Legroom", "Spacious Boot Space", "All-Wheel Drive", "Rear AC Vents"],
  },
  {
    type: "Luxury Car",
    tagline: "Premium experience for business & events",
    capacity: "Up to 4 Passengers",
    luggage: "3 bags",
    priceKm: "₹35/km onwards",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
    features: ["Leather Seating", "Complimentary WiFi", "Mineral Water & Newspaper", "Chauffeur Driven"],
  },
  {
    type: "Tempo Traveller",
    tagline: "Group travel, picnics & family outings",
    capacity: "Up to 15 Passengers",
    luggage: "8 bags",
    priceKm: "₹25/km onwards",
    image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=600&q=80",
    features: ["Pushback Seats", "Surround Sound Audio", "Ample Passenger Space", "Perfect for long trips"],
  },
];

export default function FleetSection() {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("booking-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Our Fleet of Vehicles
              </h2>
              <p className="text-primary/70 text-base leading-relaxed">
                Choose from a range of clean, air-conditioned passenger cars and coaches managed by professional dispatchers.
              </p>
            </div>
            <Link
              href="/fleet"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover transition-colors shrink-0 group border-b border-accent/20 pb-1"
            >
              View Full Fleet Spec
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {VEHICLES.map((vehicle, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <div className="group bg-white border border-primary/5 shadow-xl shadow-primary/2 rounded-3xl overflow-hidden flex flex-col sm:flex-row h-full">
                
                {/* Image Side */}
                <div className="relative w-full sm:w-1/2 min-h-[220px] sm:min-h-0 bg-gradient-to-br from-primary/5 to-accent/5 overflow-hidden">
                  <img
                    src={vehicle.image}
                    alt={vehicle.type}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/10" />
                </div>

                {/* Content Side */}
                <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-accent uppercase tracking-widest">{vehicle.priceKm}</span>
                    <h3 className="text-2xl font-extrabold text-primary mt-1 mb-2">
                      {vehicle.type}
                    </h3>
                    <p className="text-xs text-primary/60 font-semibold mb-4">{vehicle.tagline}</p>

                    {/* Stats Icons */}
                    <div className="flex gap-4 pb-4 border-b border-primary/5 mb-4">
                      <div className="flex items-center gap-1 text-xs text-primary/75 font-semibold">
                        <Users className="h-4 w-4 text-accent" />
                        {vehicle.capacity.split(" ")[2]} Seats
                      </div>
                      <div className="flex items-center gap-1 text-xs text-primary/75 font-semibold">
                        <Briefcase className="h-4 w-4 text-accent" />
                        {vehicle.luggage}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 mb-6">
                      {vehicle.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2 text-xs text-primary/80 font-medium">
                          <span className="text-accent font-bold">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="#booking-section"
                    onClick={handleScrollToBooking}
                    className="w-full bg-primary/5 group-hover:bg-primary text-primary group-hover:text-white py-3 rounded-xl text-xs font-bold text-center transition-all duration-300 block hover:-translate-y-0.5"
                  >
                    Book {vehicle.type} Now
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
