import React, { useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

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

const Star = ({ filled }) => (
  <svg
    viewBox="0 0 20 20"
    className={`h-4 w-4 ${filled ? 'text-amber-400' : 'text-stone-200'}`}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M10 2.5l2.3 4.65 5.13.75-3.72 3.62.88 5.1L10 14.6l-4.6 2.42.88-5.1L2.56 7.9l5.14-.75L10 2.5z"
    />
  </svg>
)

function Testimonial() {
  const sliderRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [activeVideo, setActiveVideo] = useState(null)

  const testimonials = useMemo(
    () => [
      {
        name: 'Eleanor Pena',
        role: 'UI/UX Designer',
        location: 'Cape Town, South Africa',
        quote:
          'Customer testimonials are more effective than traditional marketing copy because they let future travelers see the journey through real stories.',
        image:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
        video:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      {
        name: 'Theresa Webb',
        role: 'Travel Vlogger',
        location: 'Lisbon, Portugal',
        quote:
          'The planning was seamless and every lodge felt curated for us. It was the perfect balance of adventure, rest, and wild moments.',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=400&q=80',
        video:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      {
        name: 'Annette Black',
        role: 'Wildlife Doctor',
        location: 'Nairobi, Kenya',
        quote:
          'Velora handled the details with care. The guides were exceptional, and the conservation focus made the trip even more meaningful.',
        image:
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
        video:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      {
        name: 'Savannah Nguyen',
        role: 'Photographer',
        location: 'Vancouver, Canada',
        quote:
          'Every sunrise drive felt cinematic. The team anticipated our needs and gave us time to capture the perfect shots.',
        image:
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
        video:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      {
        name: 'Cody Fisher',
        role: 'Product Lead',
        location: 'Austin, Texas',
        quote:
          'We never had to worry about logistics. From transfers to camp check-ins, it all flowed effortlessly.',
        image:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
        video:
          'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
    ],
    []
  )

  const scrollByCard = (direction) => {
    const slider = sliderRef.current
    if (!slider) return
    const card = slider.querySelector('[data-card]')
    const cardWidth = card ? card.getBoundingClientRect().width : 320
    const gap = 24
    slider.scrollBy({ left: direction * (cardWidth + gap), behavior: 'smooth' })
  }

  const handleScroll = () => {
    const slider = sliderRef.current
    if (!slider) return
    const card = slider.querySelector('[data-card]')
    const cardWidth = card ? card.getBoundingClientRect().width : 320
    const gap = 24
    const index = Math.round(slider.scrollLeft / (cardWidth + gap))
    setActiveIndex(index)
  }

  return (
    <motion.section
      id="testimonials"
      className="relative overflow-hidden bg-white text-stone-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-16 h-64 w-64 rounded-full bg-rose-100/70 blur-3xl" />
        <div className="absolute -bottom-28 right-10 h-72 w-72 rounded-full bg-amber-100/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div
              className="absolute inset-0 bg-stone-950/60 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            />
            <motion.div
              className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-2xl"
              initial={{ opacity: 0, y: 12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-between border-b border-stone-200 px-5 py-3">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-500">
                  Guest story
                </p>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="cursor-pointer rounded-full border border-stone-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-stone-600 transition hover:border-stone-300 hover:text-stone-900"
                >
                  Close
                </button>
              </div>
              <video
                src={activeVideo}
                className="h-full w-full bg-black"
                controls
                autoPlay
              />
            </motion.div>
          </div>
        )}

        <motion.div className="text-center" variants={container}>
          <motion.p
            className="text-xs uppercase tracking-[0.4em] text-rose-500"
            variants={fadeUp}
          >
            Testimonial
          </motion.p>
          <motion.h2
            className="mt-4 text-3xl font-semibold sm:text-4xl"
            variants={fadeUp}
          >
            Satisfied{' '}
            <span className="text-rose-500">travellers</span> around the world
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-stone-600"
            variants={fadeUp}
          >
            Thousands of guests trust Velora Safaris to craft thoughtful journeys
            with expert guides, seamless planning, and heart-stopping wildlife encounters.
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mt-12 grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-center"
          variants={container}
        >
          <button
            type="button"
            className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-600 transition hover:border-rose-300 hover:text-rose-500 lg:flex"
            aria-label="Previous testimonial"
            onClick={() => scrollByCard(-1)}
          >
            <span aria-hidden="true">{'<'}</span>
          </button>

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((item) => (
              <motion.article
                key={item.name}
                data-card
                className="relative flex min-w-[260px] max-w-[260px] flex-col rounded-3xl border border-stone-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:min-w-[320px] sm:max-w-[320px] lg:min-w-[340px] lg:max-w-[340px]"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute -top-4 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-rose-500 text-white shadow-md">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M7.2 5C5.43 5 4 6.43 4 8.2c0 1.77 1.43 3.2 3.2 3.2.43 0 .84-.08 1.22-.23-.1 2.2-1.15 4.26-3.34 6.17L6 19c3.52-2.42 5.2-5.25 5.2-8.6C11.2 7.1 9.62 5 7.2 5zm9.6 0c-1.77 0-3.2 1.43-3.2 3.2 0 1.77 1.43 3.2 3.2 3.2.43 0 .84-.08 1.22-.23-.1 2.2-1.15 4.26-3.34 6.17L15.6 19c3.52-2.42 5.2-5.25 5.2-8.6 0-3.3-1.58-5.4-4-5.4z"
                    />
                  </svg>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 overflow-hidden rounded-full border border-stone-200">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="text-base font-semibold">{item.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-stone-400">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={`${item.name}-star-${starIndex}`} filled={starIndex < 5} />
                  ))}
                  <span className="ml-2 text-xs uppercase tracking-[0.3em] text-stone-400">
                    5.0
                  </span>
                </div>

                <p className="mt-4 text-sm text-stone-600">{item.quote}</p>

                <button
                  type="button"
                  onClick={() => setActiveVideo(item.video)}
                  className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full border border-stone-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-600 transition hover:border-rose-400 hover:text-rose-500"
                >
                  Watch story
                </button>

                <p className="mt-6 text-xs uppercase tracking-[0.3em] text-stone-400">
                  {item.location}
                </p>
              </motion.article>
            ))}
          </div>

          <button
            type="button"
            className="hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-stone-200 bg-white text-sm font-semibold text-stone-600 transition hover:border-rose-300 hover:text-rose-500 lg:flex"
            aria-label="Next testimonial"
            onClick={() => scrollByCard(1)}
          >
            <span aria-hidden="true">{'>'}</span>
          </button>
        </motion.div>

        <div className="mt-4 flex items-center justify-center gap-2 lg:hidden">
          {testimonials.map((item, index) => (
            <span
              key={`${item.name}-dot`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                index === activeIndex ? 'bg-rose-500' : 'bg-stone-200'
              }`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  )
}

export default Testimonial
