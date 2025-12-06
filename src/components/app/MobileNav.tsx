import { APP_VERSION } from "@/constants";
import useSound from "@/hooks/useSound";
import {
  Book,
  Home,
  Info,
  Shield,
  MessageSquare,
  Newspaper,
  Puzzle,
  Quote,
  Settings,
  Sparkles,
  Wand,
  X,
  ChevronDown,
  type LucideIcon,
  Laptop2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, type Location } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

interface User {
  name: string;
  hobby: string;
  subject: string;
}

interface MenuItem {
  label: string;
  icon: LucideIcon;
  to: string;
}

const mainItems: MenuItem[] = [{ label: "Home", icon: Home, to: "/" }];

const activitiesItems: MenuItem[] = [
  { label: "Brain Teasers", icon: Puzzle, to: "/brain-teasers" },
  { label: "Mini Stories", icon: Book, to: "/mini-stories" },
  { label: "Quiz Quest", icon: Sparkles, to: "/quiz-quest" },
  { label: "Wisdom Nuggets", icon: Quote, to: "/wisdom-nuggets" },
  { label: "Tongue Twisters", icon: Wand, to: "/tongue-twisters" },
  { label: "Amazing Facts", icon: Newspaper, to: "/amazing-facts" },
];

const supportItems: MenuItem[] = [
  { label: "Contact Developer", icon: MessageSquare, to: "/contact-developer" },
  { label: "About", icon: Shield, to: "/about" },
  { label: "Help", icon: Info, to: "/help" },
];

const settingsItems: MenuItem[] = [
  { label: "Settings", icon: Settings, to: "/settings" },
];

