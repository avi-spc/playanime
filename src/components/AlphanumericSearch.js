import { useContext } from "react";

import { CharactersContext } from "../contexts/charactersContext";

const AlphanumericSearch = () => {
  const { characters } = useContext(CharactersContext);

  return (
    <div className="alphanumeric-search">
      {characters.map((char) => (
        <button className="btn btn--sm" key={char}>{char}</button>
      ))}
    </div>
  );
};

export default AlphanumericSearch;
