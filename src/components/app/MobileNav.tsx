import {
  Book,
  Home,
  Laptop2,
  Newspaper,
  Puzzle,
  Quote,
  Settings,
  Sparkles,
  Wand,
  X,
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
  { label: "Brain Teasers", icon: Puzzle, to: "/brain-teasers" },
  { label: "Mini Stories", icon: Book, to: "/mini-stories" },
  { label: "Quiz Quest", icon: Sparkles, to: "/quiz-quest" },
  { label: "Wisdom Nuggets", icon: Quote, to: "/wisdom-nuggets" },
  { label: "Speech Drill", icon: Wand, to: "/speech-drills" },
  { label: "Fact Frenzy", icon: Newspaper, to: "/fact-frenzy" },
  { label: "Settings", icon: Settings, to: "/settings" },
];

export default function MobileNav({ open, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User>({
    name: "",
    hobby: "",
    subject: "",
  });

  // Fetch users details from storage
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
          className="fixed inset-0 h-screen bg-black/50 backdrop-blur-sm z-40"
        />
      )}

      {/* Side Menu */}
      <div
        className={`fixed top-0 right-0 lg:right-1/2 lg:translate-x-1/2 lg:w-150 w-72 bg-white h-screen lg:h-120 lg:rounded-b-xl dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 flex flex-col ${
          open
            ? "translate-x-0 lg:translate-y-0"
            : "translate-x-full lg:-translate-y-150"
        }`}
      >
        {/* Header */}
        <div className="flex  items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-2xl  lg:text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight ">
            {user.name}
          </h1>
          <button
            onClick={onClose}
            className={`p-1.5 hover:bg-gray-300 dark:hover:bg-white/20 rounded-md`}
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Menu Buttons */}
        <div className="flex flex-col h-full mb-4">
          <div className="flex flex-1 flex-col p-5 space-y-4 text-gray-700 dark:text-gray-200">
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
          {/* FOOTER */}
          <div className="flex lg:hidden flex-col items-center border-t border-gray-200 dark:border-gray-700 space-y-1">
            <div className="mt-2 mb-2 flex gap-2 justify-center items-center">
              <p className="text-gray-400 text-sm text-center">
                From code to impact -{" "}
                <span className="text-pink-400 underline font-medium">
                  <a
                    href="https://dikie.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dikie.dev
                  </a>
                </span>
              </p>
              <Laptop2 className="text-pink-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
