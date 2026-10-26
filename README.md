# Career Maps Web

Career Maps marketing website, built with React, TypeScript, Vite, and Tailwind CSS.

## Local development

Use Node.js 22.12 or newer (Node.js 20.19+ is also compatible) and npm.

```sh
npm ci
npm run dev
```

The development server binds to localhost on port 8080. Do not expose the development server as a production service.

## Validation

```sh
npm run check
npm run test:e2e
npm audit
```

For the first browser-test run, install Chromium with `npx playwright install chromium`.

## Production

`npm run build` generates `dist`. `npm run preview` serves that build locally; it does not deploy it.

Firebase Hosting configuration is in `firebase.json`. Production metadata assumes `https://careermaps.co.in/`; confirm the domain before deploying. Security headers and cache rules take effect on Firebase only after deployment.

The repository includes the media used by the website. Unused original/backup media is retained locally but excluded from version control. The homepage uses an optimized copy of the overview video, static poster fallbacks, and viewport-aware playback. Some original video footage contains embedded third-party watermarks; replacing those requires an appropriately licensed source asset.

## Release ownership

Before launch, the business owner must approve testimonials, ratings, outcome metrics, contact details, media rights, and legal/privacy content. The demo action opens an email client; it is not a booking or lead-storage service. No account system or student database is implemented in this repository.

Use the npm lockfile for reproducible installs. The legacy Bun lockfile and local Firebase project mapping are excluded from version control. Set the Firebase project explicitly when deploying.
