
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const SearchStudio: React.FC = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<{ text: string, sources: any[] } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim() || loading) return;
    setLoading(true);
    try {
      const data = await geminiService.searchWithGrounding(query);
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F0DD]">
      <div className="p-10 text-center border-b-4 border-black bg-white">
        <div className="inline-block bg-black text-white font-dela text-xs px-2 mb-2">ORACLE_MODE</div>
        <h2 className="text-5xl font-dela tracking-tighter mb-8">GLOBAL_KNOWLEDGE_ACCESS</h2>
        
        <div className="max-w-3xl mx-auto flex gap-0 border-4 border-black sticker-shadow">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }}
            placeholder="ASK_THE_ORACLE_ANYTHING..."
            className="flex-1 px-6 py-4 font-bold focus:outline-none text-xl"
          />
          <button
            onClick={handleSearch}
            className="bg-[#FF4A22] text-white font-dela px-10 hover:bg-black transition-all"
          >
            QUERY
          </button>
        </div>
      </div>

      <div className="flex-1 p-10 overflow-y-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center h-full gap-4">
            <div className="w-16 h-16 bg-[#FF4A22] animate-bounce"></div>
            <div className="font-dela text-2xl">SCANNING_WEB_INFRASTRUCTURE...</div>
          </div>
        ) : result ? (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white border-2 border-black p-8 card-shadow font-bold text-lg leading-relaxed">
              <div className="text-[#FF4A22] font-dela mb-4">RESPONSE_FOUND:</div>
              {result.text}
            </div>

            {result.sources.length > 0 && (
              <div className="space-y-4">
                <div className="font-dela text-sm">VERIFIED_SOURCES:</div>
                <div className="grid md:grid-cols-2 gap-4">
                  {result.sources.map((src, i) => (
                    src.web && (
                      <a 
                        key={i} 
                        href={src.web.uri} 
                        target="_blank" 
                        className="bg-black text-white p-4 border-2 border-black hover:bg-[#FF4A22] transition-all flex flex-col"
                      >
                        <span className="font-dela text-xs mb-1">SOURCE_{i+1}</span>
                        <span className="text-sm font-bold truncate">{src.web.title}</span>
                      </a>
                    )
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full opacity-10">
            <div className="font-dela text-9xl leading-none">THE<br/>ORACLE</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchStudio;
