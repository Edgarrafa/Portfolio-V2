"use client"

import * as motion from "motion/react-client";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

export type SectionHeaderProps = {
  title: string;
  subtitle: string;
  text?: string;
  id?: string;
  className?: string;
};

const SectionHeader = ({ title, subtitle, text, id, className }: SectionHeaderProps) => {
  return (
    <motion.div
      whileInView="animate"
      initial="initial"
      variants={staggerContainer}
      viewport={{
        once: true,
        margin: "-100px"
      }}
      className={cn("container mx-auto px-4 md:px-6 mb-16", className)}
    >
      <motion.div
        variants={fadeInUp}
        className="text-center"
      >
        <p className="text-cyber-cyan font-mono text-sm mb-2">{subtitle}</p>
        <h2 id={id} className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">{title}</h2>
        <div className={cn("h-1 w-20 mx-auto bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink", text && "mb-6")} aria-hidden="true"></div>
        {text && <p className="text-cyber-gray max-w-xl mx-auto">{text}</p>}
      </motion.div>
    </motion.div>
  );
}

export default SectionHeader;
