"use client";

import {
  ShieldCheck,
  MapPinned,
  Wallet,
  Users,
  Star,
  Phone,
  MessageCircle,
} from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Users,
      title: "Professional Drivers",
      desc: "Trained, verified & friendly drivers",
    },
    {
      icon: MapPinned,
      title: "Real-time Tracking",
      desc: "Track your ride in real-time",
    },
    {
      icon: ShieldCheck,
      title: "Transparent Pricing",
      desc: "No hidden charges, what you see is what you pay",
    },
    {
      icon: Wallet,
      title: "Multiple Payment",
      desc: "Pay by cash, card or digital wallet",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-dark">
      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <div className="relative flex justify-center">
            {/* Yellow Badge */}
            <div className="absolute top-5 left-0 z-20">
              <div className="w-28 h-20 bg-primary rounded-[30px] flex items-center justify-center shadow-gold-lg">
                <MapPinned className="w-8 h-8 text-dark" />
              </div>
            </div>

            {/* Circle Background */}
            <div className="absolute w-[550px] h-[550px] rounded-full bg-primary/10 blur-2xl" />

            {/* Outer Circle */}
            <div className="relative w-[480px] h-[480px] rounded-full border border-primary/20 bg-card flex items-center justify-center overflow-hidden">
              <div className="absolute inset-4 rounded-full overflow-hidden">
                <img
                  src="/images/taxi-driver.jpg"
                  alt="Driver"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Rating Card */}
            <div className="absolute left-0 bottom-10 bg-card/90 backdrop-blur-xl border border-primary/10 rounded-3xl px-8 py-6 shadow-2xl">
              <div className="flex items-end gap-1">
                <span className="text-5xl font-bold text-white">4.9</span>
                <span className="text-white text-xl mb-1">/5</span>
              </div>

              <div className="flex gap-1 my-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-muted text-sm">
                10K+ Happy Customers
              </p>
            </div>

            {/* Driver Card */}
            <div className="absolute bottom-5 right-0 bg-white rounded-full shadow-2xl px-5 py-3 flex items-center gap-4 min-w-[280px]">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div className="flex-1">
                <p className="text-xs text-gray-500">
                  Your Driver
                </p>
                <h4 className="font-semibold text-gray-900">
                  John Smith
                </h4>
              </div>

              <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Phone className="w-4 h-4 text-blue-600" />
              </button>

              <button className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-blue-600" />
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <div className="mb-5">
              <span className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-[0.2em] text-sm">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-5xl font-bold text-white leading-tight mb-12">
              Your safety and
              <br />
              satisfaction come first
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-5"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card border border-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>

                    <div>
                      <h3 className="text-white font-semibold text-lg mb-2">
                        {item.title}
                      </h3>

                      <p className="text-muted leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}