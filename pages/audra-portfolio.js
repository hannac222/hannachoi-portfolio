import React from "react";
import Layout from "../components/layout";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/socialmedia";

const AudraPortfolio = () => (
  <Layout className="page-audra">
    <div className="wrapper-project">
      <div className="page-top">
        <span />
        <div className="title">
          <h1>Audra Rickkets Portfolio</h1>
        </div>
      </div>
      <section className="project-container">
        <div className="project-bg">
          <div className="project-overview">
            <ul>
              <li>
                <h2>Project Info.</h2>
                <p>Artist client portfolio</p>
              </li>
              <li className="live-website">
                <h2>Website</h2>
                <a href="#">Live website</a>
              </li>
              <li>
                <h2>Technology</h2>
                <p>Wordpress | Sass | Responsive | jQuery | PHP</p>
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
              The business model is a exotic brunch and lunch restaurant in a
              suburb. It has a huge beautiful garden and atmosphere. As it’s a
              restaurant, focused on introduction of menu and the interior of
              the place. It’s made people easily reach out to the business by
              display contact information and social media icons in all the
              pages.
            </p>
          </div>
          <div className="project-preview" />
          <div className="development">
            <h2>Development</h2>
            <p>
              A full responsive website using Bootstrap. As a scrolling feature,
              the trendy CSS parallax effect with multiple background images to
              create an interesting browsing experience. Also, a friendly
              contact form validation and indicated messages for the user.
            </p>
          </div>
        </div>
        <div className="project-detail">
          <img
            src="/static/assets/audra-detail.jpg"
            alt="Audra Rickkets Detail Pages"
          />
        </div>
      </section>
      <PageNav previousLink="/lemongrass" nextLink="/audra-portfolio" />
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
    return <AudraPortfolio />;
  }
}

export default Wrapper;
