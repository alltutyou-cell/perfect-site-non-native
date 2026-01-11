
import React, { useState, useEffect } from 'react';

const CostCalculator: React.FC = () => {
    // State
    const [city, setCity] = useState<'HANOI' | 'HCMC' | 'DANANG'>('HANOI');
    const [lifestyle, setLifestyle] = useState<'SURVIVOR' | 'COMFORTABLE' | 'BALLER'>('COMFORTABLE');
    const [customMode, setCustomMode] = useState(false);

    const [salary, setSalary] = useState(1600);
    const [rent, setRent] = useState(450);
    const [food, setFood] = useState(250);
    const [transport, setTransport] = useState(50);
    const [misc, setMisc] = useState(100);

    // Data Models
    const DATA = {
        HANOI: {
            SURVIVOR: { rent: 300, food: 150, transport: 30, misc: 50 },
            COMFORTABLE: { rent: 450, food: 250, transport: 50, misc: 100 },
            BALLER: { rent: 650, food: 400, transport: 80, misc: 200 }
        },
        HCMC: {
            SURVIVOR: { rent: 350, food: 180, transport: 40, misc: 60 },
            COMFORTABLE: { rent: 550, food: 300, transport: 70, misc: 120 },
            BALLER: { rent: 800, food: 500, transport: 100, misc: 300 }
        },
        DANANG: {
            SURVIVOR: { rent: 250, food: 150, transport: 30, misc: 40 },
            COMFORTABLE: { rent: 400, food: 220, transport: 40, misc: 100 },
            BALLER: { rent: 600, food: 350, transport: 60, misc: 150 }
        }
    };

    // Update inputs when City or Lifestyle changes (unless in custom mode)
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

    // Graph Scale Logic
    const maxSavings = 50000; // Cap for visualization
    const graphPercent = Math.min((twoYearSavings / maxSavings) * 100, 100);
    const graphHeight = 200;

    return (
        <div className="bg-white border-4 border-black p-4 md:p-8 card-shadow w-full max-w-5xl mx-auto" id="cost-calculator">

            {/* Header */}
            <div className="text-center mb-10 border-b-4 border-black pb-6">
                <div className="inline-block bg-[#FF4A22] text-white px-3 py-1 font-dela text-xs mb-3 -rotate-2">
                    OFFICIAL_TOOL
                </div>
                <h2 className="font-dela text-3xl md:text-5xl mb-2 uppercase">Your Freedom Calculator</h2>
                <p className="text-sm font-bold opacity-60 max-w-lg mx-auto">
                    STOP GUESSING. USE OUR REALISTIC MARKET DATA TO PROJECT YOUR WEALTH.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

                {/* Left: Controls */}
                <div className="space-y-8">
                    {/* Selectors */}
                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <label className="block font-dela text-xs mb-3 opacity-50">1. CHOOSY CITY</label>
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
                                    { id: 'SURVIVOR', label: 'SURVIVOR', desc: 'Minimalist' },
                                    { id: 'COMFORTABLE', label: 'COMFORTABLE', desc: 'Standard expat' },
                                    { id: 'BALLER', label: 'BALLER', desc: 'Live large' }
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
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Avg non-native: $1200-$2100</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Rent ($)</label>
                                <input
                                    type="number"
                                    value={rent}
                                    onChange={(e) => handleInputChange(setRent, e.target.value)}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Studio: $300 | 2-Bed: $600+</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Food & Fun ($)</label>
                                <input
                                    type="number"
                                    value={food}
                                    onChange={(e) => handleInputChange(setFood, e.target.value)}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Street food: $1-2 | Western meal: $8-15</p>
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Transport ($)</label>
                                <input
                                    type="number"
                                    value={transport}
                                    onChange={(e) => handleInputChange(setTransport, e.target.value)}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                                <p className="text-[9px] mt-1 opacity-50 font-bold">Grab bike: $1-2 per trip</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Expenses Display */}
                    <div className="bg-[#F8F0DD] border-2 border-black p-4 flex justify-between items-center">
                        <div>
                            <span className="font-bold text-xs uppercase opacity-60 block">Total Monthly Burn</span>
                            {customMode && <span className="text-[9px] text-[#FF4A22] font-bold">CUSTOMIZED*</span>}
                        </div>
                        <span className="font-dela text-xl">${totalExpenses}</span>
                    </div>
                </div>

                {/* Right: Results & Graph */}
                <div className="bg-black text-white p-6 md:p-8 flex flex-col justify-between border-4 border-black relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

                    <div className="relative z-10">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <div className="text-[#FF4A22] font-dela text-sm mb-1">YOUR POTENTIAL</div>
                                <div className="text-4xl md:text-5xl font-dela tracking-tighter">
                                    ${monthlySavings}
                                </div>
                                <div className="text-xs font-bold opacity-60">SAVED PER MONTH</div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-dela opacity-50">${yearlySavings.toLocaleString()}</div>
                                <div className="text-[10px] font-bold opacity-40">PER YEAR</div>
                            </div>
                        </div>

                        {/* Visual Graph Area */}
                        <div className="mt-8">
                            <div className="flex justify-between text-[10px] font-bold opacity-40 mb-2 uppercase">
                                <span>Start (Day 1)</span>
                                <span>Goal (24 Months)</span>
                            </div>

                            {/* Graph Container */}
                            <div className="h-48 border-l-2 border-b-2 border-white/20 relative">
                                {/* The Dynamic Curve */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#FF4A22" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#FF4A22" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path
                                        d={`M0,${graphHeight} C400,${graphHeight - (graphPercent * 2)} 600,${graphHeight - (graphPercent * 2)} 1000,0`}
                                        vectorEffect="non-scaling-stroke"
                                        stroke="#FF4A22"
                                        strokeWidth="4"
                                        fill="none"
                                        className="w-full"
                                    />
                                    {/* Filled Area */}
                                    <path
                                        d={`M0,${graphHeight} C400,${graphHeight - (graphPercent * 2)} 600,${graphHeight - (graphPercent * 2)} 1000,0 V${graphHeight} H0 Z`}
                                        fill="url(#gradient)"
                                        className="w-full"
                                    />
                                </svg>
                            </div>

                            <div className="mt-6 flex justify-between items-center bg-white/10 p-4 border border-white/20">
                                <div>
                                    <div className="font-dela text-xs">24-MONTH WEALTH</div>
                                    <div className="text-[9px] opacity-50">COMPOUND POTENTIAL</div>
                                </div>
                                <span className="font-dela text-3xl text-[#FF4A22]">${twoYearSavings.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center bg-gray-100 p-4 border-2 border-black/10">
                <p className="text-[10px] font-bold uppercase opacity-50 max-w-2xl mx-auto">
                    *DISCLAIMER: 'Survivor' is tight but doable. 'Comfortable' is typical for teachers. 'Baller' is for those who want Western luxuries. Values are estimates based on 2024 market rates.
                </p>
            </div>
        </div>
    );
};

export default CostCalculator;
