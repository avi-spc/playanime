import { Fragment } from "react";
import AnimeStream from "../components/AnimeStream";
import AnimeGrid from "../components/AnimeGrid";
import AlphanumericSearch from "../components/AlphanumericSearch";

const Stream = () => {
  return (
    <Fragment>
      <AnimeStream />
      <AnimeGrid />
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Stream;
