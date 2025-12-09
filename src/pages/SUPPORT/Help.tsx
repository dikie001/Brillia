import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChevronDown,
  Download,
  HelpCircle,
  MessageSquare,
  WifiOff,
} from "lucide-react";
import { useState } from "react";
import InstallationModal from "@/modals/InstallationModal";
import OfflineModal from "@/modals/OfflineModal";

const Help = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [showInstallationModal, setShowInstallationModal] = useState(false);
  const [showOfflineModal, setShowOfflineModal] = useState(false);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "What is Brillia?",
      answer:
        "Brillia is a Progressive Web App designed to inspire and educate you daily. It offers Quick Challenges, Flash Stories, quizzes, Life Gems, Clear Speech, Fun Facts, and more to help you learn and have fun.",
    },
    {
      question: "How do I install Brillia on my device?",
      answer:
        "Brillia is a PWA that can be installed like a native app. Look for the install button in your browser (usually a plus icon or 'Install' option) or use the PWA Install component in the app's navigation bar.",
    },
    {
      question: "Does Brillia work offline?",
      answer:
        "Yes! Once installed, Brillia works completely offline. All content and features are cached locally on your device, so you can use the app without an internet connection.",
    },
    {
      question: "How do I save my favorite content?",
      answer:
        "Most sections have a heart or favorite icon. Click it to save content to your favorites. You can view your saved items in the respective sections or in your personal collection.",
    },
    {
      question: "How do Quick Challenges work?",
      answer:
        "Quick Challenges include puzzles, riddles, and logic problems. Click on any teaser to reveal the answer. You can save your favorites and track your progress.",
    },
    {
      question: "What are Life Gems?",
      answer:
        "Life Gems are short, inspiring quotes and pieces of wisdom. They're designed to motivate and encourage you throughout your day.",
    },
    {
      question: "How do I reset my progress?",
      answer:
        "Go to Settings and look for the 'Reset Progress' option. This will clear your saved favorites and progress data. Use this if you want to start fresh.",
    },
    {
      question: "Can I customize the app's appearance?",
      answer:
        "Yes! Brillia supports dark and light themes. Use the theme toggle button in the navigation bar to switch between themes.",
    },
    {
      question: "How do I contact the developer?",
      answer:
        "Use the 'Contact Developer' page to send feedback, report issues, or suggest new features. Your input helps improve the app!",
    },
    {
      question: "Is my data stored locally?",
      answer:
        "Yes, all your preferences, favorites, and progress are stored locally on your device. No personal data is sent to external servers.",
    },
    {
      question: "How often is new content added?",
      answer:
        "Content is regularly updated. Check back often for new Quick Challenges, stories, facts, and Life Gems to keep your daily inspiration fresh.",
    },
    {
      question: "What browsers support Brillia?",
      answer:
        "Brillia works best in modern browsers that support Progressive Web Apps, including Chrome, Firefox, Safari, and Edge. For the best experience, use the latest version of your browser.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <Navbar currentPage="Help & FAQ" />

      <div className="pt-20 px-4 pb-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-4 rounded-full bg-indigo-100 dark:bg-gray-800">
                <HelpCircle className="w-12 h-12 text-indigo-600 dark:text-indigo-400" />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Help & FAQ
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Find answers to common questions and learn how to make the most of
              Brillia.
            </p>
          </div>

          {/* Quick Help Cards */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card
              onClick={() => setShowInstallationModal(true)}
              className="cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center">
                <Download className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Installation</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn how to install Brillia as a native app on your device.
                </p>
              </CardContent>
            </Card>

            <Card
              onClick={() => setShowOfflineModal(true)}
              className="cursor-pointer bg-white dark:bg-gray-800 border rounded-3xl border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="text-center">
                <WifiOff className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                <CardTitle className="text-lg">Offline Use</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Discover how Brillia works completely offline once installed.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <Card className="bg-white dark:bg-gray-800 border rounded-3xl border-gray-200 dark:border-gray-700 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-indigo-500" />
                Frequently Asked Questions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border  border-gray-200 dark:border-gray-700 rounded-2xl"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full  flex items-center justify-between p-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 rounded-2xl transition-colors"
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openItems.includes(index) && (
                    <div className="px-4 pb-4 text-gray-600 dark:text-gray-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="bg-white rounded-3xl dark:bg-gray-800 border border-indigo-200 dark:border-indigo-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-indigo-600 dark:text-indigo-400">
                Still Need Help?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Can't find what you're looking for? I'm here to help!
              </p>
              <button
                onClick={() => (window.location.href = "/contact-developer")}
                className="bg-gradient-to-r from-indigo-600 to-indigo-800 cursor-pointer text-white px-6 py-2 rounded-xl hover:bg-indigo-600 transition-colors"
              >
                Contact Developer
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />

      {showInstallationModal && (
        <InstallationModal onClose={() => setShowInstallationModal(false)} />
      )}
      {showOfflineModal && (
        <OfflineModal onClose={() => setShowOfflineModal(false)} />
      )}
    </div>
  );
};

export default Help;
