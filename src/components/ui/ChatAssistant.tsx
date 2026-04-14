import React, { useState, useEffect, useRef, useMemo } from "react";
import { GoogleGenAI, Chat } from "@google/genai";
import { EXPERIENCES, SKILLS, PROJECTS } from "@/constants";
import { getFormattedResumeText } from "@/constants/resumeData";
import { ChatIcon, CloseIcon, SendIcon } from "@/components/icons";

interface Message {
  role: "user" | "model";
  text: string;
}

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const systemInstruction = useMemo(() => {
    const resumeText = getFormattedResumeText();
    const portfolioData = {
      experiences: EXPERIENCES,
      skills: SKILLS,
      projects: PROJECTS,
    };

    return `You are Muhammad Shahan, a Full Stack Developer. You are acting as an AI version of yourself on your personal portfolio website. Your goal is to answer questions about your skills, professional experience, education, projects, and career based on your resume and portfolio data provided below. 

IMPORTANT INSTRUCTIONS:
- Speak in the first person (e.g., "I led the development...", "My skills include...", "I graduated from...")
- Be professional, friendly, and engaging
- Provide specific details from the resume when answering questions
- If asked about education, work experience, or certifications, refer to the detailed resume data
- If someone asks for your contact information, provide it from the personal info section
- Only answer questions related to my career, skills, education, and professional background
- If the user asks something completely unrelated, politely redirect: "I'd prefer to stick to questions about my professional work and background. Is there anything you'd like to know about my experience, skills, or projects?"

MY COMPLETE RESUME:
${resumeText}

PORTFOLIO DATA (for quick reference):
${JSON.stringify(portfolioData, null, 2)}

When answering:
1. Be specific and use actual data from my resume
2. Mention relevant technologies, companies, or projects
3. If asked about education, certifications, or achievements, provide details
4. Keep responses concise but informative
5. Show enthusiasm about my work and skills
    `;
  }, []);

  useEffect(() => {
    if (isOpen && !chatRef.current) {
      try {
        const ai = new GoogleGenAI({
          apiKey: import.meta.env.VITE_GEMINI_API_KEY,
        });
        chatRef.current = ai.chats.create({
          model: "gemini-2.5-flash",
          config: {
            systemInstruction: systemInstruction,
          },
        });
        // Initial message from AI
        setMessages([
          {
            role: "model",
            text: "Hello! I'm Shahan. Feel free to ask me anything about my skills, experience, or projects.",
          },
        ]);
      } catch (error) {
        console.error("Failed to initialize AI Chat:", error);
        setMessages([
          {
            role: "model",
            text: "Sorry, I'm having trouble connecting right now. Please try again later.",
          },
        ]);
      }
    }
  }, [isOpen, systemInstruction]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !chatRef.current) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const stream = await chatRef.current.sendMessageStream({
        message: input,
      });
      setIsLoading(false);

      let currentResponse = "";
      setMessages((prev) => [...prev, { role: "model", text: "" }]);

      for await (const chunk of stream) {
        currentResponse += chunk.text;
        setMessages((prev) => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = currentResponse;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "model",
          text: "Oops! Something went wrong. Please try again.",
        },
      ]);
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle chat assistant"
        className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-[#E4E4E4] text-[#1A1A1A] hover:text-[#1A1A1A] hover:border-white/50 transition-all duration-300 ease-in-out transform
          ${
            isOpen
              ? "opacity-0 scale-0 pointer-events-none"
              : "opacity-100 scale-100"
          }`}
        style={{
          fontFamily: "'League Gothic', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.15em",
        }}
      >
        <ChatIcon className="w-4 h-4" />
        <span className="uppercase">Chat with Shahan</span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-0 right-0 md:bottom-6 md:right-6 z-50 flex flex-col transition-all duration-300 ease-in-out
          w-full h-full md:w-[420px] md:h-[580px] md:rounded-lg
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-full md:translate-y-6 pointer-events-none"
          }`}
        style={{
          background: "#E4E4E4",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#1A1A1A]">
          <h3
            className="uppercase text-[#1A1A1A] tracking-[0.15em]"
            style={{
              fontFamily: "'League Gothic', sans-serif",
              fontSize: "1.1rem",
            }}
          >
            Chat with Shahan
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close chat"
            className="text-[#1A1A1A] hover:text-[1a1a1a] transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </header>

        {/* Messages */}
        <div className="flex-1 px-5 py-4 overflow-y-auto chat-messages">
          <div className="flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[82%] px-4 py-3 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "border border-[#1a1a1a] text-[#1a1a1a] "
                      : "bg-white/6 text-[#1A1A1A] border border-[#1A1A1A]"
                  }`}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                  }}
                >
                  <p style={{ whiteSpace: "pre-wrap" }}>{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="px-4 py-3 rounded-xl bg-white/6 border border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-[#1A1A1A] rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="h-1.5 w-1.5 bg-[#1A1A1A] rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="h-1.5 w-1.5 bg-[#1A1A1A] rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="px-5 py-4 border-t border-[#1A1A1A]">
          <form onSubmit={handleSend} className="flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 bg-transparent text-[#1A1A1A] border border-[#1A1A1A] rounded-full py-2.5 px-4 text-sm focus:outline-none focus:border-[#1A1A1A] placeholder:text-[#1A1A1A]/50 transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.8rem" }}
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex-shrink-0 p-2.5 rounded-full border border-[#1A1A1A] text-[#1A1A1A]/50 hover:text-[#1A1A1A] hover:border-[#1A1A1A]/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Send message"
            >
              <SendIcon className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ChatAssistant;
