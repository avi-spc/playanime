import { NavLink } from "react-router-dom";
import { captalizeEachWord } from "../utils/capitalize";

const AnimePostcard = ({ type, anime }) => {
  const displayExtraInfo = (type) => {
    switch (type) {
      case "compact":
        return anime.latestEp;
      case "broad":
        return anime.releasedDate;
      case "search":
        return anime.status.split(":")[1];
    }
  };

  return (
    <NavLink to={`/stream/${anime.animeId}`}>
      <div className={`anime-postcard ${type}`}>
        <img className="anime-postcard__image" src={anime.animeImg} />
        <div className="anime-postcard__name">
          {anime.animeTitle !== ""
            ? anime.animeTitle
            : captalizeEachWord(anime.animeId.replaceAll("-", " "))}
        </div>
        <div className="anime-postcard__viewers">
          <span className="anime-postcard__viewers--count">
            {displayExtraInfo(type)}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default AnimePostcard;
