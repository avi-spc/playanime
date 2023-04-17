import { useEffect, useState } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import AnimeDetails from "./AnimeDetails";
import EpisodesCount from "./EpisodesCount";

const AnimeStream = () => {
  const { animeId } = useParams();
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");

  const fetchStreamUrl = async (episodeId) => {
    const res = await fetch(
      `https://api.consumet.org/anime/gogoanime/watch/${episodeId}`
    );

    const url = (await res.json()).headers.Referer;

    setStreamUrl(url);
  };

  const populateAnimeData = async () => {
    const res = await fetch(
      `https://api.consumet.org/anime/gogoanime/info/${animeId}`
    );

    const animeData = await res.json();

    if (!queryParams.get("ep"))
      navigate({
        pathname: `/stream/${animeId}`,
        search: `?ep=${animeData.episodes[0].id}`,
      });

    fetchStreamUrl(animeData.episodes[0].id);

    setAnime(animeData);
  };

  useEffect(() => {
    populateAnimeData();
  }, [animeId]);

  useEffect(() => {
    fetchStreamUrl(queryParams.get("ep"));
  }, [queryParams]);

  return (
    anime && (
      <section className="anime-stream main-content">
        <iframe
          src={streamUrl}
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        ></iframe>
        <EpisodesCount anime={anime} />
        <AnimeDetails anime={anime} />
      </section>
    )
  );
};

export default AnimeStream;
