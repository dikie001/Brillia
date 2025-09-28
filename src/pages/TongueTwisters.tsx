
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { twisters } from "@/jsons/tongueTwisters";
import type { Twister } from "@/types";
import { LoaderCircle, Mic, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Paginate from "../components/app/paginations";
import { TONGUETWISTERS_CURRENTPAGE } from "@/constants";

const difficultyColors = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const TongueTwisters = () => {
  const [selectedTwister, setSelectedTwister] = useState<number | null>(null);
  const [displayedTwisters, setDisplayedTwisters] = useState<Twister[]>([]);
  const twistersRef = useRef<Twister[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Navigate to the next page in pagination
  const PaginationPage = () => {
    const twistersLength = twistersRef.current.length;
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = twistersRef.current.slice(start, end);
    setDisplayedTwisters(currentItems);
    if (end > twistersLength) {
      setCurrentPage(1);
      localStorage.removeItem(TONGUETWISTERS_CURRENTPAGE);
    }
  };

  // fetch current page info from storage
  const FetchInfo = () => {
    setLoading(true);
    twistersRef.current = twisters.filter((drill) => drill.category === "Tongue Twister");
    const lastPage = localStorage.getItem(TONGUETWISTERS_CURRENTPAGE);
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
      PaginationPage();
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchInfo();
  }, []);

  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(TONGUETWISTERS_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selectedTwister !== null) {
        setSelectedTwister(null);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedTwister]);

  const selectedTwisterData = selectedTwister
    ? twistersRef.current.find((t) => t.id === selectedTwister)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-900 text-gray-900 dark:text-gray-100 p-6">
      <div className="relative z-10 max-w-7xl mx-auto">
        <Navbar currentPage="Tongue Twisters" />
        <header className="text-center mb-6 pt-20">
          <div className="relative inline-block">
            <Mic className="w-16 h-16 text-indigo-500 dark:text-indigo-400 mx-auto mb-4" />
            <div className="absolute -top-1 -right-2">
              <Mic className="w-4 h-4 text-indigo-500 animate-pulse" />
            </div>
          </div>
      
          {/* <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Challenge your articulation with these tricky phrases. Practice makes perfect!
          </p> */}
          <div className="w-16 sm:w-24 h-1 bg-indigo-500 mx-auto rounded-full "></div>
        </header>

        {/* Top Paginate */}
        {displayedTwisters.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            totalItems={twistersRef.current.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Loading */}
        {loading ||
          (displayedTwisters.length === 0 && (
            <div className="flex flex-col absolute inset-0 bg-white/80 dark:bg-transparent h-screen items-center justify-center w-full  ">
              <LoaderCircle className="w-10 h-10 animate-spin text-indigo-500" />
              <p className="font-medium">Loading twisters...</p>
            </div>
          ))}

        <div className="grid gap-4 lg:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedTwisters.map((twister, index) => (
            <div
              key={twister.id}
              className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-103 border border-white/20 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedTwister(twister.id)}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    difficultyColors[twister.difficulty]
                  }`}
                >
                  {twister.difficulty}
                </span>
              </div>

              <p className="text-gray-800 dark:text-gray-200 leading-relaxed mb-4 text-lg">
                "{twister.text}"
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {twister.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-300 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <button
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold transition-all duration-300 bg-indigo-500 text-white hover:bg-indigo-600"
              >
                View Twister
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Paginate */}
        {displayedTwisters.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            totalItems={twistersRef.current.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-indigo-500 to-indigo-700 bg-clip-text text-transparent">
            Why Practice Tongue Twisters?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Mic className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Improve Articulation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enhance your speech clarity and pronunciation skills.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Mic className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Build Confidence</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gain confidence in public speaking and communication.
              </p>
            </div>
            <div className="bg-white/70 dark:bg-gray-800/70 rounded-2xl p-6">
              <Mic className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Fun Challenge</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enjoy the playful way to sharpen your linguistic abilities.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {selectedTwisterData && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTwister(null)}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white dark:bg-gray-800 px-8 py-6 border-b border-gray-200 dark:border-gray-700 rounded-t-3xl">
              <div className="flex items-center justify-between">
                <span
                  className={`px-4 py-2 rounded-full text-sm font-bold ${
                    difficultyColors[selectedTwisterData.difficulty]
                  }`}
                >
                  {selectedTwisterData.difficulty}
                </span>
                <button
                  onClick={() => setSelectedTwister(null)}
                  className="p-1.5 hover:bg-indigo-100 dark:hover:bg-indigo-900 rounded-md transition-colors text-gray-500 hover:text-indigo-700 dark:hover:text-indigo-300"
                >
                  <X size={20} />
                </button>
              </div>
              <h1 className="text-4xl font-black mt-4 text-gray-800 dark:text-gray-100">
                Tongue Twister
              </h1>
            </div>

            <div className="px-8 py-8">
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-2xl whitespace-pre-line text-center font-serif italic">
                  "{selectedTwisterData.text}"
                </p>
              </div>
            </div>

            <div className="px-8 py-6 flex justify-between border-t border-gray-200 dark:border-gray-700 bg-indigo-50 dark:bg-indigo-950 rounded-b-3xl">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Press ESC to close
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedTwisterData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-full text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TongueTwisters;
