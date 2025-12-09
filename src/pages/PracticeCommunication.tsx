import React, { useEffect, useState } from "react";
import { 
  Terminal, 
  Cpu, 
  ChevronRight, 
  ChevronLeft, 
  Copy, 
  RotateCcw, 
  Hash, 
  Code2, 
  ShieldCheck, 
  Zap 
} from "lucide-react";

// !!! Ensure these exist in your project
import Navbar from "@/components/app/Navbar"; 
import Footer from "@/components/app/Footer";
import Animation from "./animation/Animation"; 

// --- DATA ---
const TOPICS = [
  "Morning routines", "Your ideal weekend", "Your favorite childhood memory", "A movie you recently watched",
  "A problem you solved this week", "A book you want to read", "A food you love or hate", "Your dream travel destination",
  "A skill you want to learn", "Your most productive time of day", "Your biggest pet peeve", "A friend who inspires you",
  "A song stuck in your head", "A gadget you want to buy", "Your favorite app and why", "A habit you’re trying to build",
  "Social media you use most", "A goal you’re chasing this month", "Your favorite holiday", "A funny mistake you made",
  "A trend you think is overrated", "A moment you felt proud", "Your go-to relaxation method", "A hobby you want to start",
  "A city you want to live in", "A skill you admire in others", "Your workout routine (or lack of it)", "Something you recently learned",
  "Your relationship with money", "Your biggest distraction", "What motivates you daily", "Something that annoys you",
  "Your favorite tech tool", "Your best memory from school", "A food you want to try", "Your dream job",
  "A funny story from campus", "A fear you're overcoming", "Your favorite series", "Something you bought recently",
  "A moment you felt confident", "A person you want to meet", "Your favorite quote", "A mistake you learned from",
  "Something you want to improve", "A place you go to think", "A challenge you’re facing now", "A habit you dropped",
  "A compliment you received", "What success means to you",
];

const STORAGE_KEY = "dev-topic-index";

