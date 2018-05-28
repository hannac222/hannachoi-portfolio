import Link from "next/link";
import Footer from "../components/footer";

const Section_Bcit = () => (
  <div className="wrapper">
    <div className="title">
      <h1>BCIT TWD Portfolio</h1>
      <p className="description">Display projects from BCIT</p>
      <Link href="/bcit-portfolio">
        <button className="btn">Show me more</button>
      </Link>
    </div>
    <Link href="/bcit-portfolio">
      <a className="featured-image bcit-portfolio-image" />
    </Link>
    <Footer />
  </div>
);

export default Section_Bcit;
