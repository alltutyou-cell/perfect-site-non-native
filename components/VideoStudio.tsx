
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ModelName } from '../types';

const VideoStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');

  const handleGenerateVideo = async () => {
    if (!prompt.trim() || isGenerating) return;

    try {
      setIsGenerating(true);
      setStatus('INIT_LINK_01');
      
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) await (window as any).aistudio.openSelectKey();

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      setStatus('SUBMITTING_VEO_PAYLOAD');
      
      let operation = await ai.models.generateVideos({
        model: ModelName.VIDEO,
        prompt: prompt,
        config: { numberOfVideos: 1, resolution: '1080p', aspectRatio: '16:9' }
      });

      while (!operation.done) {
        setStatus(`SYNTH_FRAME_${Math.floor(Math.random() * 999)}`);
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation });
      }

      setStatus('DOWNLOADING_ASSET');
      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (!downloadLink) throw new Error("NULL_ASSET_ERROR");

      const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
      const blob = await res.blob();
      setVideoUrl(URL.createObjectURL(blob));
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsGenerating(false);
      setStatus('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F0DD] p-10">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 flex items-end justify-between border-b-4 border-black pb-4">
          <h2 className="text-5xl font-dela tracking-tighter">DIRECTOR_STUDIO</h2>
          <div className="text-right">
            <div className="font-dela text-xs bg-black text-white px-2">STATUS: READY</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-6">
            <div className="bg-white border-4 border-black p-6 card-shadow">
              <label className="block font-dela text-xs mb-3">ACTION_PROMPT</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe movement..."
                className="w-full h-48 bg-[#F8F0DD] border-2 border-black p-4 font-bold focus:outline-none resize-none"
              />
              <button
                onClick={handleGenerateVideo}
                disabled={!prompt.trim() || isGenerating}
                className="w-full mt-6 py-4 bg-[#FF4A22] text-white font-dela text-lg sticker-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all disabled:opacity-50"
              >
                {isGenerating ? 'PROCESSING' : 'INIT_GENERATE'}
              </button>
            </div>
            <div className="bg-black text-white p-4 font-bold text-xs leading-relaxed uppercase opacity-80">
              VEO 3.1 FAST ENGINE ENABLED. 1080P CINEMATIC OUTPUT. EXPECT 2 MINUTE DELAY.
            </div>
          </div>

          <div className="md:col-span-2">
            {videoUrl ? (
              <div className="bg-white border-4 border-black p-2 card-shadow">
                <video src={videoUrl} controls autoPlay loop className="w-full h-auto border-2 border-black" />
              </div>
            ) : (
              <div className={`
                aspect-video border-4 border-dashed border-black flex flex-col items-center justify-center p-12 bg-white/40
                ${isGenerating ? 'animate-pulse' : ''}
              `}>
                {isGenerating ? (
                  <div className="text-center space-y-4">
                    <div className="font-dela text-4xl accent-text">[{status}]</div>
                    <div className="text-sm font-bold">PIXELS_IN_MOTION... DO_NOT_REFRESH</div>
                  </div>
                ) : (
                  <div className="font-dela opacity-20 text-center">
                    NO_ACTIVE_STREAM<br/>
                    AWAITING_COMMAND
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStudio;
