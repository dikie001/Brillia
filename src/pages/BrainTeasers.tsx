import { Brain, Eye, EyeOff, Lightbulb, Shuffle, Trophy } from "lucide-react";
import { useEffect, useState } from "react";
import teasers from "../assets/jsons/BrainTeaser.json";
import Navbar from "@/components/app/Navbar";

type Teaser = {
  id: number;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Logic" | "Riddle" | "Math" | "Lateral";
};

const difficultyColors = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const categoryIcons = {
  Logic: Brain,
  Riddle: Lightbulb,
  Math: Trophy,
  Lateral: Eye,
};

export default function BrainTeasersPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [filter, setFilter] = useState<string>("All");
  const [shuffledTeasers, setShuffledTeasers] = useState(teasers);
  const [solvedCount, setSolvedCount] = useState(0);

  const toggleReveal = (id: number) => {
    const newRevealed = new Set(revealed);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
      setSolvedCount((prev) => prev + 1);
    }
    setRevealed(newRevealed);
  };

  const shuffleTeasers = () => {
    const shuffled = [...teasers].sort(() => Math.random() - 0.5);
    setShuffledTeasers(shuffled);
    setRevealed(new Set());
    console.log(solvedCount);
  };

  const filteredTeasers =
    filter === "All"
      ? shuffledTeasers
      : shuffledTeasers.filter(
          (teaser) => teaser.difficulty === filter || teaser.category === filter
        );

  const categories = [
    "All",
    "Easy",
    "Medium",
    "Hard",
    "Logic",
    "Riddle",
    "Math",
    "Lateral",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const cards = document.querySelectorAll(".teaser-card");
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add("animate-pulse");
          setTimeout(() => card.classList.remove("animate-pulse"), 300);
        }, index * 100);
      });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-slate-800 dark:to-black text-gray-900 dark:text-gray-100 p-6">
  
<Navbar/>
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <h1 className="text-5xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Brain Teasers
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Challenge your mind with these carefully curated puzzles and riddles
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-blue-500 text-white shadow-lg scale-105"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-105"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid of teasers */}
        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeasers.map((teaser, index) => {
            const isRevealed = revealed.has(teaser.id);
            const CategoryIcon = categoryIcons[teaser.category];

            return (
              <div
                key={teaser.id}
                className="teaser-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/20"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div>
                  {/* Header with category and difficulty */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {teaser.category}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        difficultyColors[teaser.difficulty]
                      }`}
                    >
                      {teaser.difficulty}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Puzzle #{teaser.id}
                  </h2>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-2xl mb-4">
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {teaser.question}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleReveal(teaser.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold transition-all duration-300 ${
                      isRevealed
                        ? "bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105"
                    }`}
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-4 h-4" /> Hide Solution
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" /> Reveal Solution
                      </>
                    )}
                  </button>

                  {isRevealed && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl border-l-4 border-green-400 animate-fadeIn">
                      <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                        <span className="text-green-600 dark:text-green-400 font-bold">
                          Solution:{" "}
                        </span>
                        {teaser.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {filteredTeasers.length === 0 && (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No teasers found for the selected filter.
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
