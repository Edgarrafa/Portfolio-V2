import { fadeInLeft, fadeInRight } from "@/lib/animations";
import * as motion from "motion/react-client";
import { LuBriefcase } from "react-icons/lu"
import Badge from "./Badge";

type ExperienceCardProps = {
  title: string;
  company: string;
  date: string;
  description: string[];
  skills: string[];
  isLeftCard: boolean;
};

const ExperienceCard = ({ title, company, date, description, skills, isLeftCard }: ExperienceCardProps) => {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: '-50px' }}
      variants={isLeftCard ? fadeInLeft : fadeInRight}
      className={`relative md:w-1/2 ${
        isLeftCard ? 'md:pr-12 md:ml-0' : 'md:pl-12 md:ml-auto'
      } mb-12 md:mb-24`}
    >
      {/* Timeline Dot */}
      <div
        className={`hidden md:flex absolute top-0 ${
          isLeftCard ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
        } w-4 h-4 rounded-full bg-cyber-cyan border-4 border-cyber-black z-10`}
        style={{
          boxShadow: '0 0 10px #00d9ff, 0 0 20px rgba(0, 217, 255, 0.5)',
        }}
        aria-hidden="true"
      />

      {/* Mobile Timeline Dot */}
      <div
        className="md:hidden absolute left-5 top-0 w-3 h-3 rounded-full bg-cyber-cyan z-10"
        style={{
          boxShadow: '0 0 10px #00d9ff',
        }}
        aria-hidden="true"
      />

      {/* Card */}
      <motion.div
        className="glass cyber-clip p-6 md:p-8 ml-12 md:ml-0"
        whileHover={{
          boxShadow: '0 0 20px rgba(0, 217, 255, 0.3)',
        }}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30" aria-hidden="true">
            <LuBriefcase className="text-cyber-cyan" size={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-cyber-white mb-1">
              {title}
            </h3>
            <p className="text-cyber-cyan font-mono">{company}</p>
            <p className="text-cyber-gray text-sm mt-1">{date}</p>
          </div>
        </div>

        <ul className="space-y-2 mb-6" role="list">
          {description.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-cyber-gray text-sm"
            >
              <span className="text-cyber-cyan mt-1" aria-hidden="true">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {skills.map((tech) => (
            <Badge
              key={tech}
              className="border-cyber-cyan/30 text-cyber-cyan text-xs hover:border-cyber-cyan hover:text-glow-cyan transition-all"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
};

export default ExperienceCard;
