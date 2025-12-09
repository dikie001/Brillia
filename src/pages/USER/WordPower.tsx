/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { Button } from "@/components/ui/button";
import { VOCAB_CURRENTPAGE } from "@/constants";
import useSound from "@/hooks/useSound";
import { vocabulary as vocabularyData } from "../../jsons/vocabulary";
import { cn } from "@/lib/utils";
import {
  CheckCircle,
  Heart,
  Mail,
  RefreshCw,
  Volume2,
  BookOpen,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast, Toaster } from "sonner";

type VocabularyWord = {
  id: number;
  word: string;
  phonetic: string;
  definition: string;
  example: string;
};

const FAVORITE_WORDS = "favorite-words";

export default function WordPower() {
  const [displayedWords, setDisplayedWords] = useState<VocabularyWord[]>([]);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Increased to 12 since cards are smaller
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const { playSend } = useSound();

  const totalItems = showFavoritesOnly ? favorite.size : vocabularyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isLastPage =
    currentPage === totalPages && !showFavoritesOnly && totalItems > 0;

  const speakWord = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      const voices = window.speechSynthesis.getVoices();
      const englishVoice = voices.find((voice) => voice.lang.includes("en"));
      if (englishVoice) utterance.voice = englishVoice;
      window.speechSynthesis.speak(utterance);
    } else {
      toast.error("Text-to-speech not supported in this browser.");
    }
  };

  const updateDisplayedWords = () => {
    let filtered = vocabularyData;

    if (showFavoritesOnly) {
      filtered = vocabularyData.filter((w) => favorite.has(w.id));
    }

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayedWords(filtered.slice(start, end));
  };

  const handleReset = () => {
    playSend();
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    updateDisplayedWords();
    if (currentPage !== 1) {
      localStorage.setItem(VOCAB_CURRENTPAGE, JSON.stringify(currentPage));
    }
  }, [currentPage, showFavoritesOnly, favorite]);

  useEffect(() => {
    const lastPage = localStorage.getItem(VOCAB_CURRENTPAGE);
    if (lastPage) setCurrentPage(Number(lastPage));

    const storedFavorites = localStorage.getItem(FAVORITE_WORDS);
    const favSet: Set<number> = storedFavorites
      ? new Set(JSON.parse(storedFavorites))
      : new Set();
    setFavorite(favSet);

    updateDisplayedWords();
  }, []);

  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) {
        newFavorite.delete(id);
        toast.success("Removed from favorites");
      } else {
        newFavorite.add(id);
        toast.success("Added to favorites");
      }

      localStorage.setItem(
        FAVORITE_WORDS,
        JSON.stringify(Array.from(newFavorite))
      );
      return newFavorite;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-indigo-100 to-indigo-200 dark:from-gray-900 dark:via-slate-800 dark:to-indigo-950 text-gray-900 dark:text-gray-100 relative overflow-x-hidden transition-colors duration-500">
      <Navbar currentPage="Word Power" />
      <Toaster richColors position="top-center" />

      <main className="relative z-10 max-w-7xl mx-auto pt-24 px-4 pb-12">
        {/* Header / Filter Toggle */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-2 bg-white/50 dark:bg-gray-800/50 px-4 py-2 rounded-full border border-white/20 dark:border-white/10 backdrop-blur-sm">
            <BookOpen className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {vocabularyData.length} Words Available
            </span>
          </div>

          <Button
            variant="outline"
            onClick={() => {
              playSend();
              setShowFavoritesOnly(!showFavoritesOnly);
              setCurrentPage(1);
            }}
            className={cn(
              "rounded-full px-6 h-10 border-indigo-200 dark:border-indigo-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all duration-300",
              showFavoritesOnly &&
                "bg-rose-50 text-rose-600 border-rose-200 hover:bg-rose-100 hover:text-rose-700 hover:border-rose-300 dark:bg-rose-950/30 dark:text-rose-400 dark:border-rose-900"
            )}
          >
            <Heart
              className={cn(
                "w-4 h-4 mr-2",
                showFavoritesOnly && "fill-current"
              )}
            />
            {showFavoritesOnly ? "Showing Favorites" : "Show Favorites"}
          </Button>
        </div>

        {/* Vocabulary Grid - UPDATED: tighter gap, 4 columns on XL */}
        {showFavoritesOnly && displayedWords.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mb-10">
            {displayedWords.map((item, index) => {
              const isFavorite = favorite.has(item.id);

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col h-full
                             bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                             rounded-2xl p-4 
                             border border-white/40 dark:border-white/5
                             hover:border-indigo-300 dark:hover:border-indigo-500/50
                             shadow-sm hover:shadow-[0_8px_30px_rgb(79,70,229,0.15)] 
                             transition-all duration-300 ease-out hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Content */}
                  <div className="flex-grow">
                    {/* Header: Compact */}
                    <div className="flex items-start justify-between mb-2">
                      <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors leading-tight">
                        {item.word}
                      </h2>
                      <span className="text-xs text-gray-400 font-mono bg-gray-50 dark:bg-gray-900/50 px-1.5 py-0.5 rounded ml-2 whitespace-nowrap">
                        {item.phonetic}
                      </span>
                    </div>

                    {/* Definition: No label, smaller text */}
                    <div className="mb-3">
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-snug">
                        {item.definition}
                      </p>
                    </div>

                    {/* Example: Compact Box */}
                    <div className="bg-indigo-50/50 dark:bg-indigo-900/20 p-2.5 rounded-lg border border-indigo-100 dark:border-indigo-800/30 mb-3">
                      <p className="text-xs italic text-gray-500 dark:text-gray-400 leading-relaxed">
                        "{item.example}"
                      </p>
                    </div>
                  </div>

                  {/* Actions Footer: Compact */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100 dark:border-gray-700/50">
                    <button
                      onClick={() => speakWord(item.word)}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 dark:text-gray-400 dark:hover:bg-indigo-900/30 dark:hover:text-indigo-300 transition-all text-xs font-medium"
                      title="Listen"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      Listen
                    </button>

                    <button
                      onClick={() => {
                        playSend();
                        toggleFavorites(item.id);
                      }}
                      className={`p-1.5 rounded-lg transition-all duration-200 ${
                        isFavorite
                          ? "text-rose-500 bg-rose-50 dark:bg-rose-900/20"
                          : "text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                      }`}
                    >
                      <Heart
                        className={`w-4 h-4 transition-transform active:scale-75 ${
                          isFavorite ? "fill-current" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Section: Completion Card OR Pagination */}
        {isLastPage ? (
          <div className="mt-8 mb-8 text-center bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/40 dark:border-white/5 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full mb-2 shadow-emerald-200/50 shadow-lg">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-gray-900 dark:text-white">
                You've reached the end!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-8 text-lg">
                You've browsed through all{" "}
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  {vocabularyData.length}
                </span>{" "}
                words. Great job keeping your vocabulary sharp!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-indigo-500/30 hover:-translate-y-1 hover:shadow-indigo-500/40"
                >
                  <RefreshCw className="w-5 h-5" />
                  Start Over
                </button>
                <a
                  href="mailto:dikie@example.com?subject=New Vocabulary Suggestion"
                  className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-full font-bold text-lg transition-all dark:bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/5 hover:-translate-y-1 shadow-sm hover:shadow-md"
                >
                  <Mail className="w-5 h-5" />
                  Suggest a Word
                </a>
              </div>
            </div>
          </div>
        ) : (
          displayedWords.length > 0 && (
            <div className="flex justify-center pb-8">
              <Paginate
                currentPage={currentPage}
                totalItems={totalItems}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )
        )}
      </main>
      <Footer />
    </div>
  );
}