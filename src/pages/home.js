import { Fragment, useContext } from "react";

import AnimeGrid from "../components/AnimeGrid";
import AlphanumericSearch from "../components/AlphanumericSearch";
import { RecentEpisodesContext } from "../contexts/recentEpisodesContext";

const Home = () => {
  return (
    <Fragment>
      <AnimeGrid />
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Home;
