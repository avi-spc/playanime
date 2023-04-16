import { NavLink } from "react-router-dom";

import AnimeList from "./AnimeList";

const Navbar = () => {
  return (
    <nav className="navbar nav">
      <div className="navbar__default-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/ongoing">Ongoing</NavLink>
        <NavLink to="/upcoming">Upcoming</NavLink>
        <NavLink to="/genres">Genres</NavLink>
      </div>
      <div className="navbar__logo">
        <div className="navbar__logo--primary">play</div>
        <div className="navbar__logo--secondary">anime</div>
      </div>
      <div className="navbar__search-p-user">
        <form className="search-form">
          <div className="input-search-group">
            <input type="text" placeholder="search anime" />
            <img
              className="icon search-icon"
              src="./images/icons/search.png"
              alt=""
            />
          </div>
          {/* <AnimeList type="search" /> */}
        </form>
        <img className="icon user-icon" src="./images/icons/user.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
