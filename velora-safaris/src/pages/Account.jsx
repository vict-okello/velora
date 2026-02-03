import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Account() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <motion.section
      className="relative overflow-hidden bg-white text-stone-900"
      initial="hidden"
      animate="show"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-16 h-64 w-64 rounded-full bg-amber-100/70 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <motion.div className="rounded-3xl border border-stone-200 bg-white p-8 shadow-lg" variants={fadeUp}>
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Profile</p>
          <h1 className="mt-3 text-2xl font-semibold">
            {user ? `Welcome, ${user.name}` : "Welcome"}
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            {user ? user.email : "Sign in to view your profile details."}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {!user && (
              <button
                type="button"
                className="cursor-pointer rounded-full bg-amber-500 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-900 transition hover:bg-amber-400"
                onClick={() => navigate("/login")}
              >
                Sign in
              </button>
            )}
            {user && (
              <button
                type="button"
                className="cursor-pointer rounded-full border border-stone-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-700 transition hover:border-stone-300 hover:text-stone-900"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Log out
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
