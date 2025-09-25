import Navbar from "@/components/app/Navbar";
import {
  Bookmark,
  CheckCircle,
  Copy,
  Heart,
  Quote,
  Share2,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";

type Quote = {
  id: number;
  text: string;
  author: string;
  category:
    | "Motivation"
    | "Love"
    | "Success"
    | "Wisdom"
    | "Life"
    | "Dreams"
    | "Creativity"
    | "Happiness";
  mood:
    | "Inspiring"
    | "Romantic"
    | "Thoughtful"
    | "Uplifting"
    | "Peaceful"
    | "Ambitious";
  tags: string[];
  popularity: number;
};

const quotes: Quote[] = [
  {
    id: 1,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "Success",
    mood: "Inspiring",
    tags: ["work", "passion", "greatness"],
    popularity: 4.9,
  },
  {
    id: 2,
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
    category: "Motivation",
    mood: "Uplifting",
    tags: ["challenges", "opportunity", "perseverance"],
    popularity: 4.8,
  },
  {
    id: 3,
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
    category: "Dreams",
    mood: "Inspiring",
    tags: ["dreams", "future", "belief"],
    popularity: 4.7,
  },
  {
    id: 4,
    text: "Love is not about how many days, months, or years you have been together. It's about how much you love each other every single day.",
    author: "Unknown",
    category: "Love",
    mood: "Romantic",
    tags: ["love", "relationships", "daily"],
    popularity: 4.6,
  },
  {
    id: 5,
    text: "The purpose of our lives is to be happy.",
    author: "Dalai Lama",
    category: "Happiness",
    mood: "Peaceful",
    tags: ["purpose", "happiness", "life"],
    popularity: 4.8,
  },
  {
    id: 6,
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
    category: "Creativity",
    mood: "Uplifting",
    tags: ["creativity", "intelligence", "fun"],
    popularity: 4.5,
  },
  {
    id: 7,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "Motivation",
    mood: "Ambitious",
    tags: ["action", "starting", "doing"],
    popularity: 4.7,
  },
  {
    id: 8,
    text: "Life is what happens to you while you're busy making other plans.",
    author: "John Lennon",
    category: "Life",
    mood: "Thoughtful",
    tags: ["life", "planning", "present"],
    popularity: 4.9,
  },
  {
    id: 9,
    text: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
    category: "Dreams",
    mood: "Inspiring",
    tags: ["journey", "beginning", "possibility"],
    popularity: 4.6,
  },
  {
    id: 10,
    text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.",
    author: "Albert Einstein",
    category: "Wisdom",
    mood: "Thoughtful",
    tags: ["wisdom", "learning", "lifelong"],
    popularity: 4.4,
  },
  {
    id: 11,
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
    category: "Motivation",
    mood: "Uplifting",
    tags: ["resilience", "falling", "rising"],
    popularity: 4.9,
  },
  {
    id: 12,
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "Success",
    mood: "Inspiring",
    tags: ["success", "failure", "courage"],
    popularity: 4.8,
  },
];

const categoryColors = {
  Motivation:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200", // focus, drive
  Love: "bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-300", // soft romantic
  Success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", // growth, achievement
  Wisdom:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", // knowledge, clarity
  Life: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", // calm, balance
  Dreams:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200", // imagination, vision
  Creativity:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200", // energy, inspiration
  Happiness:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200", // positivity, joy
};

const moodColors = {
  Inspiring: "border-l-indigo-400",
  Romantic: "border-l-indigo-400",
  Thoughtful: "border-l-indigo-400",
  Uplifting: "border-l-indigo-400",
  Peaceful: "border-l-indigo-400",
  Ambitious: "border-l-indigo-400",
};

const FAVOURITE_QUOTES = "favorite-quote";

export default function WisdomNuggets() {
  const [copied, setCopied] = useState<number | null>(null);
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());

  useEffect(() => {
    setDisplayedQuotes(quotes);
  }, []);

  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) newFavorite.delete(id);
      else newFavorite.add(id);

      const existingData = localStorage.getItem(FAVOURITE_QUOTES);
      const existingfavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingfavorites.has(id)) existingfavorites.delete(id);
      else existingfavorites.add(id);

      localStorage.setItem(
        FAVOURITE_QUOTES,
        JSON.stringify(Array.from(existingfavorites))
      );
      return newFavorite;
    });
  };

  const copyToClipboard = async (quote: Quote) => {
    try {
      await navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
      setCopied(quote.id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      console.error("Failed to copy quote");
    }
  };

  const shareQuote = async (quote: Quote) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Inspirational Quote",
          text: `"${quote.text}" - ${quote.author}`,
        });
      } catch {
        copyToClipboard(quote);
      }
    } else {
      copyToClipboard(quote);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const storedFavorites = localStorage.getItem(FAVOURITE_QUOTES);
    const favoriteStories: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteStories);
  }, []);

  const featuredQuote = quotes[currentQuoteIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-900/50 dark:to-black text-gray-900 dark:text-gray-100 p-6">
      <Navbar currentPage="Wisdom Nuggets" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8 mt-12">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Quote className="w-16 h-16 text-indigo-600 dark:text-indigo-400 transform rotate-12" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full animate-ping"></div>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Words of wisdom to inspire, motivate, and illuminate your journey
          </p>
        </header>

        {/* Featured Quote */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-8 rounded-3xl shadow-2xl text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <Quote className="w-12 h-12 mb-6 opacity-80" />
              <blockquote className="text-2xl md:text-3xl font-bold leading-relaxed mb-6">
                "{featuredQuote.text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <cite className="text-lg font-semibold opacity-90">
                  — {featuredQuote.author}
                </cite>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentQuoteIndex % 5
                          ? "bg-white scale-125"
                          : "bg-white/50"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quotes Grid */}
        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedQuotes.map((quote, index) => {
            const isFavorite = favorite.has(quote.id);
            const isCopied = copied === quote.id;

            return (
              <div
                key={quote.id}
                className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105  `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Quote Header */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                      categoryColors[quote.category]
                    }`}
                  >
                    {quote.category}
                  </span>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                      {quote.popularity}
                    </span>
                  </div>
                </div>

                {/* Quote Content */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-indigo-300 mb-2" />
                  <blockquote className="text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-200 mb-2">
                    "{quote.text}"
                  </blockquote>
                  <cite className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    — {quote.author}
                  </cite>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {quote.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs text-gray-600 dark:text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => copyToClipboard(quote)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isCopied
                          ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                          : "hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                      title={isCopied ? "Copied!" : "Copy quote"}
                    >
                      {isCopied ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => shareQuote(quote)}
                      className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                      title="Share quote"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => toggleFavorites(quote.id)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isFavorite
                        ? "text-indigo-500 bg-indigo-100 dark:bg-indigo-900/30 scale-110"
                        : "text-gray-400 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                    }`}
                    title={
                      isFavorite ? "Remove from favorites" : "Add to favorites"
                    }
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote of the Day Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent">
            Daily Inspiration
          </h2>
          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Start each day with a dose of wisdom. New quotes refresh
              automatically.
            </p>
            <div className="flex justify-center gap-4">
              <button className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                <Bookmark className="w-4 h-4 inline mr-2" />
                Save Today's Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
