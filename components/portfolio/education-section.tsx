"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./section-heading";

interface Education {
  title: string;
  institution: string;
  period?: string;
  description: string;
  featured: boolean;
  status?: string;
}

const educationData: Education[] = [
  {
    title: "Postgraduate in Software Engineering",
    institution: "PUC-Rio",
    period: "Feb 2026 - Present",
    status: "IN PROGRESS",
    description: "Specializing in Microservices, Cloud Computing, and DevOps pipelines. Focused on implementing GoF/GRASP patterns, Agile Management (Scrum/Kanban), and integrating Machine Learning into scalable software architectures.",
    featured: true,
  },
  {
    title: "Bachelor in Computer Science",
    institution: "Universidade Veiga de Almeida",
    period: "Feb 2022 - Dec 2025",
    description: "Solid foundation in Computer Science, focusing on Software Engineering, Data Structures, and Systems Programming. Experienced in Full-Stack development, Object-Oriented Programming (OOP), and Database Modeling, bridging the gap between low-level architecture and high-level applications.",
    featured: true,
  },
  {
    title: "Course 1",
    institution: "Enterprise",
    description: "Description",
    featured: false,
  },
  {
    title: "Course 2",
    institution: "Enterprise",
    description: "Description",
    featured: false,
  },
  {
    title: "Course 3",
    institution: "Enterprise",
    description: "Description",
    featured: false,
  },
];

function FeaturedEducation({ edu }: { edu: Education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
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
          Academic Formation
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
    </motion.div>
  );
}

function CertificationCard({ cert, index }: { cert: Education; index: number }) {
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
  const academic = educationData.filter((e) => e.featured);
  const certifications = educationData.filter((e) => !e.featured);

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="03" title="Education" />

        <div className="grid gap-6 md:grid-cols-2 mb-24">
          {academic.map((edu) => (
            <FeaturedEducation key={edu.title} edu={edu} />
          ))}
        </div>

        <div className="relative flex items-center justify-center mb-16">
          <div className="flex-grow h-[1px] bg-border/40"></div>
          <div className="mx-6 flex items-center gap-1 font-mono text-xl md:text-2xl font-bold">
            <span className="text-gold">{"{"}</span>
            <span className="text-foreground">Certifications</span>
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