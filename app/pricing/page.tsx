import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { IndianRupee, HelpCircle, ArrowRight, ShieldCheck, Car, HelpCircle as HelpIcon } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing Packages",
  description: "Check transparent taxi rates per kilometer, flat hourly vehicle rentals, and airport transfer charges in Kolkata. No surge fees.",
};

const KILOMETER_RATES = [
  { type: "Sedan Class", base: "₹12 / km", minKm: "150 km / day", luggage: "2 Bags", icon: "🚗" },
  { type: "Spacious SUV", base: "₹18 / km", minKm: "200 km / day", luggage: "4 Bags", icon: "🚙" },
  { type: "Premium Luxury", base: "₹35 / km", minKm: "100 km / day", luggage: "3 Bags", icon: "✨" },
  { type: "Tempo Traveller", base: "₹25 / km", minKm: "250 km / day", luggage: "8+ Bags", icon: "🚐" },
];

const HOURLY_PACKAGES = [
  { title: "4 Hours (40 Km Limit)", sedan: "₹900", suv: "₹1,400", extraKm: "₹12/km", extraHr: "₹100/hr" },
  { title: "8 Hours (80 Km Limit)", sedan: "₹1,800", suv: "₹2,600", extraKm: "₹12/km", extraHr: "₹100/hr" },
  { title: "12 Hours (120 Km Limit)", sedan: "₹2,600", suv: "₹3,800", extraKm: "₹12/km", extraHr: "₹100/hr" },
];

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Rates</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">Transparent Pricing</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We offer completely flat, transparent taxi rates. No hidden surge charges, no peak hour booking fees.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Main grids */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Rate Per KM Cards */}
          <ScrollReveal direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-3">Outstation Kilometre Rates</h2>
              <p className="text-primary/70 text-xs">Ideal for long distance round-trips. Rates apply to total distance traveled.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {KILOMETER_RATES.map((item, idx) => (
              <ScrollReveal key={idx} direction="up" delay={0.1 * idx}>
                <div className="bg-white border border-primary/5 rounded-3xl p-6 shadow-xl shadow-primary/2 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between text-center relative group">
                  <div className="absolute top-4 right-4 text-2xl filter saturate-50 group-hover:saturate-100 transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-1 mt-2">{item.type}</h3>
                    <span className="text-2xl font-black text-accent block my-4">{item.base}</span>
                    <ul className="text-xs text-primary/75 font-semibold space-y-2 mb-6 border-t border-primary/5 pt-4">
                      <li>Min Billing: {item.minKm}</li>
                      <li>Luggage: {item.luggage}</li>
                      <li>Driver Allowance: Inclusive</li>
                      <li>GPS Telemetry: Yes</li>
                    </ul>
                  </div>
                  <Link
                    href="/#booking-section"
                    className="w-full bg-primary/5 text-primary hover:bg-primary hover:text-white py-2.5 rounded-xl text-xs font-bold text-center block transition-all"
                  >
                    Select Rate
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Hourly Rentals Table */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Hourly table */}
            <div className="lg:col-span-8">
              <ScrollReveal direction="right">
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary mb-6">Local Hourly Package Rates</h3>
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/5 shadow-primary/2">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-primary text-white text-xs sm:text-sm font-bold border-b border-primary/10">
                          <th className="py-4 px-6">Package Duration</th>
                          <th className="py-4 px-6">Sedan Class</th>
                          <th className="py-4 px-6">SUV Class</th>
                          <th className="py-4 px-6">Extra Km / Hr</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-primary/5 text-xs sm:text-sm font-medium text-primary/80">
                        {HOURLY_PACKAGES.map((pkg, idx) => (
                          <tr key={idx} className="hover:bg-primary/5 transition-colors">
                            <td className="py-4 px-6 font-bold text-primary">{pkg.title}</td>
                            <td className="py-4 px-6 font-black text-accent">{pkg.sedan}</td>
                            <td className="py-4 px-6 font-black text-accent">{pkg.suv}</td>
                            <td className="py-4 px-6 text-primary/50 text-xs">
                              {pkg.extraKm} / {pkg.extraHr}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Inclusions details sidebar */}
            <div className="lg:col-span-4 bg-light border border-primary/5 rounded-3xl p-6 sm:p-8">
              <ScrollReveal direction="left">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-1.5">
                  <HelpIcon className="h-5 w-5 text-accent" />
                  Rates Guidelines
                </h3>
                <ul className="space-y-4 text-xs font-semibold text-primary/85 leading-relaxed">
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span><strong>Toll & State Taxes:</strong> One-way outstation rates are inclusive of all driver charges but exclusive of state entry permit tolls unless specified.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span><strong>Night Driver Allowance:</strong> Night allowance (₹250) applies automatically if drivers travel between 10:00 PM and 6:00 AM.</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">✓</span>
                    <span><strong>No Peak Hour Surge:</strong> Unlike standard cab-hailing apps, your confirmed reservation quote stays flat, regardless of local weather conditions or peak business.</span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
