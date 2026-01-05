import React, { useState } from 'react';

const CheckoutPage: React.FC = () => {
    const [email, setEmail] = useState('');

    return (
        <div className="min-h-screen bg-[#F8F0DD] text-black font-sans py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-12 border-b-4 border-black pb-8">
                    <div className="flex items-center gap-3">
                        <img src="/photo/logo/up2u logo basic.svg" alt="Up 2U Logo" className="h-10" />
                        <span className="font-dela text-xl tracking-tighter">NOT NATIVE.</span>
                    </div>
                    <div className="flex items-center gap-2 opacity-60 font-bold text-sm uppercase tracking-widest">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        SECURE CHECKOUT
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Left Column: Form */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Section 1: Contact */}
                        <div className="bg-white border-4 border-black p-8 card-shadow relative">
                            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 font-dela text-xs rotate-[-2deg]">
                                STEP_01
                            </div>
                            <h2 className="font-dela text-2xl mb-6">CONTACT INFORMATION</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2">EMAIL ADDRESS</label>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full border-4 border-black p-4 font-bold text-lg focus:bg-[#FF4A22]/5 outline-none transition-colors"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <p className="text-[10px] font-bold opacity-40 mt-2 uppercase tracking-wider">The guide will be sent directly to this email.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Payment */}
                        <div className="bg-white border-4 border-black p-8 card-shadow relative">
                            <div className="absolute -top-4 -left-4 bg-black text-white px-4 py-1 font-dela text-xs rotate-[1deg]">
                                STEP_02
                            </div>
                            <h2 className="font-dela text-2xl mb-6">PAYMENT METHOD</h2>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button className="border-4 border-black p-4 flex flex-col items-center justify-center gap-2 bg-[#FF4A22] text-white sticker-shadow transition-all">
                                    <img src="https://img.icons8.com/ios-filled/50/ffffff/visa.png" className="h-6" alt="Card" />
                                    <span className="font-dela text-[10px]">CREDIT CARD</span>
                                </button>
                                <button className="border-4 border-black p-4 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-all opacity-40 grayscale">
                                    <img src="https://img.icons8.com/ios-filled/50/000000/paypal.png" className="h-6" alt="Paypal" />
                                    <span className="font-dela text-[10px]">PAYPAL</span>
                                </button>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest mb-2">CARD NUMBER</label>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="•••• •••• •••• ••••"
                                            className="w-full border-4 border-black p-4 font-bold text-lg focus:bg-[#FF4A22]/5 outline-none transition-colors"
                                        />
                                        <img src="https://img.icons8.com/ios-filled/50/000000/lock.png" className="h-4 absolute right-4 top-1/2 -translate-y-1/2 opacity-20" alt="locked" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest mb-2">EXPIRY</label>
                                        <input
                                            type="text"
                                            placeholder="MM / YY"
                                            className="w-full border-4 border-black p-4 font-bold text-lg focus:bg-[#FF4A22]/5 outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-black uppercase tracking-widest mb-2">CVC</label>
                                        <input
                                            type="text"
                                            placeholder="123"
                                            className="w-full border-4 border-black p-4 font-bold text-lg focus:bg-[#FF4A22]/5 outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Guaranteed Footer */}
                        <div className="flex items-center gap-6 p-4 border-4 border-black border-dashed opacity-60">
                            <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-dela text-xl rotate-[-5deg] sticker-shadow shrink-0">
                                !
                            </div>
                            <p className="text-sm font-bold leading-snug uppercase tracking-tight">
                                Your data is protected. 256-Bit SSL Encryption. <br />
                                <span className="accent-text">7-Day "No Questions Asked" Refund Guarantee.</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-5">
                        <div className="bg-black text-white p-8 card-shadow sticky top-8">
                            <h2 className="font-dela text-2xl mb-8 tracking-tighter border-b border-white/20 pb-4">YOUR ORDER</h2>

                            <div className="flex gap-6 mb-8 items-start">
                                <div className="w-24 h-32 bg-white border-2 border-[#FF4A22] card-shadow rotate-[-3deg] shrink-0 overflow-hidden flex items-center justify-center p-2">
                                    <div className="font-dela text-[8px] text-black text-center leading-none">
                                        VIETNAM<br />ROADMAP<br />2026
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-dela text-lg leading-tight mb-2">NOT NATIVE. NOT SORRY.™</h3>
                                    <p className="text-xs font-bold opacity-60 mb-4">The Complete Vietnam Teaching Guide for Non-Natives</p>
                                    <div className="bg-[#FF4A22] text-white px-2 py-1 text-[10px] font-dela inline-block sticker-shadow">BEST_VALUE</div>
                                </div>
                            </div>

                            <div className="space-y-4 font-bold uppercase text-sm mb-8">
                                <div className="flex justify-between">
                                    <span>SUBTOTAL</span>
                                    <span>$19.00</span>
                                </div>
                                <div className="flex justify-between opacity-40">
                                    <span>VAT / TAX</span>
                                    <span>$0.00</span>
                                </div>
                                <div className="border-t border-white/20 pt-4 flex justify-between text-2xl font-dela text-[#FF4A22]">
                                    <span>TOTAL</span>
                                    <span>$19.00</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#FF4A22] text-white py-6 font-dela text-xl border-2 border-white sticker-shadow hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3">
                                COMPLETE PURCHASE
                                <span className="opacity-50">→</span>
                            </button>

                            <div className="mt-12 space-y-4">
                                <p className="font-dela text-[10px] tracking-widest text-[#FF4A22] mb-4">WHATS IN THE PDF:</p>
                                <ul className="text-[10px] font-bold space-y-2 opacity-60">
                                    <li className="flex gap-2"><span>✔</span> 700+ VERIFIED SCHOOL LISTS</li>
                                    <li className="flex gap-2"><span>✔</span> ACCENT REALITY CHECK SCRIPTS</li>
                                    <li className="flex gap-2"><span>✔</span> VISA SPONSORSHIP GUIDE</li>
                                    <li className="flex gap-2"><span>✔</span> INTERVIEW CHEAT SHEET</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
