const FeaturedAnime = () => {
  return (
    <section className="featured-anime hero">
      <img
        className="featured-anime__image"
        src="./images/kiminonawa.jpg"
        alt=""
      />
      <div className="anime-details">
        <div className="anime-details__info">
          <h2>Skip and Loafer</h2>
          <p className="anime-details__info__synopsis">
            The second season of Mahoutsukai no Yome. Chise was able to accept
            Elias and herself, if not necessarily everything about her
            situation. After Cartaphilus fell back into a slumber that would not
            last forever, Chise was able to go back to her regular life. Then
            she receives an invitation from a mutual aid organization for mages
            called the College.
          </p>
          <div className="anime-details__info__meta">
            <div>
              <div className="meta-type">Studio</div>
              <div className="meta-value">CygamesPictures</div>
            </div>
            <div>
              <div className="meta-type">Episodes</div>
              <div className="meta-value">12</div>
            </div>
            <div>
              <div className="meta-type">Genre</div>
              <div className="meta-value">Comedy</div>
            </div>
          </div>
          <div className="anime-details__cta">
            <button className="btn btn--watch">
              <img src="./images/icons/play.png" alt="" />
              <h4>Watch</h4>
            </button>
            <div className="prev-p-next">
              <button className="btn btn--trans">
                <img src="./images/icons/arrow_left.png" alt="" />
              </button>
              <button className="btn btn--trans">
                <img src="./images/icons/arrow_right.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAnime;
