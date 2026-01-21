# Florist Store — Fetch Assignment (React + Vite)

A small storefront-style landing page that demonstrates fetching local JSON data, a responsive layout, and a hero slider. Built with React, Vite, Tailwind CSS v4 (via the official Vite plugin), and Swiper.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS 4 (`@tailwindcss/vite`)
- Swiper 12 (autoplay hero slider)
- ESLint (React + Hooks rules)

## Features

- Responsive header with hamburger menu on mobile.
- Hero image slider (autoplay) populated from `public/data/banners.json`.
- Category cards populated from `public/data/categories.json`.
- Shop section with an image and store details (address and opening hours).

## Project Structure

```
fetch_assignment/
├─ public/
│  ├─ data/
│  │  ├─ banners.json          # Slider items
│  │  └─ categories.json       # Category cards
│  └─ img/                     # (Optional) Static images
├─ src/
│  ├─ components/
│  │  ├─ Header.jsx            # Responsive navigation header
│  │  ├─ Cards/Cards.jsx       # Fetches and renders category cards
│  │  ├─ Sliders/Slider.jsx    # Fetches banners + Swiper autoplay slider
│  │  └─ Sliders/SliderContext.jsx
│  │  └─ Shop/ShopContext.jsx  # Shop address & hours
│  │     └─ Shop/Shops.jsx     # Image + context layout
│  ├─ layout/RootLayout.jsx    # App shell with header + main
│  ├─ pages/Homepage.jsx       # Composes Slider, Cards, Shops
│  ├─ App.jsx                  # Renders Homepage
│  ├─ main.jsx                 # React root
│  └─ index.css                # Tailwind CSS entry
├─ index.html
├─ vite.config.js
├─ eslint.config.js
└─ package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended 20+)
- npm (or any compatible package manager)

### Install

```bash
npm install
```

### Run (dev server)

```bash
npm run dev
```

Vite will print a local URL (e.g., http://localhost:5173). Open it in your browser.

### Build (production)

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Data Sources

This project reads JSON from the `public/data` folder at runtime (served by Vite):

- `public/data/banners.json` → used by `src/components/Sliders/Slider.jsx`
  - Expected shape (example):
    ```json
    [
      {
        "id": 1,
        "image": "/img/hero-1.jpg",
        "title": "Fresh Seasonal Blooms",
        "subtitle": "Thoughtfully arranged for every occasion"
      }
    ]
    ```

- `public/data/categories.json` → used by `src/components/Cards/Cards.jsx`
  - Expected shape (example):
    ```json
    [{ "id": 1, "title": "Roses", "description": "Classic reds and pastels" }]
    ```

Notes:

- Because these files live in `public/`, they are served at `/data/*.json`. The components fetch them using relative paths like `data/banners.json`.
- For local images, place files under `public/img` and reference them by `"/img/your-file.jpg"` or relative paths from JSON.

## Key Components

- `Header.jsx`: Responsive navigation with a hamburger toggle for mobile.
- `Sliders/Slider.jsx`: Swiper slider with `Autoplay`; fetches banner slides from JSON.
  - Tweak autoplay delay via the `autoplay: { delay: 5000 }` option.
- `Cards/Cards.jsx`: Fetches and renders category cards from local JSON.
- `Shop/Shops.jsx` + `Shop/ShopContext.jsx`: Two-column section with a hero image and shop details.
- `layout/RootLayout.jsx`: App shell wrapping the page with the header.

## Scripts

Defined in `package.json`:

- `dev`: start the Vite dev server
- `build`: production build
- `preview`: serve the production build locally
- `lint`: run ESLint on the project

## Tailwind CSS

Tailwind v4 is enabled via the official Vite plugin (`@tailwindcss/vite`). The Tailwind entry is imported in `src/index.css`.

## Deployment

Run `npm run build` to generate the `dist/` directory. Serve the files with any static server. If deploying under a subpath (e.g., GitHub Pages), set the correct `base` in `vite.config.js`.

## Troubleshooting

- JSON 404s: Ensure files are under `public/data` and fetch paths match (e.g., `data/categories.json`).
- Slider not advancing: Confirm Swiper CSS is imported and `Autoplay` module is included.
- Styling not applied: Verify Tailwind is loading via `src/index.css` and that classes exist in your markup.

## License

No license specified. Add one if you plan to share or publish.

## Attribution

Scaffolded with Vite. Slider powered by Swiper.
