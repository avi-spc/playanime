import { createContext, useEffect, useState } from "react";

export const RecentEpisodesContext = createContext();

const RecentEpisodesContextProvider = (props) => {
  const [recentEpisodes, setRecentEpisodes] = useState([]);

  const populateRecentEpisodes = async () => {
    const res = await fetch("https://gogoanime.consumet.stream/recent-release");
    const animeList = await res.json();

    setRecentEpisodes(animeList);
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
