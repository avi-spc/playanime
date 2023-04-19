import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import AnimeList from "./AnimeList";

const Navbar = () => {
  const [searchString, setSearchString] = useState("");
  const [searchData, setSearchData] = useState([]);

  const backgroundBlurRef = useRef();
  const abortController = useRef(new AbortController());

  const displayBlur = (isBlurred) => {
    if (isBlurred) {
      backgroundBlurRef.current.classList.remove("hidden");
      document.body.style.overflow = "hidden";
    } else {
      backgroundBlurRef.current.classList.add("hidden");
      document.body.style.overflow = "unset";
    }
  };

  const fetchSearchResults = async () => {
    if (!searchString.length) {
      abortController.current.abort();
      abortController.current = new AbortController();
    }

    try {
      const res = await fetch(
        `https://gogoanime.consumet.stream/search?keyw=${searchString}`,
        { signal: abortController.current.signal }
      );

      const searchResults = await res.json();

      setSearchData(searchResults);
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [searchString]);

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
        <form
          className="search-form"
          onFocus={() => displayBlur(true)}
          onBlur={() => displayBlur(false)}
        >
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="search anime"
          />
          <img
            className="icon search-icon"
            src="./images/icons/search.png"
            alt=""
          />
          {searchData.length > 0 && searchString.length && (
            <AnimeList type="search" data={searchData} />
          )}
        </form>
        <img className="icon user-icon" src="./images/icons/user.png" alt="" />
      </div>
      <div className="background-blur hidden" ref={backgroundBlurRef} />
    </nav>
  );
};

export default Navbar;
