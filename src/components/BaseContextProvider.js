import { Fragment } from "react";

import CharactersContextProvider from "../contexts/charactersContext";
import TrendingContextProvider from "../contexts/trendingContext";
import RecentEpisodesContextProvider from "../contexts/recentEpisodesContext";
import FeaturedAnimeContextProvider from "../contexts/featuredAnimeContext";
import GenreContextProvider from "../contexts/genreContextProvider";

const BaseContextProvider = (props) => {
  return (
    <Fragment>
      <RecentEpisodesContextProvider>
        <FeaturedAnimeContextProvider>
          <TrendingContextProvider>
            <GenreContextProvider>
              <CharactersContextProvider>
                {props.children}
              </CharactersContextProvider>
            </GenreContextProvider>
          </TrendingContextProvider>
        </FeaturedAnimeContextProvider>
      </RecentEpisodesContextProvider>
    </Fragment>
  );
};

export default BaseContextProvider;
