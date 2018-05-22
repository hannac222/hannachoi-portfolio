import { Fullpage, Slide } from "fullpage-react";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Section01 from "../components/section01";
import Section02 from "../components/section02";
import Section03 from "../components/section03";
import "../styles.scss";

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 3,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide>
    <Section01 />
  </Slide>,
  <Slide>
    <Section02 />
  </Slide>,
  <Slide>
    <Section03 />
  </Slide>
];
fullPageOptions.slides = slides;

const Index = () => (
  <div className="wrapper-index">
    <Layout>
      <Fullpage {...fullPageOptions} />
    </Layout>
    <Sidebar />
  </div>
);

export default Index;
