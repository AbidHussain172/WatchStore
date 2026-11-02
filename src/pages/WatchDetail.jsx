import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { watches, formatPrice } from "../data/watches.js";
import { useCart } from "../context/CartContext.jsx";
import WatchCard from "../components/WatchCard.jsx";
import WatchImage from "../components/WatchImage.jsx";

export default function WatchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const watch = watches.find((w) => w.id === Number(id));

  if (!watch) {
    return (
      <div className="empty">
        <p>Watch not found.</p>
        <Link to="/watches" className="btn">Back to watches</Link>
      </div>
    );
  }

  const similar = watches.filter((w) => w.brand === watch.brand && w.id !== watch.id);

  const add = () => {
    dispatch({ type: "ADD", item: watch, qty });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const specs = [
    ["Brand", watch.brand],
    ["Movement", watch.movement],
    ["Case size", watch.size],
    ["Water resistance", watch.water],
    ["Strap / bracelet", watch.strap],
    ["Rating", `${watch.rating} / 5`],
  ];

  return (
    <>
      <div className="detail">
        <div className="detail-img" style={{ background: watch.color }}>
          <WatchImage watch={watch} />
        </div>
        <div className="detail-info">
          <span className="tag">{watch.brand} · {watch.movement}</span>
          <h1>{watch.name}</h1>
          <p className="price">{formatPrice(watch.price)}</p>
          <p>{watch.description}</p>

          <table className="spec-table">
            <tbody>
              {specs.map(([k, v]) => (
                <tr key={k}>
                  <th>{k}</th>
                  <td>{v}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="qty-row">
            <label>Quantity</label>
            <div className="qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          <div className="actions">
            <button className="btn" onClick={add}>{added ? "✓ Added!" : "Add to Cart"}</button>
            <button
              className="btn outline"
              onClick={() => {
                dispatch({ type: "ADD", item: watch, qty });
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
          <Link to="/watches" className="back">← Back to all watches</Link>
        </div>
      </div>

      {similar.length > 0 && (
        <section style={{ marginTop: 40 }}>
          <h2 className="section-title">More from {watch.brand}</h2>
          <div className="grid">
            {similar.map((w) => (
              <WatchCard key={w.id} watch={w} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
