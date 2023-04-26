import { Fragment, useContext } from "react";

import GenreDropdown from "../components/GenreDropdown";
import AnimeList from "../components/AnimeList";
import AlphanumericSearch from "../components/AlphanumericSearch";

import { GenreContext } from "../contexts/genreContextProvider";

const Genres = () => {
  const { searchedGenreAnime } = useContext(GenreContext);

  return (
    <Fragment>
      <GenreDropdown />
      {searchedGenreAnime.length > 0 && (
        <AnimeList type="broad" data={searchedGenreAnime} />
      )}
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Genres;
