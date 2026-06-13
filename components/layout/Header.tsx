"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Car } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Our Fleet", href: "/fleet" },
  { name: "Popular Routes", href: "/routes" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile nav on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass-nav py-3 shadow-md shadow-primary/5"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-xl group-hover:bg-secondary transition-colors duration-300">
                <Car className="h-6 w-6 text-accent" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Day<span className="text-accent font-extrabold">NightCab</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-primary font-semibold"
                        : "text-primary/75 hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-secondary transition-colors duration-200"
              >
                <Phone className="h-4 w-4 text-accent" />
                +91 98765 43210
              </a>
              <Link
                href="/contact"
                className="bg-primary hover:bg-secondary text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/20 hover:-translate-y-0.5"
              >
                Book Ride
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-primary hover:bg-primary/5 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-45 lg:hidden"
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0.1, duration: 0.4 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white z-46 shadow-2xl p-6 flex flex-col justify-between lg:hidden"
            >
              <div className="mt-12">
                <div className="flex items-center gap-2 mb-8">
                  <div className="bg-primary p-2 rounded-xl">
                    <Car className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-xl font-bold tracking-tight text-white">
                    Day<span className="text-accent font-extrabold">NightCab</span>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "px-4 py-3 rounded-xl text-base font-semibold transition-all",
                          isActive
                            ? "bg-primary/5 text-primary border-l-4 border-accent"
                            : "text-primary/75 hover:bg-primary/5 hover:text-primary"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col gap-4 mt-auto">
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center gap-2 py-3 border border-primary/10 rounded-xl text-base font-bold text-primary hover:bg-primary/5 transition-colors"
                >
                  <Phone className="h-5 w-5 text-accent" />
                  +91 98765 43210
                </a>
                <Link
                  href="/contact"
                  className="bg-primary hover:bg-secondary text-white text-center py-3.5 rounded-xl text-base font-bold transition-all shadow-lg shadow-primary/10"
                >
                  Book Ride Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
