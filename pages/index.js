import { Fullpage, Slide } from "fullpage-react";
import { dispatch } from "@rematch/core";
import Layout from "../components/layout";
import SideIndicator from "../components/section-nav";
import Section01 from "../components/section01";
import Section02 from "../components/section02";
import Section03 from "../components/section03";
import Section04 from "../components/section04";
import "../styles.scss";
import SectionNav from "../components/section-nav";

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 5,

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
  </Slide>,
  <Slide>
    <Section04 />
  </Slide>
];
fullPageOptions.slides = slides;

/**
 * const state = {
 *   activeSlide: 2
 * }
 */
const onSlideChangeEnd = (_, __, state) => {
  dispatch.repaintSection.repaint(state.activeSlide);
  dispatch.hideScrollDown.shouldHide(state.activeSlide);
};

const Index = () => (
  <div className="wrapper-index">
    <Layout>
      <Fullpage {...fullPageOptions} onSlideChangeEnd={onSlideChangeEnd} />
      <SectionNav />
    </Layout>
  </div>
);

export default Index;
