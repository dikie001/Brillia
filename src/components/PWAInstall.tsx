import { Download, X, Smartphone } from "lucide-react";
import { useEffect, useState } from "react";

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);

      // Show banner after a brief delay for better UX
      const hasSeenBanner = sessionStorage.getItem("pwa-banner-dismissed");
      if (!hasSeenBanner) {
        setTimeout(() => setShowBanner(true), 2000);
      }
    };

    const handleAppInstalled = () => {
      setIsInstallable(false);
      setDeferredPrompt(null);
      setShowBanner(false);
      sessionStorage.removeItem("pwa-banner-dismissed");
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
        setShowBanner(false);
        sessionStorage.removeItem("pwa-banner-dismissed");
      }
    } catch (error) {
      console.error("Installation error:", error);
    } finally {
      setDeferredPrompt(null);
      setIsInstallable(false);
      setIsInstalling(false);
    }
  };

  const dismissBanner = () => {
    setShowBanner(false);
    sessionStorage.setItem("pwa-banner-dismissed", "true");
  };

  if (!isInstallable) return null;

  return (
    <>
      {/* Installation Banner */}
      {showBanner && (
        <div className="fixed top-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 animate-slideDown">
          <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-900 rounded-2xl shadow-2xl p-5 text-white backdrop-blur-sm border border-indigo-500/20">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Smartphone className="w-6 h-6 text-indigo-100" />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-lg mb-1">Install App</h3>
                <p className="text-sm text-indigo-100 mb-4">
                  Add to your home screen for quick access and offline use
                </p>

                <div className="flex gap-2">
                  <button
                    onClick={handleInstallClick}
                    disabled={isInstalling}
                    className="flex-1 bg-white text-indigo-700 px-4 py-2 rounded-lg font-medium text-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isInstalling ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-indigo-700 border-t-transparent rounded-full animate-spin" />
                        Installing...
                      </span>
                    ) : (
                      "Install Now"
                    )}
                  </button>

                  <button
                    onClick={dismissBanner}
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                  >
                    Later
                  </button>
                </div>
              </div>

              <button
                onClick={dismissBanner}
                className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Install Button */}
      {!showBanner && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={handleInstallClick}
            disabled={isInstalling}
            className="group relative flex items-center gap-3 px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 dark:shadow-indigo-900/30 font-medium transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            aria-label="Install application"
          >
            {isInstalling ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span className="hidden sm:inline">Installing...</span>
              </>
            ) : (
              <>
                <Download className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                <span className="hidden sm:inline">Install App</span>
              </>
            )}

            {/* Pulse effect on hover */}
            <span className="absolute inset-0 rounded-full bg-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </button>
        </div>
      )}

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-1rem);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideDown {
          animation: slideDown 0.4s ease-out;
        }
      `}</style>
    </>
  );
}
