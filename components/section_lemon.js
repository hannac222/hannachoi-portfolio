import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import { setAnimationDuration } from "../lib/utils";
import Link from "next/link";

const SECTION_NUMBER = 4;

const Section_Lemon = ({ isVisible }) => (
  <div className="wrapper">
    <div className="title">
      <Animated
        animationIn="fadeInLeft"
        isVisible={isVisible}
        style={setAnimationDuration("1.0s")}
      >
        <h1 id="lemonTilte">Lemongrass</h1>
        <p>A Fictional Business Website Project</p>
        <Link href="/lemongrass">
          <div className="btn-wrapper">
            <a className="btn">Show me more</a>
          </div>
        </Link>
      </Animated>
    </div>
    <Animated
      animationIn="zoomIn"
      isVisible={isVisible}
      style={setAnimationDuration("1.7s")}
    >
      <Link href="/lemongrass">
        <a className="featured-image lemongrass-image">
          <span />
        </a>
      </Link>
    </Animated>
  </div>
);

const mapState = state => ({
  isVisible: state.repaintSection >= SECTION_NUMBER - 1
});

export default connect(mapState)(Section_Lemon);
