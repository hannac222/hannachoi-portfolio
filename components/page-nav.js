import Link from "next/link";
import LeftArrow from "./svg/left-arrow.svg";
import RightArrow from "./svg/right-arrow.svg";

const PageNav = props => (
  <div className="page-nav">
    <Link href={props.previousLink}>
      <a className="previous">
        <LeftArrow />
        <span>Previous</span>
      </a>
    </Link>
    <Link href={props.nextLink}>
      <a className="next">
        <span>Next</span>
        <RightArrow />
      </a>
    </Link>
  </div>
);

export default PageNav;
