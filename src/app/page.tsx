"use client";

import { useChatSocket } from "@/features/chat/hooks/useChatSocket";
import { useChatStore } from "@/store/chatStore";
import { useState } from "react";

export default function Home() {
  const { sendMessage } = useChatSocket();
  const messages = useChatStore((s) => s.messages);
  const [text, setText] = useState("");

  const handleSend = () => {
    if (!text.trim()) return;
    sendMessage(text, "Pouya");
    setText("");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded shadow">
      <div className="h-64 overflow-y-auto mb-4 border p-2">
        {messages.map((m) => (
          <div key={m.id} className="mb-2">
            <strong>{m.user}</strong>: {m.text}
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border rounded px-2 py-1 flex-1"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
