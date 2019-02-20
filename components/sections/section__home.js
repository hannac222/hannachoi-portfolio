import { connect } from "react-redux";
import ScrollDown from "../scroll-down";

const Section_Home = ({ hideScrollDown }) => (
  <div className="wrapper-home">
    <div className="intro">
      <h1 className="hello-he">he</h1>
      <h1 className="hello-llo">
        llo<span>.</span>
      </h1>
    </div>
    <div className="bg-right" />
    {hideScrollDown === true ? false : <ScrollDown />}
  </div>
);

const mapState = state => ({
  hideScrollDown: state.hideScrollDown
});

export default connect(mapState)(Section_Home);
