# Local Guides Directory (LGD) — Web

Website for the [Local Guides Directory](https://lgd.khammami.tn) app — a directory for Google Local Guides to share their profiles and connect with fellow explorers.

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Astro](https://astro.build/) | 6 | Static site framework |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Styling |
| [Firebase](https://firebase.google.com/) | 12 | Analytics |
| [React](https://react.dev/) | 19 | Client island for analytics |

## Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

The site will be available at `http://localhost:4321`.

## Build & Preview

```bash
# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

## Project Structure

```
src/
├── components/     # Reusable Astro/React components
├── config/         # Site configuration (e.g. announcements)
├── layouts/        # Page layouts
├── pages/          # File-based routes
└── styles/         # Global CSS
public/             # Static assets (icons, images)
```

## License

See [LICENSE](LICENSE).
