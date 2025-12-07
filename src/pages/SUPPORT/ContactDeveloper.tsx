import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import type { LearnerInfo } from "@/modals/Welcome";
import { LoaderCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
// Import Firebase functions
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase/config.firebase";
import { USER_INFO } from "@/constants";

const ContactDeveloper = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const [user, setUser] = useState<LearnerInfo>();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Get all the user data from storage
  useEffect(() => {
    const info = localStorage.getItem("user-info");
    const userInfo = info && JSON.parse(info);
    setUser(userInfo);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Validation Logic
    if (formData.name === "" || formData.message === "") {
      toast.error("Fill all the input fields please");
      setLoading(false);
      setCount((prev) => prev + 1);

      if (count >= 2) {
        toast.info(
          `Just take your time and fill all the fields ${
            user?.name.split(" ")[0]
          }!`
        );
        if (count >= 3) {
          toast.warning("You will be redirected to the home page");
        }
        if (count >= 4) {
          toast.success("Redirected to home page");
          setTimeout(() => navigate("/"), 500);
        }
      }
      return;
    }

    // Firebase Submission
    try {
      const data = localStorage.getItem(USER_INFO);
      const userData = data ? JSON.parse(data) : [];

      await addDoc(collection(db, "messages"), {
        name: formData.name,
        message: formData.message,
        createdAt: new Date(),
        userId: userData.id || "Anonymous", 
      });

      toast.success("Message delivered to developer.");
      setFormData({ name: "", message: "" });
    } catch (error) {
      console.error("Error sending message: ", error);
      toast.error(
        `Make sure you have internet connection, ${user?.name.split(" ")[0]}`
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent flex flex-col transition-colors duration-500">
      <Navbar currentPage="Contact Developer" />
      <div className="flex-1 mt-20 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
        <div className="relative z-10 max-w-3xl w-full text-center">
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Get in touch with the developer through various channels.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100086299638167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center py-6 px-4 bg-white/80 dark:bg-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-600/10 dark:border-indigo-600/20 hover:-translate-y-2"
            >
              <FaFacebook className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Facebook</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect on Facebook
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254716957179?text=Hello.%20I%20hope%20you%E2%80%99re%20doing%20well.%20I%E2%80%99d%20like%20to%20reach%20out%20regarding%20a%20quick%20inquiry."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center py-6 px-4 bg-white/80 dark:bg-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-indigo-600/10 dark:border-indigo-600/20 hover:-translate-y-2"
            >
              <FaWhatsapp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chat on WhatsApp
              </p>
            </a>
          </div>
          <div className="flex fex-row justify-center items-center mb-2">
            <hr className=" w-full" />
            <h1 className="text-center mb-4 text-gray-400 px-4 mt-4">OR</h1>
            <hr className=" w-full" />
          </div>
          <div className="">
            {/* Form */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-t-3xl p-6 text-white">
              <h3 className="text-xl font-semibold mb-4">
                Send a Direct Message
              </h3>
            </div>
            <div className="flex flex-col p-6 bg-white/80 dark:bg-gray-800/50 rounded-b-3xl shadow-xl border border-gray-200 dark:border-gray-700/50">
              <form onSubmit={handleSubmit} className="space-y-4">
                <label
                  htmlFor="name"
                  className=" text-sm flex justify-start font-medium text-gray-700 dark:text-gray-300"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="What's your name?"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                />

                {/* Email Input Removed Here */}

                <label
                  htmlFor="message"
                  className=" text-sm flex font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3.5 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-all duration-200"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <LoaderCircle className="animate-spin w-5 h-5" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {loading ? "Sending Message" : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactDeveloper;
