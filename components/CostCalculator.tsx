
import React, { useState } from 'react';

const CostCalculator: React.FC = () => {
    const [city, setCity] = useState<'HANOI' | 'HCMC' | 'DANANG'>('HANOI');
    const [lifestyle, setLifestyle] = useState<'BUDGET' | 'COMFORTABLE' | 'LUXURY'>('COMFORTABLE');

    // Base costs per city
    const cityData = {
        HANOI: { rent: 450, food: 250, transport: 50, salary: 1600 },
        HCMC: { rent: 550, food: 300, transport: 70, salary: 1700 },
        DANANG: { rent: 400, food: 220, transport: 40, salary: 1500 }
    };

    // Lifestyle multipliers
    const lifestyleMultipliers = {
        BUDGET: 0.7,
        COMFORTABLE: 1.0,
        LUXURY: 1.6
    };

    const currentData = cityData[city];
    const multiplier = lifestyleMultipliers[lifestyle];

    const calculateCosts = () => {
        const rent = Math.round(currentData.rent * multiplier);
        const food = Math.round(currentData.food * multiplier);
        const transport = Math.round(currentData.transport * multiplier);
        const entertainment = Math.round(150 * multiplier);
        const utilities = Math.round(40 * multiplier);
        const total = rent + food + transport + entertainment + utilities;
        const savings = currentData.salary - total;

        return { rent, food, transport, entertainment, utilities, total, savings };
    };

    const costs = calculateCosts();

    return (
        <div className="bg-white border-4 border-black p-8 card-shadow my-12" id="cost-calculator">
            <div className="text-center mb-8">
                <h2 className="font-dela text-3xl md:text-4xl mb-2">VIETNAM COST CALCULATOR</h2>
                <p className="text-sm font-bold opacity-60">ESTIMATE YOUR MONTHLY SAVINGS BASED ON REAL DATA</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                    <label className="block font-dela text-sm mb-3">CHOOSE YOUR CITY</label>
                    <div className="flex gap-2">
                        {(['HANOI', 'HCMC', 'DANANG'] as const).map(c => (
                            <button
                                key={c}
                                onClick={() => setCity(c)}
                                className={`flex-1 py-3 font-dela text-xs border-2 border-black transition-all ${city === c ? 'bg-[#FF4A22] text-white' : 'bg-white hover:bg-gray-100'}`}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                </div>
                <div>
                    <label className="block font-dela text-sm mb-3">CHOOSE LIFESTYLE</label>
                    <div className="flex gap-2">
                        {(['BUDGET', 'COMFORTABLE', 'LUXURY'] as const).map(l => (
                            <button
                                key={l}
                                onClick={() => setLifestyle(l)}
                                className={`flex-1 py-3 font-dela text-xs border-2 border-black transition-all ${lifestyle === l ? 'bg-[#FF4A22] text-white' : 'bg-white hover:bg-gray-100'}`}
                            >
                                {l}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-[#F8F0DD] border-2 border-black p-6">
                <div className="grid grid-cols-2 gap-y-4 font-bold text-sm mb-6">
                    <div className="opacity-60">Est. Salary:</div>
                    <div className="text-right">${currentData.salary}</div>
                    <div className="opacity-60">Rent:</div>
                    <div className="text-right">-${costs.rent}</div>
                    <div className="opacity-60">Food & Drink:</div>
                    <div className="text-right">-${costs.food}</div>
                    <div className="opacity-60">Transport:</div>
                    <div className="text-right">-${costs.transport}</div>
                    <div className="opacity-60">Fun/Misc:</div>
                    <div className="text-right">-${costs.entertainment + costs.utilities}</div>
                </div>

                <div className="border-t-2 border-black pt-4 flex justify-between items-center">
                    <div className="font-dela text-xl">MONTHLY SAVINGS:</div>
                    <div className={`font-dela text-3xl ${costs.savings > 0 ? 'text-[#FF4A22]' : 'text-red-600'}`}>
                        ${costs.savings}
                    </div>
                </div>
                <div className="text-center mt-2 text-xs font-bold opacity-50">
                    *YEARLY SAVINGS: ${(costs.savings * 12).toLocaleString()}
                </div>
            </div>
        </div>
    );
};

export default CostCalculator;
