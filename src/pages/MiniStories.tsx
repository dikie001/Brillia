import AllStories from "@/assets/jsons/miniStories";
import FilterBar from "@/components/app/FilterBar";
import Navbar from "@/components/app/Navbar";
import type { Story } from "@/types";
import { CheckCheck, Heart, X } from "lucide-react";
import { useEffect, useState } from "react";

const genreColors: Record<string, string> = {
  Romance: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  Mystery:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Fantasy:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  Drama: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Adventure:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
  "Slice of Life":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
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

  // Load all data
  useEffect(() => {
    if (AllStories) setStories(AllStories);
    // Fetch page data
    FetchData();
  }, []);

  // Fetch data from storage
  const FetchData = () => {
    // Favorite stories
    const storedFavorites = localStorage.getItem(FAVOURITE_STORIES);
    const favoriteStories: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteStories);

    // Read stories
    const storedData = localStorage.getItem(READ_STORIES);
    const readStories: Set<number> = storedData
      ? new Set<number>(JSON.parse(storedData))
      : new Set();
    setRead(readStories);
  };

  // Close modal on ESC
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

  // Apply filter
  useEffect(() => {
    if (filter === "Favorites") return;
    if (filter === "All") return setStories(AllStories);
    setStories(AllStories.filter((story) => story.genre === filter));
  }, [filter]);

  // Filter favorites
  const filterFavorites = () => {
    const favs = [...favorite].map((f) =>
      AllStories.find((story) => story.id === f)
    );
    // Validate and filter
    setStories(favs.filter((story): story is Story => story !== undefined));
  };

  // Toggel favorites
  const toggleFavourites = (id: number) => {
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

      // Get exixting favorites
      const existingData = localStorage.getItem(FAVOURITE_STORIES);
      const existingfavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      // Create a new set with the data from current and storage in sync

      let updatedFavorites: Set<number>;
      if (existingfavorites.has(id)) {
        existingfavorites.delete(id);
      } else {
        existingfavorites.add(id);
      }

      updatedFavorites = existingfavorites;

      // Save the updated object of favorites to storage
      localStorage.setItem(
        FAVOURITE_STORIES,
        JSON.stringify(Array.from(updatedFavorites))
      );
      return newFavorite;
    });
  };

  // Save the read stories
  const saveReadStories = (id: number) => {
    setRead((prev) => {
      const newReadStory = new Set(prev);
      if (newReadStory.has(id)) return newReadStory;

      if (!newReadStory.has(id)) {
        newReadStory.add(id);
        console.log("done..");
        console.log(newReadStory);
        // Send data to storage
        localStorage.setItem(
          READ_STORIES,
          JSON.stringify(Array.from(newReadStory))
        );
      }

      return newReadStory;
    });
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 p-6">
      <Navbar currentPage="Mini Stories" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
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

        {/* Stories Grid */}
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
                {/* Story Header */}
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      genreColors[story.genre]
                    }`}
                  >
                    {story.genre}
                  </span>
                  <span>
                    <Heart
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavourites(story.id);
                      }}
                      className={`text-gray-400 ${
                        isFavorite &&
                        "stroke-pink-500 fill-pink-500 dark:stroke-red-400 dark:fill-red-400"
                      } `}
                    />
                  </span>
                </div>

                {/* Story Title */}
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {story.title}
                </h2>

                {/* Story Preview */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.content.substring(0, 120)}...
                </p>

                {/* Author */}
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  by {story.author}
                </div>
                <div
                  className={`flex text-green-400 gap-2 justify-end text-sm ${
                    read.has(story.id) ? "" : "hidden"
                  }`}
                >
                  <p>Read</p>
                  <CheckCheck className="text-green-400" size={20} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Story Modal */}
      {selectedStoryData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
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
                  className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
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

            {/* Modal Content */}
            <div className="px-8 py-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                  {selectedStoryData.content}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 rounded-b-3xl">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Press ESC to close
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Other modals */}
      {filter === "Favorites" && stories.length === 0 && (
        <div className="flex shadow-lg flex-col items-center justify-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            No favorites yet
          </p>
          <p className="text-gray-400 dark:text-gray-500 text-sm mt-2">
            Mark stories as favorites to see them here.
          </p>
        </div>
      )}

      {filter !== "Favorites" && stories.length === 0 && (
        <div className="flex flex-col shadow-lg items-center justify-center p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-center">
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
