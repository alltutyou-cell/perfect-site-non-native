
import React, { useState } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2 } from 'lucide-react';

const QuizPage: React.FC = () => {
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');
    const [answers, setAnswers] = useState({
        degree: '',
        fluency: '',
        experience: ''
    });

    const totalSteps = 4;

    const handleNext = () => {
        setStep(prev => prev + 1);
    };

    const handleFinish = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real scenario, this would post data to Systeme.io
        // Then redirect to the sales page
        window.location.href = '/guide?captured=true';
    };

    return (
        <div className="min-h-screen bg-[#F8F0DD] text-black font-space flex flex-col items-center justify-center p-4">
            <div className="max-w-xl w-full">
                {/* Progress Bar */}
                {step < totalSteps && (
                    <div className="w-full h-2 bg-black/10 mb-12">
                        <div
                            className="h-full bg-[#FF4A22] transition-all duration-500"
                            style={{ width: `${(step / (totalSteps - 1)) * 100}%` }}
                        ></div>
                    </div>
                )}

                {/* Quiz Steps */}
                <div className="bg-white border-4 border-black p-8 md:p-12 card-shadow min-h-[400px] flex flex-col justify-center relative overflow-hidden">

                    {step === 0 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform -rotate-2">STEP_01</div>
                            <h1 className="text-4xl md:text-5xl font-dela mb-6 tracking-tighter leading-none uppercase">
                                DO YOU HAVE A <br />
                                <span className="accent-text italic">UNIVERSITY DEGREE?</span>
                            </h1>
                            <div className="space-y-4">
                                <button
                                    onClick={() => { setAnswers({ ...answers, degree: 'yes' }); handleNext(); }}
                                    className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group"
                                >
                                    YES, I HAVE A DEGREE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button
                                    onClick={() => { setAnswers({ ...answers, degree: 'no' }); handleNext(); }}
                                    className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group"
                                >
                                    NO, I DON'T HAVE ONE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                            <p className="mt-8 text-xs font-bold opacity-40 uppercase tracking-widest text-center">
                                * Don't worry, we help both degree and non-degree holders.
                            </p>
                        </div>
                    )}

                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform rotate-2">STEP_02</div>
                            <h2 className="text-4xl md:text-5xl font-dela mb-6 tracking-tighter leading-none uppercase">
                                HOW WOULD YOU <br />
                                <span className="accent-text italic">RATE YOUR ENGLISH?</span>
                            </h2>
                            <div className="space-y-4">
                                <button
                                    onClick={() => { setAnswers({ ...answers, fluency: 'native' }); handleNext(); }}
                                    className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group"
                                >
                                    FLUENT / NATIVE-LIKE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button
                                    onClick={() => { setAnswers({ ...answers, fluency: 'intermediate' }); handleNext(); }}
                                    className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group"
                                >
                                    INTERMEDIATE & CLEAR <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform -rotate-1">STEP_03</div>
                            <h2 className="text-4xl md:text-5xl font-dela mb-6 tracking-tighter leading-none uppercase">
                                HAVE YOU <br />
                                <span className="accent-text italic">TAUGHT BEFORE?</span>
                            </h2>
                            <div className="space-y-4">
                                <button
                                    onClick={() => { setAnswers({ ...answers, experience: 'yes' }); handleNext(); }}
                                    className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group"
                                >
                                    YES, I HAVE EXPERIENCE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                                <button
                                    onClick={() => { setAnswers({ ...answers, experience: 'no' }); handleNext(); }}
                                    className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group"
                                >
                                    NO EXPERIENCE AT ALL <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="text-center mb-8">
                                <div className="bg-[#FF4A22] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle2 size={32} />
                                </div>
                                <h2 className="text-3xl font-dela tracking-tighter uppercase leading-none mb-2">
                                    GOOD NEWS! <br />
                                    <span className="accent-text">YOU QUALIFY.</span>
                                </h2>
                                <p className="font-bold text-sm opacity-60 uppercase tracking-widest">
                                    Analyzing your profile... 100% Match found.
                                </p>
                            </div>

                            <div className="space-y-6">
                                <p className="font-bold text-center leading-relaxed">
                                    Enter your email to receive your custom <strong>Vietnam Teaching Cheat Sheet</strong> and see the exact steps to get hired.
                                </p>

                                <form onSubmit={handleFinish} className="space-y-4">
                                    <input
                                        type="email"
                                        placeholder="Where should we send your results?"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-4 border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all text-center"
                                    />
                                    <button
                                        type="submit"
                                        className="w-full bg-[#FF4A22] text-white py-6 font-dela text-xl border-2 border-black sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2 group"
                                    >
                                        SEE MY RESULTS & GUIDE <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </form>

                                <p className="text-[10px] font-bold text-center opacity-30 uppercase tracking-widest px-4">
                                    We respect your privacy. No spam. Just the roadmap to Vietnam.
                                </p>
                            </div>
                        </div>
                    )}

                </div>

                {/* Social Proof */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] font-bold opacity-30 uppercase tracking-[0.3em]">
                        JOIN 700+ NON-NATIVE TEACHERS ALREADY WORKING IN VIETNAM
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
