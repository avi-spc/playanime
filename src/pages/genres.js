import { Fragment, useContext } from "react";

import GenreDropdown from "../components/GenreDropdown";
import AnimeList from "../components/AnimeList";
import AlphanumericSearch from "../components/AlphanumericSearch";

import { GenreContext } from "../contexts/genreContextProvider";
import Pagination from "../components/Pagination";

const Genres = () => {
  const { searchedGenreAnime } = useContext(GenreContext);

  return (
    <Fragment>
      <GenreDropdown />
      {searchedGenreAnime.length > 0 && (
        <AnimeList type="broad" data={searchedGenreAnime} />
      )}
      <Pagination />
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Genres;
