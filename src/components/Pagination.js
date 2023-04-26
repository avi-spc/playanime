import { useContext, useEffect, useState } from "react";

import { GenreContext } from "../contexts/genreContextProvider";

const Pagination = () => {
  const [page, setPage] = useState(1);

  const { genre, fetchGenreAnime } = useContext(GenreContext);

  const updatePageNumber = (delta) => {
    setPage((pageNumber) => {
      pageNumber += delta;

      if (pageNumber >= 1) return pageNumber;
      else return 1;
    });
  };

  useEffect(() => {
    fetchGenreAnime(page);
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [genre]);

  return (
    <div className="pagination">
      <button className="btn btn--trans" onClick={() => updatePageNumber(-1)}>
        <img src="/images/icons/arrow_left.png" alt="" />
      </button>
      <input type="text" value={page} disabled />
      <button className="btn btn--trans" onClick={() => updatePageNumber(1)}>
        <img src="/images/icons/arrow_right.png" alt="" />
      </button>
    </div>
  );
};

export default Pagination;
