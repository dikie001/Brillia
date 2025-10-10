import { APP_VERSION } from "@/constants";
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
  User,
  ChevronDown,
  ChevronUp,
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

interface MenuItem {
  label: string;
  icon: React.ComponentType<any>;
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

  useEffect(() => {
    const userDetails = localStorage.getItem("user-info");
    userDetails && setUser(JSON.parse(userDetails));
  }, []);

  const isGroupActive = (items: MenuItem[]) =>
    items.some((item) => location.pathname === item.to);

  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 h-screen backdrop-blur-sm z-40"
      />

      <div className="fixed top-0 right-0 w-full sm:w-80 lg:w-96 h-screen flex flex-col bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-hidden">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 dark:from-indigo-600 dark:to-indigo-800 p-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-black/20 cursor-pointer transition"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          <div className="flex items-center gap-2">
            <img
              src="/images/logo.png"
              className="h-10 cursor-pointer"
              onClick={() => navigate("/")}
              alt="logo"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">
                {user.name || "Brillia"}
              </h2>
              <p className="text-sm text-indigo-100">Explore & Learn</p>
            </div>
          </div>
        </div>

        {/* Scrollable Menu */}
        <nav className="flex-1  px-4 py-3 space-y-2 overflow-y-auto bg-gray-50 dark:bg-gray-900/50">
          {/* Main */}
          {mainItems.map(({ label, icon: Icon, to }) => {
            const active = location.pathname === to;
            return (
              <button
                key={label}
                onClick={() => {
                  navigate(to);
                  onClose();
                }}
                className={`flex items-center cursor-pointer gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium transition
                ${
                  active
                    ? "bg-indigo-800/30 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800/80"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    active
                      ? "text-white"
                      : "text-indigo-500 dark:text-indigo-400"
                  }`}
                />
                {label}
              </button>
            );
          })}

          {/* Activities */}
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

          {/* Support */}
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

          {/* Settings */}
          {settingsItems.map(({ label, icon: Icon, to }) => {
            const active = location.pathname === to;
            return (
              <button
                key={label}
                onClick={() => {
                  navigate(to);
                  onClose();
                }}
                className={`flex items-center cursor-pointer gap-3 w-full py-3 px-4 rounded-xl text-sm font-medium transition
                ${
                  active
                    ? "bg-indigo-800/20 text-white shadow-md"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-800/80"
                }`}
              >
                <Icon
                  className={`w-4 h-4 ${
                    active
                      ? "text-white"
                      : "text-indigo-500 dark:text-indigo-400"
                  }`}
                />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 px-4 py-3 text-xs flex justify-between text-gray-500 dark:text-gray-400">
          <span>© {new Date().getFullYear()} dikie.dev</span>
          <span className="font-mono">v{APP_VERSION}</span>
        </footer>
      </div>
    </>
  );
}

type GroupProps = {
  title: string;
  icon: any;
  open: boolean;
  toggle: () => void;
  items: MenuItem[];
  isGroupActive: (items: MenuItem[]) => boolean;
  navigate: (path: string) => void;
  onClose: () => void;
  location: any;
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

  return (
    <div className="space-y-1">
      <button
        onClick={toggle}
        className={`flex items-center cursor-pointer justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition
        ${
          activeGroup
            ? "bg-indigo-100  dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300"
            : "bg-white  dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/80"
        }`}
      >
        <div className="flex items-center gap-3">
          <IconGroup className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          <span>{title}</span>
        </div>
        {open ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {open && (
        <div className="ml-3 mt-1 border-l-2 border-indigo-200 dark:border-indigo-800 pl-2 space-y-1 transition-all">
          {items.map(({ label, icon: Icon, to }) => {
            const active = location.pathname === to;
            return (
              <button
                key={label}
                onClick={() => {
                  navigate(to);
                  onClose();
                }}
                className={`flex items-center cursor-pointer gap-2 w-full px-3 py-2 rounded-lg text-xs transition
                ${
                  active
                    ? "bg-indigo-800/20 ring ring-indigo-800 text-white font-medium"
                    : "text-gray-600 dark:text-gray-400 hover:bg-indigo-50 dark:hover:bg-gray-800 hover:text-indigo-600 dark:hover:text-indigo-400"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
