import { APP_VERSION } from "@/constants";
import useSound from "@/hooks/useSound";
import { cn } from "@/lib/utils";
import type { UpdateStatus } from "@/modals/UpdateAppModal";
import UpdateModal from "@/modals/UpdateAppModal";
import {
  ChevronDown,
  FileText,
  HelpCircle,
  House,
  Info,
  Lightbulb,
  ListTodo,
  MessageSquare,
  Mic,
  RefreshCcw,
  Settings,
  Shield,
  Sparkle,
  X,
  Zap,
  type LucideIcon
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// --- Types ---
interface MenuItem {
  label: string;
  icon: LucideIcon;
  to: string;
}

interface User {
  name: string;
  hobby: string;
  subject: string;
}

// --- Constants ---
const MENUS = {
  MAIN: [{ label: "Home", icon: House, to: "/" }],
  ACTIVITIES: [
    { label: "Quick Challenges", icon: Zap, to: "/quick-challenges" },
    { label: "Flash Stories", icon: FileText, to: "/flash-stories" },
    { label: "Quick Quiz", icon: HelpCircle, to: "/quick-quiz" },
    { label: "Life Gems", icon: Sparkle, to: "/life-gems" },
    { label: "Clear Speech", icon: Mic, to: "/clear-speech" },
    { label: "Fun Facts", icon: Lightbulb, to: "/fun-facts" },
  ],
  SUPPORT: [
    {
      label: "Contact Developer",
      icon: MessageSquare,
      to: "/contact-developer",
    },
    { label: "About", icon: Shield, to: "/about" },
    { label: "Help", icon: Info, to: "/help" },
  ],
  SETTINGS: [{ label: "Settings", icon: Settings, to: "/settings" }],
};

// --- Custom Hooks ---

function useAppUpdate(playSound: () => void) {
  const [showModal, setShowModal] = useState(false);
  const [status, setStatus] = useState<UpdateStatus>("idle");
  const [registration, setRegistration] =
    useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.ready.then(setRegistration);
    }
  }, []);

  const checkForUpdates = useCallback(async () => {
    playSound();
    setShowModal(true);
    setStatus("checking");

    if (!registration) {
      setTimeout(() => setStatus("latest"), 1500);
      return;
    }

    try {
      await registration.update();
      if (registration.waiting) {
        setStatus("available");
      } else if (registration.installing) {
        const worker = registration.installing;
        worker.onstatechange = () => {
          if (worker.state === "installed") setStatus("available");
        };
      } else {
        setStatus("latest");
      }
    } catch (error) {
      console.error("Update check failed", error);
      setStatus("error");
    }
  }, [registration, playSound]);

  const applyUpdate = () => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: "SKIP_WAITING" });
      window.location.reload();
    }
  };

  return { showModal, setShowModal, status, checkForUpdates, applyUpdate };
}

function useUserProfile() {
  const [user, setUser] = useState<User>({ name: "", hobby: "", subject: "" });

  useEffect(() => {
    const data = localStorage.getItem("user-info");
    if (data) setUser(JSON.parse(data));
  }, []);

  return user;
}

// --- Sub-Components ---

