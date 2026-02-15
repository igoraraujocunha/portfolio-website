"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-4xl flex flex-col items-center gap-4"
      >
        <Link
          href="/archive"
          className="font-mono text-sm text-gold hover:underline underline-offset-4 transition-colors"
        >
          View the Archive
        </Link>
        <p className="font-mono text-xs text-muted-foreground text-center">
          © 2026 Designed & Built by Igor Araujo | Todos os direitos reservados.
        </p>
      </motion.div>
    </footer>
  );
}
