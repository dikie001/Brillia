import { useEffect } from "react";
import { toast } from "sonner"; 

export function useUpdateListener() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    const triggerUpdateToast = (registration: ServiceWorkerRegistration) => {
      toast("Update Available", {
        description: "A new version of the app is ready.",
        action: {
          label: "Refresh",
          onClick: () => {
            // Tell the new SW to take over
            registration.waiting?.postMessage({ type: "SKIP_WAITING" });
            // Reload the page
            window.location.reload();
          },
        },
        duration: Infinity, // Important: Don't auto-dismiss
      });
    };

    navigator.serviceWorker.ready.then((registration) => {
      // 1. Check if an update is already waiting (e.g. from a previous background check)
      if (registration.waiting) {
        triggerUpdateToast(registration);
      }

      // 2. Listen for new updates while the app is running
      registration.addEventListener("updatefound", () => {
        const newWorker = registration.installing;
        if (newWorker) {
          newWorker.addEventListener("statechange", () => {
            // If the new worker is installed and there is an existing controller, it's an update
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              triggerUpdateToast(registration);
            }
          });
        }
      });
    });
  }, []);
}