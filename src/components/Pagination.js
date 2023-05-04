import { useContext } from "react";

import { PaginationContext } from "../contexts/paginationContextProvider";

const Pagination = () => {
  const { page, updatePageNumber } = useContext(PaginationContext);

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
