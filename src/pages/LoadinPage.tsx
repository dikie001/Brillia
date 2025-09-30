import React from "react";
import { Loader2 } from "lucide-react"; // optional, keep if you want spinner

const LoadingPage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center  bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-slate-900">
      <div className="flex flex-col items-center space-y-6">
        {/* App Icon */}
        <img
          src="/images/logo-bg.png"
          alt="Brillia Logo"
          className="h-20 w-20 animate-pulse"
        />

        {/* Spinner (optional, remove if you want only icon) */}
        <Loader2 className="h-10 w-10 animate-spin text-cyan-400" />

        <p className="text-slate-300 text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingPage;
