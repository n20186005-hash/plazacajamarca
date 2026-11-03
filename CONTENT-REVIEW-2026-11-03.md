# Cajamarca content review — 2026-11-03

## Scope

Local content corrections following suggestions supplied by IPERÚ Cajamarca. Attribution records the origin of those suggestions, not official certification or approval. No private email address or original correspondence is published. The independent-guide identity remains unchanged.

- December–February: replace occasional afternoon-shower wording with frequent-rain guidance, attributed to IPERÚ Cajamarca. Align the seasonal table and the two existing weather/season topic pages.
- Apply the four requested full attraction names in the nearby list and relevant existing content. Preserve established slugs and language routes.
- Improve the existing `/lugares/conjunto-monumental-belen/` topic rather than create a duplicate.
- Add `/lugares/museo-puga/` with an English counterpart. Official sources identify this as Casa Museo Nicolás Puga, not the museum inside Belén.
- Connect both museums from the homepage, topic index and historic itinerary. The three-hour itinerary explicitly requires extra time or removing a stop if adding both interiors.
- Preserve all 54 existing topic routes; total is now 55 topics (110 localized topic pages). No new photos or new photo permissions are claimed.

## Sources and verification limits

Sources consulted for this edit:

1. IPERÚ Cajamarca: user-supplied editorial suggestions on rain, names and the two additional attractions. The communication date was not independently checked, so no receipt date is asserted on the site.
2. MINCETUR record 638, Conjunto Monumental Belén: https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=638
3. Ministry of Culture museum listing: https://museos.cultura.pe/node/309
4. Ministry of Culture, 2023-12-23 online-ticket announcement: https://www.gob.pe/institucion/cultura/noticias/886433-cuarto-del-rescate-y-conjunto-monumental-belen-en-cajamarca-se-suman-a-la-plataforma-virtual-tuboleto-cultura-pe
5. MINCETUR record 13963, Casa Museo Nicolas Puga: https://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=13963
6. Ministry of Culture, 2023 museum guide, page 92: https://museos.cultura.pe/sites/default/files/publicaciones/pdf/Gu%C3%ADa%20de%20Museos%202023%20%28preliminar%29_0.pdf

Hours/fees are deliberately not promised as current: the Belén inventory lists Tuesday–Sunday 09:00–18:00 and adult S/8, while the Culture museum page lists 09:00–13:00 and 14:30–18:00, adult S/5; the coverage may differ. Puga's MINCETUR record (dated June 15, 2026) lists 09:30–13:00 and adult S/20 / foreign visitor S/25, while the 2023 Culture guide says by appointment, 09:00–12:00 and 15:00–18:00, foreign visitor S/20 / Peruvian adult S/15. Readers are directed to confirm current access and category instead of treating mismatching records as one live tariff.

No GSC export or authenticated query-level report was provided in this task. Content follows the user's needs-led SEO rules, not invented ranking or search-volume data. No current opening, appointment, price, step-free access or route measurement was field-verified. Inventory walking time for Puga is attributed and not guaranteed. Linked sources do not grant image reuse permission.

## Local validation

- Fixed project versions used for checks: Node 22.13.0, pnpm 10.15.1. No lockfile or dependency changes.
- `pnpm check`: 0 errors, 0 warnings, 0 hints.
- `pnpm build`: successful, 120 HTML pages.
- `node --experimental-strip-types --test tests/*.test.mjs`: 11 passed, 0 failed. The old test froze a 29,362 review count, whereas the existing homepage already had 29,376. The test now checks the Maps rating format and dated attribution, retaining the schema and safety assertions, instead of tying acceptance to a mutable count. A clean original checkout reproduced the stale assertion failure before the test correction.
- README test command corrected to include `--experimental-strip-types`, required by the pinned Node version for existing TypeScript imports.
- Two new content tests cover attribution, exact names, museum links, canonical routes, sitemap presence and schema parsing.
- Additional generated-output sweep: all 120 HTML pages have one h1, parseable JSON-LD and existing same-origin link targets.
- `wrangler deploy --dry-run`: passed with a writable local config/cache directory; no upload or deployment performed.
- Browser visual QA was attempted but Chromium could not start because the execution environment denied socket creation. No visual acceptance is claimed.
- Publication authorized after local acceptance. Existing Cloudflare Workers Builds integration is the production deployment path; its status must be checked for the final commit and live content verified after publication.
