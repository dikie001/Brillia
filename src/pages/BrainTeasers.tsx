import FilterBar from "@/components/app/FilterBar";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import { TEASERS_CURRENTPAGE } from "@/constants";
import brainTeasers from "@/jsons/brainTeaser";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCircle,
  Copy,
  Eye,
  EyeOff,
  Heart,
  LoaderCircle,
  Share2
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import Paginate from "../components/app/paginations";

export type Teaser = {
  id: number;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Logic" | "Riddle" | "Math" | "Lateral";
};

const FAVOURITE_TEASERS = "favourite-teasers";

const categoryColors = {
  Logic: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Riddle: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Math: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Lateral: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

export default function BrainTeasersPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teasers, setTeasers] = useState<Teaser[]>([]);
  const teasersRef = useRef<Teaser[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState<number | null>(null);

  const [currentFilter, setCurrentFilter] = useState("All");

  const onFavoriteClick = () => {
    setCurrentFilter(currentFilter === "Favorites" ? "All" : "Favorites");
  };

  const genres = ["All", ...new Set(brainTeasers.map((t) => t.category))];

  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(
        "brain-teaser-currentPage",
        JSON.stringify(currentPage)
      );
    }
  }, [currentPage, currentFilter]);

  useEffect(() => {
    FetchInfo();
  }, []);

  // Navigate to the next page in pagination
  const PaginationPage = () => {
    let filteredTeasers = teasersRef.current;
    if (currentFilter === "Favorites") {
      filteredTeasers = teasersRef.current.filter(teaser => favorite.has(teaser.id));
    } else if (currentFilter !== "All") {
      filteredTeasers = teasersRef.current.filter(teaser => teaser.category === currentFilter);
    }

    const teasersLength = filteredTeasers.length;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filteredTeasers.slice(start, end);
    console.log(end, teasersLength);

    setTeasers(currentItems);
    if (end > teasersLength) {
      setCurrentPage(1);
      localStorage.removeItem(TEASERS_CURRENTPAGE);
      toast.info("Out of teasers, restarting from the top");
    }
  };

  // fetch current page info from storage
  const FetchInfo = () => {
    setLoading(true);
    teasersRef.current = brainTeasers;

    const lastPage = localStorage.getItem(TEASERS_CURRENTPAGE);
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
      PaginationPage();
    }

    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem(FAVOURITE_TEASERS);
    const favoriteTeasers: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteTeasers);

    setLoading(false);
  };

  const toggleReveal = (id: number) => {
    const newRevealed = new Set(revealed);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealed(newRevealed);
  };

  // Toggle favorites
  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Teaser removed from favorites");
      } else {
        newFavorite.add(id);
        toast.success("Teaser added to favorites");
      }

      const existingData = localStorage.getItem(FAVOURITE_TEASERS);
      const existingFavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingFavorites.has(id)) {
        existingFavorites.delete(id);
      } else {
        existingFavorites.add(id);
      }

      localStorage.setItem(
        FAVOURITE_TEASERS,
        JSON.stringify(Array.from(existingFavorites))
      );
      return newFavorite;
    });
  };

  return (
    <div className="min-h-screen p-2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Navbar currentPage="Brain Teasers" />

      <div className="relative z-10 max-w-7xl mx-auto pt-18">
        {/* Header */}
        <header className="text-center mb-6 mt-4"></header>

        <FilterBar
          currentFilter={currentFilter}
          setFilter={setCurrentFilter}
          onFavoriteClick={onFavoriteClick}
          genres={genres}
        />

        {/* Top Paginate */}
        {teasers.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            teasers={teasers}
            totalItems={brainTeasers.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Loading */}
        {loading ||
          (teasers.length === 0 && (
            <div className="flex flex-col absolute inset-0 bg-white/80 dark:bg-transparent h-screen items-center justify-center w-full  ">
              <LoaderCircle className="w-10 h-10 animate-spin text-indigo-500" />
              <p className="font-medium">Loading teasers...</p>
            </div>
          ))}

        {/* No favorites */}
        {currentFilter === "Favorites" && teasers.length === 0 && <NoFavorites />}

        {/* Grid of teasers */}
        <div className="grid gap-4 mb-6  sm:grid-cols-2 lg:grid-cols-3">
          {teasers.map((teaser) => {
            const isRevealed = revealed.has(teaser.id);

            return (
              <div
                key={teaser.id}
                className="teaser-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg p-4 flex flex-col justify-between border border-white/20 dark:border-gray-700/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          categoryColors[
                            teaser.category as keyof typeof categoryColors
                          ]
                        }`}
                      >
                        {teaser.category}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Puzzle #{teaser.id}
                  </h2>

                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-4 rounded-2xl mb-4">
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {teaser.question}
                    </p>
                  </div>
                </div>

                <div className="text-white bg-gradient-to-r from-indigo-600 to-indigo-900 flex justify-center items-center font-medium absolute -top-4 -right-2  shadow-lg w-8 h-8 rounded-full ">
                  {teaser.id}
                </div>

                <div className="mt-2  border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between w-full mb-2 mt-1">
                    <div>
                      <button
                        onClick={() => copyToClipboard(teaser, setCopied)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          copied === teaser.id
                            ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400"
                            : "hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                        }`}
                        title={copied === teaser.id ? "Copied!" : "Copy teaser"}
                      >
                        {copied === teaser.id ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button>
                      <button
                        onClick={() => shareQuote(teaser, setCopied)}
                        className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                        title="Share teaser"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    {/* Like button */}
                    <div>
                      <button
                        onClick={() => toggleFavorites(teaser.id)}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          favorite.has(teaser.id)
                            ? "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 scale-110"
                            : "text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
                        }`}
                        title={
                          favorite.has(teaser.id)
                            ? "Remove from favorites"
                            : "Add to favorites"
                        }
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorite.has(teaser.id) ? "fill-current" : ""
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleReveal(teaser.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 ease-in-out ${
                      isRevealed
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-indigo-700 to-indigo-600 text-white shadow-lg"
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
                    <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-2xl border-l-4 border-indigo-400">
                      <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">
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

        {/* Bottom Paginate */}
        {teasers.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            teasers={teasers}
            totalItems={brainTeasers.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* {teasers.length === 0 && (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No teasers available.
            </p>
          </div>
        )} */}
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
}
