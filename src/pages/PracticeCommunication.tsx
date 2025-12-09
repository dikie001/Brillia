import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Copy,
  Cpu,
  History,
  RotateCcw,
  Activity,
  Wifi,
  Battery,
  Lock,
  Terminal,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { topics as TOPICS } from "@/jsons/topics";
import Footer from "@/components/app/Footer";

// --- CUSTOM CYBER NAVBAR ---
const CyberNavbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#050505]/95 backdrop-blur-md border-b border-emerald-900/50 h-16 flex items-center justify-between px-4 sm:px-8 shadow-2xl shadow-emerald-900/10">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-emerald-500">
        <Terminal className="w-5 h-5" />
        <span className="font-bold tracking-tighter text-lg hidden sm:block">NET_RUNNER_V1</span>
      </div>
      <div className="h-6 w-[1px] bg-emerald-900 hidden sm:block" />
      <div className="flex items-center gap-2 text-[10px] text-emerald-700 font-mono tracking-widest">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        ONLINE
      </div>
    </div>
    
    <div className="flex items-center gap-6">
       <div className="hidden md:flex gap-4 text-xs font-mono text-emerald-800">
          <span className="flex items-center gap-1"><Wifi className="w-3 h-3" /> LAN_01</span>
          <span className="flex items-center gap-1"><Battery className="w-3 h-3" /> 100%</span>
          <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> ENCRYPTED</span>
       </div>
       <div className="px-3 py-1 border border-emerald-900 bg-emerald-950/30 text-emerald-500 text-xs font-mono rounded-sm">
          USER: DIKIE
       </div>
    </div>
  </nav>
);

// --- REUSABLE CYBER BUTTON ---
interface CyberButtonProps {
  onClick: (e: React.MouseEvent) => void;
  icon: React.ReactNode;
  label: string;
  subLabel?: string;
  variant?: 'primary' | 'danger' | 'info';
  className?: string;
}

