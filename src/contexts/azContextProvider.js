import { useEffect, useState, createContext, useRef, useContext } from "react";

import axios from "../utils/axiosInstance";
import { PaginationContext } from "./paginationContextProvider";

export const AZContext = createContext();

const AZContextProvider = (props) => {
  const [char, setChar] = useState("A");
  const [characterSearchedAnime, setCharacterSearchedAnime] = useState([]);
  const { page, resetPage } = useContext(PaginationContext);

  const abortController = useRef(new AbortController());

  const fetchCharacterAnime = async (page = 1) => {
    abortController.current.abort();
    abortController.current = new AbortController();

    try {
      const res = await axios(`anime-list/${char}?page=${page}`, {
        signal: abortController.current.signal,
      });
      const animeList = res.data;

      setCharacterSearchedAnime(animeList);
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  };

  const updateChar = (charId) => {
    setChar(charId);
  };

  useEffect(() => {
    fetchCharacterAnime();
    resetPage();
  }, [char]);

  useEffect(() => {
    fetchCharacterAnime(page);
  }, [page]);

  return (
    <AZContext.Provider value={{ characterSearchedAnime, updateChar }}>
      {props.children}
    </AZContext.Provider>
  );
};

export default AZContextProvider;
