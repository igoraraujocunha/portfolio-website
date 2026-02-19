"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Printer } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";
import { useLanguage } from "@/hooks/use-language";

export default function ResumePage() {
  const { t } = useLanguage();
  const experience = t.experience.jobs;
  const education = t.education.academic_list.filter((e) => e.featured);
  const skills = t.resume.skills_list;

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
                {t.resume.back}
              </Link>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 rounded border border-gold px-4 py-2 font-mono text-sm text-gold transition-colors hover:bg-gold/10 print:hidden"
              >
                <Printer className="h-4 w-4" />
                {t.resume.print}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-lg border border-border bg-secondary/30 p-8 lg:p-12 print:border-none print:bg-transparent print:p-0"
          >
            <header className="mb-10 border-b border-border pb-8">
              <h1 className="text-4xl font-bold text-foreground mb-1">
                {t.hero.name}
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                {t.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-muted-foreground">
                <span>igor.araujo.dev@outlook.com</span>
                <span>github.com/igoraraujocunha</span>
                <span>linkedin.com/in/igoraraujocunha</span>
              </div>
            </header>

            <section className="mb-10">
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                {t.resume.summary}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.hero.description}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                {t.resume.experience}
              </h2>
              {experience.map((exp) => (
                <div key={exp.company} className="mb-6 last:mb-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-sm font-medium text-foreground">
                      {exp.title} <span className="text-gold">@ {exp.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {exp.range}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((detail, i) => (
                      <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-gold shrink-0 mt-0.5">{">"}</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            <section className="mb-10">
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                {t.resume.education}
              </h2>
              {education.map((edu) => (
                <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 last:mb-0">
                  <div>
                    <h3 className="text-sm font-medium text-foreground">{edu.title}</h3>
                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{edu.period}</span>
                </div>
              ))}
            </section>

            <section>
              <h2 className="font-mono text-sm font-semibold text-gold uppercase tracking-wider mb-4">
                {t.resume.skills}
              </h2>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="rounded-full bg-gold/10 px-3 py-1 font-mono text-xs text-gold">
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