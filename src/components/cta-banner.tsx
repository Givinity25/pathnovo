import Link from 'next/link';

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
            <div className="flex items-start">
              <Link
                href="/coming-soon"
                className="px-10 py-3 bg-accent hover:bg-red-500 transition-colors text-white hidden md:flex items-center justify-center gap-4 rounded-full mr-auto"
              >
                <span className="w-2 h-2 bg-white rounded-full" /> Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
