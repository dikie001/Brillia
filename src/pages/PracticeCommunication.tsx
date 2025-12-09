import Footer from "@/components/app/Footer";
import { topics as TOPICS } from "@/jsons/topics";
import {
  Activity,
  AlertTriangle,
  Battery,
  ChevronLeft,
  ChevronRight,
  Copy,
  Cpu,
  History,
  Lock,
  RotateCcw,
  Terminal,
  Wifi
} from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

// --- CUSTOM CYBER NAVBAR ---
const CyberNavbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-emerald-900/50 h-16 flex items-center justify-between px-4 sm:px-8">
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-emerald-500">
        <Terminal className="w-5 h-5" />
        <span className="font-bold tracking-tighter text-lg hidden sm:block">
          NET_RUNNER_V1
        </span>
      </div>
      <div className="h-6 w-[1px] bg-emerald-900 hidden sm:block" />
      <div className="flex items-center gap-2 text-[10px] text-emerald-700 font-mono tracking-widest">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        ONLINE
      </div>
    </div>

    <div className="flex items-center gap-6">
      <div className="hidden md:flex gap-4 text-xs font-mono text-emerald-800">
        <span className="flex items-center gap-1">
          <Wifi className="w-3 h-3" /> LAN_01
        </span>
        <span className="flex items-center gap-1">
          <Battery className="w-3 h-3" /> 100%
        </span>
        <span className="flex items-center gap-1">
          <Lock className="w-3 h-3" /> ENCRYPTED
        </span>
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
  variant?: "primary" | "danger" | "info";
  className?: string;
}

