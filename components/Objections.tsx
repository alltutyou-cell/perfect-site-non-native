import React from 'react';

const Objections: React.FC = () => {
  const faqs = [
    {
      q: "BUT I HAVE AN ACCENT...",
      a: "So do 700+ teachers we've placed. Vietnamese schools don't expect you to sound like a BBC news anchor. They want you to speak clearly and confidently. We've placed teachers with Russian, Colombian, Polish, Tunisian, and Filipino accents.",
      icon: "🗣️"
    },
    {
      q: "BUT I'VE NEVER TAUGHT BEFORE...",
      a: "Neither did 80% of the teachers we've placed. Schools can teach you their curriculum. But they can't teach you to be excited about teaching. This guide gives you the exact scripts and templates to look like a professional teacher.",
      icon: "🎓"
    },
    {
      q: "WHAT IF I GET SCAMMED?",
      a: "Section 3 of this guide shows you the 5 red-flag signs of bad schools, contract tricks to watch for, and how to verify legitimate opportunities before you waste time or money.",
      icon: "🛡️"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#FF4A22] rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-5 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block transform -rotate-2 mb-4">
            <span className="bg-[#FF4A22] text-white px-4 py-1 font-dela text-sm uppercase tracking-wider sticker-shadow">No Experience? No Problem.</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-dela mb-6 tracking-tighter uppercase">
            IS THIS RIGHT FOR YOU?
          </h2>
          <p className="text-xl font-bold max-w-2xl mx-auto text-gray-600">
            Let's address the elephant in the room. Here's why you don't need to worry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white border-4 border-black p-8 sticker-shadow hover:-translate-y-2 hover:shadow-[12px_12px_0px_#FF4A22] transition-all duration-300 flex flex-col h-full relative group"
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 w-fit">
                {f.icon}
              </div>
              <h3 className="font-dela text-xl mb-4 accent-text leading-tight">{f.q}</h3>
              <p className="text-base font-bold leading-relaxed">{f.a}</p>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objections;
