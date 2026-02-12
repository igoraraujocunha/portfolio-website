"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="flex min-h-screen flex-col justify-center px-6 pt-20"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="font-mono text-gold mb-5 text-sm"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl text-balance"
        >
          Igor de Araujo C. Costa{" "}
          {/* <span className="text-gold"></span> */}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-3 text-3xl font-bold tracking-tight text-muted-foreground sm:text-4xl lg:text-5xl text-balance"
        >
          Computer Scientist & Software Engineer.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.65 }}
          className="mt-6 max-w-xl text-muted-foreground leading-relaxed"
        >
          I specialize in building and architecting robust, scalable software
          systems. Currently focused on system architecture, quality assurance,
          and delivering high-performance digital experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="inline-block rounded border border-gold px-7 py-4 font-mono text-sm text-gold transition-colors hover:bg-gold/10"
          >
            Check out my projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
