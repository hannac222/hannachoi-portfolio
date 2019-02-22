import React from "react";
import Layout from "../components/layout";
import PagesHero from "../components/project-pages/pages-hero";
import ProjectOverview from "../components/project-pages/project-overview";
import ProjectContent from "../components/project-pages/project-content";
import ProjectContentDetail from "../components/project-pages/project-content__detail";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const BcitConcept = () => (
  <>
    This is a single web page that links to major projects and assignments from
    the &nbsp;
    <a href="https://bcitwebdeveloper.ca" target="_blank">
      Technical Web Designer
    </a>
    &nbsp;program at the&nbsp;
    <a href="https://www.bcit.ca" target="_blank">
      British Columbia Institute of Technology in Canada
    </a>
    .
  </>
);

const BcitPortfolio = () => (
  <Layout className="page-bcit-twd">
    <PagesHero pageTitle="BCIT TWD Portfolio" pageName="bcit-portfolio" />

    <ProjectOverview
      pageName="bcit-portfolio"
      projectInfo="BCIT Technical Web Designer program portfolio"
      siteUrl="http://hchoi.bcitwebdeveloper.ca"
      technology="HTML + CSS | JavaScript | jQuery | Vue.js | PHP"
      imgUrl="bcit-twd-mockup.png"
      alt="BCIT TWD Portfolio Mockup"
    />

    <ProjectContent
      concept={<BcitConcept />}
      pageName="bcit-portfolio"
      previewUrl="bcit-twd-preview.jpg"
      previewAlt="BCIT TWD Portfolio website preview"
      development="Focused on building a simple responsive website and it has a
      hamburger menu on smaller devices. On larger screens, the main
      background video shows developers and designers collaborating on
      projects. On smaller screens, the video is replaced with a static
      image."
    />

    <ProjectContentDetail
      pageName="bcit-portfolio"
      detailUrl01="bcit-twd-homepage.jpg"
      detailAlt01="BCIT TWD portfolio website Home page"
      detailUrl02="bcit-twd-mouse-over.jpg"
      detailAlt02="BCIT TWD portfolio website thumbnails of my work"
      detailUrl03="bcit-twd__mobile-version.jpg"
      detailAlt03="BCIT TWD portfolio website mobile version"
    />

    <PageNav previousLink="/lemongrass" nextLink="/ae-mechanical" />
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
    return <BcitPortfolio />;
  }
}

export default Wrapper;
