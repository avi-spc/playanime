import { NavLink } from "react-router-dom";

import AnimeOverlayDetails from "./AnimeOverlayDetails";
import { captalizeEachWord } from "../utils/capitalize";

const AnimeTile = ({ anime, details }) => {
  return (
    <NavLink to={`/stream/${anime.animeId}`}>
      <div className="anime-tile">
        <div className="anime-tile__img-p-overlay">
          <img className="anime-tile__image" src={anime.animeImg} alt="" />
          <div className="anime-tile__hover-overlay">
            <img src="/images/icons/play.png" alt="" />
          </div>
        </div>
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
