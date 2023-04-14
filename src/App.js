import AlphanumericSearch from "./components/AlphanumericSearch";
import AnimeGrid from "./components/AnimeGrid";
import AnimeList from "./components/AnimeList";
import CharactersContextProvider from "./contexts/charactersContext";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <AnimeGrid />
        <AnimeList />
      </div>
    </CharactersContextProvider>
  );
};

export default App;
