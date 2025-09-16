import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      {/* Prev */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className={`px-3 py-1 rounded-md border text-sm transition ${
          currentPage === 1
            ? "text-gray-400 dark:text-gray-600 border-gray-300 dark:border-gray-700 cursor-not-allowed"
            : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        Prev
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded-md border text-sm transition ${
            page === currentPage
              ? "bg-indigo-600 text-white border-indigo-600"
              : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className={`px-3 py-1 rounded-md border text-sm transition ${
          currentPage === totalPages
            ? "text-gray-400 dark:text-gray-600 border-gray-300 dark:border-gray-700 cursor-not-allowed"
            : "text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
