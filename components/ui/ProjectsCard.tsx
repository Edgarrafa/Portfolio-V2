import * as motion from "motion/react-client";
import { LuStar, LuExternalLink } from "react-icons/lu"
import { FaGithub } from "react-icons/fa6";

import ProjectCardData, { ProjectCardDataProps } from "./ProjectCardsData";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Button from "./Button";

export type ProjectCardProps = {
  imageSrc: string;
  githubHref: string;
  externalHref?: string;
  isCentered?: boolean;
} & ProjectCardDataProps;

const ProjectCard = ({ title, description, technologies, githubHref, externalHref, isCentered }: ProjectCardProps) => {
  return (
    <motion.div
      key={title}
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className={`group ${isCentered ? 'w-full max-w-2xl justify-self-center' : 'w-full'}`}
    >
      <div className="glass cyber-clip h-full border border-cyber-cyan/20 hover:border-cyber-cyan/40 transition-colors">
        <div className="h-full p-6 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <LuStar className="text-cyber-cyan/70" size={14} aria-hidden="true" />
            <span className="text-cyber-cyan/70 text-xs font-mono uppercase tracking-wider">
              FEATURED
            </span>
          </div>

          
          <div className="h-40 mb-5 rounded-lg flex items-center justify-center bg-cyber-black border border-white/5" aria-hidden="true">
            <span className="text-3xl font-mono text-cyber-cyan/20 group-hover:text-cyber-cyan/35 transition-colors">
              {`<${title.charAt(0)} />`}
            </span>
          </div>

          <ProjectCardData title={title} description={description} technologies={technologies} isFeatured />

          <div className="flex items-center gap-3 pt-2 border-t border-white/5">
            {githubHref && (
              <Button
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} on GitHub (opens in new tab)`}
                variant="ghost"
                size="sm"
                className="text-cyber-gray hover:text-cyber-cyan hover:bg-cyber-cyan/5"
              >
                <FaGithub size={16} className="mr-2" aria-hidden="true" />
                Code
              </Button>
            )}
            {externalHref && (
              <Button
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${title} live demo (opens in new tab)`}
                variant="ghost"
                size="sm"
                className="text-cyber-gray hover:text-cyber-cyan hover:bg-cyber-cyan/5"
              >
                <LuExternalLink size={16} className="mr-2" aria-hidden="true" />
                Live
              </Button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;