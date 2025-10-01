import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/hooks/useHook";
import { Bell, Moon, Sun, User, Volume2, Zap } from "lucide-react";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import EditUserInfoModal from "@/modals/EditUserInfoModal";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
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
    const savedAnimations = localStorage.getItem("animationsEnabled") === "true";
    setAnimationsEnabled(savedAnimations);
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
    if (!soundsEnabled) {
      toast.success("Sounds enabled");
    }
    localStorage.setItem("soundsEnabled", newSounds.toString());
  };

  // Handle notifications toggle
  const handleNotificationsToggle = () => {
    toast.info("Feature coming soon...");
  };

  // Handle animations toggle
  const handleAnimationsToggle = () => {
    const newAnimations = !animationsEnabled;
    setAnimationsEnabled(newAnimations);
    if (newAnimations) {
      toast.success("Animations enabled");
    } else {
      toast.info("Animations disabled");
    }
    localStorage.setItem("animationsEnabled", newAnimations.toString());
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
  const handleSaveFromModal = (data: { name: string; hobby: string; subject: string }) => {
    setName(data.name);
    setHobby(data.hobby);
    setSubject(data.subject);
    toast.success("Profile updated successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent dark:text-white transition-colors duration-500">
      <Navbar currentPage="Settings" />{" "}
      <div className="container mx-auto px-4 py-8 ">
        <div className="max-w-2xl mx-auto space-y-6 mt-20">
          {/* Theme Settings */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {theme === "light" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
                Theme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Select theme mode</span>
                <div className="flex gap-2">
                  <Button
                    variant={theme === "light" ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTheme()}
                    className={
                      theme === "light"
                        ? "bg-indigo-500 hover:bg-indigo-600"
                        : ""
                    }
                  >
                    {theme === "dark" ? (
                      <Moon className="w-4 h-4 mr-1" />
                    ) : (
                      <Sun className="w-4 h-4 mr-1" />
                    )}
                    {theme}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Sound Settings */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Volume2 className="w-5 h-5" />
                Sound Effects
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Enable or disable sound effects</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={soundsEnabled}
                    onChange={handleSoundToggle}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Notifications Settings */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Enable or disable notifications</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={notificationsEnabled}
                    onChange={handleNotificationsToggle}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* User Profile Settings */}
          <Card
            onClick={openEditModal}
            className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">Click to edit your user information</p>
            </CardContent>
          </Card>

          {/* Animations Settings */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Animations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Enable or disable animations</span>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={animationsEnabled}
                    onChange={handleAnimationsToggle}
                    className="sr-only peer"
                  />
                </label>
              </div>
            </CardContent>
          </Card>
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
