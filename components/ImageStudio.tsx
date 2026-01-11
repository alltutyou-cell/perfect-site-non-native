
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const presets = [
    {
      label: "PRO HEADSHOT",
      prompt: "A high-quality professional studio portrait of a friendly English teacher, smart-casual dress, clean neutral background, soft professional lighting, looking into camera, smiling naturally. 8k, cinematic photo.",
      icon: "👤"
    },
    {
      label: "CLASSROOM VIBE",
      prompt: "A cinematic wide-angle photo of a modern, colorful classroom in Vietnam with whiteboards, low tables for kids, and educational posters. Bright, airy, and professional atmosphere.",
      icon: "🏫"
    },
    {
      label: "ACTION SHOT",
      prompt: "A professional photo of a teacher's hands holding a red marker pointing at a clear English grammar lesson on a whiteboard. Close-up, blurred classroom background.",
      icon: "✏️"
    }
  ];

  const handleGenerate = async (customPrompt?: string) => {
    const textToGen = customPrompt || prompt;
    if (!textToGen.trim() || loading) return;
    setLoading(true);
    try {
      const img = await geminiService.generateImage(textToGen, aspectRatio);
      setGeneratedImage(img);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full min-h-[600px] bg-[#F8F0DD] border-4 border-black card-shadow overflow-hidden">
      {/* Control Panel */}
      <div className="w-full md:w-80 p-8 border-b-4 md:border-b-0 md:border-r-4 border-black bg-white flex flex-col">
        <h2 className="text-3xl font-dela leading-none mb-1">IMAGE_AGENT_01</h2>
        <p className="text-[10px] font-bold text-[#FF4A22] mb-8 tracking-tighter">GENERATE_TRUST_BUILDING_VISUALS</p>

        <div className="flex-1 space-y-6">
          <div>
            <label className="block text-[10px] font-dela mb-3 opacity-40">ONE_CLICK_PRESETS</label>
            <div className="space-y-2">
              {presets.map((p, i) => (
                <button
                  key={i}
                  onClick={() => handleGenerate(p.prompt)}
                  disabled={loading}
                  className="w-full flex items-center gap-3 p-3 border-2 border-black font-dela text-[10px] hover:bg-[#FF4A22] hover:text-white transition-all bg-white sticker-shadow active:translate-y-1 active:shadow-none"
                >
                  <span className="text-lg">{p.icon}</span>
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t-2 border-black/5">
            <label className="block text-[10px] font-dela mb-2 opacity-40">CUSTOM_PROMPT</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Input your vision..."
              className="w-full h-24 bg-[#F8F0DD] border-2 border-black p-3 font-bold text-xs focus:outline-none resize-none"
            />
          </div>

          <div>
            <label className="block text-[10px] font-dela mb-2 opacity-40">RATIO</label>
            <div className="grid grid-cols-3 gap-2">
              {(['1:1', '16:9', '9:16'] as const).map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`
                    py-2 font-dela text-[10px] border-2 border-black transition-all
                    ${aspectRatio === ratio
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-[#F8F0DD]'}
                  `}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleGenerate()}
            disabled={!prompt.trim() || loading}
            className="w-full py-4 bg-[#FF4A22] text-white font-dela text-lg hover:bg-black transition-all sticker-shadow disabled:opacity-50"
          >
            {loading ? 'GENERATING...' : 'RENDER_IMAGE'}
          </button>
        </div>
      </div>

      {/* Preview Area */}
      <div className="flex-1 p-12 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/notebook.png')]">
        {generatedImage ? (
          <div className="polaroid relative max-w-md group">
            <img
              src={generatedImage}
              alt="Generated"
              className="w-full h-auto border border-black/5"
            />
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-black text-white p-2 font-dela text-[10px]">SAVE_PNG</button>
            </div>
            <div className="mt-8 font-dela text-xs text-black/40 text-center uppercase tracking-widest">
              PRO_PROFILE_STUDIO // AUTH_01
            </div>
          </div>
        ) : (
          <div className="text-center max-w-sm">
            <div className={`
              aspect-square w-64 border-4 border-dashed border-black flex flex-col items-center justify-center p-8 bg-white/50 mb-6
              ${loading ? 'animate-pulse' : ''}
            `}>
              {loading ? (
                <div className="font-dela text-[#FF4A22] text-center text-xl">
                  ETCHING_REPUTATION...
                </div>
              ) : (
                <div className="opacity-10 font-dela text-6xl">
                  📸
                </div>
              )}
            </div>
            {!loading && (
              <p className="font-bold text-[10px] text-black/40 uppercase leading-relaxed">
                Tip: Use "Pro Headshot" if you don't have a professional photo. Recruiters in Vietnam prioritize teachers who look neat and approachable.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageStudio;

