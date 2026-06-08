import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BookingSchema } from "@/lib/schema";
import { getCustomerConfirmationHtml, getAdminNotificationHtml } from "@/lib/emails";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "bookings@cabpremium.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate request body against schema
    const validation = BookingSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const bookingData = validation.data;
    const bookingId = `CP-${Math.floor(100000 + Math.random() * 900000)}`;

    if (resend) {
      // Send confirmation to the customer
      await resend.emails.send({
        from: "CabPremium Bookings <onboarding@resend.dev>", // Replace with verified domain if configured
        to: bookingData.email,
        subject: `Booking Confirmed #${bookingId} - CabPremium`,
        html: getCustomerConfirmationHtml({
          bookingId,
          name: bookingData.name,
          pickup: bookingData.pickup,
          drop: bookingData.drop,
          date: bookingData.date,
          time: bookingData.time,
          passengers: bookingData.passengers,
          vehicleType: bookingData.vehicleType,
        }),
      });

      // Send alert to the admin
      await resend.emails.send({
        from: "CabPremium Dispatch <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `NEW BOOKING REQUEST #${bookingId} - ${bookingData.name}`,
        html: getAdminNotificationHtml({
          bookingId,
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          pickup: bookingData.pickup,
          drop: bookingData.drop,
          date: bookingData.date,
          time: bookingData.time,
          passengers: bookingData.passengers,
          vehicleType: bookingData.vehicleType,
        }),
      });

      console.log(`[API/Book] Emails sent successfully for booking ${bookingId}`);
    } else {
      // Mock log if RESEND_API_KEY is not defined
      console.log("=========================================");
      console.log(`[MOCK BOOKING DETECTED - NO RESEND API KEY]`);
      console.log(`Booking ID: ${bookingId}`);
      console.log(`Customer: ${bookingData.name} (${bookingData.email}, ${bookingData.phone})`);
      console.log(`Pickup: ${bookingData.pickup} -> Drop: ${bookingData.drop}`);
      console.log(`Date: ${bookingData.date} @ ${bookingData.time}`);
      console.log(`Vehicle Type: ${bookingData.vehicleType} (Passengers: ${bookingData.passengers})`);
      console.log("=========================================");
    }

    return NextResponse.json({
      success: true,
      bookingId,
      message: "Booking confirmation sent successfully.",
    });
  } catch (error) {
    console.error("[API/Book] Error processing booking request:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
