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

export default function MapSection() {
  const routes = useMemo(
    () => [
      {
        id: "serengeti",
        label: "Serengeti Loop",
        duration: "6 days",
        highlight: "Great Migration crossings",
        details:
          "Follow the movement across the open plains with sunrise drives and private sunset lookouts.",
        points: ["Seronera", "Mara River", "Ndutu"],
        dot: "left-[18%] top-[38%]",
      },
      {
        id: "masai",
        label: "Masai Mara Circuit",
        duration: "5 days",
        highlight: "Big cat territory",
        details:
          "Track lions and cheetahs with expert guides and stay in a riverside camp.",
        points: ["Talek Gate", "Sand River", "Oloololo Escarpment"],
        dot: "left-[42%] top-[46%]",
      },
      {
        id: "okavango",
        label: "Okavango Delta",
        duration: "7 days",
        highlight: "Water safari + mokoro",
        details:
          "Glide through the delta by mokoro, with evening game drives and stargazing.",
        points: ["Maun", "Moremi", "Chiefs Island"],
        dot: "left-[62%] top-[58%]",
      },
    ],
    []
  );

  const [active, setActive] = useState(routes[0].id);
  const activeRoute = routes.find((route) => route.id === active);

  return (
    <motion.section
      id="routes-map"
      className="relative overflow-hidden bg-amber-50 text-stone-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-16 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-amber-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div className="text-center" variants={container}>
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-stone-500"
            variants={fadeUp}
          >
            Routes Map
          </motion.p>
          <motion.h2 className="mt-4 text-3xl font-semibold sm:text-4xl" variants={fadeUp}>
            Interactive map of our signature safari routes
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-stone-600"
            variants={fadeUp}
          >
            Tap a route on the map to explore the highlights and key stops.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
          variants={container}
        >
          <motion.div
            className="relative rounded-3xl border border-stone-200 bg-white p-6 shadow-lg"
            variants={fadeUp}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 via-white to-emerald-50">
              <svg
                viewBox="0 0 600 420"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M90 140 C140 70, 220 60, 280 90 C330 110, 360 160, 360 210 C360 280, 310 330, 240 350 C170 370, 100 340, 80 280 C60 220, 70 170, 90 140 Z"
                  fill="#f9f6ef"
                  stroke="#e7e0d4"
                  strokeWidth="3"
                />
                <path
                  d="M180 150 C220 120, 270 130, 300 165 C330 200, 320 240, 280 260 C240 280, 190 265, 170 230 C150 195, 155 170, 180 150 Z"
                  fill="#fff9e8"
                  stroke="#eadfc9"
                  strokeWidth="2"
                />
                <path
                  d="M360 210 C390 190, 430 195, 460 220 C490 250, 485 290, 450 310 C415 330, 380 320, 360 290 C340 260, 340 230, 360 210 Z"
                  fill="#effaf4"
                  stroke="#d7efe1"
                  strokeWidth="2"
                />
              </svg>

              {routes.map((route) => (
                <button
                  key={route.id}
                  type="button"
                  onClick={() => setActive(route.id)}
                  className={`absolute ${route.dot} cursor-pointer`}
                  aria-label={route.label}
                >
                  <span
                    className={`flex h-4 w-4 items-center justify-center rounded-full border-2 ${
                      active === route.id
                        ? "border-amber-500 bg-amber-500"
                        : "border-stone-400 bg-white"
                    }`}
                  />
                  <span className="mt-2 hidden -translate-x-6 rounded-full bg-stone-900 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white shadow-sm lg:inline-block">
                    {route.label}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.25em] text-stone-500">
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1">
                {activeRoute?.duration}
              </span>
              <span className="rounded-full border border-stone-200 bg-white px-3 py-1">
                {activeRoute?.highlight}
              </span>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeUp}>
            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Selected route
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{activeRoute?.label}</h3>
              <p className="mt-3 text-sm text-stone-600">{activeRoute?.details}</p>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Key stops
              </p>
              <ul className="mt-3 space-y-3 text-sm text-stone-600">
                {activeRoute?.points.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-amber-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="cursor-pointer rounded-full border border-stone-200 bg-stone-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-white transition hover:border-stone-700 hover:bg-stone-800"
            >
              Build this route
            </button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
