# Secret Games

A small download site for indie PC games, hosted on Cloudflare Workers at https://play.secretgames.workers.dev.

- Site files live in `public/`. Add or edit games in `public/games.js`.
- `src/worker.js` serves the site and streams game installers from `/download/<file>`.
- Deploy with `npx wrangler deploy` from this folder.
