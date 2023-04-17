import { Fragment, useContext } from "react";

import { CharactersContext } from "../contexts/charactersContext";
import Keypad from "./Keypad";

const AlphanumericSearch = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <section className="alphanumeric-search">
      <div>Search by alphabets</div>
      <Keypad
        keys={characters.map((char) => [char, "ep.url"])}
        type="alphanumeric"
      />
    </section>
  );
};

export default AlphanumericSearch;
