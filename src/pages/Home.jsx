import { Link } from "react-router-dom";
import WatchCard from "../components/WatchCard.jsx";
import WatchImage from "../components/WatchImage.jsx";
import HeroArt from "../components/HeroArt.jsx";
import { brands, brandInfo, watches } from "../data/watches.js";

export default function Home() {
  const featured = [...watches].sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <>
      <section className="hero">
        <div>
          <span className="pill">Your trusted watch boutique</span>
          <h1>Time well spent starts here.</h1>
          <p>
            Explore watches from Rolex, Swiston, Citizen and Casio. From
            everyday digital to luxury automatics, find the one that fits you.
          </p>
          <div className="hero-actions">
            <Link to="/watches" className="btn">Shop Watches</Link>
            <Link to="/register" className="btn ghost">Create Account</Link>
          </div>
        </div>
        <HeroArt />
      </section>

      <section>
        <h2 className="section-title">Shop by Brand</h2>
        <div className="brand-grid">
          {brands.map((b) => (
            <Link
              key={b}
              to={`/watches?brand=${b}`}
              className="brand-card"
              style={{ borderTopColor: brandInfo[b].color }}
            >
              <div className="brand-img" style={{ background: watches.find((w) => w.brand === b).color }}>
                <WatchImage watch={watches.find((w) => w.brand === b)} />
              </div>
              <h3>{b}</h3>
              <p>{brandInfo[b].tagline}</p>
              <small>{watches.filter((w) => w.brand === b).length} watches</small>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title">Top Rated</h2>
        <div className="grid">
          {featured.map((w) => (
            <WatchCard key={w.id} watch={w} />
          ))}
        </div>
      </section>

      <section className="features">
        <div><span>🛡️</span><h4>2-Year Warranty</h4><p>On every watch we sell</p></div>
        <div><span>🚚</span><h4>Free Delivery</h4><p>On orders over PKR 50,000</p></div>
        <div><span>🔧</span><h4>Free Servicing</h4><p>Battery and strap changes</p></div>
      </section>
    </>
  );
}
