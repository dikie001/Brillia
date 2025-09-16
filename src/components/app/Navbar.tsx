import React, { useEffect, useState } from "react";
import { Menu, Sun } from "lucide-react";
import MobileNav from "./MobileNav";
import { useTheme } from "@/hooks/useHook";

const greetings: string[] = [
  "Hello",
  "Hi",
  "Howdy",
  "Greetings",
  "Salutations",
  "Ahoy",
  "Hola",
  "What’s up",
  "Good day",
  "Bonjour",
];

interface User {
  name: string;
  hobby: string;
  subject: string;
}

const Navbar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [user, setUser] = useState<User>({
    name: "",
    hobby: "",
    subject: "",
  });
  const { theme, toggleTheme } = useTheme();

  // Fetch user details from localStorage
  useEffect(() => {
    const userDetails = localStorage.getItem("user-info");
    userDetails && setUser(JSON.parse(userDetails));
  }, []);

  const Randomize = () => {
    setRandomIndex(Math.floor(Math.random() * greetings.length));
  };

  useEffect(() => {
    if (seconds === 0) {
      Randomize();
      setSeconds(60);
    }
    const interval = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <nav
      className={`w-full fixed top-0 left-0 z-50 flex justify-between items-center px-4 py-3 shadow-md transition-colors duration-300
        backdrop-blur-2xl 
        ${
          theme === "dark"
            ? "bg-gray-900/50 text-white"
            : "bg-white/50 text-gray-900"
        } 
      `}
    >
      {/* Mobile Menu */}
      <MobileNav open={openMenu} onClose={() => setOpenMenu(false)} />

      {/* Greeting */}
      <h1
        className={`text-3xl lg:text-5xl font-black leading-tight bg-clip-text bg-gradient-to-r transition-colors duration-500
          ${
            theme === "dark"
              ? "from-indigo-500 via-purple-600 to-pink-500 text-transparent"
              : "from-indigo-600 via-purple-500 to-teal-500 text-transparent"
          }
        `}
      >
        {`${greetings[randomIndex] || "Hello"} ${user.name.split(" ")[0]}`}
      </h1>

      {/* Menu & Theme Toggle */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className={`p-1 rounded-md transition-colors duration-300
            ${
              theme === "dark"
                ? "bg-white/20 min-w-8 hover:bg-white/30 text-white"
                : "bg-gray-200 min-w-8 hover:bg-gray-300 text-gray-900"
            }
          `}
        >
          {theme === "dark" ? <Sun/> : "🌙"}
        </button>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className={`p-1.5 rounded-md transition-colors duration-300
            ${
              theme === "dark"
                ? "hover:bg-white/20 text-white"
                : "hover:bg-gray-300 text-gray-900"
            }
          `}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
