import Link from "next/link";
import { withRouter } from "next/router";

const getPageName = pathname => pathname.substring(1);

const Header = ({ router }) => (
  <div className={`header page-${getPageName(router.pathname)}`}>
    <Link href="/">
      <a className="name">Hanna Choi</a>
    </Link>
    <div className="nav">
      <Link href="/about">
        <a>About Me</a>
      </Link>
    </div>
  </div>
);
export default withRouter(Header);
