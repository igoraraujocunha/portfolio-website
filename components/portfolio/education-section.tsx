"use client";

import { motion } from "framer-motion";
import { ExternalLink, Award, GraduationCap, MapPin, Calendar } from "lucide-react";
import { SectionHeading } from "./section-heading";

interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  featured: boolean;
  status?: string;
  link?: string;
}

const educationData: Education[] = [
  {
    title: "Software Engineering",
    institution: "PUC-Rio (Post-Graduate)",
    period: "Feb 2026 - Present",
    status: "In Progress",
    description: "Advanced specialization in software architecture, design patterns, and modern engineering practices.",
    featured: true,
    link: "https://www.puc-rio.br",
  },
  {
    title: "Computer Science",
    institution: "Universidade Veiga de Almeida",
    period: "Feb 2022 - Dec 2025",
    description: "Comprehensive foundation in algorithms, data structures, databases, software engineering, and computer networks.",
    featured: true,
    link: "https://www.uva.br",
  },
  {
    title: "",
    institution: "",
    period: "",
    description: "",
    featured: false,
    link: "#",
  },
  {
    title: "",
    institution: "",
    period: "",
    description: "",
    featured: false,
    link: "#",
  },
];

// Componente para UVA e PUC-Rio (Lado a Lado)
function FeaturedEducation({ edu }: { edu: Education }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg border border-border bg-secondary/50 p-8 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 flex flex-col h-full"
    >
      <div className="flex items-center justify-between mb-6">
        <div className="p-3 bg-gold/10 rounded-lg text-gold">
          <GraduationCap className="h-6 w-6" />
        </div>
        <div className="flex items-center gap-3">
          {edu.status && (
            <span className="px-3 py-1 bg-gold/20 text-gold text-[10px] font-bold uppercase tracking-wider rounded-full border border-gold/30">
              {edu.status}
            </span>
          )}
          {edu.link && (
            <a href={edu.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <div className="mb-4">
        <span className="font-mono text-gold text-xs uppercase tracking-widest mb-1 block">Academic Background</span>
        <h3 className="text-xl font-semibold text-foreground hover:text-gold transition-colors">{edu.title}</h3>
      </div>

      <div className="flex flex-col gap-2 mb-6 text-sm font-mono text-muted-foreground">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4 text-gold/70" />
          <span>{edu.institution}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-gold/70" />
          <span>{edu.period}</span>
        </div>
      </div>

      <p className="text-muted-foreground leading-relaxed text-sm flex-1">{edu.description}</p>
    </motion.div>
  );
}

// Componente para os Certificados (Cards Menores)
function CertificationCard({ cert, index }: { cert: Education; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col rounded-lg border border-border bg-secondary/50 p-6 transition-all hover:border-gold/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold/5"
    >
      <div className="flex items-center justify-between mb-6">
        <Award className="h-10 w-10 text-gold" />
        {cert.link && (
          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold transition-colors">
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">{cert.title}</h3>
      <p className="text-sm text-gold font-mono mb-3">{cert.institution}</p>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">{cert.description}</p>
      <div className="mt-6 font-mono text-[10px] text-muted-foreground uppercase tracking-widest">{cert.period}</div>
    </motion.div>
  );
}

export function EducationSection() {
  const academic = educationData.filter((e) => e.featured);
  const certifications = educationData.filter((e) => !e.featured);

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="04" title="Education & Certifications" />

        {/* Top: Education Cards (Lado a Lado) */}
        <div className="grid gap-6 md:grid-cols-2 mb-20">
          {academic.map((edu) => (
            <FeaturedEducation key={edu.title} edu={edu} />
          ))}
        </div>

        {/* Bottom: Certification Cards */}
        <h3 className="text-center text-xl font-semibold text-foreground mb-10">
          Other Certifications
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {certifications.map((cert, i) => (
            <CertificationCard key={cert.title} cert={cert} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}