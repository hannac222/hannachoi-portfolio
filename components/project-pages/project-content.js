export default ({ concept, pageName, previewUrl, previewAlt, development }) => (
  <>
    <div className="project-content">
      <div className="concept">
        <h2>Concept</h2>
        <p>{concept}</p>
      </div>
      <div className="project-preview">
        <img
          src={"../static/assets/" + pageName + "/" + previewUrl}
          alt={previewAlt}
        />
      </div>
      <div className="development">
        <h2>Development</h2>
        <p>{development}</p>
      </div>
    </div>
  </>
);
