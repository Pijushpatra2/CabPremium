import React from "react";
import Link from "next/link";
import { Car, Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-bg text-white pt-20 pb-10 border-t border-accent/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="bg-primary p-2 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Cab<span className="text-accent font-extrabold">Premium</span>
              </span>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Experience the pinnacle of reliable, luxury city rides and outstation transfers. Dedicated to getting you to your destination safely and on-time.
            </p>
            <div className="flex gap-4">
              {/* Simple aesthetic social icons */}
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-accent/20 border border-white/10 hover:border-accent/40 flex items-center justify-center text-xs font-semibold hover:text-accent transition-all duration-300"
                  aria-label={social}
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pl-4 after:content-[''] after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:w-1.5 after:h-4 after:bg-accent after:rounded-full">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {[
                { name: "Home Page", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Our Services", href: "/services" },
                { name: "Vehicle Fleet", href: "/fleet" },
                { name: "Popular Routes", href: "/routes" },
                { name: "Rate Pricing", href: "/pricing" },
                { name: "F.A.Q", href: "/faq" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/75 hover:text-accent text-sm flex items-center gap-1 group transition-colors duration-200"
                  >
                    <ArrowRight className="h-3 w-3 text-accent group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pl-4 after:content-[''] after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:w-1.5 after:h-4 after:bg-accent after:rounded-full">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50">Call Us 24/7</p>
                  <a href="tel:+919876543210" className="text-white hover:text-accent font-semibold text-sm transition-colors">
                    +91 98765 43210
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50">Email Support</p>
                  <a href="mailto:bookings@cabpremium.com" className="text-white hover:text-accent font-semibold text-sm transition-colors">
                    bookings@cabpremium.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50">Headquarters</p>
                  <span className="text-white/80 text-sm leading-relaxed">
                    12, Park Street, Sector 5,<br />Kolkata, West Bengal - 700091
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Opening Hours / Payment */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white relative pl-4 after:content-[''] after:absolute after:left-0 after:bottom-1/2 after:translate-y-1/2 after:w-1.5 after:h-4 after:bg-accent after:rounded-full">
              Our Availability
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-white/50">Working Hours</p>
                  <span className="text-white/80 text-sm">
                    Open 24 Hours / 7 Days a Week
                  </span>
                </div>
              </li>
            </ul>
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-white/40 mb-3 uppercase tracking-wider font-semibold">Payment Methods</p>
              <div className="flex gap-2">
                {["UPI", "Cards", "NetBanking", "Cash"].map((method) => (
                  <span
                    key={method}
                    className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/70 font-semibold"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-white/50 text-xs">
            &copy; {currentYear} CabPremium Taxi Service. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <Link href="/faq" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/faq" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="/faq" className="hover:text-accent transition-colors">Cancellation Rules</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
