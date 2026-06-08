"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Plane,
  Navigation,
  Compass,
  Briefcase,
  Clock,
  Heart,
} from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const SERVICES = [
  {
    title: "Airport Transfer",
    description:
      "Never miss a flight. Guaranteed punctual pickups and drops at Netaji Subhash Chandra Bose Airport (CCU) with flight tracking.",
    icon: <Plane className="h-5 w-5 text-dark" />,
    image:
      "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Local City Ride",
    description:
      "Seamless point-to-point transit inside Kolkata. Ideal for shopping, appointments, dining, and daily office commutes.",
    icon: <Navigation className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Outstation Taxi",
    description:
      "Inter-city rides to Puri, Mandarmani, Digha, and Durgapur. Travel long-distance in premium comfort with experienced drivers.",
    icon: <Compass className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Corporate Travel",
    description:
      "Tailored transit for corporate executives. Includes priority dispatch, billing accounts, and premium luxury fleets.",
    icon: <Briefcase className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Hourly Rental",
    description:
      "Keep a car and driver at your disposal. Hire cab packages for 4, 8, or 12 hours with unlimited stops inside the city limits.",
    icon: <Clock className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Wedding Car Rental",
    description:
      "Add elegance to your special day. Book decorated luxury cars for wedding guests, families, and bride/groom entries.",
    icon: <Heart className="h-5 w-5 text-primary" />,
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ServicesSection() {
  const handleScrollToBooking = (e: React.MouseEvent) => {
    e.preventDefault();

    const target = document.getElementById("booking-section");

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] bg-primary/5 blur-[100px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-[0.2em] mb-4">
                Our Services
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
                Comfortable rides
                <br />
                for every need
              </h2>

              <p className="text-muted text-lg leading-relaxed">
                From daily commutes to airport transfers, we've got you
                covered with premium taxi services designed around your
                schedule.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-primary/20 text-white hover:bg-primary hover:text-dark transition-all duration-300 font-semibold shrink-0"
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES.slice(0, 4).map((service, index) => (
            <ScrollReveal
              key={service.title}
              direction="up"
              delay={index * 0.1}
            >
              <div
                className={`group rounded-[28px] overflow-hidden border transition-all duration-500 flex flex-col h-full hover:-translate-y-2 ${
                  index === 0
                    ? "bg-primary border-primary shadow-gold-lg"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Icon */}
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                      index === 0
                        ? "bg-dark/10"
                        : "bg-white/10 border border-white/5"
                    }`}
                  >
                    {service.icon}
                  </div>

                  <h3
                    className={`text-xl font-bold mb-3 ${
                      index === 0 ? "text-dark" : "text-white"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`text-sm leading-relaxed mb-8 flex-1 ${
                      index === 0 ? "text-dark/80" : "text-muted"
                    }`}
                  >
                    {service.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <a
                      href="#booking-section"
                      onClick={handleScrollToBooking}
                      className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                        index === 0
                          ? "text-dark"
                          : "text-primary hover:text-secondary"
                      }`}
                    >
                      Book This Ride

                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>

                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${
                        index === 0
                          ? "border-dark/20 text-dark"
                          : "border-primary/20 text-primary"
                      }`}
                    >
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-14 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-3 text-primary hover:text-secondary transition-colors font-semibold"
            >
              Explore All Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}