import React from "react";
import Layout from "../components/layout";
import PagesHero from "../components/project-pages/pages-hero";
import ProjectOverview from "../components/project-pages/project-overview";
import ProjectContent from "../components/project-pages/project-content";
import PageNav from "../components/page-nav";
import SocialMedia from "../components/social-media";

const AudraRicketts = () => (
  <Layout className="page-audra">
    <PagesHero pageTitle="Audra Ricketts" pageName="audra-ricketts" />

    <ProjectOverview
      pageName="audra-ricketts"
      projectInfo="Artist client portfolio team project"
      siteUrl="http://audraricketts.com"
      technology="WordPress | Sass | Responsive | jQuery | PHP"
      imgUrl="audra-wireframes.jpg"
      alt="Audra Ricketts wireframes"
    />

    <ProjectContent
      concept="The purpose of this website is to showcase the client's past and
  current artwork to galleries and interested buyers. It’s a place
  to learn about the client by reading her biography, artist
  statement and CV as well as browsing her process and contact her.
  To make her artworks stand out, it’s designed modern, clean,
  minimalistic with a white background."
      previewUrl="audra-preview.jpg"
      previewAlt="Audra Ricketts website preview"
      development="For the content management system, we built it with Wordpress and
  a customized theme and admin dashboard. With Lightbox for the
  gallery, users are able to look through images. The contact form
  is built with the Ninja form plug-in which automatically sends a
  confirmation email to users. To match the website design, we
  customized Google Maps colors and style."
      detailUrl="audra-detail.jpg"
      detailAlt="Audra Ricketts detail pages"
    />

    <PageNav previousLink="/ae-mechanical" nextLink="/lemongrass" />
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
    return <AudraRicketts />;
  }
}

export default Wrapper;
