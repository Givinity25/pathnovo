import { googleFormURL } from '@/constants/links';
import AccentButton from './ui/accent-button';

export default function CallToActionBanner() {
  return (
    <div className="w-full flex items-center justify-center">
      <section className="px-4 py-12 max-w-6xl w-full">
        <div
          className="relative rounded-3xl overflow-hidden bg-cover bg-center min-h-[320px] flex items-center"
          style={{ backgroundImage: "url('/banner/cta-banner.jpg')" }}
        >
          <div className="bg-white/90 rounded-2xl p-6 md:p-10 m-6 md:max-w-md shadow-md">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Join Us in Making <br /> a Difference
            </h2>
            <p className="text-gray-600 mb-6">
              We help thousands of children, arrange food & build houses for
              them.
            </p>
            <div className="flex items-start">
              <AccentButton href={googleFormURL}>Contribute Now</AccentButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
