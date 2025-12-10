import {
  CheckCircle2,
  Download,
  Layout,
  Loader2,
  Smartphone,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

// 1. Define the custom PWA event interface
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

// 2. Extend the global window event map to satisfy TypeScript
declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
    appinstalled: Event;
  }
}

interface Perk {
  // 3. Changed to ReactNode because you are passing instantiated JSX (<Icon />)
  // not the component itself
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const perks: Perk[] = [
  {
    icon: <Wifi className="w-5 h-5 text-sky-500" />,
    title: "Offline Access",
    desc: "Works without internet",
  },
  {
    icon: <Zap className="w-5 h-5 text-amber-500" />,
    title: "Instant Load",
    desc: "Opens in milliseconds",
  },
  {
    icon: <Layout className="w-5 h-5 text-fuchsia-500" />,
    title: "Full Screen",
    desc: "No browser distractions",
  },
  {
    icon: <Smartphone className="w-5 h-5 text-emerald-500" />,
    title: "Home Screen",
    desc: "One-tap access",
  },
];

export default function PWAInstallModal() {
  // 4. Use the specific type instead of 'any'
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);

      const hasSeenModal = sessionStorage.getItem("pwa-modal-dismissed");
      if (!hasSeenModal) {
        // slight delay to allow app to render
        setTimeout(() => setIsOpen(true), 1500);
      }
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      setIsOpen(false);
      sessionStorage.removeItem("pwa-modal-dismissed");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    setIsInstalling(true);

    try {
      await deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;

      if (choiceResult.outcome === "accepted") {
        setIsOpen(false);
        sessionStorage.removeItem("pwa-modal-dismissed");
      }
    } catch (error) {
      console.error("Installation error:", error);
    } finally {
      setDeferredPrompt(null);
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("pwa-modal-dismissed", "true");
  };

  if (!isInstallable || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300" />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-sm bg-white dark:bg-gray-950 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in zoom-in-95 duration-300 slide-in-from-bottom-10">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 z-20 p-1 rounded-full text-white/80 hover:text-white transition-colors bg-white/10 hover:bg-white/20"
          aria-label="Dismiss installation prompt"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Decorative Top Banner */}
        <div className="h-36 bg-gradient-to-br from-indigo-700 to-indigo-800 flex items-center justify-center relative overflow-hidden">
          <div className="relative z-10 flex flex-col items-center pt-2">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl mb-3 ring-4 ring-white/10">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-white font-extrabold text-2xl tracking-tight drop-shadow-md">
              Install Brillia
            </h2>
            <p className="text-sm text-white/80 mt-1">
              For the best experience
            </p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          {/* Perks Grid */}
          <div className="grid grid-cols-2 gap-4 mt-2 ">
            {perks.map((perk, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-3 rounded-xl bg-gray-50 dark:bg-gray-900 shadow border border-zinc-100 dark:border-zinc-800/80 transition-shadow hover:shadow-md"
              >
                <div className="mb-2 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm">
                  {perk.icon}
                </div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 block">
                  {perk.title}
                </span>
                <span className="text-[10px] text-zinc-500 dark:text-zinc-400 leading-tight">
                  {perk.desc}
                </span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={handleInstallClick}
              disabled={isInstalling}
              className="w-full relative group overflow-hidden bg-indigo-600 text-white rounded-xl py-3.5 font-bold shadow-lg shadow-indigo-500/30 hover:shadow-xl transition-all duration-300 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed text-base"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>

              <span className="flex items-center justify-center gap-2 relative z-10">
                {isInstalling ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Installing...
                  </>
                ) : (
                  <>
                    Install App Now
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
              </span>
            </button>

            <button
              onClick={handleDismiss}
              className="w-full text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 text-sm font-medium py-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}