"use client";
import { useRef, useEffect } from "react";

export default function AnimatedWavesBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // -15 to 15 deg
      const y = (e.clientY / innerHeight - 0.5) * 30;
      ref.current.style.setProperty("--rotateX", `${y}deg`);
      ref.current.style.setProperty("--rotateY", `${-x}deg`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 -z-10 overflow-hidden"
      style={{
        perspective: "1200px",
        transition: "background 0.5s",
        willChange: "transform",
        transform: "rotateX(var(--rotateX,0deg)) rotateY(var(--rotateY,0deg))",
      }}
    >
      <div className="absolute inset-0 animate-gradientWave bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 opacity-60" style={{ backgroundSize: "200% 200%" }} />
      <div className="absolute inset-0 animate-gradientWave2 bg-gradient-to-br from-indigo-500 via-sky-400 to-emerald-400 opacity-40" style={{ backgroundSize: "200% 200%" }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "radial-gradient(rgba(59,130,246,0.08) 1.5px, transparent 1.5px)",
        backgroundSize: "32px 32px"
      }} />
      <style>{`
        @keyframes gradientWave {
          0%, 100% { background-position: left top; }
          50% { background-position: right bottom; }
        }
        @keyframes gradientWave2 {
          0%, 100% { background-position: right top; }
          50% { background-position: left bottom; }
        }
        .animate-gradientWave {
          animation: gradientWave 12s ease-in-out infinite;
        }
        .animate-gradientWave2 {
          animation: gradientWave2 16s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}