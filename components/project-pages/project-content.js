export default ({
  concept,
  previewUrl,
  previewAlt,
  development,
  detailUrl,
  detailAlt
}) => (
  <>
    <div className="project-content">
      <div className="concept">
        <h2>Concept</h2>
        <p>{concept}</p>
      </div>
      <div className="project-preview">
        <img src={"../static/assets/" + previewUrl} alt={previewAlt} />
      </div>
      <div className="development">
        <h2>Development</h2>
        <p>{development}</p>
      </div>
    </div>
    <div className="project-detail">
      <img src={"../static/assets/" + detailUrl} alt={detailAlt} />
    </div>
  </>
);
