"use client";

import { motion } from "framer-motion";
import { Cpu, HardDrive, MemoryStick, CircuitBoard } from "lucide-react";
import { SectionHeading } from "./section-heading";
import type { LucideIcon } from "lucide-react";

interface RigPart {
  icon: LucideIcon;
  label: string;
  value: string;
}

const rigParts: RigPart[] = [
  {
    icon: Cpu,
    label: "Processor",
    value: "AMD Ryzen 5 5600G",
  },
  {
    icon: CircuitBoard,
    label: "Motherboard",
    value: "ASUS TUF GAMING B550M",
  },
  {
    icon: MemoryStick,
    label: "Memory",
    value: "16GB Kingston Fury Beast RAM",
  },
  {
    icon: HardDrive,
    label: "Boot Drive",
    value: "256GB Winmemory NVMe SSD",
  },
  {
    icon: HardDrive,
    label: "Storage",
    value: "1TB Kingston KC3000 SSD",
  },
];

export function SetupSection() {
  return (
    <section id="setup" className="px-6 py-24">
      <div className="mx-auto w-full max-w-4xl">
        <SectionHeading number="04" title="The Rig" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rigParts.map((part, i) => (
            <motion.div
              key={part.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex items-start gap-4 rounded-lg border border-border bg-secondary/50 p-5 transition-all hover:border-gold/30 hover:shadow-md hover:shadow-gold/5"
            >
              <div className="mt-0.5 rounded bg-gold/10 p-2 text-gold transition-colors group-hover:bg-gold/20">
                <part.icon className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs text-gold mb-1">{part.label}</p>
                <p className="text-sm text-foreground font-medium">
                  {part.value}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
