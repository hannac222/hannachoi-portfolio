import React from "react";
import { Fullpage, Slide } from "fullpage-react";
import { dispatch } from "@rematch/core";
import Layout from "../components/layout";
import Section__Home from "../components/sections/section__home";
import Section__Ae from "../components/sections/section__ae";
import Section__Audra from "../components/sections/section__audra";
import Section__Lemon from "../components/sections/section__lemon";
import Section__Bcit from "../components/sections/section__bcit";
import SectionNav from "../components/section-nav";
import "../styles.scss";

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
    <Section__Home />
  </Slide>,
  <Slide>
    <Section__Ae />
  </Slide>,
  <Slide>
    <Section__Audra />
  </Slide>,
  <Slide>
    <Section__Lemon />
  </Slide>,
  <Slide>
    <Section__Bcit />
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

class Index extends React.Component {
  componentWillUnmount() {
    dispatch.repaintSection.repaint(0);
  }

  render() {
    return (
      <div className="wrapper-index">
        <Layout>
          {/* Children of Layout */}
          <Fullpage {...fullPageOptions} onSlideChangeEnd={onSlideChangeEnd} />
          <SectionNav />
        </Layout>
      </div>
    );
  }
}

export default Index;
