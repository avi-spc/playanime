import { Fragment, useContext } from "react";
import AlphanumericSearch from "../components/AlphanumericSearch";
import AnimeList from "../components/AnimeList";

import { AZContext } from "../contexts/azContextProvider";

const AZList = () => {
  const { characterSearchedAnime } = useContext(AZContext);

  return (
    <Fragment>
      <AlphanumericSearch />
      {characterSearchedAnime.length > 0 && (
        <AnimeList type="broad" data={characterSearchedAnime} />
      )}
    </Fragment>
  );
};

export default AZList;
