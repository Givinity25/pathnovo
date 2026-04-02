import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id="contact" className="w-full bg-[#111827] text-white">
      {/* Contact CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-10">
        <div className="bg-gradient-to-r from-[#1F3C88] to-[#2CA6A4] rounded-3xl p-8 md:p-12 text-center flex flex-col items-center gap-5 mb-14">
          <p className="text-[#E5B84B] text-sm font-semibold tracking-widest uppercase">
            Contact Us
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl leading-tight">
            We&apos;d Love to Hear from You
          </h2>
          <p className="text-white/70 max-w-md text-sm">
            We&apos;re here to assist with questions, support, or partnership
            inquiries.
          </p>
          <a
            href="mailto:givinityfoundation@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-[#1F3C88] font-semibold px-8 py-3 rounded-full text-sm hover:bg-[#E5B84B] hover:text-white transition-colors duration-200"
          >
            <span className="w-2 h-2 bg-[#1F3C88] rounded-full" />
            Contact Us
          </a>
        </div>

        {/* Footer links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <Image
              src="/givinity_logo.png"
              alt="Givinity Foundation"
              width={48}
              height={48}
            />
            <p className="text-xs text-white/50 leading-relaxed">
              A registered Section 8 nonprofit organisation committed to
              healing the world.
            </p>
          </div>

          {/* Initiatives */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Initiatives
            </p>
            {['1Earth Harmony', 'CEGY', 'Medikal'].map((name) => (
              <Link
                key={name}
                href="#initiatives"
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Foundation */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Foundation
            </p>
            {['About', 'Governance', 'Transparency'].map((name) => (
              <Link
                key={name}
                href={`#${name.toLowerCase()}`}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Contact
            </p>
            <a
              href="mailto:givinityfoundation@gmail.com"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              givinityfoundation@gmail.com
            </a>
            <p className="text-sm text-white/70">
              2, Madhuban, Delhi - 110092
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-xs text-white/40">
          <div className="flex flex-col md:flex-row md:gap-4 gap-1 text-center md:text-left">
            <p>Givinity Foundation</p>
            <p>CIN 88900DL2025NPL451393</p>
          </div>
          <p>© {new Date().getFullYear()} Givinity. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
