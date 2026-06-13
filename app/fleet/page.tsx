import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Users, Briefcase, IndianRupee, ShieldCheck, Airplay } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Fleet",
  description: "View DayNightCab's fleet of clean, modern vehicles. Choose between executive sedans, spacious SUVs, luxury rentals, and group coaches.",
};

const DETAILED_FLEET = [
  {
    name: "Standard Sedan",
    sub: "Toyota Etios, Maruti Dzire or equivalent",
    capacity: "4 Passengers",
    luggage: "2 Medium Bags",
    rate: "₹12 / km onwards",
    image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
    features: [
      "Climate Control Airconditioning",
      "Clean fabric seat covers",
      "USB Charging ports",
      "Bluetooth audio integration",
      "Sufficient boot space for luggage",
    ],
    bestFor: "Ideal for solo travelers, business commutes, and small families for airport runs.",
  },
  {
    name: "Spacious SUV",
    sub: "Toyota Innova Crysta, Maruti Ertiga or equivalent",
    capacity: "6 Passengers",
    luggage: "4 Medium Bags",
    rate: "₹18 / km onwards",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
    features: [
      "Rear air conditioning vents",
      "Adjustable pushback seating",
      "Generous headroom and legroom",
      "High ground clearance for rough highway roads",
      "Rear charging sockets",
    ],
    bestFor: "Perfect for family tours, long highway weekend trips, and groups with heavy bags.",
  },
  {
    name: "Premium Luxury Car",
    sub: "Mercedes Benz E-Class, BMW 5 Series or equivalent",
    capacity: "4 Passengers",
    luggage: "3 Medium Bags",
    rate: "₹35 / km onwards",
    image: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
    features: [
      "Premium plush leather interiors",
      "Complimentary high-speed WiFi",
      "Bottled mineral water & daily newspaper",
      "Active air suspension for super smooth transit",
      "Highly experienced executive chauffeur",
    ],
    bestFor: "Recommended for VIP business guests, wedding entries, and corporate delegates.",
  },
  {
    name: "Tempo Traveller",
    sub: "Force Tempo Traveller, Premium Coach or equivalent",
    capacity: "12-15 Passengers",
    luggage: "8+ Large Bags",
    rate: "₹25 / km onwards",
    image: "https://images.unsplash.com/photo-1532581291347-9c39cf10a73c?auto=format&fit=crop&w=600&q=80",
    features: [
      "Pushback reclining passenger seats",
      "Full surround-sound audio & visual LED monitors",
      "Dedicated overhead luggage racks & separate back boot",
      "On-board emergency medicine kits",
      "Individual reading lamps and AC vents",
    ],
    bestFor: "Best choice for group picnic transits, marriage guest shuttles, and long corporate outings.",
  },
];

export default function FleetPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Our Vehicles</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">Our Premium Fleet</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Explore our fleet of well-maintained passenger cars. We clean and inspect every vehicle daily to ensure comfort and safety.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Fleet Catalog */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {DETAILED_FLEET.map((vehicle, index) => {
              const isEven = index % 2 === 0;
              return (
                <ScrollReveal key={index} direction="up" delay={0.1}>
                  <div className={`flex flex-col lg:flex-row gap-10 items-stretch bg-white border border-primary/5 shadow-xl shadow-primary/2 rounded-[32px] overflow-hidden ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}>
                    {/* Left Car Photo */}
                    <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-0 relative bg-gradient-to-br from-primary/5 to-accent/5">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right Specs Details */}
                    <div className="w-full lg:w-1/2 p-8 sm:p-12 flex flex-col justify-between">
                      <div>
                        {/* Title block */}
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h3 className="text-2xl sm:text-3xl font-black text-primary">{vehicle.name}</h3>
                            <span className="text-xs text-primary/60 font-semibold">{vehicle.sub}</span>
                          </div>
                          <span className="bg-accent-light text-primary border border-accent/20 px-3.5 py-1.5 rounded-full text-xs font-black shrink-0 flex items-center">
                            <IndianRupee className="h-3 w-3 shrink-0" />
                            {vehicle.rate.replace("₹", "")}
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-primary/75 leading-relaxed mb-6 font-medium italic">
                          💡 Best For: {vehicle.bestFor}
                        </p>

                        {/* Specs Grid */}
                        <div className="grid grid-cols-2 gap-4 pb-6 border-b border-primary/5 mb-6 bg-light/50 rounded-2xl px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Users className="h-4.5 w-4.5 text-accent shrink-0" />
                            <div>
                              <p className="text-[10px] text-primary/40 font-bold uppercase">Passengers</p>
                              <p className="text-xs font-extrabold text-primary">{vehicle.capacity}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2 border-l border-primary/5 pl-4">
                            <Briefcase className="h-4.5 w-4.5 text-accent shrink-0" />
                            <div>
                              <p className="text-[10px] text-primary/40 font-bold uppercase">Luggage Limit</p>
                              <p className="text-xs font-extrabold text-primary">{vehicle.luggage}</p>
                            </div>
                          </div>
                        </div>

                        {/* Features List */}
                        <h4 className="text-sm font-bold text-primary mb-3">Amenities Included:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                          {vehicle.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-center gap-2 text-xs text-primary/80 font-medium">
                              <span className="text-accent font-bold">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTAs */}
                      <Link
                        href="/#booking-section"
                        className="bg-primary hover:bg-secondary text-white py-4 rounded-2xl text-xs font-black text-center transition-all shadow-md shadow-primary/5 hover:shadow-secondary/10 hover:-translate-y-0.5"
                      >
                        Book {vehicle.name} Class
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
