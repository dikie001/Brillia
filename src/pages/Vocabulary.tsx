/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
// import { copyToClipboard } from "@/utils/miniFunctions";
import { CheckCircle, Heart, Mail, RefreshCw, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";
import { vocabulary as vocabularyData } from "../jsons/vocabulary";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Updated Type
type VocabularyWord = {
  id: number;
  word: string;
  phonetic: string;
  definition: string;
  example: string;
};

const FAVORITE_WORDS = "favorite-words";
const VOCAB_CURRENTPAGE = "vocab-current-page";

export default function VocabularyPage() {
  //   const [copied, setCopied] = useState<number | null>(null);
  const [displayedWords, setDisplayedWords] = useState<VocabularyWord[]>([]);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);

  // Calculate total pages
  const totalItems = showFavoritesOnly ? favorite.size : vocabularyData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const isLastPage =
    currentPage === totalPages && !showFavoritesOnly && totalItems > 0;

  const speakWord = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.8;
      window.speechSynthesis.speak(utterance);
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

  // Reset function
  const handleReset = () => {
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
      if (newFavorite.has(id)) newFavorite.delete(id);
      else newFavorite.add(id);

      localStorage.setItem(
        FAVORITE_WORDS,
        JSON.stringify(Array.from(newFavorite))
      );
      return newFavorite;
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-900/50 dark:to-black text-gray-900 dark:text-gray-100 p-4">
      <Navbar currentPage="Vocabulary" />

      <div className="relative z-10 max-w-7xl mx-auto pt-18">
        {/* Simple Filter Toggle */}
        <div className="flex justify-end mb-6">
          <Button
            variant="outline"
            onClick={() => {
              setShowFavoritesOnly(!showFavoritesOnly);
              setCurrentPage(1);
            }}
            className={cn(
              "rounded-full gap-2 transition-all",
              showFavoritesOnly &&
                "border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/30 dark:text-rose-400 dark:hover:bg-rose-950/50"
            )}
          >
            <Heart
              className={cn("w-4 h-4", showFavoritesOnly && "fill-current")}
            />
            {showFavoritesOnly ? "Showing Favorites" : "Show Favorites"}
          </Button>
        </div>

        {/* Top Paginate */}
        {!isLastPage && displayedWords.length > 0 && (
          <Paginate
            currentPage={currentPage}
            totalItems={totalItems}
            setCurrentPage={setCurrentPage}
          />
        )}

        {/* Vocabulary Grid */}
        {showFavoritesOnly && displayedWords.length === 0 ? (
          <NoFavorites />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 mb-6">
            {displayedWords.map((item, index) => {
              const isFavorite = favorite.has(item.id);
              //   const isCopied = copied === item.id;

              return (
                <div
                  key={item.id}
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:scale-105 flex flex-col h-full border border-white/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-baseline justify-between mb-2">
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.word}
                      </h2>
                      <span className="text-sm text-gray-500 font-mono dark:text-gray-400">
                        {item.phonetic}
                      </span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-4 leading-snug">
                      {item.definition}
                    </p>

                    <div className="bg-indigo-50 dark:bg-indigo-900/20 p-3 rounded-xl border-l-4 border-indigo-400 mb-4">
                      <p className="text-sm italic text-gray-600 dark:text-gray-400">
                        "{item.example}"
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700 mt-auto">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => speakWord(item.word)}
                        className="p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all"
                        title="Listen"
                      >
                        <Volume2 className="w-5 h-5" />
                      </button>
                      {/* <button
                        onClick={() => {
                          copyToClipboard(
                            `${item.word}: ${item.definition}`,
                            setCopied
                          );
                          setCopied(item.id);
                          setTimeout(() => setCopied(null), 2000);
                        }}
                        className={`p-2 rounded-full transition-all ${
                          isCopied
                            ? "bg-indigo-100 text-indigo-600"
                            : "hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600"
                        }`}
                      >
                        {isCopied ? (
                          <CheckCircle className="w-5 h-5" />
                        ) : (
                          <Copy className="w-5 h-5" />
                        )}
                      </button> */}
                    </div>

                    <button
                      onClick={() => toggleFavorites(item.id)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isFavorite
                          ? "text-rose-500 bg-rose-100 dark:bg-rose-900/30 scale-110"
                          : "text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                      }`}
                    >
                      <Heart
                        className={`w-5 h-5 ${
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
          <div className="mt-12 mb-8 text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-dashed border-indigo-200 dark:border-gray-700 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full mb-2">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                You've reached the end!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
                You've browsed through all {vocabularyData.length} words. Great
                job keeping your vocabulary sharp!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-0.5"
                >
                  <RefreshCw className="w-4 h-4" />
                  Start Over
                </button>
                <a
                  href="mailto:developer@example.com?subject=New Vocabulary Suggestion"
                  className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-full font-medium transition-all dark:bg-transparent dark:border-gray-600 dark:text-gray-300 dark:hover:bg-white/5 hover:-translate-y-0.5"
                >
                  <Mail className="w-4 h-4" />
                  Suggest a Word
                </a>
              </div>
            </div>
          </div>
        ) : (
          displayedWords.length > 0 && (
            <Paginate
              currentPage={currentPage}
              totalItems={totalItems}
              setCurrentPage={setCurrentPage}
            />
          )
        )}

        <Footer />
      </div>
    </div>
  );
}
