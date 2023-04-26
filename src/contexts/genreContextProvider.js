import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

export const GenreContext = createContext();

const GenreContextProvider = (props) => {
  //   const fetchGenres = async () => {
  //     const page = await fetch("https://gogoanime.llc");
  //     const html = await page.text();

  //     const parser = new DOMParser();
  //     const doc = parser.parseFromString(html, "text/html");

  //     console.log(doc.querySelector(".anime_name.genre+.recent ul"));

  // const test = `<div class="thumnail_tool"><img src="https://gogocdn.net/images/anime/a-channel8.jpg"></div><div style="float: left; width: 300px"><a class="bigChar" href="">A Channel</a><p class="type"><span>Genre: </span><a href="https://gogoanime.llc/genre/comedy" title="Comedy">Comedy</a><a href="https://gogoanime.llc/genre/school" title="School">, School</a><a href="https://gogoanime.llc/genre/seinen" title="Seinen">, Seinen</a><a href="https://gogoanime.llc/genre/slice-of-life" title="Slice of Life">, Slice of Life</a></p><p class="type"><span>Released: </span>2011</p><p class="type"><span>Status: </span> Completed</p><p class="sumer"><span>Plot Summary: </span> Toeru takes a test so she can enter the same high school as Run, the girl she likes. She passes, but when she goes   to tell Run, she finds her hugging a girl she’s never seen before.</p></div>`;
  // console.log(parser.parseFromString(test, "text/html"));
  // const items = Array.from(
  //   doc.querySelector(".anime_list_body > ul").children
  // ).map((item) => {
  //   const i = parser
  //     .parseFromString(item.getAttribute("title"), "text/html")
  //     .querySelector("body div:nth-child(2)");
  //   return {
  //     [i.querySelector("a").innerText]:
  //       i.querySelector("p:nth-of-type(2)").innerText,
  //   };
  // });
  // console.log(items);
  //   };

  const [genres] = useState([
    "action",
    "adventure",
    "cars ",
    "comedy",
    "crime",
    "dementia",
    "demons",
    "drama",
    "dub",
    "ecchi",
    "family",
    "fantasy",
    "game",
    "gourmet",
    "harem",
    "historical",
    "horror",
    "josei",
    "kids",
    "magic",
    "martial-arts",
    "mecha",
    "military",
    "Mmusic",
    "mystery",
    "parody",
    "police",
    "psychological",
    "romance",
    "samurai",
    "school",
    "sci-fi",
    "seinen",
    "shoujo",
    "shoujo-ai",
    "shounen",
    "shounen-ai",
    "slice-of-Life",
    "space",
    "sports",
    "super-power",
    "supernatural",
    "suspense",
    "thriller",
    "vampire",
    "yaoi",
    "yuri",
  ]);

  const [genre, setGenre] = useState(genres[0]);
  const [searchedGenreAnime, setSearchedGenreAnime] = useState([]);

  const fetchGenreAnime = async () => {
    const res = await fetch(`https://gogoanime.consumet.stream/genre/${genre}`);
    const animeList = await res.json();

    setSearchedGenreAnime(animeList);
  };

  const updateGenre = (genreId) => {
    setGenre(genreId);
  };

  useEffect(() => {
    fetchGenreAnime();
  }, [genre]);

  return (
    <GenreContext.Provider value={{ genres, searchedGenreAnime, updateGenre }}>
      {props.children}
    </GenreContext.Provider>
  );
};

export default GenreContextProvider;
