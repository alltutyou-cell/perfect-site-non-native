
import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

const QuizPage: React.FC = () => {
    const [step, setStep] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisText, setAnalysisText] = useState('Syncing with Vietnam local school database...');
    const [email, setEmail] = useState('');
    const [locationData, setLocationData] = useState({
        country: '',
        city: '',
        ip: ''
    });

    const [answers, setAnswers] = useState({
        degree: '',
        fluency: '',
        experience: ''
    });

    useEffect(() => {
        // Fetch location data silently on mount
        fetch('https://ipapi.co/json/')
            .then(res => res.json())
            .then(data => {
                setLocationData({
                    country: data.country_name || '',
                    city: data.city || '',
                    ip: data.ip || ''
                });
            })
            .catch(() => {
                // Fail silently
                console.log("Location detection bypassed.");
            });
    }, []);

    const totalSteps = 4; // degree, fluency, experience, email

    const handleNext = () => {
        if (step === 2) {
            startAnalysis();
        } else {
            setStep(prev => prev + 1);
        }
    };

    const startAnalysis = () => {
        setIsAnalyzing(true);
        const steps = [
            `Detected location: ${locationData.city || 'Checking IP'}...`,
            "Syncing with local school databases...",
            `Checking hiring quotas for ${locationData.country || 'International'} applicants...`,
            "Analyzing proficiency-to-salary ratio...",
            "Calculating visa route eligibility...",
            "SUCCESS: RESULTS READY."
        ];

        let i = 0;
        const interval = setInterval(() => {
            if (i < steps.length) {
                setAnalysisText(steps[i]);
                i++;
            } else {
                clearInterval(interval);
                setIsAnalyzing(false);
                setStep(3);
            }
        }, 800);
    };

    const handleFinish = (e: React.FormEvent) => {
        e.preventDefault();
        // Pack all data for CRM/Lead capture
        const leadData = {
            email,
            ...answers,
            location: locationData.country,
            city: locationData.city,
            ip: locationData.ip
        };

        console.log('CRM Data Captured:', leadData);

        // Post redirect
        window.location.href = `/guide?captured=true&loc=${encodeURIComponent(locationData.country || 'Global')}`;
    };

    return (
        <div className="min-h-screen bg-[#F8F0DD] text-black font-space flex flex-col items-center justify-center p-4">
            <div className="max-w-xl w-full">

                {/* Russell Brunson Pattern Interrupt Header */}
                {!isAnalyzing && step < 3 && (
                    <div className="text-center mb-8 animate-in fade-in zoom-in duration-700">
                        <h1 className="font-dela text-2xl md:text-3xl tracking-tighter leading-none mb-2">
                            THE <span className="accent-text">VIETNAM</span> TEACHING <br />
                            ELIGIBILITY QUIZ
                        </h1>
                        <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">
                            Find out if you qualify in 90 seconds.
                        </p>
                    </div>
                )}

                {/* Progress Bar */}
                {!isAnalyzing && step < 3 && (
                    <div className="w-full h-1 bg-black/10 mb-8 overflow-hidden rounded-full">
                        <div
                            className="h-full bg-[#FF4A22] transition-all duration-500 ease-out"
                            style={{ width: `${(step / 3) * 100}%` }}
                        ></div>
                    </div>
                )}

                {/* Quiz Card */}
                <div className="bg-white border-4 border-black p-8 md:p-12 card-shadow min-h-[450px] flex flex-col justify-center relative overflow-hidden">

                    {isAnalyzing ? (
                        <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                            <Loader2 className="w-16 h-16 text-[#FF4A22] animate-spin mb-6" />
                            <p className="font-dela text-xl tracking-tighter leading-none mb-4">ANALYZING YOUR PROFILE...</p>
                            <div className="w-full bg-slate-100 h-2 mb-4 border border-black">
                                <div className="h-full bg-black animate-pulse" style={{ width: '80%' }}></div>
                            </div>
                            <p className="font-bold text-sm italic">{analysisText}</p>
                        </div>
                    ) : (
                        <>
                            {step === 0 && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform -rotate-2">QUESTION 01</div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-8 tracking-tighter leading-none uppercase">
                                        DO YOU HAVE A <br />
                                        <span className="accent-text italic">UNIVERSITY DEGREE?</span>
                                    </h2>
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => { setAnswers({ ...answers, degree: 'yes' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group bg-white"
                                        >
                                            YES, I HAVE A DEGREE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => { setAnswers({ ...answers, degree: 'no' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group bg-white"
                                        >
                                            NO, I DON'T HAVE ONE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                    <p className="mt-8 text-xs font-bold opacity-30 text-center italic">
                                        * Not having a degree changes your visa options, not your ability to get hired.
                                    </p>
                                </div>
                            )}

                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform rotate-2">QUESTION 02</div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-8 tracking-tighter leading-none uppercase">
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
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="inline-block bg-black text-white px-3 py-1 font-dela text-[10px] mb-6 transform -rotate-1">QUESTION 03</div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-8 tracking-tighter leading-none uppercase">
                                        HAVE YOU EVER <br />
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
                                <div className="animate-in fade-in zoom-in duration-500">
                                    <div className="text-center mb-8">
                                        <div className="bg-[#FF4A22] text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 sticker-shadow">
                                            <CheckCircle2 size={32} />
                                        </div>
                                        <h2 className="text-3xl md:text-4xl font-dela tracking-tighter uppercase leading-none mb-2">
                                            STATUS: <span className="accent-text">QUALIFIED.</span>
                                        </h2>
                                        <p className="font-bold text-xs opacity-60 uppercase tracking-[0.2em]">
                                            Analysis Complete • 100% Marketplace Match
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="p-4 bg-slate-50 border-l-4 border-black mb-6">
                                            <p className="font-bold text-sm leading-relaxed">
                                                We've successfully matched your profile with multiple school districts in Vietnam. Based on your inputs, we have generated your <strong>Custom Start-Up Roadmap.</strong>
                                            </p>
                                        </div>

                                        <form onSubmit={handleFinish} className="space-y-4">
                                            <input
                                                type="email"
                                                placeholder="Enter your best email for results..."
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-4 py-4 border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all text-center"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-[#FF4A22] text-white py-6 font-dela text-xl border-2 border-black sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col items-center justify-center gap-1 group"
                                            >
                                                <span className="flex items-center gap-2">UNLOCK MY RESULTS <ArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
                                                <span className="text-[10px] font-bold opacity-60 tracking-widest">(AND THE GUIDE)</span>
                                            </button>
                                        </form>

                                        <p className="text-[10px] font-bold text-center opacity-30 uppercase tracking-widest px-4">
                                            Your results will be sent to your inbox instantly.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                </div>

                {/* Social Proof */}
                <div className="mt-8 text-center">
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.3em]">
                        CURRENTLY ANALYZING 40+ PROFILES PER DAY
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
