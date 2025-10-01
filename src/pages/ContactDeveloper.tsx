import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { useForm } from "@formspree/react";
import { LoaderCircle, Send } from "lucide-react";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { toast } from "sonner";

const ContactDeveloper = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [state, handleSubmit] = useForm("mgvvgozj");

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Message delivered. Expect a reply shortly.");
      setFormData({ name: "", email: "", message: "" });
      return setLoading(false);
    } else if (state.errors) {
      toast.error("Ran into an error, Try again");
    }
  }, [state.succeeded, state.errors]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:bg-gray-900 dark:from-transparent dark:via-transparent dark:to-transparent flex flex-col transition-colors duration-500">
      <Navbar currentPage="Contact Developer" />
      <div className="flex-1 mt-20 flex flex-col items-center justify-center p-4 font-sans relative overflow-hidden">
        <div className="relative z-10 max-w-3xl w-full text-center">
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Get in touch with the developer through various channels.
          </p>

          <div className="grid grid-cols-2  gap-4 mb-8">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100086299638167"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center py-6 px-4 bg-white/80 dark:bg-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:-translate-y-2"
            >
              <FaFacebook className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Facebook</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Connect on Facebook
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/254716957179?text=Greetings%2C%20I%20hope%20you%20are%20doing%20well.%20I%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center py-6 px-4 bg-white/80 dark:bg-gray-800/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700/50 hover:-translate-y-2"
            >
              <FaWhatsapp className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Chat on WhatsApp
              </p>
            </a>
          </div>

          <div className="">
            {/* Form */}
            <div className="flex flex-col p-6 bg-white/80 dark:bg-gray-800/50 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700/50">
              <h3 className="text-xl font-semibold mb-4">
                Send a Direct Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
                <button
                  type="submit"
                  onClick={() => setLoading(true)}
                  className="w-full cursor-pointer flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white rounded-lg hover:from-indigo-600 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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
