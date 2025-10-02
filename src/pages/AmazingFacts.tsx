import Navbar from "@/components/app/Navbar";
import { FACTS_CURRENTPAGE } from "@/constants";
import { facts } from "@/jsons/amazingFacts";
import type { Fact } from "@/types";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  Brain,
  CheckCircle,
  Copy,
  Heart,
  LoaderCircle,
  Share2,
  Star,
  TrendingUp,
  X
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import Paginate from "../components/app/paginations";

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



const FAVOURITE_FACTS = "favourite-facts";

export default function FactFrenzy() {
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [displayedFacts, setDisplayedFacts] = useState<Fact[]>([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);
  const [showFactOfDay, setShowFactOfDay] = useState(true);
  const factsRef = useRef<Fact[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [copied, setCopied] = useState<number | null>(null);

  // Navigate to the next page in pagination
  const PaginationPage = () => {
    const factsLength = facts ? facts.length : 0;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = factsRef.current.slice(start, end);
    console.log(currentItems);
    setDisplayedFacts(currentItems);
    if (end > factsLength) {
      toast.info("Ran out of facts, restarting from the top");
      setCurrentPage(1);
      localStorage.removeItem(FACTS_CURRENTPAGE);
    }
  };

  // fetch current page info from storage
  const FetchInfo = () => {
    setLoading(true);
    factsRef.current = facts;
    const lastPage = localStorage.getItem(FACTS_CURRENTPAGE);
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
      PaginationPage();
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchInfo();
  

    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem(FAVOURITE_FACTS);
    const favoriteFacts: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteFacts);
  }, []);

  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(FACTS_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage]);



  // Toggle favorites
  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Fact removed from favorites");
      } else {
        newFavorite.add(id);
        toast.success("Fact added to favorites");
      }

      const existingData = localStorage.getItem(FAVOURITE_FACTS);
      const existingFavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingFavorites.has(id)) {
        existingFavorites.delete(id);
      } else {
        existingFavorites.add(id);
      }

      localStorage.setItem(
        FAVOURITE_FACTS,
        JSON.stringify(Array.from(existingFavorites))
      );
      return newFavorite;
    });
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
      <div className="relative mt-18 z-10 max-w-7xl mx-auto">
        <Navbar currentPage="Amazing Facts" />
        <header className="text-center mb-6"></header>

        {/* Loading */}
        {loading ||
          (displayedFacts.length === 0 && (
            <div className="flex flex-col absolute inset-0 bg-white/80 dark:bg-transparent h-screen items-center justify-center w-full  ">
              <LoaderCircle className="w-10 h-10 animate-spin text-indigo-500" />
              <p className="font-medium">Loading facts...</p>
            </div>
          ))}

        {showFactOfDay && (
          <div className="mb-6  relative">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="absolute top-4 right-4">
                <button
                  onClick={() => setShowFactOfDay(false)}
                  className="text-white/80 hover:text-white text-2xl"
                >
                  <X size={20} />
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
                    <span className="text-xs opacity-80">
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

        {/* Top Paginate */}
        {displayedFacts.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            totalItems={facts.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        <div className="grid gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-6">
          {displayedFacts.map((fact, index) => {

            return (
              <div
                key={fact.id}
                className="group relative bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-xl p-5 hover:shadow-2xl transition-all duration-300 hover:scale-103 border border-white/30 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        categoryColors[fact.category]
                      }`}
                    >
                      {fact.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-2.5">
                  {fact.fact}
                </p>

                <div className="flex flex-wrap gap-2 mb-2">
                  {fact.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="text-white bg-gradient-to-r from-indigo-600 to-indigo-900 flex justify-center items-center font-medium absolute -top-4 -right-2  shadow-lg w-8 h-8 rounded-full ">
                  {fact.id}
                </div>

                <div className="flex items-center justify-between w-full border-t mt-4 mb-4">
                  {/* Share and copy btn */}
                  <div className="gap-2 flex mt-1">
                    <button
                      onClick={() => copyToClipboard(fact, setCopied)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        copied === fact.id
                          ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                          : "hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                      }`}
                      title={copied === fact.id ? "Copied!" : "Copy fact"}
                    >
                      {copied === fact.id ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={() => shareQuote(fact, setCopied)}
                      className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                      title="Share fact"
                    >
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Like button */}
                  <div className="mt-1">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorites(fact.id);
                      }}
                      className={`p-2 rounded-full transition-all ${
                        favorite.has(fact.id)
                          ? "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 scale-110"
                          : "text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                      }`}
                      title={
                        favorite.has(fact.id)
                          ? "Remove from favorites"
                          : "Add to favorites"
                      }
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          favorite.has(fact.id) ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="mt-2 absolute bottom-4 left-4 text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  Source: {fact.source}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Paginate */}
        {displayedFacts.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            totalItems={facts.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Learning Never Stops
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-3xl p-5">
              <Brain className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Mind Expanding</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Every fact opens new neural pathways and expands your
                understanding of the world.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-3xl p-5">
              <CheckCircle className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Verified Sources</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All facts are carefully researched and sourced from reputable
                institutions.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-3xl p-5">
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
      <Toaster richColors position="top-center" />
    </div>
  );
}
