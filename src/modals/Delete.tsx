import { ADMIN_PASSWORD, STORAGE_KEYS } from "@/constants";
import { Loader2, AlertTriangle, Trash2, X } from "lucide-react";
import { useState, useEffect } from "react";
import { toast, Toaster } from "sonner";

type MainProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResetModal({ open, setOpen }: MainProps) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    if (!open) setPassword("");
  }, [open]);

  const resetAllData = () => {
    if (!password) {
      triggerShake();
      return toast.error("Password is required.");
    }
    
    if (password !== ADMIN_PASSWORD) {
      triggerShake();
      return toast.error("Incorrect administrator password.");
    }

    try {
      setLoading(true);
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEYS.TEST_RESULTS);
        localStorage.removeItem(STORAGE_KEYS.QUIZ_PROGRESS);
        localStorage.removeItem(STORAGE_KEYS.CURRENT_TEST_INDEX);
        
        toast.success("System reset complete. Reloading...");
        
        setTimeout(() => window.location.reload(), 1000);
      }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Failed to reset data.");
      setLoading(false);
    }
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={() => !loading && setOpen(false)}
    >
      <Toaster richColors position="top-center" theme="light" />
      
      <div 
        onClick={(e) => e.stopPropagation()}
        // Changed max-w-md to max-w-sm for a tighter feel
        className={`w-full max-w-[400px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-red-100 dark:border-red-900/30 transform transition-transform duration-200 ${shake ? "translate-x-2 border-red-500" : ""}`}
        style={shake ? { animation: "shake 0.5s cubic-bezier(.36,.07,.19,.97) both" } : {}}
      >
        {/* Compact Header - Horizontal Layout instead of Stacked */}
        <div className="relative bg-gradient-to-r from-red-600 to-rose-700 dark:from-red-900 dark:to-rose-950 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 relative z-10">
            <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center ring-1 ring-white/30">
              <AlertTriangle className="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">Danger Zone</h2>
              <p className="text-red-100 text-xs font-medium opacity-90">Delete all progress</p>
            </div>
          </div>
          
          <button 
            onClick={() => setOpen(false)}
            className="p-1.5 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-5">
          {/* Warning Box - Simplified */}
          <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-lg p-3 flex gap-3">
             <Trash2 className="h-5 w-5 text-red-600 dark:text-red-400 shrink-0 mt-0.5" />
             <p className="text-xs sm:text-sm text-red-800 dark:text-red-200 leading-relaxed">
               This action <strong>cannot be undone</strong>. All test results and history will be permanently wiped.
             </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              autoFocus
              disabled={loading}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && resetAllData()}
              placeholder="Enter admin password..."
              className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-red-500 focus:bg-white dark:focus:bg-gray-950 focus:ring-4 focus:ring-red-500/10 outline-none transition-all font-medium text-gray-900 dark:text-gray-100 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-1">
            <button
              type="button"
              disabled={loading}
              onClick={() => setOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-bold text-gray-600 hover:text-gray-800 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="button"
              disabled={loading}
              onClick={resetAllData}
              className="px-4 py-2.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-200 dark:shadow-none transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                "Delete Progress"
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Inline style for the shake animation if 'animate-shake' isn't in your tailwind config */}
      <style>{`
        @keyframes shake {
          10%, 90% { transform: translate3d(-1px, 0, 0); }
          20%, 80% { transform: translate3d(2px, 0, 0); }
          30%, 50%, 70% { transform: translate3d(-4px, 0, 0); }
          40%, 60% { transform: translate3d(4px, 0, 0); }
        }
      `}</style>
    </div>
  );
}