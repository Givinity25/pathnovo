import { ChartPie, Compass, Eye } from 'lucide-react';
import Image from 'next/image';

const AboutUs = () => {
  const divStyle = {
    backgroundImage: `url('/aboutus-bg.png')`, // Assuming image is in public/images
    backgroundSize: 'cover',
    // height: '400px',
  };

  return (
    <div
      style={divStyle}
      className="w-full flex flex-col items-center justify-center md:mt-[200px] bg-gray-100 py-20"
    >
      <div className="flex flex-col items-center justify-center gap-4 max-w-6xl w-full px-4">
        <div className="w-full flex md:justify-start justify-center">
          <p className="border border-gray-600 px-4 py-2 rounded-full">
            About Us
          </p>
        </div>
        <div className="flex md:flex-row flex-col items-start justify-center md:gap-10 gap-5 w-full">
          <p className="w-full font-semibold md:text-4xl text-3xl md:text-left text-center">
            Uplifting Lives with Learning, Healing, and Support
          </p>
          <p className="w-full text-sm md:text-left text-center">
            Givinity Foundation was established in 2025 with the vision to
            create harmony and peace across the globe through hands – praying
            and helping. bridge educational, skill, and healthcare gaps in
            India. Founded by passionate changemakers, the organisation works to
            uplift youth and disadvantaged individuals through free or
            subsidised learning, mentoring, and access to wellness services.
          </p>
        </div>

        <div className="mt-10 bg-white  rounded-xl p-2 flex items-center justify-center gap-4 md:max-w-[600px] w-full">
          <button className="bg-accent text-white w-full rounded-xl py-2 px-2 flex items-center justify-start gap-2 text-sm">
            <Compass color="white" width={16} height={16} />
            <p>Our Mission</p>
          </button>
          <button className="w-full rounded-xl py-1 flex items-center justify-start gap-2 text-sm">
            <Eye width={16} height={16} />
            Our Visions
          </button>
          <button className="w-full rounded-xl py-1 flex items-center justify-start gap-2 text-sm">
            <ChartPie width={16} height={16} />
            Our Goals
          </button>
        </div>

        <div className="flex md:flex-row flex-col items-center justify-center w-full bg-white rounded-xl shadow p-6">
          <div className="flex flex-col md:items-start items-center md:justify-start justify-center gap-8 flex-1/2">
            <p className="text-3xl font-semibold">Our Mission</p>
            <p>
              To create peace and harmony in the lives of people through mass
              prayers and helping hands, including empower the youth, especially
              underserved and economically challenged, and communities through
              inclusive higher education, skill development, and healthcare
              support—enabling them to lead self-reliant, dignified, and
              meaningful lives.
            </p>
            <div className="md:w-60 w-full md:mb-0 mb-5 h-[1px] bg-gray-400"></div>
          </div>

          <div
            style={{ backgroundImage: "url('/ourmissionbg.png')" }}
            className="flex-1/2 flex items-center justify-end"
          >
            <div className="bg-accent py-8 px-10 rounded-2xl">
              <div className="bg-white p-2 rounded-2xl">
                <div className="relative flex-shrink-0 w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-2xl overflow-hidden">
                  <Image
                    src="/about-us.jpg"
                    alt="About Us"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
