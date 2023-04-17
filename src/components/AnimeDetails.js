const AnimeDetails = ({ anime }) => {
  return (
    <div className="anime-details">
      <div className="anime-details__img-p-rating">
        <img src={anime.image} alt="" />
        <h6 className="anime-details__rating">3.2 // 5</h6>
      </div>
      <div className="anime-details__info">
        <h2>{anime.title}</h2>
        <p className="anime-details__info__synopsis">{anime.description}</p>
        <div className="anime-details__info__meta">
          <div>
            <div className="meta-type">Episodes</div>
            <div className="meta-value">{anime.totalEpisodes}</div>
          </div>
          <div>
            <div className="meta-type">Type</div>
            <div className="meta-value">{anime.type}</div>
          </div>
          <div>
            <div className="meta-type">Genre</div>
            <div className="meta-value">{anime.genres.slice(0, 1)}</div>
          </div>
          <div>
            <div className="meta-type">Date Aired</div>
            <div className="meta-value">{anime.releaseDate}</div>
          </div>
          <div>
            <div className="meta-type">Sub/Dub</div>
            <div className="meta-value">{anime.subOrDub }</div>
          </div>
          <div>
            <div className="meta-type">Status</div>
            <div className="meta-value">{anime.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeDetails;
