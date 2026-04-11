import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import StarField from '../common/StarField';

gsap.registerPlugin(ScrollTrigger);

const foundersData = [
  { id: 1, name: 'ALEX CHEN', role: 'SYSTEMS ARCHITECT', image: 'https://i.pravatar.cc/400?img=11', linkedin: '#', github: '#' },
  { id: 2, name: 'SARAH VOSS', role: 'DESIGN DIRECTOR', image: 'https://i.pravatar.cc/400?img=5', linkedin: '#', github: '#' },
  { id: 3, name: 'MARCUS REID', role: 'LEAD DEVELOPER', image: 'https://i.pravatar.cc/400?img=12', linkedin: '#', github: '#' },
  { id: 4, name: 'ELENA DIAZ', role: 'CLOUD OPERATIONS', image: 'https://i.pravatar.cc/400?img=9', linkedin: '#', github: '#' },
  { id: 5, name: 'DAVID KIM', role: 'AI ENGINEER', image: 'https://i.pravatar.cc/400?img=13', linkedin: '#', github: '#' },
  { id: 6, name: 'JULIA RUST', role: 'SECURITY LEAD', image: 'https://i.pravatar.cc/400?img=20', linkedin: '#', github: '#' },
  { id: 7, name: 'OMAR HASSAN', role: 'BACKEND LEAD', image: 'https://i.pravatar.cc/400?img=15', linkedin: '#', github: '#' },
  { id: 8, name: 'TINA FEY', role: 'FRONTEND LEAD', image: 'https://i.pravatar.cc/400?img=16', linkedin: '#', github: '#' },
  { id: 9, name: 'JAMES PARK', role: 'PRODUCT MANAGER', image: 'https://i.pravatar.cc/400?img=8', linkedin: '#', github: '#' },
];

