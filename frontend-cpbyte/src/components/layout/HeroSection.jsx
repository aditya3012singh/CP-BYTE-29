import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Button from '../common/Button';

const HeroSection = () => {
  const heroRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const buttonsRef = useRef(null);

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
        );

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={heroRef}
      className="relative flex flex-col items-center justify-center min-h-[90vh] text-white selection:bg-cyan-500/30 font-sans pt-32 pb-8 overflow-hidden"
    >
      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-4xl mx-auto w-full">

        {/* Label */}
        <div
          ref={labelRef}
          className="mb-8 text-brand-accent text-[10px] sm:text-xs font-semibold tracking-[0.4em] uppercase"
        >
          Established 2023
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="text-[clamp(2rem,8.5vw,3rem)] sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-8 uppercase text-white"
        >
          <span className="block mb-2 md:mb-1">
            CPBYTE<span className="text-brand-accent">:</span>
          </span>
          <span className="block mt-2 whitespace-nowrap">
            The Technical <span className="font-light italic text-transparent inline" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Core</span>
          </span>
        </h1>

        {/* Description */}
        <p
          ref={descRef}
          className="text-gray-300/80 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-12 font-light"
        >
          Engineering the next-generation of digital monoliths. We are a collective of developers, designers, and tech-enthusiasts pushing the boundaries of the digital frontier.
        </p>

        {/* CTA Buttons */}
        <div ref={buttonsRef} className="flex flex-row justify-center items-center gap-4 sm:gap-6 w-full mb-20 z-10">
          <Button variant="primary" className="px-6 sm:px-10 py-3.5 text-xs sm:text-sm">
            EXPLORE PORTAL
          </Button>

          <Button variant="outline" className="px-6 sm:px-10 py-3.5 text-xs sm:text-sm">
            VIEW MANIFEST
          </Button>
        </div>



      </div>
    </div>
  );
};

export default HeroSection;

