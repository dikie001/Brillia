import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/hooks/useHook";
import EditUserInfoModal from "@/modals/EditUserInfoModal";
import {
  Bell,
  Edit2,
  Info,
  Lock,
  Moon,
  RotateCcw,
  Settings as SettingsIcon,
  Shield,
  Sun,
  Trash2,
  Unlock,
  Volume2
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [subject, setSubject] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);

  // Load settings
  useEffect(() => {
    const savedSounds = localStorage.getItem("soundsEnabled") === "true";
    setSoundsEnabled(savedSounds);

    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      const parsed = JSON.parse(userInfo);
      setName(parsed.name || "");
      setHobby(parsed.hobby || "");
      setSubject(parsed.subject || "");
    }
  }, []);

  const handleSoundToggle = () => {
    const newSounds = !soundsEnabled;
    setSoundsEnabled(newSounds);
    localStorage.setItem("soundsEnabled", newSounds.toString());
    toast.success(`Sounds ${newSounds ? "enabled" : "disabled"}`);
  };

  const handleSaveFromModal = (data: {
    name: string;
    hobby: string;
    subject: string;
  }) => {
    setName(data.name);
    setHobby(data.hobby);
    setSubject(data.subject);
  };

  const handleAdminUnlock = () => {
    if (adminPassword === "admin123") {
      setIsAdminUnlocked(true);
      toast.success("Admin access granted");
    } else {
      toast.error("Incorrect password");
    }
    setAdminPassword("");
  };

  const handleResetToDefaults = () => {
    setSoundsEnabled(true);
    localStorage.setItem("soundsEnabled", "true");
    toast.success("Settings reset");
  };

  const handleClearAllData = () => {
    if (window.confirm("Delete all data? This cannot be undone.")) {
      localStorage.clear();
      setSoundsEnabled(true);
      setName("");
      setHobby("");
      setSubject("");
      setIsAdminUnlocked(false);
      toast.success("All data cleared");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/50 to-purple-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white transition-colors duration-500 relative overflow-hidden font-sans">
      {/* Animated Background Elements (Preserved) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <Navbar currentPage="Settings" />

      <div className="relative z-10 container mx-auto px-4 py-8 pt-24">
        {/* Header Section */}
        <div className="mb-10 text-center lg:text-left">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent inline-flex items-center gap-3">
            <SettingsIcon className="w-8 h-8 text-purple-600" />
            Settings
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2 font-medium">
            Manage your preferences and account details
          </p>
        </div>

        {/* Responsive Layout: Grid on Large Screens */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ASIDE: User Profile & Quick Stats (Sticky on Desktop) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28 animate-in fade-in slide-in-from-left-4 duration-700">
            {/* Profile Card */}
            <Card className="overflow-hidden border-white/40 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
              <div className="h-32 bg-gradient-to-r -mt-6 from-indigo-600 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <CardContent className="relative pt-0 px-6 pb-6">
                <div className="flex justify-between items-end -mt-12 mb-4">
                  <div className="h-24 w-24 rounded-2xl bg-white dark:bg-gray-800 p-1.5 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center overflow-hidden">
                      <img
                        src="/images/icon.png"
                        alt="avatar"
                        className="h-full w-full object-cover rounded-xl"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setIsEditModalOpen(true)}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-indigo-100 hover:text-indigo-600 transition-colors shadow-sm"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {name || "Guest User"}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {hobby || "Learning enthusiast"}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {subject && (
                      <span className="px-3 py-1 bg-purple-100/80 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 rounded-lg text-xs font-semibold uppercase tracking-wider">
                        {subject}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-indigo-100/80 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-semibold uppercase tracking-wider">
                      Free Plan
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* App Info Mini-Card */}
            <Card className="border-white/40 dark:border-gray-700/50 bg-white/40 dark:bg-gray-800/30 backdrop-blur-md">
              <CardContent className="p-4 flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl shadow-lg shadow-green-500/20 text-white">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-gray-200">
                    Brillia v1.0
                  </p>
                  <p className="text-xs text-gray-500">Up to date</p>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="lg:col-span-8 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Appearance Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 ml-1">
                Appearance & Sounds
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Theme Toggle */}
                <Card
                  onClick={toggleTheme}
                  className="cursor-pointer border-white/40 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all hover:scale-[1.02] hover:shadow-lg group"
                >
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl shadow-inner ${
                          theme === "light"
                            ? "bg-amber-100 text-amber-600"
                            : "bg-indigo-950 text-indigo-400"
                        }`}
                      >
                        {theme === "light" ? (
                          <Sun className="w-6 h-6" />
                        ) : (
                          <Moon className="w-6 h-6" />
                        )}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Theme
                        </p>
                        <p className="text-xs text-gray-500">
                          {theme === "light" ? "Light Mode" : "Dark Mode"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Sound Toggle */}
                <Card
                  onClick={handleSoundToggle}
                  className="cursor-pointer border-white/40 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md hover:bg-white/80 dark:hover:bg-gray-800/60 transition-all hover:scale-[1.02] hover:shadow-lg group"
                >
                  <CardContent className="p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-xl shadow-inner ${
                          soundsEnabled
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-200 text-gray-500"
                        }`}
                      >
                        <Volume2 className="w-6 h-6" />
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          Sounds
                        </p>
                        <p className="text-xs text-gray-500">
                          {soundsEnabled ? "On" : "Off"}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        soundsEnabled
                          ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
                          : "bg-gray-300"
                      }`}
                    />
                  </CardContent>
                </Card>
              </div>

              {/* Notifications */}
              <Card className="border-white/40 dark:border-gray-700/50 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md opacity-80">
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600">
                      <Bell className="w-5 h-5" />
                    </div>
                    <span className="font-medium">Notifications</span>
                  </div>
                  <span className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-gray-500">
                    Coming Soon
                  </span>
                </CardContent>
              </Card>
            </div>

            {/* Danger Zone */}
            <div className="space-y-4 pt-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 ml-1 flex items-center gap-2">
                <Shield className="w-5 h-5 text-red-500" />
                Danger Zone
              </h3>

              {!isAdminUnlocked ? (
                <Card className="border-red-200/50 dark:border-red-900/30 bg-gradient-to-r from-red-50/50 to-orange-50/50 dark:from-red-950/20 dark:to-orange-950/20 backdrop-blur-md">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center">
                      <div className="flex-1 w-full">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                          <Lock className="w-4 h-4" /> Locked Settings
                        </h4>
                        <div className="flex gap-2">
                          <input
                            type="password"
                            placeholder="Enter Admin Password"
                            className="flex-1 px-4 py-2 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500/50 text-sm"
                            value={adminPassword}
                            onChange={(e) => setAdminPassword(e.target.value)}
                            onKeyDown={(e) =>
                              e.key === "Enter" && handleAdminUnlock()
                            }
                          />
                          <button
                            onClick={handleAdminUnlock}
                            className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:shadow-lg hover:shadow-red-500/20 transition-all font-medium text-sm"
                          >
                            Unlock
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-green-200/50 dark:border-green-900/30 bg-white/60 dark:bg-gray-800/40 backdrop-blur-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-green-600 flex items-center gap-2">
                      <Unlock className="w-4 h-4" /> Admin Access Granted
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      onClick={handleClearAllData}
                      className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-red-300 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" /> Clear All Data
                    </button>
                    <button
                      onClick={handleResetToDefaults}
                      className="flex items-center justify-center gap-2 p-4 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" /> Reset Defaults
                    </button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <EditUserInfoModal
          currentData={{ name, hobby, subject }}
          onSave={handleSaveFromModal}
          onClose={() => setIsEditModalOpen(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default Settings;
