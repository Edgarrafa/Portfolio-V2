"use client"

import * as motion from "motion/react-client"
import { AnimatePresence } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { LuX, LuMenu } from "react-icons/lu"

import { NavItem } from "@/lib/types";
import { cn, debounce } from "@/lib/utils";

export const navItems: NavItem[] = [
  { href: '#home', label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionsRef = useRef(navItems.map((item) => item.href.replace('#', '')));

  const updateActiveSection = useCallback(() => {
    const sections = sectionsRef.current;
    for (const section of [...sections].reverse()) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
      updateActiveSection();
    }, 30);

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateActiveSection]);

  const pendingScrollRef = useRef<string | null>(null);

  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    // Closing the mobile menu cancels an in-progress smooth scroll,
    // so defer the scroll until the menu's exit animation completes.
    if (isMobileMenuOpen) {
      pendingScrollRef.current = href;
      setIsMobileMenuOpen(false);
      return;
    }
    scrollToSection(href);
  };

  const handleMenuExitComplete = () => {
    if (pendingScrollRef.current) {
      scrollToSection(pendingScrollRef.current);
      pendingScrollRef.current = null;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3' : 'py-5',
        isScrolled || isMobileMenuOpen ? 'glass-strong' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="text-xl font-bold font-mono text-cyber-cyan hover:text-glow-cyan transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Edgar G. Logo, click to scroll to top"
          >
            {'<EDGAR G />'}
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            <ul className="flex items-center gap-8" role="list">
            {navItems.map((item, index) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      'relative py-2 text-sm font-medium transition-colors',
                      isActive
                        ? 'text-cyber-cyan'
                        : 'text-cyber-gray hover:text-cyber-white'
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeSection"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyber-cyan"
                        style={{ boxShadow: '0 0 10px #00d9ff' }}
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </motion.li>
              );
            })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-cyber-cyan"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence onExitComplete={handleMenuExitComplete}>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
              aria-label="Mobile navigation"
            >
              <ul className="py-4 space-y-2" role="list">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.href.replace('#', '');
                  return (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <a
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={cn(
                          'block py-3 px-4 rounded-lg transition-all',
                          isActive
                            ? 'text-cyber-cyan bg-cyber-cyan/10 border-l-2 border-cyber-cyan'
                            : 'text-cyber-gray hover:text-cyber-white hover:bg-white/5'
                        )}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navigation;
