import { NavLink } from "react-router-dom";

const AnimePostcard = ({ type, anime }) => {
  return (
    <NavLink to={`/stream/${anime.animeId}`}>
      <div className={`anime-postcard ${type}`}>
        <img className="anime-postcard__image" src={anime.animeImg} />
        <div className="anime-postcard__name">{anime.animeTitle}</div>
        <div className="anime-postcard__viewers">
          <span className="anime-postcard__viewers--count">
            {type === "compact" ? anime.latestEp : anime.status.split(":")[1]}
          </span>
        </div>
      </div>
    </NavLink>
  );
};

export default AnimePostcard;

//"https://img.bunnycdnn.ru/_r/300x400/100/f1/21/f121f498b3be50b194236f055c97c6df/f121f498b3be50b194236f055c97c6df.jpg
