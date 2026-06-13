interface CustomerEmailParams {
  bookingId: string;
  name: string;
  pickup: string;
  drop: string;
  date: string;
  time: string;
  passengers: number;
  vehicleType: string;
}

interface ContactEmailParams {
  name: string;
  email: string;
  phone: string;
  pickup?: string;
  drop?: string;
  travelDate?: string;
  message: string;
}

export function getCustomerConfirmationHtml({
  bookingId,
  name,
  pickup,
  drop,
  date,
  time,
  passengers,
  vehicleType,
}: CustomerEmailParams): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Booking Confirmed - DayNightCab</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f6f9fc; margin: 0; padding: 20px; color: #072a21; }
          .container { max-width: 600px; background: #ffffff; border-radius: 16px; overflow: hidden; margin: 0 auto; box-shadow: 0 4px 12px rgba(11, 93, 72, 0.05); border: 1px solid rgba(11, 93, 72, 0.08); }
          .header { background: #0B5D48; padding: 30px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { margin: 5px 0 0; color: #20C589; font-weight: 600; font-size: 14px; }
          .content { padding: 40px 30px; }
          .welcome { font-size: 16px; margin-bottom: 25px; line-height: 1.6; }
          .booking-id { font-size: 13px; font-weight: 800; background: rgba(32, 197, 137, 0.1); color: #0B5D48; display: inline-block; padding: 6px 12px; border-radius: 8px; margin-bottom: 30px; border: 1px solid rgba(32, 197, 137, 0.2); }
          .details-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .details-table th, .details-table td { padding: 12px; text-align: left; border-bottom: 1px solid #f0f4f2; }
          .details-table th { font-weight: 600; color: #16855D; width: 35%; font-size: 14px; }
          .details-table td { color: #072a21; font-size: 14px; font-weight: 500; }
          .footer { background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #f0f4f2; font-size: 12px; color: #6b7280; }
          .footer a { color: #16855D; text-decoration: none; font-weight: 600; }
          .alert { background-color: #e8f9f3; border-left: 4px solid #20C589; padding: 15px; border-radius: 0 8px 8px 0; font-size: 13px; margin-bottom: 25px; line-height: 1.5; color: #0B5D48; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>DayNightCab</h1>
            <p>Reliable Ride For Every Journey</p>
          </div>
          <div class="content">
            <div class="welcome">Hello <strong>${name}</strong>,</div>
            <p style="line-height: 1.6;">Thank you for booking with DayNightCab. Your request has been received and confirmed. Below are your booking details:</p>
            
            <div class="booking-id">BOOKING ID: ${bookingId}</div>
            
            <table class="details-table">
              <tr>
                <th>Pickup Location</th>
                <td>${pickup}</td>
              </tr>
              <tr>
                <th>Drop Location</th>
                <td>${drop}</td>
              </tr>
              <tr>
                <th>Pickup Date</th>
                <td>${date}</td>
              </tr>
              <tr>
                <th>Pickup Time</th>
                <td>${time}</td>
              </tr>
              <tr>
                <th>Passengers</th>
                <td>${passengers}</td>
              </tr>
              <tr>
                <th>Vehicle Type</th>
                <td>${vehicleType}</td>
              </tr>
            </table>

            <div class="alert">
              <strong>What's Next?</strong><br>
              A professional driver will be assigned to you 30-45 minutes before your scheduled pickup time. You will receive an SMS and Email with driver coordinates.
            </div>

            <p style="font-size: 14px; line-height: 1.6;">If you need to make any changes or cancel your ride, please contact our support team at <a href="tel:+919876543210" style="color: #0B5D48; font-weight: 600; text-decoration: none;">+91 98765 43210</a>.</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} DayNightCab. 12 Park Street, Sector 5, Kolkata.<br>
            For help, email <a href="mailto:bookings@DayNightCab.com">bookings@DayNightCab.com</a>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getAdminNotificationHtml({
  bookingId,
  name,
  email,
  phone,
  pickup,
  drop,
  date,
  time,
  passengers,
  vehicleType,
}: CustomerEmailParams & { email: string; phone: string }): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Ride Booking Received - DayNightCab</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #333333; }
          .container { max-width: 600px; background: #ffffff; border-radius: 12px; overflow: hidden; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-top: 5px solid #0B5D48; }
          .content { padding: 30px; }
          h2 { margin-top: 0; color: #0B5D48; font-size: 20px; font-weight: 800; border-bottom: 1px solid #eee; padding-bottom: 15px; }
          .info-block { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          .info-block h3 { margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; color: #666; letter-spacing: 0.5px; }
          .grid { width: 100%; border-collapse: collapse; }
          .grid td { padding: 8px 0; font-size: 14px; border-bottom: 1px dashed #f0f0f0; }
          .grid td.label { font-weight: 600; color: #16855D; width: 40%; }
          .grid td.val { color: #111; font-weight: 500; }
          .footer { font-size: 11px; text-align: center; color: #999; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h2>New Ride Booking Request</h2>
            <p style="font-size: 14px; color: #555;">A new booking has been generated on the DayNightCab platform. Details below:</p>
            
            <div class="info-block">
              <h3>Booking Metadata</h3>
              <table class="grid">
                <tr>
                  <td class="label">Booking ID</td>
                  <td class="val" style="font-weight: bold; color: #0B5D48;">${bookingId}</td>
                </tr>
                <tr>
                  <td class="label">Date Created</td>
                  <td class="val">${new Date().toLocaleString("en-IN")}</td>
                </tr>
              </table>
            </div>

            <div class="info-block">
              <h3>Customer Contact</h3>
              <table class="grid">
                <tr>
                  <td class="label">Name</td>
                  <td class="val">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="val">${email}</td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="val">${phone}</td>
                </tr>
              </table>
            </div>

            <div class="info-block">
              <h3>Travel Specifications</h3>
              <table class="grid">
                <tr>
                  <td class="label">Pickup Location</td>
                  <td class="val">${pickup}</td>
                </tr>
                <tr>
                  <td class="label">Drop Location</td>
                  <td class="val">${drop}</td>
                </tr>
                <tr>
                  <td class="label">Travel Date</td>
                  <td class="val">${date}</td>
                </tr>
                <tr>
                  <td class="label">Pickup Time</td>
                  <td class="val">${time}</td>
                </tr>
                <tr>
                  <td class="label">Passenger Count</td>
                  <td class="val">${passengers}</td>
                </tr>
                <tr>
                  <td class="label">Vehicle Class</td>
                  <td class="val">${vehicleType}</td>
                </tr>
              </table>
            </div>
            
            <p style="font-size: 13px; font-weight: bold; color: #dc2626;">Action Required: Assign a driver and send confirmation coordinates via dispatch panel.</p>
          </div>
          <div class="footer">
            This is an automated dispatch email from DayNightCab System.
          </div>
        </div>
      </body>
    </html>
  `;
}

export function getAdminContactHtml({
  name,
  email,
  phone,
  pickup,
  drop,
  travelDate,
  message,
}: ContactEmailParams): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>New Contact Form Submission - DayNightCab</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background-color: #f4f6f8; margin: 0; padding: 20px; color: #333333; }
          .container { max-width: 600px; background: #ffffff; border-radius: 12px; overflow: hidden; margin: 0 auto; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-top: 5px solid #16855D; }
          .content { padding: 30px; }
          h2 { margin-top: 0; color: #16855D; font-size: 20px; font-weight: 800; border-bottom: 1px solid #eee; padding-bottom: 15px; }
          .info-block { background: #f9f9f9; padding: 15px; border-radius: 8px; margin-bottom: 20px; }
          .info-block h3 { margin: 0 0 10px 0; font-size: 14px; text-transform: uppercase; color: #666; letter-spacing: 0.5px; }
          .grid { width: 100%; border-collapse: collapse; }
          .grid td { padding: 8px 0; font-size: 14px; border-bottom: 1px dashed #f0f0f0; }
          .grid td.label { font-weight: 600; color: #0B5D48; width: 40%; }
          .grid td.val { color: #111; font-weight: 500; }
          .msg-box { background: #fdfdfd; border: 1px solid #eef2f0; padding: 15px; border-radius: 8px; font-style: italic; font-size: 14px; color: #444; line-height: 1.5; margin-top: 10px; }
          .footer { font-size: 11px; text-align: center; color: #999; margin-top: 30px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="content">
            <h2>New Contact Inquiry Received</h2>
            <p style="font-size: 14px; color: #555;">A user filled out the general contact form. Details:</p>
            
            <div class="info-block">
              <h3>Contact Info</h3>
              <table class="grid">
                <tr>
                  <td class="label">Name</td>
                  <td class="val">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="val">${email}</td>
                </tr>
                <tr>
                  <td class="label">Phone Number</td>
                  <td class="val">${phone}</td>
                </tr>
              </table>
            </div>

            ${pickup || drop || travelDate ? `
            <div class="info-block">
              <h3>Requested Journey (Optional Details)</h3>
              <table class="grid">
                ${pickup ? `<tr><td class="label">Pickup Location</td><td class="val">${pickup}</td></tr>` : ""}
                ${drop ? `<tr><td class="label">Drop Location</td><td class="val">${drop}</td></tr>` : ""}
                ${travelDate ? `<tr><td class="label">Travel Date</td><td class="val">${travelDate}</td></tr>` : ""}
              </table>
            </div>
            ` : ""}

            <div class="info-block">
              <h3>User Message</h3>
              <div class="msg-box">
                "${message.replace(/\n/g, "<br>")}"
              </div>
            </div>
          </div>
          <div class="footer">
            This email was sent automatically from DayNightCab contact portal.
          </div>
        </div>
      </body>
    </html>
  `;
}
