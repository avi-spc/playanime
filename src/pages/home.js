import { Fragment } from "react";
import AnimeGrid from "../components/AnimeGrid";
import AlphanumericSearch from "../components/AlphanumericSearch";

const Home = () => {
  return (
    <Fragment>
      <AnimeGrid />
      <AlphanumericSearch />
    </Fragment>
  );
};

export default Home;
