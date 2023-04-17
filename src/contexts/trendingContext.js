import { createContext, useEffect, useState } from "react";

export const TrendingContext = createContext();

const TrendingContextProvider = (props) => {
  const [trendingAnime, setTrendingAnime] = useState([]);

  const populateTrendingAnime = async () => {
    const res = await fetch("https://gogoanime.consumet.stream/top-airing");
    const animeList = await res.json();

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
