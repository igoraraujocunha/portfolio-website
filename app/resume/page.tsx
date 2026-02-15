"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";

interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  details: string[];
}

const education: EducationEntry[] = [
  {
    institution: "PUC-Rio",
    degree: "Post-grad in Software Engineering",
    period: "2024 - Present",
  },
  {
    institution: "UVA",
    degree: "B.S. in Computer Science",
    period: "2020 - 2024",
  },
];

const experience: ExperienceEntry[] = [
  {
    role: "Freelance QA Tester",
    company: "Roblox Games",
    period: "2023 - Present",
    details: [
      "Perform comprehensive functional and regression testing on Roblox game projects",
      "Develop and execute detailed test plans identifying bugs in game mechanics, UI/UX, and scripting logic",
      "Collaborate with developers using structured QA workflows for bug triage and verification",
      "Provide actionable feedback on gameplay balance and edge-case scenarios",
    ],
  },
];

const skills: string[] = [
  "TypeScript",
  "Python",
  "React / Next.js",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Lua / Luau",
  "Git / CI-CD",
  "Linux",
  "Tailwind CSS",
  "REST APIs",
  "Testing / QA",
];

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <PortfolioLayout>
      <div className="px-6 pt-32 pb-24 lg:px-12">
        <div className="mx-auto w-full max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="inline-flex items-center gap-2 font-mono text-sm text-gold hover:underline underline-offset-4 print:hidden"
              >
                <ArrowLeft className="h-4 w-4" />
                Back Home
              </Link>
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded border border-gold px-4 py-2 font-mono text-sm text-gold transition-colors hover:bg-gold/10 print:hidden"
              >
                <Printer className="h-4 w-4" />
                Print
              </button>
            </div>
          </motion.div>

          {/* Resume Document */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-lg border border-border bg-secondary/30 p-8 lg:p-12 print:border-none print:bg-transparent print:p-0"
          >
            {/* Header */}
            <header className="mb-10 border-b border-border pb-8">
              <h1 className="text-4xl font-bold text-foreground mb-1">
                Igor de Araujo Cunha Costa
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                Computer Scientist & Software Engineer
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
                <span>igor.araujo.dev@outlook.com</span>
                <span>github.com/igoraraujocunha</span>
                <span>linkedin.com/in/igoraraujocunha</span>
              </div>
            </header>

            {/* Summary */}
            <section className="mb-10">
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Summary
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Computer Scientist specialized in building high-performance software systems. 
                Currently deepening my expertise in Software Engineering, 
                I focus on delivering scalable solutions through Clean Architecture, 
                SOLID principles, and modern development practices.
              </p>
            </section>

            {/* Experience */}
            <section className="mb-10">
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Experience
              </h2>
              {experience.map((exp) => (
                <div key={exp.role} className="mb-6 last:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-sm font-medium text-foreground">
                      {exp.role}{" "}
                      <span className="text-gold">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="text-gold shrink-0 mt-0.5">{">"}</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="mb-10">
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Education
              </h2>
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 last:mb-0"
                >
                  <div>
                    <h3 className="text-sm font-medium text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {edu.period}
                  </span>
                </div>
              ))}
            </section>

            {/* Skills */}
            <section>
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
