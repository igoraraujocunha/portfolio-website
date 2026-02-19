"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

interface ExperienceEntry {
  company: string;
  title: string;
  range: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Fynco Lab",
    title: "Fullstack Developer",
    range: "Jun 2025 - Present",
    bullets: [
      "Founded Fynco, a financial management platform focused on scalability and clean architecture.",
    ],
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js(pnpm)", "Java", "Spring Boot", "Spring Security", "Hibernate", "OAuth2", "PostgreSQL", "H2 Database", "Maven", "Lombok", "Sendgrid"],
  },
  {
    company: "Academic",
    title: "Software Engineering Student @ PUC-Rio",
    range: "Feb 2026 - Present",
    bullets: [
      "Pursuing a Post-grad in Software Engineering with a focus on architecture patterns, agile methodologies, and modern development practices.",
      "Building projects applying clean architecture, SOLID principles, and test-driven development strategies.",
      "Researching scalable system design and distributed computing concepts.",
    ],
    tags: ["Clean Architecture", "SOLID", "TDD", "Microservices"],
  },
  {
    company: "University",
    title: "B.S. Computer Science @ UVA",
    range: "Feb 2022 - Dec 2025",
    bullets: [
      "Completed a Bachelor of Science in Computer Science with focus on algorithms, data structures, and software engineering.",
      "Developed projects involving full-stack web applications, database design, and system programming.",
      "Participated in coding competitions and collaborative open-source projects.",
    ],
    tags: ["Java", "Python", "SQL", "Algorithms", "C"],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const active = experiences[activeTab];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="02" title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6"
        >
          <div
            role="tablist"
            className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border"
          >
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                role="tab"
                onClick={() => setActiveTab(i)}
                className={`shrink-0 px-5 py-3 font-mono text-sm text-left transition-colors whitespace-nowrap ${
                  i === activeTab
                    ? "text-gold bg-gold/10"
                    : "text-muted-foreground hover:text-gold hover:bg-gold/5"
                }`}
              >
                {exp.company}
              </button>
            ))}
            <motion.div
              className="hidden md:block absolute left-0 w-0.5 bg-gold"
              initial={false}
              animate={{ top: activeTab * 44, height: 44 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          <div role="tabpanel" className="flex-1 min-h-[320px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium text-foreground">{active.title}</h3>
              <p className="font-mono text-sm text-muted-foreground mt-1">{active.range}</p>
              
              <ul className="mt-6 space-y-4">
                {active.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground text-sm leading-relaxed text-left">
                    <span className="text-gold mt-1.5 shrink-0 text-xs">{">>"}</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
                {active.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-gold/10 px-3 py-1 text-gold border border-gold/10">
                    {tag}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}