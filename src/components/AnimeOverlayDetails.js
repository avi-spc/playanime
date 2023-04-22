const AnimeOverlayDetails = ({ details }) => {
  return (
    <div className="anime-overlay-details">
      <h4>{details.animeTitle}</h4>
      <p className="anime-overlay-details__synopsis">
        The second season of Mahoutsukai no Yome. Chise was able to accept Elias
        and herself, if not necessarily everything about her situation. After
        Cartaphilus fell back into a slumber that would not last forever, Chise
        was able to go back to her regular life. Then she receives an invitation
        from a mutual aid organization for mages called the College.
      </p>
      <div className="anime-overlay-details__meta">
        <div className="meta-type">Episodes</div>
        <div className="meta-value">{details.totalEpisodes}</div>
        <div className="meta-type">Genre</div>
        <div className="meta-value">{details.genres.join(", ")}</div>
        <div className="meta-type">Date Aired</div>
        <div className="meta-value">Apr 6, 2023</div>
      </div>
      <button className="btn btn--lg">
        <h4>Watch</h4>
      </button>
    </div>
  );
};

export default AnimeOverlayDetails;
