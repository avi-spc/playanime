import AlphanumericSearch from "./components/AlphanumericSearch";
import AnimeDetails from "./components/AnimeDetails";
import AnimeGrid from "./components/AnimeGrid";
import AnimeList from "./components/AnimeList";
import FeaturedAnime from "./components/FeaturedAnime";
import Navbar from "./components/Navbar";
import CharactersContextProvider from "./contexts/charactersContext";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <FeaturedAnime />
      </div>
    </CharactersContextProvider>
  );
};

export default App;
