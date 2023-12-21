import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface message {
  text: string | null;
  type: "user" | "bot";
  lang: "en" | "ar" | "fr" | "es";
}

interface MessageState {
  messages: message[];
  insertMessage: (message: message) => void;
  clearMessages: () => void;
}

export const useMessageStore = create<MessageState>()(
  persist(
    (set) => ({
      messages: [],
      insertMessage: (message: message) => {
        set((state) => ({ messages: [...state.messages, message] }));
      },
      clearMessages: () => {
        set({ messages: [] });
      },
    }),
    {
      name: "message-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
