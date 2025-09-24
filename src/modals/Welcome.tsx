import { BookOpen, Heart, LoaderCircle, Sparkles, User } from "lucide-react";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface LearnerInfo {
  name: string;
  subject: string;
  hobby: string;
}

interface MainProps {
  onClose: () => void;
}

const USER = "user-info";
const LearnerModal = ({ onClose }: MainProps) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LearnerInfo>({
    name: "",
    subject: "",
    hobby: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: keyof LearnerInfo, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (formData.name && formData.subject && formData.hobby) {
      if (formData.hobby.length < 4) {
        return toast.error("Enter a valid hobby", { id: "hobby-err" });
      } else if (formData.name.length < 3) {
        return toast.error("Invalid name, enter your real name", {
          id: "name-err",
        });
      }
      try {
        localStorage.setItem(USER, JSON.stringify(formData));
        localStorage.setItem("first-time", "false");
        toast.success("Information saved successfully", { id: "success" });
        setTimeout(() => {
          onClose();
        }, 6000);
      } catch (err) {
        toast.error("Error saving details...", { id: "err-saving" });
        window.location.reload();
        console.log(err);
      } finally {
        setTimeout(() => {
          setLoading(false);
          setSubmitted(true);
        }, 1000);
      }
    }
  };

  const isFormValid = formData.name && formData.subject && formData.hobby;

  return (
    <div className="fixed inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white/95 dark:bg-gray-900 backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 ease-out">
        {/* Header */}
        <Toaster />
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 rounded-t-3xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/20 rounded-xl">
              <Sparkles size={24} />
            </div>
            <h2 className="text-2xl font-bold">Welcome, Learner!</h2>
          </div>
          {!submitted && (
            <p className="text-white/90 text-sm">
              Tell us a bit about yourself to personalize your experience
            </p>
          )}
        </div>

        {/* Form Content */}
        <div className="p-6">
          {!submitted ? (
            <div className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <User
                    size={16}
                    className="text-purple-600 dark:text-purple-400"
                  />
                  What's your name?
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Enter your name"
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:focus:ring-purple-600 outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-900"
                />
              </div>

              {/* Subject Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <BookOpen
                    size={16}
                    className="text-blue-600 dark:text-blue-400"
                  />
                  Favorite subject?
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange("subject", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-600 outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-900"
                >
                  <option value="">Select a subject</option>
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
                  <option value="Sports">Sports</option>
                  <option value="none">I don't have one</option>
                </select>
              </div>

              {/* Hobby Field */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                  <Heart
                    size={16}
                    className="text-pink-600 dark:text-pink-400"
                  />
                  What's your favorite hobby?
                </label>
                <input
                  type="text"
                  value={formData.hobby}
                  list="hobbies"
                  onChange={(e) => handleInputChange("hobby", e.target.value)}
                  placeholder="e.g., Reading, Gaming, Drawing"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 dark:focus:ring-pink-600 outline-none transition-all duration-300 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 focus:bg-white dark:focus:bg-gray-900"
                />
                <datalist id="hobbies">
                  <option value="Playing Football" />
                  <option value="Reading" />
                  <option value="Drawing" />
                  <option value="Dancing" />
                  <option value="Collecting Memes" />
                  <option value="Cycling" />
                  <option value="Swimming" />
                  <option value="Daydreaming" />
                </datalist>
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid}
                className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 transform ${
                  isFormValid
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-700 dark:to-blue-700 text-white hover:from-purple-700 hover:to-blue-700 hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <LoaderCircle size={22} className="animate-spin" />{" "}
                    <span>Saving details...</span>{" "}
                  </div>
                ) : (
                  <span> Start Learning Journey </span>
                )}
              </button>
            </div>
          ) : (
            // Success State
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Welcome, {formData.name.split(" ")[0]}! 🎉
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Great to have you here! Get ready for an amazing experience.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearnerModal;
