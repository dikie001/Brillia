import {
  Book,
  HelpCircle,
  Home,
  Info,
  MessageSquare,
  Newspaper,
  Puzzle,
  Quote,
  Settings,
  Sparkles,
  Wand,
  X
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

interface User {
  name: string;
  hobby: string;
  subject: string;
}

const menuItems = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Guide", icon: HelpCircle, to: "/guide" },
  { label: "Brain Teasers", icon: Puzzle, to: "/brain-teasers" },
  { label: "Mini Stories", icon: Book, to: "/mini-stories" },
  { label: "Quiz Quest", icon: Sparkles, to: "/quiz-quest" },
  { label: "Wisdom Nuggets", icon: Quote, to: "/wisdom-nuggets" },
  { label: "Tongue Twisters", icon: Wand, to: "/tongue-twisters" },
  { label: "Amazing Facts", icon: Newspaper, to: "/amazing-facts" },
  { label: "Contact Developer", icon: MessageSquare, to: "/contact-developer" },
  { label: "About", icon: Info, to: "/about" },
  { label: "Help", icon: Info, to: "/help" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

export default function MobileNav({ open, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User>({ name: "", hobby: "", subject: "" });

  useEffect(() => {
    const userDetails = localStorage.getItem("user-info");
    userDetails && setUser(JSON.parse(userDetails));
  }, []);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          onClick={onClose}
          className="fixed inset-0 h-screen bg-black/60 backdrop-blur-sm z-40"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 lg:right-1/2 lg:translate-x-1/2 lg:w-150 w-72 h-screen lg:h-140 lg:rounded-b-xl shadow-2xl z-50 transform transition-transform duration-300 flex flex-col
          bg-white/90 dark:bg-gray-950/90 border-l border-indigo-200/40 dark:border-indigo-800/40
          ${
            open
              ? "translate-x-0 lg:translate-y-0"
              : "translate-x-full lg:-translate-y-150 opacity-10"
          }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-indigo-200/40 dark:border-indigo-800/40">
          <h1 className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent leading-tight">
            {user.name}
          </h1>

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition"
          >
            <X className="w-5 h-5 text-indigo-500 dark:text-indigo-300" />
          </button>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col h-full mb-4">
          <div className="flex flex-1 flex-col p-5 space-y-3 text-gray-700 dark:text-gray-200">
            {menuItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    navigate(item.to);
                    onClose();
                  }}
                  className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors
                    ${
                      active
                        ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300"
                        : "hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
                    }`}
                >
                  <item.icon
                    className={`w-5 h-5 ${
                      item.label === "Settings" && "animate-spin"
                    }`}
                  />
                  {item.label}
                </button>
              );
            })}
          </div>


        </div>
      </div>
    </>
  );
}
