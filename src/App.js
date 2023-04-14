import AlphanumericSearch from "./components/AlphanumericSearch";
import CharactersContextProvider from "./contexts/charactersContext";

const App = () => {
  return (
    <CharactersContextProvider>
      <div className="App">
        <AlphanumericSearch />
      </div>
    </CharactersContextProvider>
  );
};

export default App;
