import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { CharactersContext } from "../contexts/charactersContext";
import Keypad from "./Keypad";
import { AZContext } from "../contexts/azContextProvider";

const AlphanumericSearch = () => {
  const { characters } = useContext(CharactersContext);
  const { updateChar } = useContext(AZContext);

  const { charId } = useParams();

  useEffect(() => {
    updateChar(charId);
  }, [charId]);

  return (
    <section className="alphanumeric-search">
      <div>Search by alphabets</div>
      <Keypad
        keys={characters.map((char) => [char, char])}
        type="alphanumeric"
      />
    </section>
  );
};

export default AlphanumericSearch;
