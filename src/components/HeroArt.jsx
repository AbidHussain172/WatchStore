import { watches } from "../data/watches.js";
import WatchImage from "./WatchImage.jsx";

// Three overlapping watches used in the home page banner.
export default function HeroArt() {
  const [left, center, right] = [watches[0], watches[3], watches[9]];
  return (
    <div className="hero-art" aria-hidden="true">
      <WatchImage watch={left} className="hero-w side left" />
      <WatchImage watch={center} className="hero-w center" />
      <WatchImage watch={right} className="hero-w side right" />
    </div>
  );
}
