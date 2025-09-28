import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import type { Teaser } from "../../pages/BrainTeasers";
import type { Story } from "@/types";

interface MainProps {
  currentPage: number;
  teasers?: Teaser[];
  story?: Story[];
  totalItems?: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const Paginate = ({ currentPage, setCurrentPage, totalItems }: MainProps) => {
  return (
    <div>
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
              const totalPages = Math.ceil((totalItems || 0) / 10);
              if (currentPage < totalPages) {
                setCurrentPage((p) => p + 1);
              }
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
    </div>
  );
};

export default Paginate;
