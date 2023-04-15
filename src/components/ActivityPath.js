const ActivityPath = () => {
  return (
    <div className="activity-path">
      {["home", 0, "Skip and Loafer"].map((act, index) =>
        index % 2 == 1 ? (
          <img src="./images/icons/activity_arrow.png" alt="" />
        ) : (
          <div key={act}>{act}</div>
        )
      )}
    </div>
  );
};

export default ActivityPath;
