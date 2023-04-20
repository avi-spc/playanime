import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FeaturedAnimeContext } from "../contexts/featuredAnimeContext";

const FeaturedAnime = () => {
  const { featuredAnime } = useContext(FeaturedAnimeContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActiveIndex = (changeRate) => {
    setActiveIndex(
      (index) =>
        (((index + changeRate) % featuredAnime.length) + featuredAnime.length) %
        featuredAnime.length
    );
  };

  return (
    featuredAnime.length > 0 && (
      <section className="featured-anime">
        <img
          className="featured-anime__image"
          src={featuredAnime[activeIndex].image}
          alt=""
        />
        <div className="anime-details">
          <div className="anime-details__info">
            <h2>{featuredAnime[activeIndex].title}</h2>
            <p className="anime-details__info__synopsis">
              {featuredAnime[activeIndex].description}
            </p>
            <div className="anime-details__info__meta">
              <div>
                <div className="meta-type">Type</div>
                <div className="meta-value">
                  {featuredAnime[activeIndex].type}
                </div>
              </div>
              <div>
                <div className="meta-type">Status</div>
                <div className="meta-value">
                  {featuredAnime[activeIndex].status}
                </div>
              </div>
              <div>
                <div className="meta-type">Genre</div>
                <div className="meta-value">
                  {featuredAnime[activeIndex].genres.slice(0, 1)}
                </div>
              </div>
            </div>
            <div className="anime-details__cta">
              <NavLink to={`/stream/${featuredAnime[activeIndex].id}`}>
                <button className="btn btn--watch">
                  <img src="./images/icons/play.png" alt="" />
                  <h5>Watch</h5>
                </button>
              </NavLink>
              <div className="prev-p-next">
                <button
                  className="btn btn--trans"
                  onClick={() => updateActiveIndex(-1)}
                >
                  <img src="./images/icons/arrow_left.png" alt="" />
                </button>
                <button
                  className="btn btn--trans"
                  onClick={() => updateActiveIndex(1)}
                >
                  <img src="./images/icons/arrow_right.png" alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default FeaturedAnime;