const CoreFounders = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);

  // Responsive particle count — fewer + less movement on mobile
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!trackRef.current) return;

    // ── Carousel auto-scroll ──────────────────────────────────────────
    const scrollDuration = isMobile ? 20 : 35;
    tweenRef.current = gsap.to(trackRef.current, {
      xPercent: -50,
      ease: 'none',
      duration: scrollDuration,
      repeat: -1,
      paused: true,
    });

    let playTimeout;

    ScrollTrigger.create({
      trigger: trackRef.current,
      start: 'top 85%',
      end: 'bottom 15%',
      onEnter: () => {
        clearTimeout(playTimeout);
        playTimeout = setTimeout(() => tweenRef.current.play(), 200);
      },
      onEnterBack: () => {
        clearTimeout(playTimeout);
        playTimeout = setTimeout(() => tweenRef.current.play(), 200);
      },
      onLeave: () => {
        clearTimeout(playTimeout);
        tweenRef.current.pause();
      },
      onLeaveBack: () => {
        clearTimeout(playTimeout);
        tweenRef.current.pause();
      },
    });

    // ── Title entrance animation ──────────────────────────────────────
    const titleChildren = titleRef.current?.querySelectorAll('.title-anim');
    gsap.set(titleChildren, { y: 40, opacity: 0 });
    gsap.set(underlineRef.current, { scaleX: 0, opacity: 0 });

    ScrollTrigger.create({
      trigger: titleRef.current,
      start: 'top 88%',
      onEnter: () => {
        gsap.to(titleChildren, {
          y: 0, opacity: 1, duration: 0.9,
          stagger: 0.15, ease: 'power3.out',
        });
        gsap.to(underlineRef.current, {
          scaleX: 1, opacity: 1, duration: 0.8,
          delay: 0.4, ease: 'power3.out', transformOrigin: 'left center',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tweenRef.current?.kill();
    };
  }, [isMobile]);

  const handleMouseEnter = () =>
    tweenRef.current && gsap.to(tweenRef.current, { timeScale: 0, duration: 0.5 });
  const handleMouseLeave = () =>
    tweenRef.current && gsap.to(tweenRef.current, { timeScale: 1, duration: 0.5 });

  return (
    <section
      ref={containerRef}
      className="relative w-full pt-8 pb-24 bg-transparent overflow-hidden"
    >
      {/* ── Section Title ────────────────────────────────────────────── */}
      <div ref={titleRef} className="max-w-7xl mx-auto px-6 mb-14 relative z-20">

        {/* Label above */}
        <p className="title-anim text-[10px] tracking-[0.4em] uppercase text-[#00e5ff]/60 font-semibold mb-3">
          The People Behind It
        </p>

        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-widest uppercase flex flex-wrap gap-x-3 items-baseline">
          <span className="title-anim text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">CORE</span>
          <span className="title-anim text-[#00e5ff] drop-shadow-[0_0_20px_rgba(0,229,255,0.45)]">FOUNDERS</span>
        </h2>

        {/* Animated underline bar + full-width gradient rule */}
        <div className="mt-4 flex items-center gap-4">
          <div
            ref={underlineRef}
            className="h-[3px] w-20 bg-gradient-to-r from-[#00e5ff] to-cyan-300 rounded-full shadow-[0_0_10px_rgba(0,229,255,0.6)]"
          />
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#00e5ff]/20 to-transparent" />
        </div>
      </div>

      {/* ── Carousel Band ────────────────────────────────────────────── */}
      <div className="relative w-full">

        {/* Local StarField — fewer & slower on mobile */}
        <StarField
          particleCount={isMobile ? 20 : 55}
          moveRange={isMobile ? 60 : 180}
          durationRange={isMobile ? [14, 22] : [6, 14]}
          className="z-[1]"
        />

        {/* Translucent dark band */}
        <div
          className="absolute inset-y-0 left-0 right-0 border-y border-[#00e5ff]/25 z-[2] pointer-events-none"
          style={{ background: 'rgba(13, 20, 32, 0.55)' }}
        />
        {/* Cyan accent lines */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent z-[3] pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00e5ff]/60 to-transparent z-[3] pointer-events-none" />

        {/* Left/Right fade overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-r from-brand-dark to-transparent z-[4] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-56 bg-gradient-to-l from-brand-dark to-transparent z-[4] pointer-events-none" />

        {/* Carousel track */}
        <div
          className="relative z-[5] w-full overflow-visible"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={trackRef}
            className="flex gap-6 w-max items-start px-8 py-5"
            style={{ willChange: 'transform' }}
          >
            {[...foundersData, ...foundersData].map((founder, index) => (
              <div
                key={`${founder.id}-${index}`}
                style={{ willChange: 'transform' }}
                className="
                  group relative w-[150px] md:w-[190px] flex-shrink-0
                  rounded-2xl overflow-hidden p-3
                  bg-[#0f141e] border border-white/10
                  transition-all duration-500
                  hover:scale-[1.04] hover:-translate-y-2
                  hover:border-[#00e5ff]/50
                  hover:shadow-[0_0_30px_-5px_rgba(0,229,255,0.35)]
                  cursor-pointer
                "
              >
                {/* Image */}
                <div className="relative overflow-hidden w-full aspect-square rounded-xl mb-3">
                  {/* Top accent sweep */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00e5ff] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover filter grayscale opacity-75
                               group-hover:opacity-100 group-hover:grayscale-0
                               transition-all duration-700 ease-in-out
                               scale-105 group-hover:scale-100"
                  />

                  {/* Bottom gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-0" />
                </div>

                {/* Name + Role + Icons */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col items-start min-w-0">
                    <h3 className="text-white font-bold text-[11px] md:text-sm tracking-wider group-hover:text-[#00e5ff] transition-colors duration-300 uppercase truncate w-full">
                      {founder.name}
                    </h3>
                    <p className="text-[#00e5ff]/80 text-[8px] md:text-[9px] font-semibold tracking-[0.15em] mt-1 uppercase truncate w-full">
                      {founder.role}
                    </p>
                  </div>

                  <div className="flex flex-col items-center gap-1.5 pt-0.5 flex-shrink-0">
                    <a
                      href={founder.linkedin}
                      target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-gray-500 hover:text-[#0A66C2] transition-colors duration-200"
                      title="LinkedIn"
                    >
                      <FaLinkedin size={13} />
                    </a>
                    <a
                      href={founder.github}
                      target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      className="text-gray-500 hover:text-white transition-colors duration-200"
                      title="GitHub"
                    >
                      <FaGithub size={13} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreFounders;
