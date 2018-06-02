import React from "react";
import Layout from "../components/layout";
import PageNav from "../components/page-nav";

const BcitPortfolio = () => (
  <Layout>
    <div className="wrapper">
      <div className="title">
        <h1>BCIT TWD Portfolio</h1>
        <p>Display projects from BCIT</p>
      </div>
      <div className="main-image">
        <img src="/static/assets/workspace.jpg" alt="Work Space" />
      </div>
      <PageNav previousLink="/lemongrass" nextLink="/audra-portfolio" />
    </div>
  </Layout>
);

export default BcitPortfolio;
