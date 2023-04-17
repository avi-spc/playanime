import AnimePostcard from "./AnimePostcard";

const AnimeList = ({ type, data }) => {
  return (
    <div className={`anime-list anime-list--${type}`}>
      {data.map((anime) => (
        <AnimePostcard key={anime.animeId} type={type} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeList;
