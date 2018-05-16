import Link from "next/link";

const Header = () => (
  <div>
    <Link href="/">
      <a>Hanna Choi</a>
    </Link>
    <Link href="/work">
      <a>Work</a>
    </Link>
    <Link href="/">
      <a>About</a>
    </Link>
  </div>
);
export default Header;
