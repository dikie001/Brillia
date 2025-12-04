import { useTheme } from "@/hooks/useHook";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import PWAInstall from "../PWAInstall";
import logo from "/images/logo.png";
import useSound from "@/hooks/useSound";

const greetings = [
  "Hello",
  "Hi",
  "Howdy",
  "Greetings",
  "Salutations",
  "Ahoy",
  "Hola",
  "What's up",
  "Good day",
  "Bonjour",
];

interface User {
  name: string;
  hobby: string;
  subject: string;
}

interface MainProp {
  currentPage?: string;
}

const Navbar = ({ currentPage }: MainProp) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [navName, setNavName] = useState("");
  const { playSend } = useSound();

  useEffect(() => {
    const rawUserDetails = localStorage.getItem("user-info");
    const userDetails: User = rawUserDetails && JSON.parse(rawUserDetails);
    Randomize();

    const newNavname =
      location === "/"
        ? `${greetings[randomIndex]} ${
            userDetails?.name?.split(" ")[0] || "Learner"
          }`
        : currentPage || "Brillia";

    setNavName(newNavname);
  }, [currentPage, location, randomIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMenu]);

  const Randomize = () =>
    setRandomIndex(Math.floor(Math.random() * greetings.length));

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-white/60 dark:bg-gray-900/60 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu */}
          <MobileNav open={openMenu} onClose={() => setOpenMenu(false)} />

          {/* Logo & Greeting */}
          <div
            onClick={() => {
              playSend();
              navigate("/");
            }}
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            {/* Logo with animation */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0  rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={logo}
                className="relative w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                alt="Brillia Logo"
              />
            </div>

            {/* Greeting Text */}
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight group-hover:from-indigo-500 group-hover:via-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {navName}
              </h1>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* PWA Install */}
            <PWAInstall />

            {/* Theme Toggle - Enhanced Design */}
            <button
              onClick={() => {
                playSend()
                toggleTheme();
              }}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 shadow-inner ${
                theme === "light"
                  ? "bg-gradient-to-r from-amber-200 to-orange-200"
                  : "bg-gradient-to-r from-indigo-900 to-purple-900"
              }`}
              aria-label="Toggle theme"
            >
              {/* Track decorations */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                {theme === "light" ? (
                  <div className="absolute right-2 top-1/2 -translate-y-1/2 w-1 h-1 bg-amber-400 rounded-full opacity-50" />
                ) : (
                  <>
                    <div className="absolute left-2 top-2 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
                    <div className="absolute left-4 top-4 w-0.5 h-0.5 bg-white rounded-full opacity-50" />
                  </>
                )}
              </div>

              {/* Toggle Button */}
              <div
                className={`absolute top-0.5 w-7 h-7 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                  theme === "light"
                    ? "left-0.5 bg-gradient-to-br from-amber-400 to-orange-500"
                    : "left-8.5 bg-gradient-to-br from-indigo-500 to-purple-600"
                }`}
              >
                {theme === "light" ? (
                  <Sun className="w-4 h-4 text-white drop-shadow-sm" />
                ) : (
                  <Moon className="w-4 h-4 text-white drop-shadow-sm" />
                )}
              </div>
            </button>

            {/* Menu Button - Enhanced */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className={`relative p-2.5 rounded-xl transition-all duration-300 group ${
                openMenu
                  ? "bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30"
                  : "bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30"
              }`}
              aria-label="Toggle menu"
            >
              <Menu
                className={`h-5 w-5 transition-all duration-300 ${
                  openMenu
                    ? "text-white rotate-90"
                    : "text-indigo-600 dark:text-indigo-400 group-hover:scale-110"
                }`}
              />
              {!openMenu && (
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animated bottom border on scroll */}
      <div
        className={`h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-300 ${
          isScrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </nav>
  );
};

export default Navbar;
