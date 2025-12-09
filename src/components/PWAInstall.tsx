import { 
  Smartphone, 
  Wifi, 
  Zap, 
  Layout, 
  Download, 
  CheckCircle2 
} from "lucide-react";
import { useEffect, useState } from "react";

export default function PWAInstallModal() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);

      // Check if user has already dismissed it recently
      const hasSeenModal = sessionStorage.getItem("pwa-modal-dismissed");
      if (!hasSeenModal) {
        // slight delay to allow app to render first, then interrupt
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
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
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
      setIsInstallable(false);
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setIsOpen(false);
    sessionStorage.setItem("pwa-modal-dismissed", "true");
  };

  if (!isInstallable || !isOpen) return null;

  const perks = [
    {
      icon: <Wifi className="w-5 h-5 text-blue-500" />,
      title: "Offline Access",
      desc: "Works without internet"
    },
    {
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      title: "Instant Load",
      desc: "Opens in milliseconds"
    },
    {
      icon: <Layout className="w-5 h-5 text-purple-500" />,
      title: "Full Screen",
      desc: "No browser distractions"
    },
    {
      icon: <Smartphone className="w-5 h-5 text-green-500" />,
      title: "Home Screen",
      desc: "One-tap access"
    }
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with Blur - Cannot be clicked to dismiss (forcing interaction) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 animate-in zoom-in-95 duration-300 slide-in-from-bottom-10">
        
        {/* Decorative Top Banner */}
        <div className="h-32 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg mb-2 ring-4 ring-white/10">
              <Download className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-white font-bold text-xl tracking-tight">Install Brillia</h2>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6">
          <div className="text-center space-y-2">
            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 text-lg">
              Get the full experience
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Install the app to unlock better performance and exclusive features.
            </p>
          </div>

          {/* Perks Grid */}
          <div className="grid grid-cols-2 gap-4">
            {perks.map((perk, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center text-center p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-100 dark:border-zinc-800"
              >
                <div className="mb-2 p-2 bg-white dark:bg-zinc-800 rounded-full shadow-sm">
                  {perk.icon}
                </div>
                <span className="text-xs font-semibold text-zinc-900 dark:text-zinc-200 block">
                  {perk.title}
                </span>
                <span className="text-[10px] text-zinc-500 leading-tight">
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
              className="w-full relative group overflow-hidden bg-zinc-900 dark:bg-indigo-600 text-white rounded-xl py-3.5 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span className="flex items-center justify-center gap-2 relative z-10">
                {isInstalling ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
              className="w-full text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300 text-sm font-medium py-2 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}