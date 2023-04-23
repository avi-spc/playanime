import { useContext } from "react";

import { GenreContext } from "../contexts/genreContextProvider";

const GenreDropdown = () => {
  const { genres } = useContext(GenreContext);

  return (
    <span className="genre-dropdown">
      <div className="genre-dropdown__active-genre">
        <button className="btn btn--genre ">Action</button>
        <img src="/images/icons/arrow_right.png" alt="" />
      </div>
      <div className="genre-dropdown__genre-list">
        {genres.map((genre) => (
          <button className="btn btn--sm" key={genre}>
            {genre}
          </button>
        ))}
      </div>
    </span>
  );
};

export default GenreDropdown;
