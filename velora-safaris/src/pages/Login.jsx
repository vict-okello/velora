import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [mode, setMode] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !email.trim()) return;
    login({ name: name.trim(), email: email.trim() });
    navigate("/account");
  };

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

      <div className="mx-auto flex max-w-4xl items-center justify-center px-6 py-20 sm:py-24">
        <motion.div
          className="w-full max-w-md rounded-3xl border border-stone-200 bg-white p-8 shadow-lg"
          variants={fadeUp}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Account</p>
          <h1 className="mt-3 text-2xl font-semibold">
            {mode === "login" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            {mode === "login"
              ? "Sign in to view your profile and manage bookings."
              : "Create an account to save itineraries and manage bookings."}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-2 rounded-full border border-stone-200 bg-stone-50 p-1 text-xs font-semibold uppercase tracking-[0.2em]">
            <button
              type="button"
              className={`cursor-pointer rounded-full px-4 py-2 transition ${
                mode === "login" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
              }`}
              onClick={() => setMode("login")}
            >
              Login
            </button>
            <button
              type="button"
              className={`cursor-pointer rounded-full px-4 py-2 transition ${
                mode === "signup" ? "bg-white text-stone-900 shadow-sm" : "text-stone-500"
              }`}
              onClick={() => setMode("signup")}
            >
              Create
            </button>
          </div>

          <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="cursor-pointer rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-400"
            >
              {mode === "login" ? "Sign in" : "Create account"}
            </button>
          </form>

          <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-stone-400">
            <span className="h-px flex-1 bg-stone-200" />
            Or
            <span className="h-px flex-1 bg-stone-200" />
          </div>

          <button
            type="button"
            className="mt-4 w-full cursor-pointer rounded-full border border-stone-200 px-6 py-3 text-xs font-semibold uppercase tracking-[0.25em] text-stone-700 transition hover:border-stone-300 hover:text-stone-900"
            onClick={() => {
              login({ name: "Google User", email: "google.user@velora.com", provider: "google" });
              navigate("/account");
            }}
          >
            Continue with Google
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}
