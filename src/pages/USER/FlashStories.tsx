import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { Button } from "@/components/ui/button";
import useSound from "@/hooks/useSound";
import AllStories from "@/jsons/miniStories";
import type { Story } from "@/types";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCheck,
  CheckCircle,
  Copy,
  Heart,
  Info,
  LoaderCircle,
  Maximize2,
  Share2,
  Sparkles,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

// 🎨 ORIGINAl INDIGO THEME COLORS
const genreColors: Record<string, string> = {
  Fantasy:
    "bg-gradient-to-r from-violet-200/40 to-fuchsia-200/40 text-violet-900 dark:border border-violet-800 dark:from-violet-900/40 dark:to-fuchsia-900/40 dark:text-fuchsia-300",
  Adventure:
    "bg-gradient-to-r from-sky-200/40 to-blue-200/40 text-sky-900 dark:border border-sky-800 dark:from-sky-900/40 dark:to-blue-900/40 dark:text-sky-300",
  Mystery:
    "bg-gradient-to-r from-amber-200/40 to-yellow-200/40 text-amber-900 dark:border border-amber-800 dark:from-amber-900/40 dark:to-yellow-900/40 dark:text-amber-300",
  "Sci-Fi":
    "bg-gradient-to-r from-cyan-200/40 to-indigo-200/40 text-cyan-900 dark:border border-cyan-800 dark:from-cyan-900/40 dark:to-indigo-900/40 dark:text-cyan-300",
  Paranormal:
    "bg-gradient-to-r from-rose-200/40 to-red-200/40 text-rose-900 dark:border border-rose-800 dark:from-rose-900/40 dark:to-red-900/40 dark:text-rose-300",
  Thriller:
    "bg-gradient-to-r from-slate-200/40 to-zinc-200/40 text-slate-900 dark:border border-slate-800 dark:from-slate-900/40 dark:to-zinc-900/40 dark:text-slate-300",
  Historical:
    "bg-gradient-to-r from-stone-200/40 to-amber-200/40 text-stone-900 dark:border border-stone-800 dark:from-stone-900/40 dark:to-amber-900/40 dark:text-stone-300",
  "dikie.dev":
    "bg-gradient-to-r from-cyan-100/40 to-cyan-400/40 text-emerald-900 dark:border border-emerald-800 dark:from-cyan-800/40 dark:to-cyan-900/40 dark:text-emerald-300",
};

const READ_STORIES = "read-stories";
const FAVOURITE_STORIES = "favourite-stories";
const STORIES_CURRENTPAGE = "mini-stories-current-page";

