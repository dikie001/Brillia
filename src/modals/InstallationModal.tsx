import { Download, Smartphone, X } from "lucide-react";
import React from "react";

interface InstallationModalProps {
  onClose: () => void;
}

const InstallationModal: React.FC<InstallationModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 dark:bg-gray-900 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 ease-out">
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-3xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-xl">
                <Download size={24} />
              </div>
              <h2 className="text-2xl font-bold">Install Brillia</h2>
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
            Add Brillia to your home screen for quick access
          </p>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Look for the Install Prompt</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  When visiting Brillia in your browser, look for an install icon (usually a plus sign) in the address bar or a pop-up asking to install the app.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Use the PWA Install Button</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  If you don't see the prompt, check the navigation bar for a "Install" or download icon that will guide you through the installation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">Add to Home Screen</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Click "Install" or "Add to Home Screen" to install Brillia as a native app. It will appear on your home screen just like other apps.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              <h4 className="font-semibold text-indigo-900 dark:text-indigo-100">Browser Support</h4>
            </div>
            <p className="text-sm text-indigo-700 dark:text-indigo-300">
              Works best in Chrome, Firefox, Safari, and Edge. Make sure you're using the latest version of your browser for the best experience.
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

export default InstallationModal;
