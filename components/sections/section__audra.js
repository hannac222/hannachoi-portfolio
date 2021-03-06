import { connect } from "react-redux";
import { Animated } from "react-animated-css";
import { setAnimationDuration } from "../../lib/utils";
import Link from "next/link";

const SECTION_NUMBER = 3;

const Section_Audra = ({ isVisible }) => (
  <div className="wrapper">
    <div className="title">
      <Animated
        animationIn="fadeInLeft"
        isVisible={isVisible}
        style={setAnimationDuration("1.0s")}
      >
        <h1>Audra Ricketts</h1>
        <p>Artist Client Portfolio Website</p>
        <Link href="/audra-ricketts">
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
      <Link href="/audra-ricketts">
        <a className="featured-image audra-ricketts-image">
          <span />
        </a>
      </Link>
    </Animated>
  </div>
);

const mapState = state => ({
  isVisible: state.repaintSection >= SECTION_NUMBER - 1
});

export default connect(mapState)(Section_Audra);
