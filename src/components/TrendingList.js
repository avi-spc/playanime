import { Fragment } from "react";
import AnimeList from "./AnimeList";

const TrendingList = () => {
  return (
    <Fragment>
      <h3>Trending</h3>
      <AnimeList type="compact" />
    </Fragment>
  );
};

export default TrendingList;
