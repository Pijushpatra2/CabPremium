"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Users, Snowflake } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

const VEHICLES = [
  {
    name: "Economy",
    price: "$10.50",
    seats: 4,
    active: true,
    image: "/images/vehicles/economy.png",
  },
  {
    name: "SUV",
    price: "$18.75",
    seats: 6,
    active: false,
    image: "/images/vehicles/suv.png",
  },
  {
    name: "Luxury",
    price: "$28.90",
    seats: 4,
    active: false,
    image: "/images/vehicles/luxury.png",
  },
  {
    name: "Premium",
    price: "$35.00",
    seats: 6,
    active: false,
    image: "/images/vehicles/premium.png",
  },
];

export default function PopularVehiclesSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-dark">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-primary text-sm font-bold uppercase tracking-[0.2em] mb-4">
                <span>||||</span>
                <span>Popular Vehicles</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3">
                Ride your way
              </h2>

              <p className="text-muted text-lg">
                Choose the perfect ride for your journey
              </p>
            </div>

            <Link
              href="/vehicles"
              className="inline-flex items-center gap-3 text-white hover:text-primary transition-colors font-semibold"
            >
              View All Vehicles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Vehicle Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {VEHICLES.map((vehicle, index) => (
            <ScrollReveal
              key={vehicle.name}
              direction="up"
              delay={index * 0.1}
            >
              <div
                className={`group rounded-[28px] overflow-hidden border transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                  vehicle.active
                    ? "bg-primary border-primary shadow-gold-lg"
                    : "bg-card border-border hover:border-primary/30"
                }`}
              >
                {/* Vehicle Image */}
                <div className="relative h-52 flex items-center justify-center p-5">
                  <div
                    className={`absolute inset-0 ${
                      vehicle.active
                        ? "bg-gradient-to-b from-primary to-primary"
                        : "bg-gradient-to-b from-card-hover to-card"
                    }`}
                  />

                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={320}
                    height={180}
                    className="relative z-10 object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div
                  className={`px-6 pb-6 ${
                    vehicle.active ? "text-dark" : "text-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">
                      {vehicle.name}
                    </h3>

                    <span className="text-xl font-bold">
                      {vehicle.price}
                    </span>
                  </div>

                  <div
                    className={`flex items-center gap-4 text-sm ${
                      vehicle.active
                        ? "text-dark/80"
                        : "text-muted"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{vehicle.seats} Seats</span>
                    </div>

                    <span>•</span>

                    <div className="flex items-center gap-2">
                      <Snowflake className="h-4 w-4" />
                      <span>AC</span>
                    </div>
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