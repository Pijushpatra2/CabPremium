"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Phone, MapPin, Clock, Loader2, Send } from "lucide-react";
import { ContactSchema, type ContactInput } from "@/lib/schema";
import { useToast } from "@/components/ui/Toast";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      pickup: "",
      drop: "",
      travelDate: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactInput) => {
    setIsLoading(true);
    setSuccess(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccess(true);
        toast({
          title: "Inquiry Sent Successfully!",
          description: "Our team will reach out to you within 30 minutes.",
          type: "success",
        });
        reset();
      } else {
        toast({
          title: "Failed to Send Message",
          description: result.message || "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Contact error:", error);
      toast({
        title: "Connection Error",
        description: "Could not connect to support servers. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-16 sm:py-24 overflow-hidden border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <ScrollReveal direction="up">
            <span className="text-xs font-black text-accent uppercase tracking-widest block mb-3">Connect</span>
            <h1 className="text-4xl sm:text-5xl font-black text-primary tracking-tight">Contact Our Dispatch</h1>
            <p className="text-primary/70 text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              Have questions or need to make a complex taxi booking booking? Fill out the form or reach out directly.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details Column */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <ScrollReveal direction="right">
              <h3 className="text-xl font-extrabold text-primary mb-2">Direct Contact Channels</h3>
              <p className="text-xs text-primary/60 mb-6">Our phone dispatch desks and email customer support operate 24 hours a day, 7 days a week.</p>
              
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4 p-5 rounded-2xl bg-light border border-primary/5 hover:border-accent/15 transition-all">
                  <Phone className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-primary">Helpline (Call 24/7)</h4>
                    <a href="tel:+919876543210" className="text-xs text-primary/75 hover:text-accent font-semibold block mt-1">
                      +91 98765 43210
                    </a>
                  </div>
                </li>
                
                <li className="flex gap-4 p-5 rounded-2xl bg-light border border-primary/5 hover:border-accent/15 transition-all">
                  <Mail className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-primary">Email Dispatch Support</h4>
                    <a href="mailto:bookings@DayNightCab.com" className="text-xs text-primary/75 hover:text-accent font-semibold block mt-1">
                      bookings@DayNightCab.com
                    </a>
                  </div>
                </li>

                <li className="flex gap-4 p-5 rounded-2xl bg-light border border-primary/5 hover:border-accent/15 transition-all">
                  <MapPin className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-primary">Headquarters Office</h4>
                    <span className="text-xs text-primary/75 font-semibold block mt-1 leading-relaxed">
                      12, Park Street, Sector 5, Kolkata, West Bengal - 700091
                    </span>
                  </div>
                </li>

                <li className="flex gap-4 p-5 rounded-2xl bg-light border border-primary/5 hover:border-accent/15 transition-all">
                  <Clock className="h-6 w-6 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-sm text-primary">Operating Hours</h4>
                    <span className="text-xs text-primary/75 font-semibold block mt-1">
                      Open 24 Hours / 7 Days a week
                    </span>
                  </div>
                </li>
              </ul>
            </ScrollReveal>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-8">
            <ScrollReveal direction="left">
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-primary/5 shadow-xl shadow-primary/2">
                <h3 className="text-xl font-extrabold text-primary mb-6">Send an Inquiry Message</h3>
                
                {success && (
                  <div className="mb-6 p-4 rounded-xl bg-accent-light border border-accent/20 text-xs font-semibold text-primary">
                    🎉 Message submitted successfully! Our helpdesk will email or call you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  {/* Grid 1: Name / Phone / Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-primary/80">Your Full Name</label>
                      <input
                        type="text"
                        placeholder="e.g. Rahul Sharma"
                        {...register("name")}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                      />
                      {errors.name && <span className="text-[10px] text-red-500 font-semibold">{errors.name.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-primary/80">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="e.g. +91 99000 88000"
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                      />
                      {errors.phone && <span className="text-[10px] text-red-500 font-semibold">{errors.phone.message}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-primary/80">Email Address</label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@gmail.com"
                        {...register("email")}
                        className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                      />
                      {errors.email && <span className="text-[10px] text-red-500 font-semibold">{errors.email.message}</span>}
                    </div>
                  </div>

                  {/* Grid 2: Optional Booking Details (Pickup / Drop / Date) */}
                  <div>
                    <h4 className="text-xs font-extrabold text-primary/50 uppercase tracking-widest mb-4">Travel details (Optional)</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-primary/85">Pickup Point</label>
                        <input
                          type="text"
                          placeholder="e.g. Kolkata Airport (CCU)"
                          {...register("pickup")}
                          className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-primary/85">Drop Point</label>
                        <input
                          type="text"
                          placeholder="e.g. Digha Beach Resorts"
                          {...register("drop")}
                          className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                        />
                      </div>

                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-primary/85">Departure Date</label>
                        <input
                          type="date"
                          {...register("travelDate")}
                          className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary/80 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Textarea: Message */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold text-primary/85">Message Description</label>
                    <textarea
                      rows={5}
                      placeholder="Please details your request (e.g. multi-city stopover request, wedding guest fleets synchronization details)..."
                      {...register("message")}
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 text-xs text-primary focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all resize-none"
                    />
                    {errors.message && <span className="text-[10px] text-red-500 font-semibold">{errors.message.message}</span>}
                  </div>

                  {/* CTA Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-xl text-xs font-bold transition-all shadow-md shadow-primary/5 hover:shadow-secondary/15 flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-75 disabled:pointer-events-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4.5 w-4.5 animate-spin text-accent" />
                        Dispatches Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 text-accent" />
                        Send Support Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </div>
  );
}
