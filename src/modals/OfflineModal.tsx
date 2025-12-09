import { WifiOff, Database, X } from "lucide-react";
import React from "react";

interface OfflineModalProps {
  onClose: () => void;
}

const OfflineModal: React.FC<OfflineModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 dark:bg-gray-900 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 ease-out">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-3xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <WifiOff size={24} />
              </div>
              <h2 className="text-2xl font-bold">Offline Use</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white/20 rounded-xl hover:bg-white/30 transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>
          <p className="text-white/90 text-sm mt-2">
            Enjoy Brillia without an internet connection
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Cached Content
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Once installed, all Quick Challenges, stories, facts, and Life
                  Gems are stored locally on your device for instant access.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                <WifiOff className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  No Internet Required
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Use Brillia completely offline. Browse content, save
                  favorites, and track progress without needing a data
                  connection.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                  !
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Sync When Online
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Your favorites and progress are saved locally. When you
                  reconnect, any new content will be available automatically.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <WifiOff className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-green-900 dark:text-green-100">
                Always Available
              </h4>
            </div>
            <p className="text-sm text-green-700 dark:text-green-300">
              Brillia is designed to work seamlessly whether you're online or
              offline, ensuring you can learn and have fun anytime, anywhere.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-3 px-6 rounded-xl font-medium hover:from-indigo-700 hover:to-indigo-800 transition-all duration-300"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineModal;
