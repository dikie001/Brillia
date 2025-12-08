import { PartyPopper, Sparkles } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

export function useUpdateListener() {
  useEffect(() => {
    // 1. Safety Checks:
    // Don't run on server, if no SW support, or if in Development (prevents infinite loops locally)
    if (
      typeof window === "undefined" ||
      !("serviceWorker" in navigator) ||
      process.env.NODE_ENV === "development"
    ) {
      return;
    }

    // --- 2. Post-Update Feedback (Success Toast) ---
    const wasUpdated = localStorage.getItem("app-was-updated");
    if (wasUpdated) {
      // Clear flag IMMEDIATELY to prevent loop if user refreshes fast
      localStorage.removeItem("app-was-updated");
      
      setTimeout(() => {
        toast("App Updated Successfully!", {
          description: "You are now using the latest version.",
          icon: <PartyPopper className="w-5 h-5 text-green-500" />,
          duration: 5000,
          id: "update-success",
        });
      }, 1000);
    }

    // --- 3. Reload Logic (The Handler) ---
    let refreshing = false;
    const handleControllerChange = () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    };

    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);

    // --- 4. Update Toast Trigger ---
    const showUpdateToast = (registration: ServiceWorkerRegistration) => {
      toast("Update Available", {
        id: "sw-update", // Static ID prevents duplicates
        description: "A newer version is ready.",
        icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
        duration: Infinity,
        action: {
          label: "Update",
          onClick: () => {
            localStorage.setItem("app-was-updated", "true");
            // Tell SW to skip waiting; listener above will handle reload
            if (registration.waiting) {
              registration.waiting.postMessage({ type: "SKIP_WAITING" });
            }
          },
        },
        cancel: {
          label: "Later",
          onClick: () => {},
        },
      });
    };

    // --- 5. Registration & Listening ---
    navigator.serviceWorker.ready.then((registration) => {
      // Check if waiting immediately
      if (registration.waiting) {
        showUpdateToast(registration);
      }

      // Listen for new updates
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

    // --- 6. Cleanup (Crucial to stop "constant" firing) ---
    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
    };
  }, []);
}