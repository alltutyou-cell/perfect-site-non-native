
import React from 'react';

const ExpertSection: React.FC = () => {
    return (
        <section className="py-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <div className="inline-block bg-[#FF4A22] text-white font-dela text-xs px-3 py-1 mb-8 sticker-shadow -rotate-2">THE_AUTHOR</div>
                    <h2 className="text-5xl md:text-7xl font-dela mb-8 tracking-tighter leading-none">
                        NON-NATIVE? <br />
                        <span className="accent-text">So am I.</span>
                    </h2>
                    <div className="space-y-6 text-xl font-bold leading-relaxed text-black/80">
                        <p>I've placed over 700 non-native teachers in Vietnam since 2017.</p>
                        <p>I started as one myself — Belarusian accent, zero experience, living in a cockroach-infested apartment wondering if I'd made a huge mistake.</p>
                        <p>I've seen teachers earn $2,100/month working 20 hours a week. And I've seen others get scammed, exploited, or sent home empty-handed.</p>
                        <p>I created this guide because the system is rigged against non-natives, but it's not unbeatable. You just need to know which doors actually open, and how to walk through them without getting burned.</p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-4 border-t-2 border-black pt-8">
                        <div>
                            <p className="font-dela text-[10px] opacity-40 mb-1">CREDENTIALS</p>
                            <ul className="text-xs font-bold space-y-1">
                                <li>• 700+ Successful Placements</li>
                                <li>• 8+ Years in Vietnam Market</li>
                                <li>• Recruitment Expert</li>
                            </ul>
                        </div>
                        <div>
                            <p className="font-dela text-[10px] opacity-40 mb-1">SPECIALIZATION</p>
                            <ul className="text-xs font-bold space-y-1">
                                <li>• Visa & Permit Specialist</li>
                                <li>• Non-Native ESL Expert</li>
                                <li>• Contract Verification</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <div className="polaroid rotate-3 card-shadow relative z-10 max-w-sm mx-auto">
                        <div className="bg-slate-200 aspect-[3/4] mb-4 overflow-hidden border-2 border-black">
                            <img src="/photo/expert_portrait_new.jpg" alt="Expert in Vietnam" className="w-full h-full object-cover grayscale-0" />
                        </div>
                        <p className="font-dela text-center text-sm italic">"Living the dream in Vietnam"</p>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF4A22] rounded-full -z-0 opacity-20 blur-2xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-black rounded-full -z-0 opacity-5 blur-3xl"></div>
                </div>
            </div>
        </section>
    );
};

export default ExpertSection;
