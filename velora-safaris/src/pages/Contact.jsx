import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Contact() {
  return (
    <motion.section
      className="relative overflow-hidden bg-amber-50 text-stone-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-28 right-8 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div className="text-center" variants={container}>
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-stone-500"
            variants={fadeUp}
          >
            Contact
          </motion.p>
          <motion.h2 className="mt-4 text-3xl font-semibold sm:text-4xl" variants={fadeUp}>
            Let&apos;s craft your next safari together
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-stone-600"
            variants={fadeUp}
          >
            Tell us about your dream itinerary, group size, and travel dates. Our
            team responds within 24 hours with tailored recommendations.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
          variants={container}
        >
          <motion.div
            className="rounded-3xl border border-stone-200 bg-white p-8 shadow-lg"
            variants={fadeUp}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  Send a message
                </p>
                <h3 className="mt-2 text-2xl font-semibold">Start planning</h3>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Send className="h-5 w-5" />
              </div>
            </div>

            <form className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Preferred travel month"
                className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
              />
              <textarea
                rows="4"
                placeholder="Tell us about your ideal safari, group size, and expectations"
                className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
              />
              <button
                type="button"
                className="cursor-pointer rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-400"
              >
                Send request
              </button>
            </form>
          </motion.div>

          <motion.div className="space-y-6" variants={container}>
            {[
              {
                icon: <Phone className="h-5 w-5" />,
                title: "Call us",
                value: "+1 (307) 555-0148",
                note: "Mon–Fri · 9:00–18:00 PST",
              },
              {
                icon: <Mail className="h-5 w-5" />,
                title: "Email us",
                value: "hello@velorasafaris.com",
                note: "We reply within 24 hours",
              },
              {
                icon: <MapPin className="h-5 w-5" />,
                title: "Visit our studio",
                value: "1460 Savannah Way, Nairobi",
                note: "Meetings by appointment",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
                variants={fadeUp}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-stone-100 text-stone-700">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                      {item.title}
                    </p>
                    <p className="mt-2 text-lg font-semibold">{item.value}</p>
                    <p className="mt-1 text-sm text-stone-500">{item.note}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="rounded-3xl border border-stone-200 bg-stone-900 p-6 text-stone-100"
              variants={fadeUp}
            >
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Concierge hours
              </p>
              <p className="mt-3 text-lg font-semibold">On-trip support, 24/7</p>
              <p className="mt-2 text-sm text-stone-300">
                Our field team is available around the clock for active travelers.
                We handle last-minute changes, special requests, and logistics.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-12 rounded-3xl border border-stone-200 bg-white p-8 shadow-lg"
          variants={fadeUp}
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                What happens next
              </p>
              <h3 className="mt-2 text-2xl font-semibold">A seamless planning flow</h3>
              <p className="mt-3 text-sm text-stone-600">
                We&apos;ll align on your goals, share tailored itineraries, and
                finalize your dream safari with full transparency on timelines
                and inclusions.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                "Initial discovery call to understand your style",
                "Curated itinerary with lodging + guide options",
                "Final confirmation and concierge onboarding",
              ].map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-xs font-semibold text-stone-900">
                    {index + 1}
                  </span>
                  <p className="text-sm text-stone-600">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
