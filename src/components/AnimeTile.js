import { NavLink } from "react-router-dom";
import AnimeOverlayDetails from "./AnimeOverlayDetails";

const AnimeTile = ({ anime }) => {
  return (
    <NavLink to={`/stream/${anime.id}`}>
      <div className="anime-tile">
        <img className="anime-tile__image" src={anime.image} alt="" />
        <div className="anime-tile__name">{anime.title}</div>
        <AnimeOverlayDetails />
      </div>
    </NavLink>
  );
};
export default AnimeTile;