export default function DevTopics() {
  // State: Sequential Index
  const [index, setIndex] = useState<number>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? parseInt(saved, 10) : 0;
    }
    return 0;
  });

  const [fade, setFade] = useState(false);

  // --- Logic ---
  const currentTopic = TOPICS[index];
  const progress = Math.round(((index + 1) / TOPICS.length) * 100);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, index.toString());
  }, [index]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % TOPICS.length);
      setFade(false);
    }, 200);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setFade(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + TOPICS.length) % TOPICS.length);
      setFade(false);
    }, 200);
  };

  const copyToClipboard = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(currentTopic);
  };

  const resetProtocol = () => {
    if(confirm("Reboot system sequence? (Reset index to 0)")) {
      setIndex(0);
    }
  };

  // --- Layout Config ---
  // We use the exact structure of your requested layout but swap the colors for "Hacker" vibes
  const heroConfig = {
    name: "Terminal Output",
    icon: <Terminal />,
    description: `Sequence: ${index + 1} / ${TOPICS.length}`,
    color: "from-emerald-500 to-cyan-600",
    bgGradient: "from-emerald-50 to-cyan-50 dark:from-emerald-900/20 dark:to-cyan-900/20",
  };

  const gridItems = [
    {
      name: "Previous Node",
      icon: <ChevronLeft />,
      desc: "Return to last execution",
      action: handlePrev,
      color: "from-slate-600 to-gray-700",
    },
    {
      name: "Copy Payload",
      icon: <Copy />,
      desc: "Copy string to clipboard",
      action: copyToClipboard,
      color: "from-blue-500 to-indigo-600",
    },
    {
      name: "System Reboot",
      icon: <RotateCcw />,
      desc: "Reset index to 0",
      action: resetProtocol,
      color: "from-red-500 to-rose-600",
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 dark:from-black dark:via-gray-950 dark:to-slate-950 flex flex-col relative overflow-hidden transition-colors duration-500 font-mono">
      
      {/* Optional Animation BG */}
      {typeof Animation !== "undefined" && <Animation />}

      <Navbar />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-4 animate-in fade-in duration-700">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/80 dark:bg-emerald-950/50 border border-emerald-500/30 text-emerald-500 rounded-sm shadow-md text-xs font-bold mb-4 tracking-widest uppercase">
              <Zap className="w-3 h-3" />
              <span>System Online • v.2.0.4</span>
            </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent tracking-tighter">
            &lt;DevSpeak /&gt;
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-mono text-sm">
            Execute verbal protocols. Iterate sequentially.
          </p>
        </div>

        {/* --- HERO: THE TERMINAL (TOPIC DISPLAY) --- */}
        <div className="mb-6 flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div
            onClick={handleNext}
            className="cursor-pointer group relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-slate-50 dark:bg-black border border-slate-300 dark:border-emerald-500/30 shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
          >
            {/* Top gradient bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${heroConfig.color} transform origin-left scale-x-100 transition-transform duration-500`} />
            
            {/* Progress Bar (Subtle) */}
            <div className="absolute bottom-0 left-0 h-1 bg-emerald-500/20 w-full">
               <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>

            {/* Content Layout */}
            <div className="relative p-6 md:p-10 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-10">
              
              {/* Left: Icon */}
              <div className="relative flex-shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-r ${heroConfig.color} rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className={`relative p-4 rounded-lg bg-black/5 dark:bg-emerald-900/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-500`}>
                  {heroConfig.icon}
                </div>
              </div>

              {/* Middle: The Topic */}
              <div className="flex-1 text-center md:text-left space-y-2 w-full">
                <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
                   <Hash className="w-3 h-3" /> 
                   <span>Index: {index}</span>
                </div>
                
                <h3 className={`text-2xl md:text-4xl font-bold text-gray-900 dark:text-emerald-50 transition-opacity duration-200 ${fade ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
                  {currentTopic}
                  <span className="animate-pulse text-emerald-500">_</span>
                </h3>
                
                <p className="text-xs text-emerald-600/70 dark:text-emerald-400/50 pt-2 font-mono">
                  {heroConfig.description}
                </p>
              </div>

              {/* Right: Next Button */}
              <div className="flex-shrink-0 flex items-center gap-4">
                <div className={`
                    hidden md:flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-white transition-all duration-300
                    bg-gradient-to-r ${heroConfig.color} shadow-lg opacity-90 group-hover:opacity-100 group-hover:translate-x-1
                  `}>
                  <span>EXECUTE_NEXT</span>
                  <Code2 className="w-4 h-4" />
                </div>
                {/* Mobile Arrow */}
                <div className="md:hidden p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-emerald-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-emerald-400" />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* --- END HERO --- */}

        {/* --- CONTROL GRID --- */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {gridItems.map((item, idx) => (
            <button
              key={item.name}
              onClick={item.action}
              className="group relative p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-black/40 border border-gray-200 dark:border-emerald-500/20 backdrop-blur-sm overflow-hidden flex flex-col items-center text-center"
              style={{
                animationDelay: `${idx * 100}ms`,
                animation: "slideUp 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />

              <div className="mb-4 relative">
                 <div className={`relative p-3 rounded-md bg-gray-100 dark:bg-gray-900 group-hover:scale-110 transition-transform duration-300`}>
                   {React.cloneElement(item.icon as React.ReactElement)}
                 </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                {item.name}
              </h3>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-500 font-mono">
                {item.desc}
              </p>
            </button>
          ))}
        </div>
        
        {/* Footer info line */}
        <div className="mt-8 flex justify-center items-center gap-2 text-[10px] text-gray-400 uppercase tracking-widest opacity-60">
           <ShieldCheck className="w-3 h-3" />
           <span>Secure Connection // Port 3000</span>
           <Cpu className="w-3 h-3 ml-2" />
           <span>Mem: {Math.round(Math.random() * 100)}%</span>
        </div>

      </main>

      <Footer />
      
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}