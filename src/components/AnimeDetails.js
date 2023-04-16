const AnimeDetails = () => {
  return (
    <div className="anime-details">
      <div className="anime-details__img-p-rating">
        <img
          src="https://img.bunnycdnn.ru/_r/300x400/100/f1/21/f121f498b3be50b194236f055c97c6df/f121f498b3be50b194236f055c97c6df.jpg"
          alt=""
        />
        <h6 className="anime-details__rating">3.2 // 5</h6>
      </div>
      <div className="anime-details__info">
        <h2>Skip and Loafer</h2>
        <p className="anime-details__info__synopsis">
          The second season of Mahoutsukai no Yome. Chise was able to accept
          Elias and herself, if not necessarily everything about her situation.
          After Cartaphilus fell back into a slumber that would not last
          forever, Chise was able to go back to her regular life. Then she
          receives an invitation from a mutual aid organization for mages called
          the College.
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
          <div>
            <div className="meta-type">Date Aired</div>
            <div className="meta-value">Apr 6, 2023</div>
          </div>
          <div>
            <div className="meta-type">Duration</div>
            <div className="meta-value">23 min/ep</div>
          </div>
          <div>
            <div className="meta-type">Views</div>
            <div className="meta-value">165,959</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
