
import React from 'react';

const StorySection: React.FC = () => {
  return (
    <section className="py-24 border-y-4 border-black bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]">
      <div className="max-w-4xl mx-auto">
        <div className="inline-block bg-black text-white font-dela text-xs px-3 py-1 mb-8">CASE_STUDY_01</div>
        <h2 className="text-4xl md:text-6xl font-dela mb-12 tracking-tighter leading-tight">
          SELIM FROM TUNISIA:<br/>
          <span className="accent-text">BROKE GRADUATE TO $2,100/MO</span>
        </h2>
        
        <div className="prose prose-xl font-bold leading-relaxed space-y-6 text-black/80">
          <p>Selim had an engineering degree and zero real job prospects in Tunisia. The best jobs there paid about $400/month. He’d never taught anyone before. His English was good, but he had some North African accent.</p>
          
          <blockquote className="border-l-8 border-[#FF4A22] pl-8 py-4 italic text-3xl font-dela tracking-tighter text-black">
            "MY FAMILY THOUGHT I WAS CRAZY FOR TRYING THIS. NOW I SEND MORE MONEY HOME EVERY MONTH THAN I EVER IMAGINED EARNING."
          </blockquote>

          <p>He followed the intro video script exactly. It took him four tries to get it right, but once he did, schools started replying within 48 hours. Some weeks later, he was interviewing with schools in Ho Chi Minh City.</p>
          <p>Today, Selim makes $2,100/month teaching at two different schools. He works about 25 hours per week and sends $500 home every month.</p>
          <p className="text-3xl accent-text font-dela">IF HE COULD DO IT, YOU CAN DO IT TOO.</p>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
