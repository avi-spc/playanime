import AlphanumericSearch from "./components/AlphanumericSearch";
import AnimeGrid from "./components/AnimeGrid";
import CharactersContextProvider from "./contexts/charactersContext";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <AnimeGrid />
        <AlphanumericSearch/>
      </div>
    </CharactersContextProvider>
  );
};

export default App;
