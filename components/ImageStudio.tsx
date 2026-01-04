
import React, { useState } from 'react';
import { geminiService } from '../services/geminiService';

const ImageStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [aspectRatio, setAspectRatio] = useState<"1:1" | "16:9" | "9:16">("1:1");
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;
    setLoading(true);
    try {
      const img = await geminiService.generateImage(prompt, aspectRatio);
      setGeneratedImage(img);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-full">
      <div className="w-full md:w-80 p-8 border-r-4 border-black bg-white">
        <h2 className="text-3xl font-dela mb-2">ARTIST_01</h2>
        <p className="text-xs font-bold text-[#FF4A22] mb-8">VISUAL_SYNTHESIS_UNIT</p>
        
        <div className="space-y-8">
          <div>
            <label className="block text-xs font-dela mb-2">DESCRIPTION</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Input your vision..."
              className="w-full h-40 bg-[#F8F0DD] border-2 border-black p-4 font-bold focus:outline-none focus:ring-2 focus:ring-[#FF4A22] transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-dela mb-2">FRAME_RATIO</label>
            <div className="grid grid-cols-1 gap-2">
              {(['1:1', '16:9', '9:16'] as const).map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`
                    py-3 font-dela text-sm border-2 border-black transition-all
                    ${aspectRatio === ratio 
                      ? 'bg-[#FF4A22] text-white sticker-shadow' 
                      : 'bg-white text-black hover:bg-[#F8F0DD]'}
                  `}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || loading}
            className="w-full py-5 bg-black text-white font-dela text-xl hover:bg-[#FF4A22] transition-all card-shadow disabled:opacity-50"
          >
            {loading ? 'GENERATING...' : 'RENDER_IMAGE'}
          </button>
        </div>
      </div>

      <div className="flex-1 p-12 flex flex-col items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/cardboard.png')]">
        {generatedImage ? (
          <div className="polaroid relative max-w-lg">
            <img 
              src={generatedImage} 
              alt="Generated" 
              className="w-full h-auto border border-black/5"
            />
            <div className="mt-8 font-dela text-sm text-black/40 text-center">
              #{Math.floor(Math.random() * 99999)} // LUMINA_STUDIO
            </div>
          </div>
        ) : (
          <div className="text-center">
            <div className={`
              w-72 h-72 border-4 border-dashed border-black flex flex-col items-center justify-center p-8 bg-white/50
              ${loading ? 'animate-pulse' : ''}
            `}>
              {loading ? (
                <div className="font-dela text-[#FF4A22] text-center">
                  ETCHING_REALITY...
                </div>
              ) : (
                <div className="opacity-20 font-dela text-center">
                  NO_IMAGE_DATA_FOUND
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageStudio;
