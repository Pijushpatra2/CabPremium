"use client";

import React, { useState } from "react";
import { Plus, Minus, Search, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const FAQ_DATABASE = [
  {
    category: "Booking",
    question: "How far in advance should I book my taxi?",
    answer: "We recommend booking at least 2 hours in advance for local city rides, and 12-24 hours in advance for outstation highway trips and airport transfers. This allows us to guarantee vehicle availability and dispatch driver coordinates to you early.",
  },
  {
    category: "Booking",
    question: "How can I book a taxi ride?",
    answer: "You can place a request directly on our home page booking portal or the contact page. Simply specify pickup/drop locations, date, pick vehicle class and submit contact info. The system registers the dispatch request instantly and emails you confirmation details.",
  },
  {
    category: "Cancellation",
    question: "Is there a cancellation fee?",
    answer: "No cancellation fees apply if you cancel at least 4 hours prior to the scheduled pickup time. Cancellations made inside the 4-hour window may incur a 15% displacement fee to compensate the driver already dispatched to your location.",
  },
  {
    category: "Payments",
    question: "Do your rates include highway tolls and parking charges?",
    answer: "Outstation quotes are base flat rates including fuel and driver allowances. State permit entry tolls and parking fees are typically charged on actual receipts during the journey, or can be prepaid as a lump sum by coordinating with our dispatch helpdesk.",
  },
  {
    category: "Payments",
    question: "What payment options are available?",
    answer: "We support multiple secure payment choices. You can pay digitally via UPI (Google Pay, PhonePe, Bhim, Paytm), debit/credit cards, netbanking, or choose to pay cash directly to the driver at the end of the trip.",
  },
  {
    category: "Safety",
    question: "Are your drivers background checked?",
    answer: "Yes, absolutely. Every single driver undergoes criminal history auditing, background verification, and regular character checks. Our vehicles are GPS tracking enabled, allowing passengers to share coordinates with family members.",
  },
  {
    category: "Airport Transfers",
    question: "What happens if my arrival flight is delayed?",
    answer: "We track your flight arrival numbers in real-time. If your flight is delayed or rescheduled, our dispatch desk automatically recalculates your pickup timing and holds the vehicle coordinate at zero additional charge.",
  },
];

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const categories = ["All", "Booking", "Cancellation", "Payments", "Safety", "Airport Transfers"];

  const filteredFaqs = FAQ_DATABASE.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white min-h-[80vh]">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Support Desk</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">F.A.Q Help Portal</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Search our help directory or filter categories to solve your reservation, safety, and payment queries.
            </p>
          </ScrollReveal>

          {/* Search bar */}
          <ScrollReveal direction="up" delay={0.2} className="w-full max-w-md mt-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary/40" />
              <input
                type="text"
                placeholder="Search queries (e.g. flight, refund, cancel)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-primary/10 bg-white focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all text-sm shadow-md shadow-primary/2 text-primary"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Accordion list */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Tabs */}
          <ScrollReveal direction="up" className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(null);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
                  activeCategory === cat
                    ? "bg-primary border-primary text-white shadow-md shadow-primary/10"
                    : "bg-white border-primary/5 hover:border-primary/20 text-primary/80"
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Accordion list container */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="popLayout">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={faq.question}
                      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "border-accent bg-accent-light/10 shadow-lg"
                          : "border-primary/5 hover:border-primary/10 bg-white"
                      }`}
                    >
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                      >
                        <span className="font-bold text-primary text-sm sm:text-base pr-4 flex items-center gap-2">
                          <HelpCircle className={`h-4.5 w-4.5 ${isOpen ? "text-accent" : "text-primary/40"} shrink-0`} />
                          {faq.question}
                        </span>
                        <span className="shrink-0 w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary/10 transition-colors">
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="px-6 pb-6 pt-1 text-primary/80 text-sm leading-relaxed border-t border-primary/5 pl-12">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-primary/50 text-sm py-12"
                >
                  No frequently asked questions match your criteria. Try searching a different term.
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
