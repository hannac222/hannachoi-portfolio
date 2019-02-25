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
    As this is a single landing page that contains and links to major projects
    and assignments from the &nbsp;
    <a href="https://bcitwebdeveloper.ca" target="_blank">
      Technical Web Designer
    </a>
    &nbsp; program at the&nbsp;
    <a href="https://www.bcit.ca" target="_blank">
      British Columbia Institute of Technology in Canada.
    </a>
  </>
);
const BcitLandingPage = () => (
  <Layout className="page-bcit-twd">
    <PagesHero pageTitle="BCIT TWD Landing Page" pageName="bcit-landing-page" />
    <ProjectOverview
      pageName="bcit-landing-page"
      projectInfo="BCIT Technical Web Designer program landing page"
      siteUrl="http://hchoi.bcitwebdeveloper.ca"
      technology="HTML | CSS | JavaScript | jQuery | Vue.js | PHP | Angular.js | WordPress | SEO"
      imgUrl="bcit-twd-mockup.png"
      alt="BCIT TWD landing page Mockup"
    />
    <ProjectContent
      concept={<BcitConcept />}
      pageName="bcit-landing-page"
      previewUrl="bcit-twd-preview.jpg"
      previewAlt="BCIT TWD landing page website preview"
      development="For the main landing page, I focused on a simple, modern and responsive design. The background video is replaced with a static image in mobile and tablet screens. This is a place to present over 10 websites and web applications including search engine optimization and exercises of fetching data from API.
      "
    />
    <ProjectContentDetail
      pageName="bcit-landing-page"
      detailUrl01="bcit-twd-homepage.jpg"
      detailAlt01="BCIT TWD landing page website Home page"
      detailUrl02="bcit-twd-mouse-over.jpg"
      detailAlt02="BCIT TWD landing page website thumbnails of my work"
      detailUrl03="bcit-twd__mobile-version.jpg"
      detailAlt03="BCIT TWD landing page website mobile version"
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
    return <BcitLandingPage />;
  }
}

export default Wrapper;
