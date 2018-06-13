import React from "react";
import { initGA, logPageView } from "../lib/analytics";
import Header from "./header";

export default class Layout extends React.Component {
  componentDidMount() {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }
  render() {
    return (
      <div className={this.props.className}>
        <Header />
        {/* Main Content */}
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}
