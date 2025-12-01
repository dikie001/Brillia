import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTheme } from "@/hooks/useHook";
import EditUserInfoModal from "@/modals/EditUserInfoModal";
import { Bell, Moon, Sun, User, Volume2, ChevronRight, Settings as SettingsIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [subject, setSubject] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSounds = localStorage.getItem("soundsEnabled") === "true";
    setSoundsEnabled(savedSounds);
    const savedNotifications =
      localStorage.getItem("notificationsEnabled") === "true";
    setNotificationsEnabled(savedNotifications);

    const userInfo = localStorage.getItem("user-info");
    if (userInfo) {
      const parsed = JSON.parse(userInfo);
      setName(parsed.name || "");
      setHobby(parsed.hobby || "");
      setSubject(parsed.subject || "");
    }
  }, []);

  // Handle sound toggle
  const handleSoundToggle = () => {
    const newSounds = !soundsEnabled;
    setSoundsEnabled(newSounds);
    if (newSounds) {
      toast.success("Sounds enabled");
    } else {
      toast.info("Sounds disabled");
    }
    localStorage.setItem("soundsEnabled", newSounds.toString());
  };

  // Handle notifications toggle
  const handleNotificationsToggle = () => {
    toast.info("Feature coming soon...");
  };

  // Open edit modal
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  // Close edit modal
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  // Handle save from modal
  const handleSaveFromModal = (data: {
    name: string;
    hobby: string;
    subject: string;
  }) => {
    setName(data.name);
    setHobby(data.hobby);
    setSubject(data.subject);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 dark:text-white transition-colors duration-500 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Navbar currentPage="Settings" />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto space-y-6 mt-20">
          {/* Header */}
          <div className="text-center space-y-3 mb-8 animate-in fade-in duration-700">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 mb-4">
              <SettingsIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Customize your learning experience
            </p>
          </div>

          {/* Settings Cards */}
          <div className="space-y-4 animate-in fade-in duration-1000" style={{ animationDelay: '200ms' }}>
            {/* Theme Settings */}
            <Card className="bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 dark:from-amber-500/10 dark:to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 shadow-md">
                    {theme === "light" ? (
                      <Sun className="w-5 h-5 text-white" />
                    ) : (
                      <Moon className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Theme</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {theme === "light" ? "Light mode" : "Dark mode"}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Select theme mode</span>
                  <button
                    onClick={toggleTheme}
                    className={`relative w-16 h-8 rounded-full transition-all duration-300 shadow-inner ${
                      theme === "light"
                        ? "bg-gradient-to-r from-amber-200 to-orange-200"
                        : "bg-gradient-to-r from-indigo-900 to-purple-900"
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

                    <div
                      className={`absolute top-0.5 w-7 h-7 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
                        theme === "light"
                          ? "left-0.5 bg-gradient-to-br from-amber-400 to-orange-500"
                          : "left-8.5 bg-gradient-to-br from-indigo-500 to-purple-600"
                      }`}
                    >
                      {theme === "light" ? (
                        <Sun className="w-4 h-4 text-white" />
                      ) : (
                        <Moon className="w-4 h-4 text-white" />
                      )}
                    </div>
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Sound Settings */}
            <Card className="bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md">
                    <Volume2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sound Effects</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      {soundsEnabled ? "Enabled" : "Disabled"}
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Enable sound effects</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={soundsEnabled}
                      onChange={handleSoundToggle}
                      className="sr-only peer"
                    />
                    <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-blue-500 peer-checked:to-cyan-500 transition-all duration-300 shadow-inner">
                      <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                        soundsEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${soundsEnabled ? 'bg-blue-500' : 'bg-gray-400'}`} />
                      </div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* Notifications Settings */}
            <Card className="bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 dark:from-purple-500/10 dark:to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-md">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Notifications</div>
                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Coming soon
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Enable notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer opacity-60">
                    <input
                      type="checkbox"
                      checked={notificationsEnabled}
                      onChange={handleNotificationsToggle}
                      className="sr-only peer"
                      disabled
                    />
                    <div className="w-14 h-8 bg-gray-300 dark:bg-gray-700 rounded-full peer peer-checked:bg-gradient-to-r peer-checked:from-purple-500 peer-checked:to-pink-500 transition-all duration-300 shadow-inner">
                      <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
                        notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${notificationsEnabled ? 'bg-purple-500' : 'bg-gray-400'}`} />
                      </div>
                    </div>
                  </label>
                </div>
              </CardContent>
            </Card>

            {/* User Profile Settings */}
            <Card
              onClick={openEditModal}
              className="bg-white/80 dark:bg-gray-800/50 border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 cursor-pointer group overflow-hidden hover:scale-[1.02]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 dark:from-indigo-500/10 dark:to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative">
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 shadow-md group-hover:scale-110 transition-transform duration-300">
                      <User className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">My Profile</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {name || "Not set"}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all duration-300" />
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    Click to edit your information
                  </p>
                  {(hobby || subject) && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {hobby && (
                        <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium">
                          {hobby}
                        </span>
                      )}
                      {subject && (
                        <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-xs font-medium">
                          {subject}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {isEditModalOpen && (
        <EditUserInfoModal
          currentData={{ name, hobby, subject }}
          onSave={handleSaveFromModal}
          onClose={closeEditModal}
        />
      )}
      
      <Footer />
    </div>
  );
};

export default Settings;