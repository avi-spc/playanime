import Keypad from "./Keypad";

const EpisodesCount = () => {
  return <Keypad keys={Array.from(Array(20).keys())} type="numeric" />;
};

export default EpisodesCount;
