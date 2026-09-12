"use client"

import * as motion from "motion/react-client";
import Image from "next/image";

import SectionHeader from "./ui/SectionHeader";
import { fadeInLeft, fadeInRight, fadeInUp, staggerContainer } from "@/lib/animations";
import AboutStat from "./ui/AboutStat";

const About = () => {
  return (
    <section className="py-40">
      <SectionHeader title="Who I Am" subtitle="// ABOUT.ME" />
      <div
        className="mx-auto px-4 md:px-6"
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          <motion.div
            whileInView="animate"
            initial="initial"
            variants={fadeInLeft}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-cyber-black">
                <Image
                  src="/cyberpunk-avatar.jpeg"
                  alt="Edgar Galvan - Full-Stack Developer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 384px"
                  priority
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            whileInView="animate"
            initial="initial"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="space-y-6">
              <motion.p
                whileInView="animate"
                initial="initial"
                variants={fadeInRight}
                viewport={{ once: true }}
                className="text-cyber-gray text-base md:text-lg leading-relaxed"
              >
                I'm a full-stack developer with a passion for crafting immersive digital experiences. I specialize in building high-performance web applications using modern technologies like React, Next.js, and Node.js.
              </motion.p>
              <motion.p
                whileInView="animate"
                initial="initial"
                variants={fadeInRight}
                viewport={{ once: true }}
                className="text-cyber-gray text-base md:text-lg leading-relaxed"
              >
                With a keen eye for optimization and a love for clean code, I transform complex problems into elegant solutions. I thrive in the intersection of pragmatism and technology.
              </motion.p>
              <motion.p
                whileInView="animate"
                initial="initial"
                variants={fadeInRight}
                viewport={{ once: true }}
                className="text-cyber-gray text-base md:text-lg leading-relaxed"
              >
                When I'm not coding, you'll find me exploring new technologies, watching Anime, or gaming. Let's connect and build something amazing together!
              </motion.p>
            </div>
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10"
            >
              <AboutStat stat="5+" description="Years of Experience" statColorClass="text-cyber-cyan" />
              <AboutStat stat="50+" description="Projects Completed" statColorClass="text-cyber-pink" />
              <AboutStat stat="10+" description="Technologies Used" statColorClass="text-cyber-purple" className="col-span-2 md:col-span-1" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;