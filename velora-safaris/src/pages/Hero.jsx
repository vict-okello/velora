import React from 'react'
import { motion } from 'framer-motion'
import hero from "../assets/hero.png";

function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  return (
    <motion.section
      className="relative overflow-hidden bg-amber-50 text-stone-900"
      initial="hidden"
      animate="show"
      variants={container}
    >
      <div className="pointer-events-none cursor-pointer absolute inset-0 -z-10">
        <motion.div
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-amber-300/40 blur-3xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-24 lg:grid-cols-2 lg:py-28">
        <motion.div className="space-y-6" variants={container}>
          <motion.p
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/80 px-4 py-1 text-xs uppercase tracking-[0.25em] text-stone-600"
            variants={fadeUp}
          >
            Velora Safaris
          </motion.p>

          <motion.h1
            className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
            variants={fadeUp}
          >
            Extraordinary wildlife.
            <motion.span
              className="block text-amber-600"
              variants={fadeUp}
            >
              Crafted for you.
            </motion.span>
          </motion.h1>

          <motion.p className="max-w-xl text-lg text-stone-700" variants={fadeUp}>
            Curated safari journeys with expert guides, boutique camps, and breathtaking
            moments that feel like they were made for your story.
          </motion.p>

          <motion.div className="flex flex-wrap gap-3" variants={fadeUp}>
            <button className="rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-500">
              Plan my safari
            </button>
            <button className="rounded-full border border-stone-300 bg-white/70 px-6 py-3 text-sm font-semibold text-stone-800 transition hover:-translate-y-0.5 hover:border-stone-400">
              View itineraries
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={fadeUp}
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white/80 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={hero}
              alt="A safari vehicle at sunrise with wildlife in the distance"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 via-transparent to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Hero
