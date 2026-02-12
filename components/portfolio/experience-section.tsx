"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

interface ExperienceEntry {
  company: string;
  title: string;
  range: string;
  bullets: string[];
}

const experiences: ExperienceEntry[] = [
  {
    company: "Freelance",
    title: "QA Tester @ Roblox Games",
    range: "2023 - Present",
    bullets: [
      "Perform comprehensive functional and regression testing on Roblox game projects, ensuring high quality standards before release.",
      "Develop and execute detailed test plans, identifying bugs relating to game mechanics, UI/UX, performance, and scripting logic.",
      "Collaborate closely with game developers to triage, report, and verify bug fixes using structured QA workflows.",
      "Provide actionable feedback on gameplay balance, user experience, and edge-case scenarios to improve overall game quality.",
    ],
  },
  {
    company: "Academic",
    title: "Software Engineering Student @ PUC-Rio",
    range: "2024 - Present",
    bullets: [
      "Pursuing a Post-grad in Software Engineering with a focus on architecture patterns, agile methodologies, and modern development practices.",
      "Building projects applying clean architecture, SOLID principles, and test-driven development strategies.",
      "Researching scalable system design and distributed computing concepts.",
    ],
  },
  {
    company: "University",
    title: "B.S. Computer Science @ UVA",
    range: "2020 - 2024",
    bullets: [
      "Completed a Bachelor of Science in Computer Science with focus on algorithms, data structures, and software engineering.",
      "Developed projects involving full-stack web applications, database design, and system programming.",
      "Participated in coding competitions and collaborative open-source projects.",
    ],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState<number>(0);
  const active = experiences[activeTab];

  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="02" title="Where I've Worked" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row gap-6"
        >
          {/* Vertical tab list */}
          <div
            role="tablist"
            aria-label="Experience tabs"
            className="relative flex md:flex-col overflow-x-auto md:overflow-x-visible border-b md:border-b-0 md:border-l border-border"
          >
            {experiences.map((exp, i) => (
              <button
                key={exp.company}
                role="tab"
                aria-selected={i === activeTab}
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
            {/* Active indicator */}
            <motion.div
              className="hidden md:block absolute left-0 w-0.5 bg-gold"
              initial={false}
              animate={{
                top: activeTab * 44,
                height: 44,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          </div>

          {/* Content panel */}
          <div role="tabpanel" className="flex-1 min-h-[320px]">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-medium text-foreground">
                {active.title}
              </h3>
              <p className="font-mono text-sm text-muted-foreground mt-1">
                {active.range}
              </p>
              <ul className="mt-6 space-y-4">
                {active.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="text-gold mt-1.5 shrink-0 text-xs">
                      {">>"}
                    </span>
                    <span>{bullet}</span>
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
