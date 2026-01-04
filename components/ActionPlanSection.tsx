
import React from 'react';

const ActionPlanSection: React.FC = () => {
  const steps = [
    {
      week: "WEEK 1",
      title: "THE INTRO VIDEO",
      desc: "Record your intro video. We give you the exact script and filming instructions that make non-native accents sound professional and clear."
    },
    {
      week: "WEEK 2",
      title: "THE APPLICATION",
      desc: "Create your CV & apply to verified schools. Use our templates specifically designed for the Vietnamese market to bypass the 7-second filter."
    },
    {
      week: "WEEK 3",
      title: "INTERVIEW PREP",
      desc: "Interview prep & offer acceptance. Use our Q&A cheat sheet with word-for-word answers that Vietnamese schools love to hear."
    },
    {
      week: "WEEK 4",
      title: "VISA & ARRIVAL",
      desc: "The checklist. We explain documents step-by-step so you don't get stuck with illegal visa situations or border problems."
    }
  ];

  return (
    <section className="py-24">
      <div className="mb-16">
        <h2 className="text-4xl md:text-8xl font-dela tracking-tighter leading-none mb-4">
          YOUR <span className="accent-text">30-DAY</span><br />ACTION PLAN
        </h2>
        <p className="font-bold text-xl opacity-60">SO YOU KNOW EXACTLY WHAT TO DO NEXT.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="group relative bg-white border-4 border-black p-6 md:p-8 card-shadow hover:bg-[#FF4A22] hover:text-white transition-all w-full">
            <div className="font-dela text-3xl md:text-4xl mb-4 opacity-20 group-hover:opacity-100">{step.week}</div>
            <h3 className="font-dela text-lg md:text-xl mb-4 leading-tight">{step.title}</h3>
            <p className="text-sm font-bold leading-relaxed opacity-80 group-hover:opacity-100">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ActionPlanSection;
