"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Calendar, Clock, MapPin, Users, Car, User, Mail, Phone, Loader2 } from "lucide-react";
import { BookingSchema, type BookingInput } from "@/lib/schema";
import { useToast } from "@/components/ui/Toast";
import ScrollReveal from "@/components/shared/ScrollReveal";

export default function QuickBookingForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [successBookingId, setSuccessBookingId] = useState<string | null>(null);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingInput>({
    resolver: zodResolver(BookingSchema),
    defaultValues: {
      pickup: "",
      drop: "",
      date: "",
      time: "",
      passengers: 1,
      vehicleType: "Sedan",
      name: "",
      email: "",
      phone: "",
    },
  });

  const onSubmit = async (data: BookingInput) => {
    setIsLoading(true);
    setSuccessBookingId(null);
    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSuccessBookingId(result.bookingId);
        toast({
          title: "Booking Submitted Successfully!",
          description: `Your Booking ID is ${result.bookingId}. A confirmation email has been sent.`,
          type: "success",
        });
        reset();
      } else {
        toast({
          title: "Submission Failed",
          description: result.message || "Please check your inputs and try again.",
          type: "error",
        });
      }
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Connection Error",
        description: "Could not connect to booking system. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking-section" className="py-20 bg-light relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 tracking-tight">
              Get an Instant Quote & Book
            </h2>
            <p className="text-primary/70 text-base">
              Enter your trip details below to calculate the pricing and request your driver instantly.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-4xl mx-auto">
            {/* Success Overlay Panel */}
            {successBookingId && (
              <div className="mb-6 p-6 rounded-2xl bg-accent-light border border-accent/20 text-center animate-fade-in">
                <p className="text-primary font-bold text-lg mb-2">🎉 Ride Requested Successfully!</p>
                <p className="text-primary/80 text-sm">
                  Your booking ID is <span className="font-extrabold text-primary">{successBookingId}</span>. We've emailed confirmation receipts to you.
                </p>
                <button
                  onClick={() => setSuccessBookingId(null)}
                  className="mt-3 text-xs text-accent font-bold underline hover:text-accent-hover transition-colors"
                >
                  Book another taxi
                </button>
              </div>
            )}

            {/* Form Card */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-primary/5 shadow-primary/5 flex flex-col gap-8"
            >
              {/* Trip Grid */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2 pb-2 border-b border-primary/5">
                  <Car className="h-5 w-5 text-accent" />
                  1. Ride Specifications
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Pickup */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-accent" />
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kolkata Airport (CCU)"
                      {...register("pickup")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.pickup ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.pickup && <span className="text-xs text-red-500 font-medium">{errors.pickup.message}</span>}
                  </div>

                  {/* Drop */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-accent" />
                      Drop Location
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Digha Beach"
                      {...register("drop")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.drop ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.drop && <span className="text-xs text-red-500 font-medium">{errors.drop.message}</span>}
                  </div>

                  {/* Vehicle Type */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <Car className="h-4 w-4 text-accent" />
                      Vehicle Type
                    </label>
                    <select
                      {...register("vehicleType")}
                      className="w-full px-4 py-3 rounded-xl border border-primary/10 focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all text-sm bg-white"
                    >
                      <option value="Sedan">Sedan (4 Passengers)</option>
                      <option value="SUV">SUV (6 Passengers)</option>
                      <option value="Luxury Car">Luxury Car (Premium Experience)</option>
                      <option value="Tempo Traveller">Tempo Traveller (Group Travel)</option>
                    </select>
                    {errors.vehicleType && <span className="text-xs text-red-500 font-medium">{errors.vehicleType.message}</span>}
                  </div>

                  {/* Date */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-accent" />
                      Pickup Date
                    </label>
                    <input
                      type="date"
                      {...register("date")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.date ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm text-primary/80`}
                    />
                    {errors.date && <span className="text-xs text-red-500 font-medium">{errors.date.message}</span>}
                  </div>

                  {/* Time */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-accent" />
                      Pickup Time
                    </label>
                    <input
                      type="time"
                      {...register("time")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.time ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm text-primary/80`}
                    />
                    {errors.time && <span className="text-xs text-red-500 font-medium">{errors.time.message}</span>}
                  </div>

                  {/* Passengers */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-accent" />
                      Passenger Count
                    </label>
                    <input
                      type="number"
                      min={1}
                      max={20}
                      {...register("passengers", { valueAsNumber: true })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.passengers ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.passengers && <span className="text-xs text-red-500 font-medium">{errors.passengers.message}</span>}
                  </div>
                </div>
              </div>

              {/* Passenger Grid */}
              <div>
                <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2 pb-2 border-b border-primary/5">
                  <User className="h-5 w-5 text-accent" />
                  2. Contact & Delivery Info
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <User className="h-4 w-4 text-accent" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Rahul Sharma"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name.message}</span>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <Mail className="h-4 w-4 text-accent" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@gmail.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email.message}</span>}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-primary/85 flex items-center gap-1.5">
                      <Phone className="h-4 w-4 text-accent" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 99000 88000"
                      {...register("phone")}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? "border-red-500 focus:ring-red-200" : "border-primary/10 focus:ring-primary/20"
                      } focus:outline-none focus:ring-4 transition-all text-sm`}
                    />
                    {errors.phone && <span className="text-xs text-red-500 font-medium">{errors.phone.message}</span>}
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-secondary text-white py-4 rounded-2xl text-base font-bold transition-all duration-300 shadow-xl shadow-primary/10 hover:shadow-secondary/15 flex items-center justify-center gap-2 hover:-translate-y-0.5 disabled:opacity-75 disabled:pointer-events-none"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin text-accent" />
                    Calculating & Sending Quote...
                  </>
                ) : (
                  "Get Instant Quote & Confirm Booking"
                )}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
