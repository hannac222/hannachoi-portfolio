export default ({ projectInfo, siteUrl, technology, imgUrl, alt }) => (
  //   <div className={"pages-hero " + pageName}>
  <>
    <div className="project-overview">
      <ul>
        <li>
          <h2>Project Info.</h2>
          <p>{projectInfo}</p>
        </li>
        <li>
          <h2>Website</h2>
          <a href={siteUrl} target="_blank">
            Visit website
          </a>
        </li>
        <li>
          <h2>Technology</h2>
          <p>{technology}</p>
        </li>
      </ul>
    </div>
    <div className="project-wireframes">
      <img src={"../static/assets/" + imgUrl} alt={alt} />
      <span />
    </div>
  </>
  //   </div>
);
