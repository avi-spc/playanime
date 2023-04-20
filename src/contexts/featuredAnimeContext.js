import { useEffect, useState, createContext, useContext } from "react";

import { RecentEpisodesContext } from "./recentEpisodesContext";

export const FeaturedAnimeContext = createContext();

const FeaturedAnimeContextProvider = (props) => {
  const { recentEpisodes } = useContext(RecentEpisodesContext);

  const [featuredAnime, setFeaturedAnime] = useState([]);

  const populateAnimeData = async (animeId) => {
    const res = await fetch(
      `https://api.consumet.org/anime/gogoanime/info/${animeId}`
    );

    const animeData = await res.json();

    setFeaturedAnime((data) => [...data, animeData]);
  };

  useEffect(() => {
    recentEpisodes.slice(0, 4).forEach((anime) => populateAnimeData(anime.id));
    console.log(recentEpisodes.slice(0, 4));
  }, [recentEpisodes]);

  return (
    <FeaturedAnimeContext.Provider value={{ featuredAnime }}>
      {props.children}
    </FeaturedAnimeContext.Provider>
  );
};

export default FeaturedAnimeContextProvider;
