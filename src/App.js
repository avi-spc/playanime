import AlphanumericSearch from "./components/AlphanumericSearch";
import AnimeDetails from "./components/AnimeDetails";
import AnimeGrid from "./components/AnimeGrid";
import EpisodesCount from "./components/EpisodesCount";
import FeaturedAnime from "./components/FeaturedAnime";
import Navbar from "./components/Navbar";
import CharactersContextProvider from "./contexts/charactersContext";
import AnimeList from "./components/AnimeList";
import AnimeOverlayDetails from "./components/AnimeOverlayDetails";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <AnimeOverlayDetails />
      </div>
    </CharactersContextProvider>
  );
};

export default App;
