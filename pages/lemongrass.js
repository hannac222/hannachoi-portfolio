import React from "react";
import Layout from "../components/layout";

const Lemongrass = () => (
  <Layout>
    <div className="wrapper-project">
      <div className="page-top">
        <div className="title">
          <h1>Lemongrass</h1>
          <p className="sub-title">A Fictional Business Website Project</p>
        </div>
        <img
          className="banner-image"
          src="/static/assets/lemongrass-banner-1.jpg"
          alt="Toast"
        />
      </div>
      <section className="project-container">
        <div className="bg-img">
          <div className="project-overview">
            <ul>
              <li>
                <p>PROJECT</p>
                <p>A fictional business website</p>
              </li>
              <li>
                <p>Website</p>
                <p>hchoi.bcitwebdeveloper.ca/lemongrass</p>
              </li>
              <li>
                <p>OVERVIEW</p>
                <p>
                  A responsive, including a palallax scrolling design website
                  for Mason Architects, a fictious architecture studio
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="project-detail">
          <div className="detail-img" />
          <p>
            A responsive, including a palallax scrolling design website for
            Mason Architects, a fictious architecture studio
          </p>
        </div>
      </section>
    </div>
  </Layout>
);

class Wrapper extends React.Component {
  componentDidMount() {
    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
  }

  render() {
    return <Lemongrass />;
  }
}

export default Wrapper;
