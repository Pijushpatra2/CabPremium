import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Navigation, Compass, Briefcase, Clock, Heart, ArrowRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore CabPremium's specialized travel services, including airport transfers, intercity outstation cabs, corporate dispatch, and hourly rentals.",
};

const DETAILED_SERVICES = [
  {
    title: "Airport Transfer Services",
    description: "Our dedicated airport shuttle offers reliable transit to and from Netaji Subhash Chandra Bose International Airport (CCU). We synchronize pickup schedules with live flight departure/arrival timings to ensure zero waiting hours.",
    icon: <Plane className="h-6 w-6 text-accent" />,
    features: [
      "Real-time flight arrival tracking",
      "Complimentary wait-time up to 45 mins",
      "Chauffeur paging assistance at arrivals terminal",
      "Spacious boot capacity for travel bags",
    ],
    priceTag: "Rates starting from ₹1,200 (Flat-Rate)",
  },
  {
    title: "Local City Point-to-Point Rides",
    description: "Get around Kolkata seamlessly. Whether commuting to Sector 5 offices, attending client briefings, going shopping at Quest Mall, or visiting friends, our professional local dispatch keeps you on time.",
    icon: <Navigation className="h-6 w-6 text-accent" />,
    features: [
      "Quick booking turnarounds inside city limits",
      "Airconditioned sedans and SUVs",
      "No dynamic surge charges",
      "Experienced drivers with local lane mapping",
    ],
    priceTag: "Rates starting from ₹150 base price",
  },
  {
    title: "Outstation Inter-City Cab Rentals",
    description: "Travel comfortably to outstation leisure spots or business towns. We provide dedicated flat-rate inter-city services to Mandarmani, Digha, Puri, Durgapur, Siliguri, and Kharagpur.",
    icon: <Compass className="h-6 w-6 text-accent" />,
    features: [
      "Experienced long-distance highway drivers",
      "Custom itineraries with multiple route stops",
      "Flat rate inclusive of state tolls and parking",
      "One-way and round-trip booking configurations",
    ],
    priceTag: "Rates starting from ₹12 per km",
  },
  {
    title: "Corporate Executive Fleet Management",
    description: "Ensure priority transit for client accounts, executives, and company employees. We support monthly billing cycles, corporate portals, and VIP vehicle dispatch with professional chauffeurs.",
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    features: [
      "Dedicated corporate dispatcher helpdesks",
      "Detailed trip telemetry and monthly invoice summaries",
      "Premium executive vehicles (luxury models)",
      "Strict driver dress-codes and behavioral compliance",
    ],
    priceTag: "Custom corporate billing contracts available",
  },
  {
    title: "Flexible Hourly Vehicle Rentals",
    description: "Book a premium cab with a driver for a defined duration. Our flexible packages cover 4 Hours (40km), 8 Hours (80km), and 12 Hours (120km) with unlimited halts and detours.",
    icon: <Clock className="h-6 w-6 text-accent" />,
    features: [
      "Unlimited stopovers within city limits",
      "Flexible hourly extension rates",
      "Ideal for city shopping, temple visits, and business meetings",
      "Stress-free transit: driver handles all parking hassles",
    ],
    priceTag: "Packages starting from ₹900 (4 Hours)",
  },
  {
    title: "Luxury Wedding & Event Car Rentals",
    description: "Make an elegant impression on special days. We rent decorated executive cars and group vans for marriage entries, weddings, family shuttle services, and high-profile parties.",
    icon: <Heart className="h-6 w-6 text-accent" />,
    features: [
      "Polished luxury vehicles (Mercedes, BMW, Audis)",
      "Optional floral decoration setups",
      "Dedicated guest coordinators for family groups",
      "On-demand multi-vehicle synchronization",
    ],
    priceTag: "Event rentals starting from ₹6,000",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Our Offerings</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">Professional Services</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We provide clean, air-conditioned taxi rides tailored for commutes, airport transfers, family outings, and corporate travel.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {DETAILED_SERVICES.map((service, index) => (
              <ScrollReveal key={index} direction="up" delay={0.1 * (index % 2)}>
                <div className="bg-white rounded-3xl p-8 border border-primary/5 shadow-xl shadow-primary/2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between h-full group hover:border-accent/10">
                  <div>
                    {/* Header: Icon + Title */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-accent-light flex items-center justify-center">
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-primary">{service.title}</h3>
                        <span className="text-xs text-accent font-semibold">{service.priceTag}</span>
                      </div>
                    </div>

                    <p className="text-primary/80 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-3.5 mb-8">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-primary/75 font-semibold">
                          <span className="text-accent text-sm font-bold leading-none mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Book Link */}
                  <Link
                    href="/#booking-section"
                    className="w-full bg-primary hover:bg-secondary text-white py-3.5 rounded-2xl text-xs font-bold text-center block transition-all shadow-md shadow-primary/5 hover:shadow-secondary/10 hover:-translate-y-0.5"
                  >
                    Request Instant Dispatch
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Direct Contact Notice */}
      <div className="bg-light py-12 border-t border-primary/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal direction="up">
            <h3 className="text-xl font-bold text-primary mb-2">Need a custom travel itinerary or hourly rental package?</h3>
            <p className="text-primary/70 text-xs sm:text-sm mb-6">Our dispatch coordinators are available 24/7 to design custom corporate or long-distance family packages.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="/contact"
                className="bg-primary text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-secondary transition-all shrink-0"
              >
                Inquire via Form
              </Link>
              <a
                href="tel:+919876543210"
                className="text-primary hover:text-accent text-xs font-extrabold flex items-center gap-1.5 transition-colors"
              >
                Call Dispatch desk: +91 98765 43210
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
