const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__default-links">
        <div>Home</div>
        <div>Ongoing</div>
        <div>Upcoming</div>
        <div>Genres</div>
      </div>
      <div className="navbar__logo">
        <div className="navbar__logo--primary">play</div>
        <div className="navbar__logo--secondary">anime</div>
      </div>
      <div className="navbar__search-p-user">
        <form>
          <input type="text" placeholder="search anime" />
          <img
            className="icon search-icon"
            src="./images/icons/search.png"
            alt=""
          />
        </form>
        <img className="icon user-icon" src="./images/icons/user.png" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
