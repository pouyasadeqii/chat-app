import { create } from "zustand";

export interface Message {
  id: string;
  user: string;
  text: string;
  timestamp: number;
}

interface ChatState {
  messages: Message[];
  addMessage: (msg: Message) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  messages: [],
  addMessage: (msg) => set((state) => ({ messages: [...state.messages, msg] })),
}));
