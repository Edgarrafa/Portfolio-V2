"use client"

import * as motion from "motion/react-client";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export type SectionHeaderProps = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <motion.div
      whileInView="animate"
      initial="initial"
      variants={staggerContainer}
      viewport={{
        once: true,
        margin: "-100px"
      }}
      className="container mx-auto px-4 md:px-6 mb-16"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center"
      >
        <p className="text-cyber-cyan font-mono text-sm mb-2">{subtitle}</p>
        <h3 className="text-3xl md:text-5xl font-bold font-mono text-cyber-white mb-4">{title}</h3>
        <div className="h-1 w-20 mx-auto bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink" aria-hidden="true"></div>
      </motion.div>
    </motion.div>
  );
}

export default SectionHeader;