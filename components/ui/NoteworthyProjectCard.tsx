import * as motion from "motion/react-client";
import { LuFolder, LuExternalLink } from "react-icons/lu"
import { FaGithub } from "react-icons/fa6";

import ProjectCardData, { ProjectCardDataProps } from "./ProjectCardsData";
import { fadeInUp } from "@/lib/animations";

type NoteworthyProjectCardProps = {
  githubHref: string;
  externalHref?: string;
  isCentered?: boolean;
} & ProjectCardDataProps;

const NoteworthyProjectCard = ({ title, description, technologies, githubHref, externalHref, isCentered }: NoteworthyProjectCardProps) => {
  return (
    <motion.div
      key={title}
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className={`group ${isCentered ? 'w-full max-w-xl justify-self-center' : 'w-full'}`}
    >
      <div className="glass cyber-clip h-full p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="p-2 rounded-lg bg-cyber-purple/10 border border-cyber-purple/30" aria-hidden="true">
            <LuFolder className="w-6 h-6 text-cyber-purple" strokeWidth={1.5} />
          </div>

          <div className="flex items-center gap-2">
            {githubHref && (
              <a
                href={githubHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-gray hover:text-cyber-cyan transition-colors"
                aria-label={`View ${title} on GitHub (opens in new tab)`}
              >
                <FaGithub size={18} aria-hidden="true" />
              </a>
            )}
            {externalHref && (
              <a
                href={externalHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-gray hover:text-cyber-pink transition-colors"
                aria-label={`View ${title} live demo (opens in new tab)`}
              >
                <LuExternalLink size={18} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
        <ProjectCardData title={title} description={description} technologies={technologies} />
      </div>
    </motion.div>
  );
}

export default NoteworthyProjectCard;
