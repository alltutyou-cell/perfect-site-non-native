
import React from 'react';

const ProductOffer: React.FC = () => {
  return (
    <section className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-dela tracking-tighter mb-4">WHAT YOU GET<br/><span className="accent-text">INSIDE ($19)</span></h2>
        <p className="font-bold text-xl opacity-60">PDF Guide + Interactive Toolkit + 3 Free Bonuses</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-white border-4 border-black p-10 card-shadow">
          <h3 className="text-2xl font-dela mb-6 underline">THE 30-DAY HIRE PLAN</h3>
          <ul className="space-y-4 font-bold text-base">
            <li className="flex gap-3"><span className="accent-text">01.</span> THE REAL OPPORTUNITY - Real numbers vs. recruiter BS</li>
            <li className="flex gap-3"><span className="accent-text">02.</span> WHO GETS HIRED - Degree & accent reality check</li>
            <li className="flex gap-3"><span className="accent-text">03.</span> AVOID THE SCAMS - 5 red-flag signs & contract tricks</li>
            <li className="flex gap-3"><span className="accent-text">04.</span> 30-DAY ACTION PLAN - Week-by-week instruction</li>
            <li className="flex gap-3"><span className="accent-text">05.</span> APPLICATION TOOLKIT - CV templates & scripts</li>
          </ul>
        </div>

        <div className="space-y-6">
          <div className="bg-[#F8F0DD] border-2 border-black p-6 sticker-shadow">
            <h4 className="font-dela text-[#FF4A22] text-sm mb-2">BONUS #1: INTERVIEW CHEAT SHEET</h4>
            <p className="text-sm font-bold">10 most common questions + word-for-word answers. ($27 Value)</p>
          </div>
          <div className="bg-[#F8F0DD] border-2 border-black p-6 sticker-shadow rotate-1">
            <h4 className="font-dela text-[#FF4A22] text-sm mb-2">BONUS #2: COST OF LIVING CALCULATOR</h4>
            <p className="text-sm font-bold">Real expenses for Hanoi, HCMC, Da Nang. ($17 Value)</p>
          </div>
          <div className="bg-[#F8F0DD] border-2 border-black p-6 sticker-shadow -rotate-1">
            <h4 className="font-dela text-[#FF4A22] text-sm mb-2">BONUS #3: SURVIVAL GUIDE</h4>
            <p className="text-sm font-bold">SIM cards, money, food, and basic phrases. ($15 Value)</p>
          </div>
          
          <div className="bg-black text-white p-6 border-4 border-black mt-8 text-center">
            <div className="text-sm font-bold opacity-60 mb-1">TOTAL VALUE: $156</div>
            <div className="text-4xl font-dela accent-text mb-4">YOU PAY: $19</div>
            <button className="w-full bg-[#FF4A22] text-white py-4 font-dela text-xl hover:translate-y-1 transition-all">
              GET INSTANT ACCESS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductOffer;
