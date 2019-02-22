export default ({
  pageName,
  detailUrl01,
  detailAlt01,
  detailUrl02,
  detailAlt02,
  detailUrl03,
  detailAlt03,
  detailUrl04,
  detailAlt04,
  detailUrl05,
  detailAlt05
}) => (
  <>
    <div className="project-detail">
      <img
        src={"../static/assets/" + pageName + "/" + detailUrl01}
        alt={detailAlt01}
      />
      <img
        src={"../static/assets/" + pageName + "/" + detailUrl02}
        alt={detailAlt02}
      />
      <img
        src={"../static/assets/" + pageName + "/" + detailUrl03}
        alt={detailAlt03}
      />
      <img
        src={"../static/assets/" + pageName + "/" + detailUrl04}
        alt={detailAlt04}
      />
      <img
        src={"../static/assets/" + pageName + "/" + detailUrl05}
        alt={detailAlt05}
      />
    </div>
  </>
);
