import PWAInstall from "@/components/PWAInstall";
import { useTheme } from "@/hooks/useHook";
import useSound from "@/hooks/useSound";
import { Menu, Moon, Sun, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminMenu from "./Menu";
import logo from "/images/logo.png";

interface MainProp {
  title?: string;
}

const AdminNavbar = ({ title = "Admin Portal" }: MainProp) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();
  const { playSend } = useSound();

  // Scroll Detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body Scroll Lock when Menu is open
  useEffect(() => {
    if (openMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openMenu]);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-950/90 backdrop-blur-xl shadow-lg border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Admin Mobile Menu */}
          <AdminMenu open={openMenu} onClose={() => setOpenMenu(false)} />

          {/* Logo & Title */}
          <div
            onClick={() => {
              playSend();
              navigate("/admin/dashboard");
            }}
            className="group flex items-center gap-2.5 cursor-pointer"
          >
            {/* Logo with animation */}
            <div className="relative w-10 h-10 flex-shrink-0">
              <div className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              <img
                src={logo}
                className="relative w-full h-full object-contain transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                alt="Brillia Logo"
              />
            </div>

            {/* Admin Title */}
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-slate-700 via-gray-600 to-slate-500 dark:from-white dark:via-gray-200 dark:to-gray-400 bg-clip-text text-transparent leading-tight group-hover:from-indigo-600 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                {title}
              </h1>
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" />
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Quick Dashboard/Live Site Button */}
            <button
              onClick={() => {
                playSend();
                navigate("/admin/users"); 
              }}
              className="relative p-2.5 rounded-xl cursor-pointer transition-all duration-300 group bg-gray-100 dark:bg-gray-800 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
              aria-label="View all users"
              title="View all users"
            >
              <Users className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
            </button>

            {/* Dashboard Home Button (If deep in settings) */}
            {/* <button
              onClick={() => {
                playSend();
                navigate("/admin");
              }}
              className="hidden sm:block relative p-2.5 rounded-xl cursor-pointer transition-all duration-300 group bg-gray-100 dark:bg-gray-800 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50 dark:hover:from-indigo-900/30 dark:hover:to-purple-900/30"
              aria-label="Dashboard"
            >
              <LayoutDashboard className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300" />
            </button> */}

            {/* PWA Install */}
            <PWAInstall />

            {/* Theme Toggle */}
            <button
              onClick={() => {
                playSend();
                toggleTheme();
              }}
              className={`relative w-16 h-8 rounded-full cursor-pointer transition-all duration-300 shadow-inner ${
                theme === "light"
                  ? "bg-gradient-to-r from-amber-200 to-orange-200"
                  : "bg-gradient-to-r from-slate-700 to-gray-800"
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
                    : "left-8.5 bg-gradient-to-br from-slate-500 to-gray-600"
                }`}
              >
                {theme === "light" ? (
                  <Sun className="w-4 h-4 text-white drop-shadow-sm" />
                ) : (
                  <Moon className="w-4 h-4 text-white drop-shadow-sm" />
                )}
              </div>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => {
                playSend();
                setOpenMenu(!openMenu);
              }}
              className={`relative p-2.5 cursor-pointer rounded-xl transition-all duration-300 group ${
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

export default AdminNavbar;
