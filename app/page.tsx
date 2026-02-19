import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { TerminalSection } from "@/components/portfolio/terminal-section";

export default function Page() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <TerminalSection />
    </PortfolioLayout>
  );
}
