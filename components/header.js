import Link from "next/link";

const Header = () => (
  <div className="header">
    <Link href="/">
      <a className="name">Hanna Choi</a>
    </Link>
    <div className="nav">
      <Link href="/work">
        <a>Work</a>
      </Link>
      <Link href="/">
        <a>About</a>
      </Link>
    </div>
  </div>
);
export default Header;
