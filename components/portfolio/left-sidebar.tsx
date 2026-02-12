"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Instagram } from "lucide-react";

interface SocialLink {
  icon: typeof Github;
  href: string;
  label: string;
}

const socials: SocialLink[] = [
  { icon: Github, href: "https://github.com/iguinh0w", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/igoraraujocunha/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/iguinh0w", label: "Instagram" },
];

export function LeftSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="fixed bottom-0 left-6 z-10 hidden lg:flex flex-col items-center gap-6 xl:left-12"
    >
      {socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-gold hover:-translate-y-1 transition-all duration-200"
          aria-label={social.label}
        >
          <social.icon className="h-5 w-5" />
        </a>
      ))}
      <div className="w-px h-24 bg-muted-foreground" />
    </motion.div>
  );
}
