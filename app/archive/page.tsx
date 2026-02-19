"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";
import { useLanguage } from "@/hooks/use-language";

interface ArchiveProjectItem {
  year: string;
  title: string;
  made: string;
  tech: string[];
  github?: string;
  external?: string;
}

export default function ArchivePage() {
  const { t } = useLanguage();
  const archiveProjects = t.archive.projects as ArchiveProjectItem[];

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
              {t.hero.name}
            </Link>

            <h1 className="text-5xl font-bold text-foreground mb-2 lg:text-6xl">
              {t.archive.title}
            </h1>
            <p className="text-muted-foreground mb-16">
              {t.archive.subtitle}
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
                    {t.archive.table.year}
                  </th>
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap">
                    {t.archive.table.title}
                  </th>
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap hidden md:table-cell">
                    {t.archive.table.made}
                  </th>
                  <th className="py-3 pr-4 font-mono text-sm font-medium text-gold whitespace-nowrap hidden lg:table-cell">
                    {t.archive.table.built}
                  </th>
                  <th className="py-3 font-mono text-sm font-medium text-gold whitespace-nowrap">
                    {t.archive.table.link}
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
                      {project.made}
                    </td>
                    <td className="py-4 pr-4 text-sm text-muted-foreground hidden lg:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {project.tech.map((techItem) => (
                          <span
                            key={techItem}
                            className="rounded-full bg-gold/10 px-2 py-0.5 font-mono text-xs text-gold"
                          >
                            {techItem}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        {project.github && (
                          <a href={project.github} className="text-muted-foreground hover:text-gold transition-colors">
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {project.external && (
                          <a href={project.external} className="text-muted-foreground hover:text-gold transition-colors">
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