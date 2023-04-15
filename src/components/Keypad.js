const Keypad = ({ keys, type }) => {
  return (
    <div className={`keypad ${type}`}>
      {keys.map((key) => (
        <button className="btn btn--sm" key={key}>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keypad;
