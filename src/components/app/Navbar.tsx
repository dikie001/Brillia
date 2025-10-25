import { useTheme } from "@/hooks/useHook";
import { Menu, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";
import PWAInstall from "../PWAInstall";
import logo from "/images/logo.png";

const greetings = [
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
interface MainProp {
  currentPage?: string;
}

const Navbar = ({ currentPage }: MainProp) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();
  const location = window.location.pathname;
  const [navName, setNavName] = useState("");

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

  const Randomize = () =>
    setRandomIndex(Math.floor(Math.random() * greetings.length));

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-4 py-4 shadow-lg  backdrop-blur-2xl transition-colors duration-300 ">
      {/* Mobile Menu */}
      <MobileNav open={openMenu} onClose={() => setOpenMenu(false)} />
      {/* Greeting / Title */}
      <div
        onClick={() => navigate("/")}
        className="cursor-pointer text-2xl flex gap-2 lg:text-3xl font-extrabold  bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent leading-tight"
      >
        {" "}
        <img src={logo} className="h-10" alt="" />
        {navName}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <PWAInstall />

        {/* Theme button */}
        <button
          onClick={toggleTheme}
          className="relative w-14 h-7 cursor-pointer rounded-full bg-gray-200 dark:bg-gray-700 shadow-inner transition-colors duration-300"
          aria-label="Toggle theme"
        >
          <div
            className={`absolute top-0.5  w-6 h-6 rounded-full  bg-white dark:bg-indigo-600  shadow-md flex items-center justify-center transition-all duration-300 ease-in-out ${
              theme === "light" ? "left-1" : "left-7"
            }`}
          >
            {theme === "light" ? (
              <Sun className="w-3.5 h-3.5 text-amber-500" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-indigo-500 dark:text-white" />
            )}
          </div>
        </button>

        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="p-2 rounded-lg hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors"
        >
          <Menu className="h-5 w-5 text-indigo-500 dark:text-indigo-300" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
