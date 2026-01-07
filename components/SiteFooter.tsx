import React from 'react';

const SiteFooter: React.FC = () => {
    return (
        <footer className="bg-black text-white py-12 px-6 border-t-2 border-white/10 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">

                {/* Minimalist Logo + Slogan */}
                <div className="flex flex-col items-center mb-8">
                    <img src="/photo/logo/up2u logo basic.svg" alt="Up 2U Logo" className="h-8 invert opacity-50 mb-4" />
                    <div className="font-dela text-xs tracking-[0.2em] opacity-30 uppercase">
                        NOT NATIVE. NOT SORRY.™
                    </div>
                </div>

                {/* Single Row Nav */}
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8 font-bold uppercase text-[9px] tracking-widest text-gray-500">
                    <a href="https://up2uagency.systeme.io/checkout" className="hover:text-[#FF4A22] transition-all">Guide</a>
                    <span className="opacity-20">•</span>
                    <a href="#" className="hover:text-[#FF4A22] transition-all">Stories</a>
                    <span className="opacity-20">•</span>
                    <a href="#" className="hover:text-[#FF4A22] transition-all">Support</a>
                    <span className="opacity-20">•</span>
                    <a href="#" className="hover:text-[#FF4A22] transition-all">Refunds</a>
                    <span className="opacity-20">•</span>
                    <a href="#" className="hover:text-[#FF4A22] transition-all">Privacy</a>
                </nav>

                {/* Ultra Minimal Payment Icons */}
                <div className="flex justify-center gap-6 grayscale brightness-150 opacity-10 mb-6">
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" className="h-4" alt="Visa" />
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/mastercard.png" className="h-4" alt="Mastercard" />
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/paypal.png" className="h-4" alt="Paypal" />
                    <img src="https://img.icons8.com/ios-filled/50/ffffff/stripe.png" className="h-4" alt="Stripe" />
                </div>

                {/* Copyright */}
                <p className="font-bold text-[8px] tracking-[0.3em] opacity-20 uppercase">
                    © 2026 UP2U LTD • Built for Non-Native Teachers
                </p>
            </div>
        </footer>
    );
};

export default SiteFooter;
