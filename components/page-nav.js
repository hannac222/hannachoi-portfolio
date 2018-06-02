import Link from "next/link";

const PageNav = props => (
  <div>
    <Link href={props.previousLink}>
      <a className="previous">Previous</a>
    </Link>
    <Link href={props.nextLink}>
      <a className="next">Next</a>
    </Link>
  </div>
);

export default PageNav;
