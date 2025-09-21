import { useState } from "react";
import { Filter } from "lucide-react";

const genres = [
  "All",
  "Favorites",
  "Romance",
  "Mystery",
  "Fantasy",
  "Drama",
  "Adventure",
  "Slice of Life",
];

interface MainProps {
  currentFilter: string;
  setFilter: (filter: string) => void;
  setCurrentFilter: (currentFilter: string) => void;
  onFavoriteClick: () => void;
}

export default function FilterBar({
  currentFilter,
  setFilter,
  onFavoriteClick,
  setCurrentFilter,
}: MainProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex justify-center mb-2">
      <div className="flex items-center gap-2 mb-6">
        <p className=" text-gray-600 dark:text-gray-400">
          Filter stories by category
        </p>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg hover:scale-105 transition-all"
        >
          <Filter className="w-4 h-4 text-rose-500" />
          {currentFilter}
        </button>
      </div>

      {open && (
        <div className="absolute mt-12 w-56 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-2 border border-gray-200 dark:border-gray-700 z-50">
          {genres.map((g) => (
            <button
              key={g}
              onClick={() => {
                setFilter(g);
                setOpen(false);
                setCurrentFilter(g);
                if (g === "Favorites")  onFavoriteClick();
              }}
              className={`w-full text-left px-4 py-2 rounded-xl text-sm font-medium transition ${
                currentFilter === g
                  ? "border border-indigo-600 bg-indigo-900  text-white shadow-lg"
                  : "hover:bg-indigo-200 dark:hover:bg-indigo-900/40 text-gray-700 dark:text-gray-300"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
