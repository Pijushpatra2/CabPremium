import { z } from "zod";

export const BookingSchema = z.object({
  pickup: z.string().min(3, "Pickup location must be at least 3 characters"),
  drop: z.string().min(3, "Drop location must be at least 3 characters"),
  date: z.string().min(1, "Travel date is required"),
  time: z.string().min(1, "Pickup time is required"),
  passengers: z
    .number()
    .min(1, "At least 1 passenger is required")
    .max(20, "Maximum passenger limit is 20"),
  vehicleType: z.enum(["Sedan", "SUV", "Luxury Car", "Tempo Traveller"], {
    message: "Please select a valid vehicle type",
  }),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number (at least 10 digits)"),
});

export type BookingInput = z.infer<typeof BookingSchema>;

export const ContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  pickup: z.string().optional(),
  drop: z.string().optional(),
  travelDate: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactInput = z.infer<typeof ContactSchema>;
