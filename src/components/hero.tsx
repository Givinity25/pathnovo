'use client';
import Image from 'next/image';
import Link from 'next/link';
import GivinityLogo from './logo';
import { useIsMobile } from '@/hooks/useMediaQuery';
import { useEffect, useRef } from 'react';
import { googleFormURL } from '@/constants/links';

const Hero = () => {
  const isMobile = useIsMobile();
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isMobile || !scrollRef.current) return;

    const container = scrollRef.current;
    const children = container.children;
    let index = 0;

    const scrollInterval = setInterval(() => {
      if (!container) return;

      index = (index + 1) % children.length;
      const child = children[index] as HTMLElement;
      container.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth',
      });
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, [isMobile]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#ff5758] text-white relative">
      <div className="flex flex-col items-center justify-center md:gap-4 gap-8 max-w-7xl w-full px-4 relative md:min-h-[700px] min-h-auto md:pt-0 pt-40 md:pb-20">
        {/* Logo */}
        <div className="absolute top-3 md:top-5 md:left-5 left-0 md:right-auto right-0  flex items-center justify-center">
          <GivinityLogo />
        </div>
        {/* Divider for mobile only */}
        <hr className="absolute left-0 right-0 top-18 border-white/60 w-full mt-4 md:hidden" />
        <div className="relative">
          <div className="absolute -top-8 md:left-5 -left-3">
            <Image
              src="/hero/herotextasset.png"
              alt="Hero Text Asset"
              width={50}
              height={50}
            />
          </div>
          <h2 className="font-semibold md:text-5xl text-4xl leading-normal text-center max-w-3xl">
            Empowering Youth. Enabling Change. Healing the World.
          </h2>
        </div>
        <p className="text-center max-w-xl font-medium">
          You want to do good for the others. You want to give your best to the
          society, because ‘giving’ is the best form of divinity, and among its
          other benefits, giving liberates the soul of ‘giver.’
        </p>
        <div className="flex items-center justify-center md:gap-4 gap-2 relative">
          {[
            { label: '● Join Us', href: googleFormURL },
            { label: '● Volunteer', href: googleFormURL },
            { label: '● Contribute', href: '/contribute' },
          ].map((btn, idx) => (
            <Link
              key={btn.label}
              className="md:text-base text-sm hover:bg-white hover:text-accent border border-white rounded-full md:px-14 px-4 md:py-3 py-2 flex items-center justify-center gap-2 transition-all duration-200 hover:shadow-lg cursor-pointer"
              href={btn.href}
            >
              {btn.label}
            </Link>
          ))}
          <div className="md:block hidden absolute top-5 -right-20">
            <Image
              src="/hero/hero-right-image.png"
              alt="Hero Text Asset"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute top-5 -left-20">
            <Image
              src="/hero/hero-left-image.png"
              alt="Hero Text Asset"
              width={50}
              height={50}
            />
          </div>
        </div>
        {/* Hero Images */}
        <div
          ref={scrollRef}
          className="w-full flex gap-4 overflow-x-auto pb-4 md:absolute -bottom-40 left-0 right-0 md:justify-center justify-start snap-x snap-mandatory"
        >
          <div className="flex-shrink-0 md:w-64 w-full h-[330px] rounded-2xl overflow-hidden snap-center">
            <Image
              src="/hero/hero-left.png"
              alt="Medical volunteers"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 md:w-[400px] w-full h-[330px] rounded-2xl overflow-hidden snap-center">
            <Image
              src="/hero/hero-center.png"
              alt="Graduates celebrating"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 md:w-64 w-full h-[330px] rounded-2xl overflow-hidden snap-center">
            <Image
              src="/hero/hero-right.jpg"
              alt="Person in prayer"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
