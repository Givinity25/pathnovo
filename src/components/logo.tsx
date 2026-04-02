import Image from 'next/image';

const GivinityLogo = () => {
  return (
    <div>
      <Image
        src="/givinity_logo.png"
        alt="Givinity Logo"
        width={80}
        height={80}
        // className=" md:w-[58px] md:h-[58px]"
      />
      {/* <h1 className="mt-2 uppercase font-bold text-xs md:text-sm">Givinity</h1> */}
    </div>
  );
};

export default GivinityLogo;
