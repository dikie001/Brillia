import { APP_VERSION } from "@/constants";
import useSound from "@/hooks/useSound";
import {
    Bell,
    ChevronDown,
    FileText,
    Laptop2,
    LayoutDashboard,
    LogOut,
    MessageSquare,
    Settings,
    ShieldCheck,
    Users,
    X,
    type LucideIcon
} from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, type Location } from "react-router-dom";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

interface AdminProfile {
  name: string;
  role: string;
}

interface MenuItem {
  label: string;
  icon: LucideIcon;
  to: string;
}

// --- MENU CONFIGURATION ---
const mainItems: MenuItem[] = [
  { label: "Dashboard", icon: LayoutDashboard, to: "/admin" },
];

const managementItems: MenuItem[] = [
  { label: "Students", icon: Users, to: "/admin/users" },
  { label: "Messages", icon: MessageSquare, to: "/admin/messages" },
  { label: "Reports", icon: FileText, to: "/admin/reports" },
];

const systemItems: MenuItem[] = [
  { label: "Settings", icon: Settings, to: "/admin/settings" },
  { label: "Notifications", icon: Bell, to: "/admin/notifications" },
];

export default function AdminMenu({ open, onClose }: MobileMenuProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [admin, setAdmin] = useState<AdminProfile>({
    name: "Admin User",
    role: "Super Admin",
  });
  
  // State for collapsible groups
  const [manageOpen, setManageOpen] = useState(true);
  const [systemOpen, setSystemOpen] = useState(true);
  
  const { playSend } = useSound();

  // Load admin info (mock or from localstorage)
  useEffect(() => {
    // In a real app, you might fetch this from a different storage key
    const adminDetails = localStorage.getItem("admin-info");
    if (adminDetails) setAdmin(JSON.parse(adminDetails));
  }, []);

  const handleLogout = () => {
    playSend();
    // Clear admin session logic here
    localStorage.removeItem("admin-session"); 
    navigate("/"); // Redirect to home or login
    onClose();
  };

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

      {/* Sidebar Container */}
      <div className="fixed top-0 right-0 w-80 cursor-default sm:w-96 h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-950 shadow-2xl z-50 animate-in slide-in-from-right duration-300">
        
        {/* Header */}
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

          {/* Admin Profile Card */}
          <div className="bg-gradient-to-br from-slate-700 via-slate-800 to-black rounded-2xl p-5 shadow-lg shadow-slate-500/20">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center ring-2 ring-white/20">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white tracking-tight">
                  {admin.name}
                </h2>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-sm text-slate-300 font-medium">
                    {admin.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation */}
        <nav className="flex-1 px-4 pb-4 space-y-2 overflow-y-auto custom-scrollbar">
          
          {/* Main Dashboard Link */}
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
                      ? "bg-gradient-to-r from-slate-800 to-slate-900 text-white shadow-lg shadow-slate-500/30 scale-[1.02]"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/80 hover:scale-[1.01] hover:shadow-md"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-transform duration-200 group-hover:scale-110 ${
                      active ? "text-emerald-400" : "text-slate-500 dark:text-slate-400"
                    }`}
                  />
                  <span className="tracking-wide">{label}</span>
                </button>
              );
            })}
          </div>

          {/* Divider */}
          <div className="relative py-2">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
          </div>

          {/* Management Group */}
          <MenuGroup
            title="Management"
            icon={Users}
            open={manageOpen}
            toggle={() => setManageOpen(!manageOpen)}
            items={managementItems}
            isGroupActive={isGroupActive}
            navigate={navigate}
            onClose={onClose}
            location={location}
            playSend={playSend}
          />

          {/* System Group */}
          <MenuGroup
            title="System"
            icon={Settings}
            open={systemOpen}
            toggle={() => setSystemOpen(!systemOpen)}
            items={systemItems}
            isGroupActive={isGroupActive}
            navigate={navigate}
            onClose={onClose}
            location={location}
            playSend={playSend}
          />

          {/* Logout Button */}
          <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-800">
            <button
              onClick={handleLogout}
              className="group flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 transition-all duration-200"
            >
              <LogOut className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-1" />
              <span className="tracking-wide">Log Out</span>
            </button>
          </div>
        </nav>

        {/* Footer */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md px-6 py-4">
          <div className="flex items-center justify-between text-xs">
            <div className="flex sm:flex-row gap-2 justify-center items-center">
              <p className="text-gray-400 text-sm font-medium">
                Admin Portal
              </p>
              <Laptop2 className="text-slate-400 w-4 h-4" />
            </div>
            <div className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-lg font-mono font-medium border border-slate-200 dark:border-slate-700">
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
          background: rgba(100, 116, 139, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.5);
        }
      `}</style>
    </>
  );
}

// --- REUSABLE GROUP COMPONENT ---
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
  playSend: () => void;
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
  playSend,
}: GroupProps) {
  const activeGroup = isGroupActive(items);

  return (
    <div className="space-y-1.5">
      <button
        onClick={() => {
          playSend();
          toggle();
        }}
        className={`group flex items-center justify-between w-full cursor-pointer px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
          activeGroup
            ? "bg-slate-50 dark:bg-slate-900/20 text-slate-700 dark:text-slate-300 shadow-sm ring-1 ring-slate-200 dark:ring-slate-800"
            : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800/80"
        }`}
      >
        <div className="flex items-center gap-3">
          <IconGroup
            className={`w-5 h-5 transition-all duration-200 group-hover:scale-110 ${
              activeGroup
                ? "text-slate-600 dark:text-slate-400"
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
        <div className="ml-2 pl-4 border-l-2 border-slate-200 dark:border-slate-800/50 space-y-1 animate-in slide-in-from-top-2 duration-200">
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
                    ? "bg-gradient-to-r from-slate-600 to-slate-700 text-white font-medium shadow-md shadow-slate-500/20 scale-[1.02]"
                    : "text-gray-600 dark:text-gray-400 hover:bg-slate-50 dark:hover:bg-gray-800 hover:text-slate-600 dark:hover:text-slate-400 hover:translate-x-1"
                }`}
              >
                <Icon
                  className={`w-4 h-4 transition-transform duration-200 group-hover:scale-110 ${
                    active ? "text-emerald-400" : ""
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