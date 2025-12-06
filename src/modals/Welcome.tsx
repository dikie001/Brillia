import { trackDailyLogin } from "@/lib/trackDailyLogin";
import { saveUserDetails } from "@/utils/firebaseFunctions";
import {
  BookOpen,
  Heart,
  LoaderCircle,
  Sparkles,
  User,
  ChevronDown,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { v4 as uuid } from "uuid";

export interface LearnerInfo {
  id: string;
  name: string;
  age: string;
  subject: string;
  hobby: string;
  loginCount: number;
}

interface MainProps {
  onClose: () => void;
}

const USER = "user-info";

const LearnerModal = ({ onClose }: MainProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LearnerInfo>({
    id: uuid(),
    name: "",
    age: "",
    subject: "",
    hobby: "",
    loginCount: 1,
  });

  const handleInputChange = (field: keyof LearnerInfo, value: string) => {
    if (field === "age" && value && !/^\d*$/.test(value)) return;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    const { name, subject, hobby } = formData;
    if (!name || !subject || !hobby)
      return toast.error("Please fill in all fields");
    if (name.trim().length < 3) return toast.error("Enter your real name");
    if (!isNaN(Number(name))) return toast.error("Name cannot be a number");
    if (hobby.trim().length < 4) return toast.error("Enter a valid hobby");
    if (!isNaN(Number(hobby))) return toast.error("Hobby cannot be a number");

    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { age } = formData;
    const ageNum = parseInt(age);

    if (!age || isNaN(ageNum) || ageNum < 4 || ageNum > 100) {
      setLoading(false);
      return toast.error("Enter a valid age (4-100)");
    }

    try {
      localStorage.setItem(USER, JSON.stringify(formData));
      localStorage.setItem("first-time", "false");
      localStorage.setItem("soundsEnabled", "true");
      saveUserDetails(formData);
      trackDailyLogin(formData.id);

      setTimeout(() => {
        toast.success("Your profile has been created!", { id: "success" });
        onClose();
      }, 1500);
    } catch (err) {
      setLoading(false);
      console.log(err);
      toast.error("Error saving details...");
    }
  };

  const inputBaseClasses =
    "w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 dark:text-white focus:bg-white dark:focus:bg-gray-950 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-200";
  const labelBaseClasses =
    "flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5";

  return (
    <div className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
      <div className="bg-white dark:bg-gray-900 backdrop-blur-xl border border-white/20 dark:border-gray-800 rounded-3xl shadow-2xl w-full max-w-lg mx-auto transform transition-all duration-500 ease-out overflow-hidden">
        {/* Header - Animated Transition */}
        <div
          className={`relative overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 text-white transition-all duration-500 ease-in-out ${
            step === 2
              ? "h-32 flex flex-col justify-center items-center text-center"
              : ""
          }`}
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-10 translate-x-10 blur-2xl" />

          {step === 1 ? (
            <div className="relative z-10 animate-in slide-in-from-top-4 fade-in duration-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner">
                  <Sparkles
                    size={24}
                    className="text-yellow-300 animate-pulse"
                  />
                </div>
                <h2 className="text-2xl font-bold tracking-tight">
                  Welcome to Brillia
                </h2>
              </div>
              <p className="text-indigo-100 text-sm ml-1 font-medium opacity-90">
                Let's customize your learning journey
              </p>
            </div>
          ) : (
            <div className="relative z-10 animate-in zoom-in fade-in duration-500">
              <h2 className="text-3xl font-bold mb-1">
                Hi, {formData.name.split(" ")[0]}! 👋
              </h2>
              <p className="text-indigo-100 font-medium">Almost there...</p>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          <form
            onSubmit={step === 2 ? handleSubmit : (e) => e.preventDefault()}
          >
            {/* STEP 1: Staggered Entrance Animations */}
            {step === 1 && (
              <div className="space-y-5">
                {/* Name - Delay 0ms */}
                <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 fill-mode-backwards">
                  <label className={labelBaseClasses}>
                    <User size={16} className="text-indigo-500" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    autoFocus
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your name"
                    className={inputBaseClasses}
                  />
                </div>

                {/* Subject - Delay 100ms */}
                <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-100 fill-mode-backwards">
                  <label className={labelBaseClasses}>
                    <BookOpen size={16} className="text-blue-500" />
                    Favorite Subject
                  </label>
                  <div className="relative">
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        handleInputChange("subject", e.target.value)
                      }
                      className={`${inputBaseClasses} appearance-none cursor-pointer pr-10`}
                    >
                      <option value="">Select a subject...</option>
                      <option value="mathematics">Mathematics</option>
                      <option value="english">English</option>
                      <option value="kiswahili">History</option>
                      <option value="creative art">Creative Art</option>
                      <option value="social studies">Social Studies</option>
                      <option value="sports">Sports</option>
                      <option value="home science">Home Science</option>
                      <option value="pre-tech studies">Computer Science</option>
                      <option value="Agriculture">Agriculture</option>
                      <option value="cre">C.R.E</option>
                      <option value="none">I don't have one yet</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                    />
                  </div>
                </div>

                {/* Hobby - Delay 200ms */}
                <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-200 fill-mode-backwards">
                  <label className={labelBaseClasses}>
                    <Heart size={16} className="text-pink-500" />
                    Favorite Hobby
                  </label>
                  <input
                    type="text"
                    value={formData.hobby}
                    list="hobbies"
                    onChange={(e) => handleInputChange("hobby", e.target.value)}
                    placeholder="e.g., Reading, Gaming"
                    className={inputBaseClasses}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleContinue();
                    }}
                  />
                  <datalist id="hobbies">
                    <option value="Playing Football" />
                    <option value="Reading" />
                    <option value="Drawing" />
                    <option value="Dancing" />
                    <option value="Gaming" />
                    <option value="Cycling" />
                    <option value="Swimming" />
                  </datalist>
                </div>

                {/* Continue Button - Delay 300ms */}
                <div className="animate-in slide-in-from-bottom-4 fade-in duration-500 delay-300 fill-mode-backwards pt-2">
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="group w-full py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wide bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow hover:shadow-black/80 hover:-translate-y-0.5 transition-all cursor-pointer duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Continue</span>
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Age - Animated Entrance */}
            {step === 2 && (
              <div className="space-y-8 py-4 animate-in slide-in-from-right-8 fade-in duration-800">
                <div className="text-center space-y-4">
                  <label className="block text-xl font-medium text-gray-700 dark:text-gray-200">
                    How old are you?
                  </label>
                  <div className="relative w-32 mx-auto group">
                    <input
                      type="tel"
                      maxLength={3}
                      value={formData.age}
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      placeholder="10"
                      className="w-full h-20 text-center text-4xl font-bold rounded-2xl border-2 border-indigo-100 dark:border-gray-700 bg-indigo-50 dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20 outline-none transition-all  group-hover:border-indigo-200"
                    />
                    <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                      yrs
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="p-3.5 rounded-xl border border-gray-200 dark:border-gray-700 text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    type="submit"
                    disabled={loading || !formData.age}
                    className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm uppercase tracking-wide bg-gradient-to-r from-indigo-600 to-indigo-700 text-white shadow hover:shadow-black/80 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex justify-center items-center gap-2">
                        <LoaderCircle size={20} className="animate-spin" />
                        <span>Setting up...</span>
                      </div>
                    ) : (
                      <span>Start Learning Journey</span>
                    )}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default LearnerModal;
