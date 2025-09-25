import { useTheme } from "@/hooks/useHook";
import { Menu, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileNav from "./MobileNav";

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
  }, []);

  const Randomize = () =>
    setRandomIndex(Math.floor(Math.random() * greetings.length));

  return (
    <nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-4 py-4 shadow-lg  backdrop-blur-2xl transition-colors duration-300 ">
      {/* Mobile Menu */}
      <MobileNav open={openMenu} onClose={() => setOpenMenu(false)} />

      {/* Greeting / Title */}
      <h1
        onClick={() => navigate("/")}
        className="cursor-pointer text-3xl lg:text-4xl font-extrabold  bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-400 bg-clip-text text-transparent leading-tight"
      >
        {navName}
      </h1>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200 dark:bg-indigo-900/40 dark:hover:bg-indigo-800/60 transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5 text-indigo-400" />
          ) : (
            <div className="h-5 w-5">🌙</div>
          )}
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
