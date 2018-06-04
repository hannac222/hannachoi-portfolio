import Header from "./header";
import Footer from "../components/footer";

const Layout = props => (
  <div className={props.className}>
    <Header />
    {/* Main Content */}
    <div className="main">{props.children}</div>
    {/* Default Footer shown */}
    {props.hideFooter === true ? null : <Footer />}
  </div>
);

export default Layout;
