import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import about from "../assets/about.png";

function useCountUp(target, duration = 1200) {
  const [value, setValue] = useState(0)
  const frameRef = useRef(0)
  const startRef = useRef(0)

  useEffect(() => {
    const start = performance.now()
    startRef.current = start

    const tick = (now) => {
      const elapsed = now - startRef.current
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick)
      }
    }

    frameRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameRef.current)
  }, [target, duration])

  return value
}

function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  }

  const guests = useCountUp(3200, 2200)
  const partners = useCountUp(28, 2000)
  const funded = useCountUp(18, 2100)

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
        <div className="absolute -bottom-28 right-8 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.h2
          className="mb-10 text-center text-3xl font-semibold uppercase italic tracking-[0.35em] text-stone-800"
          variants={fadeUp}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.25 }}
        >
          Our Story
        </motion.h2>

        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div className="relative" variants={fadeUp}>
            <motion.div
              className="group relative aspect-[3/2] w-full overflow-hidden rounded-3xl border border-stone-200 bg-amber-50 shadow-xl"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={about}
                alt="Guests enjoying a guided safari experience in the golden hour"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/45 via-transparent to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={container}>
            <motion.p
              className="inline-flex items-center rounded-full border border-stone-200 bg-stone-50 px-4 py-1 text-xs uppercase tracking-[0.25em] text-stone-500"
              variants={fadeUp}
            >
              About Velora
            </motion.p>
            <motion.h3 className="text-3xl font-semibold leading-tight sm:text-4xl" variants={fadeUp}>
              We design safaris that feel personal, wild, and effortless.
            </motion.h3>
            <motion.p className="text-lg text-stone-600" variants={fadeUp}>
              Velora Safaris partners with expert local guides and boutique camps to
              craft journeys that balance adventure, comfort, and conservation. From
              first call to the last sunset, every detail is planned for the way you
              want to travel.
            </motion.p>
          </motion.div>
        </div>

        <motion.div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" variants={container}>
          {[
            {
              title: 'Tailor-made routes',
              text: 'Every itinerary is built around your pace, interests, and comfort.',
            },
            {
              title: 'Local expertise',
              text: 'Guides who know the land and wildlife like a second home.',
            },
            {
              title: 'Conservation-first',
              text: 'We partner with camps that protect habitats and support communities.',
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              className="rounded-3xl border border-stone-200 bg-stone-50 p-6 shadow-sm"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 rounded-3xl border border-stone-200 bg-stone-900 px-8 py-10 text-stone-100"
          variants={fadeUp}
        >
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-stone-400">Our Impact</p>
              <p className="mt-2 text-3xl font-semibold">Safaris that give back</p>
            </div>
            <div className="lg:col-span-2 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Guests hosted', value: `${guests.toLocaleString()}+` },
                { label: 'Wildlife partners', value: `${partners}` },
                { label: 'Conservation funded', value: `$${(funded / 10).toFixed(1)}M` },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl bg-stone-800/70 px-4 py-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <p className="text-xs text-stone-400">{stat.label}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default About
