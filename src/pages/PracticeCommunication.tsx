import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { topics as TOPICS } from "@/jsons/topics";
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  ChevronLeft,
  Copy,
  Cpu,
  Hash,
  History,
  RotateCcw,
  ShieldCheck,
  Terminal
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "dev-topic-index";

export default function DevTopics() {
  // --- State ---
  const [index, setIndex] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [fade, setFade] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);
  const [showHistory, setShowHistory] = useState(true); // Default open log

  const logEndRef = useRef<HTMLDivElement>(null);

  // --- Logic ---
  const currentTopic = TOPICS[index];
  const progress = Math.round(((index + 1) / TOPICS.length) * 100);
  // Get history (topics up to current index)
  const topicHistory = TOPICS.slice(0, index + 1);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, index.toString());
    // Auto-scroll logs to bottom on change
    if (logEndRef.current) {
      logEndRef.current.scrollIntoView({ behavior: "smooth" });
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

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentTopic);
  };

  const resetProtocol = () => setShowResetConfirm(true);
  
  const confirmReset = () => {
    setIndex(0);
    setShowResetConfirm(false);
  };

  // --- Theme Config ---
  const theme = {
    bg: "bg-[#050505]",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    cardBg: "bg-[#0a0a0a]",
  };

  return (
    <div className={`min-h-screen ${theme.bg} text-gray-200 font-mono flex flex-col relative overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200`}>
      
      {/* CRT Scanline Effect Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
      
      <Navbar />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        
        {/* Status Bar */}
        <div className="flex justify-between items-center mb-8 border-b border-emerald-900/50 pb-2">
           <div className="flex items-center gap-3">
              <div className="h-2 w-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs uppercase tracking-[0.2em] text-emerald-700 font-bold">System_Online</span>
           </div>
           <div className="text-xs text-emerald-800 font-bold">
             UPTIME: {(Date.now() / 1000000).toFixed(2)}s
           </div>
        </div>

        {/* Header */}
        <div className="text-center mb-10 space-y-4">
          <h1 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-500 to-emerald-600 tracking-tighter drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
            &lt;DEV_SPEAK /&gt;
          </h1>
          <p className="text-emerald-500/60 text-sm tracking-widest uppercase">
            Protocol: Verbalize // Iterate // Dominate
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* --- LEFT COL: Main Terminal --- */}
          <div className="lg:col-span-8 space-y-6">
            <div
              onClick={handleNext}
              className={`cursor-pointer group relative w-full overflow-hidden rounded-sm ${theme.cardBg} border ${theme.border} ${theme.glow} hover:border-emerald-500/60 transition-all duration-300`}
            >
              {/* Header Bar */}
              <div className="bg-emerald-950/30 border-b border-emerald-500/20 p-2 flex items-center justify-between px-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50" />
                </div>
                <div className="text-[10px] text-emerald-500/50 uppercase">bash --active</div>
              </div>

              {/* Progress Line */}
              <div className="absolute bottom-0 left-0 h-[2px] w-full bg-emerald-900/50">
                 <div className="h-full bg-emerald-500 shadow-[0_0_10px_#10b981]" style={{ width: `${progress}%` }} />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 relative min-h-[300px] flex flex-col justify-center">
                <div className="absolute top-4 right-4 opacity-20">
                  <Terminal className="w-24 h-24 text-emerald-500" />
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase tracking-widest">
                     <Hash className="w-3 h-3" /> 
                     <span>Index: {index.toString().padStart(3, '0')}</span>
                  </div>
                  
                  <h3 className={`text-2xl md:text-4xl font-bold text-white transition-all duration-150 ${fade ? 'opacity-0 blur-sm scale-95' : 'opacity-100 blur-0 scale-100'}`}>
                    <span className="text-emerald-500 mr-2">&gt;</span>
                    {currentTopic}
                    <span className="animate-pulse inline-block w-3 h-8 ml-2 bg-emerald-500 align-middle"></span>
                  </h3>
                </div>

                {/* Mobile Action Hint */}
                <div className="absolute bottom-4 right-4 md:hidden text-emerald-500/40 text-[10px] animate-pulse">
                  TAP TO ADVANCE
                </div>
              </div>
            </div>

            {/* Controls Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
               <button onClick={handlePrev} className="h-14 flex items-center justify-center gap-2 bg-emerald-950/20 border border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-400 rounded-sm hover:shadow-[0_0_10px_rgba(16,185,129,0.2)] transition-all">
                  <ChevronLeft className="w-4 h-4" /> <span className="text-xs font-bold">PREV</span>
               </button>
               <button onClick={copyToClipboard} className="h-14 flex items-center justify-center gap-2 bg-blue-950/20 border border-blue-500/30 hover:bg-blue-500/10 text-blue-400 rounded-sm hover:shadow-[0_0_10px_rgba(59,130,246,0.2)] transition-all">
                  <Copy className="w-4 h-4" /> <span className="text-xs font-bold">COPY</span>
               </button>
               <button onClick={() => setShowHistory(!showHistory)} className="h-14 flex items-center justify-center gap-2 bg-purple-950/20 border border-purple-500/30 hover:bg-purple-500/10 text-purple-400 rounded-sm hover:shadow-[0_0_10px_rgba(168,85,247,0.2)] transition-all">
                  <History className="w-4 h-4" /> <span className="text-xs font-bold">LOGS</span>
               </button>
               <button onClick={resetProtocol} className="h-14 flex items-center justify-center gap-2 bg-red-950/20 border border-red-500/30 hover:bg-red-500/10 text-red-400 rounded-sm hover:shadow-[0_0_10px_rgba(239,68,68,0.2)] transition-all">
                  <RotateCcw className="w-4 h-4" /> <span className="text-xs font-bold">RESET</span>
               </button>
            </div>
          </div>

          {/* --- RIGHT COL: System Log (History) --- */}
          <div className={`lg:col-span-4 transition-all duration-500 ${showHistory ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 lg:hidden'}`}>
             <div className="h-full max-h-[500px] flex flex-col rounded-sm bg-black border border-emerald-500/20 relative overflow-hidden">
                {/* Log Header */}
                <div className="px-4 py-3 bg-emerald-950/30 border-b border-emerald-500/20 flex items-center justify-between">
                   <span className="text-xs font-bold text-emerald-500 flex items-center gap-2">
                     <Activity className="w-3 h-3" /> SYSTEM_LOGS
                   </span>
                   <span className="text-[10px] text-emerald-700">ID: {Math.floor(Math.random() * 99999)}</span>
                </div>
                
                {/* Log Body */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs custom-scrollbar">
                   {topicHistory.map((topic, idx) => (
                      <div key={idx} className={`flex gap-3 items-start animate-in slide-in-from-left-2 duration-300 ${idx === index ? 'text-emerald-400' : 'text-emerald-700'}`}>
                         <span className="shrink-0 opacity-50">[{idx.toString().padStart(3, '0')}]</span>
                         <span className="break-words leading-relaxed">
                            {idx === index && <span className="mr-2 text-emerald-500 animate-pulse">&gt;</span>}
                            {topic}
                         </span>
                         {idx !== index && <CheckCircle2 className="w-3 h-3 ml-auto shrink-0 opacity-40" />}
                      </div>
                   ))}
                   <div ref={logEndRef} />
                </div>
                
                {/* Log Footer */}
                <div className="p-2 border-t border-emerald-500/10 bg-emerald-950/10 text-[10px] text-emerald-600 text-center">
                   // END OF STREAM //
                </div>
             </div>
          </div>

        </div>

        {/* Footer Stats */}
        <div className="mt-12 flex justify-center items-center gap-4 text-[10px] text-emerald-900 uppercase tracking-widest">
           <div className="flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> PORT: SECURE</div>
           <div className="w-px h-3 bg-emerald-900" />
           <div className="flex items-center gap-1"><Cpu className="w-3 h-3" /> MEM: {Math.floor(Math.random() * 30 + 10)}%</div>
        </div>

      </main>

      <Footer />
      
      {/* --- RESET MODAL --- */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-black border border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.2)] rounded-sm overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="bg-red-500/10 px-4 py-3 border-b border-red-500/30 flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 animate-pulse" />
              <h3 className="font-mono text-sm font-bold text-red-500 uppercase tracking-wider">
                CRITICAL ALERT
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <p className="text-sm text-red-200/80 font-mono leading-relaxed">
                <span className="text-red-500 mr-2">&gt;&gt;</span>
                Initiating memory wipe sequence. This will erase all session progress logs.
                <br /><br />
                <span className="animate-pulse">CONFIRM COMMAND?</span>
              </p>
            </div>
            <div className="px-6 py-4 bg-red-950/20 flex justify-end gap-3">
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-red-400 hover:text-white hover:bg-red-500/20 border border-transparent hover:border-red-500/50 transition-all"
              >
                [ Abort ]
              </button>
              <button
                onClick={confirmReset}
                className="px-4 py-2 bg-red-600 hover:bg-red-700 text-black text-xs font-mono font-bold uppercase tracking-wider shadow-lg shadow-red-600/20 transition-all hover:scale-105"
              >
                [ PURGE_DATA ]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #000; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #10b981; border-radius: 2px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #059669; }
      `}</style>
    </div>
  );
}