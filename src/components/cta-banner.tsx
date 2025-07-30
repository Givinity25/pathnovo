export default function CallToActionBanner() {
  return (
    <div className="w-full flex items-center justify-center">
      <section className="px-4 py-12 max-w-7xl w-full">
        <div
          className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[320px] flex items-center"
          style={{ backgroundImage: "url('/cta-banner.jpg')" }}
        >
          <div className="bg-white/90 rounded-2xl p-6 md:p-10 m-6 md:max-w-md shadow-md">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us in Making <br /> a Difference
            </h2>
            <p className="text-gray-600 mb-6">
              We help thousands of children, arrange food & build houses for
              them.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-6 py-2 rounded-full font-medium">
              ● Donate Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
