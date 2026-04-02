'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/useMediaQuery';
import Image from 'next/image';

const Hero = () => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;
    const container = scrollRef.current;
    const children = container.children;
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % children.length;
      const child = children[index] as HTMLElement;
      container.scrollTo({ left: child.offsetLeft, behavior: 'smooth' });
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile]);

  return (
    <section className="w-full bg-gradient-to-br from-[#1F3C88] via-[#1a3478] to-[#2CA6A4] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center gap-6 py-20  text-center">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 text-[#E5B84B] text-sm font-semibold tracking-widest uppercase">
          <span className="w-6 h-px bg-[#E5B84B]" />
          Givinity Foundation
          <span className="w-6 h-px bg-[#E5B84B]" />
        </span>

        {/* Headline */}
        <h1 className="font-heading font-bold text-4xl md:text-6xl leading-tight max-w-4xl">
          Humanity at Work
        </h1>

        {/* Sub-headline */}
        <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
          Givinity Foundation is working to address critical human challenges —
          global harmony, youth opportunity, and healthcare access.
          <br className="hidden md:block" />
          Through thoughtful initiatives and collaborative efforts, we seek to
          expand opportunity, improve wellbeing, and strengthen the bonds that
          connect humanity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            href="#initiatives"
            className="inline-flex items-center gap-2 bg-[#E5B84B] hover:bg-[#d4a73a] text-[#1F3C88] font-semibold px-8 py-3 rounded-full transition-colors duration-200 text-sm md:text-base"
          >
            Explore Our Initiatives
          </Link>
          <Link
            href="#get-involved"
            className="inline-flex items-center gap-2 border-2 border-white/70 hover:border-white text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-full transition-all duration-200 text-sm md:text-base"
          >
            Partner With Us
          </Link>
        </div>

        {/* Hero Images */}
        <div
          ref={scrollRef}
          className="w-full flex gap-4 overflow-x-auto pb-2 mt-8 md:justify-center justify-start snap-x snap-mandatory scrollbar-hide"
        >
          <div className="flex-shrink-0 md:w-64 w-full h-[280px] rounded-2xl overflow-hidden snap-center">
            <Image
              src="/hero/hero-left.png"
              alt="Medical volunteers"
              width={256}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 md:w-[400px] w-full h-[280px] rounded-2xl overflow-hidden snap-center">
            <Image
              src="/hero/hero-center.png"
              alt="Graduates celebrating"
              width={400}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 md:w-64 w-full h-[280px] rounded-2xl overflow-hidden snap-center">
            <Image
              src="/hero/hero-right.jpg"
              alt="Community support"
              width={256}
              height={280}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
