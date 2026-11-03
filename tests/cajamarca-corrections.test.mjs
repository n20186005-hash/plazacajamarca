import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
const read = route => fs.readFileSync(`dist/${route}index.html`, 'utf8');
test('IPERÚ attribution, corrected names and museum links appear in both homepages', () => {
 for (const locale of ['', 'en/']) {
  const html=read(locale);
  for (const name of ['IPERÚ Cajamarca', 'Iglesia Catedral de Cajamarca', 'Iglesia San Antonio De Padua - San Francisco', 'Mirador del Cerro Santa Apolonia', 'Complejo Turístico Baños del Inca']) assert.ok(html.includes(name), `${locale}: ${name}`);
  for(const slug of ['conjunto-monumental-belen','museo-puga']) assert.ok(html.includes(`href="/${locale}lugares/${slug}/"`));
  assert.ok(!html.includes('some afternoon rain'));
  assert.ok(!html.includes('sol y algunas tardes lluvias'));
 }
});
test('both museum guides have matching canonicals, visible sources, local links and schema', () => {
 const sitemap=fs.readFileSync('dist/sitemap-0.xml','utf8');
 for(const locale of ['', 'en/']) for(const slug of ['conjunto-monumental-belen','museo-puga']) {
  const route=`${locale}lugares/${slug}/`,html=read(route);
  assert.equal((html.match(/<h1\b/g)||[]).length,1);
  assert.ok(html.includes(`rel="canonical" href="https://plazacajamarca.com/${route}"`));
  assert.ok(sitemap.includes(`https://plazacajamarca.com/${route}`));
  assert.ok(html.includes('IPERÚ Cajamarca'));
  assert.ok(html.includes('consultasenlinea.mincetur.gob.pe'));
  assert.ok(!html.includes('iperucajamarca@'));
  for(const [,json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) JSON.parse(json);
  for(const [,url] of html.matchAll(/href="(\/[^"?#]*)(?:[?#][^"]*)?"/g)) assert.ok(fs.existsSync('dist'+url)||fs.existsSync('dist'+url+'index.html'),url);
 }
});
