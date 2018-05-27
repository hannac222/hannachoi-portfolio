import { connect } from "react-redux";
import Footer from "../components/footer";
import ScrollDown from "../components/scroll-down";

const Section01 = ({ hideScrollDown }) => (
  <div className="wrapper-front" id="section01">
    {/* <div className="bg-left" /> */}
    <div className="title">
      <h1>HE</h1>
      <h1 className="second-line">LLO.</h1>
      {/* <div className="bg-half-left"/> */}
    </div>
    <div className="bg-right" />
    {hideScrollDown === true ? false : <ScrollDown />}
    <Footer />
  </div>
);

const mapState = state => ({
  hideScrollDown: state.hideScrollDown
});

export default connect(mapState)(Section01);
