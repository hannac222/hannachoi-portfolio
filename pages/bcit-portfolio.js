import React from "react";
import Layout from "../components/layout";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const BcitPortfolio = () => (
  <Layout className="page-bcit-twd">
    <div className="wrapper-project">
      <div className="page-top">
        <span />
        <div className="title">
          <h1 className="bcitTitle">BCIT TWD Portfolio</h1>
        </div>
      </div>
      <section className="project-container">
        <div className="project-bg">
          <div className="project-overview">
            <ul>
              <li>
                <h2>Project Info.</h2>
                <p>BCIT Technical Web Designer program portfolio</p>
              </li>
              <li className="visit-website">
                <h2>Website</h2>
                <a href="http://hchoi.bcitwebdeveloper.ca" target="_blank">
                  Visit website
                </a>
              </li>
              <li>
                <h2>Technology</h2>
                <p>HTML | CSS | Responsive | JavaScript | jQuery</p>
              </li>
            </ul>
          </div>
          <div className="project-mockup">
            <img
              src="/static/assets/bcit-twd-mockup.png"
              alt="BCIT TWD Portfolio Mockup"
            />
          </div>
        </div>
        <div className="project-content">
          <div className="concept">
            <h2>Concept</h2>
            <p>
              It’s a single web page that links major projects and assignments
              from BCIT Technical Web Designer program.
            </p>
          </div>
          <div className="project-preview" />
          <div className="development">
            <h2>Development</h2>
            <p>
              Focused on building a simple responsive website and it has a
              hamburger menu on smaller devices. On larger screens, the main
              background video shows developers and designers collaborating on
              projects. On smaller screens, the video is replaced with a static
              image.
            </p>
          </div>
        </div>
        <div className="project-detail">
          <img
            src="/static/assets/bcit-twd-detail.jpg"
            alt="BCIT TWD Portfolio Detail Pages"
          />
        </div>
      </section>
      <PageNav previousLink="/lemongrass" nextLink="/audra-ricketts" />
      <SocialMedia />
    </div>
  </Layout>
);

// Disable the full page plug-in
class Wrapper extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  render() {
    return <BcitPortfolio />;
  }
}

export default Wrapper;
