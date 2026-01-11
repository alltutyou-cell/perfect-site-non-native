
import React, { useState } from 'react';
import TextStudio from './TextStudio';
import VideoStudio from './VideoStudio';
import ImageStudio from './ImageStudio';
import SearchStudio from './SearchStudio';

type StudioTab = 'TEXT' | 'VIDEO' | 'IMAGE' | 'SEARCH';

const StudioDashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<StudioTab>('TEXT');

    const tabs: { id: StudioTab; label: string; icon: string; description: string }[] = [
        { id: 'TEXT', label: 'RECRUITMENT_CLONE', icon: '✍️', description: 'GENERATE CV & SCRIPTS' },
        { id: 'VIDEO', label: 'CINEMA_CLONE', icon: '🎬', description: 'SYNTHESIZE B-ROLL' },
        { id: 'IMAGE', label: 'IMAGE_AGENT', icon: '📸', description: 'PRO HEADSHOTS & SCENES' },
        { id: 'SEARCH', label: 'ORACLE_SEARCH', icon: '🌐', description: 'LIVE JOB GROUNDING' },
    ];

    return (
        <div className="flex flex-col h-screen bg-[#F8F0DD] overflow-hidden">
            {/* Dashboard Nav */}
            <div className="bg-black text-white px-6 py-4 flex justify-between items-center border-b-4 border-[#FF4A22]">
                <div className="flex items-center gap-4">
                    <div className="bg-[#FF4A22] text-white font-dela text-xl px-3 py-1 -rotate-2">
                        AI_STUDIO
                    </div>
                    <div className="hidden md:block">
                        <h1 className="font-dela text-sm">NOT_NATIVE_ELITE_PORTAL</h1>
                        <p className="text-[10px] font-bold opacity-50">LOGGED_IN_AS: PREMIUM_MEMBER_712</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                px-4 py-2 font-dela text-[10px] transition-all border-b-2
                ${activeTab === tab.id
                                    ? 'bg-[#FF4A22] text-white border-white scale-105'
                                    : 'bg-black text-white/60 border-transparent hover:text-white'}
              `}
                        >
                            <span className="hidden sm:inline mr-2">{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-hidden flex flex-col">
                <div className="bg-white border-b-2 border-black px-6 py-2">
                    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap scrollbar-hide py-1">
                        <div className="bg-green-500 w-2 h-2 rounded-full animate-pulse"></div>
                        <span className="text-[9px] font-bold uppercase tracking-widest opacity-60">
                            CORE_SYSTEM: ONLINE // LATENCY: 24MS // {tabs.find(t => t.id === activeTab)?.description}
                        </span>
                    </div>
                </div>

                <div className="flex-1 overflow-auto bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')] p-4 md:p-8">
                    <div className="max-w-7xl mx-auto h-full">
                        {activeTab === 'TEXT' && <TextStudio />}
                        {activeTab === 'VIDEO' && <VideoStudio />}
                        {activeTab === 'IMAGE' && <ImageStudio />}
                        {activeTab === 'SEARCH' && <SearchStudio />}
                    </div>
                </div>
            </div>

            {/* Footer Support */}
            <div className="bg-white border-t-4 border-black px-6 py-3 flex justify-between items-center">
                <div className="text-[9px] font-bold opacity-40 uppercase">
                    &copy; 2024 UP2U RECRUITMENT SYSTEMS // ALL_RIGHTS_RESERVED
                </div>
                <div className="flex gap-4">
                    <button className="text-[9px] font-dela bg-black text-white px-3 py-1 hover:bg-[#FF4A22] transition-colors">
                        GUIDE_PDF
                    </button>
                    <button className="text-[9px] font-dela border-2 border-black px-3 py-1 hover:bg-black hover:text-white transition-colors">
                        SUPPORT_TICKET
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudioDashboard;
