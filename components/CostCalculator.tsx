
import React, { useState } from 'react';

const CostCalculator: React.FC = () => {
    // Default values for HANOI (Standard)
    const [city, setCity] = useState<'HANOI' | 'HCMC' | 'DANANG' | 'CUSTOM'>('HANOI');
    const [salary, setSalary] = useState(1600);
    const [rent, setRent] = useState(450);
    const [food, setFood] = useState(250);
    const [transport, setTransport] = useState(50);
    const [misc, setMisc] = useState(190);

    // City presets
    const applyPreset = (cityName: 'HANOI' | 'HCMC' | 'DANANG') => {
        setCity(cityName);
        if (cityName === 'HANOI') { setRent(450); setFood(250); setTransport(50); setMisc(190); }
        if (cityName === 'HCMC') { setRent(550); setFood(300); setTransport(70); setMisc(200); }
        if (cityName === 'DANANG') { setRent(400); setFood(220); setTransport(40); setMisc(150); }
    };

    // Calculations
    const totalExpenses = rent + food + transport + misc;
    const monthlySavings = salary - totalExpenses;
    const yearlySavings = monthlySavings * 12;
    const twoYearSavings = monthlySavings * 24;

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
                    STOP GUESSING. PLUG IN YOUR NUMBERS TO SEE EXACTLY HOW MUCH WEALTH YOU CAN BUILD IN 24 MONTHS.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">

                {/* Left: Controls */}
                <div className="space-y-8">
                    {/* City Selector */}
                    <div>
                        <label className="block font-dela text-xs mb-3 opacity-50">STEP 1: CHOOSE A BASELINE</label>
                        <div className="flex gap-2">
                            {(['HANOI', 'HCMC', 'DANANG'] as const).map(c => (
                                <button
                                    key={c}
                                    onClick={() => applyPreset(c)}
                                    className={`flex-1 py-3 font-dela text-xs border-2 border-black transition-all ${city === c ? 'bg-black text-white' : 'bg-white hover:bg-gray-100'}`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <label className="block font-dela text-xs mb-3 opacity-50">STEP 2: CUSTOMIZE YOUR LIFESTYLE (USD)</label>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Monthly Salary ($)</label>
                                <input
                                    type="number"
                                    value={salary}
                                    onChange={(e) => { setSalary(Number(e.target.value)); setCity('CUSTOM') }}
                                    className="w-full border-2 border-black p-3 font-dela text-lg focus:bg-[#F8F0DD] outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Rent ($)</label>
                                <input
                                    type="number"
                                    value={rent}
                                    onChange={(e) => { setRent(Number(e.target.value)); setCity('CUSTOM') }}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Food & Fun ($)</label>
                                <input
                                    type="number"
                                    value={food}
                                    onChange={(e) => { setFood(Number(e.target.value)); setCity('CUSTOM') }}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                            </div>
                            <div>
                                <label className="text-[10px] font-bold uppercase mb-1 block">Transport ($)</label>
                                <input
                                    type="number"
                                    value={transport}
                                    onChange={(e) => { setTransport(Number(e.target.value)); setCity('CUSTOM') }}
                                    className="w-full border-2 border-black p-3 font-bold focus:bg-[#F8F0DD] outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Total Expenses Display */}
                    <div className="bg-[#F8F0DD] border-2 border-black p-4 flex justify-between items-center">
                        <span className="font-bold text-xs uppercase opacity-60">Total Monthly Burn</span>
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
                                {/* The Curve */}
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="0%" stopColor="#FF4A22" stopOpacity="0.4" />
                                            <stop offset="100%" stopColor="#FF4A22" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                    {/* Line */}
                                    <path
                                        d={`M0,${graphHeight} L${1000},0`}
                                        vectorEffect="non-scaling-stroke"
                                        stroke="#FF4A22"
                                        strokeWidth="4"
                                        fill="none"
                                        className="w-full"
                                        style={{ transform: 'scaleY(-1)' }}
                                    />
                                </svg>

                                {/* CSS Bar Graph Simulation for "Wealth Stacking" */}
                                <div className="absolute bottom-0 left-0 right-0 top-0 flex items-end justify-between px-2">
                                    {[...Array(12)].map((_, i) => (
                                        <div
                                            key={i}
                                            className="w-full bg-[#FF4A22] opacity-80 mx-1 hover:opacity-100 transition-opacity"
                                            style={{ height: `${((i + 1) / 12) * 100}%` }}
                                        ></div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-6 flex justify-between items-center bg-white/10 p-4 border border-white/20">
                                <span className="font-dela text-xs">24-MONTH WEALTH:</span>
                                <span className="font-dela text-2xl text-[#FF4A22]">${twoYearSavings.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-[10px] font-bold uppercase opacity-40">
                    *Estimates based on current 2024 tax rates and living costs.
                    Your actual savings depend on your discipline.
                </p>
            </div>
        </div>
    );
};

export default CostCalculator;
