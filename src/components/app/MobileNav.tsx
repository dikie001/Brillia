import {
  Book,
  Newspaper,
  Puzzle,
  Quote,
  Sparkles,
  Wand,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const menuItems = [
  { label: "Brain Teasers", icon: Puzzle, to: "/brain-teasers" },
  { label: "Mini Stories", icon: Book, to: "/mini-stories" },
  { label: "Quiz Quest", icon: Sparkles, to: "/quiz-quest" },
  { label: "Wisdom Nuggets", icon: Quote, to: "/wisdom-nuggets" },
  { label: "Speech Drill", icon: Wand, to: "/speech-drills" },
  { label: "Fact Frenzy", icon: Newspaper, to: "/fact-frenzy" },
];

export default function MobileNav({ open, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 lg:right-1/2 lg:translate-x-1/2 lg:w-150 w-72 bg-white h-screen lg:h-120 lg:rounded-b-xl dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0 lg:translate-y-0" : "translate-x-full lg:-translate-y-150"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-bold text-blue-600 dark:text-green-400">
            Brillia
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <X className="w-6 h-6 text-blue-600" />
          </button>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col p-5 space-y-4 text-gray-700 dark:text-gray-200">
          {menuItems.map((item) => {
            const active = location.pathname === item.to;
            return (
              <button
                key={item.label}
                onClick={() => {
                  navigate(item.to);
                  onClose();
                }}
                className={`flex items-center gap-3 py-2 px-3 rounded-lg transition ${
                  active
                    ? "bg-green-100 dark:bg-green-900/30 text-green-600"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
