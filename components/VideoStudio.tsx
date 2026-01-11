
import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { ModelName } from '../types';

const VideoStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [status, setStatus] = useState('');

  const shortcuts = [
    {
      label: "PRO TEACHER SETUP",
      prompt: "A cinematic professional shot of an English teacher sitting at a clean desk with books and a globe, soft natural light, friendly and professional atmosphere. This is for a teacher's introductory video."
    },
    {
      label: "OUTDOOR TEACHER",
      prompt: "A vibrant shot of a teacher walking through a beautiful green park in a tropical city like Hanoi, looking healthy, energetic, and approachable. High quality, cinematic."
    },
    {
      label: "NARRATIVE B-ROLL",
      prompt: "A close-up of a teacher's hands organizing English flashcards on a wooden table. Soft focus background, warm lighting, very professional look."
    }
  ];

  const handleGenerateVideo = async (customPrompt?: string) => {
    const textToGenerate = customPrompt || prompt;
    if (!textToGenerate.trim() || isGenerating) return;

    try {
      setIsGenerating(true);
      setStatus('INIT_LINK_01');

      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) await (window as any).aistudio.openSelectKey();

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      setStatus('SUBMITTING_VEO_PAYLOAD');

      let operation = await ai.models.generateVideos({
        model: ModelName.VIDEO,
        prompt: textToGenerate,
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
      setStatus('ERROR_FAILED');
    } finally {
      setIsGenerating(false);
      if (status !== 'ERROR_FAILED') setStatus('');
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#F8F0DD] p-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-12 flex items-end justify-between border-b-4 border-black pb-4">
          <div>
            <h2 className="text-5xl font-dela tracking-tighter">TEACHER_PERSONA_STUDIO</h2>
            <p className="font-bold text-xs opacity-50 uppercase tracking-widest mt-1">GENERATE_BROLL_OF_YOURSELF_FOR_HIRE</p>
          </div>
          <div className="text-right">
            <div className="font-dela text-xs bg-black text-white px-3 py-1">ENGINE: VEO_3.1</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1 space-y-4">
            <p className="font-dela text-[10px] opacity-40">TEACHER_PRESENCE_PRESETS</p>
            {shortcuts.map((s, i) => (
              <button
                key={i}
                onClick={() => handleGenerateVideo(s.prompt)}
                disabled={isGenerating}
                className="w-full text-left p-4 border-2 border-black font-dela text-[10px] hover:bg-[#FF4A22] hover:text-white transition-all bg-white sticker-shadow active:translate-y-1 active:shadow-none"
              >
                {s.label}
              </button>
            ))}

            <div className="pt-6">
              <label className="block font-dela text-[10px] mb-2 opacity-50">CUSTOM_TEACHER_ACTION</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Example: Teacher drinking coffee while planning a lesson in a Hanoi cafe..."
                className="w-full h-32 bg-white border-2 border-black p-4 font-bold text-xs focus:outline-none resize-none"
              />
              <button
                onClick={() => handleGenerateVideo()}
                disabled={!prompt.trim() || isGenerating}
                className="w-full mt-4 py-4 bg-black text-white font-dela text-sm hover:bg-[#FF4A22] transition-colors disabled:opacity-50"
              >
                {isGenerating ? 'GENERATING...' : 'EXECUTE_CUSTOM'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-3">
            {videoUrl ? (
              <div className="bg-white border-4 border-black p-2 card-shadow">
                <video src={videoUrl} controls autoPlay loop className="w-full h-auto border-2 border-black" />
                <div className="p-4 flex justify-between items-center bg-black text-white mt-2">
                  <span className="font-dela text-[10px]">TEACHER_ASSET_ID: {Math.random().toString(36).substring(7).toUpperCase()}</span>
                  <button className="bg-[#FF4A22] px-4 py-1 text-[10px] font-dela">DOWNLOAD_PRO_BROLL</button>
                </div>
              </div>
            ) : (
              <div className={`
                aspect-video border-4 border-dashed border-black flex flex-col items-center justify-center p-12 bg-white/40
                ${isGenerating ? 'animate-pulse bg-white/80' : ''}
              `}>
                {isGenerating ? (
                  <div className="text-center space-y-6">
                    <div className="text-6xl animate-bounce">🎬</div>
                    <div className="font-dela text-2xl accent-text italic">[{status}]</div>
                    <p className="text-xs font-bold max-w-xs mx-auto">VEO IS CREATING YOUR TEACHER PERSONA VIDEO ASSETS. ONE MOMENT...</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-6xl opacity-10 mb-4">👤</div>
                    <div className="font-dela opacity-20 text-2xl mb-2">
                      TEACHER_AWAITING_DIRECTION
                    </div>
                    <p className="text-[10px] font-bold opacity-30 uppercase">Generate high-end B-roll of your teaching life to make your intro video pop.</p>
                  </div>
                )}
              </div>
            )}

            {!isGenerating && !videoUrl && (
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="p-4 bg-black text-white font-bold text-[9px] uppercase leading-tight">
                  NOTE: THIS STUDIO GENERATES CLIPS OF "IDEAL TEACHERS" FOR YOU TO USE AS B-ROLL. IT HELPS RECRUITERS VISUALIZE YOU IN THE JOB.
                </div>
                <div className="p-4 border-2 border-black font-bold text-[9px] uppercase leading-tight">
                  ALL CLIPS ARE 1080P CINEMATIC QUALITY. EXCLUSIVE TO NOT NATIVE NOT SORRY MEMBERS.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoStudio;
