import { PartyPopper, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export function useUpdateListener() {
  // Use a ref to prevent adding listeners multiple times in strict mode
  const isMounted = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;

    // prevent double-firing in dev mode
    if (isMounted.current) return;
    isMounted.current = true;

    // --- 1. Post-Update Feedback ---
    const wasUpdated = localStorage.getItem("app-was-updated");
    if (wasUpdated) {
      setTimeout(() => {
        toast("App Updated Successfully!", {
          description: "You are now using the latest version.",
          icon: <PartyPopper className="w-5 h-5 text-green-500" />,
          duration: 5000,
          id: "update-success", // Unique ID prevents duplicates
        });
        localStorage.removeItem("app-was-updated");
      }, 1000); // Increased delay slightly to let app settle
    }

    // --- 2. RELOAD LOGIC (The Fix for the Loop) ---
    // We listen for the 'controllerchange' event. This fires ONLY when
    // the new Service Worker has successfully taken control.
    let refreshing = false;
    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (!refreshing) {
        refreshing = true;
        window.location.reload();
      }
    });

    // --- 3. Toast Trigger Function ---
    const showUpdateToast = (registration: ServiceWorkerRegistration) => {
      // We give this toast a static ID ("sw-update"). 
      // If this function is called 100 times, Sonner will only show 1 toast.
      toast("Update Available", {
        id: "sw-update", 
        description: "A newer version is ready.",
        icon: <Sparkles className="w-5 h-5 text-indigo-500" />,
        duration: Infinity,
        action: {
          label: "Update",
          onClick: () => {
            localStorage.setItem("app-was-updated", "true");
            
            // JUST tell the SW to skip waiting.
            // DO NOT reload here. The 'controllerchange' listener above handles it.
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

    // --- 4. Registration & Listening ---
    navigator.serviceWorker.ready.then((registration) => {
      // A. If waiting on load
      if (registration.waiting) {
        showUpdateToast(registration);
      }

      // B. If update found while using app
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