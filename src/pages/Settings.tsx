import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ADMIN_PASSWORD } from "@/constants";
import { useTheme } from "@/hooks/useHook";
import useSound from "@/hooks/useSound";
import EditUserInfoModal from "@/modals/EditUserInfoModal";
import {
  Bell,
  Check,
  Edit2,
  Lock,
  Moon,
  RotateCcw,
  Settings as SettingsIcon,
  Shield,
  Smartphone,
  Sun,
  Trash2,
  Unlock,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { playSend } = useSound();
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [subject, setSubject] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  const PASSWORD = ADMIN_PASSWORD;
  const navigate = useNavigate();

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

  const handleSaveFromModal = (data: { name: string; hobby: string; subject: string }) => {
    setName(data.name);
    setHobby(data.hobby);
    setSubject(data.subject);
  };

  const handleAdminUnlock = () => {
    if (adminPassword === PASSWORD) {
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
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-gray-950 transition-colors duration-500 font-sans selection:bg-indigo-500/30">
      <Navbar currentPage="Settings" />

      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[20%] w-[30rem] h-[30rem] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[25rem] h-[25rem] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <main className="relative container max-w-6xl mx-auto px-4 py-24 z-10">
        
        {/* Page Header */}
        <div className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white flex items-center gap-3">
              <div className="p-2.5 bg-indigo-600 rounded-2xl text-white shadow-lg shadow-indigo-500/30">
                <SettingsIcon className="w-6 h-6" />
              </div>
              Settings
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400 text-lg">
              Manage your preferences and digital identity.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Profile & Status */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="rounded-3xl border-0 shadow-xl shadow-gray-200/50 dark:shadow-black/20 overflow-hidden bg-white dark:bg-gray-900 group relative">
              
              {/* NEW: Technical Grid Cover Image */}
              <div className="h-32 relative -mt-6 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-indigo-500/20 blur-[60px]" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              <CardContent className="px-6 pb-8 pt-0 relative">
                <div className="flex justify-between items-end -mt-12 mb-5">
                  <div className="relative">
                    <div className="h-24 w-24 rounded-2xl border-4 border-white dark:border-gray-900 bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-sm">
                      <img
                        src="/images/icon.png"
                        alt="Avatar"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {/* Status Indicator */}
                    <div className="absolute bottom-1 -right-1 w-5 h-5 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full" />
                  </div>
                  <button
                    onClick={() => { playSend(); setIsEditModalOpen(true); }}
                    className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-all duration-200"
                    aria-label="Edit Profile"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                    {name || "Guest User"}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 font-medium">
                    {hobby || "Learning enthusiast"}
                  </p>
                </div>

                {subject && (
                   <div className="mt-5 flex gap-2">
                     <span className="inline-flex items-center px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold uppercase tracking-wider border border-indigo-100 dark:border-indigo-900">
                       {subject}
                     </span>
                   </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Status Card */}
            <Card className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600">
                       <Smartphone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">App Version</p>
                      <p className="text-xs text-gray-500">v1.0.2 (Latest)</p>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* RIGHT COLUMN: Settings */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Appearance Section */}
            <section>
              <h3 className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 px-1">
                Experience
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Theme Card */}
                <Card 
                  onClick={toggleTheme}
                  className={`rounded-3xl cursor-pointer transition-all duration-300 border-2 overflow-hidden relative group ${
                    theme === 'light' 
                    ? 'border-indigo-100 hover:border-indigo-300 bg-white' 
                    : 'border-gray-800 hover:border-gray-700 bg-gray-900'
                  }`}
                >
                  <CardContent className="p-6 flex items-center justify-between z-10 relative">
                    <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl ${theme === 'light' ? 'bg-orange-100 text-orange-600' : 'bg-blue-900/30 text-blue-400'}`}>
                          {theme === 'light' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                        </div>
                        <div>
                          <p className="font-bold text-lg">Theme</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
                          </p>
                        </div>
                    </div>
                    {/* Custom Toggle Visual */}
                    <div className={`w-12 h-7 rounded-full p-1 transition-colors ${theme === 'dark' ? 'bg-indigo-600' : 'bg-gray-200'}`}>
                      <div className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`} />
                    </div>
                  </CardContent>
                </Card>

                {/* Sounds Card */}
                <Card 
                  onClick={handleSoundToggle}
                  className={`rounded-3xl cursor-pointer transition-all duration-300 border-2 relative overflow-hidden ${
                    soundsEnabled
                    ? 'border-emerald-100 dark:border-emerald-900/30 bg-white dark:bg-gray-900' 
                    : 'border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50'
                  }`}
                >
                  <CardContent className="p-6 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-2xl transition-colors ${soundsEnabled ? 'bg-emerald-100 text-emerald-600' : 'bg-gray-200 text-gray-500'}`}>
                          {soundsEnabled ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
                        </div>
                        <div>
                          <p className={`font-bold text-lg ${!soundsEnabled && 'text-gray-500'}`}>Sounds</p>
                          <p className="text-sm text-gray-500">
                            {soundsEnabled ? 'Enabled' : 'Muted'}
                          </p>
                        </div>
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${soundsEnabled ? 'bg-emerald-500 text-white scale-100' : 'bg-gray-200 text-transparent scale-90'}`}>
                      <Check className="w-3.5 h-3.5" strokeWidth={4} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Notification Banner */}
              <Card className="mt-4 rounded-3xl border-0 bg-gradient-to-r from-violet-500/10 to-purple-500/10 dark:bg-gray-900">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm text-violet-600">
                    <Bell className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-sm">Notifications</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Custom alerts are coming in v2.0</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Danger Zone Section */}
            <section className="pt-4">
                <h3 className="text-sm font-bold text-red-500 uppercase tracking-wider mb-4 px-1 flex items-center gap-2">
                <Shield className="w-4 h-4" /> Security & Reset
              </h3>

              {!isAdminUnlocked ? (
                <Card className="rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/30">
                  <CardContent className="p-8 text-center md:text-left md:flex md:items-center md:justify-between gap-6">
                    <div className="mb-4 md:mb-0">
                      <h4 className="font-bold text-gray-900 dark:text-white flex items-center justify-center md:justify-start gap-2">
                        <Lock className="w-4 h-4 text-gray-400" /> Admin Restricted
                      </h4>
                      <p className="text-sm text-gray-500 mt-1">Enter password to access reset controls.</p>
                    </div>
                    
                    <div className="flex items-center gap-2 w-full md:w-auto">
                      <input
                        type="password"
                        placeholder="Password..."
                        className="flex-1 md:w-48 px-4 py-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all text-sm"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleAdminUnlock()}
                      />
                      <button
                        onClick={() => { playSend(); handleAdminUnlock(); }}
                        className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium text-sm hover:shadow-lg transition-all active:scale-95"
                      >
                        Unlock
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <Card className="rounded-3xl border-l-4 border-l-red-500 border-y-0 border-r-0 shadow-lg shadow-red-500/5 bg-white dark:bg-gray-900">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-red-600">
                          <Unlock className="w-5 h-5" /> Admin Access Active
                        </CardTitle>
                        <CardDescription>
                          Handle these actions with care. Data loss is permanent.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-0">
                      <button
                        onClick={() => { playSend(); handleResetToDefaults(); }}
                        className="flex items-center justify-center gap-2 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300 font-medium"
                      >
                        <RotateCcw className="w-4 h-4" /> Reset Defaults
                      </button>
                      <button
                        onClick={() => { playSend(); handleClearAllData(); }}
                        className="flex items-center justify-center gap-2 p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 text-red-600 hover:bg-red-100 dark:hover:bg-red-900/50 transition-colors font-medium"
                      >
                        <Trash2 className="w-4 h-4" /> Wipe All Data
                      </button>
                    </CardContent>
                  </Card>
                </div>
              )}
            </section>
          </div>
        </div>
      </main>

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