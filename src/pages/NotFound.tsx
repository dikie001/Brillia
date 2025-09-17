import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useHook";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gray-50 dark:bg-gray-900">
      {/* Logo / App Name */}
      <h2 className="text-3xl font-extrabold text-blue-600 dark:text-blue-400 mb-8 tracking-wide">
        Brillia
      </h2>

      {/* Icon + 404 */}
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="w-16 h-16 text-yellow-500 dark:text-yellow-400 animate-bounce" />
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button
          onClick={() => navigate("/")}
          className="rounded-2xl px-8 py-4 cursor-pointer shadow-md hover:shadow-lg transition"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
