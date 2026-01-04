
import React from 'react';

const OpportunitySection: React.FC = () => {
  return (
    <section className="py-24 border-y-4 border-black my-12 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 p-4 opacity-[0.05] font-dela text-[12vw] pointer-events-none select-none">
        NUMBERS
      </div>
      
      <div className="max-w-4xl">
        <div className="bg-black text-white inline-block px-4 py-1 font-dela text-xs mb-6">THE_REAL_OPPORTUNITY</div>
        <h2 className="text-5xl md:text-7xl font-dela tracking-tighter mb-12 leading-none">
          WHAT TEACHERS <span className="accent-text">ACTUALLY</span> EARN.
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-[#F8F0DD] p-8 border-2 border-black card-shadow">
              <p className="font-dela text-sm mb-2">MONTHLY_REVENUE</p>
              <p className="text-4xl font-dela accent-text">$1,200 - $2,000</p>
              <p className="text-xs font-bold mt-2 opacity-50 italic">Even with zero experience</p>
            </div>
            <p className="font-bold text-lg leading-relaxed">
              Most recruiters will feed you BS. We give you real numbers based on 700+ verified placements. 
              We'll show you who gets hired and why—from degree requirements to the "accent reality check."
            </p>
          </div>
          
          <div className="bg-black text-white p-8 sticker-shadow rotate-1">
            <h3 className="font-dela text-xl mb-6">WHY IT WORKS:</h3>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wide">
              <li className="flex gap-3"><span className="accent-text">✔</span> High demand for fluents</li>
              <li className="flex gap-3"><span className="accent-text">✔</span> Low cost of living</li>
              <li className="flex gap-3"><span className="accent-text">✔</span> Culture that values effort</li>
              <li className="flex gap-3"><span className="accent-text">✔</span> Proven application systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
