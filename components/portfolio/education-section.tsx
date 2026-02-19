"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { useLanguage } from "@/hooks/use-language";

interface EducationItem {
  title: string;
  institution: string;
  period?: string;
  description: string;
  featured: boolean;
  status?: string;
}

function CertificationCard({ cert, index }: { cert: EducationItem; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative flex flex-col rounded-lg border border-border bg-secondary/30 p-4 transition-all hover:border-gold/30 hover:bg-secondary/50 cursor-default h-fit w-full"
    >
      <div className="text-gold mb-2">
        <Award className="h-5 w-5" />
      </div>

      <div className="flex flex-col text-left">
        <h4 className="font-semibold text-[13px] leading-tight text-foreground group-hover:text-gold transition-colors mb-1">
          {cert.title}
        </h4>
        <span className="text-[10px] text-gold font-mono uppercase tracking-widest mb-1">
          {cert.institution}
        </span>
        
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <p className="text-[11px] text-muted-foreground leading-snug pt-2 border-t border-border/50 mt-1">
                {cert.description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function EducationSection() {
  const { t } = useLanguage();
  const educationList = t.education.academic_list as unknown as EducationItem[];
  const academic = educationList.filter((e) => e.featured === true);
  const certifications = educationList.filter((e) => e.featured === false);

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="03" title={t.education.title} />

        <div className="grid gap-6 md:grid-cols-2 mb-24">
          {academic.map((edu) => (
            <div
              key={edu.title}
              className="relative rounded-lg border border-border bg-secondary/50 p-8 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 flex flex-col h-full cursor-default text-left"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="text-gold">
                  <GraduationCap className="h-8 w-8" />
                </div>
                {edu.status && (
                  <span className="px-3 py-1 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full border border-gold/30">
                    {edu.status}
                  </span>
                )}
              </div>

              <div className="mb-4">
                <span className="font-mono text-gold text-xs uppercase tracking-widest mb-1 block">
                  {t.education.academic_formation}
                </span>
                <h3 className="text-xl font-semibold text-foreground hover:text-gold transition-colors">
                  {edu.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2 mb-6 text-sm font-mono text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold/70 shrink-0" />
                  <span>{edu.institution}</span>
                </div>
                {edu.period && (
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gold/70 shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm flex-1">
                {edu.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative flex items-center justify-center mb-16">
          <div className="flex-grow h-[1px] bg-border/40"></div>
          <div className="mx-6 flex items-center gap-1 font-mono text-xl md:text-2xl font-bold">
            <span className="text-gold">{"{"}</span>
            <span className="text-foreground">{t.education.certifications}</span>
            <span className="text-gold">{"}"}</span>
          </div>
          <div className="flex-grow h-[1px] bg-border/40"></div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}