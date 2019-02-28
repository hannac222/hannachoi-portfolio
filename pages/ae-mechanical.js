import React from "react";
import Layout from "../components/layout";
import PagesHero from "../components/project-pages/pages-hero";
import ProjectOverview from "../components/project-pages/project-overview";
import ProjectContent from "../components/project-pages/project-content";
import ProjectContentDetail from "../components/project-pages/project-content__detail";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const AeMechanical = () => (
  <Layout className="page-ae-mechanical">
    <PagesHero pageTitle="AE Mechanical" pageName="ae-mechanical" />

    <ProjectOverview
      pageName="ae-mechanical"
      projectInfo="Plumbing company client"
      siteUrl="http://beta.aemechanical.ca"
      technology="React.js | Next.js | Scss | Adobe XD | Responsive | SVG"
    />
    <div className="ae-video">
      <img
        src="/static/assets/ae-mechanical/imac.png"
        alt="AE Mechanical demo video"
      />
      <span />
      <video autoPlay muted loop>
        <source
          src="/static/assets/ae-mechanical/ae-mechanical-video.mp4"
          type="video/mp4"
        />
      </video>
    </div>

    <ProjectContent
      concept="The key design of project AE Mechanical is easy-contact menus and introducing their wide service rage to market as a plumbing company. This new website not only brought the company into the modern but also customers get provided essential information about the business.
      "
      pageName="ae-mechanical"
      previewUrl="ae-preview.jpg"
      previewAlt="AE Mechanical Preview"
      development="Based on its target user, the business contact number positioned top-fixed in the header so it's always indicated to users and can call them right away. Integrating Instagram feed and Google Maps by fetching data from API in react.js makes the site looks professional and communicational.
      "
    />

    <ProjectContentDetail
      pageName="ae-mechanical"
      detailUrl01="ae-mechanical-home.jpg"
      detailAlt01="AE Mechanical website Home page"
      detailUrl02="ae-mechanical-contact.jpg"
      detailAlt02="AE Mechanical website Contact page"
      detailUrl03="ae-mechanical-about.jpg"
      detailAlt03="AE Mechanical website About page"
      detailUrl04="ae-mechanical-services.jpg"
      detailAlt04="AE Mechanical website Services page"
      detailUrl05="ae-mechanical-faq.jpg"
      detailAlt05="AE Mechanical website FAQ page"
    />

    <PageNav previousLink="/bcit-landing-page" nextLink="/audra-ricketts" />
    <SocialMedia />
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
