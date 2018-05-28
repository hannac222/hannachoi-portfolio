import Link from "next/link";
import Footer from "../components/footer";

const Section_Audra = () => (
  <div className="wrapper">
    <div className="title">
      <h1>Audra Rickkets</h1>
      <h1>Portfolio</h1>
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

export default Section_Audra;
