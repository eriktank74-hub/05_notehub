import css from "./Pagination.module.css";
import type { ComponentType } from "react";
import ReactPaginateModule from "react-paginate";
import type { ReactPaginateProps } from "react-paginate";


type ModuleWithDefault<T> = { default: T };

interface PaginationProps {
  totalPages: number;
  onPageChange: ({ selected }: { selected: number }) => void;
  currentPage: number;
}

const ReactPaginate = (
  ReactPaginateModule as unknown as ModuleWithDefault<ComponentType<ReactPaginateProps>>
).default;



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
