import { Link } from "react-router-dom";
import { watches } from "../data/watches.js";
import WatchImage from "../components/WatchImage.jsx";

export default function NotFound() {
  return (
    <div className="empty">
      <div className="empty-art">
        <WatchImage watch={watches[4]} />
      </div>
      <h2>404 — This page ran out of time</h2>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}
