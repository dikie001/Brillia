import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { STORIES_CURRENTPAGE } from "@/constants";
import AllStories from "@/jsons/miniStories";
import type { Story } from "@/types";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";
import {
  CheckCheck,
  CheckCircle,
  Copy,
  Heart,
  LoaderCircle,
  Share2,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

// Define genre colors (all indigo theme)
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
  // const navigate = useNavigate();

  // Define FetchData via useCallback to avoid dependency issues
  const FetchData = useCallback(() => {
    setLoading(true);
    storiesRef.current = AllStories;
    setFilteredStories(AllStories);

    // Optional: Restore last page if needed
    // const lastPage = localStorage.getItem(STORIES_CURRENTPAGE);
    // if (lastPage) setCurrentPage(Number(lastPage));

    const storedFavorites = localStorage.getItem(FAVOURITE_STORIES);
    const favoriteStories: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteStories);

    const storedData = localStorage.getItem(READ_STORIES);
    const readStories: Set<number> = storedData
      ? new Set<number>(JSON.parse(storedData))
      : new Set();
    setRead(readStories);
    setLoading(false);
  }, []);

  useEffect(() => {
    FetchData();
    setCurrentFilter("All");
  }, [FetchData]);

  // Handle pagination calculation
  const PaginationPage = useCallback(
    (filtered: Story[]) => {
      const start = (currentPage - 1) * itemsPerPage;
      const end = start + itemsPerPage;
      const currentItems = filtered.slice(start, end);
      setStories(currentItems);
    },
    [currentPage, itemsPerPage]
  );

  // Sync pagination when stories or page changes
  useEffect(() => {
    PaginationPage(filteredStories);
    if (currentPage !== 1) {
      localStorage.setItem(STORIES_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage, filteredStories, PaginationPage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedStory !== null) {
        setSelectedStory(null);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedStory]);

  // Get selected story data (search in AllStories to find it even if paginated)
  const selectedStoryData = selectedStory
    ? AllStories.find((s) => s.id === selectedStory)
    : null;

  // Filter categories
  useEffect(() => {
    let filtered: Story[] = [];
    if (currentFilter === "Favorites") {
      filtered = AllStories.filter((story) => favorite.has(story.id));
    } else if (currentFilter === "All") {
      filtered = AllStories;
    } else {
      filtered = AllStories.filter((story) => story.genre === currentFilter);
    }

    // Reset to page 1 on filter change
    setCurrentPage(1);
    setFilteredStories(filtered);
  }, [currentFilter, favorite]);

  // Toggle favs
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

      const existingData = localStorage.getItem(FAVOURITE_STORIES);
      const existingFavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingFavorites.has(id)) {
        existingFavorites.delete(id);
      } else {
        existingFavorites.add(id);
      }

      localStorage.setItem(
        FAVOURITE_STORIES,
        JSON.stringify(Array.from(existingFavorites))
      );
      return newFavorite;
    });
  };

  // Save the read stories
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 p-4">
      <Navbar currentPage="Mini Stories" />
      <Toaster richColors position="top-center" />
      <div className="relative z-10 max-w-7xl mx-auto pt-12">
        {/* Loading */}
        {loading && (
          <div className="flex flex-col absolute inset-0 bg-white/80 dark:bg-transparent h-screen items-center justify-center w-full">
            <LoaderCircle className="w-10 h-10 animate-spin text-indigo-500" />
            <p className="font-medium mt-2">Loading stories...</p>
          </div>
        )}

        <div className="flex items-center justify-between px-2">
          <FilterBar
            setCurrentFilter={setCurrentFilter}
            currentFilter={currentFilter}
          />
        </div>

        <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Showing {stories.length} of {filteredStories.length} items
        </div>

        {filteredStories.length >= itemsPerPage && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            story={stories}
            totalItems={filteredStories.length}
          />
        )}
        <div className="grid mb-6 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* {stories.length === 0 &&  !=="favorites" && (
            <div className="flex flex-col items-center justify-center text-center py-4 space-y-4 col-span-full">
              <p className="text-xl font-semibold">
                {currentFilter !== "All" && "No matches found"}
              </p>
              <p className="text-muted-foreground">
                {currentFilter === "All"
                  ? "You’ve read all available stories. New ones will drop soon."
                  : `We couldn't find any stories in the "${currentFilter}" category.`}
              </p>
              
              {currentFilter === "All" && (
                <Button
                  variant="default"
                  className="cursor-pointer"
                  onClick={() => navigate("/contact-developer")}
                >
                  Contact Developer
                </Button>
              )}
            </div>
          )} */}

          {stories.slice(0, 10).map((story, index) => {
            const isFavorite = favorite.has(story.id);
            const isCopied = copied === story.id;
            // Fallback genre color
            const genreColorClass =
              genreColors[story.genre] || genreColors["Fantasy"];

            return (
              <div
                key={story.id}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-4 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:scale-103 border border-white/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  setSelectedStory(story.id);
                  saveReadStories(story.id);
                }}
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${genreColorClass}`}
                  >
                    {story.genre}
                  </span>
                  {/* Read story */}
                  <div
                    className={`flex text-indigo-400 gap-2 justify-end text-sm ${
                      read.has(story.id) ? "" : "hidden"
                    }`}
                  >
                    <p>Read</p>
                    <CheckCheck className="text-indigo-400" size={20} />
                  </div>
                </div>

                <div className="text-white bg-gradient-to-r from-indigo-600 to-indigo-900 flex justify-center items-center font-medium absolute -top-4 -right-2 shadow-lg w-8 h-8 rounded-full">
                  {story.id === 1000 || story.id === 1001 ? "dev" : story.id}
                </div>

                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {story.title}
                </h2>

                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.content.substring(0, 120)}...
                </p>

                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  by {story.author}
                </div>
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="flex justify-between border-t mt-2.5"
                >
                  <div className="flex items-center w-full justify-between mt-1">
                    {/* Copy and share */}
                    <div className="gap-2 flex">
                      <button
                        onClick={() => copyToClipboard(story, setCopied)}
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
                        onClick={() => shareQuote(story, setCopied)}
                        className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                        title="Share quote"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                    {/* Like button */}
                    <div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorites(story.id);
                        }}
                        className={`p-2 rounded-full transition-all duration-300 ${
                          isFavorite
                            ? "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 scale-110"
                            : "text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-900/20"
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
                </div>
              </div>
            );
          })}
        </div>
        {filteredStories.length >= itemsPerPage && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            story={stories}
            totalItems={filteredStories.length}
          />
        )}
      </div>

      {selectedStoryData &&
        (() => {
          const isFavorite = favorite.has(selectedStoryData.id);
          const genreColorClass =
            genreColors[selectedStoryData.genre] || genreColors["Fantasy"];

          return (
            <div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedStory(null)}
            >
              <div
                className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 rounded-t-3xl">
                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-bold ${genreColorClass}`}
                    >
                      {selectedStoryData.genre}
                    </span>
                    <button
                      onClick={() => setSelectedStory(null)}
                      className="p-1.5 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md transition-colors text-gray-500 hover:text-indigo-700 dark:hover:text-indigo-300"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <h1 className="text-4xl font-black mt-4 text-gray-800 dark:text-gray-100">
                    {selectedStoryData.title}
                  </h1>
                  <div className="flex items-center gap-6 mt-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>by {selectedStoryData.author}</span>
                  </div>
                </div>

                <div className="px-8 py-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                      {selectedStoryData.content}
                    </p>
                  </div>
                </div>

                <div className="px-8 py-6 flex justify-between border-t border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-950 rounded-b-3xl">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Press ESC to close
                  </span>
                  {/* Fav button */}
                  <button
                    onClick={() => {
                      toggleFavorites(selectedStoryData.id);
                    }}
                    className="flex cursor-pointer items-center gap-2 rounded-3xl shadow-lg px-5 py-2.5 text-sm font-medium text-white 
                  bg-gradient-to-r from-indigo-600 to-indigo-800 
                  hover:from-indigo-700 hover:to-indigo-800 
                  active:scale-95 transition-all"
                  >
                    <Heart
                      className={`w-5 h-5 ${
                        isFavorite ? "hidden" : "stroke-white"
                      }`}
                    />
                    {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

      {currentFilter === "Favorites" && stories.length === 0 && <NoFavorites />}

      <Footer />
    </div>
  );
}
