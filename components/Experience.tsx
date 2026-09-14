"use client"

import ExperienceCard from "./ui/ExperienceCard";
import SectionHeader from "./ui/SectionHeader";

const experiences = [
  {
    title: "Software Engineer II",
    company: "Meltwater",
    date: "2024 - Present",
    description: [
      "Developed large-scale data-driven web platforms for social media analytics and publishing.",
      "Built high-performance Vue.js applications with advanced data visualization at scale.",
      "Created reusable Web Components using Stencil.js across multiple teams and applications.",
      "Designed modular charting solutions standardizing data visualization across the organization.",
      "Implemented custom UI components in React 18/19 using Material UI for consistent design systems.",
      "Championed code quality through testing strategies and maintainability best practices.",
    ],
    skills: [
      "React",
      "Next.js",
      "Vue.js",
      "Stencil.js",
      "TypeScript",
      "Jest",
      "Redux",
      "Zustand",
      "Context API",
      "Restful APIs",
      "Material UI",
      "Tailwind CSS",
      "Turborepo",
      "GitHub Actions",
      "Github",
      "Figma",
    ],
  },
  {
    title: "Software Engineer",
    company: "EPAM Systems",
    date: "2021 - 2024",
    description: [
      "Built scalable React component library serving multiple client projects.",
      "Created accessible TypeScript UI components ensuring consistency and maintainability.",
      "Implemented Jest testing and documentation with Storybook for developer adoption.",
      "Developed high-performance Next.js applications optimized for responsiveness and cross-browser compatibility.",
      "Integrated GraphQL APIs optimizing data flows and application performance.",
      "Designed shared utility libraries reducing duplication across projects.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Figma",
      "GraphQL",
      "SCSS",
      "Storybook",
      "Webpack",
      "Jest",
      "Docker",
      "Atlassian Suite",
      "Gitlab",
    ],
  },
  {
    title: "Frontend Intern",
    company: "Startup",
    date: "2020 - 2021",
    description: [
      "Developed production Next.js applications with responsive UI and modern components.",
      "Collaborated in a fast-moving team mastering deployment and version control.",
      "Established strong foundations in component based design and frontend best practices.",
      "Gained early exposure to real-world product development and architecture.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "SCSS",
      "Express",
      "MongoDB",
      "Figma",
      "GitLab",
      "Bulma",
    ],
  }
];

const Experience = () => {
  return (
    <section className="py-20">
      <SectionHeader title="Experience" subtitle="// CAREER.HISTORY" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative">
          <div className="timeline-line block" aria-hidden="true" />
          <div className="space-y-12 md:space-y-0">
            {experiences.map(({ title, company, date, description, skills }, index) => {
              const isLeft = index % 2 === 0;

              return <ExperienceCard title={title} company={company} date={date} description={description} skills={skills} isLeftCard={isLeft} key={title} />
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Experience;