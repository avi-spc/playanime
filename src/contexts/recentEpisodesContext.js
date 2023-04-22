import { createContext, useEffect, useState } from "react";

export const RecentEpisodesContext = createContext();

const RecentEpisodesContextProvider = (props) => {
  const [recentEpisodes, setRecentEpisodes] = useState([]);
  const [recentEpisodesDetails, setRecentEpisodesDetails] = useState([]);

  const populateRecentEpisodes = async () => {
    const res = await fetch("https://gogoanime.consumet.stream/recent-release");
    const animeList = await res.json();

    setRecentEpisodes(animeList);
  };

  const populateRecentEpisodesDetails = async (animeId) => {
    const res = await fetch(
      `https://gogoanime.consumet.stream/anime-details/${animeId}`
    );
    const animeDeatils = await res.json();

    setRecentEpisodesDetails((prevDetails) => [...prevDetails, animeDeatils]);
  };

  useEffect(() => {
    populateRecentEpisodes();
  }, []);

  useEffect(() => {
    recentEpisodes
      .slice(4, 20)
      .map((anime) => populateRecentEpisodesDetails(anime.animeId));
  }, [recentEpisodes]);

  return (
    <RecentEpisodesContext.Provider
      value={{ recentEpisodes, recentEpisodesDetails }}
    >
      {props.children}
    </RecentEpisodesContext.Provider>
  );
};

export default RecentEpisodesContextProvider;
