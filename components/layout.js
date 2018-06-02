import Header from "./header";
import Footer from "../components/footer";

const Layout = props => (
  <div>
    <Header />
    {/* Main Content */}
    <div className="main">{props.children}</div>
    {props.hideFooter === true ? null : <Footer />}
  </div>
);

export default Layout;
