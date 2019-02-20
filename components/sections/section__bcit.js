import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import { setAnimationDuration } from "../../lib/utils";
import Link from "next/link";
const SECTION_NUMBER = 5;

const Section_Bcit = ({ isVisible }) => (
  <div className="wrapper">
    <div className="title">
      <Animated
        animationIn="fadeInLeft"
        isVisible={isVisible}
        style={setAnimationDuration("1.0s")}
      >
        <h1 className="bcitTitle">BCIT TWD Portfolio</h1>
        <p>Projects and assignments from BCIT</p>
        <Link href="/bcit-portfolio">
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
      <Link href="/bcit-portfolio">
        <a className="featured-image bcit-portfolio-image">
          <span />
        </a>
      </Link>
    </Animated>
  </div>
);

const mapState = state => ({
  isVisible: state.repaintSection >= SECTION_NUMBER - 1
});

export default connect(mapState)(Section_Bcit);
