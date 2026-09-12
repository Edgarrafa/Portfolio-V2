"use client"

import * as motion from "motion/react-client";

import SectionHeader from "./ui/SectionHeader";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ProjectCard from "./ui/ProjectsCard";
import NoteworthyProjectCard from "./ui/NoteworthyProjectCard";

type Project = {
  featured: boolean
  imageSrc: string;
  githubHref: string;
  externalHref?: string;
  title: string;
  description: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    featured: true,
    imageSrc: "/projects/signal-deck.jpeg",
    githubHref: "https://github.com/Riugal/signal-deck",
    externalHref: "https://signal-deck.vercel.app",
    title: "Signal Deck",
    description:
      "Real-time social analytics dashboard streaming millions of posts into composable charts. Built around a virtualized grid and a worker-backed aggregation layer that keeps interactions under 16ms.",
    technologies: ["Next.js", "TypeScript", "D3", "WebSockets", "Redis", "Tailwind CSS"],
  },
  {
    featured: true,
    imageSrc: "/projects/neon-ui.jpeg",
    githubHref: "https://github.com/Riugal/neon-ui",
    externalHref: "https://neon-ui.dev",
    title: "Neon UI",
    description:
      "Framework-agnostic component library shipped as Web Components, with React and Vue wrappers generated at build time. Fully accessible, themeable through design tokens, and documented in Storybook.",
    technologies: ["Stencil.js", "TypeScript", "Storybook", "Jest", "Turborepo", "SCSS"],
  },
  {
    featured: true,
    imageSrc: "/projects/orbit-crm.jpeg",
    githubHref: "https://github.com/Riugal/orbit-crm",
    externalHref: "https://orbit-crm-demo.vercel.app",
    title: "Orbit CRM",
    description:
      "Multi-tenant CRM with role-based access, offline-first drafts and an optimistic GraphQL cache. Includes a drag-and-drop pipeline board and CSV import that handles 50k rows without blocking the UI.",
    technologies: ["React", "GraphQL", "Apollo", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    featured: false,
    imageSrc: "",
    githubHref: "https://github.com/Riugal/chrono-cli",
    externalHref: "https://www.npmjs.com/package/chrono-cli",
    title: "Chrono CLI",
    description:
      "Terminal time tracker that infers tasks from git branches and exports weekly timesheets as Markdown or JSON.",
    technologies: ["Node.js", "TypeScript", "Ink", "SQLite"],
  },
  {
    featured: false,
    imageSrc: "",
    githubHref: "https://github.com/Riugal/glitch-fonts",
    title: "Glitch Fonts",
    description:
      "Zero-dependency CSS package of animated text effects — scanlines, RGB split and typewriter decode — tuned for reduced-motion safety.",
    technologies: ["CSS", "PostCSS", "Vite"],
  },
  {
    featured: false,
    imageSrc: "",
    githubHref: "https://github.com/Riugal/hexmap",
    externalHref: "https://hexmap-playground.vercel.app",
    title: "HexMap",
    description:
      "Canvas-based hex grid renderer with pathfinding and fog of war, built as a playground for spatial data structures.",
    technologies: ["Vue.js", "TypeScript", "Canvas API", "Vitest"],
  },
];

const Projects = () => {
  const featuredProjects = projects.filter((project) => project.featured);
  const noteworthyProjects = projects.filter((project) => !project.featured);
  const centerFeatured = featuredProjects.length <= 2;
  const centerOther = noteworthyProjects.length <= 2;
  
  const featuredGridClass = centerFeatured
    ? featuredProjects.length === 2
      ? 'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto place-items-center'
      : 'grid grid-cols-1 gap-6 md:gap-8 max-w-3xl mx-auto place-items-center'
    : 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8';
  
  const noteworthyGridClass = centerOther
    ? noteworthyProjects.length === 2
      ? 'grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto place-items-center'
      : 'grid grid-cols-1 gap-4 md:gap-6 max-w-2xl mx-auto place-items-center'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6';

  return (
    <section className="py-40">
      <SectionHeader title="Featured Work" subtitle="// PROJECTS.SHOWCASE" />
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: '-50px' }}
        variants={staggerContainer}
        className="mx-auto px-4 md:px-6 mb-20"
      >
        <div className={featuredGridClass}>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.div>

      {noteworthyProjects.length > 0 && (
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer}
          className="mx-auto px-4 md:px-6"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-xl md:text-2xl font-bold font-mono text-cyber-white mb-8 text-center"
          >
            Other Noteworthy Projects
          </motion.h3>

          <div className={noteworthyGridClass}>
            {noteworthyProjects.map((project) => (
              <NoteworthyProjectCard key={project.title} {...project} />
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default Projects;