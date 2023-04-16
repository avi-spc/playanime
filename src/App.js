import AlphanumericSearch from "./components/AlphanumericSearch";
import AnimeDetails from "./components/AnimeDetails";
import AnimeGrid from "./components/AnimeGrid";
import EpisodesCount from "./components/EpisodesCount";
import FeaturedAnime from "./components/FeaturedAnime";
import Navbar from "./components/Navbar";
import CharactersContextProvider from "./contexts/charactersContext";
import AnimeList from "./components/AnimeList";
import AnimeOverlayDetails from "./components/AnimeOverlayDetails";
import Footer from "./components/Footer";
import ActivityPath from "./components/ActivityPath";
import BaseStructure from "./components/BaseStructure";
import AnimeStream from "./components/AnimeStream";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <Navbar />
        {/* <FeaturedAnime /> */}
        <section className="main-content">
          {/* <AnimeStream />
          <AnimeGrid /> */}
          <AlphanumericSearch />
          <AnimeList type="main-content" />
        </section>
        <AnimeList type="sidebar" />
      </div>
      <Footer />
    </CharactersContextProvider>
  );
};

export default App;
