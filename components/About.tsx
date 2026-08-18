"use client"

import * as motion from "motion/react-client";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section className="py-40">
      <SectionHeader title="Who I Am" subtitle="// ABOUT.ME" />
      <div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
}

export default About;