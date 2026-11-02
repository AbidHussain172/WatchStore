export const brands = ["Rolex", "Swiston", "Citizen", "Casio"];

export const brandInfo = {
  Rolex: { tagline: "Luxury icons crafted for a lifetime.", emoji: "👑", color: "#14532d" },
  Swiston: { tagline: "Elegant Swiss-style everyday timepieces.", emoji: "⌚", color: "#1e3a8a" },
  Citizen: { tagline: "Light-powered Eco-Drive technology.", emoji: "☀️", color: "#0f766e" },
  Casio: { tagline: "Tough, smart and affordable.", emoji: "⏱️", color: "#b45309" },
};

export const movements = ["All", "Automatic", "Quartz", "Digital", "Eco-Drive"];

// Prices are sample values in PKR for demonstration only.
const baseWatches = [
  { id: 1, brand: "Rolex", name: "Submariner", movement: "Automatic", price: 3450000, size: "41 mm", water: "300 m", strap: "Oystersteel bracelet", rating: 4.9, color: "#bbf7d0", description: "A legendary diver's watch with a rotating bezel, luminous markers and a robust automatic movement." },
  { id: 2, brand: "Rolex", name: "Datejust 36", movement: "Automatic", price: 2850000, size: "36 mm", water: "100 m", strap: "Jubilee bracelet", rating: 4.8, color: "#d9f99d", description: "The classic dress watch with a cyclops date window and timeless fluted bezel." },
  { id: 3, brand: "Rolex", name: "GMT-Master II", movement: "Automatic", price: 4200000, size: "40 mm", water: "100 m", strap: "Oyster bracelet", rating: 4.9, color: "#a7f3d0", description: "Built for travellers, tracking a second time zone with a bi-colour bezel." },

  { id: 4, brand: "Swiston", name: "Classic Automatic", movement: "Automatic", price: 145000, size: "40 mm", water: "50 m", strap: "Leather strap", rating: 4.5, color: "#bfdbfe", description: "A clean dress watch with an exhibition caseback showing the automatic movement." },
  { id: 5, brand: "Swiston", name: "Heritage Chrono", movement: "Quartz", price: 98000, size: "42 mm", water: "100 m", strap: "Steel bracelet", rating: 4.4, color: "#dbeafe", description: "Sporty chronograph with three sub-dials, sapphire-style glass and a sturdy steel case." },
  { id: 6, brand: "Swiston", name: "Lady Elegance", movement: "Quartz", price: 72000, size: "30 mm", water: "30 m", strap: "Rose-gold mesh", rating: 4.6, color: "#fbcfe8", description: "A slim, elegant ladies' watch with a mother-of-pearl dial and mesh bracelet." },

  { id: 7, brand: "Citizen", name: "Eco-Drive Promaster", movement: "Eco-Drive", price: 84000, size: "44 mm", water: "200 m", strap: "Polyurethane strap", rating: 4.6, color: "#99f6e4", description: "Solar-powered diver that never needs a battery change." },
  { id: 8, brand: "Citizen", name: "Tsuyosa Automatic", movement: "Automatic", price: 69000, size: "40 mm", water: "50 m", strap: "Steel bracelet", rating: 4.5, color: "#ccfbf1", description: "A colourful, retro-styled automatic with a see-through caseback." },
  { id: 9, brand: "Citizen", name: "Eco-Drive Chandler", movement: "Eco-Drive", price: 46000, size: "42 mm", water: "100 m", strap: "Leather strap", rating: 4.3, color: "#a5f3fc", description: "Casual field watch powered by any light source, with a clear day-date display." },

  { id: 10, brand: "Casio", name: "G-Shock GA-2100", movement: "Digital", price: 28000, size: "45 mm", water: "200 m", strap: "Resin strap", rating: 4.8, color: "#fde68a", description: "Slim, shock-resistant analog-digital watch with an octagonal bezel and LED light." },
  { id: 11, brand: "Casio", name: "Edifice Chronograph", movement: "Quartz", price: 36000, size: "44 mm", water: "100 m", strap: "Steel bracelet", rating: 4.5, color: "#fed7aa", description: "A racing-inspired chronograph with a bold dial and stainless steel build." },
  { id: 12, brand: "Casio", name: "Vintage A168", movement: "Digital", price: 9500, size: "38 mm", water: "Splash resistant", strap: "Steel mesh", rating: 4.7, color: "#fef3c7", description: "Retro digital classic with alarm, stopwatch and backlight at a budget price." },
];

// How each watch is drawn (used by the WatchImage component).
const looks = {
  1: { style: "analog", caseColor: "#c0c4cc", bezelColor: "#111827", dialColor: "#0b0f19", handColor: "#e5e7eb", accent: "#e5e7eb", strapType: "bracelet", strapColor: "#aeb4bf" },
  2: { style: "analog", caseColor: "#c9a227", bezelColor: "#d4b13a", dialColor: "#f3e5ab", handColor: "#3b2f0b", accent: "#b45309", strapType: "bracelet", strapColor: "#cdb04a" },
  3: { style: "analog", caseColor: "#c0c4cc", bezelColor: "#1d4ed8", dialColor: "#0b0f19", handColor: "#e5e7eb", accent: "#dc2626", strapType: "bracelet", strapColor: "#aeb4bf" },
  4: { style: "analog", caseColor: "#b8bcc6", bezelColor: "#cfd3da", dialColor: "#1e3a8a", handColor: "#f8fafc", accent: "#f59e0b", strapType: "leather", strapColor: "#7c4a21" },
  5: { style: "chrono", caseColor: "#b8bcc6", bezelColor: "#9aa0ab", dialColor: "#f8fafc", handColor: "#111827", accent: "#dc2626", strapType: "bracelet", strapColor: "#aeb4bf" },
  6: { style: "analog", scale: 0.85, caseColor: "#e8b4a0", bezelColor: "#f1c9b8", dialColor: "#fdf2f8", handColor: "#7c2d12", accent: "#be185d", strapType: "bracelet", strapColor: "#e8b4a0" },
  7: { style: "analog", caseColor: "#374151", bezelColor: "#111827", dialColor: "#111827", handColor: "#f9fafb", accent: "#f97316", strapType: "rubber", strapColor: "#1f2937" },
  8: { style: "analog", caseColor: "#c0c4cc", bezelColor: "#aeb4bf", dialColor: "#0d9488", handColor: "#f8fafc", accent: "#fbbf24", strapType: "bracelet", strapColor: "#aeb4bf" },
  9: { style: "analog", caseColor: "#b8bcc6", bezelColor: "#9aa0ab", dialColor: "#4d5d3a", handColor: "#f3f4f6", accent: "#f59e0b", strapType: "leather", strapColor: "#8b5a2b" },
  10: { style: "digital", caseColor: "#111827", screen: "#c8d4b0", text: "#1f2937", accent: "#f59e0b", strapType: "rubber", strapColor: "#111827" },
  11: { style: "chrono", caseColor: "#9aa3b2", bezelColor: "#1e3a8a", dialColor: "#1e3a8a", handColor: "#f8fafc", accent: "#ef4444", strapType: "bracelet", strapColor: "#9aa3b2" },
  12: { style: "digital", caseColor: "#c0c4cc", screen: "#c8d4b0", text: "#1f2937", accent: "#6b7280", strapType: "bracelet", strapColor: "#aeb4bf" },
};

export const watches = baseWatches.map((w) => ({ ...w, look: looks[w.id] }));

export function formatPrice(n) {
  return "PKR " + n.toLocaleString("en-PK");
}
