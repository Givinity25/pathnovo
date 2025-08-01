import { googleFormURL } from '@/constants/links';
import Link from 'next/link';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 bg-black text-white">
      <div className="flex flex-col items-center justify-center gap-6 max-w-6xl w-full md:pt-40 pt-20 pb-10 px-4">
        <p className="md:mb-6 font-petrona italic">Get in touch</p>
        <p className="md:text-5xl text-3xl text-center">
          We&apos;d Love to Hear from You
        </p>
        <p className="text-center md:text-base text-sm">
          We&apos;re here to assist you with any questions, support, or
          partnership inquiries – reach out to us today.
        </p>
        <Link
          href={googleFormURL}
          className="mt-6 px-10 py-3 bg-white text-black flex items-center justify-center gap-4 rounded-full cursor-pointer"
        >
          <span className="w-2 h-2 bg-black rounded-full" /> Contact Us
        </Link>

        <div className="w-full h-[1px] bg-white/70 mt-8 md:block hidden" />

        <div className="w-full flex md:flex-row flex-col md:items-end items-center justify-between text-xs md:gap-0 gap-8">
          <div className="flex-col md:items-start items-center justify-center flex gap-1">
            <p className="font-semibold">Givinity Foundation</p>
            <p>CIN 88900DL2025NPL451393</p>
            <p>Registered Office: 2, Madhuban, Delhi - 110092</p>
            <p>Email: mail@givinity.org</p>
          </div>
          <p>© Givinity. All Rights Reserved. Licensing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
