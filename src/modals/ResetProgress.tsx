import React, { useEffect } from "react";
import { AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResetProgressProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ResetProgress: React.FC<ResetProgressProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyPress);
    }
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Reset All Progress?
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            This will clear all read stories, favorites, practiced items, and settings. This action cannot be undone.
          </p>
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={onConfirm}>
              Reset Progress
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetProgress;
