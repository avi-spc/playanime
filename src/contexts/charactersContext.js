import { createContext, useState } from "react";

import { searchCharacters } from "../utils/characterGenerator";

export const CharactersContext = createContext();

const CharactersContextProvider = (props) => {
  const [characters] = useState(searchCharacters);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {props.children}
    </CharactersContext.Provider>
  );
};

export default CharactersContextProvider;
