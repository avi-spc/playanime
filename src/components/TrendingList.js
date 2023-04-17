import { Fragment, useContext, useEffect } from "react";

import AnimeList from "./AnimeList";
import { TrendingContext } from "../contexts/trendingContext";

const TrendingList = () => {
  const { trendingAnime } = useContext(TrendingContext);

  return (
    <Fragment>
      <h3>Trending</h3>
      <AnimeList type="compact" data={trendingAnime} />
    </Fragment>
  );
};

export default TrendingList;
