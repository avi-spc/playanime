import { Fragment, useContext } from "react";

import AnimeGrid from "../components/AnimeGrid";
import AlphanumericSearch from "../components/AlphanumericSearch";
import { RecentEpisodesContext } from "../contexts/recentEpisodesContext";

const Home = () => {
  const { recentEpisodes, recentEpisodesDetails } = useContext(
    RecentEpisodesContext
  );
  return (
    <Fragment>
      <AnimeGrid
        animeList={recentEpisodes.slice(4, 20)}
        animeDetails={recentEpisodesDetails}
      />
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Home;