export default function MobileNav({ open, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState<User>({ name: "", hobby: "", subject: "" });
  const [activitiesOpen, setActivitiesOpen] = useState(true);
  const [supportOpen, setSupportOpen] = useState(false);
  const [count, setCount] = useState(0);
  const { playSend } = useSound();

  useEffect(() => {
    const userDetails = localStorage.getItem("user-info");
    if (userDetails) setUser(JSON.parse(userDetails));
  }, []);

  const isGroupActive = (items: MenuItem[]) =>
    items.some((item) => location.pathname === item.to);

  if (!open) return null;

  return (
    <>
      {/* Enhanced Backdrop */}
      <div
        onClick={() => {
          playSend();
          onClose();
        }}
        className="fixed inset-0 h-screen bg-black/40 cursor-pointer backdrop-blur-sm z-40 animate-in fade-in duration-200"
      />

      {/* Modern Sidebar */}
      <div className="fixed top-0 right-0 w-80 cursor-default sm:w-96 h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 shadow-2xl z-50 animate-in slide-in-from-right duration-300">
        {/* Beautiful Header */}
        <div className="relative p-6 pb-8">
          <button
            onClick={() => {
              playSend();
              onClose();
            }}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-200 hover:rotate-90 group"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-200 transition-transform" />
          </button>

          {/* User Profile Card */}
          <div className="bg-gradient-to-br from-indigo-500 via-purple-900 to-black/80 rounded-2xl p-5 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/30  hover:scale-105 transition-transform"
                onClick={() => {
                  setCount(count + 1);
                  if (count >= 2) {
                    playSend();
                    navigate("/admin-auth");
                  }
                }}
              >
                <img
                  src="/images/logo.png"
                  className="w-8 h-8 rounded-full object-cover"
                  alt="logo"
                />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {user.name || "Brillia"}
                </h2>
                <p className="text-sm text-white/90 font-medium">
                  Explore & Learn
                </p>
              </div>
            </div>
            {user.hobby && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-xs text-white/80">
                  Hobby:{" "}
                  <span className="text-white font-semibold">{user.hobby}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Scrollable Menu */}
        <nav className="flex-1 px-4 pb-4 space-y-2 overflow-y-auto custom-scrollbar">
          {/* Main Navigation */}
          <div className="space-y-1.5">
            {mainItems.map(({ label, icon: Icon, to }) => {
              const active = location.pathname === to;
              return (
                <button
                  key={label}
                  onClick={() => {
                    playSend();
                    navigate(to);
                    onClose();
                  }}
                  className={`group flex items-center gap-3 cursor-pointer w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-indigo-900 to-purple-900 text-white shadow-lg shadow-indigo-500/30 scale-[1.02]"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:scale-[1.01] hover:shadow-md"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                      active
                        ? "text-white"
                        : "text-indigo-500 dark:text-indigo-400"
                    }`}
                  />
                  <span className="tracking-wide">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Modern Divider */}
          <div className="relative py-3">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          {/* Activities Group */}
          <MenuGroup
            title="Activities"
            icon={Sparkles}
            open={activitiesOpen}
            toggle={() => setActivitiesOpen(!activitiesOpen)}
            items={activitiesItems}
            isGroupActive={isGroupActive}
            navigate={navigate}
            onClose={onClose}
            location={location}
          />

          {/* Support Group */}
          <MenuGroup
            title="Support"
            icon={Info}
            open={supportOpen}
            toggle={() => setSupportOpen(!supportOpen)}
            items={supportItems}
            isGroupActive={isGroupActive}
            navigate={navigate}
            onClose={onClose}
            location={location}
          />

          {/* Divider */}
          <div className="relative py-3">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          {/* Settings */}
          <div className="space-y-1.5">
            {settingsItems.map(({ label, icon: Icon, to }) => {
              const active = location.pathname === to;
              return (
                <button
                  key={label}
                  onClick={() => {
                    playSend();
                    navigate(to);
                    onClose();
                  }}
                  className={`group flex items-center gap-3 w-full px-4 py-3 cursor-pointer rounded-xl text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/30"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:shadow-md"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 group-hover:rotate-12 ${
                      active
                        ? "text-white"
                        : "text-indigo-500 dark:text-indigo-400"
                    }`}
                  />
                  <span className="tracking-wide">{label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Enhanced Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md px-6 py-4">
          <div className="flex items-center justify-between text-xs">
            <div className=" font-xs  flex sm:flex-row gap-2 justify-center items-center text-center">
              <p className="text-gray-400 text-sm">
                Brillia -
                <span className="text-green-500 dark:text-green-400 underline font-medium">
                  <a
                    href="https://dikie.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    dikie.dev
                  </a>
                </span>
              </p>
              <Laptop2 className="text-green-500 dark:text-green-400 w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="px-2.5 py-1 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 text-indigo-700 dark:text-indigo-400 rounded-lg font-mono font-medium border border-indigo-200 dark:border-gray-700">
              v{APP_VERSION}
            </div>
          </div>
        </footer>
      </div>

      {/* Custom Scrollbar Styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(99, 102, 241, 0.5);
        }
      `}</style>
    </>
  );
}

type GroupProps = {
  title: string;
  icon: LucideIcon;
  open: boolean;
  toggle: () => void;
  items: MenuItem[];
  isGroupActive: (items: MenuItem[]) => boolean;
  navigate: (path: string) => void;
  onClose: () => void;
  location: Location;
};

function MenuGroup({
  title,
  icon: IconGroup,
  open,
  toggle,
  items,
  isGroupActive,
  navigate,
  onClose,
  location,
}: GroupProps) {
  const activeGroup = isGroupActive(items);
  const { playSend } = useSound();

  return (
    <div className="space-y-1.5">
      <button
        onClick={toggle}
        className={`group flex items-center justify-between w-full cursor-pointer px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          activeGroup
            ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 shadow-sm ring-1 ring-indigo-200 dark:ring-indigo-800"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/80"
        }`}
      >
        <div className="flex items-center gap-3">
          <IconGroup
            className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 ${
              activeGroup
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-gray-500 dark:text-gray-400"
            }`}
          />
          <span className="tracking-wide">{title}</span>
        </div>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {open && (
        <div className="ml-2 pl-4 border-l-2 border-indigo-200 dark:border-indigo-800/50 space-y-1 animate-in slide-in-from-top-2 duration-200">
          {items.map(({ label, icon: Icon, to }) => {
            const active = location.pathname === to;
            return (
              <button
                key={label}
                onClick={() => {
                  playSend();
                  navigate(to);
                  onClose();
                }}
                className={`group flex items-center gap-3 cursor-pointer w-full px-3 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium shadow-md shadow-indigo-500/20 scale-[1.02]"
                    : "text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400 hover:translate-x-1"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                    active ? "text-white" : ""
                  }`}
                />
                <span className="tracking-wide">{label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
