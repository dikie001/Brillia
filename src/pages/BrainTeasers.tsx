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
  DialogHeader, // Added this
  DialogTitle,
} from "@/components/ui/dialog"; // Fixed: Changed from @radix-ui... to @/components/ui...
import { TEASERS_CURRENTPAGE } from "@/constants";
import useSound from "@/hooks/useSound";
import brainTeasers from "@/jsons/brainTeaser";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCircle,
  Copy,
  Eye,
  EyeOff,
  Heart,
  Info,
  LoaderCircle,
  Maximize2,
  Share2,
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
const MAX_CHARS = 100;

const categoryColors: Record<string, string> = {
  Logic:
    "bg-gradient-to-r from-sky-200/40 to-blue-200/40 text-sky-900 dark:border border-sky-800 dark:from-sky-900/40 dark:to-blue-900/40 dark:text-sky-300",
  Riddle:
    "bg-gradient-to-r from-emerald-200/40 to-teal-200/40 text-emerald-900 dark:border border-emerald-800 dark:from-emerald-900/40 dark:to-teal-900/40 dark:text-emerald-300",
  Math: "bg-gradient-to-r from-violet-200/40 to-fuchsia-200/40 text-violet-900 dark:border border-violet-800 dark:from-violet-900/40 dark:to-fuchsia-900/40 dark:text-fuchsia-300",
  Lateral:
    "bg-gradient-to-r from-rose-200/40 to-red-200/40 text-rose-900 dark:border border-rose-800 dark:from-rose-900/40 dark:to-red-900/40 dark:text-rose-300",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, currentFilter]);

  useEffect(() => {
    FetchInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Navbar currentPage="Brain Teasers" />
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
            <div className="flex flex-col items-center justify-center py-24 animate-in fade-in zoom-in duration-500 text-center">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-[2rem] mb-6 rotate-3 shadow-xl">
                <Info className="w-16 h-16 text-indigo-400" />
              </div>
              <h2 className="text-3xl font-black text-indigo-900 dark:text-indigo-100 tracking-tight mb-2">
                All Caught Up!
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
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
                  className="rounded-full border-indigo-200 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-900/50 h-12 px-6"
                >
                  Start Over
                </Button>
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-12 px-6 shadow-lg shadow-indigo-500/25 transition-transform active:scale-95"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
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
                key={teaser.id}
                className="group relative flex flex-col justify-between 
                           bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                           rounded-3xl p-5 
                           border border-white/40 dark:border-white/5
                           hover:border-indigo-300 dark:hover:border-indigo-500/50
                           shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] 
                           transition-all duration-300 ease-out hover:-translate-y-1.5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Header Tags */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${categoryStyle}`}
                  >
                    {teaser.category}
                  </span>
                  <span className="text-[10px] font-bold text-indigo-400 dark:text-indigo-500/50 bg-indigo-50 dark:bg-indigo-950 px-2 py-1 rounded-lg border border-indigo-100 dark:border-indigo-900">
                    #{teaser.id}
                  </span>
                </div>

                {/* Content with Truncation */}
                <div className="flex-grow mb-4">
                  <p className="text-gray-800 dark:text-gray-100 font-bold text-lg leading-snug">
                    {displayQuestion}
                  </p>
                  {isLong && (
                    <button
                      onClick={() => setSelectedTeaser(teaser)}
                      className="mt-2 text-xs font-bold text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 flex items-center gap-1"
                    >
                      Read More <Maximize2 className="w-3 h-3" />
                    </button>
                  )}
                </div>

                {/* Reveal Section */}
                <div className="mt-auto">
                  {!isRevealed ? (
                    <button
                      onClick={() => {
                        playSend();
                        toggleReveal(teaser.id);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-500/20"
                    >
                      <Eye className="w-4 h-4" /> Reveal Answer
                    </button>
                  ) : (
                    <div className="relative animate-in fade-in zoom-in-95 duration-300">
                      <div className="bg-indigo-50/80 dark:bg-indigo-900/20 p-4 rounded-2xl border border-indigo-100 dark:border-indigo-800/30">
                        <p className="text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed pr-6">
                          <span className="text-indigo-600 dark:text-indigo-400 font-black block text-xs uppercase tracking-wide mb-1">
                            Solution
                          </span>
                          {teaser.answer}
                        </p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleReveal(teaser.id);
                          }}
                          className="absolute top-2 right-2 p-1.5 rounded-full text-gray-400 hover:text-indigo-600 hover:bg-white dark:hover:bg-indigo-950 transition-colors"
                          title="Hide solution"
                        >
                          <EyeOff className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer / Actions */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-end gap-2">
                  <button
                    onClick={() => {
                      playSend();
                      copyToClipboard(teaser, setCopied);
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
                      shareQuote(teaser, setCopied);
                    }}
                    className="p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-400 hover:text-indigo-600 transition-colors"
                    title="Share"
                  >
                    <Share2 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      playSend();
                      toggleFavorites(teaser.id);
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
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}