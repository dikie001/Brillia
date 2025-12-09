import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { Badge } from "@/components/ui/badge";
import { TONGUETWISTERS_CURRENTPAGE } from "@/constants";
import useSound from "@/hooks/useSound";
import { twisters } from "@/jsons/tongueTwisters";
import type { Twister } from "@/types";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCircle,
  Copy,
  Heart,
  Info,
  LoaderCircle,
  Mic,
  Share2,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

// 🎨 THEME COLORS
const difficultyColors: Record<string, string> = {
  Easy: "bg-gradient-to-r from-emerald-200/40 to-green-200/40 text-emerald-900 dark:border border-emerald-800 dark:from-emerald-900/40 dark:to-green-900/40 dark:text-emerald-300",
  Medium:
    "bg-gradient-to-r from-amber-200/40 to-yellow-200/40 text-amber-900 dark:border border-amber-800 dark:from-amber-900/40 dark:to-yellow-900/40 dark:text-amber-300",
  Hard: "bg-gradient-to-r from-rose-200/40 to-red-200/40 text-rose-900 dark:border border-rose-800 dark:from-rose-900/40 dark:to-red-900/40 dark:text-rose-300",
};

const FAVOURITE_TWISTERS = "favourite-twisters";

const TongueTwisters = () => {
  const [displayedTwisters, setDisplayedTwisters] = useState<Twister[]>([]);
  const twistersRef = useRef<Twister[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState<number | null>(null);
  const { playSend } = useSound();
  const [currentFilter, setCurrentFilter] = useState("All");
  const [totalFiltered, setTotalFiltered] = useState(0);

  const genres = ["All", "Favorites", "Easy", "Medium", "Hard"];

  const PaginationPage = () => {
    let filteredTwisters = twistersRef.current;
    if (currentFilter === "Favorites") {
      filteredTwisters = twistersRef.current.filter((twister) =>
        favorite.has(twister.id)
      );
    } else if (currentFilter !== "All") {
      filteredTwisters = twistersRef.current.filter(
        (twister) => twister.difficulty === currentFilter
      );
    }

    setTotalFiltered(filteredTwisters.length);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filteredTwisters.slice(start, end);
    setDisplayedTwisters(currentItems);
  };

  const FetchInfo = () => {
    setLoading(true);
    twistersRef.current = twisters.filter(
      (drill) => drill.category === "Tongue Twister"
    );
    const lastPage = localStorage.getItem(TONGUETWISTERS_CURRENTPAGE);
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
      PaginationPage();
    }

    const storedFavorites = localStorage.getItem(FAVOURITE_TWISTERS);
    const favoriteTwisters: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteTwisters);

    setLoading(false);
  };

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

      const existingData = localStorage.getItem(FAVOURITE_TWISTERS);
      const existingFavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingFavorites.has(id)) {
        existingFavorites.delete(id);
      } else {
        existingFavorites.add(id);
      }

      localStorage.setItem(
        FAVOURITE_TWISTERS,
        JSON.stringify(Array.from(existingFavorites))
      );
      return newFavorite;
    });
  };

  useEffect(() => {
    FetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(
        TONGUETWISTERS_CURRENTPAGE,
        JSON.stringify(currentPage)
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, currentFilter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-500">
      <Navbar currentPage="Clear Speech" />
      <Toaster richColors position="top-center" />

      <main className="relative z-10 max-w-7xl mx-auto pt-24 px-4 pb-12">
        {/* Loading */}
        {loading && (
          <div className="fixed inset-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <LoaderCircle className="w-12 h-12 animate-spin text-indigo-500 mb-4" />
            <p className="font-medium text-lg text-indigo-900 dark:text-indigo-200 animate-pulse">
              Loading twisters...
            </p>
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

        {/* Empty State / Ran Out */}
        {(currentPage - 1) * itemsPerPage >= totalFiltered &&
          !loading &&
          totalFiltered > 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-[2rem] mb-6 rotate-3 shadow-xl">
                <Info className="w-16 h-16 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-black text-indigo-900 dark:text-indigo-100 tracking-tight mb-2">
                All Twisted Out!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                You have viewed all the twisters on this page.
              </p>
              <button
                onClick={() => {
                  playSend();
                  setCurrentPage(1);
                }}
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-transform active:scale-95 shadow-lg shadow-indigo-500/25"
              >
                Start Over
              </button>
            </div>
          )}

        {/* No Favorites State */}
        {currentFilter === "Favorites" && displayedTwisters.length === 0 && (
          <NoFavorites />
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {displayedTwisters.map((twister, index) => {
            const isFavorite = favorite.has(twister.id);
            const isCopied = copied === twister.id;
            const diffColor =
              difficultyColors[twister.difficulty] || difficultyColors.Medium;

            return (
              <div
                key={twister.id}
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
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${diffColor}`}
                  >
                    {twister.difficulty}
                  </span>
                  <div className="flex items-center gap-1 bg-indigo-50 dark:bg-indigo-900/20 px-2 py-1 rounded-lg border border-indigo-100 dark:border-indigo-800/50">
                    <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400">
                      #{twister.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow mb-4">
                  <p className="text-gray-800 dark:text-gray-100 font-bold text-lg leading-snug">
                    "{twister.text}"
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {twister.tags.slice(0, 3).map((tag) => (
                    <Badge
                      variant="secondary"
                      key={tag}
                      className="bg-gray-100 dark:bg-gray-900 text-gray-500 dark:text-gray-400 text-[10px] px-2 h-5 hover:bg-indigo-50 hover:text-indigo-600 transition-colors"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions Footer */}
                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <Mic className="w-3 h-3" />
                    <span>Practice</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => {
                        playSend();
                        copyToClipboard(twister, setCopied);
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
                        shareQuote(twister, setCopied);
                      }}
                      className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-400 hover:text-indigo-600 transition-colors"
                      title="Share"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => {
                        playSend();
                        toggleFavorites(twister.id);
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

        {/* Bottom Paginate */}
        {displayedTwisters.length !== 0 &&
          displayedTwisters.length === itemsPerPage && (
            <div className="flex justify-center pb-8">
              <Paginate
                currentPage={currentPage}
                totalItems={totalFiltered}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
      </main>
      <Footer />
    </div>
  );
};

export default TongueTwisters;
