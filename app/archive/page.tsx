"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";

interface ArchiveProject {
  year: string;
  title: string;
  madeAt: string;
  tech: string[];
  github?: string;
  external?: string;
}

const archiveProjects: ArchiveProject[] = [
  {
    year: "2025",
    title: "Fynco",
    madeAt: "Personal",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS"],
    github: "#",
    external: "#",
  },
  {
    year: "2024",
    title: "QA Automation Suite",
    madeAt: "Freelance",
    tech: ["Lua", "Python", "Automation", "CI/CD"],
    github: "#",
  },
  {
    year: "2024",
    title: "System Monitor CLI",
    madeAt: "Personal",
    tech: ["Python", "CLI", "Linux"],
    github: "#",
  },
  {
    year: "2024",
    title: "Roblox Game Test Framework",
    madeAt: "Freelance",
    tech: ["Luau", "Roblox Studio", "Testing"],
    github: "#",
  },
  {
    year: "2023",
    title: "Portfolio v1",
    madeAt: "Personal",
    tech: ["React", "CSS Modules", "Vercel"],
    github: "#",
    external: "#",
  },
  {
    year: "2023",
    title: "Task Manager API",
    madeAt: "Academic",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "#",
  },
  {
    year: "2022",
    title: "Student Database System",
    madeAt: "UVA",
    tech: ["Java", "PostgreSQL", "JDBC"],
    github: "#",
  },
  {
    year: "2022",
    title: "Sorting Algorithm Visualizer",
    madeAt: "UVA",
    tech: ["JavaScript", "Canvas API", "HTML"],
    github: "#",
    external: "#",
  },
];

export default function ArchivePage() {
  return (
    <PortfolioLayout>
      <div className="px-6 pt-32 pb-24 lg:px-12">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-gold hover:underline underline-offset-4 mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Igor (Iguinh0w)
            </Link>

            <h1 className="text-5xl font-bold text-foreground mb-2 lg:text-6xl">
              Archive
            </h1>
            <p className="text-muted-foreground mb-16">
              A comprehensive list of things I have worked on
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="overflow-x-auto"
          >
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap">
                    Year
                  </th>
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap">
                    Title
                  </th>
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap hidden md:table-cell">
                    Made at
                  </th>
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap hidden lg:table-cell">
                    Built with
                  </th>
                  <th className="py-3 font-mono text-sm font-medium text-gold whitespace-nowrap">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {archiveProjects.map((project, i) => (
                  <motion.tr
                    key={`${project.year}-${project.title}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    className="border-b border-border/50 transition-colors hover:bg-secondary/30"
                  >
                    <td className="py-4 pr-4 font-mono text-sm text-gold">
                      {project.year}
                    </td>
                    <td className="py-4 pr-4 text-sm font-medium text-foreground">
                      {project.title}
                    </td>
                    <td className="py-4 pr-4 text-sm text-muted-foreground hidden md:table-cell">
                      {project.madeAt}
                    </td>
                    <td className="py-4 pr-4 text-sm text-muted-foreground hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-gold/10 px-2 py-0.5 font-mono text-xs text-gold"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            className="text-muted-foreground hover:text-gold transition-colors"
                            aria-label={`GitHub link for ${project.title}`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.external && (
                          <a
                            href={project.external}
                            className="text-muted-foreground hover:text-gold transition-colors"
                            aria-label={`External link for ${project.title}`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </PortfolioLayout>
  );
}
