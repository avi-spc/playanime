import Keypad from "./Keypad";

const EpisodesCount = ({ anime }) => {
  return (
    <Keypad
      keys={anime.episodesList.map((ep) => [ep.episodeNum, ep.episodeId])}
      animeId={anime.animeId}
      type="numeric"
    />
  );
};

export default EpisodesCount;
