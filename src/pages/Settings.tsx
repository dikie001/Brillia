import React, { useState, useEffect } from "react";
import Navbar from "@/components/app/Navbar";
import Footer from "@/components/app/Footer";
import ResetProgress from "@/modals/ResetProgress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Volume2, Trash2, Bell, Type, Download } from "lucide-react";
import { useTheme } from "@/hooks/useHook";
import { FONT_SIZES } from "@/constants";

const Settings: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">("medium");
  const [isResetModalOpen, setIsResetModalOpen] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSounds = localStorage.getItem("soundsEnabled") === "true";
    setSoundsEnabled(savedSounds);
    const savedNotifications = localStorage.getItem("notificationsEnabled") === "true";
    setNotificationsEnabled(savedNotifications);
    const savedFontSize = (localStorage.getItem("fontSize") as "small" | "medium" | "large") || "medium";
    setFontSize(savedFontSize);
  }, []);

  // Handle sound toggle
  const handleSoundToggle = () => {
    const newSounds = !soundsEnabled;
    setSoundsEnabled(newSounds);
    localStorage.setItem("soundsEnabled", newSounds.toString());
  };

  // Handle notifications toggle
  const handleNotificationsToggle = () => {
    const newNotifications = !notificationsEnabled;
    setNotificationsEnabled(newNotifications);
    localStorage.setItem("notificationsEnabled", newNotifications.toString());
  };

  // Handle font size change
  const handleFontSizeChange = (size: "small" | "medium" | "large") => {
    setFontSize(size);
    localStorage.setItem("fontSize", size);
  };

  // Handle data export
  const handleDataExport = () => {
    const data = {
      settings: {
        theme,
        soundsEnabled,
        notificationsEnabled,
        fontSize,
      },
      progress: {
        readStories: localStorage.getItem("read-stories"),
        firstTime: localStorage.getItem("first-time"),
      },
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "brillia-data.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  // Handle progress reset
  const handleResetProgress = () => {
    setIsResetModalOpen(true);
  };

  // Confirm reset
  const confirmReset = () => {
    localStorage.removeItem("read-stories");
    localStorage.removeItem("first-time");
    // Add other keys if needed
    setIsResetModalOpen(false);
    alert("Progress has been reset.");
    window.location.reload(); // Reload to reflect changes
  };

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500">
      <Navbar currentPage="Settings"/>{" "}
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
                    className={theme === "light" ? "bg-yellow-500 hover:bg-yellow-600" : ""}
                  >
                    <Sun className="w-4 h-4 mr-1" />
                    Light
                  </Button>
                  <Button
                    variant={theme === "dark" ? "default" : "outline"}
                    size="sm"
                    onClick={() => toggleTheme()}
                    className={theme === "dark" ? "bg-gray-800 hover:bg-gray-900" : ""}
                  >
                    <Moon className="w-4 h-4 mr-1" />
                    Dark
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

          {/* Font Size Settings */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Type className="w-5 h-5" />
                Font Size
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span>Select your preferred font size</span>
                <div className="flex gap-2">
                  {FONT_SIZES.map((size) => (
                    <Button
                      key={size}
                      variant={fontSize === size ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleFontSizeChange(size)}
                      className="capitalize"
                    >
                      {size}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Export */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Export Data
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Download your settings and progress data as a JSON file.
              </p>
              <Button onClick={handleDataExport} variant="outline">
                Export Data
              </Button>
            </CardContent>
          </Card>

          {/* Progress Reset */}
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trash2 className="w-5 h-5" />
                Reset Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Clear all saved progress, including completed stories and
                quizzes.
              </p>
              <Button onClick={handleResetProgress} variant="destructive">
                Reset Progress
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <ResetProgress
        isOpen={isResetModalOpen}
        onClose={() => setIsResetModalOpen(false)}
        onConfirm={confirmReset}
      />
      <Footer />
    </div>
  );
};

export default Settings;
