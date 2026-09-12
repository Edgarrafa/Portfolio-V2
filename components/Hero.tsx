"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import ParticlesBackground from "./ui/ParticlesBackground";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import Button from "./ui/Button";
import HeroSocialLink from "./ui/HeroSocialLink";

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer | Building Digital Futures";

  useEffect(() => {
    setTypedText('');
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [fullText]);

  return (
    <section className="relative h-screen overflow-hidden">
      <ParticlesBackground />
      <motion.div
        whileInView="animate"
        initial="initial"
        variants={staggerContainer}
        viewport={{ once: true }}
        className="relative z-10 mx-auto px-4 md:px-6 text-center flex flex-col justify-center items-center h-full"
      >
        <motion.p
          className="text-cyber-cyan font-mono text-sm md:text-base mb-4"
          variants={fadeInUp}
        >
          // INITIALIZING DEVELOPER PROFILE...
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="mb-6"
        >
          <h1 className="glitch text-5xl md:text-7xl lg:text-8xl font-bold font-mono text-cyber-white tracking-tighter">EDGAR_GALVAN</h1>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="h-12 md:h-16 flex items-center justify-center mb-8"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-cyber-gray font-mono">
            {typedText}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-cyber-cyan ml-1 animate-pulse" />
          </p>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mb-12 flex flex-row gap-3 justify-center"
        >
          <Button
            className="neon-button bg-cyber-cyan text-cyber-black font-bold px-8 py-6 text-lg hover:bg-cyber-cyan/90 border-none"
          >View Projects</Button>
          <Button
            className="border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10 px-8 py-6 text-lg"
            variant="outline"
          >Get In Touch</Button>
        </motion.div>
        <motion.ul
          variants={fadeInUp}
          className="flex items-center justify-center gap-6"
          role="list"
          aria-label="Social links"
        >
          <HeroSocialLink name="GitHub" url="#">
            <FaGithub size={24} aria-hidden="true" />
          </HeroSocialLink>
          <HeroSocialLink name="LinkedIn" url="#">
            <FaLinkedin size={24} aria-hidden="true" />
          </HeroSocialLink>
        </motion.ul>
      </motion.div>
    </section>
  )
}

export default Hero;