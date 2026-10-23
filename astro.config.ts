import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import type { IncomingMessage, ServerResponse } from "node:http";

// The production domain supplies reproducible canonical URLs and sitemap output.
const site = process.env.SITE_URL?.trim() || "https://plazacajamarca.com";
const weatherEndpoint = "https://api.open-meteo.com/v1/forecast?latitude=-7.1569955&longitude=-78.5174615&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset&forecast_days=7&timezone=America%2FLima";

type ViteServerSubset = {
  middlewares: {
    use: (path: string, handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>) => void;
  };
};

function weatherProxy() {
  return {
    name: "cajamarca-weather-proxy",
    configureServer(server: ViteServerSubset) {
      server.middlewares.use("/api/weather", async (req, res) => {
        if (req.method !== "GET") { res.writeHead(405, { Allow: "GET" }); res.end("Method Not Allowed"); return; }
        try {
          const upstream = await fetch(weatherEndpoint, { headers: { Accept: "application/json" }, signal: AbortSignal.timeout(6000) });
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
  integrations: site ? [sitemap({filter: page => !page.includes("404")})] : [],
  vite: {
    plugins: [tailwindcss(), weatherProxy()],
    server: {
      allowedHosts: true,
    },
  },
});
