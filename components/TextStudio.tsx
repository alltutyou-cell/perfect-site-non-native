
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { StudioMessage } from '../types';

const TextStudio: React.FC = () => {
  const [messages, setMessages] = useState<StudioMessage[]>([
    { role: 'ai', content: 'SYSTEM READY. I AM YOUR RECRUITMENT CLONE. WHAT DO WE NEED TO GENERATE?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const shortcuts = [
    {
      label: "GENERATE CV",
      prompt: "Write a professional CV for a non-native English teacher for a Vietnamese school. Highlight 'cultural adaptability' and 'clear communication' over native status. Use a bold, modern structure."
    },
    {
      label: "INTRO SCRIPT",
      prompt: "Write a 60-second video introduction script for a non-native teacher. Focus on energy, classroom presence, and a clear greeting. Make it sound confident and professional."
    },
    {
      label: "HANDLE ACCENT",
      prompt: "Write a professional email reply to a school that is asking if I am a 'native speaker'. Explain the value of a non-native teacher with high-level certification and experience."
    }
  ];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (customPrompt?: string) => {
    const textToSend = customPrompt || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: StudioMessage = { role: 'user', content: customPrompt ? `[QUICK_ACTION]: ${customPrompt.slice(0, 30)}...` : textToSend, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    if (!customPrompt) setInput('');
    setLoading(true);

    try {
      const systemInstruction = `
        YOU ARE THE ELITE RECRUITMENT CLONE FOR 'NOT NATIVE. NOT SORRY.' 
        YOUR GOAL IS TO HELP NON-NATIVE ENGLISH TEACHERS GET HIRED IN VIETNAM.

        KNOWLEDGE BASE:
        1. THE 30-DAY PLAN:
           - WEEK 1: RECORD INTRO VIDEO. FOCUS ON ENERGY, CLEAR PRONUNCIATION, AND PROFESSIONAL BACKDROP.
           - WEEK 2: CV & APPLICATIONS. HIGHLIGHT TEACHING SKILLS OVER ACCENT. APPLY TO VERIFIED SCHOOLS.
           - WEEK 3: INTERVIEW PREP. USE Q&A CHEAT SHEETS. FOCUS ON CLASSROOM MANAGEMENT ANSWERS.
           - WEEK 4: VISA & ARRIVAL. DOCUMENTS NEEDED: DEGREE, CRIMINAL RECORD CHECK, TEFL/CELTA.

        2. MARKET REALITY:
           - SALARIES FOR NON-NATIVES: $1,200 - $2,100+ USD PER MONTH.
           - CITIES: HANOI (HIGH DEMAND), HCMC (MODERN), DA NANG (LIFESTYLE).
           - OBJECTION HANDLING: IF A SCHOOL ASKS FOR 'NATIVE', REPLY BY HIGHLIGHTING BILINGUAL EMPATHY (YOU UNDERSTAND THE STRUGGLE OF LEARNING ENGLISH BETTER THAN NATIVES).

        3. OUTPUT STYLE:
           - ALL OUTPUT MUST BE IN UPPERCASE.
           - BE BOLD, TRANSPARENT, AND NO-BS. 
           - DO NOT APOLOGIZE FOR BEING NON-NATIVE.
           - USE RECRUITMENT TERMINOLOGY (KPI, B-ROLL, DEMO, VETTING).
      `;
      const response = await geminiService.generateText(textToSend, systemInstruction);
      const aiMsg: StudioMessage = { role: 'ai', content: response, timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: 'ERROR: SIGNAL LOST.', timestamp: new Date() }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[700px] bg-[#F8F0DD] border-4 border-black card-shadow overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b-4 border-black bg-white flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-dela">RECRUITMENT_CLONE_V1</h2>
          <p className="text-[10px] font-bold opacity-50">GENERATE_HIGH_CONVERSION_ASSETS_INSTANTLY</p>
        </div>
        <button
          onClick={() => setMessages([{ role: 'ai', content: 'HISTORY WIPED. READY FOR NEW COMMAND.', timestamp: new Date() }])}
          className="text-xs font-dela bg-black text-white px-4 py-2 hover:bg-[#FF4A22] transition-colors"
        >
          RESET_CORE
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:flex-row overflow-hidden">

        {/* Shortcuts Sidebar */}
        <div className="w-full md:w-64 bg-white border-b-4 md:border-b-0 md:border-r-4 border-black p-4 space-y-4">
          <p className="font-dela text-[10px] opacity-40 mb-2">QUICK_ACTIONS</p>
          {shortcuts.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSend(s.prompt)}
              disabled={loading}
              className="w-full text-left p-4 border-2 border-black font-dela text-xs hover:bg-[#FF4A22] hover:text-white transition-all sticker-shadow active:translate-y-1 active:shadow-none"
            >
              {s.label}
            </button>
          ))}
          <div className="mt-8 p-3 bg-black text-[#FF4A22] text-[9px] font-bold uppercase leading-tight">
            AI IS TUNED TO OVERCOME NATIVE-ONLY BIAS IN REAL-TIME.
          </div>
        </div>

        {/* Chat Log */}
        <div className="flex-1 flex flex-col min-w-0">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[85%] border-2 border-black p-4 text-sm font-bold sticker-shadow
                  ${msg.role === 'user'
                    ? 'bg-[#FF4A22] text-white'
                    : 'bg-white text-black'}
                `}>
                  <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
                  <div className="mt-2 text-[8px] uppercase opacity-40">
                    {msg.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-black text-white px-4 py-2 font-dela text-xs animate-pulse">
                  CLONING_INTELLIGENCE...
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t-4 border-black">
            <div className="flex gap-4">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
                placeholder="TYPE_CUSTOM_COMMAND"
                className="flex-1 bg-white border-2 border-black px-5 py-4 font-bold focus:outline-none focus:bg-[#F8F0DD] transition-all text-sm"
              />
              <button
                onClick={() => handleSend()}
                disabled={!input.trim() || loading}
                className="bg-black text-white px-8 font-dela text-sm hover:bg-[#FF4A22] transition-colors disabled:opacity-30"
              >
                EXECUTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextStudio;

