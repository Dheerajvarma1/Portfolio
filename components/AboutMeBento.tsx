import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { Brain, Code, Database, TrendingUp, Users, Award } from 'lucide-react';

const expertise = [
  {
    icon: Brain,
    title: 'Deep Learning',
    description: 'Neural networks, CNN, RNN, Transformers, and advanced architectures',
    label: 'Expertise',
  },
  {
    icon: Code,
    title: 'Machine Learning',
    description: 'Supervised/Unsupervised learning, model optimization, and deployment',
    label: 'Expertise',
  },
  {
    icon: Database,
    title: 'Data Science',
    description: 'Data preprocessing, feature engineering, and statistical analysis',
    label: 'Expertise',
  },
  {
    icon: TrendingUp,
    title: 'AI Solutions',
    description: 'End-to-end AI product development and system integration',
    label: 'Expertise',
  },
  {
    icon: Users,
    title: 'Research & Development',
    description: 'Academic research, innovative AI applications, and cutting-edge projects',
    label: 'Expertise',
  },
  {
    icon: Award,
    title: 'Innovation',
    description: 'Pioneering new AI applications and cutting-edge research',
    label: 'Expertise',
  },
];

const DEFAULT_GLOW_COLOR = "132, 0, 255";
const DEFAULT_PARTICLE_COUNT = 12;

const createParticleElement = (
  x: number,
  y: number,
  color: string = DEFAULT_GLOW_COLOR
): HTMLDivElement => {
  const el = document.createElement("div");
  el.className = "particle";
  el.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: rgba(${color}, 1);
    box-shadow: 0 0 6px rgba(${color}, 0.6);
    pointer-events: none;
    z-index: 100;
    left: ${x}px;
    top: ${y}px;
  `;
  return el;
};

const ParticleCard: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  particleCount?: number;
  glowColor?: string;
}> = ({
  children,
  className = "",
  style,
  particleCount = DEFAULT_PARTICLE_COUNT,
  glowColor = DEFAULT_GLOW_COLOR,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
  const isHoveredRef = useRef(false);
  const memoizedParticles = useRef<HTMLDivElement[]>([]);
  const particlesInitialized = useRef(false);

  const initializeParticles = useCallback(() => {
    if (particlesInitialized.current || !cardRef.current) return;
    const { width, height } = cardRef.current.getBoundingClientRect();
    memoizedParticles.current = Array.from({ length: particleCount }, () =>
      createParticleElement(
        Math.random() * width,
        Math.random() * height,
        glowColor
      )
    );
    particlesInitialized.current = true;
  }, [particleCount, glowColor]);

  const clearAllParticles = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    particlesRef.current.forEach((particle) => {
      gsap.to(particle, {
        scale: 0,
        opacity: 0,
        duration: 0.3,
        ease: "back.in(1.7)",
        onComplete: () => {
          particle.parentNode?.removeChild(particle);
        },
      });
    });
    particlesRef.current = [];
  }, []);

  const animateParticles = useCallback(() => {
    if (!cardRef.current || !isHoveredRef.current) return;
    if (!particlesInitialized.current) {
      initializeParticles();
    }
    memoizedParticles.current.forEach((particle, index) => {
      const timeoutId = setTimeout(() => {
        if (!isHoveredRef.current || !cardRef.current) return;
        const clone = particle.cloneNode(true) as HTMLDivElement;
        cardRef.current.appendChild(clone);
        particlesRef.current.push(clone);
        gsap.fromTo(
          clone,
          { scale: 0, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.3, ease: "back.out(1.7)" }
        );
        gsap.to(clone, {
          x: (Math.random() - 0.5) * 100,
          y: (Math.random() - 0.5) * 100,
          rotation: Math.random() * 360,
          duration: 2 + Math.random() * 2,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
        gsap.to(clone, {
          opacity: 0.3,
          duration: 1.5,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });
      }, index * 100);
      timeoutsRef.current.push(timeoutId);
    });
  }, [initializeParticles]);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;
    const handleMouseEnter = () => {
      isHoveredRef.current = true;
      animateParticles();
    };
    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      clearAllParticles();
    };
    element.addEventListener("mouseenter", handleMouseEnter);
    element.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      isHoveredRef.current = false;
      element.removeEventListener("mouseenter", handleMouseEnter);
      element.removeEventListener("mouseleave", handleMouseLeave);
      clearAllParticles();
    };
  }, [animateParticles, clearAllParticles]);

  return (
    <div
      ref={cardRef}
      className={`${className} relative overflow-hidden`}
      style={{ ...style, position: "relative", overflow: "hidden" }}
    >
      {children}
    </div>
  );
};

const AboutMeBento: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A passionate Computer Science student specializing in AI/ML with expertise in developing intelligent solutions through academic research and innovative projects.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 bento-section">
          {expertise.map((card, idx) => (
            <ParticleCard
              key={idx}
              className="card flex flex-col justify-between aspect-[4/3] min-h-[180px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] card--border-glow bg-[#060010] border-[#392e4e] text-white"
              style={{}}
              particleCount={8}
              glowColor={DEFAULT_GLOW_COLOR}
            >
              <div className="flex items-center gap-3 mb-2">
                {card.icon && <card.icon className="w-6 h-6 text-purple-400" />}
                <span className="text-base font-semibold">{card.label}</span>
              </div>
              <div className="flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-1">{card.title}</h3>
                <p className="text-sm opacity-80">{card.description}</p>
              </div>
            </ParticleCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMeBento; 