import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import { setAnimationDuration } from "../../lib/utils";
import Link from "next/link";

const SECTION_NUMBER = 2;

const Section_Ae = ({ isVisible }) => (
  <div className="wrapper">
    <div className="title">
      <Animated
        animationIn="fadeInLeft"
        isVisible={isVisible}
        style={setAnimationDuration("1.0s")}
      >
        <h1>AE Mechanical</h1>
        <p>Plumbing company Client website</p>
        <Link href="/ae-mechanical">
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
      <Link href="ae-mechanical">
        <a className="featured-image ae-mechanical-image">
          <span />
        </a>
      </Link>
    </Animated>
  </div>
);

const mapState = state => ({
  isVisible: state.repaintSection >= SECTION_NUMBER - 1
});

export default connect(mapState)(Section_Ae);
