import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
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

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

  if (!isInstallable) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fadeIn">
      <button
        onClick={handleInstallClick}
        className="flex items-center gap-2 px-5 py-3 rounded-2xl shadow-lg 
                   bg-gradient-to-r from-indigo-500 to-indigo-700 
                   text-white font-medium tracking-wide
                   hover:from-indigo-600 hover:to-indigo-800 
                   focus:outline-none focus:ring-2 focus:ring-indigo-400 
                   transition-all duration-300"
      >
        <Download className="w-5 h-5" />
        <span>Install App</span>
      </button>
    </div>
  );
}
