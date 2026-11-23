// Secret Games: serves the static site, and streams game downloads from /download/<file>
// so visitors only ever see this site's own address.

const RELEASES = "https://github.com/owenswlee/game-vault/releases/latest/download/";
const FILES = new Set(["UltimateShooterSetup.exe", "UltimateShooter-win64.zip"]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const m = url.pathname.match(/^\/download\/([\w.-]+)$/);
    if (m) {
      const file = m[1];
      if (!FILES.has(file)) return new Response("Not found", { status: 404 });
      if (request.method !== "GET" && request.method !== "HEAD") return new Response("Method not allowed", { status: 405 });
      const upstream = await fetch(RELEASES + file, { method: request.method, redirect: "follow", cf: { cacheTtl: 300 } });
      if (!upstream.ok) return new Response("Download is temporarily unavailable. Try again in a minute.", { status: 502 });
      const headers = new Headers();
      headers.set("Content-Type", "application/octet-stream");
      headers.set("Content-Disposition", `attachment; filename="${file}"`);
      const len = upstream.headers.get("Content-Length");
      if (len) headers.set("Content-Length", len);
      headers.set("Cache-Control", "no-store");
      return new Response(upstream.body, { status: 200, headers });
    }
    return env.ASSETS.fetch(request);
  },
};
