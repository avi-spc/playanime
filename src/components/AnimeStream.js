import AnimeDetails from "./AnimeDetails";
import EpisodesCount from "./EpisodesCount";

const AnimeStream = () => {
  return (
    <section className="anime-stream main-content">
      <iframe
        src="https://anihdplay.com/streaming.php?id=OTk0NTM=&title=Made+in+Abyss+Episode+2&typesub=SUB"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      ></iframe>
      <EpisodesCount />
      <AnimeDetails />
    </section>
  );
};

export default AnimeStream;
