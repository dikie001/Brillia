import useSound from "@/hooks/useSound";
import { Check, ChevronDown, Filter, Search, X } from "lucide-react";
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
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const { playSend } = useSound();

  // Filter genres based on search
  const filteredGenres = genres.filter((genre) =>
    genre.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (genre: string) => {
    playSend();
    setCurrentFilter(genre);
    setIsOpen(false);
    setSearchQuery("");
    setFocusedIndex(-1);
  };

  // Keyboard Navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev < filteredGenres.length - 1 ? prev + 1 : 0
          );
          break;
        case "ArrowUp":
          e.preventDefault();
          setFocusedIndex((prev) =>
            prev > 0 ? prev - 1 : filteredGenres.length - 1
          );
          break;
        case "Enter":
          e.preventDefault();
          if (focusedIndex >= 0 && focusedIndex < filteredGenres.length) {
            handleSelect(filteredGenres[focusedIndex]);
          }
          break;
        case "Escape":
          setIsOpen(false);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, filteredGenres, focusedIndex]);

  // Scroll focused item into view
  useEffect(() => {
    if (focusedIndex >= 0 && listRef.current) {
      const focusedElement = listRef.current.children[focusedIndex] as HTMLElement;
      if (focusedElement) {
        focusedElement.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  }, [focusedIndex]);

  // Handle click outside
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

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const isActiveFilter = currentFilter !== "All";

  return (
    <div className="w-full mb-6 flex justify-center items-center py-2">
      <div className="flex items-center gap-3 relative" ref={dropdownRef}>
        <div className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <Filter className="w-4 h-4" />
          <span>Filter stories:</span>
        </div>

        {/* Trigger Button */}
        <button
          onClick={() => {
            playSend();
            setIsOpen(!isOpen);
          }}
          className={`
            group flex items-center gap-3 px-4 py-2.5 rounded-2xl text-sm font-semibold transition-all duration-300 border
            ${
              isActiveFilter || isOpen
                ? "bg-indigo-50 dark:bg-indigo-900/30 border-indigo-200 dark:border-indigo-500/50 text-indigo-700 dark:text-indigo-300 shadow-sm shadow-indigo-500/10"
                : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-500/50 text-gray-700 dark:text-gray-200"
            }
          `}
        >
          <span className="min-w-[80px] text-left truncate">
            {currentFilter}
          </span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-indigo-500" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300"
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full right-0 sm:left-0 mt-2 w-[260px] bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-2xl shadow-2xl shadow-indigo-500/10 z-50 overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-top-2 duration-200 ring-1 ring-black/5">
            
            {/* Header / Search */}
            <div className="p-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 backdrop-blur-sm">
              <div className="relative group">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400 group-focus-within:text-indigo-500 transition-colors" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Find a genre..."
                  className="w-full pl-9 pr-8 py-2 text-sm bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 dark:text-gray-100 placeholder:text-gray-400"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setFocusedIndex(0);
                  }}
                  onKeyDown={(e) => e.stopPropagation()} 
                />
                {searchQuery && (
                    <button 
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                    >
                        <X className="w-4 h-4" />
                    </button>
                )}
              </div>
            </div>

            {/* List */}
            <div 
                ref={listRef}
                className="max-h-[280px] overflow-y-auto p-2 custom-scrollbar space-y-0.5"
            >
              {filteredGenres.length === 0 ? (
                <div className="py-8 text-center flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
                  <Search className="w-8 h-8 opacity-20 mb-2" />
                  <p className="text-xs font-medium">No genres found</p>
                </div>
              ) : (
                filteredGenres.map((genre, index) => {
                  const active = currentFilter === genre;
                  const focused = focusedIndex === index;

                  return (
                    <button
                      key={genre}
                      onClick={() => handleSelect(genre)}
                      onMouseEnter={() => setFocusedIndex(index)}
                      className={`
                        w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm transition-all duration-200
                        ${
                          active
                            ? "bg-indigo-50 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 font-bold"
                            : focused
                            ? "bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100"
                            : "text-gray-600 dark:text-gray-400"
                        }
                      `}
                    >
                      <span className="truncate">{genre}</span>
                      {active && (
                        <Check className="w-4 h-4 text-indigo-500 animate-in zoom-in duration-300" />
                      )}
                    </button>
                  );
                })
              )}
            </div>
            
            {/* Quick Reset Footer (Only shows if filtered) */}
            {currentFilter !== "All" && (
                <div className="p-2 border-t border-gray-100 dark:border-gray-700 bg-gray-50/30 dark:bg-gray-900/30">
                    <button
                        onClick={() => handleSelect("All")}
                        className="w-full py-2 text-xs font-medium text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-lg transition-colors"
                    >
                        Reset to All Stories
                    </button>
                </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}