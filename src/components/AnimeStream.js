import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimeDetails from "./AnimeDetails";
import EpisodesCount from "./EpisodesCount";

const AnimeStream = () => {
  const { animeId } = useParams();
  const [anime, setAnime] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");

  const fetchStreamUrl = async () => {
    // const res = await fetch(
    //   `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`
    // );

    // const url = (await res.json()).headers.Referer;

    // setStreamUrl(url);
  };

  const populateAnimeData = async () => {
    const res = await fetch(
      `https://api.consumet.org/anime/gogoanime/info/${animeId}`
    );

    const animeData = await res.json();

    fetchStreamUrl();

    setAnime(animeData);
  };

  useEffect(() => {
    populateAnimeData();
  }, [animeId]);

  return (
    anime && (
      <section className="anime-stream main-content">
        {/* <iframe
      src="https://anihdplay.com/streaming.php?id=OTk0NTM=&title=Made+in+Abyss+Episode+2&typesub=SUB"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
    ></iframe> */}
        <EpisodesCount episodes={anime.episodes} />
        <AnimeDetails anime={anime} />
      </section>
    )
  );
};

export default AnimeStream;
