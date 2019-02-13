import { Fullpage } from "fullpage-react";
import { connect } from "react-redux";

const SectionNav = ({ activeSection }) => (
  <div className="section-nav-container">
    <ul>
      <li className={activeSection === 0 ? "active" : ""}>
        <a onClick={Fullpage.changeFullpageSlide.bind(null, 0)}>
          <span />
        </a>
      </li>
      <li className={activeSection === 1 ? "active" : ""}>
        <a onClick={Fullpage.changeFullpageSlide.bind(null, 1)}>
          <span />
        </a>
      </li>
      <li className={activeSection === 2 ? "active" : ""}>
        <a onClick={Fullpage.changeFullpageSlide.bind(null, 2)}>
          <span />
        </a>
      </li>
      <li className={activeSection === 3 ? "active" : ""}>
        <a onClick={Fullpage.changeFullpageSlide.bind(null, 3)}>
          <span />
        </a>
      </li>
      <li className={activeSection === 4 ? "active" : ""}>
        <a onClick={Fullpage.changeFullpageSlide.bind(null, 4)}>
          <span />
        </a>
      </li>
    </ul>
  </div>
);

const mapState = state => ({
  activeSection: state.repaintSection
});

export default connect(mapState)(SectionNav);
