import Image from 'next/image';
import Link from 'next/link';

export default function ComingSoon() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#ff5758] text-white px-4">
      <div className="flex flex-col items-center justify-center gap-8 max-w-lg w-full py-16 rounded-2xl bg-white/10 shadow-lg">
        <Image
          src="/logo.png"
          alt="Givinity Logo"
          width={80}
          height={80}
          className="mb-2 object-contain"
        />
        <h1 className="text-4xl font-bold text-center drop-shadow-lg">
          Coming Soon
        </h1>
        <p className="text-center text-lg max-w-md text-white/90">
          This feature is under development and will be available soon.
          <br />
          Stay tuned for updates from Givinity Foundation!
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
          <Link href="/">
            <button className="bg-white text-accent font-semibold px-8 py-3 rounded-full shadow hover:scale-105 transition-all">
              ← Back to Home
            </button>
          </Link>
        </div>
        <div className="w-full flex justify-center mt-8">
          <hr className="border-white w-full opacity-30" />
        </div>
        <p className="text-xs text-white/60 mt-4">
          © {new Date().getFullYear()} Givinity Foundation
        </p>
      </div>
    </div>
  );
}
