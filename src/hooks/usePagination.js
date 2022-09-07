import { useMemo } from "react";

export const usePagination = (totalPages) => {
  let pagesArray = useMemo(() => {
    let pages = [];

    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1);
    }

    return pages;
  }, [totalPages]);

  return pagesArray;
};
