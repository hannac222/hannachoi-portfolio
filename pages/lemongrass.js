import React from "react";
import Layout from "../components/layout";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const Lemongrass = () => (
  <Layout className="page-lemongrass">
    <div className="wrapper-project">
      <div className="page-top">
        <span />
        <div className="title lemontitle">
          <h1>Lemongrass</h1>
        </div>
      </div>
      <section className="project-container">
        <div className="project-bg">
          <div className="project-overview">
            <ul>
              <li>
                <h2>Project Info.</h2>
                <p>A fictional business website project</p>
              </li>
              <li className="visit-website">
                <h2>Website</h2>
                <a
                  href="http://hchoi.bcitwebdeveloper.ca/lemongrass"
                  target="_blank"
                >
                  Visit website
                </a>
              </li>
              <li>
                <h2>Technology</h2>
                <p>HTML | CSS | Bootstrap | Responsive | jQuery</p>
              </li>
            </ul>
          </div>
          <div className="project-mockup">
            <img
              src="/static/assets/lemongrass-mockup.png"
              alt="Lemongrass Mockup"
            />
          </div>
        </div>
        <div className="project-content">
          <div className="concept">
            <h2>Concept</h2>
            <p>
              The business model is an exotic brunch and lunch restaurant in a
              suburb. It has a beautiful garden and relaxing atmosphere. Since
              it’s a restaurant, it focuses on introducing the menu and the
              interior of the place. The website makes it easy for people to
              reach out to the business by displaying contact information and
              social media icons in all the pages.
            </p>
          </div>
          <div className="project-preview" />
          <div className="development">
            <h2>Development</h2>
            <p>
              A full responsive website using Bootstrap. As a scrolling feature,
              the trendy CSS parallax effect with multiple background images to
              create an interesting browsing experience. Also, a friendly
              contact form validation indicates error messages for the user.
            </p>
          </div>
        </div>
        <div className="project-detail">
          <img
            src="/static/assets/lemongrass-detail.jpg"
            alt="Lemongrass Detail Pages"
          />
        </div>
      </section>
      <PageNav previousLink="/audra-portfolio" nextLink="/bcit-portfolio" />
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
    return <Lemongrass />;
  }
}

export default Wrapper;
