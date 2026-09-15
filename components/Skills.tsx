"use client"

import { Skill, SkillCategory as SkillCategoryType } from "@/lib/types";
import SectionHeader from "./ui/SectionHeader";
import SkillCategory from "./ui/SkillCategory";

const skills: Skill[] = [
  // Frontend
  { name: 'JavaScript', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Vue.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Sass', category: 'frontend' },
  { name: 'Material UI', category: 'frontend' },
  { name: 'Bootstrap', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'Zustand', category: 'frontend' },
  { name: 'React Query', category: 'frontend' },

  // Backend
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },

  // Tools
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'tools' },
  { name: 'Vercel', category: 'tools' },
  { name: 'Linux', category: 'tools' },
  { name: 'VS Code', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Jest', category: 'tools' },
];

const categoryStyles: Record<SkillCategoryType, {
  dotClass: string;
  lineClass: string;
  iconClass: string;
  textClass: string;
}> = {
  frontend: {
    dotClass: 'bg-cyber-cyan',
    lineClass: 'from-cyber-cyan/50 to-transparent',
    iconClass: 'bg-cyber-cyan/10 border-cyber-cyan/30 group-hover:border-cyber-cyan',
    textClass: 'text-cyber-cyan',
  },
  backend: {
    dotClass: 'bg-cyber-pink',
    lineClass: 'from-cyber-pink/50 to-transparent',
    iconClass: 'bg-cyber-pink/10 border-cyber-pink/30 group-hover:border-cyber-pink',
    textClass: 'text-cyber-pink',
  },
  tools: {
    dotClass: 'bg-cyber-purple',
    lineClass: 'from-cyber-purple/50 to-transparent',
    iconClass: 'bg-cyber-purple/10 border-cyber-purple/30 group-hover:border-cyber-purple',
    textClass: 'text-cyber-purple',
  },
  other: {
    dotClass: 'bg-cyber-gray',
    lineClass: 'from-cyber-gray/50 to-transparent',
    iconClass: 'bg-cyber-gray/10 border-cyber-gray/30 group-hover:border-cyber-gray',
    textClass: 'text-cyber-gray',
  },
};

const Skills = () => {
  const categories = ['frontend', 'backend', 'tools'] as SkillCategoryType[];
  const groupedSkills: Record<SkillCategoryType, Skill[]> = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategoryType, Skill[]>);

  return (
    <section id="skills" className="py-20">
      <SectionHeader title="Skills & Technologies" subtitle="// TECH.STACK" />
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-12">
          {categories.map(category => {
            const categorySkills = groupedSkills[category] || [];
            if (categorySkills.length === 0) return null;

            const styles = categoryStyles[category];
            return (
              <div key={category}>
                <SkillCategory category={category.toUpperCase()} skills={categorySkills} styles={styles} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
