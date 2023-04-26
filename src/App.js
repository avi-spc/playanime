import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import FeaturedAnime from "./components/FeaturedAnime";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Home from "./pages/home";
import Stream from "./pages/stream";
import AZList from "./pages/azList";
import TrendingList from "./components/TrendingList";
import ActivityPath from "./components/ActivityPath";
import BaseContextProvider from "./components/BaseContextProvider";
import Genres from "./pages/genres";

const App = () => {
  return (
    <Router>
      <BaseContextProvider>
        <div className="App">
          <Navbar />
          <section className="hero">
            <Routes>
              {["/stream", "/az-list"].map((path) => (
                <Route path={path} element={<ActivityPath />} key={path} />
              ))}
              <Route path="/" element={<FeaturedAnime />} />
            </Routes>
          </section>
          <section className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/stream/:animeId" element={<Stream />} />
              <Route path="/az-list" element={<AZList />} />
              <Route path="/genre/:genreId" element={<Genres />} />
            </Routes>
          </section>
          <section className="sidebar">
            <TrendingList />
          </section>
        </div>
        <Footer />
      </BaseContextProvider>
    </Router>
  );
};

export default App;
