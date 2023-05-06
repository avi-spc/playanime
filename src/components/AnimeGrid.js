import AnimeTile from "./AnimeTile";

const AnimeGrid = ({ animeList, animeDetails }) => {
  return (
    <section className="anime-gallery">
      <h3>Recently Added</h3>
      <div className="anime-grid">
        {animeList.map((anime) => (
          <AnimeTile
            key={anime.animeId}
            anime={anime}
            details={animeDetails.find(
              (details) => details.animeTitle === anime.animeTitle
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;
