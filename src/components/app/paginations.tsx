import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import useSound from "@/hooks/useSound";
import { cn } from "@/lib/utils";
import type { Story } from "@/types";
import type { Teaser } from "../../pages/USER/QuickChallenges";

interface MainProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  teasers?: Teaser[];
  story?: Story[];
  totalItems?: number;
  itemsPerPage?: number; // Added flexibility
}

const Paginate = ({
  currentPage,
  setCurrentPage,
  totalItems = 0,
  itemsPerPage = 10,
}: MainProps) => {
  const { playSend } = useSound();
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // If there is only 1 page (or 0), don't show pagination
  if (totalPages <= 1) return null;

  const handlePageChange = (e: React.MouseEvent, page: number) => {
    e.preventDefault();
    if (page < 1 || page > totalPages || page === currentPage) return;
    playSend();
    setCurrentPage(page);
    // Optional: Scroll to top of list
    // window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex justify-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Glassy Floating Container */}
      <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-full px-4 py-2 shadow-xl shadow-indigo-500/10">
        <Pagination>
          <PaginationContent>
            {/* PREVIOUS BUTTON */}
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => handlePageChange(e, currentPage - 1)}
                className={cn(
                  "transition-all duration-200 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:text-indigo-600",
                  currentPage === 1
                    ? "pointer-events-none opacity-30"
                    : "cursor-pointer"
                )}
              />
            </PaginationItem>

            {/* PAGE 1 (Always Visible if not on page 1) */}
            {currentPage > 2 && (
              <PaginationItem className="hidden sm:block">
                <PaginationLink
                  href="#"
                  onClick={(e) => handlePageChange(e, 1)}
                  className="rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all w-9 h-9"
                >
                  1
                </PaginationLink>
              </PaginationItem>
            )}

            {/* ELLIPSIS (If far from start) */}
            {currentPage > 3 && (
              <PaginationItem className="hidden sm:block">
                <PaginationEllipsis className="text-gray-400" />
              </PaginationItem>
            )}

            {/* PREVIOUS NEIGHBOR */}
            {currentPage > 1 && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => handlePageChange(e, currentPage - 1)}
                  className="rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all w-9 h-9 hover:scale-110"
                >
                  {currentPage - 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* CURRENT PAGE (Active) */}
            <PaginationItem>
              <PaginationLink
                href="#"
                isActive
                className="rounded-full bg-gradient-to-r from-indigo-600 to-indigo-500 text-white border-none shadow-md shadow-indigo-500/30 hover:bg-indigo-700 hover:scale-110 transition-all w-9 h-9"
              >
                {currentPage}
              </PaginationLink>
            </PaginationItem>

            {/* NEXT NEIGHBOR */}
            {currentPage < totalPages && (
              <PaginationItem>
                <PaginationLink
                  href="#"
                  onClick={(e) => handlePageChange(e, currentPage + 1)}
                  className="rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all w-9 h-9 hover:scale-110"
                >
                  {currentPage + 1}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* ELLIPSIS (If far from end) */}
            {currentPage < totalPages - 2 && (
              <PaginationItem className="hidden sm:block">
                <PaginationEllipsis className="text-gray-400" />
              </PaginationItem>
            )}

            {/* LAST PAGE (Always visible if far away) */}
            {currentPage < totalPages - 1 && (
              <PaginationItem className="hidden sm:block">
                <PaginationLink
                  href="#"
                  onClick={(e) => handlePageChange(e, totalPages)}
                  className="rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 transition-all w-9 h-9"
                >
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            {/* NEXT BUTTON */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => handlePageChange(e, currentPage + 1)}
                className={cn(
                  "transition-all duration-200 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/50 hover:text-indigo-600",
                  currentPage >= totalPages
                    ? "pointer-events-none opacity-30"
                    : "cursor-pointer"
                )}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
};

export default Paginate;
