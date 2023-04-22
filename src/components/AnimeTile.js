import { NavLink } from "react-router-dom";

import AnimeOverlayDetails from "./AnimeOverlayDetails";
import { captalizeEachWord } from "../utils/capitalize";
import { useState } from "react";

const AnimeTile = ({ anime, details }) => {
  return (
    <NavLink to={`/stream/${anime.animeId}`}>
      <div className="anime-tile">
        <img className="anime-tile__image" src={anime.animeImg} alt="" />
        <div className="anime-tile__name">
          {anime.animeTitle !== ""
            ? anime.animeTitle
            : captalizeEachWord(anime.animeId.replaceAll("-", " "))}
        </div>
        {details && <AnimeOverlayDetails details={details} />}
      </div>
    </NavLink>
  );
};
export default AnimeTile;
