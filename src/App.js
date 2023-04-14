import AlphanumericSearch from "./components/AlphanumericSearch";
import AnimeDetails from "./components/AnimeDetails";
import AnimeGrid from "./components/AnimeGrid";
import AnimeList from "./components/AnimeList";
import CharactersContextProvider from "./contexts/charactersContext";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <AnimeDetails />
      </div>
    </CharactersContextProvider>
  );
};

export default App;
