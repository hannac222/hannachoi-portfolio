import React from "react";
import Layout from "../components/layout";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const AudraPortfolio = () => (
  <Layout className="page-audra">
    <div className="wrapper-project">
      <div className="page-top">
        <span />
        <div className="title">
          <h1>Audra Ricketts</h1>
        </div>
      </div>
      <section className="project-container">
        <div className="project-bg">
          <div className="project-overview">
            <ul>
              <li>
                <h2>Project Info.</h2>
                <p>Artist client portfolio team project</p>
              </li>
              <li className="visit-website">
                <h2>Website</h2>
                <a href="http://audraricketts.com" target="_blank">
                  Visit website
                </a>
              </li>
              <li>
                <h2>Technology</h2>
                <p>WordPress | Sass | Responsive | jQuery | PHP</p>
              </li>
            </ul>
          </div>
          <div className="project-wireframes">
            <img
              src="/static/assets/audra-wireframes.jpg"
              alt="Audra Ricketts Wireframes"
            />
          </div>
        </div>
        <div className="project-content">
          <div className="concept">
            <h2>Concept</h2>
            <p>
              The purpose of this website is to showcase the client's past and
              current artwork to galleries and interested buyers. It’s a place
              to learn about the client by reading her biography, artist
              statement and CV as well as browsing her process and contact her.
              To make her artworks stand out, it’s designed modern, clean,
              minimalistic with a white background.
            </p>
          </div>
          <div className="project-preview" />
          <div className="development">
            <h2>Development</h2>
            <p>
              For the content management system, we built it with Wordpress and
              a customized theme and admin dashboard. With Lightbox for the
              gallery, users are able to look through images. The contact form
              is built with the Ninja form plug-in which automatically sends a
              confirmation email to users. To match the website design, we
              customized Google Maps colors and style.
            </p>
          </div>
        </div>
        <div className="project-detail">
          <img
            src="/static/assets/audra-detail.jpg"
            alt="Audra Ricketts Detail Pages"
          />
        </div>
      </section>
      <PageNav previousLink="/bcit-portfolio" nextLink="/lemongrass" />
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
