import { useEffect, useState, useRef } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import axios from "../utils/axiosInstance";

import AnimeDetails from "./AnimeDetails";
import EpisodesCount from "./EpisodesCount";

const AnimeStream = () => {
  const { animeId } = useParams();
  const [queryParams] = useSearchParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState(null);
  const [streamUrl, setStreamUrl] = useState("");

  const abortController = useRef(new AbortController());

  const fetchStreamUrl = async (episodeId) => {
    abortController.current.abort();
    abortController.current = new AbortController();

    try {
      const res = await axios(`vidcdn/watch/${episodeId}`, {
        signal: abortController.current.signal,
      });
      const url = res.data.Referer;

      setStreamUrl(url);
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  };

  const populateAnimeData = async () => {
    const res = await axios(`anime-details/${animeId}`);
    const animeData = res.data;

    animeData.animeId = animeId;
    animeData.episodesList = animeData.episodesList.reverse();

    if (!queryParams.get("ep") && animeData.status !== "Upcoming")
      navigate({
        pathname: `/stream/${animeId}`,
        search: `?ep=${animeData.episodesList[0].episodeId}`,
      });

    setAnime(animeData);
  };

  useEffect(() => {
    populateAnimeData();
  }, [animeId]);

  useEffect(() => {
    fetchStreamUrl(queryParams.get("ep"));
  }, [queryParams.get("ep")]);

  return (
    anime && (
      <section className="anime-stream main-content">
        {anime.status !== "Upcoming" && (
          <iframe
            className="anime-stream__video-frame"
            src={streamUrl}
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            allowFullScreen={true}
          ></iframe>
        )}
        <EpisodesCount anime={anime} />
        <AnimeDetails anime={anime} />
      </section>
    )
  );
};

export default AnimeStream;
