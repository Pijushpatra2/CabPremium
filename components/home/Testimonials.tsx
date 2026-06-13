"use client";

import Image from "next/image";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="py-24 bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-primary/10 bg-card">
          <div className="grid lg:grid-cols-[420px_1fr] min-h-[420px]">
            {/* LEFT PANEL */}
            <div className="relative p-8 lg:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-primary/10">
              <div className="mb-5">
                <span className="text-primary uppercase text-sm tracking-[0.2em] font-bold">
                  What Our Riders Say
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-10">
                Trusted by thousands
                <br />
                of happy riders
              </h2>

              {/* Avatars */}
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  {[
                    "/user.png",
                    "/user.png",
                    "/user.png",
                    "/user.png",
                  ].map((img, index) => (
                    <div
                      key={index}
                      className="w-14 h-14 rounded-full border-[3px] border-primary overflow-hidden bg-card"
                    >
                      <Image
                        src={img}
                        alt=""
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="ml-4 px-6 py-4 rounded-full bg-primary text-dark font-black text-lg">
                  10K+
                </div>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="relative p-8 lg:p-10 flex items-center">
              <div className="grid lg:grid-cols-[1fr_340px] gap-8 items-center w-full">
                {/* Testimonial */}
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-2 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                      />
                    ))}
                  </div>

                  <blockquote className="text-white text-xl lg:text-2xl leading-relaxed max-w-xl mb-8">
                    “ Excellent service! Driver was on time and the ride
                    was so comfortable. Highly recommended! ”
                  </blockquote>

                  {/* User */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary">
                      <Image
                        src="/user.png"
                        alt="Reviewer"
                        width={56}
                        height={56}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="text-white font-bold">
                        Sarah Johnson
                      </h4>
                      <p className="text-muted text-sm">
                        New York, USA
                      </p>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex items-center gap-3 mt-10">
                    <button className="w-14 h-14 rounded-full border border-primary/20 bg-dark hover:border-primary transition flex items-center justify-center">
                      <ArrowLeft className="w-5 h-5 text-white" />
                    </button>

                    <button className="w-14 h-14 rounded-full bg-primary hover:bg-secondary transition flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-dark" />
                    </button>
                  </div>
                </div>

                {/* IMAGE SIDE */}
                <div className="relative h-[320px] lg:h-[360px]">
                  {/* Decorative Shape */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-white/5 rounded-[40px] rotate-6" />

                  <div className="absolute inset-0 overflow-hidden rounded-[40px] border border-primary/10">
                    <Image
                      src="/images/testimonials/customer-car.png"
                      alt="Happy Customer"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Floating Blur */}
                  <div className="absolute bottom-4 left-4 right-4 h-20 bg-white/5 backdrop-blur-xl rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Gold Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}