const CyberButton = ({ onClick, icon, label, subLabel, variant = 'primary', className = '' }: CyberButtonProps) => {
  const colors = {
    primary: "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    danger: "border-red-500/50 text-red-400 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    info: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
  };

  return (
    <button
      onClick={onClick}
      className={`group relative h-12 md:h-14 w-full flex items-center justify-between px-3 md:px-4 border bg-black/40 backdrop-blur-sm transition-all duration-300 ${colors[variant]} ${className}`}
      style={{ clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)" }}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-current opacity-50" />
      
      <div className="flex items-center gap-2 md:gap-3">
        <div className="p-1.5 bg-black/50 rounded-sm group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs md:text-sm font-bold tracking-widest">{label}</span>
          {subLabel && <span className="text-[9px] opacity-60 font-mono hidden md:block">{subLabel}</span>}
        </div>
      </div>
      
      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </button>
  );
};

// --- MINI TERMINAL COMPONENT ---
interface MiniTerminalProps {
  onCommand: (cmd: string) => string | void;
}

const MiniTerminal = ({ onCommand }: MiniTerminalProps) => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>([
    "NET_RUNNER_V1 [Version 1.0.4]",
    "Type 'help' for commands."
  ]);
  const [isOpen, setIsOpen] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [output, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLowerCase();
      if (!cmd) return;

      let response = "";
      if (cmd === "clear") {
        setOutput([]);
        setInput("");
        return;
      }

      const result = onCommand(cmd);
      response = result || `Command executed: ${cmd}`;

      setOutput(prev => [...prev, `> ${input}`, response]);
      setInput("");
    }
  };

  return (
    <div className={`
      w-full border border-emerald-900/50 bg-black/90 font-mono text-xs transition-all duration-300 flex flex-col shrink-0
      ${isOpen ? 'h-32 md:h-48' : 'h-8'}
    `}>
      {/* Terminal Header */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="h-8 shrink-0 bg-emerald-950/30 border-b border-emerald-900/50 px-4 flex items-center justify-between cursor-pointer hover:bg-emerald-900/20"
      >
        <span className="text-emerald-500 font-bold flex items-center gap-2">
          <Terminal className="w-3 h-3" /> TERMINAL
        </span>
        {isOpen ? <ChevronDown className="w-3 h-3 text-emerald-700" /> : <ChevronUp className="w-3 h-3 text-emerald-700" />}
      </div>

      {/* Terminal Body */}
      {isOpen && (
        <div 
          className="flex-1 overflow-y-auto p-3 custom-scrollbar space-y-1"
          ref={scrollRef}
          onClick={() => inputRef.current?.focus()}
        >
          {output.map((line, i) => (
            <div key={i} className={`${line.startsWith('>') ? 'text-emerald-300 mt-1' : 'text-emerald-600/80'}`}>
              {line}
            </div>
          ))}
          <div className="flex items-center gap-2 text-emerald-400 mt-1">
            <span className="animate-pulse">{'>'}</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none flex-1 text-emerald-400 placeholder-emerald-800/50"
              autoFocus
              spellCheck={false}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const STORAGE_KEY = "dev-topic-index";

export default function DevTopics() {
  const [index, setIndex] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [fade, setFade] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showHistory, setShowHistory] = useState(true);

  const logContainerRef = useRef<HTMLDivElement>(null);
  const currentTopic = TOPICS[index];
  const progress = Math.round(((index + 1) / TOPICS.length) * 100);
  const topicHistory = TOPICS.slice(0, index + 1);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, index.toString());
    if (logContainerRef.current) {
      const { scrollHeight, clientHeight } = logContainerRef.current;
      logContainerRef.current.scrollTo({ top: scrollHeight - clientHeight, behavior: 'smooth' });
    }
  }, [index]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % TOPICS.length);
      setFade(false);
    }, 150);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + TOPICS.length) % TOPICS.length);
      setFade(false);
    }, 150);
  };

  const copyToClipboard = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    navigator.clipboard.writeText(currentTopic);
  };

  const resetProtocol = () => setShowResetConfirm(true);
  const confirmReset = () => {
    setIndex(0);
    setShowResetConfirm(false);
  };

  // --- TERMINAL COMMAND HANDLER ---
  const handleTerminalCommand = (cmd: string): string => {
    switch (cmd) {
      case "help":
        return "next, prev, logs, reset, copy, whoami, clear";
      case "next":
        handleNext();
        return "Navigating to next node...";
      case "prev":
        handlePrev();
        return "Reverting to previous node...";
      case "logs":
        setShowHistory(prev => !prev);
        return `Log panel ${!showHistory ? 'ENABLED' : 'DISABLED'}.`;
      case "reset":
        resetProtocol();
        return "Initiating reset sequence...";
      case "copy":
        copyToClipboard();
        return "Topic copied to clipboard.";
      case "whoami":
        return "USER: DIKIE [Admin Access Granted]";
      case "date":
        return new Date().toLocaleString();
      default:
        return `Error: Unknown command '${cmd}'.`;
    }
  };

  // --- Layout Classes ---
  // Using min-h-0 is crucial for nested flex scrolling
  const containerLayout = showHistory 
    ? "grid grid-cols-1 lg:grid-cols-12 gap-6 h-full min-h-0" 
    : "flex flex-col items-center justify-center h-full min-h-0 max-w-5xl mx-auto w-full";

  const topicSectionClasses = showHistory 
    ? "lg:col-span-8 flex flex-col gap-4 h-full min-h-0" 
    : "w-full flex flex-col gap-4 justify-center h-full min-h-0";

  return (
    // Root container must be h-screen and flex-col to manage the full viewport
    <div className="fixed inset-0 bg-[#050505] text-gray-200 font-mono flex flex-col overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      
      {/* Background FX */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <CyberNavbar />

      {/* MAIN CONTAINER: 
         - removed fixed height calc()
         - added flex-1 and min-h-0 to allow it to fill remaining space between Navbar and Footer
      */}
      <main className="relative z-10 flex-1 flex flex-col min-h-0 pt-20 pb-2 px-4 sm:px-6 lg:px-8 w-full max-w-[1920px] mx-auto">
        
        <div className={containerLayout}>
          
          {/* --- LEFT: TOPIC SECTION --- */}
          <div className={topicSectionClasses}>
            
            {/* Header */}
            <div className={`shrink-0 space-y-1 ${!showHistory ? 'text-center mb-2' : ''}`}>
              <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 tracking-tighter">
                &lt;DEV_SPEAK /&gt;
              </h1>
              <p className="text-emerald-500/60 text-[10px] tracking-[0.3em] uppercase">
                // Index: {index.toString().padStart(3, '0')}
              </p>
            </div>

            {/* Main Card - This is the flexible element that shrinks */}
            <div
              onClick={handleNext}
              className={`
                flex-1 min-h-0 relative w-full bg-black/60 backdrop-blur-md border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.1)] 
                hover:border-emerald-500/60 transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden
              `}
              style={{ clipPath: "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)" }}
            >
              <div className="absolute top-0 left-0 h-[2px] w-full bg-emerald-900/30 z-20">
                  <div className="h-full bg-emerald-400 shadow-[0_0_10px_#34d399]" style={{ width: `${progress}%` }} />
              </div>

              {/* Scrollable content inside the card */}
              <div className="flex-1 overflow-y-auto p-6 md:p-12 flex flex-col items-center justify-center custom-scrollbar">
                  <div className="mb-4 opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform group-hover:scale-110 shrink-0">
                    <Cpu className="w-12 h-12 md:w-16 md:h-16 text-emerald-500 animate-pulse" />
                  </div>

                  <div className="max-w-3xl text-center relative z-10">
                    <h3 className={`text-xl md:text-3xl lg:text-4xl font-bold text-white leading-tight transition-all duration-150 ${fade ? 'opacity-0 blur-sm translate-y-2' : 'opacity-100 blur-0 translate-y-0'}`}>
                      {currentTopic}
                      <span className="animate-pulse text-emerald-500">_</span>
                    </h3>
                  </div>

                  <div className="mt-6 text-emerald-500/40 text-[10px] tracking-widest animate-pulse shrink-0">
                    [ CLICK TERMINAL TO ADVANCE ]
                  </div>
              </div>
            </div>

            {/* Controls - Fixed height */}
            <div className="shrink-0 grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mt-2">
              <CyberButton onClick={handlePrev} icon={<ChevronLeft className="w-5 h-5" />} label="PREV" subLabel="BACK" variant="info" />
              <CyberButton onClick={copyToClipboard} icon={<Copy className="w-5 h-5" />} label="COPY" subLabel="CPY" variant="info" />
              <CyberButton onClick={() => setShowHistory(!showHistory)} icon={<History className="w-5 h-5" />} label="LOGS" subLabel="VIEW" variant="primary" />
              <CyberButton onClick={resetProtocol} icon={<RotateCcw className="w-5 h-5" />} label="RESET" subLabel="WIPE" variant="danger" />
            </div>

            {/* Terminal - Fixed/Expandable height at bottom of column */}
            <div className="shrink-0 mt-2">
               <MiniTerminal onCommand={handleTerminalCommand} />
            </div>
            
          </div>

          {/* --- RIGHT: LOGS SECTION --- */}
          {showHistory && (
             <div className="hidden lg:flex lg:col-span-4 flex-col h-full min-h-0 animate-in slide-in-from-right-4 duration-500">
                <div className="flex-1 flex flex-col bg-black/80 border border-emerald-500/20 backdrop-blur-sm relative overflow-hidden h-full" 
                     style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
                   
                   <div className="px-4 py-3 bg-emerald-950/40 border-b border-emerald-500/20 flex items-center justify-between shrink-0">
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-2 tracking-wider">
                        <Activity className="w-4 h-4" /> // EXECUTION_LOG
                      </span>
                   </div>
                   
                   <div 
                     ref={logContainerRef}
                     className="flex-1 overflow-y-auto p-4 space-y-2 font-mono text-xs custom-scrollbar scroll-smooth"
                   >
                      {topicHistory.map((topic, idx) => (
                         <div key={idx} className={`group flex gap-3 items-start p-2 rounded-sm transition-colors ${idx === index ? 'bg-emerald-500/10 border border-emerald-500/20' : 'hover:bg-white/5'}`}>
                            <span className="shrink-0 text-emerald-600 font-bold">[{idx.toString().padStart(2, '0')}]</span>
                            <span className={`break-words leading-relaxed ${idx === index ? 'text-emerald-300 font-bold' : 'text-emerald-600/80'}`}>
                               {topic}
                            </span>
                         </div>
                      ))}
                   </div>
                   
                   <div className="p-2 border-t border-emerald-500/10 bg-black text-[10px] text-emerald-700 text-center uppercase shrink-0">
                     Status: Monitoring...
                   </div>
                </div>
             </div>
          )}

        </div>
      </main>

      {/* Fixed Bottom Footer */}
      <div className="relative z-20 shrink-0 border-t border-emerald-900/30 bg-black">
         <Footer />
      </div>

      {/* --- RESET MODAL --- */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-slate-50 dark:bg-black border border-red-500/50 shadow-2xl shadow-red-900/20 rounded-lg overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-red-500/10 px-4 py-3 border-b border-red-500/20 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h3 className="font-mono text-sm font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
                System Alert: Reboot
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-gray-700 dark:text-gray-300 font-mono leading-relaxed">
                <span className="text-red-500 mr-2">&gt;</span>
                Warning: This action will reset the topic index to 0.
              </p>
            </div>
            <div className="px-6 py-4 bg-gray-100/50 dark:bg-gray-900/50 flex justify-end gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                [ Abort ]
              </button>
              <button
                onClick={confirmReset}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-sm shadow-lg shadow-red-600/20 transition-all"
              >
                [ Execute Reset ]
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #050505; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #064e3b; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #10b981; }
      `}</style>
    </div>
  );
}