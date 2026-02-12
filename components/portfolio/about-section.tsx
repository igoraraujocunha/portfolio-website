"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const technologies: string[] = [
  "TypeScript",
  "Java / Spring Boot",
  "React / Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Lua",
  "Git / CI-CD",
];

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="01" title="About Me" />

        <div className="grid gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              Greetings! I am Igor, a Computer Scientist and Software Engineer passionate
              about building clean, performant systems and ensuring every piece
              of software meets the highest standards of quality.
            </p>
            <p>
              I hold a{" "}
              <span className="text-gold">
                B.S. in Computer Science from UVA
              </span>{" "}
              and I am currently pursuing a{" "}
              <span className="text-gold">
                Post-grad in Software Engineering at PUC-Rio
              </span>
              . My academic background combined with hands-on experience drives
              my focus on system architecture, scalable solutions, and
              test-driven development.
            </p>
            <p>
              Here are some technologies I have been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm mt-4">
              {technologies.map((tech) => (
                <li key={tech} className="flex items-center gap-2">
                  <span className="text-gold text-xs">{">"}</span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto w-56 h-56 md:w-full md:h-auto md:aspect-square rounded-md overflow-hidden group"
          >
            <div className="absolute inset-0 rounded-md border-2 border-gold/40 translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="w-full h-full rounded-md bg-gold/10 flex items-center justify-center">
              <span className="font-mono text-gold text-6xl font-bold">I</span>
            </div>
            <div className="absolute inset-0 bg-gold/20 rounded-md transition-opacity group-hover:opacity-0" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
