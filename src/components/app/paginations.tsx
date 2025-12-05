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
import useSound from "@/hooks/useSound";

interface MainProps {
  currentPage: number;
  teasers?: Teaser[];
  story?: Story[];
  totalItems?: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}
const Paginate = ({ currentPage, setCurrentPage, totalItems }: MainProps) => {
  const {playSend}=useSound()
  return (
    <div>
      <Pagination>
        <PaginationContent className="mb-6">
          <PaginationItem>
            <PaginationPrevious
              href={`#${currentPage}`}
              onClick={(e) => {
                e.preventDefault();
                playSend()
                if (currentPage !== 1) setCurrentPage((p) => p - 1);
              }}
            />
          </PaginationItem>

          <PaginationItem className={`${currentPage === 1 && "hidden"}`}>
            <PaginationLink
              href={`#${currentPage}`}
              onClick={(e) => {
                e.preventDefault();
                playSend()
                setCurrentPage((p) => p - 1);
              }}
            >
              {currentPage - 1}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className="shadow-lg hover:ring ring-purple-500 rounded-md">
            <PaginationLink href={`#${currentPage}`} isActive>
              {currentPage}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationLink
              href={`#${currentPage}`}
              onClick={(e) => {
                e.preventDefault();
                playSend()
                const totalPages = Math.ceil((totalItems || 0) / 10);
                if (currentPage < totalPages) {
                  setCurrentPage((p) => p + 1);
                }
              }}
            >
              {currentPage + 1}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem className={`${currentPage > 1 && "hidden"}`}>
            <PaginationLink
              href={`#${currentPage + 2}`}
              onClick={(e) => {
                e.preventDefault();
                playSend()
                setCurrentPage((p) => p + 2);
              }}
            >
              {currentPage + 2}
            </PaginationLink>
          </PaginationItem>

          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href={`#${currentPage}`}
              onClick={(e) => {
                e.preventDefault();
                playSend()
                setCurrentPage((p) => p + 1);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default Paginate;
