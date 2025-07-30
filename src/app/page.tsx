import AboutUs from '@/components/about-us';
import CallToActionBanner from '@/components/cta-banner';
import FocusAreas from '@/components/focus-areas';
import Footer from '@/components/footer';
import GetInvolved from '@/components/get-involved';
import Hero from '@/components/hero';
import Objective from '@/components/objective';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <AboutUs />
      <Objective />
      <FocusAreas />
      <GetInvolved />
      <CallToActionBanner />
      <Footer />
    </div>
  );
}
