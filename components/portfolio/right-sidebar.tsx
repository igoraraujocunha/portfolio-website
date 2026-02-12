"use client";

import { motion } from "framer-motion";

export function RightSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed bottom-0 right-6 z-10 hidden lg:flex flex-col items-center gap-6 xl:right-12"
    >
      <a
        href="mailto:igor@example.com"
        className="font-mono text-xs tracking-widest text-muted-foreground hover:text-gold hover:-translate-y-1 transition-all duration-200"
        style={{ writingMode: "vertical-rl" }}
      >
        igor@example.com
      </a>
      <div className="w-px h-24 bg-muted-foreground" />
    </motion.div>
  );
}
