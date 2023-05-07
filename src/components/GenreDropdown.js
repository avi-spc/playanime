import { useContext, useRef } from "react";

import { GenreContext } from "../contexts/genreContextProvider";
import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";
import { captalizeEachWord } from "../utils/capitalize";

const GenreDropdown = () => {
  const { genres, updateGenre } = useContext(GenreContext);
  const { genreId } = useParams();

  useEffect(() => {
    updateGenre(genreId);
  }, [genreId]);

  return (
    <div className="genre-dropdown">
      <div className="genre-dropdown__active-genre">
        <button className="btn btn--genre">
          {captalizeEachWord(genreId.replaceAll("-", " "))}
        </button>
        <img src="/images/icons/arrow_right.png" alt="" />
        <div className="genre-dropdown__genre-list">
          {genres.map((genre) => (
            <NavLink to={`/genre/${genre}`} key={genre}>
              <button className="btn btn--genre">
                {genre.replaceAll("-", " ")}
              </button>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreDropdown;
