import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { blogPosts } from "../data/blogPosts";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <section className="bg-white text-stone-900">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="text-sm uppercase tracking-[0.3em] text-stone-400">
            Article not found
          </p>
          <h2 className="mt-3 text-2xl font-semibold">We couldn&apos;t find that story.</h2>
          <NavLink
            to="/blog"
            className="mt-6 inline-flex rounded-full border border-stone-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-600 transition hover:border-amber-500 hover:text-stone-900"
          >
            Back to journal
          </NavLink>
        </div>
      </section>
    );
  }

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

      <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-stone-400"
          variants={fadeUp}
        >
          {post.category}
        </motion.p>
        <motion.div
          className="mt-6 overflow-hidden rounded-3xl border border-stone-200 bg-amber-50 shadow-lg"
          variants={fadeUp}
        >
          <img
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <motion.h1 className="mt-4 text-3xl font-semibold sm:text-4xl" variants={fadeUp}>
          {post.title}
        </motion.h1>
        <motion.p
          className="mt-3 text-sm uppercase tracking-[0.25em] text-stone-400"
          variants={fadeUp}
        >
          {post.readTime}
        </motion.p>

        <motion.div className="mt-8 space-y-5 text-base text-stone-600" variants={fadeUp}>
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </motion.div>

        <motion.div className="mt-10" variants={fadeUp}>
          <NavLink
            to="/blog"
            className="inline-flex rounded-full border border-stone-200 px-5 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-stone-600 transition hover:border-amber-500 hover:text-stone-900"
          >
            Back to journal
          </NavLink>
        </motion.div>
      </div>
    </motion.section>
  );
}
