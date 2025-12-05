import { Check, ChevronDown, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const defaultGenres = [
  "All",
  "Favorites",
  "Mystery",
  "Fantasy",
  "Drama",
  "Adventure",
  "Comedy",
  "Slice of Life",
  "Sci-Fi",
  "Horror",
  "Thriller",
  "Historical",
  // "Documentary",
  "Action",
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
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter genres based on search
  const filteredGenres = genres.filter((genre) =>
    genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleGenreSelect = (genre: string) => {
    setCurrentFilter(genre);
    setIsOpen(false);
    setSearchQuery(""); // Reset search on select
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full flex justify-between max-w-4xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mx-auto justify-center">
        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 whitespace-nowrap">
          Filter by:
        </span>

        <div className="relative" ref={dropdownRef}>
          {/* Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:shadow-md transition-all duration-200 min-w-[160px] justify-between group"
          >
            <span className="truncate text-gray-900 dark:text-gray-100">
              {currentFilter}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Content */}
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-[220px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
              {/* Search Input */}
              <div className="p-2 border-b border-gray-100 dark:border-gray-700">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search genres..."
                    autoFocus
                    className="w-full pl-8 pr-3 py-1.5 text-sm bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500 text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              {/* Scrollable List */}
              <div className="max-h-[240px] overflow-y-auto p-1 custom-scrollbar">
                {filteredGenres.length === 0 ? (
                  <div className="px-2 py-3 text-xs text-center text-gray-500 dark:text-gray-400">
                    No genres found.
                  </div>
                ) : (
                  filteredGenres.map((genre) => {
                    const active = currentFilter === genre;
                    return (
                      <button
                        key={genre}
                        onClick={() => handleGenreSelect(genre)}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                          active
                            ? "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                        }`}
                      >
                        <span className="truncate">{genre}</span>
                        {active && <Check className="w-3.5 h-3.5" />}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}