
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-24 border-y-4 border-black bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="inline-block bg-black text-white font-dela text-xs px-3 py-1 mb-8">CASE_STUDY_01</div>
            <h2 className="text-4xl md:text-5xl font-dela mb-12 tracking-tighter leading-tight">
              SELIM FROM TUNISIA:<br />
              <span className="accent-text">BROKE GRADUATE TO $2,100/MONTH</span>
            </h2>

            <div className="prose prose-xl font-bold leading-relaxed space-y-6 text-black/80">
              <p>Selim had an engineering degree and zero real job prospects in Tunisia. The best jobs there paid about $400/month. He’d never taught anyone before. His English was good, but he had some North African accent.</p>

              <blockquote className="border-l-8 border-[#FF4A22] pl-8 py-4 italic text-2xl font-dela tracking-tighter text-black">
                "MY FAMILY THOUGHT I WAS CRAZY FOR TRYING THIS. NOW I SEND MORE MONEY HOME EVERY MONTH than I ever imagined."
              </blockquote>

              <p>Today, Selim makes $2,100/month teaching at two schools. He sends $500 home every month.</p>
              <p className="text-2xl accent-text font-dela">IF HE COULD DO IT, YOU CAN DO IT TOO.</p>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="polaroid -rotate-2 card-shadow max-w-sm">
              <div className="bg-slate-200 aspect-square mb-4 overflow-hidden border-2 border-black">
                <img src="/photo/selim.png" alt="Selim teaching in Vietnam" className="w-full h-full object-cover" />
              </div>
              <p className="font-dela text-center text-xs text-black/40">SELIM | HO CHI MINH CITY, VIETNAM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
