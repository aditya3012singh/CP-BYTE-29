import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';
import StarField from '../common/StarField';

const HeroSection = () => {
  const heroRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Entrance Animations
      tl.fromTo(labelRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(headingRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(descRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
          '-=0.6'
        )
        .fromTo(buttonsRef.current.children,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        )
        .fromTo(scrollRef.current,
          { opacity: 0, y: -10 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out' },
          '-=0.2'
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex flex-col items-center justify-center bg-brand-dark text-white selection:bg-cyan-500/30 font-sans pt-24 pb-16 border-b border-gray-900 overflow-hidden"
    >
      {/* Shared cosmic background */}
      <StarField />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full">

        {/* Label */}
        <div
          ref={labelRef}
          className="mb-6 text-brand-accent text-[9px] sm:text-[10px] font-semibold tracking-[0.4em] uppercase"
        >
          Established 2023
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] mb-6 uppercase text-white"
        >
          <span className="block mb-2 md:mb-1">
            CPBYTE<span className="text-brand-accent">:</span>
          </span>
          <span className="block mt-2">
            The Technical <span className="font-light italic text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Core</span>
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-gray-300/80 text-xs md:text-sm max-w-xl leading-relaxed mb-10 font-light"
        >
          Engineering the next-generation of digital monoliths. We are a collective of developers, designers, and tech-enthusiasts pushing the boundaries of the digital frontier.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-row justify-center items-center gap-3 sm:gap-6 w-full mb-16 z-10">
          <Button variant="primary" className="px-4 sm:px-8 py-3 text-[10px] sm:text-xs">
            EXPLORE PORTAL
          </Button>

          <Button variant="outline" className="px-4 sm:px-8 py-3 text-[10px] sm:text-xs">
            VIEW MANIFEST
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollRef} className="flex flex-col items-center gap-3 mt-6">
          <span className="text-[8px] sm:text-[9px] tracking-[0.2em] font-medium uppercase text-gray-500">SCROLL TO INITIALIZE</span>
          <div className="w-[1px] h-8 sm:h-10 bg-gradient-to-b from-gray-700 to-transparent"></div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

