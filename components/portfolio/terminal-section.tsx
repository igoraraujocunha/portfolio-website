"use client";

import { useState, useRef, useEffect, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

interface TerminalLine {
  type: "input" | "output" | "error";
  content: string;
}

const COMMANDS: Record<string, string> = {
  help: "Available commands: help, about, games, skills, contact, clear",
  about:
    "Igor de Araujo C. Costa - Computer Scientist & Software Engineer. \nB.S. in Computer Science from UVA.\nPost-grad in Software Engineering at PUC-Rio.",
  games: "Valorant, Project Zomboid, Arcane Odyssey",
  skills:
    "TypeScript, Python, React, Next.js, Node.js, PostgreSQL, Docker, Lua/Luau, Git, CI/CD",
  contact: "GitHub: github.com/iguinh0w\nEmail: igor@example.com",
};

export function TerminalSection() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", content: 'Welcome to Igor\'s terminal. Type "help" for available commands.' },
  ]);
  const [input, setInput] = useState<string>("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    const newLines: TerminalLine[] = [
      ...lines,
      { type: "input", content: trimmed },
    ];

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
        (line): TerminalLine => ({
          type: "output",
          content: line,
        })
      );
      setLines([...newLines, ...outputLines]);
    } else {
      setLines([
        ...newLines,
        {
          type: "error",
          content: `Command not found: ${trimmed}. Type "help" for available commands.`,
        },
      ]);
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
        <SectionHeading number="05" title="Terminal" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-secondary/80 overflow-hidden shadow-2xl shadow-background/50"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs font-mono text-muted-foreground">
              igor@portfolio:~
            </span>
          </div>

          {/* Terminal body */}
          <div
            className="p-4 font-mono text-sm h-72 overflow-y-auto cursor-text"
            onClick={() => inputRef.current?.focus()}
            role="log"
            aria-label="Terminal output"
          >
            {lines.map((line, i) => (
              <div key={i} className="leading-relaxed">
                {line.type === "input" ? (
                  <span>
                    <span className="text-gold">{">"}</span>{" "}
                    <span className="text-foreground">{line.content}</span>
                  </span>
                ) : line.type === "error" ? (
                  <span className="text-red-400">{line.content}</span>
                ) : (
                  <span className="text-muted-foreground">{line.content}</span>
                )}
              </div>
            ))}

            {/* Input line */}
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
                aria-label="Terminal input"
              />
            </div>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
