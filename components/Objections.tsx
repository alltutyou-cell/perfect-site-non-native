
import React from 'react';

const Objections: React.FC = () => {
  const faqs = [
    {
      q: "BUT I HAVE AN ACCENT...",
      a: "So do 650+ teachers we've placed. Vietnamese schools don't expect you to sound like a BBC news anchor. They want you to speak clearly and confidently. We've placed teachers with Russian, Colombian, Polish, Tunisian, and Filipino accents."
    },
    {
      q: "BUT I'VE NEVER TAUGHT BEFORE...",
      a: "Neither did 80% of the teachers we've placed. Schools can teach you their curriculum. But they can't teach you to be excited about teaching. This guide gives you the exact scripts and templates to look like a professional teacher."
    },
    {
      q: "WHAT IF I GET SCAMMED?",
      a: "Section 3 of this guide shows you the 5 red-flag signs of bad schools, contract tricks to watch for, and how to verify legitimate opportunities before you waste time or money."
    }
  ];

  return (
    <section className="py-24">
      <h2 className="text-4xl font-dela mb-12 tracking-tighter">OBJECTION_HANDLING</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {faqs.map((f, i) => (
          <div key={i} className="bg-white border-2 border-black p-8 sticker-shadow">
            <h3 className="font-dela text-sm mb-4 accent-text">{f.q}</h3>
            <p className="text-sm font-bold leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objections;
