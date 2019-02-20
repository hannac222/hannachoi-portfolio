import React from "react";
import Layout from "../components/layout";
import PagesHero from "../components/project-pages/pages-hero";
import ProjectOverview from "../components/project-pages/project-overview";
import ProjectDetail from "../components/project-pages/project-detail";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const AeMechanical = () => (
  <Layout className="page-ae">
    <PagesHero pageTitle="AE Mechanical" pageName="ae-mechanical" />
    {/* <div className="page-top"> */}
    {/* <span />
        <div className="title">
        <h1>AE Mechanical</h1>
      </div> */}
    {/* </div> */}
    <ProjectOverview
      projectInfo="Plumbing company client"
      siteUrl="http://beta.aemechanical.ca"
      technology="React.js | Next.js | Sass | Adobe XD | Responsive | SVG"
      imgUrl="audra-wireframes.jpg"
      alt="Audra Ricketts Wireframes"
    />
    <div className="wrapper-project">
      <section className="project-container">
        <div className="project-bg" />
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
          <ProjectDetail
            imgUrl="audra-detail.jpg"
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
    return <AeMechanical />;
  }
}

export default Wrapper;