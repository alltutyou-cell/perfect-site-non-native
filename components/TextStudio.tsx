
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { StudioMessage } from '../types';

const TextStudio: React.FC = () => {
  const [messages, setMessages] = useState<StudioMessage[]>([
    { role: 'ai', content: 'SYSTEM READY. WHAT ARE WE BUILDING?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: StudioMessage = { role: 'user', content: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await geminiService.generateText(input);
      const aiMsg: StudioMessage = { role: 'ai', content: response.toUpperCase(), timestamp: new Date() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: 'ERROR: SIGNAL LOST.', timestamp: new Date() }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[600px] bg-[#F8F0DD]">
      <div className="p-6 border-b-2 border-black bg-white flex justify-between items-center">
        <h2 className="text-2xl font-dela">AI_WRITER_LOG</h2>
        <button 
          onClick={() => setMessages([{ role: 'ai', content: 'HISTORY WIPED. STARTING FRESH.', timestamp: new Date() }])}
          className="text-xs font-bold bg-black text-white px-3 py-1 sticker-shadow"
        >
          RESET
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`
              max-w-[85%] border-2 border-black p-4 text-base font-bold sticker-shadow
              ${msg.role === 'user' 
                ? 'bg-[#FF4A22] text-white rotate-1' 
                : 'bg-white text-black -rotate-1'}
            `}>
              <div className="whitespace-pre-wrap">{msg.content}</div>
              <div className={`mt-2 text-[10px] uppercase opacity-60`}>
                {msg.timestamp.toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-black text-white px-4 py-2 font-dela text-xs animate-pulse">
              PROCESSING...
            </div>
          </div>
        )}
      </div>

      <div className="p-6 bg-white border-t-4 border-black">
        <div className="flex gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSend(); }}
            placeholder="TYPE_YOUR_PROMPT_HERE"
            className="flex-1 bg-white border-2 border-black rounded-none px-5 py-4 font-bold focus:outline-none focus:bg-[#F8F0DD] transition-all"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="bg-[#FF4A22] text-white border-2 border-black px-8 font-dela sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            SEND
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextStudio;
