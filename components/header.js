import Link from "next/link";
import { withRouter } from "next/router";
import { Fullpage } from "fullpage-react";
// Remove / at the beginning to use the classname to css.
const getPageName = pathname => pathname.substring(1);
// Router: to know where we are
const Header = ({ router }) => (
  // Dynamic header class name
  <div className={`header page-${getPageName(router.pathname)}`}>
    {/* Index uses onClick otherwise uses Link */}
    {router.pathname === "/" ? (
      <a className="name" onClick={Fullpage.changeFullpageSlide.bind(null, 0)}>
        Hanna Choi
      </a>
    ) : (
      <Link href="/">
        <a className="name">Hanna Choi</a>
      </Link>
    )}

    <div className="nav">
      <Link href="/about">
        <a>About Me</a>
      </Link>
    </div>
  </div>
);
export default withRouter(Header);
