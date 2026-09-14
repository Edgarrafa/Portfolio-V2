import * as motion from "motion/react-client";

import { fadeInUp } from "@/lib/animations";

type SkillLiProps = {
  name: string;
  textClass: string;
  iconClass: string;
}

const SkillLi = ({ name, textClass, iconClass }: SkillLiProps) => {
  return (
    <motion.li
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      className="glass cyber-clip p-4 text-center group cursor-default"
    >
      <div
        className={`w-12 h-12 mx-auto mb-3 rounded-lg border flex items-center justify-center transition-colors ${iconClass}`}
        aria-hidden="true"
      >
        <span className={`${textClass} text-2xl font-bold font-mono`}>
          {name.charAt(0)}
        </span>
      </div>
      <p className="text-cyber-white text-sm font-medium truncate">
        {name}
      </p>
    </motion.li>
  )
}

export default SkillLi;
