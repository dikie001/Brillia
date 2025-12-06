import { BookOpen, Heart, LoaderCircle, User } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface LearnerInfo {
  name: string;
  subject: string;
  hobby: string;
}

interface EditUserInfoModalProps {
  currentData: LearnerInfo;
  onSave: (data: LearnerInfo) => void;
  onClose: () => void;
}

const USER = "user-info";

const EditUserInfoModal: React.FC<EditUserInfoModalProps> = ({
  currentData,
  onSave,
  onClose,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<LearnerInfo>(currentData);

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
        setLoading(false);
        return toast.error("Enter a valid hobby", { id: "hobby-err" });
      } else if (formData.name.length < 3) {
        setLoading(false);
        return toast.error("Invalid name, enter your real name", {
          id: "name-err",
        });
      } else if (!isNaN(Number(formData.name))) {
        toast.error("Your name can not be a number!");
        setLoading(false);
        return;
      } else if (!isNaN(Number(formData.hobby))) {
        toast.error("Your hobby can not be a number!");
        setLoading(false);
        return;
      }
      try {
        localStorage.setItem(USER, JSON.stringify(formData));
        toast.success("Information updated successfully", { id: "success" });
        onSave(formData);
        onClose();
      } catch (err) {
        setLoading(false);
        toast.error("Error saving details...", { id: "err-saving" });
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };

  const isFormValid = formData.name && formData.subject && formData.hobby;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 cursor-pointer bg-black/50 dark:bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white/95 dark:bg-gray-900 cursor-default  backdrop-blur-xl border border-white/20 dark:border-gray-700 rounded-3xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-500 ease-out"
      >
        {/* Header */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-3xl p-6 text-white">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-white/20 rounded-xl">
              <User size={24} />
            </div>
            <h2 className="text-2xl font-bold">Edit your Info</h2>
          </div>
          <p className="text-white/90 text-sm">Update your details</p>
        </div>

        {/* Form Content */}
        <div className="p-6">
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
                <Heart size={16} className="text-pink-600 dark:text-pink-400" />
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

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl font-medium bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={!isFormValid || loading}
                className={`flex-1 py-3 px-4 rounded-xl font-medium transition-all duration-300 transform ${
                  isFormValid && !loading
                    ? "bg-gradient-to-r from-indigo-600 to-indigo-700 text-white hover:scale-[1.02] shadow-lg hover:shadow-xl"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                }`}
              >
                {loading ? (
                  <div className="flex justify-center items-center gap-2">
                    <LoaderCircle size={22} className="animate-spin" />
                    <span>Saving...</span>
                  </div>
                ) : (
                  <span>Save Changes</span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserInfoModal;
