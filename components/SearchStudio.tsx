
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const SearchStudio: React.FC = () => {
    const [query, setQuery] = useState('');
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        if (!query.trim() || loading) return;
        setLoading(true);
        try {
            const systemPrompt = `
        YOU ARE 'ORACLE_SEARCH', A REAL-TIME JOB HUNTER FOR VIETNAM.
        SEARCH THE WEB (SIMULATED) FOR ENGLISH TEACHING JOBS IN VIETNAM THAT ACCEPT NON-NATIVE SPEAKERS.
        
        RETURN RESULTS IN THIS FORMAT:
        [JOB_TIER]: (High/Mid/Entry)
        [SCHOOL]: (Name)
        [SALARY]: (USD Range)
        [REQUIREMENTS]: (Brief)
        [MATCH_SCORE]: (Why it fits a non-native profile)
        
        IF QUERY IS GENERAL, LIST 3 TOP CITIES AND THEIR AVG SALARIES.
        ALWAYS BE DATA-DRIVEN AND BOLD.
      `;
            const result = await geminiService.generateText(query, systemPrompt);
            setResponse(result);
        } catch (error) {
            setResponse("ERROR: CONNECTION_LOST // RETRY_SEARCH");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col h-full bg-[#F8F0DD] p-10">
            <div className="max-w-4xl mx-auto w-full">
                <div className="text-center mb-12">
                    <div className="inline-block bg-black text-white px-2 py-1 font-dela text-[10px] mb-4">ORACLE_MODE</div>
                    <h2 className="text-5xl md:text-7xl font-dela tracking-tighter leading-none mb-6">
                        GLOBAL_KNOWLEDGE<br /><span className="text-gray-400">ACCESS</span>
                    </h2>
                </div>

                <div className="bg-white border-4 border-black card-shadow p-2 flex mb-12">
                    <input
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                        placeholder="ASK_THE_ORACLE_ANYTHING..."
                        className="flex-1 p-4 font-bold text-lg outline-none uppercase placeholder:text-gray-300"
                    />
                    <button
                        onClick={handleSearch}
                        disabled={loading}
                        className="bg-[#FF4A22] text-white px-8 font-dela text-xl hover:bg-black transition-colors disabled:opacity-50"
                    >
                        {loading ? 'SCANNING...' : 'QUERY'}
                    </button>
                </div>

                {response ? (
                    <div className="bg-white border-4 border-black p-8 font-mono text-sm leading-relaxed whitespace-pre-wrap animate-in fade-in slide-in-from-bottom-4">
                        {response}
                    </div>
                ) : (
                    <div className="text-center opacity-10 font-dela text-9xl select-none pointer-events-none">
                        THE<br />ORACLE
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchStudio;
