import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { TEST_RESULTS } from "@/constants";
import LearnerModal from "@/modals/Welcome";
import {
  Book,
  Newspaper,
  Puzzle,
  Quote,
  Sparkles,
  Trophy,
  Wand,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const READ_STORIES = "read-stories";

type Complete = {
  stories: number;
  quiz: number;
};

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [openLearnerModal, setOpenLearnerModal] = useState(false);
  const [completed, setCompleted] = useState<Complete>({ stories: 0, quiz: 0 });

  // Sections info
  const sections = [
    {
      name: "Brain Teasers",
      icon: <Puzzle />,
      description: "Challenge your logical thinking",
      color: "from-purple-500 to-indigo-600",
      bgGradient: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
      to: "/brain-teasers",
    },
    {
      name: "Mini Stories",
      icon: <Book />,
      description: "Discover powerful narratives",
      color: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      to: "/mini-stories",
    },
    {
      name: "Quiz Quest",
      icon: <Sparkles />,
      description: "Test your general knowledge",
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20",
      to: "quiz-quest",
    },
    {
      name: "Wisdom Nuggets",
      icon: <Quote />,
      description: "Daily inspiration and insights",
      color: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20",
      to: "wisdom-nuggets",
    },
    {
      name: "Tongue Twisters",
      icon: <Wand />,
      description: "Master pronunciation and fluency",
      color: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20",
      to: "tongue-twisters",
    },
    {
      name: "Amazing Facts",
      icon: <Newspaper />,
      description: "Cool random facts",
      color: "from-violet-500 to-purple-600",
      bgGradient: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
      to: "amazing-facts",
    },
  ];

  // Handle category card click
  const HandleCategoryClick = (destination: string) => navigate(destination);

  useEffect(() => {
    const isFirstTime = localStorage.getItem("first-time");
    if (!isFirstTime) setTimeout(() => setOpenLearnerModal(true), 1200);
  }, []);

  // Fetch completion data from storage
  useEffect(() => {
    // For stories
    const rawData = localStorage.getItem(READ_STORIES);
    const completedStories = rawData ? JSON.parse(rawData).length : 0;
    setCompleted((prev) => ({ ...prev, stories: completedStories }));

    // For Quiz
    const rawQuizData = localStorage.getItem(TEST_RESULTS);
    const completedQuizes = rawQuizData ? JSON.parse(rawQuizData).length : 0;
    setCompleted((prev) => ({ ...prev, quiz: completedQuizes }));
  }, []);

  const totalProgress = completed.stories + completed.quiz;

  return (
    <div className="min-h-screen text-gray-900 dark:text-white bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex flex-col relative overflow-hidden transition-colors duration-500">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 dark:bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 dark:bg-pink-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />

      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Hero Section */}
        <div className="text-center mb-12 space-y-6 animate-in fade-in duration-700">
          {/* Stats Badge */}
          {totalProgress > 0 && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full shadow-lg shadow-indigo-500/30 animate-in slide-in-from-top duration-500">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-semibold">
                {totalProgress} Activities Completed!
              </span>
            </div>
          )}

          {/* Tagline */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight px-4">
              Learn. Grow. Excel.
            </h1>
            <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 px-4">
              Brain challenges. Daily insights. Smarter you.
            </p>
          </div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 animate-in fade-in duration-1000">
          {sections.map((section, index) => {
            const hasCompleted =
              section.name === "Quiz Quest" || section.name === "Mini Stories";
            const completionCount = 
              section.name === "Mini Stories" ? completed.stories : completed.quiz;

            return (
              <button
                key={section.name}
                onClick={() => HandleCategoryClick(section.to)}
                className="group relative p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 dark:bg-gray-800/50 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm overflow-hidden"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'slideUp 0.6s ease-out forwards',
                  opacity: 0
                }}
              >
                {/* Top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${section.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />

                {/* Background gradient on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${section.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                    />
                    <div
                      className={`relative p-4 rounded-2xl bg-gradient-to-r ${section.color} shadow-md group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                    >
                      {React.cloneElement(section.icon, {
                        className: "w-8 h-8 text-white",
                      })}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent">
                      {section.name}
                    </h3>
                    <p className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {section.description}
                    </p>
                  </div>

                  {/* Completion Badge */}
                  {hasCompleted && completionCount > 0 && (
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full text-xs font-semibold shadow-md">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>
                        {completionCount} {section.name === "Mini Stories" ? "Stories" : "Tests"}
                      </span>
                    </div>
                  )}

                  {/* Hover Arrow */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${section.color}`}>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Motivational Section */}
        <div className="mt-16 text-center space-y-4 animate-in fade-in duration-1000" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <Sparkles className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Start your learning journey today!
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {openLearnerModal && (
        <LearnerModal
          onClose={() => {
            setOpenLearnerModal(false);
            navigate("/");
          }}
        />
      )}

      {/* Keyframes for animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;