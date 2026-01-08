
import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

const LeadMagnet: React.FC = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // In a real scenario, this would post to Systeme.io or an API
            console.log('Lead captured:', email);
            setSubmitted(true);
        }
    };

    return (
        <section className="py-24 bg-[#F8F0DD] border-y-4 border-black relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] font-dela text-[15vw] pointer-events-none select-none -rotate-12">
                QUALIFY
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform -rotate-2">WAIT_A_MINUTE</div>
                        <h2 className="text-4xl md:text-5xl font-dela mb-6 tracking-tighter leading-none">
                            BEFORE YOU GO — <br />
                            <span className="accent-text">FIND OUT IF YOU <br />ACTUALLY QUALIFY</span>
                        </h2>
                        <div className="space-y-4 font-bold text-lg leading-snug text-black/80">
                            <p>Most people think you need to be a native speaker with years of experience.</p>
                            <p className="text-2xl accent-text font-dela">WRONG.</p>
                            <p>
                                In the last 3 years, I've helped 700+ non-native speakers (including people without degrees) get teaching jobs in Vietnam.
                            </p>
                            <p className="italic underline decoration-2 decoration-[#FF4A22] underline-offset-4">
                                Here's what schools ACTUALLY look for:
                            </p>
                        </div>
                    </div>

                    <div className="bg-white border-4 border-black p-8 card-shadow rotate-1 shrink-0">
                        {!submitted ? (
                            <>
                                <h3 className="font-dela text-xl mb-4 leading-tight uppercase">Get the Free Cheat Sheet:</h3>
                                <p className="text-sm font-bold opacity-60 mb-6 italic">
                                    "What Schools Actually Look For When Hiring Non-Native English Teachers"
                                </p>

                                <div className="space-y-4 mb-8">
                                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                        <CheckCircle2 className="text-[#FF4A22]" size={16} />
                                        <span>1-page. Read in 90 seconds.</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider">
                                        <CheckCircle2 className="text-[#FF4A22]" size={16} />
                                        <span>Find out if you qualify today.</span>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-4 border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-[#FF4A22] text-white py-4 font-dela text-lg border-2 border-black sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                                    >
                                        SEND ME THE CHEAT SHEET <Send size={20} />
                                    </button>
                                </form>

                                <p className="mt-6 text-[10px] font-bold text-center opacity-40 uppercase tracking-widest">
                                    ✅ No spam. Just the cheat sheet + occasional tips on landing your first teaching job.
                                </p>
                            </>
                        ) : (
                            <div className="text-center py-8">
                                <div className="bg-black text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-[#FF4A22]" />
                                </div>
                                <h3 className="font-dela text-2xl mb-4">CHECK YOUR INBOX!</h3>
                                <p className="font-bold text-sm opacity-60">
                                    The cheat sheet is on its way. Use it to see exactly where you stand.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadMagnet;