const NavHeader = ({
  user,
  onClose,
  playSound,
}: {
  user: User;
  onClose: () => void;
  playSound: () => void;
}) => {
  const navigate = useNavigate();
  const [tapCount, setTapCount] = useState(0);

  const handleLogoClick = () => {
    setTapCount((prev) => prev + 1);
    if (tapCount >= 2) {
      playSound();
      navigate("/admin-auth");
    }
  };

  return (
    <div className="relative flex-shrink-0 bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-900 dark:from-indigo-900 dark:to-slate-950 p-6 shadow-lg">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-400/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <button
        onClick={() => {
          playSound();
          onClose();
        }}
        className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md transition-colors text-white border border-white/10 shadow-sm"
      >
        <X className="w-5 h-5" />
      </button>

      <div className="relative flex items-center gap-4 mt-2">
            <img
            onClick={handleLogoClick}
            src="/images/logo.png"
            alt="Logo"
            className="relative w-16 h-16"
            />
        <div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            {user.name || "Brillia"}
          </h2>
          <span className="inline-flex items-center px-2 py-0.5 mt-1 rounded-full text-xs font-medium bg-indigo-500/30 text-indigo-100 border border-indigo-400/30">
            {user.hobby || "Explorer"}
          </span>
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  item,
  isActive,
  onClick,
}: {
  item: MenuItem;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={cn(
      "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl cursor-pointer font-medium transition-all duration-200 group relative overflow-hidden",
      isActive
        ? "bg-indigo-600 text-white shadow-md shadow-indigo-200 dark:shadow-none"
        : "text-indigo-900 dark:text-indigo-100 hover:bg-indigo-50 dark:hover:bg-indigo-900/30"
    )}
  >
    {isActive && (
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent" />
    )}
    <item.icon
      className={cn(
        "w-5 h-5 flex-shrink-0 transition-colors",
        isActive ? "text-white" : "text-indigo-500 group-hover:text-indigo-600 dark:text-indigo-400"
      )}
    />
    <span className="relative">{item.label}</span>
  </button>
);

const NavGroup = ({
  title,
  icon: Icon,
  items,
  isOpen,
  onToggle,
  onNavigate,
}: {
  title: string;
  icon: LucideIcon;
  items: MenuItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
}) => {
  const location = useLocation();
  const isGroupActive = items.some((item) => location.pathname === item.to);

  return (
    <div className="space-y-3">
      <button
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between px-4 py-3 cursor-pointer rounded-xl transition-all font-semibold border",
          isGroupActive
            ? "bg-indigo-50 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-100 border-indigo-200 dark:border-indigo-800"
            : "bg-white dark:bg-slate-900 text-indigo-900 dark:text-indigo-200 border-transparent hover:bg-indigo-50 dark:hover:bg-slate-800"
        )}
      >
        <div className="flex items-center gap-2.5">
          <div className={cn("p-1.5 rounded-lg", isGroupActive ? "bg-indigo-200/50 dark:bg-indigo-800" : "bg-indigo-50 dark:bg-slate-800")}>
            <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <span className="text-sm">{title}</span>
        </div>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform text-indigo-400",
            isOpen && "rotate-180"
          )}
        />
      </button>

      {isOpen && (
        <div className="grid grid-cols-2 gap-2 animate-in slide-in-from-top-2 duration-200 px-1">
          {items.map((item) => {
            const active = location.pathname === item.to;
            return (
              <button
                key={item.to}
                onClick={() => onNavigate(item.to)}
                className={cn(
                  "flex flex-col items-center justify-center cursor-pointer gap-2 p-3 rounded-2xl transition-all text-center border",
                  active
                    ? "bg-indigo-600 border-indigo-500 text-white shadow-lg shadow-indigo-200 dark:shadow-none"
                    : "bg-indigo-50/50 dark:bg-slate-900 border-indigo-100 dark:border-indigo-900/50 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100 dark:hover:bg-slate-800 hover:border-indigo-200"
                )}
              >
                <div
                  className={cn(
                    "p-2 rounded-xl transition-colors",
                    active
                      ? "bg-white/20 text-white"
                      : "bg-white dark:bg-slate-800 text-indigo-500 dark:text-indigo-400 shadow-sm"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-xs font-semibold leading-tight">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

// --- Main Component ---

export default function MobileNav({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const { playSend } = useSound();
  const user = useUserProfile();

  // State
  const [sectionsOpen, setSectionsOpen] = useState({
    activities: false,
    support: false,
  });
  const updateManager = useAppUpdate(playSend);

  const handleNav = (path: string) => {
    playSend();
    navigate(path);
    onClose();
  };

  const toggleSection = (key: keyof typeof sectionsOpen) => {
    setSectionsOpen((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 h-screen bg-indigo-950/40 cursor-pointer backdrop-blur-sm z-40 animate-in fade-in duration-200"
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white dark:bg-slate-950 z-50 flex flex-col shadow-2xl shadow-indigo-900/20 animate-in slide-in-from-right duration-300 border-l border-indigo-100 dark:border-indigo-900">
        <NavHeader user={user} onClose={onClose} playSound={playSend} />

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 scrollbar-hide bg-gradient-to-b from-white to-indigo-50/30 dark:from-slate-950 dark:to-slate-900">
          <div className="space-y-2">
            {MENUS.MAIN.map((item) => (
              <NavItem
                key={item.to}
                item={item}
                isActive={location.pathname === item.to}
                onClick={() => handleNav(item.to)}
              />
            ))}
          </div>

          <NavGroup
            title="Activities"
            icon={ListTodo}
            items={MENUS.ACTIVITIES}
            isOpen={sectionsOpen.activities}
            onToggle={() => toggleSection("activities")}
            onNavigate={handleNav}
          />

          <NavGroup
            title="Support"
            icon={Shield}
            items={MENUS.SUPPORT}
            isOpen={sectionsOpen.support}
            onToggle={() => toggleSection("support")}
            onNavigate={handleNav}
          />

          <div className="space-y-2 pt-4 border-t border-indigo-100 dark:border-indigo-900/50">
            {MENUS.SETTINGS.map((item) => (
              <NavItem
                key={item.to}
                item={item}
                isActive={location.pathname === item.to}
                onClick={() => handleNav(item.to)}
              />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex-shrink-0 px-4 py-4 bg-indigo-50/50 dark:bg-slate-950 border-t border-indigo-100 dark:border-indigo-900">
          <div className="flex items-center justify-between gap-3">
            <span className="text-xs text-indigo-400 dark:text-indigo-500 font-semibold font-mono">
              v{APP_VERSION}
            </span>
            <button
              onClick={updateManager.checkForUpdates}
              className="flex items-center gap-2 px-4 py-2 rounded-full cursor-pointer bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300 text-xs font-bold shadow-sm hover:shadow-md hover:bg-indigo-50 dark:hover:bg-slate-800 transition-all"
            >
              <RefreshCcw className="w-3.5 h-3.5" />
              <span>Check Update</span>
            </button>
          </div>
        </div>
      </div>

      {updateManager.showModal && (
        <UpdateModal
          status={updateManager.status}
          onClose={() => updateManager.setShowModal(false)}
          onUpdate={updateManager.applyUpdate}
        />
      )}
    </>
  );
}