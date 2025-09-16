import Navbar from "@/components/app/Navbar";
import LearnerModal from "@/modals/Welcome";
import {
  Book,
  Newspaper,
  Puzzle,
  Quote,
  Sparkles,
  Trophy,
  Wand,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openLearnerModal, setOpenLearnerModal] = useState(false);

  const sections = [
    {
      name: "Brain Teasers",
      icon: <Puzzle />,
      description: "Challenge your logical thinking",
      color: "from-purple-500 to-indigo-600",
      to: "/brain-teasers",
    },
    {
      name: "Mini Stories",
      icon: <Book />,
      description: "Discover powerful narratives",
      color: "from-emerald-500 to-teal-600",
      to: "/mini-stories",
    },
    {
      name: "Quiz Quest",
      icon: <Sparkles />,
      description: "Test your general knowledge",
      color: "from-cyan-500 to-blue-600",
      to: "quiz-quest",
    },
    {
      name: "Wisdom Nuggets",
      icon: <Quote />,
      description: "Daily inspiration and insights",
      color: "from-amber-500 to-orange-600",
      to: "wisdom-nuggets",
    },
    {
      name: "Speech Drill",
      icon: <Wand />,
      description: "Master pronunciation and fluency",
      color: "from-pink-500 to-rose-600",
      to: "speech-drills",
    },
    {
      name: "Fact Frenzy",
      icon: <Newspaper />,
      description: "Test your general knowledge",
      color: "from-cyan-500 to-blue-600",
      to: "fact-frenzy",
    },
  ];

  const HandleCategoryClick = (destination: string) => navigate(destination);

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first-time");
    if (!isFirstTime) setTimeout(() => setOpenLearnerModal(true), 1200);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Navbar />

      <div className="relative z-10 max-w-6xl w-full text-center">
        <div className="mb-8 mt-20">
          <p className="text-lg mb-4 font-medium max-w-3xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400">
            Brain challenges. Daily insights. Smarter you
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
          {sections.map((section, index) => (
            <button
              key={section.name}
              onClick={() => HandleCategoryClick(section.to)}
              className="group cursor-pointer p-4 md:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 relative overflow-hidden border bg-white/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${section.color} transform -translate-y-2 group-hover:translate-y-0 transition-transform duration-300`}
              />

              <div className="flex flex-col items-center text-center">
                <div
                  className={`p-4 lg:p-6 rounded-3xl bg-gradient-to-r ${section.color} shadow-lg group-hover:shadow-xl transition-all duration-300 mb-4 lg:mb-6 group-hover:scale-110`}
                >
                  {React.cloneElement(section.icon, {
                    className: "text-white",
                  })}
                </div>

                <h3 className="max-sm:text-xl text-2xl font-bold mb-1 lg:mb-2 transition-colors duration-300 group-hover:text-indigo-600">
                  {section.name}
                </h3>
                <p className="text-sm font-medium mb-4 leading-relaxed text-gray-600 dark:text-gray-300">
                  {section.description}
                </p>

                <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center text-green-600">
                    <Trophy className="w-4 h-4 mr-1" />0 completed
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {openLearnerModal && (
        <LearnerModal onClose={() => setOpenLearnerModal(false)} />
      )}
    </div>
  );
};

export default HomePage;
