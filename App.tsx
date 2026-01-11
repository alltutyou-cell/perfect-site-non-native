
import React, { useEffect, useState } from 'react';
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
import ThankYouPage from './components/ThankYouPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsOfService from './components/TermsOfService';
import Guarantee from './components/Guarantee';
import WhatsAppButton from './components/WhatsAppButton';
import GuideMockup from './components/GuideMockup';
import QuizPage from './components/QuizPage';
import StudioDashboard from './components/StudioDashboard';
import CostCalculator from './components/CostCalculator';

const App: React.FC = () => {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Intersection Observer for scroll animations
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [path]);

  const navigate = (newPath: string) => {
    window.history.pushState({}, '', newPath);
    setPath(newPath);
    window.scrollTo(0, 0);
  };

  if (path === '/') {
    return <QuizPage />; // Defaulting to QuizPage as per remote, or should I default to Landing? 
    // The remote had QuizPage as default index. I should probably respect that if it's the live funnel entry point.
    // But the user was working on a "Landing Page" in my session.
    // Let's check if the remote `QuizPage` leads to the landing page.
    // For safety, I'll keep the remote's logic: if path is '/' return <QuizPage />.
  }

  // However, the user's "Landing Page" was likely what I was editing in the main return.
  // In the remote, the main landing page was likely at '/guide' or similar?
  // Let's look at the remote conflict again.
  // Remote: if (path === '/') return <QuizPage />;
  // Remote: ... imports ...
  // Remote: ... return ( <div> ... <Hero /> ... )
  // Wait, the remote `return` (lines 124+) is NOT inside an `if`. 
  // It's the default return if no other path matches.
  // So if path is '/', it shows QuizPage.
  // If path is NOT '/', and not '/thankyou' etc, it shows the Landing Page (Hero, etc).
  // So likely the URL for the landing page is NOT '/'.
  // This is confusing. 
  // Maybe the QuizPage *is* the new home.
  // But I want to access my Studio.

  if (path === '/studio') {
    return (
      <>
        <div className="bg-[#FF4A22] text-white text-[10px] font-bold text-center py-1 uppercase">
          DEMO MODE: Viewing Member-Only Portal &bull; <button onClick={() => navigate('/landing')} className="underline hover:no-underline">Return to Landing Page</button>
        </div>
        <StudioDashboard />
      </>
    );
  }

  if (path === '/calculator') {
    return (
      <div className="min-h-screen bg-[#F8F0DD] p-4 md:p-12 flex flex-col items-center justify-center">
        <CostCalculator />
      </div>
    )
  }

  if (path === '/thankyou' || path === '/thank-you') {
    return <ThankYouPage />;
  }

  if (path === '/privacy') {
    return <PrivacyPolicy />;
  }

  if (path === '/refunds') {
    return <RefundPolicy />;
  }

  if (path === '/terms') {
    return <TermsOfService />;
  }

  // Default Landing Page View (for /landing or any other unmatched route)
  // I will make this match the remote's structure but add my buttons.
  return (
    <div className="min-h-screen bg-white text-black selection:bg-[#FF4A22] selection:text-white overflow-x-hidden w-full relative">
      {/* Top Black Bar Marquee */}
      <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap border-b-2 border-[#FF4A22] sticky top-0 z-50">
        <div className="flex justify-between items-center px-4">
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
          <div className="flex gap-4 hidden md:flex">
            <button
              onClick={() => navigate('/calculator')}
              className="bg-white text-black px-3 py-1 font-dela text-[10px] hover:bg-[#FF4A22] hover:text-white transition-all"
            >
              FREE_CALCULATOR_TOOL
            </button>
            <button
              onClick={() => navigate('/studio')}
              className="bg-[#FF4A22] text-white px-3 py-1 font-dela text-[10px] hover:bg-white hover:text-black transition-all"
            >
              MEMBER_LOGIN
            </button>
          </div>
        </div>
      </div>

      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll"><section className="my-20"><ProfileEvaluator /></section></div>
        <div className="reveal-on-scroll"><Testimonials /></div>
        <div className="reveal-on-scroll"><OpportunitySection /></div>
        <div className="reveal-on-scroll"><GuideMockup /></div>
        <div className="reveal-on-scroll"><ProblemSolution /></div>
        <div className="reveal-on-scroll"><ActionPlanSection /></div>
        <div className="reveal-on-scroll"><ToolkitSection /></div>
        <div className="reveal-on-scroll"><ExpertSection /></div>
      </div>

      <div className="reveal-on-scroll"><StorySection /></div>
      <div className="reveal-on-scroll"><GallerySection /></div>
      <div className="reveal-on-scroll"><TeacherCollage /></div>
      <div className="reveal-on-scroll"><BonusSection /></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="reveal-on-scroll"><Guarantee /></div>
        <div className="reveal-on-scroll"><Objections /></div>
      </div>

      <FinalCTA />

      <footer className="bg-black text-white py-24 px-8 text-center border-t-4 border-[#FF4A22]">
        <div className="font-dela text-4xl mb-6 tracking-tighter">NOT NATIVE.<br />NOT SORRY.™</div>
        <div className="flex justify-center gap-8 mb-8 grayscale opacity-50">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" className="h-8" alt="Visa" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/mastercard.png" className="h-8" alt="Mastercard" />
          <img src="https://img.icons8.com/ios-filled/50/ffffff/paypal.png" className="h-8" alt="Paypal" />
        </div>
        <p className="opacity-40 text-[10px] uppercase font-bold tracking-[0.4em] mb-8">
          Vietnam Teaching Guide &bull; Instant Delivery &bull; 7-Day Refund Guarantee &bull; © 2024
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/studio')}
            className="bg-white text-black px-6 py-2 font-dela text-xs hover:bg-[#FF4A22] hover:text-white transition-all flex items-center gap-2"
          >
            <span className="animate-pulse">🔒</span> ACCESS_PRIVATE_AI_STUDIO
          </button>
          <button
            onClick={() => navigate('/calculator')}
            className="border-2 border-white text-white px-6 py-2 font-dela text-xs hover:bg-white hover:text-black transition-all flex items-center gap-2"
          >
            📊 COST_CALCULATOR
          </button>
        </div>
      </footer>

      <StickyBottomNav />
      <WhatsAppButton />
    </div>
  );
};

export default App;
