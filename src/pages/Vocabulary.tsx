/* eslint-disable react-hooks/exhaustive-deps */
import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import NoFavorites from "@/components/app/NoFavorites";
import Paginate from "@/components/app/paginations";
import { copyToClipboard } from "@/utils/miniFunctions";
import {vocabulary as vocabularyData} from "../jsons/vocabulary"
import {
  CheckCircle,
  Copy,
  Heart,
  Sparkles,
  Volume2,
  X
} from "lucide-react";
import { useEffect, useState } from "react";

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
  const [copied, setCopied] = useState<number | null>(null);
  const [displayedWords, setDisplayedWords] = useState<VocabularyWord[]>([]);
  const [favorite, setFavorite] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const [showFeaturedWord, setShowFeaturedWord] = useState(true);
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const speakWord = (text: string) => {
    if ('speechSynthesis' in window) {
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
    const favSet: Set<number> = storedFavorites ? new Set(JSON.parse(storedFavorites)) : new Set();
    setFavorite(favSet);

    setFeaturedIndex(Math.floor(Math.random() * vocabularyData.length));
    updateDisplayedWords();
  }, []);

  const toggleFavorites = (id: number) => {
    setFavorite((prev) => {
      const newFavorite = new Set(prev);
      if (newFavorite.has(id)) newFavorite.delete(id);
      else newFavorite.add(id);

      localStorage.setItem(FAVORITE_WORDS, JSON.stringify(Array.from(newFavorite)));
      return newFavorite;
    });
  };

  const featuredWord = vocabularyData[featuredIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-indigo-100 dark:from-gray-900 dark:via-indigo-900/50 dark:to-black text-gray-900 dark:text-gray-100 p-4">
      <Navbar currentPage="Vocabulary" />

      <div className="relative z-10 max-w-7xl mx-auto pt-18">
        
        {/* Featured Word Section */}
        {showFeaturedWord && featuredWord && (
          <div className="mb-8">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 p-6 rounded-3xl shadow-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                        <Sparkles className="w-5 h-5 text-yellow-300" />
                        <span className="text-sm font-bold uppercase tracking-wider opacity-80">Word of the Moment</span>
                    </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
                    {featuredWord.word}
                  </h1>
                  <div className="flex items-center gap-3 mb-4">
                     <span className="text-xl font-mono opacity-80">{featuredWord.phonetic}</span>
                     <button 
                        onClick={() => speakWord(featuredWord.word)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all"
                     >
                        <Volume2 className="w-5 h-5" />
                     </button>
                  </div>
                  <p className="text-lg md:text-xl font-medium leading-relaxed opacity-95">
                    "{featuredWord.definition}"
                  </p>
                </div>
                
                <div className="md:w-1/3 bg-white/10 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
                    <span className="text-xs font-bold uppercase opacity-70 mb-2 block">Example Usage</span>
                    <p className="italic text-lg">"{featuredWord.example}"</p>
                </div>
              </div>
               <X
                  className="absolute top-4 right-4 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                  size={24}
                  onClick={() => setShowFeaturedWord(false)}
                />
            </div>
          </div>
        )}

        {/* Simple Filter Toggle */}
        <div className="flex justify-end mb-6">
            <button 
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all ${
                    showFavoritesOnly 
                    ? "bg-rose-100 text-rose-600 border border-rose-200" 
                    : "bg-white/50 border border-gray-200 text-gray-600 hover:bg-white"
                }`}
            >
                <Heart className={`w-4 h-4 ${showFavoritesOnly ? "fill-current" : ""}`} />
                {showFavoritesOnly ? "Showing Favorites" : "Show Favorites"}
            </button>
        </div>

        {/* Top Paginate */}
        {displayedWords.length === 10 && (
          <Paginate
            currentPage={currentPage}
            totalItems={vocabularyData.length}
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
              const isCopied = copied === item.id;

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
                        <button
                            onClick={() => {
                                copyToClipboard(`${item.word}: ${item.definition}`, setCopied);
                                setCopied(item.id);
                                setTimeout(() => setCopied(null), 2000);
                            }}
                            className={`p-2 rounded-full transition-all ${
                            isCopied
                                ? "bg-indigo-100 text-indigo-600"
                                : "hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-gray-500 hover:text-indigo-600"
                            }`}
                        >
                            {isCopied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                        </button>
                    </div>

                    <button
                      onClick={() => toggleFavorites(item.id)}
                      className={`p-2 rounded-full transition-all duration-300 ${
                        isFavorite
                          ? "text-rose-500 bg-rose-100 dark:bg-rose-900/30 scale-110"
                          : "text-gray-400 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20"
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Paginate */}
        {displayedWords.length === 10 && (
            <Paginate
                currentPage={currentPage}
                totalItems={vocabularyData.length}
                setCurrentPage={setCurrentPage}
            />
        )}

        <Footer />
      </div>
    </div>
  );
}