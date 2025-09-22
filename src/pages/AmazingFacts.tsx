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
  Shuffle,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

type Fact = {
  id: number;
  fact: string;
  category:
    | "Science"
    | "Nature"
    | "History"
    | "Space"
    | "Animals"
    | "Technology"
    | "Human Body"
    | "Geography";
  difficulty: "Mind-Blowing" | "Interesting" | "Cool" | "Surprising";
  funLevel: number;
  source: string;
  tags: string[];
  isVerified: boolean;
  readTime: number;
};
const facts: Fact[] = [
  {
    id: 1,
    fact: "Bananas are berries, but strawberries are not.",
    category: "Nature",
    difficulty: "Surprising",
    funLevel: 4,
    source: "National Geographic",
    tags: ["fruit", "biology", "weird"],
    isVerified: true,
    readTime: 12,
  },
  {
    id: 2,
    fact: "Octopuses have three hearts and blue blood.",
    category: "Animals",
    difficulty: "Mind-Blowing",
    funLevel: 5,
    source: "Smithsonian",
    tags: ["ocean", "marine", "biology"],
    isVerified: true,
    readTime: 15,
  },
  {
    id: 3,
    fact: "Light from the Sun takes about 8 minutes to reach Earth.",
    category: "Space",
    difficulty: "Interesting",
    funLevel: 3,
    source: "NASA",
    tags: ["astronomy", "physics", "space"],
    isVerified: true,
    readTime: 10,
  },
  {
    id: 4,
    fact: "The Great Wall of China is not visible from space with the naked eye.",
    category: "History",
    difficulty: "Cool",
    funLevel: 3,
    source: "History.com",
    tags: ["china", "myth", "architecture"],
    isVerified: true,
    readTime: 14,
  },
  {
    id: 5,
    fact: "The human nose can detect over 1 trillion different scents.",
    category: "Human Body",
    difficulty: "Mind-Blowing",
    funLevel: 5,
    source: "Science Daily",
    tags: ["smell", "biology", "senses"],
    isVerified: true,
    readTime: 11,
  },
  {
    id: 6,
    fact: "Only about 5% of the ocean has been explored by humans.",
    category: "Geography",
    difficulty: "Surprising",
    funLevel: 4,
    source: "NOAA",
    tags: ["ocean", "earth", "exploration"],
    isVerified: true,
    readTime: 13,
  },
  {
    id: 7,
    fact: "The first computer virus was created in 1986 and called ‘Brain’.",
    category: "Technology",
    difficulty: "Interesting",
    funLevel: 3,
    source: "Computer History Museum",
    tags: ["cybersecurity", "computers", "history"],
    isVerified: true,
    readTime: 9,
  },
  {
    id: 8,
    fact: "Sharks existed before trees appeared on Earth.",
    category: "Science",
    difficulty: "Mind-Blowing",
    funLevel: 5,
    source: "BBC Earth",
    tags: ["evolution", "animals", "timeline"],
    isVerified: true,
    readTime: 12,
  },
];

const categoryColors = {
  Science: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Nature: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  History: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  Space:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Animals:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  Technology: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200",
  "Human Body": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Geography: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
};

const difficultyColors = {
  "Mind-Blowing": "bg-gradient-to-r from-red-500 to-pink-500 text-white",
  Interesting: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white",
  Cool: "bg-gradient-to-r from-green-500 to-emerald-500 text-white",
  Surprising: "bg-gradient-to-r from-purple-500 to-indigo-500 text-white",
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
};

export default function FactFrenzy() {
  const [savedFacts, setSavedFacts] = useState<Set<number>>(new Set());
  const [displayedFacts, setDisplayedFacts] = useState(facts);
  const [viewedFacts, setViewedFacts] = useState<Set<number>>(new Set());
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [showFactOfDay, setShowFactOfDay] = useState(true);

  const toggleSaved = (id: number) => {
    const newSaved = new Set(savedFacts);
    if (newSaved.has(id)) newSaved.delete(id);
    else newSaved.add(id);
    setSavedFacts(newSaved);
  };

  const markAsViewed = (id: number) => {
    setViewedFacts(new Set([...viewedFacts, id]));
  };

  const shuffleFacts = () => {
    const shuffled = [...facts].sort(() => Math.random() - 0.5);
    setDisplayedFacts(shuffled);
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
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar currentPage="Amazing Facts" />
        {/* Header */}
        <header className="text-center mb-6">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative mt-12">
              <Lightbulb className="w-16 h-16 text-yellow-500 dark:text-yellow-400" />
              <div className="absolute -top-1 -right-1 w-8 h-8">
                <Zap className="w-6 h-6 text-blue-500 animate-bounce" />
              </div>
            </div>
        
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover mind-blowing truths about our incredible world
          </p>
        </header>

        {/* Fact of the Day */}
        {showFactOfDay && (
          <div className="mb-16 relative">
            <div className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
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
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
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


        {/* Facts Grid */}
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedFacts.map((fact, index) => {
            const CategoryIcon = categoryIcons[fact.category];
            const isSaved = savedFacts.has(fact.id);
            const isViewed = viewedFacts.has(fact.id);

            return (
              <div
                key={fact.id}
                className="group bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => markAsViewed(fact.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <CategoryIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        categoryColors[fact.category]
                      }`}
                    >
                      {fact.category}
                    </span>
                  </div>
                  {fact.isVerified && (
                    <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1 rounded-full">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                  {fact.fact}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {fact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Fun Level */}
                <div className="flex items-center gap-2 mb-4">
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
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareFact(fact);
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-blue-600 transition-all"
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
                        ? "text-purple-500 bg-purple-100 dark:bg-purple-900/30 scale-110"
                        : "text-gray-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                  >
                    <BookmarkPlus
                      className={`w-5 h-5 ${isSaved ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Source */}
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Source: {fact.source}
                </div>
              </div>
            );
          })}
        </div>

        {/* Did You Know Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Learning Never Stops
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mind Expanding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every fact opens new neural pathways and expands your
                understanding of the world.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
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
