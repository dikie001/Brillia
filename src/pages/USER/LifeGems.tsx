/* eslint-disable react-hooks/exhaustive-deps */
import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import { Badge } from "@/components/ui/badge";
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

const categoryColors: Record<string, string> = {
  Motivation:
    "bg-gradient-to-r from-sky-200/40 to-blue-200/40 text-sky-900 dark:border border-sky-800 dark:from-sky-900/40 dark:to-blue-900/40 dark:text-sky-300",
  Wisdom:
    "bg-gradient-to-r from-amber-200/40 to-yellow-200/40 text-amber-900 dark:border border-amber-800 dark:from-amber-900/40 dark:to-yellow-900/40 dark:text-amber-300",
  Life: "bg-gradient-to-r from-zinc-200/40 to-stone-200/40 text-zinc-900 dark:border border-zinc-800 dark:from-zinc-900/40 dark:to-stone-900/40 dark:text-zinc-300",
  Success:
    "bg-gradient-to-r from-emerald-200/40 to-green-200/40 text-emerald-900 dark:border border-emerald-800 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300",
  Love: "bg-gradient-to-r from-rose-200/40 to-pink-200/40 text-rose-900 dark:border border-rose-800 dark:from-rose-900/40 dark:to-pink-900/40 dark:text-rose-300",
  Courage:
    "bg-gradient-to-r from-orange-200/40 to-red-200/40 text-orange-900 dark:border border-orange-800 dark:from-orange-900/40 dark:to-red-900/40 dark:text-orange-300",
  Imagination:
    "bg-gradient-to-r from-violet-200/40 to-fuchsia-200/40 text-violet-900 dark:border border-violet-800 dark:from-violet-900/40 dark:to-fuchsia-900/40 dark:text-fuchsia-300",
  Knowledge:
    "bg-gradient-to-r from-teal-200/40 to-cyan-200/40 text-teal-900 dark:border border-teal-800 dark:from-teal-900/40 dark:to-cyan-900/40 dark:text-teal-300",
  Happiness:
    "bg-gradient-to-r from-lime-200/40 to-green-200/40 text-lime-900 dark:border border-lime-800 dark:from-lime-900/40 dark:to-green-900/40 dark:text-lime-300",
  Perseverance:
    "bg-gradient-to-r from-blue-200/40 to-indigo-200/40 text-blue-900 dark:border border-blue-800 dark:from-blue-900/40 dark:to-indigo-900/40 dark:text-blue-300",
};

const FAVOURITE_QUOTES = "favorite-quote";

export default function WisdomNuggets() {
  const { playSend } = useSound();
  const [copied, setCopied] = useState<number | null>(null);
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([]);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
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
    }, 8000); // Slowed down slightly for readability
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
            <div className="relative bg-gradient-to-br from-indigo-600 to-violet-700 dark:from-indigo-900 dark:to-violet-950 rounded-[2.5rem] p-8 md:p-12 shadow-2xl shadow-indigo-500/20 text-white overflow-hidden border border-white/10">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

              <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-wider mb-6">
                    <Sparkles className="w-3 h-3 text-yellow-300" />
                    Daily Inspiration
                  </div>

                  <QuoteIcon className="w-12 h-12 mb-6 text-white/20 mx-auto md:mx-0" />

                  <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6 font-serif tracking-tight">
                    "{featuredQuote.content}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <cite className="text-lg font-medium text-indigo-100 not-italic">
                      — {featuredQuote.author}
                    </cite>

                    {/* Progress Dots */}
                    <div className="flex gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`h-1.5 rounded-full transition-all duration-500 ${
                            i === currentQuoteIndex % 5
                              ? "w-8 bg-white"
                              : "w-1.5 bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <button
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all duration-200"
                onClick={() => {
                  playSend();
                  setShowFeaturedQuote(false);
                }}
              >
                <X size={20} />
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

        {/* Quotes Grid */}
        {currentFilter === "Favorites" && displayedQuotes.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
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
                             rounded-3xl p-5 
                             border border-white/40 dark:border-white/5
                             hover:border-indigo-300 dark:hover:border-indigo-500/50
                             shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] 
                             transition-all duration-300 ease-out hover:-translate-y-1.5"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${categoryStyle}`}
                    >
                      {quote.category}
                    </span>

                    {/* Popularity Star */}
                    <div className="flex items-center gap-1 bg-yellow-50 dark:bg-yellow-900/20 px-2 py-1 rounded-lg border border-yellow-100 dark:border-yellow-900/50">
                      <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-[10px] font-bold text-yellow-700 dark:text-yellow-500">
                        {quote.popularity}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mb-4 flex-grow">
                    <QuoteIcon className="w-6 h-6 text-indigo-200 dark:text-indigo-800 mb-2" />
                    <blockquote className="text-lg font-bold leading-relaxed text-gray-800 dark:text-gray-100 mb-3">
                      "{quote.content}"
                    </blockquote>
                    <div className="w-8 h-1 bg-indigo-100 dark:bg-gray-700 rounded-full mb-3" />
                    <cite className="text-sm font-semibold text-gray-500 dark:text-gray-400 not-italic block">
                      — {quote.author}
                    </cite>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {quote.tags.map((tag) => (
                      <Badge
                        variant="secondary"
                        key={tag}
                        className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-[10px] px-2 h-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                      >
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Footer / Actions */}
                  <div className="pt-3 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-300 dark:text-gray-600">
                      #{quote.id}
                    </span>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => {
                          playSend();
                          copyToClipboard(quote, setCopied);
                        }}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isCopied
                            ? "bg-emerald-100 text-emerald-600"
                            : "hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-400 hover:text-indigo-600"
                        }`}
                        title="Copy"
                      >
                        {isCopied ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={() => {
                          playSend();
                          shareQuote(quote, setCopied);
                        }}
                        className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-400 hover:text-indigo-600 transition-colors"
                        title="Share"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => {
                          playSend();
                          toggleFavorites(quote.id);
                        }}
                        className="group/btn p-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/20 text-gray-400 hover:text-rose-500 transition-colors"
                        title="Favorite"
                      >
                        <Heart
                          className={`w-4 h-4 transition-transform group-active/btn:scale-75 ${
                            isFavorite ? "fill-rose-500 text-rose-500" : ""
                          }`}
                        />
                      </button>
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
                totalItems={quotes.length}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
      </div>
      <Footer />
    </div>
  );
}
