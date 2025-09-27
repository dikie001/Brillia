import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { STORAGE_KEYS } from "@/constants";

type MainProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ResetModal({ open, setOpen }: MainProps) {
  const [password, setPassword] = useState("");

  const resetAllData = () => {
    try {
      if (!password) return;
      if (password !== "14572") {
        toast.error("Incorrect password!", { id: "toasty" });
        return;
      }

      localStorage.removeItem(STORAGE_KEYS.TEST_RESULTS);
      localStorage.removeItem(STORAGE_KEYS.QUIZ_PROGRESS);
      localStorage.removeItem(STORAGE_KEYS.CURRENT_TEST_INDEX);
      toast.success("Data cleared Successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error resetting data:", error);
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        Reset All Data
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Modal */}
          <div className="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Confirm Data Reset
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Enter password to confirm clearing all stored data.
            </p>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-4 w-full rounded-lg border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />

            <div className="mt-6 flex justify-end gap-3">
              <Button
                onClick={() => setOpen(false)}
                variant="outline"
                className="rounded-lg"
              >
                Cancel
              </Button>
              <Button
                onClick={resetAllData}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
