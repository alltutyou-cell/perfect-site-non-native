
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ProfileEvaluator: React.FC = () => {
  const [profile, setProfile] = useState('');
  const [evaluating, setEvaluating] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const handleEvaluate = async () => {
    if (!profile.trim()) return;
    setEvaluating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const prompt = `
        Context: The user wants to teach English in Vietnam as a non-native speaker.
        User Background: ${profile}
        Task: 
        1. Evaluate potential for landing a $1200-$2000/month job.
        2. Give a "Readiness Score" out of 100.
        3. Brand voice: "Not Native. Not Sorry." (aggressive, honest, high-impact).
        4. Max 100 words. ALL CAPS headers.
      `;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt
      });
      setResult(response.text || "Connection failed.");
    } catch (err) {
      setResult("SYSTEM ERROR: OFFLINE.");
    } finally {
      setEvaluating(false);
    }
  };

  return (
    <div className="bg-black text-white border-4 border-black p-10 card-shadow max-w-3xl mx-auto relative overflow-hidden">
      <div className="absolute top-0 right-0 p-2 opacity-10 font-dela text-8xl pointer-events-none">?</div>
      
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-[#FF4A22] flex items-center justify-center font-dela text-xl">X</div>
        <h2 className="text-2xl font-dela">AI_PROFILE_SCANNER</h2>
      </div>

      {!result ? (
        <div className="space-y-6">
          <p className="text-sm font-bold opacity-60 uppercase tracking-widest">Paste your background (Nationality, degree, experience, level) for instant assessment.</p>
          <textarea 
            value={profile}
            onChange={(e) => setProfile(e.target.value)}
            placeholder="Ex: Poland, Degree in Finance, Zero experience, C1 English..."
            className="w-full h-32 bg-zinc-900 border-2 border-white/20 p-4 font-bold focus:outline-none focus:border-[#FF4A22] transition-all text-sm"
          />
          <button 
            onClick={handleEvaluate}
            disabled={evaluating || !profile}
            className="bg-[#FF4A22] text-white font-dela text-lg py-4 w-full border-2 border-black sticker-shadow hover:bg-white hover:text-black transition-all disabled:opacity-50"
          >
            {evaluating ? 'SCANNING...' : 'CHECK_MY_CHANCES'}
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-in fade-in duration-500">
          <div className="bg-zinc-900 border border-white/10 p-6 font-bold text-sm leading-relaxed whitespace-pre-wrap">
            {result}
          </div>
          <button 
            onClick={() => {setResult(null); setProfile('');}}
            className="font-dela text-xs accent-text hover:underline"
          >
            NEW_SCAN
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileEvaluator;
