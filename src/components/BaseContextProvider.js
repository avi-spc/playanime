import { Fragment } from "react";

import CharactersContextProvider from "../contexts/charactersContext";
import TrendingContextProvider from "../contexts/trendingContext";
import RecentEpisodesContextProvider from "../contexts/recentEpisodesContext";
import FeaturedAnimeContextProvider from "../contexts/featuredAnimeContext";
import GenreContextProvider from "../contexts/genreContextProvider";
import AZContextProvider from "../contexts/azContextProvider";

const BaseContextProvider = (props) => {
  return (
    <Fragment>
      <RecentEpisodesContextProvider>
        <FeaturedAnimeContextProvider>
          <TrendingContextProvider>
            <AZContextProvider>
              <GenreContextProvider>
                <CharactersContextProvider>
                  {props.children}
                </CharactersContextProvider>
              </GenreContextProvider>
            </AZContextProvider>
          </TrendingContextProvider>
        </FeaturedAnimeContextProvider>
      </RecentEpisodesContextProvider>
    </Fragment>
  );
};

export default BaseContextProvider;
