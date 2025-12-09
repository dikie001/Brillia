import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ADMIN_PASSWORD } from "@/constants";
import { useTheme } from "@/hooks/useHook";
import useSound from "@/hooks/useSound";
import {
  Bell,
  Edit2,
  Lock,
  Moon,
  RotateCcw,
  ShieldAlert,
  Smartphone,
  Sparkles,
  Sun,
  Trash2,
  Volume2
} from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";

export default function SettingsPage() {
  const { theme, toggleTheme } = useTheme();
  const { playSend } = useSound();
  const navigate = useNavigate();

  // State
  const [soundsEnabled, setSoundsEnabled] = useState(true);
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [subject, setSubject] = useState("");
  
  // Admin State
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdminUnlocked, setIsAdminUnlocked] = useState(false);
  
  // Edit Dialog State
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tempName, setTempName] = useState("");
  const [tempHobby, setTempHobby] = useState("");
  const [tempSubject, setTempSubject] = useState("");

  const PASSWORD = ADMIN_PASSWORD;

  useEffect(() => {
    // Load User Data
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

  const handleSoundToggle = (checked: boolean) => {
    setSoundsEnabled(checked);
    localStorage.setItem("soundsEnabled", checked.toString());
    if (checked) playSend();
    toast.success(`Sounds ${checked ? "enabled" : "muted"}`);
  };

  const handleOpenEdit = () => {
    setTempName(name);
    setTempHobby(hobby);
    setTempSubject(subject);
    setIsDialogOpen(true);
  };

  const handleSaveProfile = () => {
    playSend();
    const newData = { name: tempName, hobby: tempHobby, subject: tempSubject };
    localStorage.setItem("user-info", JSON.stringify(newData));
    setName(tempName);
    setHobby(tempHobby);
    setSubject(tempSubject);
    setIsDialogOpen(false);
    toast.success("Profile updated successfully");
  };

  const handleAdminUnlock = () => {
    playSend();
    if (adminPassword === PASSWORD) {
      setIsAdminUnlocked(true);
      toast.success("Admin access granted");
      setAdminPassword("");
    } else {
      toast.error("Incorrect password");
    }
  };

  const handleResetToDefaults = () => {
    playSend();
    setSoundsEnabled(true);
    localStorage.setItem("soundsEnabled", "true");
    toast.success("Settings reset to default");
  };

  const handleClearAllData = () => {
    if (window.confirm("Are you absolutely sure? This will wipe all progress.")) {
      playSend();
      localStorage.clear();
      setSoundsEnabled(true);
      setName("");
      setHobby("");
      setSubject("");
      setIsAdminUnlocked(false);
      toast.success("System wiped clean");
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 font-sans">
      <Navbar currentPage="Settings" />
      <Toaster richColors position="top-center" />

      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-rose-500/5 dark:bg-rose-500/10 rounded-full blur-[120px]" />
      </div>

      <main className="relative container max-w-5xl mx-auto px-4 py-24 z-10">
        <div className="flex flex-col gap-2 mb-10">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-slate-100">
            Settings
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            Manage your digital identity and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Profile Card */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="rounded-[2rem] border-0 shadow-xl shadow-slate-200/50 dark:shadow-black/40 overflow-hidden bg-white dark:bg-slate-900">
              {/* Artistic Header */}
              <div className="h-32 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative">
                 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
              </div>
              
              <CardContent className="px-6 pb-8 relative">
                {/* Avatar */}
                <div className="relative -mt-12 mb-4 flex justify-between items-end">
                  <div className="h-24 w-24 rounded-3xl border-4 border-white dark:border-slate-900 bg-white shadow-sm overflow-hidden p-1">
                     <img src="/images/icon.png" alt="User" className="w-full h-full object-cover rounded-2xl" />
                  </div>
                  <Button 
                    size="icon" 
                    variant="secondary" 
                    className="rounded-full shadow-sm hover:bg-indigo-100 dark:hover:bg-slate-800"
                    onClick={handleOpenEdit}
                  >
                    <Edit2 className="w-4 h-4 text-slate-600 dark:text-slate-300" />
                  </Button>
                </div>

                <div className="space-y-1">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {name || "Guest User"}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    {hobby || "Explorer of things"}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                   {subject ? (
                     <Badge variant="secondary" className="px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 border-indigo-100 dark:border-indigo-800">
                        {subject}
                     </Badge>
                   ) : (
                     <Badge variant="outline" className="rounded-full opacity-50 border-dashed">
                        No Subject
                     </Badge>
                   )}
                </div>
              </CardContent>
            </Card>

            {/* App Info Widget */}
            <div className="rounded-3xl bg-slate-100/50 dark:bg-slate-900/50 p-5 flex items-center justify-between border border-slate-200/50 dark:border-slate-800/50">
               <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                     <Smartphone className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="text-sm">
                     <p className="font-bold text-slate-700 dark:text-slate-200">Mini App</p>
                     <p className="text-slate-400 text-xs">v1.0.2 Stable</p>
                  </div>
               </div>
               <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Settings List */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Preferences Group */}
            <Card className="rounded-[2rem] border-slate-100 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900">
              <CardHeader className="pb-4">
                 <CardTitle className="text-lg flex items-center gap-2">
                    Preferences
                 </CardTitle>
                 <CardDescription>Customize your viewing and listening experience.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                
                {/* Theme Row */}
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-orange-50 dark:bg-blue-950/30 text-orange-500 dark:text-blue-400">
                         {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      </div>
                      <div className="space-y-0.5">
                         <Label className="text-base">Appearance</Label>
                         <p className="text-xs text-slate-500 font-medium">
                            {theme === 'light' ? 'Light Mode' : 'Dark Mode'} active
                         </p>
                      </div>
                   </div>
                   <Button 
                      variant="outline" 
                      onClick={() => { playSend(); toggleTheme(); }}
                      className="rounded-full border-slate-200 dark:border-slate-700 h-9"
                   >
                      Toggle Theme
                   </Button>
                </div>

                <Separator />

                {/* Sound Row */}
                <div className="flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl transition-colors ${soundsEnabled ? 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                         <Volume2 className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                         <Label htmlFor="sound-mode" className="text-base">Sound Effects</Label>
                         <p className="text-xs text-slate-500 font-medium">UI interaction sounds</p>
                      </div>
                   </div>
                   <Switch 
                      id="sound-mode"
                      checked={soundsEnabled}
                      onCheckedChange={handleSoundToggle}
                      className="data-[state=checked]:bg-emerald-500"
                   />
                </div>

                <Separator />

                {/* Notifications (Dummy) */}
                <div className="flex items-center justify-between opacity-60">
                   <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400">
                         <Bell className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                         <Label className="text-base">Notifications</Label>
                         <p className="text-xs text-slate-500 font-medium">Coming soon</p>
                      </div>
                   </div>
                   <Switch disabled />
                </div>

              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className={`rounded-[2rem] border-2 shadow-none transition-all duration-300 ${isAdminUnlocked ? 'border-red-100 dark:border-red-900/30 bg-red-50/10' : 'border-dashed border-slate-200 dark:border-slate-800 bg-transparent'}`}>
               <CardHeader className="pb-2">
                  <CardTitle className={`text-base font-bold flex items-center gap-2 ${isAdminUnlocked ? 'text-red-600 dark:text-red-400' : 'text-slate-400'}`}>
                     {isAdminUnlocked ? <ShieldAlert className="w-5 h-5" /> : <Lock className="w-5 h-5" />}
                     {isAdminUnlocked ? "Admin Controls Unlocked" : "Restricted Area"}
                  </CardTitle>
               </CardHeader>
               <CardContent>
                  {!isAdminUnlocked ? (
                     <div className="flex flex-col sm:flex-row gap-3 items-center mt-2">
                        <div className="relative flex-1 w-full">
                           <Input 
                              type="password" 
                              placeholder="Enter admin password..." 
                              className="rounded-xl pl-10 h-11 bg-white dark:bg-slate-900"
                              value={adminPassword}
                              onChange={(e) => setAdminPassword(e.target.value)}
                              onKeyDown={(e) => e.key === "Enter" && handleAdminUnlock()}
                           />
                           <Lock className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                        </div>
                        <Button 
                           onClick={handleAdminUnlock} 
                           className="w-full sm:w-auto rounded-xl h-11 px-6 font-bold"
                        >
                           Unlock
                        </Button>
                     </div>
                  ) : (
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                        <Button 
                           variant="outline" 
                           onClick={handleResetToDefaults}
                           className="h-auto py-4 justify-start px-4 rounded-xl border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
                        >
                           <RotateCcw className="w-5 h-5 mr-3 text-slate-500" />
                           <div className="text-left">
                              <span className="block font-bold text-slate-700 dark:text-slate-200">Reset Defaults</span>
                              <span className="block text-xs text-slate-500 font-normal">Restore settings only</span>
                           </div>
                        </Button>
                        <Button 
                           variant="outline" 
                           onClick={handleClearAllData}
                           className="h-auto py-4 justify-start px-4 rounded-xl border-red-200 bg-red-50 hover:bg-red-100 dark:bg-red-950/10 dark:border-red-900/50 dark:hover:bg-red-900/20 group"
                        >
                           <Trash2 className="w-5 h-5 mr-3 text-red-500 group-hover:text-red-600" />
                           <div className="text-left">
                              <span className="block font-bold text-red-600 dark:text-red-400">Wipe Data</span>
                              <span className="block text-xs text-red-400/70 font-normal">Permanent deletion</span>
                           </div>
                        </Button>
                     </div>
                  )}
               </CardContent>
            </Card>

          </div>
        </div>
      </main>

      {/* Internal Dialog for Editing Profile - Ensures no import errors */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
         <DialogContent className="sm:max-w-[425px] rounded-3xl bg-white dark:bg-slate-950 border-slate-100 dark:border-slate-900">
            <DialogHeader>
               <DialogTitle className="text-xl font-bold">Edit Profile</DialogTitle>
               <DialogDescription>
                  Make changes to your public profile here.
               </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-4">
               <div className="grid gap-2">
                  <Label htmlFor="name" className="text-slate-500">Display Name</Label>
                  <Input 
                     id="name" 
                     value={tempName} 
                     onChange={(e) => setTempName(e.target.value)} 
                     className="rounded-xl border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500"
                  />
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="hobby" className="text-slate-500">Hobby / Tagline</Label>
                  <Input 
                     id="hobby" 
                     value={tempHobby} 
                     onChange={(e) => setTempHobby(e.target.value)} 
                     className="rounded-xl border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500"
                  />
               </div>
               <div className="grid gap-2">
                  <Label htmlFor="subject" className="text-slate-500">Favorite Subject</Label>
                  <Input 
                     id="subject" 
                     value={tempSubject} 
                     onChange={(e) => setTempSubject(e.target.value)} 
                     className="rounded-xl border-slate-200 dark:border-slate-800 focus-visible:ring-indigo-500"
                     placeholder="e.g. Math, Science"
                  />
               </div>
            </div>
            <DialogFooter>
               <Button variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded-xl">Cancel</Button>
               <Button onClick={handleSaveProfile} className="rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white">Save Changes</Button>
            </DialogFooter>
         </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}