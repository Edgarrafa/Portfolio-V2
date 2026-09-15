"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { FaGithub } from "react-icons/fa6";

import ParticlesBackground from "./ui/ParticlesBackground";
import { fadeInUp, scaleIn, staggerContainer } from "@/lib/animations";
import HeroSocialLink from "./ui/HeroSocialLink";
import ProfileInfoCard from "./ui/ProfileInfoCard";
import { personalInfo, socialIcons } from "./Contact";
import { experiences } from "./Experience";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cyber-cyan">{children}</span>
);

const fullText = "Full-Stack Developer | Building Digital Futures";

const latestRole = experiences[0];
const facts = [
  { label: "Experience", value: "6+ years", color: "text-cyber-cyan" },
  { label: "Latest Role", value: `${latestRole.title} @ ${latestRole.company}`, color: "text-cyber-pink" },
  { label: "Core Stack", value: "React · TypeScript · Next.js", color: "text-cyber-purple" },
  { label: "Status", value: "Open to full-time roles · Available immediately", color: "text-green-400", live: true },
];

const bioClass = "text-cyber-gray text-base md:text-lg leading-relaxed";

const Hero = () => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
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
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16"
      aria-labelledby="hero-name"
    >
      <ParticlesBackground className="absolute inset-0 z-0" />

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid z-0" aria-hidden="true" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Intro Text */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.p
              variants={fadeInUp}
              className="text-cyber-cyan font-mono text-sm md:text-base mb-4"
            >
              {'// INITIALIZING DEVELOPER PROFILE...'}
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-4">
              <h1
                id="hero-name"
                data-text={personalInfo.name}
                className="glitch text-4xl md:text-6xl lg:text-7xl font-bold font-mono text-cyber-white tracking-tighter"
              >
                {personalInfo.name}
              </h1>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="min-h-12 md:min-h-14 flex items-center justify-center lg:justify-start mb-6"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-cyber-gray font-mono">
                {typedText}
                <span className="inline-block w-0.5 h-5 md:h-7 bg-cyber-cyan ml-1 align-middle animate-pulse" />
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="w-20 h-1 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink mx-auto lg:mx-0 mb-8"
              aria-hidden="true"
            />

            {/* Bio */}
            <div className="space-y-4 mb-10">
              <motion.p variants={fadeInUp} className={bioClass}>
                I&apos;m a <Highlight>full-stack developer</Highlight> with a passion for crafting immersive <Highlight>digital experiences</Highlight>. I specialize in building high-performance <Highlight>web applications</Highlight> using modern technologies like <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>, and <Highlight>Node.js</Highlight>.
              </motion.p>
              <motion.p variants={fadeInUp} className={bioClass}>
                With a keen eye for optimization and a love for <Highlight>clean code</Highlight>, I transform complex problems into elegant solutions. I thrive in the intersection of pragmatism and technology.
              </motion.p>
              <motion.p variants={fadeInUp} className={bioClass}>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, watching Anime, or gaming.
              </motion.p>
            </div>

            {/* Quick Facts */}
            <motion.dl
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left"
            >
              {facts.map(({ label, value, color, live }) => (
                <ProfileInfoCard key={label} label={label} value={value} labelColorClass={color} showStatusDot={live} />
              ))}
            </motion.dl>

            <motion.ul
              variants={fadeInUp}
              className="flex items-center justify-center lg:justify-start gap-6"
              role="list"
              aria-label="Social links"
            >
              {personalInfo.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] || FaGithub;
                return (
                  <HeroSocialLink key={link.name} name={link.name} url={link.url}>
                    <Icon size={24} aria-hidden="true" />
                  </HeroSocialLink>
                );
              })}
            </motion.ul>
          </motion.div>

          {/* Avatar */}
          <motion.div
            variants={scaleIn}
            initial="initial"
            animate="animate"
            className="lg:col-span-5 order-first lg:order-last"
          >
            <div className="relative max-w-[16rem] lg:max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="relative aspect-square rounded-lg overflow-hidden border border-cyber-cyan/30 bg-cyber-black">
                <Image
                  src="/cyberpunk-avatar.jpeg"
                  alt="Edgar Galvan - Full-Stack Software Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 256px, 384px"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Cyberpunk Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-cyan/10" />
              </div>

              {/* HUD Frame Corners */}
              <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-cyber-cyan" aria-hidden="true" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-cyber-cyan" aria-hidden="true" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-cyber-pink" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-cyber-pink" aria-hidden="true" />

              <p className="mt-6 text-center font-mono text-xs text-cyber-cyan/70 tracking-widest">
                {`// ID: ${personalInfo.name}`}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute top-20 left-4 w-20 h-20 border-l-2 border-t-2 border-cyber-cyan/20" aria-hidden="true" />
      <div className="absolute top-20 right-4 w-20 h-20 border-r-2 border-t-2 border-cyber-cyan/20" aria-hidden="true" />
      <div className="absolute bottom-20 left-4 w-20 h-20 border-l-2 border-b-2 border-cyber-pink/20" aria-hidden="true" />
      <div className="absolute bottom-20 right-4 w-20 h-20 border-r-2 border-b-2 border-cyber-pink/20" aria-hidden="true" />

      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  )
}

export default Hero;
