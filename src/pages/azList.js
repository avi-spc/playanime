import { Fragment } from "react";
import AlphanumericSearch from "../components/AlphanumericSearch";
import AnimeList from "../components/AnimeList";

const AZList = () => {
  return (
    <Fragment>
      <AlphanumericSearch />
      <AnimeList type="broad" />
    </Fragment>
  );
};

export default AZList;
