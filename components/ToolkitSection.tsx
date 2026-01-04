
import React from 'react';

const ToolkitSection: React.FC = () => {
  const tools = [
    { title: "VIDEO SCRIPT", desc: "Word-for-word template for your intro video." },
    { title: "CV TEMPLATE", desc: "Proven layout for the Vietnamese market." },
    { title: "EMAIL SCRIPTS", desc: "Copy-paste templates for school outreach." },
    { title: "Q&A CHEAT SHEET", desc: "Every common interview question answered." }
  ];

  return (
    <section className="py-24 bg-[#F8F0DD] border-4 border-black card-shadow p-12 my-24 transform rotate-1">
      <div className="grid md:grid-cols-3 gap-12 items-center">
        <div className="md:col-span-1">
          <div className="bg-black text-white inline-block px-3 py-1 font-dela text-xs mb-4">THE_TOOLKIT</div>
          <h2 className="text-5xl font-dela tracking-tighter leading-none mb-6">
            APPLICATION<br/><span className="accent-text">TOOLKIT.</span>
          </h2>
          <p className="font-bold opacity-60 italic">Included in the $19 PDF bundle.</p>
        </div>
        
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
          {tools.map((tool, i) => (
            <div key={i} className="bg-white border-2 border-black p-6 sticker-shadow">
              <h4 className="font-dela text-sm mb-2">{tool.title}</h4>
              <p className="text-xs font-bold opacity-60">{tool.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
