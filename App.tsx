
import React from 'react';
import Hero from './components/Hero';
import ExpertSection from './components/ExpertSection';

import Testimonials from './components/Testimonials';
import OpportunitySection from './components/OpportunitySection';
import ProblemSolution from './components/ProblemSolution';
import ActionPlanSection from './components/ActionPlanSection';
import ToolkitSection from './components/ToolkitSection';
import StorySection from './components/StorySection';
import GallerySection from './components/GallerySection';
import TeacherCollage from './components/TeacherCollage';
import BonusSection from './components/BonusSection';
import Objections from './components/Objections';
import FinalCTA from './components/FinalCTA';
import SiteFooter from './components/SiteFooter';
import StickyBottomNav from './components/StickyBottomNav';


const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FF4A22] selection:text-white overflow-x-hidden w-full relative">
      {/* Top Black Bar Marquee */}
      <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap border-b-2 border-[#FF4A22] relative z-50">
        <div className="inline-block animate-scroll font-dela text-[13px] tracking-wider uppercase">
          <span className="mx-4">🔥 700+ TEACHERS HIRED</span>
          <span className="mx-4">⭐ NO PASSPORT DISCRIMINATION</span>
          <span className="mx-4">💰 STARTING $1,200/MONTH</span>
          <span className="mx-4">🚀 NO EXPERIENCE NEEDED</span>
          <span className="mx-4">🔥 700+ TEACHERS HIRED</span>
          <span className="mx-4">⭐ NO PASSPORT DISCRIMINATION</span>
          <span className="mx-4">💰 STARTING $1,200/MONTH</span>
          <span className="mx-4">🚀 NO EXPERIENCE NEEDED</span>
        </div>
      </div>



      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Testimonials />
        <OpportunitySection />
        <ProblemSolution />
        <ActionPlanSection />
        <ToolkitSection />
        <ExpertSection />
      </div>

      <StorySection />
      <GallerySection />
      <TeacherCollage />
      <BonusSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Objections />
      </div>

      <FinalCTA />
      <SiteFooter />
      <StickyBottomNav />
    </div>
  );
};

export default App;
