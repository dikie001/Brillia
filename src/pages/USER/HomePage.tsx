import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { TEST_RESULTS } from "@/constants";
import useSound from "@/hooks/useSound";
import LearnerModal from "@/modals/Welcome";
import {
  ArrowRight,
  BookOpen,
  CircleHelp,
  FileText,
  Lightbulb,
  Mic,
  Play,
  Sparkles,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Animation from "../../components/animation/Animation";

const READ_STORIES = "read-stories";

type Complete = {
  stories: number;
  quiz: number;
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { playSend } = useSound();
  const [openLearnerModal, setOpenLearnerModal] = useState(false);
  const [completed, setCompleted] = useState<Complete>({ stories: 0, quiz: 0 });

  // 1. Separate Quick Quiz specific data
  const quizSection = {
    name: "Quick Quiz",
    icon: <CircleHelp />,
    description: "Test yourself with fast, fun questions.",
    color: "from-cyan-500 to-blue-600",
    bgGradient:
      "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
    to: "quick-quiz",
  };

  // 2. Other Sections
  const otherSections = [
    {
      name: "Quick Challenges",
      icon: <Zap />,
      description: "Fast logic hits to sharpen your mind",
      color: "from-purple-500 to-indigo-600",
      bgGradient:
        "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
      to: "/quick-challenges",
    },
    {
      name: "Flash Stories",
      icon: <FileText />,
      description: "Short, powerful stories to spark ideas",
      color: "from-emerald-500 to-teal-600",
      bgGradient:
        "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      to: "/flash-stories",
    },
    {
      name: "Life Gems",
      icon: <Sparkles />,
      description: "Quick life tips to level up your mindset",
      color: "from-amber-500 to-orange-600",
      bgGradient:
        "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      to: "/life-gems",
    },
    {
      name: "Clear Speech",
      icon: <Mic />,
      description: "Improve fluency and pronunciation",
      color: "from-pink-500 to-rose-600",
      bgGradient:
        "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      to: "/clear-speech",
    },
    {
      name: "Fun Facts",
      icon: <Lightbulb />,
      description: "Cool and surprising facts",
      color: "from-violet-500 to-purple-600",
      bgGradient:
        "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
      to: "/fun-facts",
    },
    {
      name: "Word Power",
      icon: <BookOpen />,
      description: "Level up your language skills",
      color: "from-gray-900 to-orange-900 shadow-lg",
      to: "/word-power",
    },
  ];

  const HandleCategoryClick = (destination: string) => {
    playSend();
    navigate(destination);
  };

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first-time");
    if (!isFirstTime) setTimeout(() => setOpenLearnerModal(true), 1200);
  }, []);

  useEffect(() => {
    const rawData = localStorage.getItem(READ_STORIES);
    const completedStories = rawData ? JSON.parse(rawData).length : 0;

    const rawQuizData = localStorage.getItem(TEST_RESULTS);
    const completedQuizes = rawQuizData ? JSON.parse(rawQuizData).length : 0;

    setCompleted({ stories: completedStories, quiz: completedQuizes });
  }, []);

  const totalProgress = completed.stories + completed.quiz;

  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col relative overflow-hidden transition-colors duration-500">
      <Animation />

      <Navbar />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24  pb-12">
        {/* Header Section */}
        <div className="text-center mb-6 md:mb-10 space-y-2 md:space-y-4 animate-in fade-in duration-700">
          {totalProgress > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-700 to-indigo-800 text-white rounded-3xl shadow-md text-sm font-semibold mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>{totalProgress} Activities Completed!</span>
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Learn. Grow. Excel.
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Daily challenges to sharpen your mind.
          </p>
        </div>

        {/* --- FEATURED HERO BANNER --- */}
        <div className="mb-4 md:mb-6  flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <button
            onClick={() => HandleCategoryClick(quizSection.to)}
            className="group cursor-pointer relative w-full max-w-4xl mx-auto overflow-hidden rounded-3xl bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500 backdrop-blur-sm"
          >
            {/* Top gradient bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${quizSection.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
            />

            {/* Background gradient on hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${quizSection.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />

            {/* Banner Layout: Row on Mobile and Desktop */}
            <div className="relative py-10 md:py-10 p-4 md:p-6 flex items-center justify-between gap-4 md:gap-8 text-left">
              {/* Content Group: Icon + Text */}
              <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                {/* Left: Icon & Gradient Blob */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${quizSection.color} rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  <div
                    className={`relative p-3 md:p-4 rounded-2xl bg-gradient-to-r ${quizSection.color} shadow-lg group-hover:scale-110 transition-transform duration-500`}
                  >
                    {React.cloneElement(quizSection.icon, {
                      className: "w-6 h-6 md:w-9 md:h-9 text-white",
                    })}
                  </div>
                </div>

                {/* Middle: Text Content */}
                <div className="flex-col flex gap-1 overflow-hidden">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl md:text-3xl font-extrabold text-gray-900 dark:text-white truncate group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 group-hover:bg-clip-text group-hover:text-transparent transition-colors duration-300">
                      {quizSection.name}
                    </h3>
                    {/* Mobile-only Tiny Stat */}
                    {completed.quiz > 0 && (
                      <span className="md:hidden flex-shrink-0 text-[10px] font-bold text-cyan-600 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-900/30 px-2 py-0.5 rounded-full">
                        {completed.quiz} Done
                      </span>
                    )}
                  </div>

                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300 line-clamp-1 md:line-clamp-2">
                    {quizSection.description}
                  </p>
                </div>
              </div>

              {/* Right: Action / Stats */}
              <div className="flex-shrink-0 flex items-center gap-4">
                {/* Desktop Stats */}
                {completed.quiz > 0 && (
                  <div className="hidden md:block text-right">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {completed.quiz}
                    </p>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      Completed
                    </p>
                  </div>
                )}

                {/* Desktop Play Button visual */}
                <div
                  className={`
                  hidden md:flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300
                  bg-gradient-to-r ${quizSection.color} shadow-lg opacity-90 group-hover:opacity-100 group-hover:translate-x-1
                `}
                >
                  <span>Start</span>
                  <Play className="w-4 h-4 fill-current" />
                </div>

                {/* Simple Arrow for Mobile */}
                <div className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-700/50 group-hover:bg-cyan-50 dark:group-hover:bg-cyan-900/20 transition-colors">
                  <ArrowRight className="w-5 h-5 text-gray-500 dark:text-gray-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" />
                </div>
              </div>
            </div>
          </button>
        </div>
        {/* --- END FEATURED HERO BANNER --- */}

        {/* Grid for other items */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherSections.map((section, index) => {
            const hasCompleted = section.name === "Flash Stories";
            const completionCount = completed.stories;

            return (
              <button
                key={section.name}
                onClick={() => HandleCategoryClick(section.to)}
                className="group cursor-pointer relative p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden flex flex-col items-center text-center"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "slideUp 0.6s ease-out forwards",
                  opacity: 0,
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />

                <div className="mb-4 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${section.color} blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300`}
                  />
                  <div
                    className={`relative p-3 rounded-xl bg-gradient-to-r ${section.color} shadow-md group-hover:scale-110 transition-transform duration-300`}
                  >
                    {React.cloneElement(section.icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {section.name}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {section.description}
                </p>

                {hasCompleted && completionCount > 0 && (
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                    <Trophy className="w-3 h-3" />
                    <span>{completionCount} Read</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </main>

      <Footer />
      {openLearnerModal && (
        <LearnerModal
          onClose={() => {
            setOpenLearnerModal(false);
            navigate("/");
          }}
        />
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
