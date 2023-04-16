import AnimeTile from "./AnimeTile";

const AnimeGrid = () => {
  return (
    <section className="anime-gallery">
      <h3>Recently Added</h3>
      <div className="anime-grid">
        {Array.from(Array(8).keys()).map((anime, index) => (
          <AnimeTile key={index} />
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;
