/* eslint-disable react-hooks/exhaustive-deps */
import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import { WISDOM_CURRENTPAGE } from "@/constants";
import useSound from "@/hooks/useSound";
import { quotes } from "@/jsons/coolQuotes";
import type { Quote } from "@/types";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCircle,
  Copy,
  Heart,
  Info,
  QuoteIcon,
  Share2,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";
import Paginate from "../../components/app/paginations";

// Simplified, cleaner color palette
const categoryColors: Record<string, string> = {
  Motivation:
    "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300 border-sky-200 dark:border-sky-800",
  Wisdom:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300 border-amber-200 dark:border-amber-800",
  Life: "bg-zinc-100 text-zinc-700 dark:bg-zinc-500/10 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800",
  Success:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  Love: "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300 border-rose-200 dark:border-rose-800",
  Courage:
    "bg-orange-100 text-orange-700 dark:bg-orange-500/10 dark:text-orange-300 border-orange-200 dark:border-orange-800",
  Imagination:
    "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  Knowledge:
    "bg-teal-100 text-teal-700 dark:bg-teal-500/10 dark:text-teal-300 border-teal-200 dark:border-teal-800",
  Happiness:
    "bg-lime-100 text-lime-700 dark:bg-lime-500/10 dark:text-lime-300 border-lime-200 dark:border-lime-800",
  Perseverance:
    "bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300 border-blue-200 dark:border-blue-800",
};

const FAVOURITE_QUOTES = "favorite-quote";

export default function WisdomNuggets() {
  const { playSend } = useSound();
  const [copied, setCopied] = useState<number | null>(null);
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; 
  const [showFeaturedQuote, setShowFeaturedQuote] = useState(false);
  const [currentFilter, setCurrentFilter] = useState("All");

  const genres = [
    "All",
    "Favorites",
    "Motivation",
    "Wisdom",
    "Life",
    "Success",
    "Love",
    "Courage",
    "Imagination",
    "Knowledge",
    "Happiness",
    "Perseverance",
  ];

  const updateDisplayedQuotes = () => {
    let filteredQuotes = quotes;
    if (currentFilter === "Favorites") {
      filteredQuotes = quotes.filter((quote) => favorite.has(quote.id));
    } else if (currentFilter !== "All") {
      filteredQuotes = quotes.filter(
        (quote) => quote.category === currentFilter
      );
    }

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
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Removed from favorites");
      } else {
        newFavorite.add(id);
        toast.success("Added to favorites");
      }

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
    }, 8000);
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-500">
      <Navbar currentPage="Life Gems" />
      <Toaster richColors position="top-center" />

      <div className="relative z-10 max-w-7xl mx-auto pt-24 px-4 pb-12">
        {/* Featured Quote - Hero Style */}
        {showFeaturedQuote && (
          <div className="mb-10 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-violet-950 rounded-[2rem] p-8 shadow-2xl shadow-indigo-500/20 text-white overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start justify-between">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    Daily Inspiration
                  </div>

                  <QuoteIcon className="w-10 h-10 mb-4 text-white/20 mx-auto md:mx-0" />

                  <blockquote className="text-xl md:text-2xl font-bold leading-tight mb-6 font-serif tracking-tight">
                    "{featuredQuote.content}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center gap-4">
                    <cite className="text-base font-medium text-indigo-100 not-italic">
                      — {featuredQuote.author}
                    </cite>

                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === currentQuoteIndex % 5
                              ? "w-6 bg-white"
                              : "w-1.5 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <button
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200"
                onClick={() => {
                  playSend();
                  setShowFeaturedQuote(false);
                }}
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        <FilterBar
          currentFilter={currentFilter}
          setCurrentFilter={(filter) => {
            setCurrentFilter(filter);
            setCurrentPage(1);
          }}
          genres={genres}
        />

        {/* Empty State */}
        {currentFilter !== "Favorites" && displayedQuotes.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in">
            <Info className="w-16 h-16 text-indigo-300 mb-4" />
            <p className="text-xl font-bold text-gray-500">
              No quotes found in this category.
            </p>
          </div>
        )}

        {/* Quotes Grid - Compact & Clean */}
        {currentFilter === "Favorites" && displayedQuotes.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
            {displayedQuotes.map((quote, index) => {
              const isFavorite = favorite.has(quote.id);
              const isCopied = copied === quote.id;
              const categoryStyle =
                categoryColors[quote.category] || categoryColors["Wisdom"];

              return (
                <div
                  key={quote.id}
                  className="group relative flex flex-col justify-between 
                             bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                             rounded-2xl p-4 
                             border border-white/40 dark:border-white/5
                             hover:border-indigo-300 dark:hover:border-indigo-500/50
                             shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] 
                             transition-all duration-300 ease-out hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-center mb-3">
                    <span
                      className={`px-2 py-0.5 border rounded-md text-[10px] font-bold uppercase tracking-wide ${categoryStyle}`}
                    >
                      {quote.category}
                    </span>

                    <div className="flex items-center gap-1 text-xs font-semibold text-yellow-600 dark:text-yellow-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span>{quote.popularity}</span>
                    </div>
                  </div>

                  {/* Content - Serif Font for Wisdom */}
                  <div className="mb-4 flex-grow">
                    <QuoteIcon className="w-4 h-4 text-indigo-200 dark:text-indigo-800 mb-1" />
                    <p className="font-serif text-lg font-medium leading-snug text-gray-800 dark:text-gray-100">
                      "{quote.content}"
                    </p>
                    <p className="mt-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wide">
                      — {quote.author}
                    </p>
                  </div>

                  {/* Footer Area */}
                  <div className="mt-auto">
                    {/* Tags - Limited to 3 */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {quote.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-[10px] px-1.5 py-0.5 rounded hover:text-indigo-600 transition-colors cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    {/* Actions Line */}
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                      <span className="text-[10px] font-mono text-gray-300 dark:text-gray-600">
                        #{quote.id}
                      </span>

                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => {
                            playSend();
                            copyToClipboard(quote, setCopied);
                          }}
                          className={`p-1.5 rounded-lg transition-all duration-200 ${
                            isCopied
                              ? "bg-emerald-100 text-emerald-600"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                          }`}
                          title="Copy"
                        >
                          {isCopied ? (
                            <CheckCircle className="w-3.5 h-3.5" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>

                        <button
                          onClick={() => {
                            playSend();
                            shareQuote(quote, setCopied);
                          }}
                          className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
                          title="Share"
                        >
                          <Share2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => {
                            playSend();
                            toggleFavorites(quote.id);
                          }}
                          className={`p-1.5 rounded-lg transition-colors ${
                            isFavorite
                              ? "bg-rose-50 dark:bg-rose-900/20 text-rose-500"
                              : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-rose-500"
                          }`}
                          title="Favorite"
                        >
                          <Heart
                            className={`w-3.5 h-3.5 ${
                              isFavorite ? "fill-current" : ""
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Paginate */}
        {displayedQuotes.length !== 0 &&
          displayedQuotes.length === itemsPerPage && (
            <div className="flex justify-center pb-8">
              <Paginate
                currentPage={currentPage}
                totalItems={currentFilter === "All" ? quotes.length : displayedQuotes.length + ((currentPage - 1) * itemsPerPage)}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
}