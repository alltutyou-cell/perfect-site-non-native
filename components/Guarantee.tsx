
import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
    return (
        <section className="py-24 bg-white border-y-4 border-black">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <div className="relative inline-block mb-12">
                    <div className="bg-[#FF4A22] text-white p-6 md:p-10 rounded-full sticker-shadow transform -rotate-3 hover:rotate-0 transition-transform duration-300 flex flex-col items-center justify-center">
                        <ShieldCheck size={48} className="mb-2" />
                        <span className="font-dela text-2xl md:text-3xl tracking-tighter leading-none">100%<br />SECURE</span>
                    </div>
                    {/* Hand-drawn arrow SVG flair */}
                    <svg className="absolute -right-24 top-0 w-24 h-24 text-black hidden md:block" viewBox="0 0 100 100" fill="none">
                        <path d="M10 20Q40 10 70 30T90 70M90 70L80 60M90 70L95 55" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <h2 className="text-4xl md:text-6xl font-dela mb-8 tracking-tighter leading-none">
                    THE IRON-CLAD<br />
                    <span className="accent-text whitespace-nowrap">7-DAY GUARANTEE</span>
                </h2>

                <div className="prose prose-xl mx-auto font-bold leading-relaxed text-black/80 space-y-6">
                    <p>
                        I’m not interested in taking your $19 if this doesn’t help you.
                    </p>
                    <p>
                        Buy the guide, read it, and use the templates. If you don’t feel like you have a 10x clearer roadmap to getting hired in Vietnam, just email me within 7 days.
                    </p>
                    <p className="text-2xl accent-text font-dela italic">
                        "NO QUESTIONS ASKED. NO HOOPS TO JUMP THROUGH."
                    </p>
                    <p>
                        I'll send your money back, and you can even keep the guide. That’s how much I believe in this system.
                    </p>
                </div>

                <div className="mt-12 flex items-center justify-center gap-4 opacity-40 grayscale">
                    <img src="https://img.icons8.com/ios-filled/50/000000/visa.png" className="h-8" alt="Visa" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/mastercard.png" className="h-8" alt="Mastercard" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/paypal.png" className="h-8" alt="Paypal" />
                    <img src="https://img.icons8.com/ios-filled/50/000000/stripe.png" className="h-8" alt="Stripe" />
                </div>
            </div>
        </section>
    );
};

export default Guarantee;
