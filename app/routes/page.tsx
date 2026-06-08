import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PopularRoutes from "@/components/home/PopularRoutes";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Compass, ShieldCheck, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Popular Routes",
  description: "Check flat-rate taxi charges, travel times, and travel distances for popular routes starting from Kolkata to Digha, Puri, Mandarmani, and other locations.",
};

export default function RoutesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Destinations</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">Outstation Routes Directory</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We offer point-to-point flat rates for inter-state highway travel. Review the table below or select a popular route below.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Popular Routes section cards */}
      <PopularRoutes />

      {/* Directory Rates Table */}
      <div className="py-12 bg-light border-t border-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-extrabold text-primary mb-2">Comprehensive Rates Reference</h2>
              <p className="text-primary/60 text-xs">Rates shown are one-way base estimations including fuel, driver allowance, and basic vehicle maintenance.</p>
            </div>
            
            {/* Table layout */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-primary/5 shadow-primary/2">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-primary text-white border-b border-primary/10 text-xs sm:text-sm font-bold">
                      <th className="py-4 px-6">Route Lane</th>
                      <th className="py-4 px-6">Distance</th>
                      <th className="py-4 px-6">Sedan Flat Price</th>
                      <th className="py-4 px-6">SUV Flat Price</th>
                      <th className="py-4 px-6 text-center">Dispatch Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-primary/5 text-xs sm:text-sm font-medium text-primary/80">
                    {[
                      { route: "Kolkata ⇆ Digha Beach", dist: "190 km", sedan: "₹3,400", suv: "₹4,800" },
                      { route: "Kolkata ⇆ Mandarmani Resorts", dist: "175 km", sedan: "₹3,200", suv: "₹4,500" },
                      { route: "Kolkata ⇆ Puri (Odisha)", dist: "500 km", sedan: "₹8,500", suv: "₹12,000" },
                      { route: "Kolkata ⇆ Kharagpur IIT", dist: "140 km", sedan: "₹2,500", suv: "₹3,500" },
                      { route: "Kolkata ⇆ Durgapur City", dist: "170 km", sedan: "₹2,900", suv: "₹4,000" },
                      { route: "Kolkata ⇆ Siliguri Town", dist: "580 km", sedan: "₹11,500", suv: "₹16,000" },
                      { route: "Kolkata ⇆ Haldia Industrial Port", dist: "125 km", sedan: "₹2,200", suv: "₹3,000" },
                      { route: "Kolkata ⇆ Bolpur (Shantiniketan)", dist: "165 km", sedan: "₹2,800", suv: "₹3,900" },
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-primary/5 transition-colors">
                        <td className="py-4.5 px-6 font-bold flex items-center gap-1.5 text-primary">
                          <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                          {row.route}
                        </td>
                        <td className="py-4.5 px-6">{row.dist}</td>
                        <td className="py-4.5 px-6 text-primary font-bold">{row.sedan}</td>
                        <td className="py-4.5 px-6 text-primary font-bold">{row.suv}</td>
                        <td className="py-4.5 px-6 text-center">
                          <Link
                            href="/#booking-section"
                            className="inline-flex items-center gap-1 text-[11px] font-black text-accent hover:text-accent-hover underline"
                          >
                            Book Lane
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
