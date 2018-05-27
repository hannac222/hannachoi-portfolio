import { connect } from "react-redux";
import Footer from "../components/footer";
import ScrollDown from "../components/scroll-down";

const Section01 = ({ hideScrollDown }) => (
  <div className="wrapper" id="section1">
    <div className="title">
      <h1>I’m Hanna</h1>
      <h3>A front end developer based in Vancouver, BC, Canada</h3>
    </div>
    <div className="main-image">
      {/* <img src="/static/assets/smurff.png" alt="Profile" /> */}
    </div>
    {hideScrollDown === true ? false : <ScrollDown />}
    <Footer />
  </div>
);

const mapState = state => ({
  hideScrollDown: state.hideScrollDown
});

export default connect(mapState)(Section01);
