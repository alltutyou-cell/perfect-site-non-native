
import React from 'react';
import { StudioTab } from '../types';

interface NavbarProps {
  activeTab: StudioTab;
  onTabChange: (tab: StudioTab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: StudioTab; label: string }[] = [
    { id: 'text', label: 'WRITER' },
    { id: 'image', label: 'ARTIST' },
    { id: 'video', label: 'DIRECTOR' },
    { id: 'search', label: 'ORACLE' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b-4 border-black px-4">
      <div className="max-w-6xl mx-auto h-20 flex items-center justify-between">
        <div className="font-dela text-2xl tracking-tighter">LUMINA</div>

        <div className="flex items-center gap-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                px-4 md:px-8 py-2 font-dela text-sm md:text-lg border-x-2 border-black transition-all
                ${activeTab === tab.id 
                  ? 'bg-[#FF4A22] text-white border-t-2 border-black' 
                  : 'text-black hover:bg-black hover:text-white'}
              `}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
