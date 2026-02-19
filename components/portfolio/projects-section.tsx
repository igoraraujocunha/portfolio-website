"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { SectionHeading } from "./section-heading";

interface Project {
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    title: "VavaHelper",
    description:
      "A robust multi-platform system designed for the Valorant community. It features a dedicated REST API for processing Riot Games data, a high-performance analytics web hub, and a mobile companion app, showcasing expertise in distributed systems and real-time data integration.",
    tags: ["Typescript", "React", "Next.js", "Tailwind CSS", "Java", "Spring Boot", "Spring Security", "JPA", "JWT", "PostgreSQL", "Maven", "Ionic", "Vue.js", "Axios"],
    featured: true,
    github: "#",
    external: "#",
  },
  {
    title: "Project 1",
    description:
      "Description",
    tags: ["Languages"],
    featured: false,
    github: "#",
  },
  {
    title: "Project 2",
    description:
      "Descriptions",
    tags: ["Languages"],
    featured: false,
    github: "#",
  },
];

function FeaturedProject({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg border border-border bg-secondary/50 p-8 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="font-mono text-gold text-sm">Featured Project</span>
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label={`GitHub link for ${project.title}`}
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.external && (
            <a
              href={project.external}
              className="text-muted-foreground hover:text-gold transition-colors"
              aria-label={`External link for ${project.title}`}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-foreground mb-4 hover:text-gold transition-colors">
        {project.title}
      </h3>

      <p className="text-muted-foreground leading-relaxed mb-6">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-3 font-mono text-xs text-muted-foreground">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full bg-gold/10 px-3 py-1 text-gold"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group flex flex-col rounded-lg border border-border bg-secondary/50 p-6 transition-all hover:border-gold/30 hover:-translate-y-2 hover:shadow-lg hover:shadow-gold/5"
    >
      <div className="flex items-center justify-between mb-6">
        <Folder className="h-10 w-10 text-gold" />
        <div className="flex gap-3">
          {project.github && (
            <a href={project.github} className="text-muted-foreground hover:text-gold transition-colors">
              <Github className="h-5 w-5" />
            </a>
          )}
          {project.external && (
            <a href={project.external} className="text-muted-foreground hover:text-gold transition-colors">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-gold transition-colors text-left">
        {project.title}
      </h3>

      <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6 text-left">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-3 font-mono text-[10px] text-muted-foreground">
        {project.tags.map((tag) => (
          <li 
            key={tag}
            className="rounded-full bg-gold/5 px-2 py-1 text-gold/80 border border-gold/10"
          >
            {tag}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ProjectsSection() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="04" title="Projects" />

        <div className="space-y-8">
          {featured.map((project) => (
            <FeaturedProject key={project.title} project={project} />
          ))}
        </div>

        <h3 className="text-center text-xl font-semibold text-foreground mt-20 mb-10">
          Other Noteworthy Projects
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          {other.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
