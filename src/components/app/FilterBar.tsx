import { Filter, ChevronDown } from "lucide-react";
import { useState } from "react";

const defaultGenres = [
  "All",
  "Favorites",
  "Mystery",
  "Fantasy",
  "Drama",
  "Adventure",
  "Comedy",
  "Slice of Life",
];

interface FilterBarProps {
  currentFilter: string;
  setCurrentFilter: (filter: string) => void;
  genres?: string[];
}

export default function FilterBar({
  currentFilter,
  setCurrentFilter,
  genres = defaultGenres,
}: FilterBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const handleGenreSelect = (genre: string) => {
    setCurrentFilter(genre);
    setIsOpen(false);
  };

  return (
    <div className="w-full flex justify-between max-w-4xl mx-auto px-4 py-6 ">
      {/* Filter Button */}
      <div className="flex items-center gap-3 mx-auto justify-center">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
          Filter by:
        </span>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all duration-200 min-w-[140px]"
          >
            <Filter className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="flex-1 text-left">{currentFilter}</span>
            <ChevronDown
              className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <>
              <div
                onClick={() => setIsOpen(false)}
                className="fixed inset-0  z-40"
              />
              <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-xl z-50 min-w-[200px]">
                {genres.map((genre) => {
                  const active = currentFilter === genre;
                  return (
                    <button
                      key={genre}
                      onClick={() => handleGenreSelect(genre)}
                      className={`w-full text-left px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-150 ${
                        active
                          ? "bg-indigo-600 text-white shadow-sm"
                          : "text-gray-700 dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700"
                      }`}
                    >
                      {genre}
                    </button>
                  );
                })}
              </div>
            </>
          )}
          
        </div>
      </div>
      <div>Showing {}</div>
    </div>
  );
}
