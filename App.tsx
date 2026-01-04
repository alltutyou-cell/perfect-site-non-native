
import React from 'react';
import Hero from './components/Hero';
import ProfileEvaluator from './components/ProfileEvaluator';
import Testimonials from './components/Testimonials';
import OpportunitySection from './components/OpportunitySection';
import ProblemSolution from './components/ProblemSolution';
import ActionPlanSection from './components/ActionPlanSection';
import ToolkitSection from './components/ToolkitSection';
import StorySection from './components/StorySection';
import BonusSection from './components/BonusSection';
import Objections from './components/Objections';
import FinalCTA from './components/FinalCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FF4A22] selection:text-white">
      {/* Top Black Bar Marquee */}
      <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap border-b-2 border-[#FF4A22] sticky top-0 z-50">
        <div className="inline-block animate-scroll font-dela text-[13px] tracking-wider uppercase">
          <span className="mx-4">🔥 700+ TEACHERS HIRED</span>
          <span className="mx-4">⭐ NO ACCENT DISCRIMINATION</span>
          <span className="mx-4">💰 STARTING $1,200/MO</span>
          <span className="mx-4">🚀 NO EXPERIENCE NEEDED</span>
          <span className="mx-4">🔥 700+ TEACHERS HIRED</span>
          <span className="mx-4">⭐ NO ACCENT DISCRIMINATION</span>
          <span className="mx-4">💰 STARTING $1,200/MO</span>
          <span className="mx-4">🚀 NO EXPERIENCE NEEDED</span>
        </div>
      </div>

      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="my-20">
          <ProfileEvaluator />
        </section>

        <Testimonials />
        <OpportunitySection />
        <ProblemSolution />
        <ActionPlanSection />
        <ToolkitSection />
      </div>

      <StorySection />
      <BonusSection />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Objections />
      </div>

      <FinalCTA />

      <footer className="bg-black text-white py-24 px-8 text-center border-t-4 border-[#FF4A22]">
        <div className="font-dela text-4xl mb-6 tracking-tighter">NOT NATIVE.<br/>NOT SORRY.™</div>
        <div className="flex justify-center gap-8 mb-8 grayscale opacity-50">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" className="h-8" alt="Visa" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/mastercard.png" className="h-8" alt="Mastercard" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/paypal.png" className="h-8" alt="Paypal" />
        </div>
        <p className="opacity-40 text-[10px] uppercase font-bold tracking-[0.4em]">
          Vietnam Teaching Guide &bull; Instant Delivery &bull; 7-Day Refund Guarantee &bull; © 2024
        </p>
      </footer>
    </div>
  );
};

export default App;
