import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const initiatives = [
  {
    logo: '/1EarthHarmony.png',
    emoji: '🌍',
    name: '1Earth Harmony',
    tagline: 'Global Harmony Initiative',
    description:
      'A global initiative that encourages moments of reflection, compassion, and shared humanity. It provides a space where people from different backgrounds can come together in silence, intention, and goodwill — beyond religion, nationality, or ideology.',
    cta: 'Visit 1Earth Harmony',
    href: 'https://www.1earthharmony.org',
    status: 'live',
    accent: '#2CA6A4',
  },
  {
    logo: '/cegy_logo.png',
    emoji: '🎓',
    name: 'CEGY',
    tagline: 'Career & Education Guidance for Youth',
    description:
      'An initiative dedicated to helping young people discover education pathways and career opportunities that align with their interests, abilities, and financial realities. Through guidance, mentorship, and accessible information, CEGY aims to empower youth to make informed life decisions.',
    cta: 'Explore CEGY',
    href: 'https://www.cegy.org',
    status: 'soon',
    accent: '#1F3C88',
  },
  {
    logo: '/medical_logo.png',
    emoji: '🏥',
    name: 'Medikal',
    tagline: 'Health Access & Support Platform',
    description:
      'An initiative focused on helping underserved communities access reliable healthcare services and receive support for critical medical needs. The program connects individuals with nearby healthcare options and facilitates transparent financial support when required.',
    cta: 'Learn More About Medikal',
    href: 'https://www.medikal.org/',
    status: 'progress',
    accent: '#E5B84B',
  },
];

const statusLabel: Record<string, string> = {
  live: 'Live',
  soon: 'Under testing — Launching soon',
  progress: 'Work in progress — Launching shortly',
};

const statusStyle: Record<string, string> = {
  live: 'bg-green-50 text-green-700 border-green-200',
  soon: 'bg-blue-50 text-blue-700 border-blue-200',
  progress: 'bg-amber-50 text-amber-700 border-amber-200',
};

const Initiatives = () => {
  return (
    <section id="initiatives" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-block px-4 py-1 border border-[#1F3C88]/30 text-[#1F3C88] text-xs font-semibold tracking-widest uppercase rounded-full">
            Our Initiatives
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 max-w-2xl leading-tight">
            Three Pillars of Impact
          </h2>
          <p className="text-gray-500 max-w-xl text-base">
            To address different human challenges, Givinity Foundation supports
            three key initiatives.
          </p>
        </div>

        {/* Initiative Cards */}
        <div className="flex flex-col gap-8">
          {initiatives.map((initiative, idx) => (
            <div
              key={initiative.name}
              className={`flex flex-col md:flex-row ${
                idx % 2 === 1 ? 'md:flex-row-reverse' : ''
              } gap-8 bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 shadow-sm`}
            >
              {/* Logo panel */}
              <div
                className="flex items-center justify-center md:w-56 w-full py-12 md:py-0 flex-shrink-0"
                style={{ backgroundColor: initiative.accent + '15' }}
              >
                <div className="relative w-30 h-30">
                  <Image
                    src={initiative.logo}
                    alt={initiative.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-4 p-6 md:p-8 flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-2xl">{initiative.emoji}</span>
                  <h3 className="font-heading font-bold text-2xl text-gray-900">
                    {initiative.name}
                  </h3>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full border ${statusStyle[initiative.status]}`}
                  >
                    {statusLabel[initiative.status]}
                  </span>
                </div>
                <p
                  className="text-sm font-semibold uppercase tracking-wider"
                  style={{ color: initiative.accent }}
                >
                  {initiative.tagline}
                </p>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {initiative.description}
                </p>
                <Link
                  href={initiative.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold hover:underline"
                  style={{ color: initiative.accent }}
                >
                  {initiative.cta}
                  <ExternalLink size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
