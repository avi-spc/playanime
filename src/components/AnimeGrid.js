import { useContext } from "react";

import AnimeTile from "./AnimeTile";
import { RecentEpisodesContext } from "../contexts/recentEpisodesContext";

const AnimeGrid = () => {
  const { recentEpisodes } = useContext(RecentEpisodesContext);

  return (
    <section className="anime-gallery">
      <h3>Recently Added</h3>
      <div className="anime-grid">
        {recentEpisodes.slice(4, 20).map((anime) => (
          <AnimeTile key={anime.id} anime={anime} />
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;
