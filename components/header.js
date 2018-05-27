import Link from "next/link";

const Header = () => (
  <div className="header">
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
export default Header;
