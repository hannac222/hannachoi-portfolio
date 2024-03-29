export default ({
  pageName,
  projectInfo,
  siteUrl,
  technology,
  imgUrl,
  alt
}) => (
  <div className={"project-overview " + pageName}>
    <div className="project-info">
      <ul>
        <li>
          <h2>Project Info.</h2>
          <p>{projectInfo}</p>
        </li>
        <li>
          <h2>Website</h2>
          <a href={siteUrl} target="_blank">
            View live
          </a>
        </li>
        <li>
          <h2>Technology</h2>
          <p>{technology}</p>
        </li>
      </ul>
    </div>
    <div className="project-wireframes">
      <img src={"../static/assets/" + pageName + "/" + imgUrl} alt={alt} />
      <span />
    </div>
  </div>
);
