import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { ContactSchema } from "@/lib/schema";
import { getAdminContactHtml } from "@/lib/emails";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "bookings@DayNightCab.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validation = ContactSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { success: false, errors: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const contactData = validation.data;

    if (resend) {
      await resend.emails.send({
        from: "DayNightCab Contact <onboarding@resend.dev>",
        to: ADMIN_EMAIL,
        subject: `NEW CONTACT FORM: ${contactData.name}`,
        html: getAdminContactHtml({
          name: contactData.name,
          email: contactData.email,
          phone: contactData.phone,
          pickup: contactData.pickup,
          drop: contactData.drop,
          travelDate: contactData.travelDate,
          message: contactData.message,
        }),
      });
      console.log(`[API/Contact] Contact email dispatched for ${contactData.name}`);
    } else {
      console.log("=========================================");
      console.log(`[MOCK CONTACT SUBMISSION - NO RESEND API KEY]`);
      console.log(`From: ${contactData.name} (${contactData.email}, ${contactData.phone})`);
      if (contactData.pickup || contactData.drop || contactData.travelDate) {
        console.log(`Intent: ${contactData.pickup} -> ${contactData.drop} on ${contactData.travelDate}`);
      }
      console.log(`Message: ${contactData.message}`);
      console.log("=========================================");
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been received successfully. We will contact you shortly.",
    });
  } catch (error) {
    console.error("[API/Contact] Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
