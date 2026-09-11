import { cn } from "@/lib/utils";

type AboutStatProps = {
  stat: string;
  description: string;
  statColorClass: string;
  className?: string;
};

const AboutStat = ({ stat, description, statColorClass, className }: AboutStatProps) => {
  return (
    <div className={cn("glass cyber-clip p-4 text-center", className)}>
      <p className={cn("text-2xl md:text-3xl font-bold mb-1", statColorClass)}>{stat}</p>
      <p className="text-cyber-gray text-sm">{description}</p>
    </div>
  );
}

export default AboutStat;
