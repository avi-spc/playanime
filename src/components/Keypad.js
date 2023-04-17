import { NavLink } from "react-router-dom";

const Keypad = ({ keys, type }) => {
  return (
    <div className={`keypad ${type}`}>
      {keys.map(([keyName, keyUrl]) => {
        return (
          <NavLink to="az-list">
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
