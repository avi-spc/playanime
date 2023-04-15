import { Fragment, useContext } from "react";

import { CharactersContext } from "../contexts/charactersContext";
import Keypad from "./Keypad";

const AlphanumericSearch = () => {
  const { characters } = useContext(CharactersContext);

  return <Keypad keys={characters} type="alphanumeric"/>;
};

export default AlphanumericSearch;
