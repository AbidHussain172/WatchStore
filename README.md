# TimeVault – Watch Shop Website (React.js)

A responsive online watch store featuring four brands: **Rolex, Swiston, Citizen and Casio** (3 watches each).

## Features
- Home page with brand cards and top-rated watches
- Watch listing with brand, movement type, search, price slider and sorting
- Watch detail page with full specifications and related watches
- Shopping cart (add, remove, change quantity, clear) saved in localStorage
- **Registration** with validation (name, email, Pakistani phone, strong password, confirm password, terms)
- **Login** with validation, show/hide password and redirect back after login
- Checkout is protected: you must be logged in, form is pre-filled and validated
- Order confirmation with order number
- Fully responsive with mobile menu

## Changing watch pictures
Every watch is drawn as an SVG illustration by default. To use real photos, put
`watch-1.jpg` ... `watch-12.jpg` in `public/images/` (see the README.txt in that
folder). They replace the drawings everywhere automatically.

## Tech Stack
React 18, React Router 6, Context API (useReducer), Vite, plain CSS

## Important note
Accounts are stored in the browser's localStorage for demonstration. A real
website would use a backend server and hashed passwords. Prices are sample values.

## Run locally
```bash
npm install
npm run dev
```

## Deploy on Vercel
1. Push the project to a GitHub repository.
2. On vercel.com, sign in with GitHub, click **Add New → Project**, import the repo and **Deploy**.

`vercel.json` makes sure page refreshes on routes like `/cart` work.
