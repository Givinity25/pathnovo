const sectors = ['NGOs', 'Universities', 'CSR', 'Healthcare', 'Technology'];

const Partnerships = () => {
  return (
    <section id="transparency" className="w-full bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-20">
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-10">
          <span className="inline-block px-4 py-1 border border-[#1F3C88]/30 text-[#1F3C88] text-xs font-semibold tracking-widest uppercase rounded-full">
            Partnerships
          </span>
          <h2 className="font-heading font-semibold text-2xl md:text-3xl text-gray-900">
            We Collaborate with Institutions Across Sectors
          </h2>
        </div>

        {/* Sector pills */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          {sectors.map((sector) => (
            <div
              key={sector}
              className="px-8 py-4 rounded-2xl border-2 border-[#1F3C88]/15 text-[#1F3C88] font-heading font-semibold text-sm md:text-base bg-[#EEF1FB] hover:bg-[#1F3C88] hover:text-white transition-colors duration-200 cursor-default"
            >
              {sector}
            </div>
          ))}
        </div>

        {/* Future logos placeholder */}
        <p className="text-center text-gray-400 text-xs mt-8 italic">
          Partner logos will appear here as collaborations grow.
        </p>
      </div>
    </section>
  );
};

export default Partnerships;
