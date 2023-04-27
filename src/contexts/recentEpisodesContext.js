import { createContext, useEffect, useState } from "react";

import axios from "../utils/axiosInstance";

export const RecentEpisodesContext = createContext();

const RecentEpisodesContextProvider = (props) => {
  const [recentEpisodes, setRecentEpisodes] = useState([]);
  const [recentEpisodesDetails, setRecentEpisodesDetails] = useState([]);

  const populateRecentEpisodes = async () => {
    const res = await axios("recent-release");
    const animeList = res.data;

    setRecentEpisodes(animeList);
  };

  const populateRecentEpisodesDetails = async (animeId) => {
    const res = await axios(`anime-details/${animeId}`);
    const animeDeatils = res.data;

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
