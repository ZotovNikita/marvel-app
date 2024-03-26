export interface Pagination {
  offset: number;
  handlePagination: (newOffset: number) => void;
}
