import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import WatchCard from "../components/WatchCard.jsx";
import { watches, brands, movements } from "../data/watches.js";

export default function Watches() {
  const [params, setParams] = useSearchParams();
  const brand = params.get("brand") || "All";
  const [movement, setMovement] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [maxPrice, setMaxPrice] = useState(5000000);

  const setBrand = (b) => {
    if (b === "All") setParams({});
    else setParams({ brand: b });
  };

  const list = useMemo(() => {
    let l = watches.filter(
      (w) =>
        (brand === "All" || w.brand === brand) &&
        (movement === "All" || w.movement === movement) &&
        w.price <= maxPrice &&
        `${w.brand} ${w.name}`.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "low") l = [...l].sort((a, b) => a.price - b.price);
    if (sort === "high") l = [...l].sort((a, b) => b.price - a.price);
    if (sort === "rating") l = [...l].sort((a, b) => b.rating - a.rating);
    return l;
  }, [brand, movement, search, sort, maxPrice]);

  return (
    <>
      <h2 className="section-title">All Watches</h2>

      <div className="chips">
        {["All", ...brands].map((b) => (
          <button key={b} className={`chip ${brand === b ? "active" : ""}`} onClick={() => setBrand(b)}>
            {b}
          </button>
        ))}
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search watches..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={movement} onChange={(e) => setMovement(e.target.value)}>
          {movements.map((m) => (
            <option key={m} value={m}>{m === "All" ? "All movements" : m}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Sort: Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      <div className="range">
        <label htmlFor="price">
          Max price: <strong>PKR {maxPrice.toLocaleString("en-PK")}</strong>
        </label>
        <input
          id="price"
          type="range"
          min="10000"
          max="5000000"
          step="10000"
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
        />
      </div>

      {list.length === 0 ? (
        <p className="empty">No watches match your filters.</p>
      ) : (
        <div className="grid">
          {list.map((w) => (
            <WatchCard key={w.id} watch={w} />
          ))}
        </div>
      )}
    </>
  );
}
