import Link from "next/link";

const Lemongrass = () => (
  <div className="wrapper">
    <div className="title">
      <h1>Lemongrass</h1>
      <p className="description">A Fictional Business Website Project</p>
      <Link href="/lemongrass">
        <button className="btn">Show me more</button>
      </Link>
    </div>
    <Link href="/lemongrass">
      <a className="featured-image lemongrass-image" />
    </Link>
  </div>
);

export default Lemongrass;
