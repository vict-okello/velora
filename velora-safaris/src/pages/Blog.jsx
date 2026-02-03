import React from "react";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Blog() {
  return (
    <motion.section
      id="journal"
      className="relative overflow-hidden bg-white text-stone-900"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-20 h-60 w-60 rounded-full bg-amber-100/60 blur-3xl" />
        <div className="absolute -bottom-24 right-12 h-72 w-72 rounded-full bg-rose-100/70 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <motion.div className="text-center" variants={container}>
          <motion.p
            className="text-xs uppercase tracking-[0.35em] text-stone-500"
            variants={fadeUp}
          >
            Journal
          </motion.p>
          <motion.h2 className="mt-4 text-3xl font-semibold sm:text-4xl" variants={fadeUp}>
            Travel advice, packing lists, and seasonal guides
          </motion.h2>
          <motion.p
            className="mx-auto mt-4 max-w-2xl text-lg text-stone-600"
            variants={fadeUp}
          >
            Short, practical reads from our guides to help you prepare for the wild.
          </motion.p>
        </motion.div>

        <motion.div className="mt-12 grid gap-6 lg:grid-cols-3" variants={container}>
          {blogPosts.map((post) => (
            <motion.article
              key={post.title}
              className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-amber-50">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/30 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.3em] text-stone-400">
                  {post.category}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{post.title}</h3>
                <p className="mt-3 text-sm text-stone-600">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-[0.25em] text-stone-400">
                  <span>{post.readTime}</span>
                  <button
                    type="button"
                    className="cursor-pointer rounded-full border border-stone-200 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-600 transition hover:border-amber-500 hover:text-stone-900"
                    onClick={() =>
                      window.open(`/blog/${post.slug}`, "_blank", "noopener,noreferrer")
                    }
                  >
                    Read article
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
