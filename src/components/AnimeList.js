import AnimePostcard from "./AnimePostcard";

const AnimeList = ({ type }) => {
  return (
    <div className={`anime-list anime-list--${type}`}>
      {Array.from(Array(5)).map((anime, index) => (
        <AnimePostcard key={index} type={type} />
      ))}
    </div>
  );
};

export default AnimeList;
