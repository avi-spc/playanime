import { useContext } from "react";

import AnimeTile from "./AnimeTile";
import { RecentEpisodesContext } from "../contexts/recentEpisodesContext";

const AnimeGrid = () => {
  const { recentEpisodes, recentEpisodesDetails } = useContext(
    RecentEpisodesContext
  );

  return (
    <section className="anime-gallery">
      <h3>Recently Added</h3>
      <div className="anime-grid">
        {recentEpisodes.slice(4, 20).map((anime) => (
          <AnimeTile
            key={anime.animeId}
            anime={anime}
            details={recentEpisodesDetails.find(
              (details) =>
                details.animeTitle === anime.animeTitle ||
                details.animeTitle
                  .toLowerCase()
                  .includes(anime.animeId.replaceAll("-", " "))
            )}
          />
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;
