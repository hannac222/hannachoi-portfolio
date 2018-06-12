import Link from "next/link";

const PageNav = props => (
  <div className="page-nav">
    <Link href={props.previousLink}>
      <a className="previous">
        Previous<br />&lt;-
      </a>
    </Link>
    <Link href={props.nextLink}>
      <a className="next">
        Next<br />-&gt;
      </a>
    </Link>
  </div>
);

export default PageNav;
