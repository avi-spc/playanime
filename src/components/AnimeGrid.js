import AnimeTile from "./AnimeTile";

const AnimeGrid = () => {
  return (
    <div className="anime-grid">
      {Array.from(Array(8).keys()).map((anime, index) => (
        <AnimeTile key={index} />
      ))}
    </div>
  );
};

export default AnimeGrid;
