"use client";

import type { Engine, ISourceOptions } from '@tsparticles/engine';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

// Must live at module scope: ParticlesProvider throws if the init callback
// identity changes while the engine is still loading.
const particlesInit = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

export type ParticlesBackgroundProps = {
  className?: string;
};

const ParticlesBackground = ({ className }: ParticlesBackgroundProps) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  /** TO DO:
   * IT STILL NEEDS TO HAVE RESPONSIVE BEHAVIOR.
   * MOBILE AND TABLET DEVICES SHOULD HAVE LESS PARTICLES AND SLOWER SPEEDS.
   */

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);
  
  const options: ISourceOptions = useMemo(() => ({
    particles: {
      shape: {
        type: "circle", 
      },
      paint: {
        color: {
          value: ['#00d9ff', '#ff006e', '#b100ff'],
        },
      },
      links: {
        color: '#00d9ff',
        distance: 150,
        enable: true,
        opacity: 0.15,
        width: 1,
      },
      opacity: {
        value: { min: 0.3, max: 0.6 },
        animation: {
          enable: !prefersReducedMotion,
          speed: 0.8,
          sync: false,
        },
      },
      move: {
        enable: !prefersReducedMotion,
        speed: prefersReducedMotion ? 0 : 0.8,
        direction: 'none',
        random: true,
        straight: false,
        outModes: {
          default: 'bounce',
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      number: {
        value: 80,
        density: {
          enable: true,
          height: 800,
          width: 800,
        },
      }
    },
    fullScreen: {
      enable: false,
    },
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: !prefersReducedMotion,
          mode: "grab"
        },
        onClick: {
          enable: !prefersReducedMotion,
          mode: "push"
        },
      },
      modes: {
        grab: {
          distance: 200,
          links: {
            blink: false,
            consent: false,
            opacity: 0.3,
          },
        },
        push: {
          quantity: 2,
        }
      }
    },
  }), [prefersReducedMotion]);

  return (
    <ParticlesProvider init={particlesInit}>
      <Particles
        id="heroparticles"
        className={cn("absolute inset-0", className)}
        options={options}
      />
    </ParticlesProvider>
  )
}

export default ParticlesBackground;