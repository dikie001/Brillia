// import AllStories from "public/jsons/miniStories";
import FilterBar from "@/components/app/FilterBar";
import Navbar from "@/components/app/Navbar";
import type { Story } from "@/types";
import { CheckCheck, Heart, X } from "lucide-react";
import { useEffect, useState } from "react";
import AllStories from "@/jsons/miniStories";

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
  const [filter, setFilter] = useState<string>("All");
  const [currentFilter, setCurrentFilter] = useState("All");
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [read, setRead] = useState<Set<number>>(new Set());

  useEffect(() => {
    FetchData();
  }, []);

  const FetchData = () => {
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

  const selectedStoryData = selectedStory
    ? stories.find((s) => s.id === selectedStory)
    : null;

  useEffect(() => {
    if (filter === "Favorites") return;
    if (filter === "All") return setStories(AllStories);
    setStories(AllStories.filter((story) => story.genre === filter));
  }, [filter]);

  const filterFavorites = () => {
    const favs = [...favorite].map((f) =>
      AllStories.find((story) => story.id === f)
    );
    setStories(favs.filter((story): story is Story => story !== undefined));
  };

  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        if (filter === "Favorites") {
          filterFavorites();
        }
      } else {
        newFavorite.add(id);
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
      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="text-center mb-12 pt-20 relative">
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Brief tales that linger in your heart long after the last word
          </p>
        </header>
        <div className="flex items-center justify-between px-2">
          <FilterBar
            setFilter={setFilter}
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
            onFavoriteClick={filterFavorites}
          />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const isFavorite = favorite.has(story.id);
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
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      genreColors[story.genre]
                    }`}
                  >
                    {story.genre}
                  </span>
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
                      isFavorite ? "Remove from favorites" : "Add to favorites"
                    }
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
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
                  className={`flex text-indigo-400 gap-2 justify-end text-sm ${
                    read.has(story.id) ? "" : "hidden"
                  }`}
                >
                  <p>Read</p>
                  <CheckCheck className="text-indigo-400" size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedStoryData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 px-8 py-6 border-b border-gray-200 dark:border-gray-700 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
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

            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-950 rounded-b-3xl">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Press ESC to close
              </span>
            </div>
          </div>
        </div>
      )}

      {filter === "Favorites" && stories.length === 0 && (
        <div className="flex shadow-lg flex-col items-center justify-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-950 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            No favorites yet
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Mark stories as favorites to see them here.
          </p>
        </div>
      )}

      {filter !== "Favorites" && stories.length === 0 && (
        <div className="flex flex-col shadow-lg items-center justify-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-950 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            No stories in {filter}
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Check back later for more {filter} stories.
          </p>
        </div>
      )}
    </div>
  );
}
