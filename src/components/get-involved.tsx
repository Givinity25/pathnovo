import Link from 'next/link';
import { HandHeart, GraduationCap, HeartPulse, Handshake, DollarSign } from 'lucide-react';
import { googleFormURL } from '@/constants/links';

const ways = [
  {
    icon: HandHeart,
    title: 'Volunteer',
    description: 'Offer your time or expertise to support our programs and community outreach.',
    href: googleFormURL,
    color: '#1F3C88',
    bg: '#EEF1FB',
  },
  {
    icon: GraduationCap,
    title: 'Mentor Young People',
    description: 'Guide youth through education and career decisions that shape their future.',
    href: googleFormURL,
    color: '#2CA6A4',
    bg: '#EAF7F7',
  },
  {
    icon: HeartPulse,
    title: 'Support Healthcare Access',
    description: 'Help underserved communities reach reliable and affordable healthcare services.',
    href: googleFormURL,
    color: '#E5B84B',
    bg: '#FDF7E8',
  },
  {
    icon: Handshake,
    title: 'Collaborate',
    description: 'Partner on programs and research as an NGO, university, CSR team, or institution.',
    href: googleFormURL,
    color: '#1F3C88',
    bg: '#EEF1FB',
  },
  {
    icon: DollarSign,
    title: 'Fund Initiatives',
    description: 'Support initiatives that expand social impact through education, healthcare, and harmony.',
    href: '/contribute',
    color: '#2CA6A4',
    bg: '#EAF7F7',
  },
];

const GetInvolved = () => {
  return (
    <section id="get-involved" className="w-full bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3">
            <span className="inline-block px-4 py-1 border border-[#1F3C88]/30 text-[#1F3C88] text-xs font-semibold tracking-widest uppercase rounded-full w-fit">
              Get Involved
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 leading-tight max-w-xs">
              Work With Us
            </h2>
          </div>
          <p className="text-gray-600 max-w-lg text-sm md:text-base leading-relaxed">
            Meaningful change happens when people work together. Individuals,
            institutions, and organizations can contribute in several ways.
          </p>
        </div>

        {/* Ways grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ways.map((way) => {
            const Icon = way.icon;
            return (
              <Link
                key={way.title}
                href={way.href}
                className="group flex flex-col gap-4 p-6 rounded-2xl border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: way.bg }}
                >
                  <Icon size={20} style={{ color: way.color }} strokeWidth={2} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-semibold text-gray-900 text-base group-hover:text-[#1F3C88] transition-colors">
                    {way.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {way.description}
                  </p>
                </div>
                <span
                  className="text-xs font-semibold mt-auto"
                  style={{ color: way.color }}
                >
                  Learn more →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
