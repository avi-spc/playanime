import { createContext, useEffect, useState } from "react";

export const RecentEpisodesContext = createContext();

const RecentEpisodesContextProvider = (props) => {
  const [recentEpisodes, setRecentEpisodes] = useState([]);

  const populateRecentEpisodes = async () => {
    const res = await fetch(
      "https://api.consumet.org/anime/gogoanime/recent-episodes"
    );
    const animeList = (await res.json()).results;

    setRecentEpisodes(animeList.splice(0, 16));
  };

  useEffect(() => {
    populateRecentEpisodes();
  }, []);

  return (
    <RecentEpisodesContext.Provider value={{ recentEpisodes }}>
      {props.children}
    </RecentEpisodesContext.Provider>
  );
};

export default RecentEpisodesContextProvider;
