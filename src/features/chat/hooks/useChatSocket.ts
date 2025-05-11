import { useEffect } from "react";
import { io } from "socket.io-client";
import { useChatStore } from "@/store/chatStore";

const socket = io("http://localhost:3001/"); // backend later

export const useChatSocket = () => {
  const addMessage = useChatStore((s) => s.addMessage);

  useEffect(() => {
    socket.on("message", (msg) => {
      addMessage(msg);
    });

    return () => {
      socket.disconnect();
    };
  }, [addMessage]);

  const sendMessage = (text: string, user: string) => {
    socket.emit("message", {
      id: crypto.randomUUID(),
      user,
      text,
      timestamp: Date.now(),
    });
  };

  return { sendMessage };
};
