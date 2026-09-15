"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as motion from "motion/react-client";
import { FaGithub } from "react-icons/fa6";

import ParticlesBackground from "./ui/ParticlesBackground";
import { fadeInRight, fadeInUp, staggerContainer } from "@/lib/animations";
import HeroSocialLink from "./ui/HeroSocialLink";
import ProfileInfoCard from "./ui/ProfileInfoCard";
import { personalInfo, socialIcons } from "./Contact";
import { experiences } from "./Experience";

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cyber-cyan">{children}</span>
);

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-Stack Developer | Building Digital Futures";
  const latestRole = experiences[0];

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
  }, [fullText]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden flex items-center pt-28 pb-16">
      <ParticlesBackground />

      {/* Screen Corner Brackets */}
      <div className="hidden md:block absolute inset-8 pointer-events-none" aria-hidden="true">
        <span className="absolute top-0 left-0 w-20 h-20 border-t border-l border-cyber-cyan/30" />
        <span className="absolute top-0 right-0 w-20 h-20 border-t border-r border-cyber-cyan/30" />
        <span className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-cyber-pink/30" />
        <span className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-cyber-pink/30" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            whileInView="animate"
            initial="initial"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <motion.p
              className="text-cyber-cyan font-mono text-sm md:text-base mb-4"
              variants={fadeInUp}
            >
              {'// INITIALIZING DEVELOPER PROFILE...'}
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="mb-4"
            >
              <h1
                className="glitch text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold font-mono text-cyber-white tracking-tighter"
                data-text="EDGAR_GALVAN"
              >EDGAR_GALVAN</h1>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="min-h-14 md:min-h-16 flex items-center justify-center lg:justify-start mb-6"
            >
              <p className="text-lg md:text-2xl text-cyber-gray font-mono">
                {typedText}
                <span className="inline-block w-0.5 h-5 md:h-7 bg-cyber-cyan ml-1 align-middle animate-pulse" />
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="h-1 w-20 mx-auto lg:mx-0 mb-8 bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink"
              aria-hidden="true"
            />

            <motion.div
              variants={fadeInUp}
              className="space-y-4 text-cyber-gray text-base md:text-lg leading-relaxed mb-10"
            >
              <p>
                I&apos;m a <Highlight>full-stack developer</Highlight> with a passion for crafting immersive <Highlight>digital experiences</Highlight>. I specialize in building high-performance <Highlight>web applications</Highlight> using modern technologies like <Highlight>React</Highlight>, <Highlight>Next.js</Highlight>, and <Highlight>Node.js</Highlight>.
              </p>
              <p>
                With a keen eye for optimization and a love for <Highlight>clean code</Highlight>, I transform complex problems into elegant solutions. I thrive in the intersection of pragmatism and technology.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, watching Anime, or gaming.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              <ProfileInfoCard label="Experience" value="6+ years" labelColorClass="text-cyber-cyan" />
              <ProfileInfoCard label="Latest Role" value={`${latestRole.title} @ ${latestRole.company}`} labelColorClass="text-cyber-pink" />
              <ProfileInfoCard label="Core Stack" value="React · TypeScript · Next.js" labelColorClass="text-cyber-purple" />
              <ProfileInfoCard label="Status" value="Open to full-time roles · Available immediately" labelColorClass="text-green-400" showStatusDot />
            </motion.div>

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

          <motion.div
            whileInView="animate"
            initial="initial"
            variants={fadeInRight}
            viewport={{ once: true }}
            className="lg:col-span-5 order-first lg:order-last"
          >
            <div className="relative max-w-xs sm:max-w-sm mx-auto p-3">
              {/* Avatar Corner Brackets */}
              <span className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyber-cyan" aria-hidden="true" />
              <span className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyber-cyan" aria-hidden="true" />
              <span className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyber-pink" aria-hidden="true" />
              <span className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyber-pink" aria-hidden="true" />

              <div className="relative aspect-square rounded-lg overflow-hidden border border-cyber-cyan/30 bg-cyber-black">
                <Image
                  src="/cyberpunk-avatar.jpeg"
                  alt="Edgar Galvan - Full-Stack Software Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 320px, 384px"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Cyberpunk Tint */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/60 via-transparent to-cyber-cyan/10" />
              </div>

              <p className="mt-5 mb-1 text-center font-mono text-xs tracking-widest text-cyber-cyan/80">
                {'// ID: EDGAR_GALVAN'}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
    </section>
  )
}

export default Hero;
