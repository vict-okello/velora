import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useCart } from '../context/CartContext'
import hero from "../assets/hero.png";
import about from "../assets/about.png";

function Service() {
  const { addItem } = useCart()
  const [modal, setModal] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const sliderRef = useRef(null)

  const services = useMemo(
    () => [
      {
        title: 'Camping Escapes',
        price: '$420',
        unit: 'per night',
        detail:
          'Luxury tents, stargazing dinners, and guided sunrise drives.',
        image: hero,
      },
      {
        title: 'Guided Hiking',
        price: '$260',
        unit: 'per day',
        detail:
          'Day hikes with local naturalists, picnic lunches, and gear.',
        image: about,
      },
      {
        title: 'River Kayaking',
        price: '$310',
        unit: 'per day',
        detail:
          'Scenic waterways, safety crew, and wildlife photography stops.',
        image: hero,
      },
      {
        title: 'Cultural Immersions',
        price: '$190',
        unit: 'per day',
        detail:
          'Village visits, artisan workshops, and traditional meals.',
        image: about,
      },
      {
        title: 'Private Game Drives',
        price: '$520',
        unit: 'per day',
        detail:
          'Exclusive 4x4 access, expert trackers, and sunset aperitifs.',
        image: hero,
      },
      {
        title: 'Family Safari',
        price: '$460',
        unit: 'per night',
        detail:
          'Kid-friendly guides, flexible schedules, and cozy lodges.',
        image: about,
      },
    ],
    []
  )

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length)
    sliderRef.current?.scrollBy({ left: 360, behavior: 'smooth' })
  }

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
    sliderRef.current?.scrollBy({ left: -360, behavior: 'smooth' })
  }

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
        <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-emerald-200/40 blur-3xl" />
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div
            className="absolute inset-0 bg-stone-950/50 backdrop-blur-sm"
            onClick={() => setModal(null)}
          />
          <motion.div
            className="relative w-full max-w-lg rounded-3xl border border-stone-200 bg-white p-6 shadow-2xl"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  {modal === 'quote' ? 'Request a Quote' : 'Inclusions'}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-stone-900">
                  {modal === 'quote'
                    ? 'Tell us about your dream safari'
                    : 'What is included in every package'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModal(null)}
                className="rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
              >
                Close
              </button>
            </div>

            {modal === 'quote' ? (
              <form className="mt-6 grid gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Tell us about dates, group size, and preferences"
                  className="w-full rounded-2xl border border-stone-200 px-4 py-3 text-sm focus:border-amber-500 focus:outline-none"
                />
                <button
                  type="button"
                  className="rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-400"
                  onClick={() => setModal(null)}
                >
                  Send request
                </button>
              </form>
            ) : (
              <ul className="mt-6 space-y-3 text-sm text-stone-600">
                <li>Expert guides and daily briefings</li>
                <li>Luxury accommodation and all meals</li>
                <li>Park permits, transfers, and transport</li>
                <li>24/7 on-trip support and concierge</li>
              </ul>
            )}
          </motion.div>
        </div>
      )}

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div className="flex flex-col gap-4 text-center" variants={container}>
          <motion.p className="text-xs uppercase tracking-[0.35em] text-stone-500" variants={fadeUp}>
            Services
          </motion.p>
          <motion.h2 className="text-3xl font-semibold sm:text-4xl" variants={fadeUp}>
            Adventure stays crafted for every pace
          </motion.h2>
          <motion.p className="mx-auto max-w-2xl text-lg text-stone-600" variants={fadeUp}>
            Choose a curated experience with expert guides, premium gear, and
            flexible durations. Prices include lodging, meals, and park access.
          </motion.p>
        </motion.div>

        <motion.div className="mt-12" variants={container}>
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                className="flex min-w-[260px] max-w-[260px] flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:min-w-[300px] sm:max-w-[300px]"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="relative h-44 w-full overflow-hidden bg-stone-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent" />
                </div>
                <div className="flex h-full flex-col justify-between gap-4 p-5">
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="mt-2 text-sm text-stone-600">{service.detail}</p>
                  </div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-2xl font-semibold text-amber-600">
                        {service.price}
                      </span>
                      <span className="ml-2 text-[10px] uppercase tracking-[0.3em] text-stone-500">
                        {service.unit}
                      </span>
                    </div>
                    <button
                      className="cursor-pointer rounded-full border border-stone-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-700 transition hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                      onClick={() => addItem(service)}
                      type="button"
                    >
                      Book
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              className="cursor-pointer rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700 transition hover:border-amber-500 hover:text-amber-600"
            >
              ←
            </button>
            <button
              type="button"
              onClick={goNext}
              className="cursor-pointer rounded-full border border-stone-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-700 transition hover:border-amber-500 hover:text-amber-600"
            >
              →
            </button>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 rounded-3xl border border-stone-200 bg-stone-900 px-8 py-10 text-stone-100"
          variants={fadeUp}
        >
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                Custom Packages
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                Build a tailor-made safari itinerary
              </h3>
              <p className="mt-3 text-sm text-stone-300">
                Tell us your dates, group size, and preferred pace. We will craft
                a bespoke adventure with private guides and exclusive camps.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                className="cursor-pointer rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:bg-amber-400"
                type="button"
                onClick={() => setModal('quote')}
              >
                Request a quote
              </button>
              <button
                className="cursor-pointer rounded-full border border-stone-700 px-6 py-3 text-sm font-semibold text-stone-100 transition hover:border-stone-500"
                type="button"
                onClick={() => setModal('inclusions')}
              >
                View inclusions
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Service
