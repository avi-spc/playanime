import { createContext, useEffect, useState } from "react";

import axios from "../utils/axiosInstance";

export const TrendingContext = createContext();

const TrendingContextProvider = (props) => {
  const [trendingAnime, setTrendingAnime] = useState([]);

  const populateTrendingAnime = async () => {
    const res = await axios("top-airing");
    const animeList = res.data;

    setTrendingAnime(animeList);
  };

  useEffect(() => {
    populateTrendingAnime();
  }, []);

  return (
    <TrendingContext.Provider value={{ trendingAnime }}>
      {props.children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;
