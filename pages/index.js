import { Fullpage, Slide } from "fullpage-react";
import { dispatch } from "@rematch/core";
import Layout from "../components/layout";
import SideIndicator from "../components/section-nav";
import Section_Home from "../components/section_home";
import Section_Lemon from "../components/section_lemon";
import Section_Bcit from "../components/section_bcit";
import Section_Audra from "../components/section_audra";
import "../styles.scss";
import SectionNav from "../components/section-nav";

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 6,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true,
  navigation: true
};

const slides = [
  <Slide>
    <Section_Home />
  </Slide>,
  <Slide>
    <Section_Lemon />
  </Slide>,
  <Slide>
    <Section_Bcit />
  </Slide>,
  <Slide>
    <Section_Audra />
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
    <Layout hideFooter>
      {/* Children of Layout */}
      <Fullpage {...fullPageOptions} onSlideChangeEnd={onSlideChangeEnd} />
      <SectionNav />
    </Layout>
  </div>
);

export default Index;
