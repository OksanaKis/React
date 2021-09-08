import { useMemo } from "react";

export const usePagination = (totalPages) => {
const pagesArray = [];
    useMemo(() => {
        // console.log('work useMemo, usePagination');
        for (let i = 0; i < totalPages; i++) {
          pagesArray.push(i+1)
        }
    }, [pagesArray, totalPages]);
    // console.log(pagesArray);
    return pagesArray;
}