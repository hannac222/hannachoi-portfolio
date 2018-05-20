import { Fullpage, Slide } from "fullpage-react";
import Layout from "../components/layout";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";
import Home from "../components/home";
import "../styles.scss";

const fullPageOptions = {
  // for mouse/wheel events
  // represents the level of force required to generate a slide change on non-mobile, 10 is default
  scrollSensitivity: 7,

  // for touchStart/touchEnd/mobile scrolling
  // represents the level of force required to generate a slide change on mobile, 10 is default
  touchSensitivity: 7,
  scrollSpeed: 500,
  hideScrollBars: true,
  enableArrowKeys: true
};

const slides = [
  <Slide>
    {" "}
    <Home />{" "}
  </Slide>,
  <Slide> Slide 2 </Slide>
];
fullPageOptions.slides = slides;

const Index = () => (
  <div>
    <Layout>
      <Fullpage {...fullPageOptions} />
      <Footer />
    </Layout>
    <Sidebar />
  </div>
);

export default Index;
