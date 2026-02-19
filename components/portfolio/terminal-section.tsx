"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { useLanguage } from "@/hooks/use-language";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

export function TerminalSection() {
  const { t } = useLanguage();
  
  const COMMANDS: Record<string, string> = {
    help: t.terminal.help,
    about: t.terminal.about,
    skills: "TypeScript, Java (Spring Boot), React, Next.js, Node.js, PostgreSQL, AWS, Docker, Git",
    contact: "GitHub: github.com/igoraraujocunha\nLinkedIn: linkedin.com/in/igoraraujocunha/\nEmail: igor.araujo.dev@outlook.com",
  };

  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: t.terminal.welcome },
  ]);
  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [...lines, { type: "input", content: trimmed }];

    if (trimmed === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    if (trimmed === "") {
      setLines(newLines);
      setInput("");
      return;
    }

    const response = COMMANDS[trimmed];
    if (response) {
      const outputLines = response.split("\n").map(
        (line): TerminalLine => ({ type: "output", content: line })
      );
      setLines([...newLines, ...outputLines]);
    } else {
      setLines([...newLines, { type: "error", content: `${t.terminal.error}${trimmed}.` }]);
    }
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    }
  };

  return (
    <section id="terminal" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="05" title={t.nav.terminal} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-secondary/80 overflow-hidden shadow-2xl shadow-background/50"
        >
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">igor@portfolio:~</span>
          </div>

          <div
            className="p-4 font-mono text-sm h-72 overflow-y-auto cursor-text"
            onClick={() => inputRef.current?.focus()}
          >
            {lines.map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.type === "input" ? (
                  <span><span className="text-gold">{">"}</span> <span className="text-foreground">{line.content}</span></span>
                ) : line.type === "error" ? (
                  <span className="text-red-400">{line.content}</span>
                ) : (
                  <span className="text-muted-foreground">{line.content}</span>
                )}
              </div>
            ))}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-gold">{">"}</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-foreground outline-none caret-gold"
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}