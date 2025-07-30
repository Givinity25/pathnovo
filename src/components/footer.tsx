const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-6 max-w-6xl w-full md:pt-40 pt-20 pb-10 px-4">
        <p className="text-sm md:mb-6 italic">Get in touch</p>
        <p className="md:text-5xl text-3xl text-center">
          We’d Love to Hear from You
        </p>
        <p className="text-center md:text-base text-sm">
          We&apos;re here to assist you with any questions, support, or
          partnership inquiries – reach out to us today.
        </p>
        <button className="mt-6 px-10 py-3 bg-white text-black flex items-center justify-center gap-4 rounded-full">
          <span className="w-2 h-2 bg-black rounded-full" /> Contact Us
        </button>

        <div className="w-full h-[1px] bg-white/70 mt-8" />

        <div className="w-full flex md:flex-row flex-col items-center justify-between text-xs md:gap-0 gap-8">
          <div className="flex-col items-center justify-center flex gap-4">
            <p>Email: info@givinity.org</p>
            <p>Registered Office: 2, Madhuban, Delhi - 110092</p>
          </div>
          <p>© Givinity. All Rights Reserved. Licensing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
