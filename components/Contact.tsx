"use client"

import { useEffect, useState } from "react";
import { LuMail, LuDownload, LuCheck, LuCopy } from "react-icons/lu"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import * as motion from "motion/react-client";

import SectionHeader from "./ui/SectionHeader";
import { fadeInUp } from "@/lib/animations";
import Button from "./ui/Button";
import { PersonalInfo } from "@/lib/types";

const socialIcons: Record<string, typeof FaGithub> = {
  github: FaGithub,
  linkedin: FaLinkedin,
};

export const personalInfo: PersonalInfo = {
  name: 'EDGAR_GALVAN',
  email: 'edgarrafa@gmail.com',
  socialLinks: [
    {
      name: 'GitHub',
      url: 'https://github.com/Edgarrafa',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/edgar-rafael-galvan-prado',
      icon: 'linkedin',
    },
  ],
  resumeUrl: '/Edgar_Galvan_Frontend_Developer.pdf',
};

const Contact = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(timeout);
  }, [copied]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
    } catch {
      // Clipboard unavailable (e.g. insecure context); the mailto button still works
    }
  };

  return (
    <section id="contact" className="py-20">
      <SectionHeader title="Let's Talk" subtitle="// CONTACT.INIT" text="Looking for an engineer to join your team? Feel free to reach out. I'm always open to discussing new opportunities."/>
      <motion.div
        variants={fadeInUp}
        className="max-w-2xl mx-auto glass cyber-clip border border-cyber-cyan/20"
      >
        {/* Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-cyber-cyan/10">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-cyber-pink" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyber-purple" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyber-cyan" />
            </div>
            <span className="font-mono text-xs text-cyber-gray">contact.sh</span>
          </div>
          <div className="flex items-center gap-2" role="status">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="font-mono text-xs text-green-400">Open to work</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 md:p-10 text-center">
          <p className="font-mono text-sm text-cyber-cyan/70 mb-6" aria-hidden="true">
            $ ping edgar --channel email
          </p>

          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              href={`mailto:${personalInfo.email}`}
              className="h-12 px-6 text-base font-bold bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan hover:border-glow-cyan"
            >
              <LuMail size={18} aria-hidden="true" />
              Email me
            </Button>
            <Button
              variant="outline"
              onClick={copyEmail}
              aria-label="Copy email"
              className="h-12 px-6 text-base font-mono border-cyber-cyan/30 text-cyber-cyan hover:text-cyber-cyan hover:border-cyber-cyan hover:bg-cyber-cyan/10"
            >
              {copied ? <LuCheck size={18} aria-hidden="true" /> : <LuCopy size={18} aria-hidden="true" />}
              <span aria-live="polite">{copied ? "Copied" : personalInfo.email}</span>
            </Button>
          </div>

          <div className="h-px my-8 bg-gradient-to-r from-transparent via-cyber-cyan/20 to-transparent" aria-hidden="true" />

          {/* Secondary Links */}
          <ul className="flex flex-wrap justify-center gap-3" role="list">
            {personalInfo.socialLinks.map((link) => {
              const Icon = socialIcons[link.icon] || FaGithub;
              return (
                <li key={link.name}>
                  <Button
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    size="sm"
                    className="border-white/10 bg-transparent text-cyber-gray hover:text-cyber-white hover:border-cyber-cyan/40 hover:bg-white/5"
                    aria-label={`${link.name} (opens in new tab)`}
                  >
                    <Icon size={16} aria-hidden="true" />
                    {link.name}
                  </Button>
                </li>
              );
            })}
            {personalInfo.resumeUrl && (
              <li>
                <Button
                  href={personalInfo.resumeUrl}
                  download
                  variant="outline"
                  size="sm"
                  className="border-white/10 bg-transparent text-cyber-gray hover:text-cyber-white hover:border-cyber-cyan/40 hover:bg-white/5"
                >
                  <LuDownload size={16} aria-hidden="true" />
                  Resume
                </Button>
              </li>
            )}
          </ul>
        </div>
      </motion.div>

      {/* Background Decorations */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent" aria-hidden="true" />
    </section>
  );
}

export default Contact;