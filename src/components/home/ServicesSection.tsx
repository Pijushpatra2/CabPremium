"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Plane, Navigation, Compass, Briefcase, Clock, Heart } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const SERVICES = [
  {
    title: "Airport Transfer",
    description: "Never miss a flight. Guaranteed punctual pickups and drops at Netaji Subhash Chandra Bose Airport (CCU) with flight tracking.",
    icon: <Plane className="h-5 w-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Local City Ride",
    description: "Seamless point-to-point transit inside Kolkata. Ideal for shopping, appointments, dining, and daily office commutes.",
    icon: <Navigation className="h-5 w-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Outstation Taxi",
    description: "Inter-city rides to Puri, Mandarmani, Digha, and Durgapur. Travel long-distance in premium comfort with experienced drivers.",
    icon: <Compass className="h-5 w-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Corporate Travel",
    description: "Tailored transit for corporate executives. Includes priority dispatch, billing accounts, and premium luxury fleets.",
    icon: <Briefcase className="h-5 w-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hourly Rental",
    description: "Keep a car and driver at your disposal. Hire cab packages for 4, 8, or 12 hours with unlimited stops inside the city limits.",
    icon: <Clock className="h-5 w-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Wedding Car Rental",
    description: "Add elegance to your special day. Book decorated luxury cars for wedding guests, families, and bride/groom entries.",
    icon: <Heart className="h-5 w-5 text-accent" />,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesSection() {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("booking-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
                Our Premium Services
              </h2>
              <p className="text-primary/70 text-base leading-relaxed">
                From airport transfers to group outings, we provide tailor-made travel solutions designed around your schedules.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent-hover transition-colors shrink-0 group border-b border-accent/20 pb-1"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * index}>
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-primary/5 shadow-primary/2 hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent" />
                  
                  {/* Floating Icon Badges */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary/75 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <a
                      href="#booking-section"
                      onClick={handleScrollToBooking}
                      className="text-xs font-bold text-primary hover:text-accent transition-colors flex items-center gap-1 group/btn"
                    >
                      Book This Ride
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                    <Link
                      href="/services"
                      className="text-xs font-semibold text-primary/50 hover:text-primary transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
