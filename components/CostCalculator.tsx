
import React, { useState, useEffect } from 'react';

const CostCalculator: React.FC = () => {
    // State
    const [city, setCity] = useState<'HANOI' | 'HCMC' | 'DANANG'>('HANOI');
    const [lifestyle, setLifestyle] = useState<'SURVIVOR' | 'COMFORTABLE' | 'BALLER'>('COMFORTABLE');
    const [customMode, setCustomMode] = useState(false);
    const [showStartupDetails, setShowStartupDetails] = useState(false);

    const [salary, setSalary] = useState(1600);
    const [rent, setRent] = useState(350);
    const [food, setFood] = useState(250);
    const [transport, setTransport] = useState(30);
    const [misc, setMisc] = useState(80);

    // Data Models (Updated 2026 Reality)
    const DATA = {
        HANOI: {
            // Rent dropped to reflect $200-$250 reality for budget
            SURVIVOR: { rent: 220, food: 150, transport: 30, misc: 50 },
            COMFORTABLE: { rent: 350, food: 250, transport: 50, misc: 100 },
            BALLER: { rent: 600, food: 400, transport: 80, misc: 200 }
        },
        HCMC: {
            SURVIVOR: { rent: 250, food: 180, transport: 40, misc: 60 },
            COMFORTABLE: { rent: 450, food: 300, transport: 60, misc: 120 },
            BALLER: { rent: 750, food: 500, transport: 100, misc: 300 }
        },
        DANANG: {
            SURVIVOR: { rent: 200, food: 150, transport: 30, misc: 40 },
            COMFORTABLE: { rent: 350, food: 220, transport: 40, misc: 100 },
            BALLER: { rent: 550, food: 350, transport: 60, misc: 150 }
        }
    };

    // Update inputs when City or Lifestyle changes
    useEffect(() => {
        if (!customMode) {
            const data = DATA[city][lifestyle];
            setRent(data.rent);
            setFood(data.food);
            setTransport(data.transport);
            setMisc(data.misc);
        }
    }, [city, lifestyle, customMode]);

    const handleInputChange = (setter: (val: number) => void, val: string) => {
        setCustomMode(true);
        setter(Number(val));
    };

    // Calculations
    const totalExpenses = rent + food + transport + misc;
    const monthlySavings = salary - totalExpenses;
    const yearlySavings = monthlySavings * 12;
    const twoYearSavings = monthlySavings * 24;

    // ROI Logic
    // Using user's avg start up cost: ~$1800 (midpoint of 1550-2120)
    // Plus post-arrival costs (~$729). Total ~2500 investment.
    const startupCost = 2500;
    const monthsToBreakEven = monthlySavings > 0 ? (startupCost / monthlySavings).toFixed(1) : 'NEVER';

    // Graph
    const maxSavings = 50000;
    const graphPercent = Math.min((twoYearSavings / maxSavings) * 100, 100);
    const graphHeight = 200;

    return (
        <div className="bg-white border-4 border-black p-4 md:p-8 card-shadow w-full max-w-5xl mx-auto" id="cost-calculator">

            {/* Header */}
            <div className="text-center mb-10 border-b-4 border-black pb-6">
                <div className="inline-block bg-[#FF4A22] text-white px-3 py-1 font-dela text-xs mb-3 -rotate-2">
                    UPDATED FOR 2026
                </div>
                <h2 className="font-dela text-3xl md:text-5xl mb-2 uppercase">Your Freedom Calculator</h2>
                <p className="text-sm font-bold opacity-60 max-w-lg mx-auto">
                    STOP GUESSING. PLUG IN YOUR NUMBERS TO SEE EXACTLY HOW MUCH WEALTH YOU CAN BUILD IN 24 MONTHS.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

                {/* Left: Controls */}
                <div className="space-y-8">
                    {/* Selectors */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block font-dela text-xs mb-3 opacity-50">1. CHOOSE CITY</label>
                            <div className="flex flex-col gap-2">
                                {(['HANOI', 'HCMC', 'DANANG'] as const).map(c => (
                                    <button
                                        key={c}
                                        onClick={() => { setCity(c); setCustomMode(false); }}
                                        className={`py-2 px-4 font-dela text-xs border-2 border-black text-left hover:translate-x-1 transition-transform ${city === c ? 'bg-black text-white' : 'bg-white'}`}
                                    >
                                        {c} {city === c && '✓'}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block font-dela text-xs mb-3 opacity-50">2. LIFESTYLE</label>
                            <div className="flex flex-col gap-2">
                                {[
                                    { id: 'SURVIVOR', label: 'SURVIVOR', desc: 'Cheap Room ($200ish)' },
                                    { id: 'COMFORTABLE', label: 'COMFORTABLE', desc: 'Nice Studio ($350ish)' },
                                    { id: 'BALLER', label: 'BALLER', desc: 'Luxury ($500+)' }
                                ].map((l) => (
                                    <button
                                        key={l.id}
                                        onClick={() => { setLifestyle(l.id as any); setCustomMode(false); }}
                                        className={`py-2 px-4 border-2 border-black text-left hover:translate-x-1 transition-transform ${lifestyle === l.id ? 'bg-[#FF4A22] text-white' : 'bg-white'}`}
                                    >
                                        <div className="font-dela text-xs">{l.label}</div>
                                        <div className="text-[9px] font-bold opacity-60 uppercase">{l.desc}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-end">
                            <label className="block font-dela text-xs opacity-50">3. FINE TUNE (USD)</label>
                            {customMode && <button onClick={() => setCustomMode(false)} className="text-[9px] underline text-red-500 font-bold">RESET TO PRESETS</button>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Monthly Salary ($)</label>
                                <input
                                    type="number"
                                    value={salary}
                                    onChange={(e) => setSalary(Number(e.target.value))}
                                    className="w-full border-2 border-black p-3 font-dela text-lg focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Avg: $1200-$2100</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Rent ($)</label>
                                <input
                                    type="number"
                                    value={rent}
                                    onChange={(e) => handleInputChange(setRent, e.target.value)}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Shared: $200 | Studio: $300+</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Food & Fun ($)</label>
                                <input
                                    type="number"
                                    value={food}
                                    onChange={(e) => handleInputChange(setFood, e.target.value)}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Western food starts at $4</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Transport ($)</label>
                                <input
                                    type="number"
                                    value={transport}
                                    onChange={(e) => handleInputChange(setTransport, e.target.value)}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Grab: $1-2/trip</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Expenses Display */}
                    <div className="bg-[#F8F0DD] border-2 border-black p-4 flex justify-between items-center">
                        <div>
                            <span className="font-bold text-xs uppercase opacity-60 block">Total Monthly Burn</span>
                            <span className="text-[9px] font-bold opacity-40">INCLUDES MISC BUFFER OF ${misc}</span>
                        </div>
                        <span className="font-dela text-xl">${totalExpenses}</span>
                    </div>
                </div>

                {/* Right: Results & Graph */}
                <div className="bg-black text-white p-6 md:p-8 flex flex-col justify-between border-4 border-black relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <div className="text-[#FF4A22] font-dela text-sm mb-1">YOUR POTENTIAL</div>
                                <div className={`text-4xl md:text-5xl font-dela tracking-tighter ${monthlySavings < 0 ? 'text-red-500' : ''}`}>
                                    ${monthlySavings}
                                </div>
                                <div className="text-xs font-bold opacity-60">SAVED PER MONTH</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-dela opacity-50">${yearlySavings.toLocaleString()}</div>
                                <div className="text-[10px] font-bold opacity-40">PER YEAR</div>
                            </div>
                        </div>

                        {/* Graph */}
                        <div className="h-40 border-l-2 border-b-2 border-white/20 relative mt-4">
                            <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                <defs>
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                        <stop offset="0%" stopColor="#FF4A22" stopOpacity="0.4" />
                                        <stop offset="100%" stopColor="#FF4A22" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                {monthlySavings > 0 && <path
                                    d={`M0,${200} C400,${200 - (graphPercent * 2)} 600,${200 - (graphPercent * 2)} 1000,0 V200 H0 Z`}
                                    fill="url(#gradient)"
                                />}
                                {monthlySavings > 0 && <path
                                    d={`M0,${200} C400,${200 - (graphPercent * 2)} 600,${200 - (graphPercent * 2)} 1000,0`}
                                    fill="none" stroke="#FF4A22" strokeWidth="4"
                                />}
                            </svg>
                        </div>

                        {/* Break Even Logic */}
                        <div className="mt-6 bg-white/10 p-4 border border-white/20">
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-dela text-xs text-[#FF4A22]">INVESTMENT RECOVERY</span>
                                <button onClick={() => setShowStartupDetails(!showStartupDetails)} className="text-[9px] underline opacity-60">VIEW COST BREAKDOWN</button>
                            </div>
                            {monthlySavings > 0 ? (
                                <div className="flex justify-between items-baseline">
                                    <div className="text-[10px] font-bold opacity-60 w-2/3">
                                        Based on an estimated ~$2,500 startup cost (Flights, Visa, Agency, Survival $, Docs)...
                                    </div>
                                    <div className="text-right">
                                        <div className="font-dela text-2xl">{monthsToBreakEven} MO</div>
                                        <div className="text-[8px] font-bold">TO PROFIT</div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-red-500 font-bold text-xs uppercase">Your expenses exceed your salary.</div>
                            )}
                        </div>

                        {/* Startup Cost Modal/Panel */}
                        {showStartupDetails && (
                            <div className="absolute inset-0 bg-black/95 p-6 z-20 overflow-y-auto">
                                <div className="flex justify-between items-center mb-4 border-b border-white/20 pb-2">
                                    <h4 className="font-dela text-sm text-[#FF4A22]">STARTUP COST REALITY (2026)</h4>
                                    <button onClick={() => setShowStartupDetails(false)} className="font-bold text-lg">×</button>
                                </div>
                                <div className="space-y-3 text-[10px] font-bold opacity-80">
                                    <div className="flex justify-between"><span>✈️ FLIGHT TO VN</span><span>~$600</span></div>
                                    <div className="flex justify-between"><span>🎟️ UP2U AGENCY FEE</span><span>$750</span></div>
                                    <div className="flex justify-between"><span>🛂 BUSINESS VISA</span><span>$200</span></div>
                                    <div className="flex justify-between"><span>🍜 1ST MONTH SURVIVAL</span><span>$450+</span></div>
                                    <div className="flex justify-between opacity-50"><span>📜 DOC LEGALIZATION</span><span>~$100</span></div>
                                    <div className="flex justify-between opacity-50"><span>🎓 TEFL (IF NEEDED)</span><span>$50-$170</span></div>
                                    <div className="border-t border-white/20 pt-2 mt-2 flex justify-between text-[#FF4A22] font-dela text-xs">
                                        <span>EST. TOTAL NEEDED</span>
                                        <span>~$2,150</span>
                                    </div>
                                    <div className="mt-4 pt-2 border-t border-white/20">
                                        <p className="mb-2 italic text-[9px] opacity-60">LATER COSTS (FROM SALARY):</p>
                                        <div className="flex justify-between opacity-50"><span>📄 WORK PERMIT (50%)</span><span>~$275</span></div>
                                        <div className="flex justify-between opacity-50"><span>🆔 RESIDENCE CARD</span><span>~$72</span></div>
                                    </div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CostCalculator;
