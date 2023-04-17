import { Fragment } from "react";

import CharactersContextProvider from "../contexts/charactersContext";
import TrendingContextProvider from "../contexts/trendingContext";
import RecentEpisodesContextProvider from "../contexts/recentEpisodesContext";

const BaseContextProvider = (props) => {
  return (
    <Fragment>
      <RecentEpisodesContextProvider>
        <TrendingContextProvider>
          <CharactersContextProvider>
            {props.children}
          </CharactersContextProvider>
        </TrendingContextProvider>
      </RecentEpisodesContextProvider>
    </Fragment>
  );
};

export default BaseContextProvider;
