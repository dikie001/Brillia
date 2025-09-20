import React, { useState } from "react";
import {
  Bell,
  Moon,
  Sun,
  Volume2,
  VolumeX,
  User,
  Book,
  Clock,
  Shield,
  LogOut,
} from "lucide-react";
import { useTheme } from "@/hooks/useHook";

interface SettingsState {
  notifications: boolean;
  studyReminders: boolean;
  darkMode: boolean;
  soundEffects: boolean;
  studySessionLength: number;
  breakLength: number;
  autoSync: boolean;
  dataCollection: boolean;
}

const SettingsPage: React.FC = () => {
  const [settings, setSettings] = useState<SettingsState>({
    notifications: true,
    studyReminders: true,
    darkMode: false,
    soundEffects: true,
    studySessionLength: 25,
    breakLength: 5,
    autoSync: true,
    dataCollection: false,
  });
  const { theme } = useTheme();
  const updateSetting = (key: keyof SettingsState, value: boolean | number) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const ToggleSwitch: React.FC<{
    enabled: boolean;
    onChange: (enabled: boolean) => void;
  }> = ({ enabled, onChange }) => (
    <button
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
        enabled ? "bg-blue-600" : "bg-gray-300 dark:bg-gray-600"
      }`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-gray-200 transition-transform ${
          enabled ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  );

  const SettingItem: React.FC<{
    icon: React.ReactNode;
    title: string;
    description: string;
    children: React.ReactNode;
  }> = ({ icon, title, description, children }) => (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-sm transition-shadow">
      <div className="flex items-center space-x-3">
        <div className="text-blue-600 dark:text-blue-400">{icon}</div>
        <div>
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            {title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
      {children}
    </div>
  );

  const NumberInput: React.FC<{
    value: number;
    onChange: (value: number) => void;
    min: number;
    max: number;
    suffix?: string;
  }> = ({ value, onChange, min, max, suffix = "" }) => (
    <input
      type="number"
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      min={min}
      max={max}
      className="w-20 px-3 py-2 text-center border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Settings
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your study experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Notifications Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Notifications
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={<Bell size={20} />}
                title="Push Notifications"
                description="Receive notifications about your study progress"
              >
                <ToggleSwitch
                  enabled={settings.notifications}
                  onChange={(enabled) =>
                    updateSetting("notifications", enabled)
                  }
                />
              </SettingItem>

              <SettingItem
                icon={<Clock size={20} />}
                title="Study Reminders"
                description="Get reminded when it's time to study"
              >
                <ToggleSwitch
                  enabled={settings.studyReminders}
                  onChange={(enabled) =>
                    updateSetting("studyReminders", enabled)
                  }
                />
              </SettingItem>
            </div>
          </section>

          {/* Appearance Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Appearance
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={
                  settings.darkMode ? <Moon size={20} /> : <Sun size={20} />
                }
                title="Dark Mode"
                description="Switch between light and dark themes"
              >
                <ToggleSwitch
                  enabled={settings.darkMode}
                  onChange={(enabled) => updateSetting("darkMode", enabled)}
                />
              </SettingItem>

              <SettingItem
                icon={
                  settings.soundEffects ? (
                    <Volume2 size={20} />
                  ) : (
                    <VolumeX size={20} />
                  )
                }
                title="Sound Effects"
                description="Play sounds for study session events"
              >
                <ToggleSwitch
                  enabled={settings.soundEffects}
                  onChange={(enabled) => updateSetting("soundEffects", enabled)}
                />
              </SettingItem>
            </div>
          </section>

          {/* Study Preferences Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Study Preferences
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={<Book size={20} />}
                title="Study Session Length"
                description="Default duration for study sessions (minutes)"
              >
                <div className="flex items-center space-x-2">
                  <NumberInput
                    value={settings.studySessionLength}
                    onChange={(value) =>
                      updateSetting("studySessionLength", value)
                    }
                    min={5}
                    max={120}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    min
                  </span>
                </div>
              </SettingItem>

              <SettingItem
                icon={<Clock size={20} />}
                title="Break Length"
                description="Default duration for breaks (minutes)"
              >
                <div className="flex items-center space-x-2">
                  <NumberInput
                    value={settings.breakLength}
                    onChange={(value) => updateSetting("breakLength", value)}
                    min={1}
                    max={30}
                  />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    min
                  </span>
                </div>
              </SettingItem>
            </div>
          </section>

          {/* Privacy & Data Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Privacy & Data
            </h2>
            <div className="space-y-3">
              <SettingItem
                icon={<Shield size={20} />}
                title="Auto-sync Data"
                description="Automatically sync your progress across devices"
              >
                <ToggleSwitch
                  enabled={settings.autoSync}
                  onChange={(enabled) => updateSetting("autoSync", enabled)}
                />
              </SettingItem>

              <SettingItem
                icon={<User size={20} />}
                title="Usage Analytics"
                description="Help improve the app by sharing anonymous usage data"
              >
                <ToggleSwitch
                  enabled={settings.dataCollection}
                  onChange={(enabled) =>
                    updateSetting("dataCollection", enabled)
                  }
                />
              </SettingItem>
            </div>
          </section>

          {/* Account Actions Section */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Account
            </h2>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center space-x-2 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                <User size={20} className="text-gray-600 dark:text-gray-300" />
                <span className="text-gray-900 dark:text-gray-100">
                  Edit Profile
                </span>
              </button>

              <button className="w-full flex items-center justify-center space-x-2 p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 rounded-lg hover:bg-red-100 dark:hover:bg-red-800/50 transition-colors text-red-700 dark:text-red-400">
                <LogOut size={20} />
                <span>Sign Out</span>
              </button>
            </div>
          </section>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
