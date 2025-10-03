import React from "react";
import { Loader2 } from "lucide-react"; 
import { useTheme } from "@/hooks/useHook";

const LoadingPage: React.FC = () => {
  const { theme } = useTheme();
  console.log(theme);
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent">
      <div className="flex flex-col items-center space-y-6">
        {/* App Icon */}
        <img
          src="/images/logo-bg.png"
          alt="Brillia Logo"
          className="h-20 w-20 animate-pulse"
        />

        {/* Spinner (optional, remove if you want only icon) */}
        <Loader2 className="h-10 w-10 animate-spin text-indigo-600" />

        <p className="text-slate-300 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
