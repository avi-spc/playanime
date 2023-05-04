import { Fragment, useContext } from "react";
import AlphanumericSearch from "../components/AlphanumericSearch";
import AnimeList from "../components/AnimeList";

import { AZContext } from "../contexts/azContextProvider";
import Pagination from "../components/Pagination";

const AZList = () => {
  const { characterSearchedAnime } = useContext(AZContext);

  return (
    <Fragment>
      <AlphanumericSearch />
      {characterSearchedAnime.length > 0 && (
        <AnimeList type="broad" data={characterSearchedAnime} />
      )}
      <Pagination />
    </Fragment>
  );
};

export default AZList;
