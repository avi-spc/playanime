import { Fragment } from "react";

import CharactersContextProvider from "../contexts/charactersContext";
import TrendingContextProvider from "../contexts/trendingContext";
import RecentEpisodesContextProvider from "../contexts/recentEpisodesContext";
import FeaturedAnimeContextProvider from "../contexts/featuredAnimeContext";

const BaseContextProvider = (props) => {
  return (
    <Fragment>
      <RecentEpisodesContextProvider>
        <FeaturedAnimeContextProvider>
          <TrendingContextProvider>
            <CharactersContextProvider>
              {props.children}
            </CharactersContextProvider>
          </TrendingContextProvider>
        </FeaturedAnimeContextProvider>
      </RecentEpisodesContextProvider>
    </Fragment>
  );
};

export default BaseContextProvider;
