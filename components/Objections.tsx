import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Objections: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block transform -rotate-2 mb-4">
            <span className="bg-[#FF4A22] text-white px-4 py-1 font-dela text-sm uppercase tracking-wider sticker-shadow text-center">No Experience? No Problem.</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-dela mb-6 tracking-tighter uppercase text-center">
            IS THIS RIGHT FOR YOU?
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="bg-white border-4 border-black sticker-shadow overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left p-6 md:p-8 flex items-center justify-between group"
              >
                <div className="flex items-center gap-6">
                  <span className="text-3xl hidden sm:block">{f.icon}</span>
                  <h3 className="font-dela text-lg md:text-xl accent-text hover:text-black transition-colors leading-tight">
                    {f.q}
                  </h3>
                </div>
                <div className="ml-4 flex-shrink-0 bg-black text-white p-1 rounded-sm">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-8 md:px-8 md:pb-10 md:ml-12 border-t-2 border-black/5 pt-6">
                      <p className="text-lg font-bold leading-relaxed text-black/80">
                        {f.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objections;

