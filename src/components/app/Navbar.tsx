import { useTheme } from "@/hooks/useHook";
import { Menu, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import { useNavigate } from "react-router-dom";

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
  const [user, setUser] = useState<User>({ name: "", hobby: "", subject: "" });
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const userDetails = localStorage.getItem("user-info");
    userDetails && setUser(JSON.parse(userDetails));
  }, []);

  const Randomize = () =>
    setRandomIndex(Math.floor(Math.random() * greetings.length));

  useEffect(() => {
    if (seconds === 0) {
      Randomize();
      setSeconds(60);
    }
    const interval = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-4 py-3 shadow-md backdrop-blur-2xl transition-colors duration-300 bg-white/50 dark:bg-gray-900/50 text-gray-900 dark:text-white">
      {/* Mobile Menu */}
      <MobileNav open={openMenu} onClose={() => setOpenMenu(false)} />

      {/* Greeting */}
      <h1
        onClick={() => navigate("/")}
        className="text-3xl lg:text-4xl cursor-pointer font-black leading-tight bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-500 dark:from-indigo-500 dark:via-purple-600 dark:to-pink-500 text-transparent transition-colors duration-500"
      >
        {`${greetings[randomIndex] || "Hello"} ${user.name.split(" ")[0]}`}
      </h1>

      {/* Menu & Theme Toggle */}
      <div className="flex items-center gap-3">
        <button
          className="p-1.5  rounded-md bg-gray-200 dark:bg-white/20 hover:bg-gray-300 dark:hover:bg-white/30 transition-colors duration-300"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 light:hidden" />
          ) : (
            <div className="h-5 w-5">🌙</div>
          )}
        </button>

        <button
          className="p-1.5 rounded-md hover:bg-gray-300 dark:hover:bg-white/20 transition-colors duration-300"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
