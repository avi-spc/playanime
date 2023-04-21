import { useEffect, useState, createContext, useContext } from "react";

import { RecentEpisodesContext } from "./recentEpisodesContext";

export const FeaturedAnimeContext = createContext();

const FeaturedAnimeContextProvider = (props) => {
  const { recentEpisodes } = useContext(RecentEpisodesContext);

  const [featuredAnime, setFeaturedAnime] = useState([]);

  const populateAnimeData = async (animeId) => {
    const res = await fetch(
      `https://gogoanime.consumet.stream/anime-details/${animeId}`
    );

    const animeData = await res.json();
    animeData.animeId = animeId;

    setFeaturedAnime((data) => [...data, animeData]);
  };

  useEffect(() => {
    recentEpisodes
      .slice(0, 4)
      .forEach((anime) => populateAnimeData(anime.animeId));
  }, [recentEpisodes]);

  return (
    <FeaturedAnimeContext.Provider value={{ featuredAnime }}>
      {props.children}
    </FeaturedAnimeContext.Provider>
  );
};

export default FeaturedAnimeContextProvider;
