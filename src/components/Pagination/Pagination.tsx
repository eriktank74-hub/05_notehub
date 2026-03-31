import ReactPaginateBase from "react-paginate";
import css from "./Pagination.module.css";

interface ReactPaginateProps {
  totalPages: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  currentPage: number;
}

function ReactPaginate({
  totalPages,
  onPageChange,
  currentPage,
}: ReactPaginateProps) {
  return (
    <ReactPaginateBase
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

export default ReactPaginate;
