import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Pricing() {
  const categories = useMemo(
    () => [
      {
        id: "starter",
        label: "Starter Safaris",
        description: "Great for first-time travelers and short getaways.",
        plans: [
          {
            name: "Sunrise Escape",
            price: "$240",
            cadence: "per night",
            perks: [
              "2-night stay in a boutique camp",
              "Daily guided wildlife drive",
              "All meals and refreshments",
            ],
          },
          {
            name: "Riverside Trek",
            price: "$320",
            cadence: "per night",
            perks: [
              "3-night riverside lodge stay",
              "Guided hike + sunset cruise",
              "Airport transfers included",
            ],
          },
          {
            name: "Weekend Wander",
            price: "$410",
            cadence: "per night",
            perks: [
              "2-night premium lodge stay",
              "Private game drive",
              "Photography kit access",
            ],
          },
        ],
      },
      {
        id: "signature",
        label: "Signature Journeys",
        description: "Balanced adventures with curated comfort.",
        plans: [
          {
            name: "Savannah Signature",
            price: "$520",
            cadence: "per night",
            perks: [
              "4-night luxury camp stay",
              "Morning + evening drives",
              "Chef-prepared dining",
            ],
          },
          {
            name: "Highlands Retreat",
            price: "$610",
            cadence: "per night",
            perks: [
              "5-night elevated lodge stay",
              "Private guide & tracker",
              "Wellness and spa session",
            ],
          },
          {
            name: "Wildlife Luxe",
            price: "$690",
            cadence: "per night",
            perks: [
              "5-night premium suite stay",
              "Conservation access tour",
              "Personal concierge",
            ],
          },
        ],
      },
      {
        id: "private",
        label: "Private Expeditions",
        description: "Tailored itineraries with exclusive access.",
        plans: [
          {
            name: "Exclusive Plains",
            price: "$920",
            cadence: "per night",
            perks: [
              "Private villa accommodation",
              "Dedicated vehicle + guide",
              "Custom itinerary design",
            ],
          },
          {
            name: "Family Reserve",
            price: "$1,120",
            cadence: "per night",
            perks: [
              "Family-sized private lodge",
              "Flexible safari schedules",
              "Kids program + nanny support",
            ],
          },
          {
            name: "Founder Collection",
            price: "$1,450",
            cadence: "per night",
            perks: [
              "Ultra-luxe tented suite",
              "Helicopter transfer options",
              "24/7 butler service",
            ],
          },
        ],
      },
    ],
    []
  );

  const [active, setActive] = useState(categories[0].id);
  const activeCategory = categories.find((item) => item.id === active);

  return (
    <motion.section
      className="relative overflow-hidden bg-amber-50 text-stone-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-12 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div className="text-center" variants={container}>
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-stone-500"
            variants={fadeUp}
          >
            Pricing
          </motion.p>
          <motion.h2
            className="mt-4 text-3xl font-semibold sm:text-4xl"
            variants={fadeUp}
          >
            Choose a safari category that matches your pace
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-stone-600"
            variants={fadeUp}
          >
            Pick a category to reveal curated packages. Every plan includes expert
            guides, premium lodging, and 24/7 on-trip support.
          </motion.p>
        </motion.div>

        <motion.div className="mt-10 flex flex-wrap justify-center gap-3" variants={fadeUp}>
          {categories.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(item.id)}
              className={`cursor-pointer rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] transition ${
                active === item.id
                  ? "border-amber-500 bg-amber-500 text-stone-900"
                  : "border-stone-200 bg-white text-stone-600 hover:border-amber-400 hover:text-stone-900"
              }`}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="mt-10 text-center" variants={fadeUp}>
          <p className="text-sm uppercase tracking-[0.3em] text-stone-500">
            {activeCategory?.label}
          </p>
          <p className="mt-2 text-lg text-stone-600">{activeCategory?.description}</p>
        </motion.div>

        <motion.div className="mt-10 grid gap-6 lg:grid-cols-3" variants={container}>
          {activeCategory?.plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="rounded-3xl border border-stone-200 bg-white p-7 shadow-lg"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <span className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  {index === 1 ? "Popular" : " "}
                </span>
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-3xl font-semibold text-amber-600">
                  {plan.price}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
                  {plan.cadence}
                </span>
              </div>
              <ul className="mt-5 space-y-3 text-sm text-stone-600">
                {plan.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 w-full cursor-pointer rounded-full border border-stone-200 bg-stone-900 px-5 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-stone-700 hover:bg-stone-800"
              >
                Select package
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
