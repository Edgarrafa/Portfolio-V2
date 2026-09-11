import * as motion from "motion/react-client";

type HeroSocialLinkProps = {
  name: string;
  url: string;
  children: React.ReactNode;
};

const HeroSocialLink = ({ name, url, children }: HeroSocialLinkProps) => {
  return (
    <li key={name}>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-lg border border-cyber-cyan/30 text-cyber-cyan hover:border-cyber-cyan hover:border-glow-cyan transition-all inline-block"
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        aria-label={`${name} (opens in new tab)`}
      >
        {children}
      </motion.a>
    </li>
  )
}

export default HeroSocialLink;
