import { createContext, useContext, useEffect, useRef, useState } from "react";

import axios from "../utils/axiosInstance";
import { PaginationContext } from "./paginationContextProvider";

export const GenreContext = createContext();

const GenreContextProvider = (props) => {
  const [genres] = useState([
    "action",
    "adventure",
    "cars ",
    "comedy",
    "crime",
    "dementia",
    "demons",
    "drama",
    "dub",
    "ecchi",
    "family",
    "fantasy",
    "game",
    "gourmet",
    "harem",
    "historical",
    "horror",
    "josei",
    "kids",
    "magic",
    "martial-arts",
    "mecha",
    "military",
    "music",
    "mystery",
    "parody",
    "police",
    "psychological",
    "romance",
    "samurai",
    "school",
    "sci-fi",
    "seinen",
    "shoujo",
    "shoujo-ai",
    "shounen",
    "shounen-ai",
    "slice-of-life",
    "space",
    "sports",
    "super-power",
    "supernatural",
    "suspense",
    "thriller",
    "vampire",
    "yaoi",
    "yuri",
  ]);

  const [genre, setGenre] = useState(genres[0]);
  const [searchedGenreAnime, setSearchedGenreAnime] = useState([]);
  const { page, resetPage } = useContext(PaginationContext);

  const abortController = useRef(new AbortController());

  const fetchGenreAnime = async (page = 1) => {
    abortController.current.abort();
    abortController.current = new AbortController();

    try {
      const res = await axios(`genre/${genre}?page=${page}`, {
        signal: abortController.current.signal,
      });
      const animeList = res.data;

      setSearchedGenreAnime(animeList);
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  };

  const updateGenre = (genreId) => {
    setGenre(genreId);
  };

  useEffect(() => {
    fetchGenreAnime();
    resetPage();
  }, [genre]);

  useEffect(() => {
    fetchGenreAnime(page);
  }, [page]);

  return (
    <GenreContext.Provider
      value={{
        genre,
        genres,
        searchedGenreAnime,
        updateGenre,
        fetchGenreAnime,
      }}
    >
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreContextProvider;
