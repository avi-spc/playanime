import { Fragment, useContext } from "react";
import AlphanumericSearch from "../components/AlphanumericSearch";

import Pagination from "../components/Pagination";
import AnimeGrid from "../components/AnimeGrid";
import { AZContext } from "../contexts/azContextProvider";

const AZList = () => {
  const { characterSearchedAnime } = useContext(AZContext);

  return (
    <Fragment>
      <AlphanumericSearch />
      {characterSearchedAnime.length > 0 && (
        <AnimeGrid
          animeList={characterSearchedAnime}
          animeDetails={characterSearchedAnime}
        />
      )}
      <Pagination />
    </Fragment>
  );
};

export default AZList;
