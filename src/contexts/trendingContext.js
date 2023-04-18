import { createContext, useEffect, useState } from "react";

export const TrendingContext = createContext();

const TrendingContextProvider = (props) => {
  const [trendingAnime, setTrendingAnime] = useState([]);

  const populateTrendingAnime = async () => {
    const res = await fetch("https://gogoanime.consumet.stream/top-airing");
    const animeList = await res.json();

    // const list = await fetch("https://gogoanime.llc/anime-list-A");
    // const html = await list.text();

    // const parser = new DOMParser();
    // const doc = parser.parseFromString(html, "text/html");

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

    setTrendingAnime(animeList);
  };

  useEffect(() => {
    populateTrendingAnime();
  }, []);

  return (
    <TrendingContext.Provider value={{ trendingAnime }}>
      {props.children}
    </TrendingContext.Provider>
  );
};

export default TrendingContextProvider;
