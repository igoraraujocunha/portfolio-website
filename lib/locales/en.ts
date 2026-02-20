import { Tags } from "lucide-react";

export const en = {
  nav: {
    about: "About",
    experience: "Experience",
    education: "Education",
    projects: "Projects",
    terminal: "Terminal",
    resume: "Resume",
    archive: "Archive"
  },
  hero: {
    role: "Fullstack Developer",
    name: "Igor de Araujo C. Costa",
    subtitle: "Computer Scientist & Software Engineer.",
    description: "I am a Computer Scientist specialized in building high-performance software systems. Currently deepening my expertise in Software Engineering, I focus on delivering scalable solutions through Clean Architecture, SOLID principles, and modern development practices.",
    cta: "Check out my projects"
  },
  about: {
    title: "About Me",
    greeting: "Greetings! I am Igor, a Software Engineer dedicated to writing efficient code and solving technical challenges with a solid engineering foundation.",
    pillars: "My technical journey is built on two main pillars: a",
    pillar_uva: "B.S. in Computer Science from UVA,",
    pillar_uva_desc: "which provided me with deep knowledge in algorithms and systems, and my current",
    pillar_puc: "Post-grad in Software Engineering at PUC-Rio",
    pillar_puc_desc: ", where I am mastering architectural patterns and system scalability.",
    focus: "I am focused on bridging the gap between complex theoretical concepts and practical, secure software delivery.",
    tech_intro: "Here are some technologies I have been working with recently:"
  },
  experience: {
    title: "Experience",
    jobs: [
      {
        company: "Fynco Lab",
        title: "Fullstack Developer",
        range: "Jun 2025 - Present",
        bullets: ["A financial management platform focused on scalability and clean architecture."],
        tags: ["TypeScript", "Next.js", "Tailwind CSS", "Node.js(pnpm)", "Java", "Spring Boot", "Spring Security", "Hibernate", "OAuth2", "PostgreSQL", "H2 Database", "Maven", "Lombok", "Sendgrid"]
      },
    ]
  },
  education: {
    title: "Education",
    academic_formation: "Academic Formation",
    certifications: "Certifications",
    academic_list: [
      {
        title: "Postgraduate in Software Engineering",
        institution: "PUC-Rio",
        period: "Feb 2026 - Present",
        status: "IN PROGRESS",
        description: "Specializing in Microservices, Cloud Computing, and DevOps pipelines. Focused on implementing GoF/GRASP patterns, Agile Management (Scrum/Kanban), and integrating Machine Learning into scalable software architectures.",
        featured: true
      },
      {
        title: "Bachelor in Computer Science",
        institution: "Universidade Veiga de Almeida",
        period: "Feb 2022 - Dec 2025",
        status: "",
        description: "Solid foundation in Computer Science, focusing on Software Engineering, Data Structures, and Systems Programming. Experienced in Full-Stack development, Object-Oriented Programming (OOP), and Database Modeling, bridging the gap between low-level architecture and high-level applications.",
        featured: true
      },
      {
        title: "Internet of Things, AI, and the Connected Revolution",
        institution: "PUCRS",
        period: "Jan-Feb 2026",
        status: "",
        description: "Training in IoT and AI technologies with an emphasis on data security and ethics. Addresses the practical application of the LGPD in cloud and edge architectures, discussing data sovereignty, digital sovereignty, and the responsible handling of information in connected networks and data spaces.",
        concepts: "LGPD, Cloud/Edge Architecture, Web3",
        featured: false
      },
      {
        title: "Course 2",
        institution: "Enterprise",
        period: "2023",
        status: "",
        description: "Description.",
        featured: false
      },
      {
        title: "Course 3",
        institution: "Enterprise",
        period: "2022",
        status: "",
        description: "Description.",
        featured: false
      }
    ]
  },
  projects: {
    title: "Projects",
    featured_label: "Featured Project",
    noteworthy_label: "Other Noteworthy Projects",
    items: [
      {
        title: "VavaHelper",
        description: "A robust multi-platform system designed for the Valorant community. It features a dedicated REST API for processing Riot Games data, a high-performance analytics web hub, and a mobile companion app, showcasing expertise in distributed systems and real-time data integration.",
        tags: ["Typescript", "React", "Next.js", "Tailwind CSS", "Java", "Spring Boot", "Spring Security", "JPA", "JWT", "PostgreSQL", "Maven", "Ionic", "Vue.js", "Axios"],
        github: "#",
        external: "#"
      }
    ],
    other_projects: [
      {
        title: "Project 1",
        description: "Description of project 1",
        tags: ["Languages"],
        github: "#",
        external: ""
      },
      {
        title: "Project 2",
        description: "Description of project 2",
        tags: ["Languages"],
        github: "#",
        external: ""
      }
    ]
  },
  terminal: {
    welcome: "Welcome to Igor's terminal. Type 'help' for available commands.",
    help: "Available commands: help, about, games, skills, contact, clear",
    about: "Igor de Araujo C. Costa - Computer Scientist & Software Engineer. \nB.S. in Computer Science from UVA.\nPost-grad in Software Engineering at PUC-Rio.",
    error: "Command not found: "
  },
  resume: {
    back: "Back Home",
    print: "Print",
    summary: "Summary",
    experience: "Experience",
    education: "Education",
    skills: "Skills",
    skills_list: ["TypeScript", "Java (Spring Boot/Spring Security)", "React / Next.js", "Node.js (pnpm)", "PostgreSQL", "Docker", "Git / CI-CD", "Tailwind CSS", "REST APIs", "AWS (Lambda)"]
  },
  archive: {
    title: "Archive",
    subtitle: "A comprehensive list of things I have worked on",
    table: {
      year: "Year",
      title: "Title",
      made: "Made at",
      built: "Built with",
      link: "Link"
    },
    projects: [
      { year: "2024", title: "Project 1", made: "Enterprise", tech: ["Technologies"], github: "#" },
      { year: "2023", title: "Project 2", made: "Enterprise", tech: ["Technologies"], github: "#" },
      { year: "2022", title: "Project 3", made: "Enterprise", tech: ["Technologies"], github: "#" },
      { year: "2021", title: "Project 4", made: "Enterprise", tech: ["Technologies"], github: "#" },
      { year: "2020", title: "Project 5", made: "Enterprise", tech: ["Technologies"], github: "#" }
    ]
  }
};