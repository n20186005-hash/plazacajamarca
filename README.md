# Plaza de Armas de Cajamarca guide

Independent Spanish and English visitor guide at https://plazacajamarca.com/.

## Architecture and checks

Astro 7 generates static pages. The existing native `src/worker.ts` serves assets and `/api/weather`. Wrangler’s production project is `plazacajamarca`; all requests enter the Worker so HTTPS redirects also cover static assets. Known page aliases preserve queries; unknown and explicit error routes return localized nonempty 404 pages. Spanish’s canonical error asset is `/404`, avoiding the binding’s `/404.html` redirect.

The project pins Node 22.13.0 and pnpm 10.15.1. Run `pnpm install --frozen-lockfile`, `pnpm check`, `pnpm build`, `node --test tests/*.test.mjs`, and `WRANGLER_SEND_METRICS=false pnpm exec wrangler deploy --dry-run`. Deployments are separate from these local checks.

Existing routes are `/`, `/en/`, and privacy, terms and cookies pages under each locale. Every page has topic-matching language alternates and x-default, absolute canonical metadata, and working same-origin assets. Gallery, offline support, existing Analytics banner/settings and weather retry remain available.

The fixed-place weather endpoint validates the existing Open-Meteo payload, bounds upstream requests, caches only valid successful responses, and returns unavailable errors with no-store. HEAD responses have no body. The browser validates before rendering, uses the proper local calendar day, and receives its localized labels explicitly. Dynamically inserted weather elements use component-prefixed global styles. Weather is a model estimate, not an observation at the fountain or an official warning.

The existing Analytics preference JSON contract is retained. Withdrawal disables runtime measurement before storage, verifies persistence, and reports failures without promising a saved preference or future-navigation effects. Google Fonts, Maps, weather and hosting resources are disclosed separately.

## Visitor sources and visuals

[PromPerú](https://www.ytuqueplanes.com/destinos/cajamarca/ciudad-de-cajamarca/plaza-de-armas-cajamarca) and [MINCETUR inventory 2432](https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=2432) support the central square, octagonal stone fountain and historical context. Dated Maps ratings are attributed, without an independent aggregate rating. General free/24-hour public-square listings do not establish church, museum, event, parking or other service conditions. Baños del Inca is a separate journey from the immediate walking circuit.

The five existing photographs are retained with individual source and licence links visible in the gallery credits. See [VISUAL-CREDITS.md](VISUAL-CREDITS.md). Code licensing does not supersede the photographs’ own licences.
