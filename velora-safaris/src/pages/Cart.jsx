import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Cart() {
  const { items, clearCart } = useCart();
  const navigate = useNavigate();

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

      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <motion.div className="text-center" variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.35em] text-stone-500">Cart</p>
          <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Your selected experiences</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-stone-600">
            Review the services you have added. You can adjust your selections anytime.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 space-y-4"
          variants={fadeUp}
        >
          {items.length === 0 ? (
            <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-lg">
              <p className="text-sm text-stone-600">Your cart is empty.</p>
            </div>
          ) : (
            items.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="flex flex-col gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-lg sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded-2xl border border-stone-200 bg-amber-50">
                    <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-stone-600">{item.detail}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold text-amber-600">{item.price}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                    {item.unit}
                  </p>
                </div>
              </div>
            ))
          )}
        </motion.div>

        {items.length > 0 && (
          <motion.div className="mt-8 flex justify-center" variants={fadeUp}>
            <button
              type="button"
              className="cursor-pointer rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-400"
              onClick={() => {
                clearCart();
                navigate("/checkout");
              }}
            >
              Checkout
            </button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
