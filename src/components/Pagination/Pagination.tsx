import React from 'react';
import './Pagination.css';

const Pagination = ({
  currentPage,
  lastPage,
  maxLength,
  handlePageClick
}: {
  currentPage: number;
  lastPage: number;
  maxLength: number;
  handlePageClick: (pageNumber: number) => void;
}): JSX.Element => {

  const handleClick = (pageNumber: number) => {
    handlePageClick(pageNumber);
  };

  const handlePageMove = (next: boolean) => {
    const newPage = next
      ? Math.min(lastPage, currentPage + 1)
      : Math.max(1, currentPage - 1);
    handlePageClick(newPage);
  };

  const left: number = Math.max(1, currentPage - Math.ceil(maxLength / 2));
  const right: number = Math.min(left + maxLength, lastPage);

  return (
    <div className="pagination-container">
      <button
        onClick={() => handleClick(1)}
        className="page-button"
        type="button"
      >
        «
      </button>
      <button
        onClick={() => handlePageMove(false)}
        className="page-button"
        type="button"
      >
        ‹
      </button>
      <div className="pages">
        {right >= left &&
          Array.from({ length: right - left }, (_, i) => {
            const pageNumber = left + i;
            return (
              <button
                key={pageNumber}
                onClick={() => handleClick(pageNumber)}
                className={`page-button${
                  pageNumber === currentPage ? ' cur-page-button' : ''
                }`}
                type="button"
              >
                {pageNumber}
              </button>
            );
          })}
      </div>
      <button
        onClick={() => handlePageMove(true)}
        className="page-button"
        type="button"
      >
        ›
      </button>
      <button
        onClick={() => handleClick(lastPage)}
        className="page-button"
        type="button"
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
