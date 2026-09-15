import Badge from "./Badge";

export type ProjectCardDataProps = {
  title: string;
  description: string;
  technologies: string[];
  isFeatured?: boolean;
};

const ProjectCardData = ({ title, description, technologies, isFeatured }: ProjectCardDataProps) => {
  if (!isFeatured) {
    return (
      <>
        <h4 className="text-lg font-bold text-cyber-white mb-2 group-hover:text-cyber-cyan transition-colors">
          {title}
        </h4>
        <p className="text-cyber-gray text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="text-xs text-cyber-gray font-mono">
              {tech}
            </span>
          ))}
        </div>
      </>
    );
  }

  return (
      <>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-cyber-white mb-2 group-hover:text-cyber-cyan transition-colors">
            {title}
          </h3>
          <p className="text-cyber-gray text-sm mb-4 line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              className="border-white/10 text-cyber-gray text-xs hover:border-cyber-cyan/30 hover:text-cyber-cyan transition-colors"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </>
  );
}

export default ProjectCardData;
