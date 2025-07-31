import Image from 'next/image';

const GivinityLogo = () => {
  return (
    <div>
      <Image
        src="/logo.png"
        alt="Givinity Logo"
        width={58}
        height={58}
        className="w-10 h-10 md:w-[58px] md:h-[58px]"
      />
      <h1 className="mt-2 uppercase font-bold text-xs md:text-sm">Givinity</h1>
    </div>
  );
};

export default GivinityLogo;
