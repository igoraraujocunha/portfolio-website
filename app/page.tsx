import { PortfolioLayout } from "@/components/portfolio/portfolio-layout";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { EducationSection } from "@/components/portfolio/education-section";
import { CertificationSection } from "@/components/portfolio/certification-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SetupSection } from "@/components/portfolio/setup-section";
import { TerminalSection } from "@/components/portfolio/terminal-section";

export default function Page() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      {/* <CertificationSection /> */}
      <ProjectsSection />
      {/* <SetupSection /> */}
      <TerminalSection />
    </PortfolioLayout>
  );
}
