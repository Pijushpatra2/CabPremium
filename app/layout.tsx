import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ToastProvider } from "@/components/ui/Toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "CabPremium | Premium Taxi Service & Airport Transfers",
    template: "%s | CabPremium Taxi Booking",
  },
  description: "Book reliable airport transfers, local city rides, outstation trips, and luxury rentals in minutes. 24/7 premium taxi service with professional drivers.",
  keywords: ["taxi booking", "airport transfers", "luxury cab", "outstation ride", "kolkata taxi", "safe taxi service", "cab service"],
  authors: [{ name: "CabPremium" }],
  metadataBase: new URL("https://cabpremium.vercel.app"), // Fallback domain
  openGraph: {
    title: "CabPremium | Premium Taxi Service",
    description: "Book reliable airport transfers, local city rides, outstation trips, and luxury rentals in minutes. 24/7 premium service.",
    url: "https://cabpremium.vercel.app",
    siteName: "CabPremium",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CabPremium | Premium Taxi Service",
    description: "Book reliable airport transfers, local city rides, outstation trips, and luxury rentals in minutes.",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B5D48",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark">
        <ToastProvider>
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </ToastProvider>
      </body>
    </html>
  );
}

