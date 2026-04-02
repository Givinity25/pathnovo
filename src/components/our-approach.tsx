import { Heart, Lightbulb, Users } from 'lucide-react';

const pillars = [
  {
    icon: Heart,
    title: 'Humanity at the Center',
    description:
      'Every initiative we support is guided by a commitment to improving human wellbeing and dignity.',
    color: '#1F3C88',
    bg: '#EEF1FB',
  },
  {
    icon: Lightbulb,
    title: 'Expanding Opportunity',
    description:
      'We focus on practical solutions that help people gain access to education, healthcare, and supportive communities.',
    color: '#2CA6A4',
    bg: '#EAF7F7',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description:
      'Lasting impact requires collaboration between communities, institutions, and partners. We actively work with organizations that share our commitment to positive change.',
    color: '#E5B84B',
    bg: '#FDF7E8',
  },
];

const OurApproach = () => {
  return (
    <section className="w-full bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-14">
          <span className="inline-block px-4 py-1 border border-[#1F3C88]/30 text-[#1F3C88] text-xs font-semibold tracking-widest uppercase rounded-full">
            Our Approach
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 max-w-2xl leading-tight">
            How We Create Change
          </h2>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl p-8 flex flex-col gap-4"
                style={{ backgroundColor: pillar.bg }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: pillar.color + '20' }}
                >
                  <Icon
                    size={22}
                    style={{ color: pillar.color }}
                    strokeWidth={2}
                  />
                </div>
                <h3
                  className="font-heading font-semibold text-xl"
                  style={{ color: pillar.color }}
                >
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
