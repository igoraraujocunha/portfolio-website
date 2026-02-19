"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";

export function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const navLinks = [
    { label: t.nav.about, href: "/#about", number: "01" },
    { label: t.nav.experience, href: "/#experience", number: "02" },
    { label: t.nav.education, href: "/#education", number: "03" },
    { label: t.nav.projects, href: "/#projects", number: "04" },
    { label: t.nav.terminal, href: "/#terminal", number: "05" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 50);

      if (currentY < 50 || currentY < lastScrollY) {
        setVisible(true);
      } else if (currentY > lastScrollY) {
        setVisible(false);
      }
      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md shadow-lg shadow-background/20"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
          <Link href="/" className="font-mono text-gold text-lg font-bold hover:text-gold/80 transition-colors">
            {"<I/>"}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link href={link.href} className="group flex items-center gap-1 text-sm text-muted-foreground hover:text-gold transition-colors">
                    <span className="font-mono text-gold text-xs">{link.number}.</span>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <motion.button
                onClick={toggleLanguage}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-center gap-2 rounded border border-gold/20 px-3 py-2 font-mono text-xs text-gold transition-all hover:bg-gold/10 hover:border-gold uppercase"
                title="Switch Language"
              >
                <Languages className="h-4 w-4" />
                <span>{language}</span>
              </motion.button>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Link
                  href="/resume"
                  className="rounded border border-gold px-4 py-2 font-mono text-sm text-gold transition-colors hover:bg-gold/10"
                >
                  {t.nav.resume}
                </Link>
              </motion.div>
            </div>
          </div>

          <button onClick={() => setMobileOpen(true)} className="md:hidden text-gold" aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 z-50 h-full w-72 bg-secondary p-8 flex flex-col items-center justify-center gap-8"
            >
              <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-6 text-gold" aria-label="Close menu">
                <X className="h-6 w-6" />
              </button>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex flex-col items-center gap-1 text-lg text-muted-foreground hover:text-gold transition-colors"
                >
                  <span className="font-mono text-gold text-sm">{link.number}.</span>
                  {link.label}
                </Link>
              ))}

              <div className="flex flex-col items-center gap-4 mt-4 w-full px-6">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center justify-center gap-2 w-full rounded border border-gold/20 py-3 font-mono text-sm text-gold transition-all hover:bg-gold/10 uppercase"
                >
                  <Languages className="h-5 w-5" />
                  <span>{language}</span>
                </button>

                <Link
                  href="/resume"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center rounded border border-gold px-6 py-3 font-mono text-sm text-gold transition-colors hover:bg-gold/10"
                >
                  {t.nav.resume}
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}