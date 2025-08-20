"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ChatDemo() {
  const [messages, setMessages] = useState([
    { role: "ai", text: "👋 Hi! I’m GoLocally — your AI travel companion." },
    { role: "ai", text: "Tell me your mood today, and I’ll suggest where to go." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);

    // Demo AI response (fake)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: `✨ Since you feel like *${input}*, I’d recommend checking out a local hidden gem café nearby.`,
        },
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-800 max-w-md mx-auto p-4 flex flex-col h-[480px]">
      <h3 className="text-lg font-semibold text-brand-deep dark:text-white mb-3">
        Try a Demo Chat
      </h3>

      <div className="flex-1 overflow-y-auto space-y-3 mb-4">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`px-3 py-2 rounded-xl text-sm max-w-[80%] ${
              msg.role === "ai"
                ? "bg-brand-lime/20 text-brand-deep self-start"
                : "bg-brand-sky text-white self-end ml-auto"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your mood..."
          className="flex-1 px-3 py-2 rounded-lg border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-lime"
        />
        <button
          onClick={handleSend}
          className="bg-brand-lime text-brand-deep p-2 rounded-lg hover:bg-brand-lime/80 transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
