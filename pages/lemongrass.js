import React from "react";
import Layout from "../components/layout";
import PageNav from "../components/page-nav";

const Lemongrass = () => (
  <Layout className="page-lemongrass">
    <div className="wrapper-project">
      <div className="page-top">
        <span />
        <div className="title">
          <h1>Lemongrass</h1>
          <h4 className="sub-title">A Fictional Business Website Project</h4>
        </div>
      </div>
      <section className="project-container">
        <div className="project-bg">
          <div className="project-overview">
            <ul>
              <li>
                <h2>Project Info.</h2>
                <p>A fictional business website</p>
              </li>
              <li>
                <h2>Website</h2>
                <p>hchoi.bcitwebdeveloper.ca/lemongrass</p>
              </li>
              <li>
                <h2>Overview</h2>
                <p>
                  Platform: Static Site | A responsive | jQuery | Bootstrap |
                </p>
              </li>
            </ul>
          </div>
          <div className="project-content">
            <img
              className="mockup"
              src="/static/assets/audra.jpg"
              alt="Work Space"
            />
          </div>
        </div>

        <div className="project-detail">
          <div>
            <h2>Concept</h2>
            <p>
              The business model is a exotic brunch and lunch restaurant in a
              suburb. It has a huge beautiful garden and atmosphere. As it’s a
              restaurant, focused on introduction of menu and the interior of
              the place. It’s made people easily reach out to the business by
              display contact information and social media icons in all the
              pages.
            </p>
          </div>
          <div className="detail-img" />
        </div>
        <div>
          <h2>Development</h2>
          <p>
            A full responsive website using Bootstrap. As a scrolling feature,
            the trendy CSS parallax effect with multiple background images to
            create an interesting browsing experience. Also, a friendly contact
            form validation and indicated messages for the user.
          </p>
        </div>
      </section>
      <PageNav previousLink="/audra-portfolio" nextLink="/bcit-portfolio" />
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
    return <Lemongrass />;
  }
}

export default Wrapper;
