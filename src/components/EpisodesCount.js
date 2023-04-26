import Keypad from "./Keypad";

const EpisodesCount = ({ anime }) => {
  return anime.status !== "Upcoming" ? (
    <Keypad
      keys={anime.episodesList.map((ep) => [ep.episodeNum, ep.episodeId])}
      animeId={anime.animeId}
      type="numeric"
    />
  ) : (
    <div className="upcoming-status">
      <h3>Upcoming</h3>
    </div>
  );
};

export default EpisodesCount;
