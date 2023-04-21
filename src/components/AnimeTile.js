import { NavLink } from "react-router-dom";

import AnimeOverlayDetails from "./AnimeOverlayDetails";
import { captalizeEachWord } from "../utils/capitalize";

const AnimeTile = ({ anime }) => {
  return (
    <NavLink to={`/stream/${anime.animeId}`}>
      <div className="anime-tile">
        <img className="anime-tile__image" src={anime.animeImg} alt="" />
        <div className="anime-tile__name">
          {anime.animeTitle !== ""
            ? anime.animeTitle
            : captalizeEachWord(anime.animeId.replaceAll("-", " "))}
        </div>
        <AnimeOverlayDetails />
      </div>
    </NavLink>
  );
};
export default AnimeTile;
