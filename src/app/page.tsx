import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import OurPurpose from '@/components/our-purpose';
import Initiatives from '@/components/initiatives';
import OurApproach from '@/components/our-approach';
import VisionImpact from '@/components/vision-impact';
import GetInvolved from '@/components/get-involved';
import Partnerships from '@/components/partnerships';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="w-full h-full">
      <Navbar />
      <Hero />
      <OurPurpose />
      <Initiatives />
      <OurApproach />
      <VisionImpact />
      <GetInvolved />
      <Partnerships />
      <Footer />
    </div>
  );
}
