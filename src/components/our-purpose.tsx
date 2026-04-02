const OurPurpose = () => {
  return (
    <section id="about" className="w-full bg-[#f5f5f5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-24">
        {/* Section tag */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <span className="inline-block px-4 py-1 border border-[#1F3C88]/30 text-[#1F3C88] text-xs font-semibold tracking-widest uppercase rounded-full">
            Our Purpose
          </span>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-gray-900 max-w-3xl leading-tight">
            Why Givinity Foundation Exists
          </h2>
        </div>

        {/* Purpose paragraphs */}
        <div className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg leading-relaxed space-y-5 text-center md:text-left">
          <p>
            Across the world, millions of people face challenges that limit
            their ability to live with dignity and opportunity.
          </p>
          <p>
            Young people struggle to navigate education and career choices.
            Underserved communities often lack access to reliable and affordable
            healthcare. At the same time, societies are becoming increasingly
            divided, weakening the sense of shared humanity.
          </p>
          <p className="font-semibold text-[#1F3C88]">
            Givinity Foundation was established with a simple belief:
          </p>
          <p className="italic text-gray-600 border-l-4 border-[#E5B84B] pl-4">
            When compassion, knowledge, and collaboration come together,
            meaningful change becomes possible.
          </p>
          <p>
            Our work focuses on building initiatives that help address these
            challenges and create pathways toward a more inclusive and
            harmonious future.
          </p>
        </div>

        {/* Stat highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {[
            {
              stat: 'Youth',
              label: 'Career & Education Guidance',
              color: '#1F3C88',
            },
            {
              stat: 'Healthcare',
              label: 'Access for Underserved Communities',
              color: '#2CA6A4',
            },
            {
              stat: 'Harmony',
              label: 'Shared Humanity Across Borders',
              color: '#E5B84B',
            },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col gap-2"
            >
              <p
                className="font-heading font-bold text-2xl"
                style={{ color: item.color }}
              >
                {item.stat}
              </p>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPurpose;
