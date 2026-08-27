# Fuentes de investigación — Plaza de Armas de Cajamarca

## Datos que se emplearán en el sitio

| Tema | Dato de trabajo | Fuente / tratamiento editorial |
| --- | --- | --- |
| Nombre | Plaza de Armas de Cajamarca | Denominación provista por el usuario y coincidente con PromPerú. |
| Contexto histórico | Lugar asociado a la captura del inca Atahualpa por Francisco Pizarro. | PromPerú, ficha turística oficial. |
| Rasgo espacial | La plaza conserva una planta cuadrada y una pileta octogonal de piedra del siglo XVII. | PromPerú, ficha turística oficial. |
| Ubicación cartográfica | Cajamarca 06001, Perú; -7.156461742848036, -78.5198635730413. | Enlace y mapa incrustado proporcionados por el usuario. |
| Calificación | 4.6 sobre 5, con 29.263 valoraciones. | Dato de Google Maps proporcionado por el usuario; se identifica como una referencia de plataforma y no se reproducen reseñas. |
| Acceso y condiciones | Recurso de ingreso libre, citado como accesible las 24 horas. | Ficha oficial del Inventario Turístico de MINCETUR; el sitio añade la recomendación de comprobar condiciones locales antes de la visita. |
| Tipología y altitud | Manifestación cultural, lugar histórico, plaza; 2.722 m de altitud. | Ficha oficial del Inventario Turístico de MINCETUR. |
| Tamaño | Superficie neta de 12.139 m²; calles perimétricas: 9.234 m². | Ficha oficial del Inventario Turístico de MINCETUR. |
| Administración y entorno | Bien público administrado por la Municipalidad Provincial de Cajamarca; se registran servicios de alojamiento, alimentación y otros en la ciudad. | Ficha oficial del Inventario Turístico de MINCETUR. |

## Fotografía real seleccionada

| Uso propuesto | Archivo / autor | Licencia | Crédito visible |
| --- | --- | --- | --- |
| Imagen patrimonial nocturna de la plaza y su fuente | `Plaza de cajamarca.jpg` — Wasaberta | CC BY-SA 4.0 | “Foto: Wasaberta, CC BY-SA 4.0, vía Wikimedia Commons”. |
| Vistas documentales adicionales | Categoría “Plaza de Armas de Cajamarca” en Wikimedia Commons | Cada archivo mantiene autor y licencia propios | Antes de publicación, usar solo archivos cuya página de descripción indique autor y licencia. |
| Vista urbana diurna de la plaza | `20250712 110718 Cajamarca.jpg` — Josefito123 | CC BY-SA 4.0 | “Foto: Josefito123, CC BY-SA 4.0, vía Wikimedia Commons”. |

## Fuentes primarias para enlazar y citar

1. PromPerú, “Plaza de Armas Cajamarca”, Y tú qué planes: https://www.ytuqueplanes.com/destinos/cajamarca/ciudad-de-cajamarca/plaza-de-armas-cajamarca
2. Wikimedia Commons, “Plaza de cajamarca.jpg”: https://commons.wikimedia.org/wiki/File:Plaza_de_cajamarca.jpg
3. Google Maps, consulta enlazada por el usuario: https://www.google.com/maps/search/?api=1&query=Cajamarca%2006001%E7%A7%98%E9%B2%81
4. MINCETUR, Inventario Turístico, ficha 2432: http://consultasenlinea.mincetur.gob.pe/fichaInventario/index.aspx?cod_Ficha=2432
5. Wikimedia Commons, categoría “Plaza de Armas de Cajamarca”: https://commons.wikimedia.org/wiki/Category:Plaza_de_Armas_de_Cajamarca
6. Wikimedia Commons, “20250712 110718 Cajamarca.jpg”: https://commons.wikimedia.org/wiki/File:20250712_110718_Cajamarca.jpg
7. Open-Meteo, Weather Forecast API documentation: https://open-meteo.com/en/docs
8. Wikimedia Commons, “20250712 111343 Cajamarca.jpg”: https://commons.wikimedia.org/wiki/File:20250712_111343_Cajamarca.jpg

## Decisiones de contenido

No se atribuyen horarios, tarifas de estacionamiento, servicios sanitarios ni nombres de comercios cuando no existe una fuente pública verificable. Las secciones de utilidad describirán tipos de servicio y pedirán al visitante confirmar disponibilidad local, con el fin de mantener una guía neutral y no comercial.

## Datos para el módulo de tiempo y la galería

El módulo de tiempo consulta de forma directa y bajo demanda el endpoint público de Open-Meteo para las coordenadas de la plaza. Se limita a temperatura, sensación térmica, precipitación, código meteorológico, viento y hora local de Cajamarca; la documentación indica que las condiciones actuales se basan en datos de modelo con una frecuencia de 15 minutos. La respuesta de prueba devolvió correctamente estos campos para el punto de consulta.

La fotografía `20250712 111343 Cajamarca.jpg` muestra la pileta de la Plaza de Armas y fue realizada por Josefito123 el 12 de julio de 2025. La ficha de Wikimedia Commons señala licencia CC BY-SA 4.0. Crédito requerido: “Foto: Josefito123, CC BY-SA 4.0, vía Wikimedia Commons”.

La verificación de navegador confirmó que el módulo muestra correctamente las condiciones devueltas por Open-Meteo y que el botón de actualización está disponible. También se restauró el proxy de desarrollo para rutas `/manus-storage/`, de modo que las fotografías con licencia se muestran en la vista previa sin exponer credenciales al navegador.

La galería fue comprobada con las tres fotografías visibles. El diálogo de ampliación muestra la imagen, una breve explicación, el contador y el crédito enlazado; permite recorrer las imágenes con botones o teclas de flecha y se cierra con Escape. La ruta en inglés también devolvió datos meteorológicos y mantiene textos de tiempo y galería completamente en inglés.

Para ampliar la narración arquitectónica se verificaron dos fotografías de Wikimedia Commons. `Catedral de Cajamarca.jpg` muestra la fachada de la Catedral de Cajamarca; la fuente identifica al autor como **morrissey** y especifica licencia **CC BY 2.0**. `Iglesia Santa Catalina, Cajamarca.jpg` muestra la fachada de Santa Catalina / Catedral de Cajamarca, fue tomada por **tehzeta** el 8 de octubre de 2011 y está bajo **CC BY-SA 2.0**. Ambas fichas permiten reutilización con atribución y enlace a la licencia.

La consulta de Open-Meteo para las coordenadas de la plaza confirmó los campos diarios `weather_code`, temperaturas máxima y mínima, probabilidad máxima de precipitación, amanecer y atardecer, con zona horaria `America/Lima` y un horizonte de tres días. El navegador de previsualización bloqueó posteriormente la conexión directa al proveedor, por lo que la implementación se ajustó a un endpoint propio `/api/weather`: en el despliegue de Cloudflare, el Worker lo consulta y almacena en caché durante 15 minutos; el proxy local refleja la misma ruta para desarrollo. La interfaz conserva un estado de indisponibilidad y un botón de actualización cuando el proveedor no responde.

La comprobación directa de `/manus-storage/cajamarca-santa-catalina-tehzeta_52132efa.jpg` devolvió la imagen de 4.751 × 3.277 píxeles correctamente. La ausencia temporal de las dos fotografías nuevas en la captura de página completa se atribuye a la carga diferida durante la captura, no a una ruta de activo inválida.
