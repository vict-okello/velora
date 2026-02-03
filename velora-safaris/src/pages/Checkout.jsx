import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Checkout() {
  return (
    <motion.section
      className="relative overflow-hidden bg-amber-50 text-stone-900"
      initial="hidden"
      animate="show"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-amber-200/40 blur-3xl" />
        <div className="absolute -bottom-28 right-8 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <motion.div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-lg" variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Checkout</p>
          <h1 className="mt-3 text-2xl font-semibold">You're all set</h1>
          <p className="mt-3 text-sm text-stone-600">
            Your request has been received. Our team will follow up to confirm dates and preferences.
          </p>
          <NavLink
            to="/services"
            className="mt-6 inline-flex rounded-full border border-stone-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
          >
            Explore more services
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  );
}
