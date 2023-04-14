import AnimePostcard from "./AnimePostcard";

const AnimeList = () => {
  return (
    <div className="anime-list">
      {Array.from(Array(5)).map((anime, index) => (
        <AnimePostcard key={index} />
      ))}
    </div>
  );
};

export default AnimeList;
