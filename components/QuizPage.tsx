
import React, { useState, useEffect, useRef } from 'react';
import {
    ChevronRight,
    ArrowRight,
    CheckCircle2,
    XCircle,
    Loader2,
    GraduationCap,
    Globe,
    MessageSquare,
    Briefcase,
    Search,
    Instagram
} from 'lucide-react';

const ALL_COUNTRIES = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan",
    "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi",
    "Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)",
    "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia",
    "Fiji", "Finland", "France",
    "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana",
    "Haiti", "Holy See", "Honduras", "Hungary",
    "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
    "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan",
    "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (formerly Burma)",
    "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway",
    "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
    "Qatar",
    "Romania", "Russia", "Rwanda",
    "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu",
    "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan",
    "Vanuatu", "Venezuela", "Vietnam",
    "Yemen",
    "Zambia", "Zimbabwe"
];

const QuizPage: React.FC = () => {
    const [step, setStep] = useState(0);
    const [isAnalyzing, setIsAnalyzing] = useState(false);
    const [analysisText, setAnalysisText] = useState('Syncing with Vietnam local school database...');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [instagram, setInstagram] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const [answers, setAnswers] = useState({
        degree: '',
        nationality: '',
        fluency: '',
        experience: ''
    });

    const totalSteps = 5;

    const handleNext = () => {
        if (step === 3) {
            startAnalysis();
        } else {
            setStep(prev => prev + 1);
        }
    };

    const startAnalysis = () => {
        setIsAnalyzing(true);
        const steps = [
            "Syncing with local school databases...",
            `Checking non-native hiring quotas for ${answers.nationality || 'your country'}...`,
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
                setStep(4);
            }
        }, 800);
    };

    const handleCountryChange = (val: string) => {
        setAnswers({ ...answers, nationality: val });
        if (val.length > 1) {
            const filtered = ALL_COUNTRIES.filter(c =>
                c.toLowerCase().includes(val.toLowerCase())
            ).slice(0, 5);
            setSuggestions(filtered);
            setShowSuggestions(true);
        } else {
            setSuggestions([]);
            setShowSuggestions(false);
        }
    };

    const selectCountry = (country: string) => {
        setAnswers({ ...answers, nationality: country });
        setShowSuggestions(false);
        handleNext();
    };

    const handleFinish = (e: React.FormEvent) => {
        e.preventDefault();

        // Pack all data for Kommo CRM / Webhook
        const leadData = {
            firstName,
            email,
            instagram,
            ...answers,
            source: 'Instagram Quiz',
            timestamp: new Date().toISOString()
        };

        console.log('Pushing to Kommo CRM:', leadData);

        const loc = encodeURIComponent(answers.nationality || 'Global');
        const name = encodeURIComponent(firstName);
        window.location.href = `/guide?captured=true&loc=${loc}&name=${name}`;
    };

    return (
        <div className="min-h-screen bg-[#F8F0DD] text-black font-space flex flex-col items-center justify-center p-4">
            <div className="max-w-xl w-full">

                {/* Header */}
                {!isAnalyzing && step < 4 && (
                    <div className="text-center mb-8 animate-in fade-in zoom-in duration-700">
                        <h1 className="font-dela text-2xl md:text-3xl tracking-tighter leading-none mb-2">
                            THE <span className="accent-text">VIETNAM</span> ELIGIBILITY <br />
                            ROUTER
                        </h1>
                        <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em]">
                            Analyzing teacher placements in real-time.
                        </p>
                    </div>
                )}

                {/* Progress Bar */}
                {!isAnalyzing && step < 4 && (
                    <div className="w-full h-1 bg-black/10 mb-8 overflow-hidden rounded-full">
                        <div
                            className="h-full bg-[#FF4A22] transition-all duration-500 ease-out"
                            style={{ width: `${(step / 4) * 100}%` }}
                        ></div>
                    </div>
                )}

                {/* Quiz Card */}
                <div className="bg-white border-4 border-black p-8 md:p-12 card-shadow min-h-[480px] flex flex-col justify-center relative overflow-hidden">

                    {isAnalyzing ? (
                        <div className="flex flex-col items-center justify-center text-center animate-in fade-in duration-300">
                            <Loader2 className="w-16 h-16 text-[#FF4A22] animate-spin mb-6" />
                            <p className="font-dela text-xl tracking-tighter leading-none mb-4 uppercase">Verifying marketplace data...</p>
                            <div className="w-full bg-slate-100 h-2 mb-4 border border-black">
                                <div className="h-full bg-black animate-pulse" style={{ width: '80%' }}></div>
                            </div>
                            <p className="font-bold text-sm italic opacity-70">{analysisText}</p>
                        </div>
                    ) : (
                        <>
                            {step === 0 && (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="bg-black text-white px-3 py-1 font-dela text-[10px] transform -rotate-2">STEP 01</div>
                                        <GraduationCap size={20} className="text-[#FF4A22]" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-8 tracking-tighter leading-none uppercase">
                                        DO YOU HAVE A <br />
                                        <span className="accent-text italic">UNIVERSITY DEGREE?</span>
                                    </h2>
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => { setAnswers({ ...answers, degree: 'yes' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group bg-white hover:scale-[1.02] active:scale-100"
                                        >
                                            YES, I HAVE A DEGREE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => { setAnswers({ ...answers, degree: 'no' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group bg-white hover:scale-[1.02] active:scale-100"
                                        >
                                            NO, I DON'T HAVE ONE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                    <div className="mt-8 p-3 bg-slate-50 border-l-4 border-black text-[11px] font-bold uppercase tracking-tight">
                                        💡 PRO-TIP: You can still work in Vietnam without a degree, but your visa route will be different.
                                    </div>
                                </div>
                            )}

                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="bg-black text-white px-3 py-1 font-dela text-[10px] transform rotate-2">STEP 02</div>
                                        <Globe size={20} className="text-[#FF4A22]" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-6 tracking-tighter leading-none uppercase">
                                        YOUR <span className="accent-text italic">PASSPORT</span> <br />COUNTRY?
                                    </h2>
                                    <div className="space-y-4 relative">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Start typing your country..."
                                                autoFocus
                                                className="w-full p-6 border-2 border-black font-bold text-xl focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all bg-white pl-14"
                                                value={answers.nationality}
                                                onChange={(e) => handleCountryChange(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === 'Enter' && answers.nationality.length > 2) handleNext();
                                                }}
                                            />
                                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30" size={24} />
                                        </div>

                                        {showSuggestions && suggestions.length > 0 && (
                                            <div className="absolute z-50 w-full bg-white border-2 border-black card-shadow mt-1 overflow-hidden">
                                                {suggestions.map((c, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => selectCountry(c)}
                                                        className="w-full text-left p-4 hover:bg-[#FF4A22] hover:text-white font-bold transition-colors border-b last:border-0 border-black/10"
                                                    >
                                                        {c}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        <button
                                            disabled={answers.nationality.length < 3}
                                            onClick={handleNext}
                                            className="w-full bg-black text-white py-4 font-dela text-lg border-2 border-black flex items-center justify-center gap-2 hover:bg-[#FF4A22] transition-all disabled:opacity-20 translate-y-2"
                                        >
                                            CONTINUE <ArrowRight size={20} />
                                        </button>
                                    </div>
                                    <div className="mt-8 p-3 bg-slate-50 border-l-4 border-black text-[11px] font-bold uppercase tracking-tight">
                                        📍 FACT: We have successfully placed teachers from 30+ non-native countries since 2016.
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="bg-black text-white px-3 py-1 font-dela text-[10px] transform rotate-2">STEP 03</div>
                                        <MessageSquare size={20} className="text-[#FF4A22]" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-8 tracking-tighter leading-none uppercase">
                                        HOW WOULD YOU <br />
                                        <span className="accent-text italic">RATE YOUR ENGLISH?</span>
                                    </h2>
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => { setAnswers({ ...answers, fluency: 'native' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group bg-white hover:scale-[1.02]"
                                        >
                                            FLUENT / NATIVE-LIKE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => { setAnswers({ ...answers, fluency: 'intermediate' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group bg-white hover:scale-[1.02]"
                                        >
                                            INTERMEDIATE & CLEAR <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                    <div className="mt-8 p-3 bg-slate-50 border-l-4 border-black text-[11px] font-bold uppercase tracking-tight">
                                        🗣️ NOTE: Being a "Non-Native" doesn't mean you have an accent. It just means English is your 2nd or 3rd language.
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                                    <div className="flex items-center gap-2 mb-6">
                                        <div className="bg-black text-white px-3 py-1 font-dela text-[10px] transform -rotate-1">STEP 04</div>
                                        <Briefcase size={20} className="text-[#FF4A22]" />
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-dela mb-8 tracking-tighter leading-none uppercase">
                                        HAVE YOU EVER <br />
                                        <span className="accent-text italic">TAUGHT BEFORE?</span>
                                    </h2>
                                    <div className="space-y-4">
                                        <button
                                            onClick={() => { setAnswers({ ...answers, experience: 'yes' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-[#FF4A22] hover:text-white transition-all flex justify-between items-center group bg-white hover:scale-[1.02]"
                                        >
                                            YES, I HAVE EXPERIENCE <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                        <button
                                            onClick={() => { setAnswers({ ...answers, experience: 'no' }); handleNext(); }}
                                            className="w-full text-left p-6 border-2 border-black font-bold text-xl hover:bg-black hover:text-white transition-all flex justify-between items-center group bg-white hover:scale-[1.02]"
                                        >
                                            NO EXPERIENCE AT ALL <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                    <div className="mt-8 p-3 bg-slate-50 border-l-4 border-black text-[11px] font-bold uppercase tracking-tight">
                                        🎓 DID YOU KNOW? 65% of our successful placements had ZERO teaching experience before starting.
                                    </div>
                                </div>
                            )}

                            {step === 4 && (
                                <div className="animate-in fade-in zoom-in duration-500">
                                    <div className="text-center mb-8">
                                        <div className="bg-[#FF4A22] text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 sticker-shadow">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-dela tracking-tighter uppercase leading-none mb-2">
                                            MARKETPLACE <span className="accent-text">MATCH.</span>
                                        </h2>
                                        <p className="font-bold text-xs opacity-60 uppercase tracking-[0.2em]">
                                            VERIFIED: PROFILE ELIGIBLE FOR 2026 PLACEMENT
                                        </p>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="bg-slate-50 border-2 border-black p-6 rounded-none relative">
                                            <div className="absolute -top-3 left-4 bg-black text-white text-[10px] font-dela px-2 py-1 uppercase tracking-widest">
                                                Your Profile Summary
                                            </div>
                                            <div className="grid grid-cols-2 gap-y-4 font-bold text-[10px] md:text-xs uppercase tracking-tight">
                                                <div className="opacity-40 flex items-center gap-2">
                                                    <GraduationCap size={14} className="text-[#FF4A22]" /> Degree:
                                                </div>
                                                <div className="text-right flex items-center justify-end gap-1.5">
                                                    {answers.degree === 'yes' ? (
                                                        <><CheckCircle2 size={14} className="text-green-600" /> COMPLETED</>
                                                    ) : (
                                                        <><XCircle size={14} className="text-red-500" /> NONE</>
                                                    )}
                                                </div>

                                                <div className="opacity-40 flex items-center gap-2">
                                                    <Globe size={14} className="text-[#FF4A22]" /> Passport:
                                                </div>
                                                <div className="text-right truncate ml-4" title={answers.nationality.toUpperCase()}>
                                                    {answers.nationality.toUpperCase()}
                                                </div>

                                                <div className="opacity-40 flex items-center gap-2">
                                                    <MessageSquare size={14} className="text-[#FF4A22]" /> English:
                                                </div>
                                                <div className="text-right">
                                                    {answers.fluency === 'native' ? 'NATIVE-LIKE' : 'INTERMEDIATE'}
                                                </div>

                                                <div className="opacity-40 flex items-center gap-2">
                                                    <Briefcase size={14} className="text-[#FF4A22]" /> Experience:
                                                </div>
                                                <div className="text-right flex items-center justify-end gap-1.5">
                                                    {answers.experience === 'yes' ? (
                                                        <><CheckCircle2 size={14} className="text-green-600" /> YES</>
                                                    ) : (
                                                        <><XCircle size={14} className="text-gray-400" /> NO</>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-4 bg-orange-50 border-2 border-[#FF4A22] border-dashed rounded-lg">
                                            <p className="font-bold text-xs leading-relaxed text-center italic opacity-80">
                                                Verified: We have successfully matched your profile with multiple school districts in Vietnam. Based on your inputs, we have generated your <strong>Custom Start-Up Roadmap.</strong>
                                            </p>
                                        </div>

                                        <form onSubmit={handleFinish} className="space-y-4">
                                            <div className="space-y-4">
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <input
                                                        type="text"
                                                        placeholder="First Name"
                                                        required
                                                        value={firstName}
                                                        onChange={(e) => setFirstName(e.target.value)}
                                                        className="w-full px-4 py-5 border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all text-center text-lg"
                                                    />
                                                    <input
                                                        type="email"
                                                        placeholder="Best Email Address"
                                                        required
                                                        value={email}
                                                        onChange={(e) => setEmail(e.target.value)}
                                                        className="w-full px-4 py-5 border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all text-center text-lg"
                                                    />
                                                </div>

                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="Instagram @handle (for results DM)"
                                                        value={instagram}
                                                        onChange={(e) => setInstagram(e.target.value)}
                                                        className="w-full px-4 py-5 border-2 border-black font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all text-center text-lg pl-12"
                                                    />
                                                    <Instagram className="absolute left-6 top-1/2 -translate-y-1/2 opacity-30" size={24} />
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-[#FF4A22] text-white py-6 font-dela text-xl border-2 border-black sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex flex-col items-center justify-center gap-1 group"
                                            >
                                                <span className="flex items-center gap-2">UNLOCK MY RESULTS <ArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
                                                <span className="text-[10px] font-bold opacity-60 tracking-widest">(AND DOWNLOAD THE GUIDE)</span>
                                            </button>
                                        </form>

                                        <p className="text-[10px] font-bold text-center opacity-30 uppercase tracking-widest px-4">
                                            We respect your privacy. Results sent instantly.
                                        </p>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                </div>

                {/* Social Proof */}
                <div className="mt-8 text-center px-4">
                    <p className="text-[10px] font-bold opacity-40 uppercase tracking-[0.2em] leading-relaxed">
                        TRUSTED BY TEACHERS FROM OVER 30 COUNTRIES. <br />
                        SINCE 2016.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
