
export type StudioTab = 'text' | 'image' | 'video' | 'search';

export interface GroundingChunk {
  web?: {
    uri: string;
    title: string;
  };
  maps?: {
    uri: string;
    title: string;
  };
}

export interface StudioMessage {
  role: 'user' | 'ai';
  content: string;
  timestamp: Date;
  imageUrl?: string;
  videoUrl?: string;
  sources?: GroundingChunk[];
}

export enum ModelName {
  TEXT = 'gemini-3-pro-preview',
  FAST_TEXT = 'gemini-3-flash-preview',
  IMAGE = 'gemini-2.5-flash-image',
  IMAGE_PRO = 'gemini-3-pro-image-preview',
  VIDEO = 'veo-3.1-fast-generate-preview'
}
