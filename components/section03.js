import Link from "next/link";

const Section03 = () => (
  <div className="wrapper">
    <div className="title">
      <h1>BCIT TWD Portfolio</h1>
      <p>Display projects from BCIT</p>
      <Link href="/bcit-portfolio">
        <button className="btn">Show me more</button>
      </Link>
    </div>
    <div className="main-image">
      <Link href="/bcit-portfolio">
        <a className="bcit-portfolio-image">
          <img src="/static/assets/workspace.jpg" alt="Work Space" />
        </a>
      </Link>
    </div>
  </div>
);

export default Section03;
