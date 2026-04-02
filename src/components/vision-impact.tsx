const aspirations = [
  'Young people can pursue meaningful careers',
  'Healthcare is more accessible to underserved communities',
  'Individuals feel connected through shared humanity and compassion',
];

const VisionImpact = () => {
  return (
    <section id="impact" className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Vision */}
          <div className="flex-1 flex flex-col gap-6">
            <span className="inline-block px-4 py-1 border border-[#1F3C88]/30 text-[#1F3C88] text-xs font-semibold tracking-widest uppercase rounded-full w-fit">
              Our Vision for Impact
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-gray-900 leading-tight">
              A World of Greater Opportunity and Understanding
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Through our initiatives, we aspire to contribute to a world where:
            </p>
            <ul className="flex flex-col gap-4">
              {aspirations.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 flex-shrink-0 rounded-full bg-[#2CA6A4]/20 flex items-center justify-center">
                    <span className="w-2 h-2 rounded-full bg-[#2CA6A4]" />
                  </span>
                  <p className="text-gray-700 text-sm md:text-base">{item}</p>
                </li>
              ))}
            </ul>
            <p className="text-gray-500 text-sm italic mt-2">
              While these challenges are complex, every step toward greater
              opportunity and understanding matters.
            </p>
          </div>

          {/* Right: Closing message */}
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-gradient-to-br from-[#1F3C88] to-[#2CA6A4] rounded-3xl p-8 md:p-10 text-white flex flex-col gap-5">
              <p className="font-heading font-semibold text-xl leading-snug">
                A more compassionate world is built through small but meaningful
                actions.
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                Givinity Foundation remains committed to supporting initiatives
                that help expand opportunity, improve wellbeing, and strengthen
                our shared humanity.
              </p>
              <div className="h-px w-full bg-white/20" />
              <p className="text-[#E5B84B] text-xs font-semibold uppercase tracking-widest">
                Givinity Foundation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionImpact;
