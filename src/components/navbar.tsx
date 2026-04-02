'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Initiatives', href: '#initiatives' },
  { label: 'Impact', href: '#impact' },
  { label: 'Get Involved', href: '#get-involved' },
  { label: 'Transparency', href: '#transparency' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/givinity_logo.png"
            alt="Givinity Foundation"
            width={50}
            height={50}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-gray-700 hover:text-[#1F3C88] font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contribute"
            className="hidden md:inline-flex items-center gap-2 bg-[#1F3C88] hover:bg-[#162d6a] text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors duration-200"
          >
            Contribute
          </Link>
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-2 text-sm text-gray-700 hover:text-[#1F3C88] font-medium rounded-lg hover:bg-gray-50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contribute"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#1F3C88] text-white text-sm font-semibold px-5 py-2.5 rounded-full"
            >
              Contribute
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
