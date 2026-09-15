import { cn } from "@/lib/utils";

type ProfileInfoCardProps = {
  label: string;
  value: string;
  labelColorClass: string;
  showStatusDot?: boolean;
  className?: string;
};

// Renders a dt/dd pair, so it must be placed inside a <dl>
const ProfileInfoCard = ({ label, value, labelColorClass, showStatusDot, className }: ProfileInfoCardProps) => {
  return (
    <div className={cn("glass cyber-clip px-4 py-3", className)}>
      <dt className={cn("font-mono text-xs uppercase tracking-widest mb-1", labelColorClass)}>{`> ${label}`}</dt>
      <dd className="flex items-center gap-2 text-cyber-white font-medium">
        {showStatusDot && (
          <span className="relative flex h-2.5 w-2.5 shrink-0" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
        )}
        {value}
      </dd>
    </div>
  );
}

export default ProfileInfoCard;