const CyberButton = ({
  onClick,
  icon,
  label,
  subLabel,
  variant = "primary",
  className = "",
}: CyberButtonProps) => {
  const colors = {
    primary:
      "border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.2)]",
    danger:
      "border-red-500/50 text-red-400 hover:bg-red-500/10 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]",
    info: "border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]",
  };

  return (
    <button
      onClick={onClick}
      className={`group relative h-16 w-full flex items-center justify-between px-4 border bg-black/40 backdrop-blur-sm transition-all duration-300 ${colors[variant]} ${className}`}
      style={{
        clipPath:
          "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
      }}
    >
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-current opacity-50" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-current opacity-50" />

      <div className="flex items-center gap-3">
        <div className="p-2 bg-black/50 rounded-sm group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="flex flex-col items-start">
          <span className="text-sm font-bold tracking-widest">{label}</span>
          {subLabel && (
            <span className="text-[10px] opacity-60 font-mono">{subLabel}</span>
          )}
        </div>
      </div>

      {/* Hover Arrow */}
      <ChevronRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
    </button>
  );
};

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
  const [showHistory, setShowHistory] = useState(true);

  // We use a ref for the CONTAINER, not the end element, to control scroll manually
  const logContainerRef = useRef<HTMLDivElement>(null);

  const currentTopic = TOPICS[index];
  const progress = Math.round(((index + 1) / TOPICS.length) * 100);
  const topicHistory = TOPICS.slice(0, index + 1);

  // --- Effects ---
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, index.toString());

    // Scroll Logic: Only scroll the container, NOT the window
    if (logContainerRef.current) {
      const { scrollHeight, clientHeight } = logContainerRef.current;
      // Smooth scroll the internal container to the bottom
      logContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [index]);

  // --- Handlers ---
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

  // --- Theme ---
  const theme = {
    bg: "bg-[#050505]",
    text: "text-emerald-500",
    border: "border-emerald-500/30",
    glow: "shadow-[0_0_15px_rgba(16,185,129,0.1)]",
  };

  return (
    <div
      className={`min-h-screen ${theme.bg} text-gray-200 font-mono flex flex-col relative overflow-hidden selection:bg-emerald-500/30 selection:text-emerald-200`}
    >
      {/* Background Grid & Scanlines */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
      </div>

      <CyberNavbar />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-8 h-[calc(100vh-80px)]">
        {/* --- LEFT COL: Active Topic Area --- */}
        <div className="lg:col-span-8 flex flex-col gap-6">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500 tracking-tighter">
              &lt;DEV_SPEAK /&gt;
            </h1>
            <p className="text-emerald-500/60 text-xs tracking-[0.3em] uppercase">
              // Neural Link Established
            </p>
          </div>

          {/* Main Card */}
          <div
            onClick={handleNext}
            className={`flex-1 relative w-full overflow-hidden bg-black/60 backdrop-blur-md border ${theme.border} ${theme.glow} hover:border-emerald-500/60 transition-all duration-300 group cursor-pointer`}
            style={{
              clipPath:
                "polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)",
            }}
          >
            {/* Decorative Corner Lines */}
            <div className="absolute top-0 right-0 p-4">
              <div className="flex gap-1">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`w-1 h-4 bg-emerald-500/${
                      40 - i * 10
                    } transform -skew-x-12`}
                  />
                ))}
              </div>
            </div>

            {/* Progress Bar Top */}
            <div className="absolute top-0 left-0 h-[2px] w-full bg-emerald-900/30">
              <div
                className="h-full bg-emerald-400 shadow-[0_0_10px_#34d399]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Content Center */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-12 text-center">
              <div className="mb-6 opacity-30 group-hover:opacity-50 transition-opacity duration-500 transform group-hover:scale-110">
                <Cpu className="w-24 h-24 text-emerald-500 animate-pulse" />
              </div>

              <div className="space-y-4 max-w-2xl relative z-10">
                <div className="inline-block px-2 py-1 bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-[10px] uppercase tracking-widest mb-2">
                  Index: {index.toString().padStart(3, "0")}
                </div>

                <h3
                  className={`text-3xl md:text-5xl font-bold text-white leading-tight transition-all duration-150 ${
                    fade
                      ? "opacity-0 blur-sm translate-y-2"
                      : "opacity-100 blur-0 translate-y-0"
                  }`}
                >
                  {currentTopic}
                  <span className="animate-pulse text-emerald-500">_</span>
                </h3>
              </div>

              <div className="absolute bottom-6 text-emerald-500/40 text-[10px] tracking-widest animate-pulse">
                [ CLICK TERMINAL TO ADVANCE ]
              </div>
            </div>
          </div>

          {/* Control Grid (New Buttons) */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <CyberButton
              onClick={handlePrev}
              icon={<ChevronLeft className="w-5 h-5" />}
              label="PREV"
              subLabel="BACK_STEP"
              variant="info"
            />
            <CyberButton
              onClick={copyToClipboard}
              icon={<Copy className="w-5 h-5" />}
              label="COPY"
              subLabel="CLIPBOARD"
              variant="info"
            />
            <CyberButton
              onClick={() => setShowHistory(!showHistory)}
              icon={<History className="w-5 h-5" />}
              label="LOGS"
              subLabel="TOGGLE_VIEW"
              variant="primary"
            />
            <CyberButton
              onClick={resetProtocol}
              icon={<RotateCcw className="w-5 h-5" />}
              label="RESET"
              subLabel="SYSTEM_WIPE"
              variant="danger"
            />
          </div>
        </div>

        {/* --- RIGHT COL: System Log --- */}
        <div
          className={`lg:col-span-4 transition-all duration-500 flex flex-col h-full overflow-hidden ${
            showHistory
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10 pointer-events-none lg:hidden"
          }`}
        >
          <div
            className="flex-1 flex flex-col bg-black/80 border border-emerald-500/20 backdrop-blur-sm relative overflow-hidden"
            style={{
              clipPath:
                "polygon(0 0, 100% 0, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
            }}
          >
            {/* Log Header */}
            <div className="px-4 py-3 bg-emerald-950/40 border-b border-emerald-500/20 flex items-center justify-between shrink-0">
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-2 tracking-wider">
                <Activity className="w-4 h-4" /> // EXECUTION_LOG
              </span>
            </div>

            {/* Scrollable Area */}
            <div
              ref={logContainerRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs custom-scrollbar scroll-smooth"
            >
              {topicHistory.map((topic, idx) => (
                <div
                  key={idx}
                  className={`group flex gap-3 items-start p-2 rounded-sm transition-colors ${
                    idx === index
                      ? "bg-emerald-500/10 border border-emerald-500/20"
                      : "hover:bg-white/5"
                  }`}
                >
                  <span className="shrink-0 text-emerald-600 font-bold">
                    [{idx.toString().padStart(2, "0")}]
                  </span>
                  <span
                    className={`break-words leading-relaxed ${
                      idx === index
                        ? "text-emerald-300 font-bold"
                        : "text-emerald-600/80"
                    }`}
                  >
                    {topic}
                  </span>
                  {idx === index && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_5px_#34d399]" />
                  )}
                </div>
              ))}
            </div>

            <div className="p-2 border-t border-emerald-500/10 bg-black text-[10px] text-emerald-700 text-center uppercase shrink-0">
              Monitoring Active Threads...
            </div>
          </div>
        </div>
      </main>

      <div className="relative z-10 mt-auto">
        <Footer />
      </div>

      {/* --- RESET MODAL --- */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-black border border-red-500 shadow-[0_0_50px_rgba(220,38,38,0.2)] overflow-hidden animate-in zoom-in-95 duration-200 relative">
            {/* Diagonal Stripes Background */}
            <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,red,red_10px,transparent_10px,transparent_20px)]" />

            <div className="relative z-10 bg-red-950/80 px-6 py-4 border-b border-red-500/30 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500 animate-pulse" />
              <h3 className="font-mono text-lg font-bold text-red-500 uppercase tracking-widest">
                System Override
              </h3>
            </div>

            <div className="relative z-10 p-8 space-y-6">
              <p className="text-sm text-red-200 font-mono leading-relaxed">
                WARNING: You are about to initiate a full sequence reset. All
                topic progress logs will be permanently expunged.
              </p>
              <div className="flex justify-end gap-4 mt-4">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-red-400 hover:text-white hover:bg-red-500/10 border border-red-500/30 transition-all"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmReset}
                  className="px-6 py-3 bg-red-600 hover:bg-red-500 text-black text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all"
                >
                  Confirm_Wipe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #050505; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #064e3b; border-radius: 0px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #10b981; }
      `}</style>
    </div>
  );
}
