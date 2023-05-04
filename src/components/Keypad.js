import { NavLink, useParams, useSearchParams } from "react-router-dom";

const Keypad = ({ keys, type, animeId }) => {
  const [queryParams] = useSearchParams();
  const { charId } = useParams();

  return (
    <div className={`keypad ${type}`}>
      {keys.map(([keyName, keyUrl]) => {
        return (
          <NavLink
            to={
              type === "numeric"
                ? `/stream/${animeId}?ep=${keyUrl}`
                : `/az-list/${keyUrl}`
            }
            className={`${
              queryParams.get("ep") === keyUrl || charId === keyUrl
                ? "active-button"
                : ""
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
