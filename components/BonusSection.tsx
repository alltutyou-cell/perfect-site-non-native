
import React from 'react';

const BonusSection: React.FC = () => {
  const bonuses = [
    {
      id: "1",
      title: "THE INTERVIEW CHEAT SHEET",
      items: [
        "10 MOST COMMON INTERVIEW QUESTIONS",
        "WORD-FOR-WORD ANSWERS YOU CAN USE",
        "BODY LANGUAGE TIPS FOR VN CONTEXT"
      ],
      value: "$27 VALUE"
    },
    {
      id: "2",
      title: "COST OF LIVING CALCULATOR",
      items: [
        "AVERAGE MONTHLY COSTS BREAKDOWN",
        "REALISTIC SAVINGS ESTIMATIONS",
        "HIDDEN COSTS OF LIVING ABROAD"
      ],
      value: "$17 VALUE"
    },
    {
      id: "3",
      title: "FIRST WEEK SURVIVAL GUIDE",
      items: [
        "WHERE TO GET A SIM & EXCHANGE MONEY",
        "FINDING FOOD & ACCOMMODATION",
        "BASIC VIETNAMESE SURVIVAL PHRASES"
      ],
      value: "$15 VALUE"
    }
  ];

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-dela accent-text italic text-xl mb-2">WAIT, THERE'S MORE...</p>
          <h2 className="text-7xl md:text-[140px] font-dela leading-none tracking-tighter italic">
            CRAZY <span className="accent-text">FREE</span> STUFF.
          </h2>
          <p className="font-bold text-black/40 uppercase tracking-[0.2em] mt-4">INCLUDED WITH YOUR $19 PURCHASE TODAY</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {bonuses.map((bonus) => (
            <div key={bonus.id} className="bg-white border-4 border-black p-8 relative min-h-[400px] flex flex-col card-shadow">
              <div className="corner-tag">{bonus.id}</div>
              
              <h3 className="text-2xl font-dela mb-8 leading-tight">{bonus.title}</h3>
              
              <ul className="space-y-4 mb-12">
                {bonus.items.map((item, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-xs font-bold leading-relaxed">
                    <span className="accent-text">•</span> {item}
                  </li>
                ))}
              </ul>

              <div className="dashed-divider">
                <p className="accent-text font-dela text-xs italic">{bonus.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
