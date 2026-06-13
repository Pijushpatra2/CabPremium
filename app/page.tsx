import React from "react";
import HeroSection from "@/components/home/HeroSection";
import QuickBookingForm from "@/components/home/QuickBookingForm";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ServicesSection from "@/components/home/ServicesSection";
import FleetSection from "@/components/home/FleetSection";
import BookingProcess from "@/components/home/BookingProcess";
import PopularRoutes from "@/components/home/PopularRoutes";
import Testimonials from "@/components/home/Testimonials";
import StatisticsSection from "@/components/home/StatisticsSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "DayNightCab Taxi Booking Service",
    description:
      "Book reliable airport transfers, local city rides, outstation trips, and corporate travel in minutes. Clean vehicles, verified drivers, 24/7 support.",
    provider: {
      "@type": "LocalBusiness",
      name: "DayNightCab",
      telephone: "+91 98765 43210",
      email: "bookings@DayNightCab.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "12, Park Street, Sector 5",
        addressLocality: "Kolkata",
        addressRegion: "West Bengal",
        postalCode: "700091",
        addressCountry: "IN",
      },
      priceRange: "$$",
    },
    areaServed: "Kolkata, West Bengal, India",
    offers: {
      "@type": "Offer",
      priceCurrency: "INR",
    },
  };

  return (
    <>
      {/* Schema Markup for Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Headings and Visual Showcase */}
      <HeroSection />

      {/* List of services */}
      <ServicesSection />

      {/* Structured grid details of customer support, GPS, etc */}
      <WhyChooseUs />

      {/* Vehicle class specification sheets */}
      <FleetSection />

      {/* User booking timeline steps */}
      <BookingProcess />

      {/* Popular paths leaving Kolkata */}
      <PopularRoutes />

      {/* Numerical count analytics counters */}
      <StatisticsSection />

      {/* Customer review sliders */}
      <Testimonials />

      {/* Collapsible details for cancellations/refunds/flights */}
      {/* <FAQSection /> */}

      {/* CTA booking / contact prompts */}
      <CTASection />
    </>
  );
}
