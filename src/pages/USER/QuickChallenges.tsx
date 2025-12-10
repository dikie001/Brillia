/* eslint-disable react-hooks/exhaustive-deps */
import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";
import { TEASERS_CURRENTPAGE } from "@/constants";
import useSound from "@/hooks/useSound";
import brainTeasers from "@/jsons/brainTeaser";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  Check,
  Copy,
  Eye,
  EyeOff,
  Heart,
  Info,
  LoaderCircle,
  Share2,
  Sparkles,
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
const MAX_CHARS = 100; // Increased slightly for better reading

// Softer, more pastel colors to reduce eye strain
const categoryColors: Record<string, string> = {
  Logic: "bg-sky-50 text-sky-600 dark:bg-sky-900/20 dark:text-sky-400 border-sky-100 dark:border-sky-800",
  Riddle: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-100 dark:border-emerald-800",
  Math: "bg-violet-50 text-violet-600 dark:bg-violet-900/20 dark:text-violet-400 border-violet-100 dark:border-violet-800",
  Lateral: "bg-rose-50 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400 border-rose-100 dark:border-rose-800",
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 relative transition-colors duration-500">
      <Navbar currentPage="Quick Challenges" />
      <Toaster richColors position="top-center" />

      <main className="relative z-10 max-w-7xl mx-auto pt-24 px-4 pb-12">
        {loading && (
          <div className="fixed inset-0 bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <LoaderCircle className="w-10 h-10 animate-spin text-indigo-500 mb-4" />
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
        {(currentPage - 1) * itemsPerPage >= totalFiltered &&
          !loading &&
          totalFiltered > 0 && (
            <div className="flex flex-col items-center justify-center py-16 animate-in fade-in zoom-in duration-500 text-center">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-lg mb-6 rotate-3">
                <Info className="w-10 h-10 text-indigo-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                All Caught Up!
              </h2>
              <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-8 text-sm">
                You have viewed all the teasers! Check back later for more.
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
                  className="rounded-full"
                >
                  Start Over
                </Button>
                <Button
                  className="rounded-full bg-indigo-600 hover:bg-indigo-700 text-white"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
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
                onClick={() => setSelectedTeaser(teaser)}
                className="group relative flex flex-col justify-between cursor-pointer
                           bg-white dark:bg-slate-900 
                           rounded-2xl p-5
                           border border-slate-200 dark:border-slate-800
                           hover:border-indigo-300 dark:hover:border-indigo-600
                           shadow-sm hover:shadow-xl hover:shadow-indigo-500/10
                           transition-all duration-300 ease-out hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Header: Category & Actions */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${categoryStyle}`}
                  >
                    {teaser.category}
                  </span>

                  {/* Top Right Actions - Clean Separation */}
                  <div className="flex items-center gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        playSend();
                        copyToClipboard(teaser, setCopied);
                      }}
                      className="p-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-indigo-600 transition-colors"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-500" />
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
                      className="p-1.5 rounded-full hover:bg-rose-50 dark:hover:bg-rose-950/30 text-slate-400 hover:text-rose-500 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          isFavorite ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>

                {/* Question Content */}
                <div className="flex-grow mb-6 space-y-2">
                  <h3 className="text-slate-800 dark:text-slate-100 font-semibold text-[15px] leading-relaxed">
                    {displayQuestion}
                  </h3>
                  {isLong && (
                    <span className="text-xs font-medium text-indigo-500 inline-flex items-center gap-1">
                      Read full <Sparkles className="w-3 h-3" />
                    </span>
                  )}
                </div>

                {/* Footer / Reveal Section */}
                <div className="mt-auto">
                  {!isRevealed ? (
                    <Button
                      variant="ghost"
                      onClick={(e) => {
                        e.stopPropagation();
                        playSend();
                        toggleReveal(teaser.id);
                      }}
                      className="w-full h-10 rounded-xl bg-slate-50 hover:bg-indigo-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-300 font-medium text-sm transition-all group-hover:bg-slate-100 dark:group-hover:bg-slate-800"
                    >
                      <Eye className="w-4 h-4 mr-2 opacity-70" />
                      Show Answer
                    </Button>
                  ) : (
                    <div className="relative animate-in fade-in slide-in-from-bottom-2 duration-300">
                      <div className="bg-indigo-50 dark:bg-indigo-950/30 rounded-xl p-3 pr-8 border border-indigo-100 dark:border-indigo-900/50">
                        <p className="text-sm font-medium text-indigo-900 dark:text-indigo-200">
                          {teaser.answer}
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleReveal(teaser.id);
                        }}
                        className="absolute top-2 right-2 p-1 text-indigo-300 hover:text-indigo-500 dark:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <EyeOff className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
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
        <DialogContent className="sm:max-w-lg p-0 overflow-hidden bg-white dark:bg-slate-900 border-none shadow-2xl">
          <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />
          
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                selectedTeaser ? categoryColors[selectedTeaser.category] : ""
              }`}>
                {selectedTeaser?.category}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                #{selectedTeaser?.id}
              </span>
            </div>

            <div className="space-y-8">
              <p className="text-lg md:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
                {selectedTeaser?.question}
              </p>

              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg opacity-10 blur"></div>
                <div className="relative bg-white dark:bg-slate-900 p-4 rounded-lg border border-slate-100 dark:border-slate-800">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-indigo-500" /> Answer
                  </h4>
                  <p className="text-slate-700 dark:text-slate-300 font-medium">
                    {selectedTeaser?.answer}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    selectedTeaser && copyToClipboard(selectedTeaser, setCopied)
                  }
                  className="text-slate-500 hover:text-indigo-600"
                >
                  <Copy className="w-4 h-4 mr-2" /> Copy
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    selectedTeaser && shareQuote(selectedTeaser, setCopied)
                  }
                  className="text-slate-500 hover:text-indigo-600"
                >
                  <Share2 className="w-4 h-4 mr-2" /> Share
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}