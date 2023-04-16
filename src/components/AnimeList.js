import AnimePostcard from "./AnimePostcard";

const AnimeList = ({ type }) => {
  return (
    <div className={`anime-list anime-list--${type} ${type}`}>
      {Array.from(Array(4)).map((anime, index) => (
        <AnimePostcard key={index} type={type} />
      ))}
    </div>
  );
};

export default AnimeList;
