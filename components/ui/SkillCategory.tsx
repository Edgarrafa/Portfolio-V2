import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Skill } from "@/lib/types";

import * as motion from "motion/react-client";
import SkillLi from "./Skill";

type SkillCategoryProps = {
  category: string;
  skills: Skill[];
  styles: {
    dotClass: string;
    lineClass: string;
    textClass: string;
    iconClass: string;
  };
};

const SkillCategory = ({ category, skills, styles }: SkillCategoryProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={staggerContainer}
      role="region"
      aria-labelledby={`${category}-heading`}
    >
      <motion.div
        variants={fadeInUp}
        className="flex items-center gap-4 mb-6"
      >
        <div
          className={`w-3 h-3 rounded-full ${styles.dotClass}`}
          aria-hidden="true"
        />
        <h3 id={`${category}-heading`} className="text-xl md:text-2xl font-bold font-mono text-cyber-white">
          {category}
        </h3>
        <div className={`flex-1 h-px bg-gradient-to-r ${styles.lineClass}`} aria-hidden="true" />
      </motion.div>

      <motion.ul
        variants={staggerContainer}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        role="list"
        aria-label={category}
      >
        {skills.map((skill) => <SkillLi key={skill.name} name={skill.name} textClass={styles.textClass} iconClass={styles.iconClass} />)}
      </motion.ul>
    </motion.div>
  )
}

export default SkillCategory;
