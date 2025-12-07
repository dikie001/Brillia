/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Bell,
    Database,
    Globe,
    HardDrive,
    Lock,
    RefreshCw,
    Save,
    Settings,
    Shield,
    Smartphone,
    Timer,
    Trash2
} from "lucide-react";
import { useEffect, useState } from "react";
import AdminNavbar from "./layout/Navbar";

// --- TYPES ---
interface AppSettings {
  siteName: string;
  supportEmail: string;
  maintenanceMode: boolean;
  allowRegistration: boolean;
  defaultTimeLimit: number; // in minutes
  passingScore: number; // percentage
  enableEmailNotifications: boolean;
  autoBackup: boolean;
}

// --- TOGGLE SWITCH COMPONENT ---
const Toggle = ({
  checked,
  onChange,
  label,
  description,
  danger = false,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
  label: string;
  description?: string;
  danger?: boolean;
}) => (
  <div className="flex items-center justify-between py-4">
    <div className="flex flex-col">
      <span className={`text-sm font-semibold ${danger ? "text-red-600 dark:text-red-400" : "text-gray-900 dark:text-gray-100"}`}>
        {label}
      </span>
      {description && <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{description}</span>}
    </div>
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-600 focus-visible:ring-offset-2 ${
        checked
          ? danger
            ? "bg-red-500"
            : "bg-indigo-600"
          : "bg-gray-200 dark:bg-gray-700"
      }`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
          checked ? "translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  </div>
);

// --- MAIN COMPONENT ---
const AdminSettings = () => {
  const [activeTab, setActiveTab] = useState<"general" | "quiz" | "data" | "security">("general");
  const [saving, setSaving] = useState(false);
  const [cacheSize, setCacheSize] = useState<string>("0 KB");

  // State for form values
  const [settings, setSettings] = useState<AppSettings>({
    siteName: "EduQuiz Portal",
    supportEmail: "support@eduquiz.com",
    maintenanceMode: false,
    allowRegistration: true,
    defaultTimeLimit: 30,
    passingScore: 70,
    enableEmailNotifications: true,
    autoBackup: false,
  });

  // Calculate Cache Size on Load
  useEffect(() => {
    const calculateStorage = () => {
      let _lsTotal = 0,
        _xLen,
        _x;
      for (_x in localStorage) {
        if (!Object.prototype.hasOwnProperty.call(localStorage, _x)) {
          continue;
        }
        _xLen = (localStorage[_x].length + _x.length) * 2;
        _lsTotal += _xLen;
      }
      setCacheSize((_lsTotal / 1024).toFixed(2) + " KB");
    };
    calculateStorage();
  }, []);

  const handleSave = () => {
    setSaving(true);
    // Simulate API call to Firebase
    setTimeout(() => {
      setSaving(false);
      alert("Settings saved successfully!");
      // Here you would typically perform: await setDoc(doc(db, "settings", "global"), settings);
    }, 1000);
  };

  const handleClearCache = () => {
    if (window.confirm("This will clear the User Data cache. Data will be re-fetched from the database on the next visit.")) {
      localStorage.removeItem("ADMIN_USERS_CACHE");
      setCacheSize("0.00 KB");
      alert("Local cache cleared.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <AdminNavbar />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Settings</h1>
            <p className="text-gray-500 dark:text-gray-400">Manage global configurations and preferences.</p>
          </div>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl shadow-lg shadow-indigo-200 dark:shadow-indigo-900/20 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {saving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Tabs Navigation */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-6 no-scrollbar">
          {[
            { id: "general", label: "General", icon: Globe },
            { id: "quiz", label: "Quiz Defaults", icon: Timer },
            { id: "data", label: "Data & Storage", icon: Database },
            { id: "security", label: "Security", icon: Shield },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- CONTENT AREA --- */}
        <div className="space-y-6">
          
          {/* TAB: GENERAL */}
          {activeTab === "general" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-500" /> App Information
                </h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Application Name</label>
                    <input
                      type="text"
                      value={settings.siteName}
                      onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Support Email</label>
                    <input
                      type="email"
                      value={settings.supportEmail}
                      onChange={(e) => setSettings({ ...settings, supportEmail: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Settings className="w-5 h-5 text-indigo-500" /> System Controls
                </h2>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  <Toggle
                    label="Allow New Registrations"
                    description="If disabled, new users cannot sign up."
                    checked={settings.allowRegistration}
                    onChange={(val) => setSettings({ ...settings, allowRegistration: val })}
                  />
                  <Toggle
                    label="Maintenance Mode"
                    description="Disable access for all non-admin users."
                    checked={settings.maintenanceMode}
                    onChange={(val) => setSettings({ ...settings, maintenanceMode: val })}
                    danger
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: QUIZ DEFAULTS */}
          {activeTab === "quiz" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Timer className="w-5 h-5 text-pink-500" /> Global Quiz Configuration
              </h2>
              
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Default Time Limit (Minutes)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={settings.defaultTimeLimit}
                      onChange={(e) => setSettings({ ...settings, defaultTimeLimit: parseInt(e.target.value) })}
                      className="w-full pl-4 pr-12 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-indigo-500 focus:outline-none dark:text-white"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-gray-400">min</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Applied to new quizzes created without a specific timer.</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Passing Score (%)</label>
                  <div className="relative">
                     <input
                      type="range"
                      min="1"
                      max="100"
                      value={settings.passingScore}
                      onChange={(e) => setSettings({ ...settings, passingScore: parseInt(e.target.value) })}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 accent-indigo-600"
                    />
                    <div className="flex justify-between mt-2">
                        <span className="text-xs text-gray-500">0%</span>
                        <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">{settings.passingScore}%</span>
                        <span className="text-xs text-gray-500">100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: DATA & STORAGE */}
          {activeTab === "data" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <HardDrive className="w-5 h-5 text-amber-500" /> Local Storage Management
                </h2>
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-4 mb-4 sm:mb-0">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg">
                      <Database className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Admin Users Cache</p>
                      <p className="text-xs text-gray-500">Current size: {cacheSize}</p>
                    </div>
                  </div>
                  <button 
                    onClick={handleClearCache}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 bg-white dark:bg-gray-800 border border-red-200 dark:border-red-900/30 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" /> Clear Cache
                  </button>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                   <Bell className="w-5 h-5 text-emerald-500" /> Notifications & Backups
                </h2>
                 <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  <Toggle
                    label="Email Notifications"
                    description="Receive alerts when new users register."
                    checked={settings.enableEmailNotifications}
                    onChange={(val) => setSettings({ ...settings, enableEmailNotifications: val })}
                  />
                  <Toggle
                    label="Automatic Backups"
                    description="Backup database to storage every 24 hours."
                    checked={settings.autoBackup}
                    onChange={(val) => setSettings({ ...settings, autoBackup: val })}
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB: SECURITY */}
          {activeTab === "security" && (
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" /> Security Controls
              </h2>

              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-800/30 flex items-start gap-4">
                    <Lock className="w-5 h-5 text-indigo-600 mt-1" />
                    <div>
                        <h3 className="font-semibold text-indigo-900 dark:text-indigo-100">Admin Access Level</h3>
                        <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">You are currently logged in as a Super Admin. You have full access to modify all settings.</p>
                    </div>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
                    <h3 className="text-sm font-bold uppercase text-gray-500 mb-4">Danger Zone</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 border border-red-200 dark:border-red-900/30 rounded-xl bg-red-50/50 dark:bg-red-900/10">
                        <div>
                            <p className="font-semibold text-red-700 dark:text-red-400">Reset All User Passwords</p>
                            <p className="text-xs text-red-600/70 dark:text-red-400/70">This will force all users to reset their password on next login.</p>
                        </div>
                        <button 
                            onClick={() => alert("This is a demo action.")}
                            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors whitespace-nowrap"
                        >
                            Reset Passwords
                        </button>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-4 p-4 border border-gray-200 dark:border-gray-700 rounded-xl">
                         <div className="flex items-center gap-3">
                             <Smartphone className="w-5 h-5 text-gray-500" />
                             <div>
                                <p className="font-semibold text-gray-900 dark:text-white">Force Logout All Devices</p>
                                <p className="text-xs text-gray-500">Sign out all sessions except this one.</p>
                             </div>
                         </div>
                         <button className="px-4 py-2 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium rounded-lg transition-colors whitespace-nowrap">
                            Revoke Sessions
                         </button>
                    </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminSettings;