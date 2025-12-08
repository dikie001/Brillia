import { PartyPopper, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export function useUpdateListener() {
  useEffect(() => {
    // 1. Check if we just finished an update (Post-Update Feedback)
    const wasUpdated = localStorage.getItem("app-was-updated");
    
    if (wasUpdated) {
      // Small delay to ensure the UI is mounted before showing the toast
      setTimeout(() => {
        toast("App Updated Successfully!", {
          description: "You are now using the latest version with new features.",
          icon: <PartyPopper className="w-5 h-5 text-green-500" />,
          duration: 5000,
        });
        localStorage.removeItem("app-was-updated");
      }, 500);
    }

    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    // 2. Define the Update Prompt Toast
    const showUpdateToast = (registration: ServiceWorkerRegistration) => {
      toast("Update Available", {
        description: "A newer, faster version of the app is ready.",
        icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
        duration: Infinity, // Keep it visible until action taken
        action: {
          label: "Update Now",
          onClick: () => {
            // Set flag so we know to show success message after reload
            localStorage.setItem("app-was-updated", "true");

            // Tell new SW to activate
            if (registration.waiting) {
              registration.waiting.postMessage({ type: "SKIP_WAITING" });
            }
            
            // Reload immediately to apply changes
            window.location.reload();
          },
        },
        cancel: {
          label: "Later",
          onClick: () => { /* User dismissed it */ }
        }
      });
    };

    // 3. Register Listeners
    navigator.serviceWorker.ready.then((registration) => {
      // Check if waiting state exists on load
      if (registration.waiting) {
        showUpdateToast(registration);
      }

      // Listen for new updates arriving while using the app
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              showUpdateToast(registration);
            }
          });
        }
      });
    });
  }, []);
}