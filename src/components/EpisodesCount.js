import Keypad from "./Keypad";

const EpisodesCount = ({ episodes }) => {
  return (
    <Keypad keys={episodes.map((ep) => [ep.number, ep.url])} type="numeric" />
  );
};

export default EpisodesCount;
