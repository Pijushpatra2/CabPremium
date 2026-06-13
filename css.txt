"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Clock3,
  Star,
  CheckCircle,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[900px] lg:min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.png"
          alt="Taxi Background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Main Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#03060D] via-[#070B14]/95 to-[#070B14]/50" />

      {/* Top Glow */}
      <div className="absolute top-[-200px] right-[-150px] h-[850px] w-[850px] rounded-full bg-primary/20 blur-[180px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-250px] left-[-200px] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[160px]" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Route SVG */}
      <svg
        className="absolute right-24 top-20 hidden lg:block z-10"
        width="260"
        height="300"
      >
        <path
          d="M40 250C120 220 70 150 160 110C240 80 180 20 240 10"
          stroke="white"
          strokeWidth="4"
          strokeDasharray="12 12"
          fill="none"
        />
      </svg>

      <div className="container relative z-20 mx-auto max-w-7xl px-4 pt-16 pb-40">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-5 py-2">
              <ShieldCheck size={16} className="text-primary" />
              <span className="text-primary font-semibold text-sm">
                FAST • SAFE • RELIABLE
              </span>
            </div>

            <h1 className="mt-8 font-black leading-[0.9] tracking-[-0.04em]">
              <span className="block whitespace-nowrap text-white text-[2rem] sm:text-6xl md:text-7xl xl:text-8xl">
                Book Your Taxi
              </span>

              <span className="block text-[1rem] whitespace-nowrap bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent sm:text-6xl">
                Anytime, Anywhere
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[#AAB4C8] leading-relaxed">
              Experience comfortable and affordable rides with professional
              drivers. Airport transfers, city rides, corporate travel and
              outstation journeys in seconds.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button
                className="
                  group
                  rounded-2xl
                  px-8
                  py-4
                  font-bold
                  bg-gradient-to-r
                  from-primary
                  to-secondary
                  text-black
                  shadow-[0_10px_30px_rgba(245,180,0,0.35)]
                  hover:scale-105
                  transition-all
                  duration-300
                  flex
                  items-center
                  gap-2
                "
              >
                Book A Ride
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="glass-card-dark rounded-2xl px-8 py-4 text-white font-semibold">
                Learn More
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                "24/7 Available",
                "Safe & Secure",
                "Cashless Payment",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-[#AAB4C8]"
                >
                  <CheckCircle size={16} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap gap-10 justify-center lg:justify-start">
              <div>
                <h3 className="sm:text-2xl md:text-4xl font-black text-white">15K+</h3>
                <p className="text-[#AAB4C8]">Happy Customers</p>
              </div>

              <div>
                <h3 className="sm:text-2xl md:text-4xl font-black text-white">250+</h3>
                <p className="text-[#AAB4C8]">Drivers</p>
              </div>

              <div>
                <h3 className="sm:text-2xl md:text-4xl font-black text-white">50K+</h3>
                <p className="text-[#AAB4C8]">Completed Trips</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative flex justify-center">
            {/* Taxi Glow */}
            <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full" />

            <div className="relative flex justify-center lg:justify-end">
              <motion.img
                initial={{
                  opacity: 0,
                  x: 100,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                }}
                src="/hero-img-cab-32.png"
                alt="Taxi"
                className="
                  relative
                  z-20
                  w-[110%]
                  lg:w-[130%]
                  xl:w-[120%]
                  max-w-[1400px]
                  lg:-mr-24
                  xl:-mr-32
                  drop-shadow-[0_50px_80px_rgba(245,180,0,0.35)]
                "
              />
            </div>

            {/* Pickup Card */}
            <motion.div
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
              hidden
                lg:block
                absolute
                top-8
                right-[-150]
                z-30
                rounded-3xl
                px-5
                py-4
                bg-white/[0.06]
                backdrop-blur-2xl
                border
                border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                before:absolute
                before:inset-0
                before:rounded-3xl
                before:bg-gradient-to-br
                before:from-white/10
                before:to-transparent
                before:pointer-events-none
                overflow-hidden
                "
            >
              <div className="relative flex items-center gap-4">
                <div
                  className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-primary/15
                    border
                    border-primary/20
                    flex
                    items-center
                    justify-center
                    "
                >
                  <Clock3 className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-[#AAB4C8]">Fastest Pickup</p>

                  <h4 className="font-bold text-white">Within 10 Minutes</h4>
                </div>
              </div>
            </motion.div>

            {/* Driver Card */}
            <motion.div
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="
               hidden
                lg:block
                absolute
                bottom-20
                left-0
                z-30
                rounded-3xl
                px-5
                py-4
                bg-white/[0.06]
                backdrop-blur-2xl
                border
                border-white/10
                shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                before:absolute
                before:inset-0
                before:rounded-3xl
                before:bg-gradient-to-br
                before:from-white/10
                before:to-transparent
                before:pointer-events-none
                overflow-hidden
                "
            >
              <div className="relative flex items-center gap-4">
                <div
                  className="
                    h-12
                    w-12
                    rounded-2xl
                    bg-primary/15
                    border
                    border-primary/20
                    flex
                    items-center
                    justify-center
                    "
                >
                  <Star className="h-5 w-5 text-primary" />
                </div>

                <div>
                  <p className="text-xs text-[#AAB4C8]">Verified Drivers</p>
                  <h4 className="font-bold text-white">5-Star Rated</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOOKING BAR */}
      {/* <div className="absolute bottom-0 left-1/2 z-40 w-full max-w-7xl -translate-x-1/2 translate-y-1/2 px-4">
        <div className="rounded-[32px] bg-[#131C2F]/90 backdrop-blur-2xl border border-primary/10 shadow-[0_30px_80px_rgba(0,0,0,0.5)] p-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              "Pickup Location",
              "Drop Location",
              "Date & Time",
              "Vehicle Type",
            ].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/5 bg-[#0E1525] p-4 hover:border-primary/30 transition-all"
              >
                <p className="text-xs text-[#AAB4C8] mb-2">{label}</p>
                <input
                  className="w-full bg-transparent outline-none text-white"
                  placeholder={label}
                />
              </div>
            ))}

            <button className="rounded-2xl bg-gradient-to-r from-primary to-secondary text-black font-bold">
              Find A Taxi
            </button>
          </div>
        </div>
      </div> */}
    </section>
  );
}
