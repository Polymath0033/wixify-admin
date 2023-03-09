import { useState } from "react";
const useTable = (data, dataLimit, pageLimit) => {
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => {
    setCurrentPage((page) => page + 1);
  };
  const prevPage = () => {
    setCurrentPage((page) => page - 1);
  };
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }
  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };
  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };
  return {
    currentPage,
    nextPage,
    prevPage,
    changePage,
    getPaginatedData,
    getPaginationGroup,
  };
};
export default useTable;
