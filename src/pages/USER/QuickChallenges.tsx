/* eslint-disable react-hooks/exhaustive-deps */
import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { TEASERS_CURRENTPAGE } from "@/constants";
import useSound from "@/hooks/useSound";
import brainTeasers from "@/jsons/brainTeaser";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCircle,
  Copy,
  EyeOff,
  Heart,
  Info,
  LoaderCircle,
  Maximize2,
  Share2,
  Lightbulb,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

export type Teaser = {
  id: number;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Logic" | "Riddle" | "Math" | "Lateral";
};

const FAVOURITE_TEASERS = "favourite-teasers";
const MAX_CHARS = 85;

const categoryColors: Record<string, string> = {
  Logic:
    "bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300 border-sky-200 dark:border-sky-800",
  Riddle:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
  Math: "bg-violet-100 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300 border-violet-200 dark:border-violet-800",
  Lateral:
    "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300 border-rose-200 dark:border-rose-800",
};

export default function BrainTeasersPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teasers, setTeasers] = useState<Teaser[]>([]);
  const teasersRef = useRef<Teaser[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [copied, setCopied] = useState<number | null>(null);
  const { playSend } = useSound();
  const [currentFilter, setCurrentFilter] = useState("All");
  const [totalFiltered, setTotalFiltered] = useState(0);

  const [selectedTeaser, setSelectedTeaser] = useState<Teaser | null>(null);

  const genres = [
    "All",
    "Favorites",
    ...new Set(brainTeasers.map((t) => t.category)),
  ];

  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(TEASERS_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage, currentFilter]);

  useEffect(() => {
    FetchInfo();
  }, []);

  const PaginationPage = () => {
    let filteredTeasers = teasersRef.current;
    if (currentFilter === "Favorites") {
      filteredTeasers = teasersRef.current.filter((teaser) =>
        favorite.has(teaser.id)
      );
    } else if (currentFilter !== "All") {
      filteredTeasers = teasersRef.current.filter(
        (teaser) => teaser.category === currentFilter
      );
    }

    setTotalFiltered(filteredTeasers.length);

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = filteredTeasers.slice(start, end);

    setTeasers(currentItems);
  };

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

  const handleRequestMoreTeasers = async () => {
    toast.info("Feature still under development");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-500">
      <Navbar currentPage="Quick Challenges" />
      <Toaster richColors position="top-center" />

      <main className="relative z-10 max-w-7xl mx-auto pt-24 px-4 pb-12">
        {loading && (
          <div className="fixed inset-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <LoaderCircle className="w-12 h-12 animate-spin text-indigo-500 mb-4" />
            <p className="font-medium text-lg text-indigo-900 dark:text-indigo-200 animate-pulse">
              Summoning teasers...
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

        {(currentPage - 1) * itemsPerPage >= totalFiltered &&
          !loading &&
          totalFiltered > 0 && (
            <div className="flex flex-col items-center justify-center py-16 animate-in fade-in zoom-in duration-500 text-center">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-6 rounded-[2rem] mb-6 rotate-3 shadow-xl">
                <Info className="w-12 h-12 text-indigo-400" />
              </div>
              <h2 className="text-2xl font-black text-indigo-900 dark:text-indigo-100 tracking-tight mb-2">
                All Caught Up!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6 text-sm">
                You have viewed all the teasers! Check back later for more
                puzzles.
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    playSend();
                    setCurrentPage(1);
                    localStorage.setItem(
                      TEASERS_CURRENTPAGE,
                      JSON.stringify(1)
                    );
                  }}
                  variant="outline"
                  className="rounded-full border-indigo-200 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-900/50 h-10 px-6"
                >
                  Start Over
                </Button>
                <Button
                  className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white rounded-full h-10 px-6 shadow-lg shadow-indigo-500/25 transition-transform active:scale-95"
                  onClick={() => {
                    playSend();
                    handleRequestMoreTeasers();
                  }}
                >
                  Request More
                </Button>
              </div>
            </div>
          )}

        {/* Grid of Teasers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-10">
          {teasers.map((teaser, index) => {
            const isRevealed = revealed.has(teaser.id);
            const isCopied = copied === teaser.id;
            const isFavorite = favorite.has(teaser.id);
            const categoryStyle =
              categoryColors[teaser.category] || categoryColors["Logic"];

            const isLong = teaser.question.length > MAX_CHARS;
            const displayQuestion = isLong
              ? teaser.question.slice(0, MAX_CHARS) + "..."
              : teaser.question;

            return (
              <div
                onClick={() => setSelectedTeaser(teaser)}
                key={teaser.id}
                className="group relative flex flex-col justify-between cursor-pointer
                           bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                           rounded-2xl p-4 
                           border border-white/40 dark:border-white/5
                           hover:border-indigo-300 dark:hover:border-indigo-500/50
                           shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] 
                           transition-all duration-300 ease-out hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Header Tags */}
                <div className="flex justify-between items-center mb-3">
                  <span
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide border ${categoryStyle}`}
                  >
                    {teaser.category}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500">
                    #{teaser.id}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-grow mb-4">
                  <h3 className="text-gray-800 dark:text-gray-100 font-bold text-base leading-snug group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {displayQuestion}
                  </h3>
                  {isLong && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedTeaser(teaser);
                      }}
                      className="mt-1 text-[11px] font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 flex items-center gap-1"
                    >
                      Read More <Maximize2 className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Reveal Section & Footer */}
                <div className="mt-auto pt-2 border-t border-gray-100 dark:border-gray-700/50">
                  <div className="flex items-start justify-between gap-2">
                    {!isRevealed ? (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSend();
                          toggleReveal(teaser.id);
                        }}
                        className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all shadow-md shadow-indigo-500/20"
                      >
                        <Lightbulb className="w-3.5 h-3.5" />
                        Reveal
                      </button>
                    ) : (
                      // UPDATED REVEAL SECTION
                      <div className="flex-1 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-2 relative animate-in fade-in duration-200">
                        <p className="text-xs font-medium text-indigo-900 dark:text-indigo-200 pr-5 leading-relaxed">
                          {teaser.answer}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReveal(teaser.id);
                          }}
                          className="absolute top-1.5 right-1.5 text-indigo-300 hover:text-indigo-600 dark:text-indigo-500 dark:hover:text-indigo-300 transition-colors"
                          title="Hide"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex items-center gap-1 h-8 self-end">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSend();
                          copyToClipboard(teaser, setCopied);
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isCopied
                            ? "bg-emerald-100 text-emerald-600"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400"
                        }`}
                      >
                        {isCopied ? (
                          <CheckCircle className="w-4 h-4" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          playSend();
                          toggleFavorites(teaser.id);
                        }}
                        className={`p-1.5 rounded-lg transition-colors ${
                          isFavorite
                            ? "bg-rose-50 dark:bg-rose-900/20 text-rose-500"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-400 hover:text-rose-500"
                        }`}
                      >
                        <Heart
                          className={`w-4 h-4 ${
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

        {teasers.length !== 0 && teasers.length === itemsPerPage && (
          <div className="flex justify-center pb-8">
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              teasers={teasers}
              totalItems={totalFiltered}
            />
          </div>
        )}

        {currentFilter === "Favorites" && teasers.length === 0 && (
          <NoFavorites />
        )}
      </main>

      {/* FULL TEASER MODAL */}
      <Dialog
        open={!!selectedTeaser}
        onOpenChange={(open) => !open && setSelectedTeaser(null)}
      >
        <DialogContent className="sm:max-w-lg bg-white dark:bg-gray-900 border-indigo-100 dark:border-indigo-900">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-indigo-900 dark:text-indigo-100">
              <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-xs px-2 py-1 rounded-md">
                {selectedTeaser?.category}
              </span>
              Teaser #{selectedTeaser?.id}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Full teaser question and answer
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 pt-4">
            <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-700">
              <p className="text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                {selectedTeaser?.question}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-indigo-500 uppercase tracking-wider">
                Answer
              </h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed bg-indigo-50/50 dark:bg-indigo-900/20 p-4 rounded-xl">
                {selectedTeaser?.answer}
              </p>
            </div>

            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  selectedTeaser && copyToClipboard(selectedTeaser, setCopied)
                }
              >
                <Copy className="w-4 h-4 mr-2" /> Copy
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  selectedTeaser && shareQuote(selectedTeaser, setCopied)
                }
              >
                <Share2 className="w-4 h-4 mr-2" /> Share
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}