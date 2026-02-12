"use client";

import type { ReactNode } from "react";
import { Navbar } from "./navbar";
import { LeftSidebar } from "./left-sidebar";
import { RightSidebar } from "./right-sidebar";
import { Footer } from "./footer";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export function PortfolioLayout({ children }: PortfolioLayoutProps) {
  return (
    <>
      <Navbar />
      <LeftSidebar />
      <RightSidebar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
