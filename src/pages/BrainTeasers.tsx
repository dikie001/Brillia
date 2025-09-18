import { Brain, Eye, EyeOff, Lightbulb, Trophy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/app/Navbar";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import brainTeasers from "@/assets/jsons/brainTeaser";

export type Teaser = {
  id: number;
  question: string;
  answer: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: "Logic" | "Riddle" | "Math" | "Lateral";
};

const difficultyColors = {
  Easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Medium:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
  Hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
};

const categoryIcons = {
  Logic: Brain,
  Riddle: Lightbulb,
  Math: Trophy,
  Lateral: Eye,
};

export default function BrainTeasersPage() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const [teasers, setTeasers] = useState<Teaser[]>([]);
  const teasersRef = useRef<Teaser[]>([]);
  // const [currentIndex, setCurrentIndex] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  //Break down the array to arrays of 10
  // const paginate = () => {
  //   const newArr = teasersRef.current.filter(
  //     (_, index) => index < currentIndex
  //   );

  //   setTeasers(newArr);
  //   console.log(newArr);
  // };

  useEffect(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const currentItems = teasersRef.current.slice(start, end);
    setTeasers(currentItems);

    // Save the current page to storage
    currentPage !== 1 &&
      localStorage.setItem(
        "brain-teaser-currentPage",
        JSON.stringify(currentPage)
      );
  }, [currentPage]);

  // Save the teasers to state
  useEffect(() => {
    teasersRef.current = brainTeasers 
    // Get current page from storage
    const lastPage = localStorage.getItem("brain-teaser-currentPage");
    if (lastPage) {
      const num = Number(lastPage);
      setCurrentPage(num);
    } else {
      setCurrentPage(1);
    }
  }, []);

  const toggleReveal = (id: number) => {
    const newRevealed = new Set(revealed);
    if (newRevealed.has(id)) {
      newRevealed.delete(id);
    } else {
      newRevealed.add(id);
    }
    setRevealed(newRevealed);
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-100 dark:from-gray-900 dark:via-slate-800 dark:to-black text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar currentPage="Brain Teasers" />

      <div className="relative z-10 max-w-7xl mx-auto pt-16">
        {/* Header */}
        <header className="text-center mb-12">
    
          <p className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            Challenge your mind with these carefully curated puzzles and riddles
          </p>
        </header>

        {/* Top Paginaton */}
        <Pagination>
          <PaginationContent className="mb-6">
            <PaginationItem
              onClick={() => {
                currentPage !== 1 && setCurrentPage((p) => p - 1);
              }}
            >
              <PaginationPrevious href={`#${currentPage}`} />
            </PaginationItem>

            <PaginationItem
              className={`${currentPage === 1 && "hidden"}`}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <PaginationLink href={`#${currentPage}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem className="shadow-lg hover:ring ring-purple-500 rounded-md">
              <PaginationLink href={`#${currentPage}`} isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem
              onClick={() => {
                currentPage <= teasers.length && setCurrentPage((p) => p + 1);
              }}
            >
              <PaginationLink href={`#${currentPage}`}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem
              className={`${currentPage > 1 && "hidden"}`}
              onClick={() => setCurrentPage((p) => p + 2)}
            >
              <PaginationLink href={`#${currentPage + 2}`}>
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem onClick={() => setCurrentPage((p) => p + 1)}>
              <PaginationNext href={`#${currentPage}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {/* Grid of teasers */}
        <div className="grid gap-4 lg:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teasers.map((teaser) => {
            const isRevealed = revealed.has(teaser.id);
            const CategoryIcon = categoryIcons[teaser.category];

            return (
              <div
                key={teaser.id}
                className="teaser-card group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl shadow-xl p-6 flex flex-col justify-between border border-white/20 dark:border-gray-700/20"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <CategoryIcon className="w-5 h-5 text-purple-500" />
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {teaser.category}
                      </span>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-bold ${
                        difficultyColors[teaser.difficulty]
                      }`}
                    >
                      {teaser.difficulty}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Puzzle #{teaser.id}
                  </h2>

                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-2xl mb-4">
                    <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                      {teaser.question}
                    </p>
                  </div>
                </div>

                <div className="mt-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <button
                    onClick={() => toggleReveal(teaser.id)}
                    className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 ease-in-out ${
                      isRevealed
                        ? "bg-gradient-to-r from-red-500 to-pink-500  text-white shadow-lg"
                        : "bg-gradient-to-r from-purple-500 to-indigo-600   text-white shadow-lg"
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
                    <div className="mt-4 p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 rounded-2xl border-l-4 border-green-400">
                      <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-medium">
                        <span className="text-green-600 dark:text-green-400 font-bold">
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

        {/* Bottom pagination */}
        <Pagination>
          <PaginationContent className="mb-6 pt-8">
            <PaginationItem
              onClick={() => {
                currentPage !== 1 && setCurrentPage((p) => p - 1);
              }}
            >
              <PaginationPrevious href={`#${currentPage}`} />
            </PaginationItem>

            <PaginationItem
              className={`${currentPage === 1 && "hidden"}`}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              <PaginationLink href={`#${currentPage}`}>
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem className="shadow-lg hover:ring ring-purple-500 rounded-md">
              <PaginationLink href={`#${currentPage}`} isActive>
                {currentPage}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem
              onClick={() => {
                currentPage <= teasers.length && setCurrentPage((p) => p + 1);
              }}
            >
              <PaginationLink href={`#${currentPage}`}>
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem
              className={`${currentPage > 1 && "hidden"}`}
              onClick={() => setCurrentPage((p) => p + 2)}
            >
              <PaginationLink href={`#${currentPage + 2}`}>
                {currentPage + 2}
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem onClick={() => setCurrentPage((p) => p + 1)}>
              <PaginationNext href={`#${currentPage}`} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>

        {teasers.length === 0 && (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-xl text-gray-500 dark:text-gray-400">
              No teasers available.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
