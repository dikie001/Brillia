import { useState } from "react";
import { Filter, Heart } from "lucide-react";

const defaultGenres = [
  "All",
  "Mystery",
  "Fantasy",
  "Drama",
  "Adventure",
  "Comedy",
  "Slice of Life",
];

interface FilterBarProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
  onFavoriteClick: () => void;
  genres?: string[];
}

export default function FilterBar({
  currentFilter,
  setFilter,
  onFavoriteClick,
  genres = defaultGenres,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleGenreSelect = (genre: string) => {
    setFilter(genre);
    setIsOpen(false);
  };

  const handleFavoriteClick = () => {
    onFavoriteClick();
  };

  const getFilterButtonText = () => {
    if (currentFilter === "All") return "All stories";
    if (currentFilter === "Favorites") return "Stories";
    return currentFilter;
  };

  return (
    <div className="relative w-full mb-6 px-4 sm:px-0">
      {/* Mobile Layout */}
      <div className="sm:hidden space-y-3 ">
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
          Filter stories by category
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-3xl text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm"
          >
            <Filter className="w-4 h-4 text-indigo-500" />
            <span className="truncate">{getFilterButtonText()}</span>
          </button>

          <button
            onClick={handleFavoriteClick}
            className="flex items-center justify-center gap-2 px-3 py-2.5 rounded-3xl text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm focus:ring-2 focus:ring-indigo-500"
          >
            <Heart className="w-4 h-4 text-indigo-500" />
            <span className="hidden sm:inline">Favorites</span>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden sm:flex justify-center">
        <div className="flex items-center gap-4">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Filter stories by category
          </p>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-3xl text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md"
          >
            <Filter className="w-4 h-4 text-indigo-500" />
            {getFilterButtonText()}
          </button>

          <button
            onClick={handleFavoriteClick}
            className="flex items-center gap-2 px-4 py-2 rounded-3xl text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-md focus:ring-2 focus:ring-indigo-500"
          >
            <Heart className="w-4 h-4 text-indigo-500" />
            Favorites
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
          <div className="absolute top-12 sm:top-12 left-0 sm:left-auto right-0 sm:right-auto bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-4 border border-gray-200 dark:border-gray-700 z-50 sm:min-w-48 mx-4 sm:mx-0">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreSelect(genre)}
                className={`w-full text-left px-4 py-3 sm:px-3 sm:py-2 rounded-2xl text-sm font-medium ${
                  currentFilter === genre
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-indigo-900"
                }`}
              >
                {genre}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
