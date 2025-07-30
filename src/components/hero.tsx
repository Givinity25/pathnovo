import Image from 'next/image';

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-[#ff5758] text-white relative">
      <div className="flex flex-col items-center justify-center md:gap-4 gap-8 max-w-7xl w-full px-4 relative md:min-h-[600px] min-h-auto md:pt-0 pt-40">
        {/* Logo */}
        <div className="absolute top-5 left-5 md:right-auto right-0  flex items-center justify-center">
          <Image
            src="/logo.png"
            alt="Givinity Logo"
            width={50}
            height={50}
            className=" object-contain"
          />
        </div>
        {/* Divider for mobile only */}
        <hr className="absolute left-0 right-0 top-20 border-white w-full mt-4 md:hidden" />
        <div className="relative">
          <div className="absolute -top-8 left-5">
            <Image
              src="/hero/herotextasset.png"
              alt="Hero Text Asset"
              width={50}
              height={50}
            />
          </div>
          <h2 className="font-semibold md:text-5xl text-3xl text-center max-w-3xl">
            Helping Hand. Empowering Youth. Enabling Change.
          </h2>
        </div>
        <p className="text-center max-w-xl">
          Givinity Foundation is a non-profit organisation committed to building
          a better future by offering quality education, skill development, and
          healthcare access to the underprivileged. Registered in Delhi | A
          Section 8 Company under the Companies Act, 2013
        </p>
        <div className="flex items-center justify-center md:gap-4 gap-3 relative">
          <button className="bg-white text-accent rounded-full md:px-14 px-4 md:py-3 py-2 flex items-center justify-center gap-2">
            ● Donate Now
          </button>
          <button className="border border-white rounded-full md:px-14 px-4 md:py-3 py-2 flex items-center justify-center gap-2">
            ● Join Us
          </button>
          <button className="border border-white rounded-full md:px-14 px-4 md:py-3 py-2 flex items-center justify-center gap-2">
            ● Volunteer
          </button>
          <div className="md:block hidden absolute top-5 -right-20">
            <Image
              src="/hero-right-image.png"
              alt="Hero Text Asset"
              width={50}
              height={50}
            />
          </div>
          <div className="absolute top-5 -left-20">
            <Image
              src="/hero-left-image.png"
              alt="Hero Text Asset"
              width={50}
              height={50}
            />
          </div>
        </div>
        {/* Hero Images */}
        <div className="w-full flex gap-4 overflow-x-auto pb-4 md:absolute -bottom-40 left-0 right-0 md:justify-center justify-start snap-x snap-mandatory">
          <div className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden snap-center">
            <Image
              src="/HeroImage1.jpg"
              alt="Medical volunteers"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 w-[400px] h-64 rounded-2xl overflow-hidden snap-center">
            <Image
              src="/HeroImage2.jpg"
              alt="Graduates celebrating"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden snap-center">
            <Image
              src="/HeroImage1.jpg"
              alt="Person in prayer"
              width={256}
              height={256}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
