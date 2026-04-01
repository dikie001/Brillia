import { Download, Smartphone, X, ChevronRight } from "lucide-react";
import React, { useEffect } from "react";

interface InstallationModalProps {
  onClose: () => void;
}

const InstallationModal: React.FC<InstallationModalProps> = ({ onClose }) => {
  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const steps = [
    {
      title: "Look for the Install Prompt",
      description: "When visiting Brillia in your browser, look for an install icon in the address bar."
    },
    {
      title: "Use the App Menu",
      description: "If you don't see the prompt, check the browser's navigation menu for 'Install App'."
    },
    {
      title: "Add to Home Screen",
      description: "Confirm installation. Brillia will appear on your home screen like a native app."
    }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 dark:bg-black/60 backdrop-blur-md transition-all"
      role="dialog"
      aria-modal="true"
      onClick={onClose} // Clicking backdrop closes modal
    >
      <div 
        className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl overflow-hidden ring-1 ring-slate-900/5 dark:ring-white/10 transform transition-all"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Header Section */}
        <div className="relative p-6 sm:p-8 overflow-hidden">
          {/* Abstract Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-indigo-600 opacity-10 dark:opacity-20" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob" />
          
          <div className="relative flex items-start justify-between">
            <div className="flex flex-col gap-2">
              <div className="w-12 h-12 flex items-center justify-center bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm ring-1 ring-indigo-100 dark:ring-indigo-500/30 mb-2">
                <Download size={24} strokeWidth={2.5} />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Install Brillia
              </h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Add to your home screen for quick access.
              </p>
            </div>
            
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:text-slate-300 dark:hover:bg-slate-800 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Close modal"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 pt-2 sm:pt-2 space-y-8">
          
          {/* Steps */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 group">
                <div className="flex flex-col items-center gap-2 mt-0.5">
                  <div className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-bold text-xs ring-4 ring-white dark:ring-slate-900 transition-colors group-hover:bg-indigo-100 dark:group-hover:bg-indigo-500/20">
                    {index + 1}
                  </div>
                  {/* Connector Line */}
                  {index !== steps.length - 1 && (
                    <div className="w-0.5 h-full min-h-[2rem] bg-slate-100 dark:bg-slate-800" />
                  )}
                </div>
                <div className="pb-1">
                  <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Browser Support Callout */}
          <div className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-700/50">
            <Smartphone className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-slate-900 dark:text-white text-sm">Browser Support</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Works best in Chrome, Safari, Firefox, and Edge. Ensure your browser is up to date.
              </p>
            </div>
          </div>

          {/* Action Button */}
          <button
            onClick={onClose}
            className="group relative w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3.5 px-6 rounded-xl font-semibold shadow-md shadow-indigo-600/20 transition-all active:scale-[0.98] overflow-hidden"
          >
            <span className="relative z-10">Got it, let's go</span>
            <ChevronRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
            {/* Subtle button shine effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallationModal;