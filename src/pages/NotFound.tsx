import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useHook";
import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useSound from "@/hooks/useSound";

export default function NotFound() {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const {playSend}=useSound()
  console.log(theme)

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 bg-gray-50 dark:bg-gray-900">
      {/* Logo / App Name */}
      <h2 className="text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-6 tracking-tight">
        Brillia
      </h2>

      {/* Icon + 404 */}
      <div className="flex flex-col items-center space-y-4">
        <AlertTriangle className="w-20 h-20 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-6xl font-bold text-gray-900 dark:text-white">
          404
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md text-center">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button
          onClick={() => { playSend(); navigate("/"); }}
          className="rounded-xl px-10 py-6 bg-indigo-600 text-white font-semibold shadow-md hover:bg-indigo-500 transition-colors"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
