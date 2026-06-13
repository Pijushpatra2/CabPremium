"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RideBookingCTA() {
  return (
    <section className="py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[32px] bg-primary"
        >
          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary opacity-80" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 px-8 lg:px-14 py-8 lg:py-6">
            {/* Left Side */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Taxi Image */}
              <div className="relative w-[260px] h-[140px] shrink-0">
                <Image
                  src="/hero-img-cab-32.png"
                  alt="Taxi"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-center lg:text-left">
                <h2 className="text-dark text-3xl md:text-5xl font-black leading-tight">
                  Ready to book
                  <br />
                  your next ride?
                </h2>

                <p className="mt-2 text-dark/80 text-base md:text-lg font-medium">
                  Your journey starts with a tap.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="#booking-section"
              className="group inline-flex items-center gap-3 bg-dark text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:bg-black shadow-2xl"
            >
              Book a Ride Now

              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Decorative Taxi Light */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 hidden lg:block">
            <div className="px-4 py-1 rounded-lg bg-dark text-primary text-xs font-black tracking-wider shadow-lg">
              TAXI
            </div>
          </div>

          {/* Border Glow */}
          <div className="absolute inset-0 rounded-[32px] border border-white/20 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}