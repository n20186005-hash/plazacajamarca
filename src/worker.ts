// Archivo de Piedra Viva — a narrowly scoped, cacheable weather relay keeps public forecast data reliable without collecting visitor data.
type AssetBinding = { fetch(request: Request): Promise<Response> };
type Env = { ASSETS: AssetBinding };
type EdgeCache = { match(request: Request): Promise<Response | undefined>; put(request: Request, response: Response): Promise<void> };

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?latitude=-7.156461742848036&longitude=-78.5198635730413&current=temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset&forecast_days=3&timezone=America%2FLima";

async function weatherResponse(request: Request): Promise<Response> {
  const cacheKey = new Request(new URL("/api/weather", request.url).toString());
  const cache = (caches as unknown as { default: EdgeCache }).default;
  const cached = await cache.match(cacheKey);
  if (cached) return cached;
  try {
    const upstream = await fetch(WEATHER_URL, { headers: { Accept: "application/json" } });
    if (!upstream.ok) return new Response(JSON.stringify({ error: "Weather service unavailable" }), { status: 502, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
    const response = new Response(upstream.body, { headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "public, max-age=300, s-maxage=900, stale-while-revalidate=900", "Vary": "Accept" } });
    await cache.put(cacheKey, response.clone());
    return response;
  } catch {
    return new Response(JSON.stringify({ error: "Weather service unavailable" }), { status: 502, headers: { "Content-Type": "application/json", "Cache-Control": "no-store" } });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (url.pathname === "/api/weather") {
      if (request.method !== "GET") return new Response("Method Not Allowed", { status: 405, headers: { Allow: "GET" } });
      return weatherResponse(request);
    }
    return env.ASSETS.fetch(request);
  },
};
