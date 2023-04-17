import { NavLink } from "react-router-dom";

const Keypad = ({ keys, type, animeId }) => {
  return (
    <div className={`keypad ${type}`}>
      {keys.map(([keyName, keyUrl]) => {
        return (
          <NavLink to={`/stream/${animeId}?ep=${keyUrl}`}>
            <button className="btn btn--sm" key={keyName}>
              {keyName}
            </button>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Keypad;
