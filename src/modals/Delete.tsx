import { useState } from "react";
import { Lock, ShieldCheck, LoaderCircle } from "lucide-react";
import { toast, Toaster } from "sonner";
import { STORAGE_KEYS } from "@/constants";

type MainProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResetModal({ open, setOpen }: MainProps) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const resetAllData = () => {
    if (!password)
      return toast.error("Enter password please", { id: "toast err1" });
    if (password !== "14572") {
      toast.error("Incorrect password!", { id: "toasty" });
      return;
    }

    try {
      setLoading(true);
      setTimeout(() => {
        localStorage.removeItem(STORAGE_KEYS.TEST_RESULTS);
        localStorage.removeItem(STORAGE_KEYS.QUIZ_PROGRESS);
        localStorage.removeItem(STORAGE_KEYS.CURRENT_TEST_INDEX);
        toast.success("Data cleared successfully ");
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error("Error resetting data:", err);
      toast.error("Something went wrong!");
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  };

  if (!open) return null;

  return (
    <div
      onClick={() => setOpen(false)}
      className="fixed cursor-pointer inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <Toaster richColors position="top-center" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-md sm:max-w-lg mx-auto"
      >
        {/* Header */}

        <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 dark:from-indigo-700 dark:to-indigo-800 rounded-t-3xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/20 rounded-xl">
              <Lock size={24} />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Confirm Reset</h2>
          </div>
          <p className="text-white/90 text-sm sm:text-base">
            Enter the admin password to permanently clear all stored data.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              <ShieldCheck
                size={16}
                className="text-indigo-600 dark:text-indigo-400"
              />
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-600 outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-900 text-sm sm:text-base"
            />
          </div>

          {/* Actions */}
          <div className="flex  sm:flex-row justify-end gap-3">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="px-6 py-3 rounded-xl font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-sm sm:text-base"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={resetAllData}
              className="px-6 py-3 rounded-xl font-medium flex items-center justify-center gap-2 transition-all bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:from-indigo-700 hover:to-indigo-800 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              {loading ? (
                <>
                  <LoaderCircle size={20} className="animate-spin" /> Clearing…
                </>
              ) : (
                "Confirm Reset"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
