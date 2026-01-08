
import React from 'react';
import { motion } from 'framer-motion';

const GuideMockup: React.FC = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="reveal-on-scroll">
                        <div className="inline-block bg-black text-white font-dela text-xs px-3 py-1 mb-6 uppercase">Inside the Guide</div>
                        <h2 className="text-4xl md:text-6xl font-dela mb-8 tracking-tighter uppercase leading-none">
                            SEE WHAT'S <br />
                            <span className="accent-text italic">WAITING FOR YOU.</span>
                        </h2>
                        <div className="space-y-6 text-lg font-bold leading-relaxed text-black/80 mb-10">
                            <p>This isn't just another ebook. It's a high-resolution, step-by-step tactical map designed to be used in the field.</p>
                            <ul className="space-y-4">
                                <li className="flex gap-4">
                                    <span className="accent-text text-xl">01</span>
                                    <span><span className="highlight-marker">120+ Pages</span> of dense, high-value strategy.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="accent-text text-xl">02</span>
                                    <span>Detailed <span className="highlight-marker">contracts checklists</span> to avoid scams.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="accent-text text-xl">03</span>
                                    <span>Interactive <span className="highlight-marker">Cost of Living</span> calculators.</span>
                                </li>
                                <li className="flex gap-4">
                                    <span className="accent-text text-xl">04</span>
                                    <span>Mobile-optimized for reading while on the motorbike.</span>
                                </li>
                            </ul>
                        </div>
                        <a href="https://up2uagency.systeme.io/checkout" className="inline-block bg-[#FF4A22] text-white font-dela text-xl px-10 py-5 border-2 border-black card-shadow hover:translate-x-1 hover:translate-y-1 transition-all">
                            GET INSTANT ACCESS
                        </a>
                    </div>

                    <div className="relative reveal-on-scroll">
                        {/* Background stack/blur effects */}
                        <div className="absolute top-10 left-10 w-full h-full bg-slate-100 border-2 border-black -z-10 transform rotate-3 blur-[2px] opacity-40"></div>
                        <div className="absolute top-5 left-5 w-full h-full bg-slate-200 border-2 border-black -z-10 transform -rotate-1 blur-[1px] opacity-60"></div>

                        {/* Main Mockup Image */}
                        <motion.div
                            whileHover={{ scale: 1.02, rotate: 0 }}
                            className="relative z-10 border-4 border-black card-shadow overflow-hidden transform -rotate-2 transition-transform"
                        >
                            <img
                                src="/photo/guide_mockup.jpg"
                                alt="Not Native Not Sorry Guide Mockup"
                                className="w-full h-auto"
                            />

                            {/* Marker Flourishes */}
                            <div className="absolute bottom-10 right-[-20%] w-[150%] h-12 bg-yellow-400 opacity-20 transform -rotate-45 pointer-events-none"></div>
                        </motion.div>

                        {/* Floating Badge */}
                        <div className="absolute -top-6 -right-6 bg-black text-white p-4 rotate-12 font-dela text-xs sticker-shadow z-20">
                            DIGITAL VERSION <br /> 2026 EDITION
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GuideMockup;
