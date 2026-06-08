"use client";

import React, { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";

const FAQS = [
  {
    question: "How do I book a premium taxi ride?",
    answer: "You can book directly using our homepage booking form or contact page form. Choose your pickup/drop details, select your preferred vehicle class, provide your phone and email, and submit the request. Our dispatch system automatically generates a confirmed booking ID and sends receipt details directly to your inbox.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer completely free cancellations up to 4 hours before your scheduled pickup time. Cancellations made within 4 hours may attract a nominal driver displacement fee of 15% of the estimated ride value. To cancel or reschedule, please contact our support team at +91 98765 43210.",
  },
  {
    question: "What payment methods are supported?",
    answer: "We support multiple secure payment methods for your convenience. You can pay digitally via UPI (Google Pay, PhonePe, Paytm), credit/debit cards, NetBanking, or pay in cash directly to the driver at the end of your trip. Toll charges and parking fees are calculated transparently.",
  },
  {
    question: "How do you ensure passenger safety?",
    answer: "Safety is our highest priority. All our drivers undergo comprehensive background checks, regular police verification, and safety training. Furthermore, every vehicle is GPS-tracked in real-time, allowing you to share your live coordinates with family members during the ride.",
  },
  {
    question: "Do you offer flight tracking for airport transfers?",
    answer: "Yes, absolutely! When you book an airport pickup and provide your flight details, our dispatch team tracks the live flight arrival status. If your flight is delayed or arrives early, your pickup time is adjusted automatically so that your driver is waiting for you right as you exit the terminal.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight flex items-center justify-center gap-2">
              Frequently Asked Questions
            </h2>
            <p className="text-primary/70 text-base leading-relaxed">
              Find instant answers to common questions regarding booking rules, safety, billing, and cancellations.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion Wrapper */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={index} direction="up" delay={0.05 * index}>
                <div
                  className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "border-accent bg-accent-light/10 shadow-lg shadow-primary/2"
                      : "border-primary/5 hover:border-primary/10 bg-white"
                  }`}
                >
                  {/* Trigger Header */}
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

                  {/* Body Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-primary/80 text-sm leading-relaxed border-t border-primary/5 pl-12">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
