import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="bg-white text-stone-900">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Service not found
          </p>
          <h2 className="mt-3 text-2xl font-semibold">
            We couldn&apos;t find that experience.
          </h2>
          <NavLink
            to="/services"
            className="mt-6 inline-flex rounded-full border border-stone-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-600 transition hover:border-amber-500 hover:text-stone-900"
          >
            Back to services
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="relative overflow-hidden bg-amber-50 text-stone-900"
      initial="hidden"
      animate="show"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-16 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <motion.div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]" variants={fadeUp}>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
              {service.title}
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {service.detail}
            </h1>
            <p className="mt-4 text-sm text-stone-600">{service.description}</p>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-semibold text-amber-600">
                {service.price}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-500">
                {service.unit}
              </span>
            </div>

            <div className="mt-8 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                Highlights
              </p>
              <ul className="mt-4 space-y-3 text-sm text-stone-600">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-amber-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                className="cursor-pointer rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-900 transition hover:bg-amber-400"
              >
                Request this package
              </button>
              <NavLink
                to="/services"
                className="inline-flex rounded-full border border-stone-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
              >
                Back to services
              </NavLink>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-amber-50 shadow-lg">
            <img
              src={service.image}
              alt={service.title}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
