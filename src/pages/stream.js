import { Fragment, useContext } from "react";
import AnimeStream from "../components/AnimeStream";
import AnimeGrid from "../components/AnimeGrid";
import AlphanumericSearch from "../components/AlphanumericSearch";
import { RecentEpisodesContext } from "../contexts/recentEpisodesContext";

const Stream = () => {
  const { recentEpisodes, recentEpisodesDetails } = useContext(
    RecentEpisodesContext
  );

  return (
    <Fragment>
      <AnimeStream />
      <AnimeGrid
        animeList={recentEpisodes.slice(4, 20)}
        animeDetails={recentEpisodesDetails}
      />
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Stream;
