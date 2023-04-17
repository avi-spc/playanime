import Keypad from "./Keypad";

const EpisodesCount = ({ anime }) => {
  return (
    <Keypad
      keys={anime.episodes.map((ep) => [ep.number, ep.id])}
      animeId={anime.id}
      type="numeric"
    />
  );
};

export default EpisodesCount;
