import { APP_VERSION } from "@/constants";
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Loader2,
  RefreshCcw,
} from "lucide-react";

export type UpdateStatus =
  | "idle"
  | "checking"
  | "available"
  | "latest"
  | "error";

interface UpdateModalProps {
  status: UpdateStatus;
  onClose: () => void;
  onUpdate: () => void;
}

export default function UpdateModal({
  status,
  onClose,
  onUpdate,
}: UpdateModalProps) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 h-screen   animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 p-6 animate-in zoom-in-95 duration-200">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Icon based on status */}
          <div
            className={`p-4 rounded-full ${
              status === "available"
                ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                : status === "error"
                ? "bg-red-100 text-red-600 dark:bg-red-900/30"
                : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300"
            }`}
          >
            {status === "checking" && (
              <Loader2 className="w-8 h-8 animate-spin" />
            )}
            {status === "available" && <Download className="w-8 h-8" />}
            {status === "latest" && <CheckCircle2 className="w-8 h-8" />}
            {status === "error" && <AlertCircle className="w-8 h-8" />}
            {status === "idle" && <RefreshCcw className="w-8 h-8" />}
          </div>

          {/* Text Content */}
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              {status === "checking" && "Checking for updates..."}
              {status === "available" && "Update Available"}
              {status === "latest" && "You're up to date"}
              {status === "error" && "Update Check Failed"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {status === "checking" &&
                "Please wait while we check version info."}
              {status === "available" && "A new version of the app is ready."}
              {status === "latest" &&
                `Version ${APP_VERSION} is the latest available.`}
              {status === "error" && "Could not connect to update server."}
            </p>
          </div>

          {/* Actions */}
          <div className="flex gap-3 w-full pt-2">
            {status === "available" ? (
              <>
                <button
                  onClick={onClose}
                  className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 rounded-lg transition-colors"
                >
                  Later
                </button>
                <button
                  onClick={onUpdate}
                  className="flex-1 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 rounded-lg transition-colors shadow-sm"
                >
                  Update Now
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
