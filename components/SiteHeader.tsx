import React, { useState, useEffect } from 'react';

const SiteHeader: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm border-b-2 border-black py-2 shadow-md' : 'bg-transparent py-4 border-b-0'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                {/* Logo Section */}
                <div className="flex items-center gap-4">
                    <img src="/photo/logo/up2u logo basic.svg" alt="UP 2U Logo" className="h-16 md:h-20 transition-all duration-300" />
                </div>

                {/* Right CTA */}
                <div className="hidden md:block">
                    <a href="#offer" className="bg-black text-white font-dela text-sm px-6 py-3 border-2 border-transparent hover:bg-[#FF4A22] hover:border-black transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                        GET THE GUIDE
                    </a>
                </div>
            </div>
        </header>
    );
};

export default SiteHeader;
