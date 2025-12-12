

import React, { useState, useRef, useEffect, useCallback } from "react";
import { Send, Bot, User, AlertCircle, Loader2 } from "lucide-react";

// --- Types ---
interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatResponse {
  choices: {
    message: {
      content: string;
    };
  }[];
}

// --- Utility: Markdown-to-React Converter (Handles your formatting request) ---
// This function parses the AI's raw text content and renders it using styled
// React elements, converting common markdown (like **bold**, *lists*, ##headings, ---rules)
// into structured HTML/JSX without displaying markdown characters like * or #.
const formatAssistantContent = (content: string) => {
  const parts: React.ReactNode[] = [];
  let currentKey = 0;

  // Split by newlines to process line by line
  const lines = content.split("\n");

  lines.forEach((line, index) => {
    const key = `line-${currentKey++}`;

    // 1. Headings (Simple H2/H3 detection for readability)
    if (line.startsWith("## ")) {
      parts.push(
        <h2
          key={key}
          className="text-lg font-semibold mt-4 mb-2 text-indigo-800"
        >
          {line.substring(3).trim()}
        </h2>
      );
      return;
    } else if (line.startsWith("### ")) {
      parts.push(
        <h3
          key={key}
          className="text-base font-medium mt-3 mb-1 text-indigo-700"
        >
          {line.substring(4).trim()}
        </h3>
      );
      return;
    }

    // 2. Horizontal Rule (Visual separator)
    if (line.trim() === "---") {
      parts.push(<hr key={key} className="my-4 border-t border-indigo-200" />);
      return;
    }

    // 3. List Items (Basic bullet detection)
    if (line.trim().startsWith("* ") || line.trim().startsWith("- ")) {
      // Find the list context for better rendering (grouping)
      const listItems = [];
      let i = index;
      while (
        i < lines.length &&
        (lines[i].trim().startsWith("* ") || lines[i].trim().startsWith("- "))
      ) {
        listItems.push(lines[i].substring(2).trim());
        i++;
      }

      // If we are the start of a new list, render the whole block
      if (
        index === 0 ||
        !(
          lines[index - 1].trim().startsWith("* ") ||
          lines[index - 1].trim().startsWith("- ")
        )
      ) {
        parts.push(
          <ul
            key={`list-${currentKey++}`}
            className="list-disc pl-5 my-2 space-y-1"
          >
            {listItems.map((item, itemIndex) => (
              <li key={itemIndex} className="text-slate-800">
                {formatAssistantContent(item)}{" "}
                {/* Recursive call for bolding/etc within list items */}
              </li>
            ))}
          </ul>
        );
      }
      // Skip the lines that were just processed as part of the list
      lines.splice(index + 1, listItems.length - 1);
      return;
    }

    // 4. Inline Formatting (Bold)
    const formattedText: React.ReactNode[] = [];
    const text = line;
    let match;
    const regex = /\*\*(.*?)\*\*/g; // Detects **text**

    let lastIndex = 0;
    while ((match = regex.exec(text)) !== null) {
      // Add plain text before the bold segment
      if (match.index > lastIndex) {
        formattedText.push(text.substring(lastIndex, match.index));
      }
      // Add the bold segment
      formattedText.push(
        <strong
          key={`bold-${currentKey++}`}
          className="font-semibold text-indigo-900"
        >
          {match[1]}
        </strong>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add any remaining text
    if (lastIndex < text.length) {
      formattedText.push(text.substring(lastIndex));
    }

    // 5. Paragraphs (Any remaining line)
    if (formattedText.length > 0 && line.trim() !== "") {
      parts.push(
        <p key={key} className="mb-2 last:mb-0">
          {formattedText}
        </p>
      );
    } else if (line.trim() === "") {
      // Add a line break for empty lines to preserve spacing between paragraphs
      parts.push(<div key={key} className="h-2" />);
    }
  });

  return <>{parts}</>;
};

// --- Component ---
export default function BrilliaAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-scroll ref
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      // Small delay to ensure all content and images are rendered before scrolling
      setTimeout(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [messages, isLoading]);

  // Handle API Call
  const handleSubmit = useCallback(
    async (e?: React.FormEvent) => {
      e?.preventDefault();
      if (!input.trim() || isLoading) return;

      const userMessage: Message = { role: "user", content: input.trim() };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);
      setError(null);

      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }

      try {
        // In a real app, you'd send messages to your API endpoint
        const response = await fetch(
          "http://localhost:8000/v1/chat/completions",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            // Send the updated messages including the current user message
            body: JSON.stringify({
              model: "gemini-2.5-flash",
              messages: [...messages, userMessage],
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data: ChatResponse = await response.json();
        const assistantMessage: Message = {
          role: "assistant",
          content: data.choices[0]?.message?.content || "No response received.",
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        console.error(err);
        setError("Failed to connect to the server. Is localhost:8000 running?");
      } finally {
        setIsLoading(false);
      }
    },
    [input, isLoading, messages]
  ); // Include dependencies

  // Handle Enter key (Shift+Enter for newline)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-resize textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  // --- Render Component ---
  return (
    <div className="flex flex-col h-screen bg-indigo-50 text-slate-900 font-sans antialiased">
      {/* 🔮 Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 border-b border-indigo-100 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2">
          <Bot className="w-6 h-6 text-indigo-600" />
          <h1 className="text-2xl font-bold tracking-tight text-indigo-800">
            Brillia AI
          </h1>
        </div>
        <div className="text-xs text-indigo-500 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full font-medium shadow-sm">
          gemini-2.5-flash
        </div>
      </header>

      {/* 💬 Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 custom-scrollbar">
        <div className="max-w-3xl mx-auto space-y-8 pb-4">
          {/* Empty State / Welcome */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-[50vh] text-center space-y-5 opacity-70">
              <div className="p-4 bg-indigo-100/70 rounded-3xl shadow-lg">
                <Bot className="w-10 h-10 text-indigo-500" />
              </div>
              <h2 className="text-xl font-semibold text-indigo-700">
                Welcome to Brillia Chat!
              </h2>
              <p className="text-slate-500 max-w-sm">
                I'm here to assist you. Ask me anything, from complex questions
                to simple tasks.
              </p>
            </div>
          )}
          {/* Messages */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex w-full gap-3 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              } animate-in fade-in-0 slide-in-from-bottom-2 duration-300`}
            >
              {/* Bot Avatar */}
              {msg.role === "assistant" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-indigo-200 bg-indigo-100 flex items-center justify-center shadow-md">
                  <Bot className="w-5 h-5 text-indigo-600" />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`max-w-[85%] md:max-w-[70%] px-5 py-3.5 text-sm leading-relaxed shadow-lg transition-all ${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white rounded-3xl rounded-br-md"
                    : "bg-white border border-indigo-100 text-slate-800 rounded-3xl rounded-tl-md"
                }`}
              >
                {/* Custom rendering for assistant content */}
                {msg.role === "assistant" ? (
                  formatAssistantContent(msg.content)
                ) : (
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                )}
              </div>

              {/* User Avatar */}
              {msg.role === "user" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-slate-200 bg-slate-100 flex items-center justify-center shadow-md">
                  <User className="w-5 h-5 text-slate-500" />
                </div>
              )}
            </div>
          ))}
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex gap-3 w-full animate-in fade-in-0 duration-300">
              <div className="flex-shrink-0 w-8 h-8 rounded-full border-2 border-indigo-200 bg-indigo-100 flex items-center justify-center">
                <Bot className="w-5 h-5 text-indigo-600" />
              </div>
              <div className="flex items-center gap-1 bg-white border border-indigo-100 px-4 py-3 rounded-3xl rounded-tl-md shadow-md">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
              </div>
            </div>
          )}
          {/* Error Alert */}
          {error && (
            <div className="flex items-start gap-3 p-4 border border-red-300 bg-red-100 text-red-900 rounded-xl shadow-lg animate-in fade-in slide-in-from-bottom-2">
              <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0 text-red-600" />
              <div className="flex-1 text-sm font-medium">{error}</div>
            </div>
          )}
          <div ref={scrollRef} /> {/* Scroll target */}
        </div>
      </div>

      {/* ⌨️ Input Area Footer */}
      <div className="sticky bottom-0 z-10 p-4 bg-white/90 backdrop-blur-md border-t border-indigo-100 shadow-[0_-4px_10px_-5px_rgba(0,0,0,0.05)]">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="relative flex items-end p-2 border-2 border-indigo-200 rounded-3xl shadow-xl bg-white focus-within:ring-4 focus-within:ring-indigo-100 transition-all duration-200"
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={handleInput}
              onKeyDown={handleKeyDown}
              placeholder="Start a conversation with Brillia..."
              className="min-h-[50px] max-h-[200px] w-full resize-none border-0 bg-transparent focus:ring-0 px-3 py-3 text-base text-slate-900 placeholder:text-indigo-300 outline-none"
              rows={1}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="mb-1 mr-1 p-3 rounded-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed bg-indigo-600 text-white hover:bg-indigo-700 shadow-md hover:shadow-lg"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">Send Message</span>
            </button>
          </form>
          <div className="text-center mt-3">
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
              Brillia is powered by gemini-2.5-flash. AI can make mistakes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
