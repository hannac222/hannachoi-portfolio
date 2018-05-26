import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import { setAnimationDuration } from "../lib/utils";
import Link from "next/link";

const SECTION_NUMBER = 2;

const Lemongrass = ({ isVisible }) => (
  <div className="wrapper">
    <div className="title">
      <Animated
        animationIn="fadeInLeft"
        isVisible={isVisible}
        style={setAnimationDuration("2.5s")}
      >
        <h1>Lemongrass</h1>
      </Animated>
      <Animated animationIn="fadeInRight" isVisible={isVisible}>
        <p className="description">A Fictional Business Website Project</p>
      </Animated>
      <Link href="/lemongrass">
        <button className="btn">Show me more</button>
      </Link>
    </div>
    <Link href="/lemongrass">
      <a className="featured-image lemongrass-image" />
    </Link>
  </div>
);

const mapState = state => ({
  isVisible: state.repaintSection === SECTION_NUMBER - 1
});

export default connect(mapState)(Lemongrass);
