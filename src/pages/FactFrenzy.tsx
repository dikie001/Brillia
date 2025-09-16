import Navbar from "@/components/app/Navbar";
import {
    Atom,
    BookmarkPlus,
    Brain,
    CheckCircle,
    Clock,
    Eye,
    Filter,
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
  funLevel: number; // 1-5
  source: string;
  tags: string[];
  isVerified: boolean;
  readTime: number; // seconds
};

const facts: Fact[] = [
  {
    id: 1,
    fact: "A single cloud can weigh more than a million pounds. Despite appearing fluffy and weightless, the water droplets in an average cumulus cloud weigh about 1.1 million pounds - equivalent to 100 elephants floating in the sky!",
    category: "Nature",
    difficulty: "Mind-Blowing",
    funLevel: 5,
    source: "National Weather Service",
    tags: ["clouds", "weather", "weight"],
    isVerified: true,
    readTime: 15,
  },
  {
    id: 2,
    fact: "Your brain uses 20% of your body's total energy despite only weighing about 3 pounds. It's more energy-hungry than any other organ, consuming glucose like a high-performance sports car burns fuel.",
    category: "Human Body",
    difficulty: "Mind-Blowing",
    funLevel: 4,
    source: "Harvard Medical School",
    tags: ["brain", "energy", "metabolism"],
    isVerified: true,
    readTime: 12,
  },
  {
    id: 3,
    fact: "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible. Its natural acidity and lack of water create an environment where bacteria can't survive.",
    category: "Science",
    difficulty: "Surprising",
    funLevel: 4,
    source: "Smithsonian Magazine",
    tags: ["honey", "preservation", "ancient"],
    isVerified: true,
    readTime: 18,
  },
  {
    id: 4,
    fact: "There are more possible games of chess than atoms in the observable universe. The number of possible chess games is around 10^120, while there are only about 10^82 atoms in the universe we can see.",
    category: "Science",
    difficulty: "Mind-Blowing",
    funLevel: 5,
    source: "Scientific American",
    tags: ["chess", "mathematics", "universe"],
    isVerified: true,
    readTime: 20,
  },
  {
    id: 5,
    fact: "Octopuses have three hearts and blue blood. Two hearts pump blood to their gills, while the third pumps blood to the rest of their body. Their blue blood comes from copper-based hemocyanin instead of iron-based hemoglobin.",
    category: "Animals",
    difficulty: "Cool",
    funLevel: 4,
    source: "Marine Biology Institute",
    tags: ["octopus", "hearts", "biology"],
    isVerified: true,
    readTime: 16,
  },
  {
    id: 6,
    fact: "A day on Venus is longer than its year. Venus takes 243 Earth days to rotate once on its axis, but only 225 Earth days to orbit the Sun. Plus, it rotates backwards compared to most planets!",
    category: "Space",
    difficulty: "Mind-Blowing",
    funLevel: 5,
    source: "NASA",
    tags: ["venus", "rotation", "planets"],
    isVerified: true,
    readTime: 14,
  },
  {
    id: 7,
    fact: "Bananas are berries, but strawberries aren't. Botanically speaking, berries must have seeds inside their flesh. Bananas qualify, but strawberries have their seeds on the outside, making them aggregate fruits.",
    category: "Nature",
    difficulty: "Surprising",
    funLevel: 3,
    source: "Botanical Society",
    tags: ["fruits", "botany", "classification"],
    isVerified: true,
    readTime: 13,
  },
  {
    id: 8,
    fact: "The Great Wall of China isn't visible from space with the naked eye, despite popular belief. This myth has been debunked by numerous astronauts. However, city lights and other human-made structures are clearly visible from orbit.",
    category: "History",
    difficulty: "Surprising",
    funLevel: 3,
    source: "International Space Station",
    tags: ["great wall", "space", "myths"],
    isVerified: true,
    readTime: 17,
  },
  {
    id: 9,
    fact: "Your smartphone has more computing power than all of NASA had when they sent humans to the moon in 1969. The Apollo Guidance Computer had less processing power than a modern calculator.",
    category: "Technology",
    difficulty: "Cool",
    funLevel: 4,
    source: "MIT Computer Science",
    tags: ["smartphone", "nasa", "computing"],
    isVerified: true,
    readTime: 15,
  },
  {
    id: 10,
    fact: "Antarctica is technically a desert. Despite being covered in ice, it receives less than 2 inches of precipitation annually, making it the world's largest desert by area - even larger than the Sahara.",
    category: "Geography",
    difficulty: "Interesting",
    funLevel: 4,
    source: "National Geographic",
    tags: ["antarctica", "desert", "climate"],
    isVerified: true,
    readTime: 12,
  },
  {
    id: 11,
    fact: "A group of flamingos is called a 'flamboyance.' These social birds can live up to 60 years and get their pink color from the shrimp and algae they eat. Without this diet, they would be white or gray.",
    category: "Animals",
    difficulty: "Cool",
    funLevel: 3,
    source: "Wildlife Conservation Society",
    tags: ["flamingos", "color", "diet"],
    isVerified: true,
    readTime: 14,
  },
  {
    id: 12,
    fact: "Lightning strikes the Earth about 100 times per second, or roughly 8.6 million times per day. Despite its frequency, the chance of being struck by lightning in your lifetime is only about 1 in 15,300.",
    category: "Nature",
    difficulty: "Interesting",
    funLevel: 4,
    source: "National Weather Service",
    tags: ["lightning", "frequency", "probability"],
    isVerified: true,
    readTime: 16,
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
  const [filter, setFilter] = useState<string>("All");
  const [displayedFacts, setDisplayedFacts] = useState(facts);
  const [viewedFacts, setViewedFacts] = useState<Set<number>>(new Set());
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [showFactOfDay, setShowFactOfDay] = useState(true);

  const toggleSaved = (id: number) => {
    const newSaved = new Set(savedFacts);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
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
      } catch (err) {
        console.log("Share failed");
      }
    }
  };

  const filteredFacts =
    filter === "All"
      ? displayedFacts
      : filter === "Saved"
      ? displayedFacts.filter((fact) => savedFacts.has(fact.id))
      : displayedFacts.filter(
          (fact) => fact.category === filter || fact.difficulty === filter
        );

  const filters = [
    "All",
    "Saved",
    "Science",
    "Nature",
    "History",
    "Space",
    "Animals",
    "Technology",
    "Human Body",
    "Geography",
    "Mind-Blowing",
    "Surprising",
  ];

  // Rotate fact of the day
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % facts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const factOfDay = facts[currentFactIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900 text-gray-900 dark:text-gray-100 p-6">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-10 dark:opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-cyan-300 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-indigo-300 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <Navbar/>
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Lightbulb className="w-16 h-16 text-yellow-500 dark:text-yellow-400" />
              <div className="absolute -top-1 -right-1 w-8 h-8">
                <Zap className="w-6 h-6 text-blue-500 animate-bounce" />
              </div>
            </div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              Amazing Facts
            </h1>
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

        {/* Stats and Controls */}
        <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
              <Lightbulb className="w-4 h-4 inline mr-2" />
              {facts.length} Facts
            </span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
            <span className="text-sm font-bold text-green-600 dark:text-green-400">
              <Eye className="w-4 h-4 inline mr-2" />
              Viewed: {viewedFacts.size}
            </span>
          </div>
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
            <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
              <BookmarkPlus className="w-4 h-4 inline mr-2" />
              Saved: {savedFacts.size}
            </span>
          </div>
          <button
            onClick={shuffleFacts}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Shuffle className="w-4 h-4 inline mr-2" />
            Shuffle Facts
          </button>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === filterOption
                  ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg scale-105"
                  : "bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700 shadow-md hover:shadow-lg hover:scale-105 border border-white/20"
              }`}
            >
              <Filter className="w-3 h-3 inline mr-2" />
              {filterOption}
            </button>
          ))}
        </div>

        {/* Facts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredFacts.map((fact, index) => {
            const CategoryIcon = categoryIcons[fact.category];
            const isSaved = savedFacts.has(fact.id);
            const isViewed = viewedFacts.has(fact.id);

            return (
              <div
                key={fact.id}
                className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/30 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => markAsViewed(fact.id)}
              >
                {/* Fact Header */}
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
                  <div className="flex items-center gap-1">
                    {fact.isVerified && (
                      <div
                        className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 p-1 rounded-full"
                        title="Verified"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Difficulty Badge */}
                <div className="mb-4">
                  <span
                    className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                      difficultyColors[fact.difficulty]
                    }`}
                  >
                    {fact.difficulty}
                  </span>
                </div>

                {/* Fact Content */}
                <div className="mb-6">
                  <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
                    {fact.fact}
                  </p>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                    <Clock className="w-3 h-3 inline mr-1" />
                    {fact.readTime}s read
                  </div>
                </div>

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

                {/* Fun Level Indicator */}
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

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        shareFact(fact);
                      }}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                      title="Share fact"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                    {isViewed && (
                      <span className="text-xs text-green-600 dark:text-green-400 font-semibold flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        Viewed
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSaved(fact.id);
                    }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isSaved
                        ? "text-purple-500 bg-purple-100 dark:bg-purple-900/30 scale-110"
                        : "text-gray-400 hover:text-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                    }`}
                    title={isSaved ? "Remove from saved" : "Save fact"}
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

        {/* Empty State */}
        {filteredFacts.length === 0 && (
          <div className="text-center py-16">
            <Lightbulb className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
              No facts found
            </h3>
            <p className="text-gray-400 dark:text-gray-500">
              Try adjusting your filters to discover more amazing facts
            </p>
          </div>
        )}

        {/* Did You Know Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Learning Never Stops
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Brain className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mind Expanding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every fact opens new neural pathways and expands your
                understanding of the world.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Sources</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All facts are carefully researched and sourced from reputable
                institutions.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
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
