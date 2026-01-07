
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-0 pb-4 px-4 max-w-5xl mx-auto text-center md:text-left relative">
      <div className="mb-2">
        <div className="slanted-badge bg-[#FF4A22] text-white sticker-shadow mt-4 mb-2">
          VIETNAM EDITION 2026
        </div>
      </div>

      <h1 className="text-[42px] md:text-[110px] lg:text-[120px] font-dela leading-[0.85] tracking-tighter mb-4">
        NOT<br />
        NATIVE.<br />
        <span className="accent-text">NOT<br />SORRY.</span>
      </h1>

      <div className="max-w-xl">
        <p className="text-xl md:text-2xl font-bold leading-snug mb-6">
          The <span className="uppercase underline decoration-4 decoration-[#FF4A22]">no-scam</span> guide for non-native English speakers to get hired in Vietnam.
        </p>

        <a href="https://up2uagency.systeme.io/checkout" className="inline-block bg-[#FF4A22] text-white font-dela text-xl md:text-2xl px-10 py-5 border-2 border-black card-shadow hover:translate-x-1 hover:translate-y-1 transition-all w-full md:w-auto text-center">
          GET HIRED IN 30 DAYS — $19
        </a>

        {/* Social Proof Badge */}
        <div className="mt-6 flex items-center justify-center md:justify-start gap-4">
          <div className="flex -space-x-3">
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/photo/teachers/new_teacher_0.jpg" alt="Teacher" />
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/photo/teachers/new_teacher_1.jpg" alt="Teacher" />
            <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="/photo/teachers/new_teacher_2.jpg" alt="Teacher" />
            <div className="w-10 h-10 rounded-full border-2 border-white bg-black text-white flex items-center justify-center font-bold text-xs">
              +700
            </div>
          </div>
          <p className="text-sm font-bold opacity-80 max-w-[150px] leading-tight text-left">
            Non-native teachers hired in Vietnam
          </p>
        </div>

        <div className="mt-8">
          <p className="font-dela text-xs opacity-40">NOW AVAILABLE</p>
          <div className="text-8xl font-dela opacity-[0.03] absolute -z-10 select-none">WTF</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
