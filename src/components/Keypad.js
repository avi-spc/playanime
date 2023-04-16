import { NavLink } from "react-router-dom";

const Keypad = ({ keys, type }) => {
  return (
    <div className={`keypad ${type}`}>
      {keys.map((key) => (
        <NavLink to="az-list">
          <button className="btn btn--sm" key={key}>
            {key}
          </button>
        </NavLink>
      ))}
    </div>
  );
};

export default Keypad;
