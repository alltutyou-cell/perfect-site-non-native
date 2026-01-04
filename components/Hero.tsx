
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 px-4 max-w-6xl mx-auto text-center md:text-left">
      <div className="mb-6">
        <div className="slanted-badge bg-[#FF4A22] text-white sticker-shadow mb-2">
          VIETNAM EDITION 2026
        </div>
      </div>

      <h1 className="text-6xl md:text-[120px] font-dela leading-[0.85] tracking-tighter mb-8">
        NOT<br />
        NATIVE.<br />
        <span className="accent-text">NOT<br />SORRY.</span>
      </h1>

      <div className="max-w-xl">
        <p className="text-xl md:text-2xl font-bold leading-snug mb-8">
          The <span className="uppercase underline decoration-4 decoration-[#FF4A22]">no-scam</span> guide for non-native English speakers to get hired in Vietnam.
        </p>

        <button className="bg-[#FF4A22] text-white font-dela text-xl md:text-2xl px-10 py-5 border-2 border-black card-shadow hover:translate-x-1 hover:translate-y-1 transition-all w-full md:w-auto">
          GET HIRED IN 30 DAYS — $19
        </button>

        <div className="mt-8">
          <p className="font-dela text-xs opacity-40">NOW AVAILABLE</p>
          <div className="text-8xl font-dela opacity-[0.03] absolute -z-10 select-none">WTF</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
