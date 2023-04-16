import AnimeDetails from "./AnimeDetails";
import EpisodesCount from "./EpisodesCount";

const AnimeStream = () => {
  return (
    <section className="anime-stream main-content">
      <img src="./images/kiminonawa.jpg" alt="" />
      <EpisodesCount />
      <AnimeDetails />
    </section>
  );
};

export default AnimeStream;