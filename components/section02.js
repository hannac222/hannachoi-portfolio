import Link from "next/link";

const Lemongrass = () => (
  <div className="wrapper">
    <div className="title">
      <h1>Lemongrass</h1>
      <p>A Pictional Business Website Project from BCIT TWD Program</p>
      <Link href="/lemongrass">
        <button className="btn">Show me more</button>
      </Link>
    </div>
    <div className="main-image">
      <Link href="/lemongrass">
        <a className="bcit-portfolio-image">
          <img src="/static/assets/lemongrass.jpg" alt="Toast" />
        </a>
      </Link>
    </div>
  </div>
);

export default Lemongrass;
