import Badge from "./Badge";

export type ProjectCardDataProps = {
  title: string;
  description: string;
  technologies: string[];
  isFeatured?: boolean;
};

const ProjectCardData = ({ title, description, technologies, isFeatured }: ProjectCardDataProps) => {
  return (
      <>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-cyber-white mb-2 group-hover:text-cyber-cyan transition-colors">
            {title}
          </h3>
          <p className={`text-cyber-gray text-sm mb-4 ${isFeatured ? 'line-clamp-3' : 'line-clamp-2'} leading-relaxed`}>
            {description}
          </p>
        </div>

        <div className={`flex flex-wrap gap-2 ${isFeatured ? 'mb-5' : 'mb-0'}`}>
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