import React, { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';

/**
 * StarField — Reusable cosmic / space-themed particle background.
 *
 * Drop this into ANY section to get the signature CPBYTE floating-star effect.
 * It renders as an absolutely-positioned layer (z-0) so just place your
 * content as a sibling with `relative z-10`.
 *
 * Props:
 *   particleCount  — number of stars (default 40)
 *   className      — extra classes for the container
 */
const StarField = ({ particleCount = 40, className = '' }) => {
  const containerRef = useRef(null);

  // Memoize particles so they don't regenerate on every render
  const particles = useMemo(() =>
    Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 3 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      opacity: Math.random() * 0.4 + 0.1,
    })),
    [particleCount]
  );

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const els = containerRef.current.querySelectorAll('.particle');
      els.forEach((p) => {
        gsap.to(p, {
          y: `random(-120, 120)`,
          x: `random(-120, 120)`,
          opacity: `random(0.2, 0.8)`,
          duration: gsap.utils.random(10, 18),
          delay: gsap.utils.random(0, 5),
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [particleCount]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Soft centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-cyan-900/10 rounded-full blur-[150px] opacity-40 mix-blend-screen" />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle absolute rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(6,182,212,0.4)]"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            top: p.top,
            left: p.left,
            opacity: p.opacity,
          }}
        />
      ))}
    </div>
  );
};

export default StarField;
