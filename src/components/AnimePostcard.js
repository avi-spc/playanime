const AnimePostcard = ({ type }) => {
  return (
    <div className={`anime-postcard ${type}`}>
      <img
        className="anime-postcard__image"
        src="https://img.bunnycdnn.ru/_r/300x400/100/f1/21/f121f498b3be50b194236f055c97c6df/f121f498b3be50b194236f055c97c6df.jpg"
      />
      <div className="anime-postcard__name">
        The Legend and the Hero 4th Season
      </div>
      <div className="anime-postcard__viewers">
        <span className="anime-postcard__viewers--count">48m</span>
      </div>
    </div>
  );
};

export default AnimePostcard;
