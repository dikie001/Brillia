import AllStories from "@/assets/jsons/miniStories";
import FilterBar from "@/components/app/FilterBar";
import Navbar from "@/components/app/Navbar";
import type { Story } from "@/types";
import { Heart, X } from "lucide-react";
import { useEffect, useState } from "react";

const genreColors = {
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

export default function MiniStories() {
  const [stories, setStories] = useState<Story[]>([]);
  const [selectedStory, setSelectedStory] = useState<number | null>(null);
  const [readStories, setReadStories] = useState<Set<number>>(new Set());
  const [favorites, setFavorites] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [currentFilter, setCurrentFilter] = useState("All");

  // Save the loaded stories to memory
  useEffect(() => {
    const SaveStoriesToMemory = () => {
      if (AllStories) {
        setStories(AllStories);
      } else {
        setStories([]);
      }
    };

    SaveStoriesToMemory();
  }, []);

  const toggleFavorite = (id: number) => {};

  const markAsRead = (id: number) => {
    setReadStories(new Set([...readStories, id]));
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

  // Filter categories
  useEffect(() => {
    console.log(filter);
    if (filter === "All") {
      return setStories(AllStories);
    }
    const filteredStories = AllStories.filter(
      (story) => story.genre === filter
    );
    setStories(filteredStories);
  }, [filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-rose-50 to-violet-100 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 p-6">
      <Navbar currentPage="Mini Stories" />
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12 pt-20">
          {/* <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <BookOpen className="w-12 h-12 text-amber-600 dark:text-amber-400" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-spin" />
            </div>
          </div> */}
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Brief tales that linger in your heart long after the last word
          </p>

          {/* Stats */}
          {/* <div className="flex items-center justify-center gap-8 mt-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                <BookOpen className="w-4 h-4 inline mr-2" />
                {stories.length} Stories
              </span>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-bold text-green-600 dark:text-green-400">
                <Star className="w-4 h-4 inline mr-2" />
                Read: {readStories.size}
              </span>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/20">
              <span className="text-sm font-bold text-pink-600 dark:text-pink-400">
                <Heart className="w-4 h-4 inline mr-2" />
                Favorites: {favorites.size}
              </span>
            </div>
          </div> */}
        </header>
        <FilterBar
          setFilter={setFilter}
          currentFilter={currentFilter}
          setCurrentFilter={setCurrentFilter}
        />

        {/* Stories Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const isRead = readStories.has(story.id);

            return (
              <div
                key={story.id}
                className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  setSelectedStory(story.id);
                  markAsRead(story.id);
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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(story.id);
                    }}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isFavorite
                        ? "text-pink-500 bg-pink-100 dark:bg-pink-900/30 scale-110"
                        : "text-gray-400 hover:text-pink-500 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                    }`}
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Story Title */}
                <h2 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                  {story.title}
                </h2>

                {/* Story Preview */}
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {story.content.substring(0, 120)}...
                </p>

                {/* Story Metadata */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  {isRead && (
                    <span className="text-xs text-green-600 dark:text-green-400 font-semibold">
                      ✓ Read
                    </span>
                  )}
                </div>

                {/* Author */}
                <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                  by {story.author}
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
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Press ESC to close
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(selectedStoryData.id);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    favorites.has(selectedStoryData.id)
                      ? "bg-pink-500 text-white shadow-lg"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-pink-100 dark:hover:bg-pink-900/30"
                  }`}
                >
                  <Heart
                    className={`w-4 h-4 ${
                      favorites.has(selectedStoryData.id) ? "fill-current" : ""
                    }`}
                  />
                  {favorites.has(selectedStoryData.id)
                    ? "Favorited"
                    : "Add to Favorites"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
