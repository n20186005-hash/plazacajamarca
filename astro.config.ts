import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import type { IncomingMessage, ServerResponse } from "node:http";

// The only place where a production domain is configured. Leave SITE_URL unset until a real domain is available.
const site = process.env.SITE_URL?.trim() || undefined;
const weatherEndpoint = "https://api.open-meteo.com/v1/forecast?latitude=-7.156461742848036&longitude=-78.5198635730413&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&forecast_days=3&timezone=America%2FLima";

type ViteServerSubset = {
  middlewares: {
    use: (path: string, handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>) => void;
  };
};

function manusStorageProxy() {
  return {
    name: "manus-storage-proxy",
    configureServer(server: ViteServerSubset) {
      server.middlewares.use("/manus-storage", async (req, res) => {
        const key = req.url?.replace(/^\//, "");
        if (!key) { res.writeHead(400, { "Content-Type": "text/plain" }); res.end("Missing storage key"); return; }
        const baseUrl = (process.env.BUILT_IN_FORGE_API_URL || "").replace(/\/+$/, "");
        const apiKey = process.env.BUILT_IN_FORGE_API_KEY;
        if (!baseUrl || !apiKey) { res.writeHead(500, { "Content-Type": "text/plain" }); res.end("Storage proxy not configured"); return; }
        try {
          const source = new URL("v1/storage/presign/get", `${baseUrl}/`);
          source.searchParams.set("path", key);
          const response = await fetch(source, { headers: { Authorization: `Bearer ${apiKey}` } });
          const payload = response.ok ? await response.json() as { url?: string } : {};
          if (!payload.url) { res.writeHead(502, { "Content-Type": "text/plain" }); res.end("Storage backend error"); return; }
          res.writeHead(307, { Location: payload.url, "Cache-Control": "no-store" });
          res.end();
        } catch { res.writeHead(502, { "Content-Type": "text/plain" }); res.end("Storage proxy error"); }
      });
    },
  };
}

function weatherProxy() {
  return {
    name: "cajamarca-weather-proxy",
    configureServer(server: ViteServerSubset) {
      server.middlewares.use("/api/weather", async (req, res) => {
        if (req.method !== "GET") { res.writeHead(405, { Allow: "GET" }); res.end("Method Not Allowed"); return; }
        try {
          const upstream = await fetch(weatherEndpoint, { headers: { Accept: "application/json" } });
          const body = await upstream.text();
          res.writeHead(upstream.ok ? 200 : 502, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": upstream.ok ? "no-store" : "no-store" });
          res.end(body);
        } catch { res.writeHead(502, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" }); res.end(JSON.stringify({ error: "Weather service unavailable" })); }
      });
    },
  };
}

export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss(), manusStorageProxy(), weatherProxy()],
    server: {
      allowedHosts: true,
    },
  },
});
