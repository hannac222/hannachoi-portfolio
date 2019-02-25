import React from "react";
import Layout from "../components/layout";
import PagesHero from "../components/project-pages/pages-hero";
import ProjectOverview from "../components/project-pages/project-overview";
import ProjectContent from "../components/project-pages/project-content";
import ProjectContentDetail from "../components/project-pages/project-content__detail";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const Lemongrass = () => (
  <Layout className="page-lemongrass">
    <PagesHero pageTitle="Lemongrass" pageName="lemongrass" />

    <ProjectOverview
      pageName="lemongrass"
      projectInfo="A fictional business website project"
      siteUrl="http://hchoi.bcitwebdeveloper.ca/lemongrass"
      technology="HTML | CSS | Bootstrap | Responsive | jQuery"
      imgUrl="lemongrass-mockup.png"
      alt="Lemongrass Mockup"
    />

    <ProjectContent
      concept="The business model is an exotic brunch and lunch restaurant in a
      suburb. It has a beautiful garden and relaxing atmosphere. Since
      it’s a restaurant, it focuses on introducing the menu and the
      interior of the place. The website makes it easy for people to
      reach out to the business by displaying contact information and
      social media icons in all the pages."
      pageName="lemongrass"
      previewUrl="lemongrass-preview.jpg"
      previewAlt="Lemongrass website preview"
      development="A full responsive website using Bootstrap. As a scrolling feature,
      the trendy CSS parallax effect with multiple background images to
      create an interesting browsing experience. Also, a friendly
      contact form validation indicates error messages for the user."
    />

    <ProjectContentDetail
      pageName="lemongrass"
      detailUrl01="lemongrass-homepage.jpg"
      detailAlt01="Lemongrass website Home page"
      detailUrl02="lemongrass-location.jpg"
      detailAlt02="Lemongrass website Location page"
      detailUrl03="lemongrass-gallery.jpg"
      detailAlt03="Lemongrass website Gallery page"
      detailUrl04="lemongrass-menu.jpg"
      detailAlt04="Lemongrass website Menu page"
      detailUrl05="lemongrass-gallery-detail.jpg"
      detailAlt05="Lemongrass website Gallery view detail page"
    />

    <PageNav previousLink="/audra-ricketts" nextLink="/bcit-landing-page" />
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
    return <Lemongrass />;
  }
}

export default Wrapper;
