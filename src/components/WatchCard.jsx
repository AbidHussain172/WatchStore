import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { formatPrice } from "../data/watches.js";
import WatchImage from "./WatchImage.jsx";

export default function WatchCard({ watch }) {
  const { dispatch } = useCart();
  return (
    <div className="card">
      <Link to={`/watches/${watch.id}`}>
        <div className="card-img" style={{ background: watch.color }}>
          <WatchImage watch={watch} />
        </div>
      </Link>
      <div className="card-body">
        <span className="tag">{watch.brand} · {watch.movement}</span>
        <Link to={`/watches/${watch.id}`} className="card-title">
          {watch.name}
        </Link>
        <div className="rating">⭐ {watch.rating} · {watch.size}</div>
        <div className="card-footer">
          <strong>{formatPrice(watch.price)}</strong>
          <button
            className="btn small"
            onClick={() => dispatch({ type: "ADD", item: watch })}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
