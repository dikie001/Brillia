import Navbar from "@/components/app/Navbar";
import { TEASERS_CURRENTPAGE } from "@/constants";
import brainTeasers from "@/jsons/brainTeaser";
import ContactAdminModal from "@/modals/ContactAdmin";
import {
  Eye,
  EyeOff,
  Heart,
  LoaderCircle
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";
import Paginate from "../components/app/paginations";

export type Teaser = {
  id: number;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Logic" | "Riddle" | "Math" | "Lateral";
};

const FAVOURITE_TEASERS = "favourite-teasers";


export default function BrainTeasersPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teasers, setTeasers] = useState<Teaser[]>([]);
  const teasersRef = useRef<Teaser[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [openContactAdmin, setOpenContactAdmin] = useState(false);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());

  useEffect(() => {
    PaginationPage();
    if (currentPage !== 1) {
      localStorage.setItem(
        "brain-teaser-currentPage",
        JSON.stringify(currentPage)
      );
    }
  }, [currentPage]);

  useEffect(() => {
    FetchInfo();
  }, []);

  // Navigate to the next page in pagination
  const PaginationPage = () => {
    const teasersLength = brainTeasers ? brainTeasers.length : 0;
    teasersLength === 0 && setOpenContactAdmin(true);
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = teasersRef.current.slice(start, end);
    console.log(end, brainTeasers.length);

    setTeasers(currentItems);
    if (end > teasersLength) {
      setCurrentPage(1);
      localStorage.removeItem(TEASERS_CURRENTPAGE);
      toast.info("Out of teasers, restarting from the top");
    }
  };

  // fetch current page info from storage
  const FetchInfo = () => {
    setLoading(true);
    teasersRef.current = brainTeasers;

    const lastPage = localStorage.getItem(TEASERS_CURRENTPAGE);
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
      PaginationPage();
    }

    // Load favorites from localStorage
    const storedFavorites = localStorage.getItem(FAVOURITE_TEASERS);
    const favoriteTeasers: Set<number> = storedFavorites
      ? new Set<number>(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favoriteTeasers);

    setLoading(false);
  };

  const toggleReveal = (id: number) => {
    const newRevealed = new Set(revealed);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealed(newRevealed);
  };

  // Toggle favorites
  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Teaser removed from favorites");
      } else {
        newFavorite.add(id);
        toast.success("Teaser added to favorites");
      }

      const existingData = localStorage.getItem(FAVOURITE_TEASERS);
      const existingFavorites: Set<number> = existingData
        ? new Set(JSON.parse(existingData))
        : new Set();

      if (existingFavorites.has(id)) {
        existingFavorites.delete(id);
      } else {
        existingFavorites.add(id);
      }

      localStorage.setItem(
        FAVOURITE_TEASERS,
        JSON.stringify(Array.from(existingFavorites))
      );
      return newFavorite;
    });
  };

  return (
    <div className="min-h-screen p-2 bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-500">
      <Navbar currentPage="Brain Teasers" />
      {openContactAdmin && (
        <ContactAdminModal
          openContactAdmin={openContactAdmin}
          setOpenContactAdmin={setOpenContactAdmin}
        />
      )}
      <div className="relative z-10 max-w-7xl mx-auto pt-16">
        {/* Header */}
        <header className="text-center mb-6 mt-4"></header>

        {/* Top Paginate */}
        {teasers.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            teasers={teasers}
            totalItems={brainTeasers.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Loading */}
        {loading ||
          (teasers.length === 0 && (
            <div className="flex flex-col absolute inset-0 bg-white/80 dark:bg-transparent h-screen items-center justify-center w-full  ">
              <LoaderCircle className="w-10 h-10 animate-spin text-indigo-500" />
              <p className="font-medium">Loading teasers...</p>
            </div>
          ))}

        {/* Grid of teasers */}
        <div className="grid gap-4 mb-6  sm:grid-cols-2 lg:grid-cols-3">
          {teasers.map((teaser) => {
            const isRevealed = revealed.has(teaser.id);

            return (
              <div
                key={teaser.id}
                className="teaser-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg p-4 flex flex-col justify-between border border-white/20 dark:border-gray-700/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {teaser.category}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleFavorites(teaser.id)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        favorite.has(teaser.id)
                          ? "text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 scale-110"
                          : "text-gray-400 hover:text-indigo-600 hover:bg-red-50 dark:hover:bg-indigo-900/20"
                      }`}
                      title={
                        favorite.has(teaser.id) ? "Remove from favorites" : "Add to favorites"
                      }
                    >
                      <Heart
                        className={`w-5 h-5 ${favorite.has(teaser.id) ? "fill-current" : ""}`}
                      />
                    </button>
                  </div>
                  

                  <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Puzzle #{teaser.id}
                  </h2>

                  <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 p-4 rounded-2xl mb-4">
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {teaser.question}
                    </p>
                  </div>
                </div>

                <div className="text-white bg-gradient-to-r from-indigo-600 to-indigo-900 flex justify-center items-center font-medium absolute -top-4 -right-2  shadow-lg w-8 h-8 rounded-full ">
                  {teaser.id}
                </div>

                <div className="mt-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleReveal(teaser.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 ease-in-out ${
                      isRevealed
                        ? "bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg"
                        : "bg-gradient-to-r from-indigo-700 to-indigo-600 text-white shadow-lg"
                    }`}
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="w-4 h-4" /> Hide Solution
                      </>
                    ) : (
                      <>
                        <Eye className="w-4 h-4" /> Reveal Solution
                      </>
                    )}
                  </button>

                  {isRevealed && (
                    <div className="mt-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-2xl border-l-4 border-indigo-400">
                      <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                        <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                          Solution:{" "}
                        </span>
                        {teaser.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Paginate */}
        {teasers.length !== 0 && (
          <Paginate
            currentPage={currentPage}
            teasers={teasers}
            totalItems={brainTeasers.length}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* {teasers.length === 0 && (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-indigo-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No teasers available.
            </p>
          </div>
        )} */}
      </div>
      <Toaster richColors position="top-center" />
    </div>
  );
}
