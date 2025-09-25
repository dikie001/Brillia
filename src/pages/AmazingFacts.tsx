import Navbar from "@/components/app/Navbar";
import {
  Atom,
  BookmarkPlus,
  Brain,
  CheckCircle,
  Clock,
  Eye,
  Globe,
  Lightbulb,
  Share2,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { facts } from "@/jsons/amazingFacts";
import type { Fact } from "@/types";

const categoryColors = {
  Science:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200", // intellectual, calm
  Nature: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", // natural, peaceful
  History: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200", // warm, vintage feel
  Space:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", // cosmic, mysterious
  Animals:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200", // energetic, lively
  Technology: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200", // neutral, modern
  Culture: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200", // human, vibrant
};


const categoryIcons = {
  Science: Atom,
  Nature: Globe,
  History: Clock,
  Space: Star,
  Animals: Eye,
  Technology: Zap,
  "Human Body": Brain,
  Geography: Globe,
  Culture: Star,
};

const SAVED_FACTS = "saved-facts";

export default function FactFrenzy() {
  const [savedFacts, setSavedFacts] = useState<Set<number>>(new Set());
  const [displayedFacts, setDisplayedFacts] = useState<Fact[]>([]);
  const [viewedFacts, setViewedFacts] = useState<Set<number>>(new Set());
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [showFactOfDay, setShowFactOfDay] = useState(true);

  useEffect(() => {
    setDisplayedFacts(facts);
    const savedData = localStorage.getItem(SAVED_FACTS);
    const savedFacts: Set<number> = savedData
      ? new Set(JSON.parse(savedData))
      : new Set();
    setSavedFacts(savedFacts);
  }, []);

  const toggleSaved = (id: number) => {
    const newSaved = new Set(savedFacts);
    if (newSaved.has(id)) newSaved.delete(id);
    else newSaved.add(id);
    setSavedFacts(newSaved);
    localStorage.setItem(SAVED_FACTS, JSON.stringify(Array.from(newSaved)));
  };

  const markAsViewed = (id: number) => {
    setViewedFacts(new Set([...viewedFacts, id]));
  };

  const shareFact = async (fact: Fact) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Amazing Fact!",
          text: `${fact.fact} - Source: ${fact.source}`,
        });
      } catch {
        console.log("Share failed");
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const factOfDay = facts[currentFactIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar currentPage="Amazing Facts" />
        <header className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative mt-12">
              <Lightbulb className="w-16 h-16 text-indigo-500 dark:text-indigo-400" />
              <div className="absolute -top-1 -right-1 w-8 h-8">
                <Zap className="w-6 h-6 text-indigo-500 animate-bounce" />
              </div>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover mind-blowing truths about our incredible world
          </p>
        </header>

        {showFactOfDay && (
          <div className="mb-16 relative">
            <div className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-700 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowFactOfDay(false)}
                  className="text-white/80 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Star className="w-8 h-8 text-yellow-300" />
                  <h2 className="text-2xl font-bold">Fact of the Moment</h2>
                </div>
                <p className="text-lg leading-relaxed mb-6">{factOfDay.fact}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        categoryColors[factOfDay.category]
                      }`}
                    >
                      {factOfDay.category}
                    </span>
                    <span className="text-sm opacity-80">
                      Source: {factOfDay.source}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {[...Array(Math.min(5, facts.length))].map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          i === currentFactIndex % 5
                            ? "bg-white scale-125"
                            : "bg-white/40"
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedFacts.map((fact, index) => {
            const CategoryIcon = categoryIcons[fact.category];
            const isSaved = savedFacts.has(fact.id);
            const isViewed = viewedFacts.has(fact.id);

            return (
              <div
                key={fact.id}
                className="group bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-103 border border-white/30 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => markAsViewed(fact.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        categoryColors[fact.category]
                      }`}
                    >
                      {fact.category}
                    </span>
                  </div>
                  {fact.isVerified && (
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-1 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </div>

                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  {fact.fact}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {fact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                {/* <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    Fun Level:
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < fact.funLevel
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300 dark:text-gray-600"
                        }`}
                      />
                    ))}
                  </div>
                </div> */}

                <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareFact(fact);
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-indigo-600 transition-all"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    {isViewed && (
                      <span className="text-xs text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                        <Eye className="w-3 h-3" /> Viewed
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(fact.id);
                    }}
                    className={`p-2 rounded-full transition-all ${
                      isSaved
                        ? "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 scale-110"
                        : "text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    }`}
                  >
                    <BookmarkPlus
                      className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                <div className="mt-1 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Source: {fact.source}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Learning Never Stops
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Brain className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mind Expanding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every fact opens new neural pathways and expands your
                understanding of the world.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <CheckCircle className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Sources</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All facts are carefully researched and sourced from reputable
                institutions.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Star className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Fun Learning</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Knowledge should be exciting! Each fact is rated for its fun
                factor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
