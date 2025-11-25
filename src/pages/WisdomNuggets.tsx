import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import { Badge } from "@/components/ui/badge";
import { WISDOM_CURRENTPAGE } from "@/constants";
import { quotes } from "@/jsons/coolQuotes";
import type { Quote } from "@/types";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCircle,
  Copy,
  Heart,
  QuoteIcon,
  Share2,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Paginate from "../components/app/paginations";

const categoryColors: Record<string, string> = {
  Motivation:
    "bg-gradient-to-r from-sky-900/40 to-indigo-900/40 text-sky-300 border border-sky-800",
  Wisdom:
    "bg-gradient-to-r from-amber-900/40 to-yellow-900/40 text-amber-300 border border-amber-800",
  Life:
    "bg-gradient-to-r from-zinc-900/40 to-stone-900/40 text-zinc-300 border border-zinc-800",
  Success:
    "bg-gradient-to-r from-emerald-900/40 to-green-900/40 text-emerald-300 border border-emerald-800",
  Love:
    "bg-gradient-to-r from-rose-900/40 to-pink-900/40 text-rose-300 border border-rose-800",
  Courage:
    "bg-gradient-to-r from-red-900/40 to-orange-900/40 text-orange-300 border border-red-800",
  Imagination:
    "bg-gradient-to-r from-violet-900/40 to-fuchsia-900/40 text-fuchsia-300 border border-violet-800",
  Knowledge:
    "bg-gradient-to-r from-teal-900/40 to-cyan-900/40 text-teal-300 border border-teal-800",
  Happiness:
    "bg-gradient-to-r from-lime-900/40 to-green-900/40 text-lime-300 border border-lime-800",
  Perseverance:
    "bg-gradient-to-r from-blue-900/40 to-cyan-900/40 text-cyan-300 border border-blue-800",
};


const FAVOURITE_QUOTES = "favorite-quote";

export default function WisdomNuggets() {
  const [copied, setCopied] = useState<number | null>(null);
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [showFeaturedQuote, setShowFeaturedQuote] = useState(true);

  const [currentFilter, setCurrentFilter] = useState("All");
  const [totalFiltered, setTotalFiltered] = useState(0);

  const genres = [
  "Motivation",
  "Wisdom",
  "Life",
  "Success",
  "Love",
  "Courage",
  "Imagination",
  "Knowledge",
  "Happiness",
  "Perseverance"
]

  const updateDisplayedQuotes = () => {
    let filteredQuotes = quotes;
    if (currentFilter === "Favorites") {
      filteredQuotes = quotes.filter((quote) => favorite.has(quote.id));
    } else if (currentFilter !== "All") {
      filteredQuotes = quotes.filter(
        (quote) => quote.category === currentFilter
      );
    }

    setTotalFiltered(filteredQuotes.length);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedQuotes(filteredQuotes.slice(start, end));

  };

  useEffect(() => {
    updateDisplayedQuotes();
    if (currentPage !== 1) {
      localStorage.setItem(WISDOM_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage, currentFilter]);

  useEffect(() => {
    const lastPage = localStorage.getItem(WISDOM_CURRENTPAGE);
    if (lastPage) {
      setCurrentPage(Number(lastPage));
    }
    updateDisplayedQuotes();
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-900/50 dark:to-black text-gray-900 dark:text-gray-100 p-4">
      <Navbar currentPage="Wisdom Nuggets" />

      <div className="relative z-10 max-w-7xl mx-auto pt-18">
        {/* Featured Quote */}
        {showFeaturedQuote && (
          <div >
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-5 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <QuoteIcon className="w-10 h-10 mb-4 opacity-80" />
                <blockquote className="md:text-2xl lg:text-3xl md:font-bold leading-relaxed mb-1 md:mb-2">
                  "{featuredQuote.content}"
                </blockquote>
                <div className="flex items-center justify-between">
                  <cite className="text-sm font-semibold opacity-90">
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
                <X
                  className="absolute -top-1 -right-1 cursor-pointer"
                  size={20}
                  onClick={() => setShowFeaturedQuote(false)}
                />
              </div>
            </div>
          </div>
        )}

        <FilterBar
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
          genres={genres}
        />
        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Showing {currentPage * itemsPerPage} of {totalFiltered} items
        </div>

        {/* Top Paginate */}

        {displayedQuotes.length !== 0 && displayedQuotes.length === 10 && (
          <Paginate
            currentPage={currentPage}
            totalItems={quotes.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Quotes Grid */}
        {currentFilter === "Favorites" && displayedQuotes.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {displayedQuotes.map((quote, index) => {
              const isFavorite = favorite.has(quote.id);
              const isCopied = copied === quote.id;

              return (
                <div
                  key={quote.id}
                  className={`group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg p-4 hover:shadow-xl transition-all duration-500 hover:scale-105  `}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Quote Header */}
                  <div className="flex items-start justify-between mb-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        categoryColors[
                          quote.category as keyof typeof categoryColors
                        ]
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
                  <div className="mb-2">
                    <QuoteIcon className="w-6 h-6 text-indigo-300 mb-2" />
                    <blockquote className="text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-200 mb-2">
                      "{quote.content}"
                    </blockquote>
                    <cite className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                      — {quote.author}
                    </cite>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {quote.tags.map((tag) => (
                      <Badge variant="outline"
                        key={tag}
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  {/* Id numbers */}
                  <div className=" text-white bg-gradient-to-r from-indigo-600 to-indigo-900 flex justify-center items-center font-medium absolute -top-4 -right-2  shadow-lg w-8 h-8 rounded-full ">
                    {quote.id}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    {/* copy ans share */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => copyToClipboard(quote, setCopied)}
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
                        onClick={() => shareQuote(quote, setCopied)}
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
                        isFavorite
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          isFavorite ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Paginate */}
        {displayedQuotes.length !== 0 && displayedQuotes.length === 10 && (
          <Paginate
            currentPage={currentPage}
            totalItems={quotes.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
