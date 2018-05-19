import Header from "./header";

const Layout = props => (
  <div>
    <Header />
    {/* Main Content */}
    <div className="main">{props.children}</div>
  </div>
);

export default Layout;
