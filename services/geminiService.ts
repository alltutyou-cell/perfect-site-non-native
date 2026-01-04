
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import { ModelName } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  }

  // Basic Text Generation
  async generateText(prompt: string, systemInstruction?: string): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: ModelName.TEXT,
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.7,
      },
    });
    return response.text || "No response generated.";
  }

  // Image Generation
  async generateImage(prompt: string, aspectRatio: "1:1" | "16:9" | "9:16" = "1:1"): Promise<string> {
    const response = await this.ai.models.generateContent({
      model: ModelName.IMAGE,
      contents: {
        parts: [{ text: prompt }]
      },
      config: {
        imageConfig: { aspectRatio }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Failed to generate image.");
  }

  // Search Grounding
  async searchWithGrounding(query: string): Promise<{ text: string, sources: any[] }> {
    const response = await this.ai.models.generateContent({
      model: ModelName.FAST_TEXT,
      contents: query,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    const sources = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    return {
      text: response.text || "",
      sources: sources
    };
  }

  // Video Generation (Veo)
  async generateVideo(prompt: string): Promise<string> {
    // Check for Veo specific API key requirements in component
    let operation = await this.ai.models.generateVideos({
      model: ModelName.VIDEO,
      prompt: prompt,
      config: {
        numberOfVideos: 1,
        resolution: '1080p',
        aspectRatio: '16:9'
      }
    });

    while (!operation.done) {
      await new Promise(resolve => setTimeout(resolve, 10000));
      operation = await this.ai.operations.getVideosOperation({ operation });
    }

    const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!downloadLink) throw new Error("Video generation failed.");

    const res = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
    const blob = await res.blob();
    return URL.createObjectURL(blob);
  }
}

export const geminiService = new GeminiService();
