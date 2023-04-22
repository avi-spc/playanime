const AnimeOverlayDetails = ({ details }) => {
  return (
    <div className="anime-overlay-details">
      <h4>{details.animeTitle}</h4>
      <p className="anime-overlay-details__synopsis">{details.synopsis}</p>
      <div className="anime-overlay-details__meta">
        <div className="meta-type">Episodes</div>
        <div className="meta-value">{details.totalEpisodes}</div>
        <div className="meta-type">Genre</div>
        <div className="meta-value">{details.genres.join(", ")}</div>
        <div className="meta-type">Date Aired</div>
        <div className="meta-value">{details.releasedDate}</div>
      </div>
      <button className="btn btn--lg">
        <h4>Watch</h4>
      </button>
    </div>
  );
};

export default AnimeOverlayDetails;
