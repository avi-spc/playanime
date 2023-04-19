import { NavLink, useSearchParams } from "react-router-dom";

const Keypad = ({ keys, type, animeId }) => {
  const [queryParams] = useSearchParams();

  return (
    <div className={`keypad ${type}`}>
      {keys.map(([keyName, keyUrl]) => {
        return (
          <NavLink
            to={`/stream/${animeId}?ep=${keyUrl}`}
            className={`${
              queryParams.get("ep") === keyUrl ? "active-button" : ""
            }`}
            key={keyName}
          >
            <button className="btn btn--sm">{keyName}</button>
          </NavLink>
        );
      })}
    </div>
  );
};

export default Keypad;
