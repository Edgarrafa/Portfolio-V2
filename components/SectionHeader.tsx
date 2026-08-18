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
      className="mx-auto px-4 md:px-6 mb-16"
    >
      <motion.div
        variants={fadeInUp}
        className="text-center"
      >
        <p className="text-cyber-cyan font-mono text-sm mb-2">{subtitle}</p>
        <h3 className="text-3xl md:text-5xl font-bold font-mono text-cyber-white">{title}</h3>
      </motion.div>
    </motion.div>
  );
}

export default SectionHeader;