# Guía de la Plaza de Armas de Cajamarca — Paquete completo

Este paquete contiene una copia **autosuficiente para desarrollo y despliegue** del sitio de la Plaza de Armas de Cajamarca. Incluye el código fuente Astro, los archivos de producción generados, la configuración de Cloudflare Workers, las fotografías y recursos gráficos utilizados, los favicons, la investigación de fuentes, el registro de decisiones de diseño y una lista de archivos de entrega.

## Contenido de la entrega

| Directorio o archivo | Finalidad |
| --- | --- |
| `src/` | Páginas, componentes bilingües, estilos y Worker de pronóstico del tiempo. |
| `public/` | Favicons y copia local de **todas** las fotografías y recursos gráficos empleados; se copian a la salida. |
| `dist/` | Versión estática ya construida, con rutas español/inglés y referencias de imagen locales. |
| `astro.config.ts`, `wrangler.jsonc` | Configuración de Astro y Cloudflare Workers. |
| `package.json`, `pnpm-lock.yaml`, `.node-version` | Dependencias bloqueadas y versión de Node. |
| `research-sources.md` | Fuentes, créditos y licencias de las fotografías. |
| `ideas.md`, `todo.md` | Decisiones visuales y verificación de funciones. |
| `FILE-MANIFEST.txt` | Inventario de archivos generado al crear el paquete. |

## Desarrollo y compilación

1. Use Node.js 20 (la versión objetivo se encuentra en `.node-version`).
2. Ejecute `corepack enable` si es necesario y luego `pnpm install --frozen-lockfile`.
3. Inicie la vista local con `pnpm dev`.
4. Genere la salida estática con `pnpm build`.
5. Ejecute `pnpm deploy` para desplegar tanto los activos estáticos como el Worker en Cloudflare.

## Tiempo y privacidad

La ruta `/api/weather` es atendida por `src/worker.ts`. El Worker consulta el pronóstico público de Open-Meteo para las coordenadas de la plaza y conserva una respuesta en caché de borde durante 15 minutos. No recopila ni almacena datos personales de visitantes. Si el proveedor no responde, el sitio muestra un estado de indisponibilidad y permite reintentar.

## Imágenes y atribuciones

Todas las imágenes empleadas se incluyen en `public/images/`. Las fotografías de Wikimedia Commons conservan sus créditos y enlaces de licencia en el sitio y en `research-sources.md`. Las fotografías de la Catedral de Cajamarca y de Santa Catalina son, respectivamente, de **morrissey** (CC BY 2.0) y **tehzeta** (CC BY-SA 2.0). Antes de redistribuir o modificar las imágenes, mantenga las atribuciones y cumpla los términos de las licencias correspondientes.

> `node_modules/` no se incluye deliberadamente: no es código del sitio y se restaura de forma reproducible con el archivo bloqueado `pnpm-lock.yaml`.
