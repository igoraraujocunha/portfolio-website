"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-4 mb-10"
    >
      <span className="font-mono text-gold text-base">
        {number}.
      </span>
      <h2 className="text-2xl font-semibold text-foreground whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </motion.div>
  );
}
