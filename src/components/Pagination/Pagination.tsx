import css from "./Pagination.module.css";
import ReactPaginate from "react-paginate";


interface PaginationProps {
  totalPages: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  currentPage: number;
}


function Paginate({
  totalPages,
  onPageChange,
  currentPage,
}: PaginationProps) {
  return (
    <ReactPaginate
      pageCount={totalPages}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      nextLabel="→"
      previousLabel="←"
    />
  );
}

export default Paginate;