export default function MiniStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [filteredStories, setFilteredStories] = useState<Story[]>([]);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [read, setRead] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const storiesRef = useRef<Story[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);
  const { playSend } = useSound();

  // Load Data
  const FetchData = useCallback(() => {
    setLoading(true);
    storiesRef.current = AllStories;

    const storedFavorites = localStorage.getItem(FAVOURITE_STORIES);
    const favoriteStories = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set<number>();
    setFavorite(favoriteStories);

    const storedRead = localStorage.getItem(READ_STORIES);
    const readStories = storedRead
      ? new Set<number>(JSON.parse(storedRead))
      : new Set<number>();
    setRead(readStories);

    setFilteredStories(AllStories);
    setLoading(false);
  }, []);

  const fetchCurrentPageNumber = useCallback(() => {
    const currentPageNumber = localStorage.getItem(STORIES_CURRENTPAGE);
    if (!currentPageNumber) {
      setCurrentPage(1);
    } else {
      setCurrentPage(Number(currentPageNumber));
    }
  }, []);

  useEffect(() => {
    FetchData();
    fetchCurrentPageNumber();
  }, [FetchData, fetchCurrentPageNumber]);

  // Lock scroll
  useEffect(() => {
    if (selectedStory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedStory]);

  // Handle Filtering
  useEffect(() => {
    let filtered: Story[] = [];
    if (currentFilter === "Favorites") {
      filtered = AllStories.filter((story) => favorite.has(story.id));
    } else if (currentFilter === "All") {
      filtered = AllStories;
    } else {
      filtered = AllStories.filter((story) => story.genre === currentFilter);
    }
    setFilteredStories(filtered);

    if (
      currentPage > Math.ceil(filtered.length / itemsPerPage) &&
      filtered.length > 0
    ) {
      setCurrentPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentFilter, favorite]);

  // Handle Pagination
  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setStories(filteredStories.slice(start, end));

    if (currentPage !== 1) {
      localStorage.setItem(STORIES_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage, filteredStories]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedStory !== null) {
        setSelectedStory(null);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedStory]);

  const selectedStoryData = selectedStory
    ? AllStories.find((s) => s.id === selectedStory)
    : null;

  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Story removed from favorites");
      } else {
        newFavorite.add(id);
        toast.success("Story added to favorites");
      }

      localStorage.setItem(
        FAVOURITE_STORIES,
        JSON.stringify(Array.from(newFavorite))
      );
      return newFavorite;
    });
  };

  const saveReadStories = (id: number) => {
    setRead((prev) => {
      const newReadStory = new Set(prev);
      if (newReadStory.has(id)) return newReadStory;
      newReadStory.add(id);
      localStorage.setItem(
        READ_STORIES,
        JSON.stringify(Array.from(newReadStory))
      );
      return newReadStory;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-500">
      <Navbar currentPage="Flash Stories" />
      <Toaster richColors position="top-center" />

      <main className="relative z-10 max-w-7xl mx-auto pt-24 px-4 pb-12">
        {loading && (
          <div className="fixed inset-0 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center">
            <LoaderCircle className="w-12 h-12 animate-spin text-indigo-500 mb-4" />
            <p className="font-medium text-lg text-indigo-900 dark:text-indigo-200 animate-pulse">
              Summoning stories...
            </p>
          </div>
        )}

        <FilterBar
          setCurrentFilter={(filter) => {
            setCurrentFilter(filter);
            setCurrentPage(1);
          }}
          currentFilter={currentFilter}
        />

        {/* Empty State */}
        {stories.length === 0 && !loading && (
          <div className="flex flex-col items-center justify-center py-24 animate-in fade-in zoom-in duration-500 text-center">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-md p-8 rounded-[2rem] mb-6 rotate-3 shadow-xl">
              <Info className="w-16 h-16 text-indigo-400" />
            </div>
            <h2 className="text-3xl font-black text-indigo-900 dark:text-indigo-100 tracking-tight mb-2">
              {currentFilter === "All" ? "All Caught Up!" : "No matches found"}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8">
              {currentFilter === "All"
                ? "You have read all the stories! Check back later for more adventures."
                : `We couldn't find any stories in the "${currentFilter}" category.`}
            </p>

            {currentFilter === "All" && (
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => {
                    playSend();
                    setCurrentPage(1);
                  }}
                  variant="outline"
                  className="rounded-full border-indigo-200 hover:bg-indigo-50 dark:border-indigo-800 dark:hover:bg-indigo-900/50 h-12 px-6"
                >
                  Start Over
                </Button>
                <Button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full h-12 px-6 shadow-lg shadow-indigo-500/25 transition-transform active:scale-95"
                  onClick={() => playSend()}
                >
                  Request More
                </Button>
              </div>
            )}
          </div>
        )}

        {/* 🃏 Masonry-style Grid (Vibrant Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
          {stories.map((story, index) => {
            const isFavorite = favorite.has(story.id);
            const isRead = read.has(story.id);
            const isCopied = copied === story.id;
            // Original Color Logic
            const genreStyle =
              genreColors[story.genre] || genreColors["Fantasy"];

            return (
              <div
                key={story.id}
                onClick={() => {
                  playSend();
                  setSelectedStory(story.id);
                  saveReadStories(story.id);
                }}
                className="group relative flex flex-col justify-between 
                           bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                           rounded-3xl p-5 
                           border border-white/40 dark:border-white/5
                           hover:border-indigo-300 dark:hover:border-indigo-500/50
                           shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] 
                           transition-all duration-300 ease-out cursor-pointer hover:-translate-y-1.5"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Header Tags */}
                <div className="flex justify-between items-start mb-4">
                  <span
                    className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider shadow-sm ${genreStyle}`}
                  >
                    {story.genre}
                  </span>
                  {isRead && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-100/80 dark:bg-emerald-900/40 px-2 py-1 rounded-lg">
                      <CheckCheck size={12} strokeWidth={3} />
                    </span>
                  )}
                </div>

                {/* Content Preview */}
                <div className="flex-grow">
                  <h3 className="text-xl font-black mb-2.5 leading-none tracking-tight text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed line-clamp-3">
                    {story.content}
                  </p>
                </div>

                {/* Footer / Actions */}
                <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-700/50 flex items-center justify-between">
                  <span className="text-xs text-gray-400 font-bold tracking-wide">
                    @{story.author}
                  </span>

                  <div
                    className="flex items-center gap-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => {
                        playSend();
                        copyToClipboard(story, setCopied);
                      }}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isCopied
                          ? "bg-green-100 text-green-600"
                          : "hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-400 hover:text-indigo-600"
                      }`}
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
                        toggleFavorites(story.id);
                      }}
                      className="group/btn p-2 rounded-full hover:bg-rose-50 dark:hover:bg-rose-900/20 text-gray-400 hover:text-rose-500 transition-colors"
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform group-active/btn:scale-75 ${
                          isFavorite ? "fill-rose-500 text-rose-500" : ""
                        }`}
                      />
                    </button>

                    <div className="hidden sm:block p-2 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/30 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination */}
        {filteredStories.length >= itemsPerPage && (
          <div className="flex justify-center pb-8">
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              story={stories}
              totalItems={filteredStories.length}
            />
          </div>
        )}
      </main>

      {/* ✨ IMMERSIVE MODAL (Structure from Vibrant, Colors from Indigo) */}
      {selectedStoryData && (
        <div
          className="fixed inset-0 z-[60] flex  items-end md:items-center justify-center bg-indigo-900/40 dark:bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="w-full md:w-[700px] max-h-[95vh] md:max-h-[85vh] 
                       bg-white dark:bg-gray-800 
                       rounded-t-3xl  md:rounded-3xl
                       shadow-2xl shadow-indigo-900/20
                       flex flex-col animate-in slide-in-from-bottom-24 duration-300 
                       border-t border-x border-white/40 dark:border-white/10 md:border-b ring-1 ring-black/5 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative px-4 shrink-0 z-10">
              {/* Mobile Drag Pill */}
              <div className="md:hidden w-12 h-1.5 bg-gray-200 dark:bg-gray-600 rounded-full mx-auto mb-3" />

              <button
                onClick={() => setSelectedStory(null)}
                className="hidden md:flex absolute top-8 right-8 p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-300 transition-all hover:scale-110 active:scale-90"
              >
                <X size={20} />
              </button>

              <div className="flex items-center gap-2 mb-2 md:mt-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-black tracking-wide shadow-sm ${
                    genreColors[selectedStoryData.genre] || genreColors.Fantasy
                  }`}
                >
                  {selectedStoryData.genre}
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-black text-gray-800 dark:text-gray-100 leading-[0.95] tracking-tighter mb-4">
                {selectedStoryData.title}
              </h2>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">
                  By{" "}
                  <span className="text-indigo-600 dark:text-indigo-300">
                    @{selectedStoryData.author}
                  </span>
                </p>
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-2 md:p-4  pt-4 custom-scrollbar relative z-10">
              <div className="prose dark:prose-invert prose-lg md:prose-xl max-w-none leading-relaxed text-gray-700 dark:text-gray-300 font-medium">
                {/* HUGE FIRST LETTER AS REQUESTED */}
                <p
                  className="text-gray-700 dark:text-gray-300 leading-loose text-lg whitespace-pre-line 
                    first-letter:text-6xl md:first-letter:text-7xl 
                    first-letter:font-black 
                    first-letter:text-indigo-500 
                    dark:first-letter:text-indigo-400
                    first-letter:float-left 
                    first-letter:mr-3 
                    first-letter:mt-[-4px]
                    first-letter:leading-[0.8]"
                >
                  {selectedStoryData.content}
                </p>
                <div className="flex justify-center mt-8 opacity-40">
                  <Sparkles className="text-indigo-400 w-6 h-6" />
                </div>
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="p-4 md:p-6 bg-indigo-50/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-indigo-100 dark:border-gray-700/50 shrink-0 rounded-b-none md:rounded-b-[2.5rem] relative z-20">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:scale-105 active:scale-95 transition-all text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => {
                      playSend();
                      copyToClipboard(selectedStoryData, setCopied);
                    }}
                  >
                    {copied === selectedStoryData.id ? (
                      <CheckCircle className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full h-12 w-12 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:scale-105 active:scale-95 transition-all text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400"
                    onClick={() => {
                      playSend();
                      shareQuote(selectedStoryData, setCopied);
                    }}
                  >
                    <Share2 className="w-5 h-5" />
                  </Button>
                </div>

                <Button
                  onClick={() => {
                    playSend();
                    toggleFavorites(selectedStoryData.id);
                  }}
                  className={`flex-1 rounded-full h-12 font-bold text-base transition-all hover:scale-[1.02] active:scale-95 shadow-lg ${
                    favorite.has(selectedStoryData.id)
                      ? "bg-white text-rose-500 border border-rose-100 hover:bg-rose-50 shadow-rose-200/50"
                      : "bg-gradient-to-r from-indigo-600 to-indigo-800 text-white hover:from-indigo-700 hover:to-indigo-900 shadow-indigo-500/30"
                  }`}
                >
                  <Heart
                    className={`w-5 h-5 mr-2 ${
                      favorite.has(selectedStoryData.id) ? "fill-current" : ""
                    }`}
                  />
                  {favorite.has(selectedStoryData.id)
                    ? "Favorited"
                    : "Add to Favorites"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {currentFilter === "Favorites" && stories.length === 0 && <NoFavorites />}
      <Footer />
    </div>
  );
}
