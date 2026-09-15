"use client";

import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadBasic } from "@tsparticles/basic";
import { loadExternalGrabInteraction } from "@tsparticles/interaction-external-grab";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";
import { loadParticlesLinksInteraction } from "@tsparticles/interaction-particles-links";
import { loadInteractivityPlugin } from "@tsparticles/plugin-interactivity";
import Particles, { ParticlesProvider } from '@tsparticles/react';
import { useCallback, useMemo, useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

// Must live at module scope: ParticlesProvider throws if the init callback
// identity changes while the engine is still loading.
// Loads only the plugins this config uses (loadSlim bundles ~27 of them).
const particlesInit = async (engine: Engine): Promise<void> => {
  await loadBasic(engine);
  // Interactors need the interactivity plugin registered first
  await loadInteractivityPlugin(engine);
  await Promise.all([
    loadParticlesLinksInteraction(engine),
    loadExternalGrabInteraction(engine),
    loadExternalPushInteraction(engine),
  ]);
};

const useMediaQuery = (query: string): boolean => {
  const subscribe = useCallback((onChange: () => void) => {
    const mediaQuery = window.matchMedia(query);
    mediaQuery.addEventListener('change', onChange);
    return () => mediaQuery.removeEventListener('change', onChange);
  }, [query]);

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
};

const BASE_PARTICLES = 80;

export type ParticlesBackgroundProps = {
  className?: string;
};

const ParticlesBackground = ({ className }: ParticlesBackgroundProps) => {
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  // Mobile and tablet: fewer, slower particles and no hover (touch devices)
  const isSmallScreen = useMediaQuery('(max-width: 1023px)');

  const options: ISourceOptions = useMemo(() => {
    const particleCount = isSmallScreen ? 50 : BASE_PARTICLES;

    return {
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
          distance: isSmallScreen ? 120 : 150,
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
          speed: isSmallScreen ? 0.5 : 0.8,
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
          value: particleCount,
          density: {
            enable: true,
            height: 800,
            width: 800,
          },
          // Caps click-to-push growth; oldest particles are removed past this
          limit: {
            mode: 'delete',
            value: Math.round(particleCount * 1.5),
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
            enable: !prefersReducedMotion && !isSmallScreen,
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
    };
  }, [prefersReducedMotion, isSmallScreen]);

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
