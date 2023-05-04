import { createContext, useState } from "react";

export const PaginationContext = createContext();

const PaginationContextProvider = (props) => {
  const [page, setPage] = useState(1);

  const updatePageNumber = (delta) => {
    setPage((pageNumber) => {
      pageNumber += delta;

      if (pageNumber >= 1) return pageNumber;
      else return 1;
    });
  };

  const resetPage = () => {
    setPage(1);
  };

  return (
    <PaginationContext.Provider value={{ page, updatePageNumber, resetPage }}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
