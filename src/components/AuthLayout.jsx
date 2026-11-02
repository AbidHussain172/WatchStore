import { watches } from "../data/watches.js";
import WatchImage from "./WatchImage.jsx";

// Wraps the login / register forms with a picture panel on the side.
export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <aside className="auth-art" aria-hidden="true">
        <div className="auth-watches">
          <WatchImage watch={watches[1]} className="aw a1" />
          <WatchImage watch={watches[6]} className="aw a2" />
        </div>
        <h3>Time well spent starts here.</h3>
        <p>Create an account to order your next watch in a few clicks.</p>
      </aside>
      {children}
    </div>
  );
}
