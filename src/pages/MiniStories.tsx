// import AllStories from "public/jsons/miniStories";
import FilterBar from "@/components/app/FilterBar";
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import AllStories from "@/jsons/miniStories";
import type { Story } from "@/types";
import { STORIES_CURRENTPAGE } from "@/constants";
import {
  CheckCheck,
  CheckCircle,
  Copy,
  Heart,
  LoaderCircle,
  Share2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import { copyToClipboard, shareQuote } from "@/utils/miniFunctions";

// Define genre colors (all indigo theme)
const genreColors: Record<string, string> = {
  Romance:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Mystery:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Fantasy:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Drama:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Adventure:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  "Slice of Life":
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
};

const READ_STORIES = "read-stories";
const FAVOURITE_STORIES = "favourite-stories";

export default function MiniStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [currentFilter, setCurrentFilter] = useState("All");
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [read, setRead] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const storiesRef = useRef<Story[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState<number | null>(null);

  useEffect(() => {
    FetchData();
    setCurrentFilter("All")
  }, []);

  // Handle pagination
  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(STORIES_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage]);

  // Fetch app data
  const FetchData = () => {
    setLoading(true);
    storiesRef.current = AllStories;

    const lastPage = localStorage.getItem(STORIES_CURRENTPAGE);
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
      PaginationPage();
    }

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
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedStory !== null) {
        setSelectedStory(null);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedStory]);

  // Handle pagination
  const PaginationPage = () => {
    const storiesLength = AllStories ? AllStories.length : 0;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = storiesRef.current.slice(start, end);
    console.log(end, AllStories.length);

    setStories(currentItems);
    if (end > storiesLength) {
      setCurrentPage(1);
      localStorage.removeItem(STORIES_CURRENTPAGE);
      toast.info("Out of stories, restarting from the top");
    }
  };

  const selectedStoryData = selectedStory
    ? stories.find((s) => s.id === selectedStory)
    : null;

    // FIlter categories
  useEffect(() => {
    if(currentFilter === "Favorites") return filterFavorites()
    if (currentFilter === "All") return setStories(AllStories);
    setStories(AllStories.filter((story) => story.genre === currentFilter));
  }, [currentFilter]);

  const filterFavorites = () => {
    setLoading(false)
    const favs = [...favorite].map((f) =>
      AllStories.find((story) => story.id === f)
    );
    setStories(favs.filter((story): story is Story => story !== undefined));
  };

  // Toggle favs
  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Story removed from favorites");
        if (currentFilter === "Favorites") {
          filterFavorites();
        }
      } else {
        newFavorite.add(id);
        toast.success("Story added to favorites");
      }

      const existingData = localStorage.getItem(FAVOURITE_STORIES);
      const existingfavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingfavorites.has(id)) {
        existingfavorites.delete(id);
      } else {
        existingfavorites.add(id);
      }

      localStorage.setItem(
        FAVOURITE_STORIES,
        JSON.stringify(Array.from(existingfavorites))
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
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 p-6">
      <Navbar currentPage="Mini Stories" />
      <Toaster richColors position="top-center" />
      <div className="relative  z-10 max-w-7xl mx-auto">
        <header className="text-center mb-12 pt-20 relative">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Brief tales that linger in your heart long after the last word
          </p>
        </header>

        {/* Loading */}
        {loading 
          && (
            <div className="flex flex-col absolute inset-0  bg-white/80 dark:bg-transparent h-screen items-center justify-center w-full  ">
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
        {currentFilter === "All" && stories.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            story={stories}
            totalItems={AllStories.length}
          />
        )}
        <div className="grid mb-6 gap-4 lg:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const isFavorite = favorite.has(story.id);
            const isCopied = copied === story.id;

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
                <div className="flex items-start justify-between ">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      genreColors[story.genre]
                    }`}
                  >
                    {story.genre}
                  </span>
                  {/* REad story */}
                  <div
                    className={`flex text-indigo-400 gap-2 justify-end text-sm ${
                      read.has(story.id) ? "" : "hidden"
                    }`}
                  >
                    <p>Read</p>
                    <CheckCheck className="text-indigo-400" size={20} />
                  </div>
                </div>

                <div className="text-white bg-gradient-to-r from-indigo-600 to-indigo-900 flex justify-center items-center font-medium absolute -top-4 -right-2  shadow-lg w-8 h-8 rounded-full ">
                  {story.id}
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
          <Paginate
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            story={stories}
            totalItems={AllStories.length}
          />
        
      </div>

      {selectedStoryData &&
        (() => {
          const isFavorite = favorite.has(selectedStoryData.id);
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
                      className={`px-3 py-1 rounded-full text-sm font-bold ${
                        genreColors[selectedStoryData.genre]
                      }`}
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
