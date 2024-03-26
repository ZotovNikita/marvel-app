import { useState, useEffect } from 'react';

interface PaginationResult {
  currentPage: number;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
  goToPage: (pageNumber: number) => void;
}

export default function usePagination(
  initialPage: number,
  totalPages: number,
  fetchPageData: (pageNumber: number) => void,
): PaginationResult {
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    fetchPageData(currentPage);
  }, [currentPage, fetchPageData]);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    currentPage,
    goToNextPage,
    goToPreviousPage,
    goToPage,
  };
}
