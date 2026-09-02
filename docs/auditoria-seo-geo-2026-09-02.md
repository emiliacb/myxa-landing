---
title: Auditoría SEO y GEO
site: www.myxa.com.ar
date: 2 de septiembre de 2026
version: 1.0
---

## 1. Resumen ejecutivo

**Diagnóstico.** El sitio de MYXA tiene una base técnica correcta (contenido renderizado en servidor, HTTPS, redirecciones canónicas, fuente autoalojada) pero es casi invisible para buscadores y motores generativos: Google indexa únicamente la home, el sitio se declara en inglés (`lang="en"`) y expone rutas duplicadas `/en/*`, no hay `robots.txt`, el `sitemap.xml` apunta a URLs `http` e imágenes inexistentes, los títulos no contienen la keyword de negocio, la página de producto descarga 18 MB de imágenes sin usar, la analítica no registra nada desde que se desplegó y MYXA no aparece en ninguna de las respuestas generativas de referencia del sector, donde sí aparecen Bairestron, Zensitec o WDM Pumps.

La buena noticia: aun así, la home ya aparece en la posición 4 de Google para "fabricante tableros contra incendio argentina". El nicho de tableros de comando para bombas contra incendio no tiene un líder orgánico en Argentina, y la mayoría de los problemas detectados se corrigen en pocas horas de desarrollo.

### Puntaje por área

Puntaje de auditoría sobre 100 según criterio propio (no es un puntaje de Lighthouse); pondera severidad y cantidad de hallazgos de cada área.

| Área | Puntaje | Peso | Estado |
|---|---|---|---|
| SEO técnico (rastreo, indexación, duplicados) | 40 | 20 % | Crítico |
| Contenido y on-page (títulos, descriptions, encabezados, profundidad) | 40 | 20 % | Crítico |
| Performance | 35 | 15 % | Crítico |
| GEO (visibilidad en motores generativos) | 25 | 15 % | Crítico |
| Datos estructurados | 20 | 10 % | Alto |
| SEO local | 20 | 10 % | Alto |
| Open Graph y redes | 30 | 5 % | Alto |
| Medición y analítica | 5 | 5 % | Crítico |
| **Global ponderado** | **31 / 100** | | |

### Hallazgos principales

1. **[CRÍTICO]** Solo la home está indexada en Google; las cuatro subpáginas no aparecen como resultados propios.
2. **[CRÍTICO]** `<html lang="en">` en un sitio en español, con duplicados `/en/*` en código 200 y sin canonical en las subpáginas.
3. **[CRÍTICO]** `robots.txt` inexistente (404) y `sitemap.xml` con URLs `http://`, dos imágenes que devuelven 404 y fechas fijas.
4. **[CRÍTICO]** Títulos "MYXA - X" sin keyword ni ubicación; la marca compite con homónimos (una banda, aplicaciones, una planta).
5. **[CRÍTICO]** `/tableros` precarga 18,2 MB de imágenes originales que nunca se muestran; la imagen del hero de la home se carga en diferido.
6. **[CRÍTICO]** PostHog no carga: el snippet está dentro de `<Head>` con `next/script` y nunca llega al navegador. Sin datos de visitas ni conversiones.
7. **[ALTO]** Datos estructurados mínimos (un `Organization` incompleto con URL `http`), sin `LocalBusiness`, `Product`, `Service`, `FAQPage` ni `BreadcrumbList`.
8. **[ALTO]** Sin Open Graph en las subpáginas y sin `og:title` en la home: compartir por WhatsApp o LinkedIn no muestra vista previa útil.
9. **[ALTO]** Textos alternativos de relleno ("Hero", "Picture of the author"), 30 `<h2>` decorativos en la home, contenido escaso en presurización y contacto, sin página "Nosotros", FAQ ni blog.
10. **[ALTO]** Ausente en respuestas generativas; sin `llms.txt`, sin definición clara de la entidad, sin ficha de Google Business ni presencia en directorios; LinkedIn con 5 seguidores.

### Qué hacer primero

Las diez acciones P0 del plan (sección 13) requieren en conjunto menos de un día de desarrollo y resuelven indexación, idioma, sitemap, analítica, títulos, Open Graph, imagen LCP y alta en Search Console y Bing. Las semanas siguientes se destinan a datos estructurados, imágenes, FAQ, página "Nosotros" y perfil de Google Business. El objetivo a tres meses es que las cinco páginas estén indexadas, que `/tableros` cargue en menos de 2,5 s en móvil y que MYXA aparezca en al menos una de las tres consultas generativas de referencia.

## 2. Alcance y metodología

**Sitio auditado:** https://www.myxa.com.ar (MYXA, fabricante de tableros de control para bombas de sistemas contra incendio; José C. Paz, Buenos Aires).

**Páginas revisadas:** `/`, `/tableros`, `/presurizacion`, `/servicios`, `/contacto`, más `robots.txt`, `sitemap.xml`, las rutas `/api/*` y las variantes `/en/*`.

**Fuentes de evidencia:**

- HTML servido en producción (Vercel, región `iad1`), descargado el 2 de septiembre de 2026.
- Código fuente del repositorio `myxa-landing` (rama `main`, commit `9dbb0ab`): Next.js 13 (pages router), Tailwind, framer-motion.
- Mediciones de laboratorio con Playwright + Chromium 141 headless y Lighthouse 12 (perfil móvil con red 4G lenta y perfil escritorio).
- Búsquedas en Google/Bing para indexación, homónimos de marca, keywords y competencia; lectura del HTML de seis competidores argentinos.

**Limitaciones:** no hubo acceso a Google Search Console, Bing Webmaster Tools ni a la analítica del sitio; no se conectó ninguna API de volúmenes de búsqueda, por lo que las keywords se clasifican por intención y competencia observada en la SERP. Las métricas de performance son de laboratorio (no datos de campo de usuarios reales).

**Escalas usadas:** severidad **Crítico / Alto / Medio / Bajo**; esfuerzo **Bajo** (menos de 2 horas), **Medio** (medio día a 2 días), **Alto** (más de 2 días).

## 3. Inventario del sitio

| URL | Título (caracteres) | Meta description (caracteres) | H1 | Palabras | Canonical | JSON-LD | Open Graph |
|---|---|---|---|---|---|---|---|
| `/` | MYXA - Sistemas contra incendio (31) | 213 | Tableros y equipos de presurización para Sistemas Contra Incendio | 266 | Sí (sin barra final) | Organization (incompleto) | Parcial: falta `og:title` |
| `/tableros` | MYXA - Tableros de Control (26) | 137 | Tableros de Control | 318 | No | No | No |
| `/presurizacion` | MYXA - Equipos de Presurización (31) | 91 | Equipos de Presurización | 136 | No | No | No |
| `/servicios` | MYXA - Servicios (16) | 119 | Servicios | 290 | No | No | No |
| `/contacto` | MYXA - Contacto (15) | 73 | Contacto | 96 | No | No | No |

Observaciones generales:

- Sitio de cinco URLs, sin blog, sin páginas de producto individuales y sin página institucional real (el enlace "Nosotros" apunta al ancla del hero de la home).
- Todo el texto se entrega renderizado en el servidor: los rastreadores lo leen sin ejecutar JavaScript. Es la mayor fortaleza técnica del sitio.
- Solo la home tiene canonical, datos estructurados y etiquetas Open Graph. Las cuatro subpáginas están desnudas.
- El conteo de palabras incluye navegación y pie de página; el contenido útil real de `/presurizacion` y `/contacto` es de unas 90 y 50 palabras.

## 4. SEO técnico

### 4.1 Rastreo e indexación

**[CRÍTICO] No existe `robots.txt`.** La URL devuelve 404 con la página de error HTML de Next.js. Consecuencias: el sitemap no está declarado, no hay política explícita para rastreadores de IA y no se excluye `/api/`. Un 404 equivale a "todo permitido", pero sin control ni señal de mantenimiento.

**[CRÍTICO] `sitemap.xml` defectuoso.** El archivo existe pero contiene cuatro errores:

1. Las cinco URLs usan `http://` y el sitio es `https://` con redirección 308: cada URL del sitemap redirige, algo que Google tolera pero desaconseja.
2. Referencia dos imágenes que no existen: `/tablero-1.png` y `/tablero-2.jpg` devuelven 404 (los archivos reales se llaman `tableros_1.png`, `tableros_2.png`, etc.).
3. `lastmod` fijo en `2025-07-10` para todas las URLs, aunque el sitio recibió cambios después; `priority` solo en `/tableros`.
4. No está referenciado desde `robots.txt`.

Resultado observable: la búsqueda `site:myxa.com.ar` en Google muestra únicamente la home. Las páginas `/tableros`, `/presurizacion`, `/servicios` y `/contacto` no aparecen como resultados propios.

**[CRÍTICO] `<html lang="en">` en un sitio 100 % en español.** Origen: `next.config.mjs` declara `i18n: { locales: ["en"], defaultLocale: "en" }`. Efectos en cadena:

- Google y Bing reciben una señal de idioma incorrecta para todo el sitio; los lectores de pantalla pronuncian el contenido con fonética inglesa.
- Next.js expone rutas duplicadas `/en`, `/en/tableros`, `/en/servicios`, `/en/presurizacion` y `/en/contacto`, que responden 200 con el mismo contenido. Al no haber canonical en las subpáginas, son duplicados puros.
- Vercel devuelve cabeceras anómalas: `x-matched-path: /en` y `content-disposition: inline; filename="en"`.

**[ALTO] Canonical solo en la home.** Además apunta a `https://www.myxa.com.ar` sin barra final mientras `og:url` la incluye. Las subpáginas no tienen canonical, así que cualquier variante (`/en/tableros`, `?utm_source=`, `?fbclid=`) compite como duplicado.

**[MEDIO] Página 404 genérica en inglés.** "This page could not be found", sin navegación ni enlaces de retorno. `/favicon.ico` también devuelve 404: los `<link rel="icon">` existen, pero muchos clientes de correo y rastreadores piden el `.ico` por convención.

**[MEDIO] Rutas de API indexables.** `/api/diagrams` y `/api/diagram/[id]` devuelven HTML (título "Unifilares", `lang="en"`) sin `noindex`. Son utilidades para los códigos QR de los planos y no deberían aparecer en buscadores.

**[BAJO] Cabeceras de seguridad ausentes.** No hay `Content-Security-Policy`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` ni `X-Frame-Options`. Impacto directo en posicionamiento nulo; penaliza la categoría "Buenas prácticas" de Lighthouse y la confianza del dominio.

**Lo que está bien:** redirecciones `http → https` y `myxa.com.ar → www` en 308, HSTS de dos años, barra final normalizada con 308, HTTP/2, TTFB de 250 a 400 ms desde EE. UU., fuente tipográfica autoalojada.

### 4.2 Caché de recursos estáticos

**[MEDIO] `Cache-Control: public, max-age=0, must-revalidate` en todos los recursos**, incluidas las imágenes optimizadas de `/_next/image`. Cada visita repetida revalida todo. En `next.config.mjs` conviene fijar `images.minimumCacheTTL` y cabeceras de caché para `/public` (código en el Anexo A.3).

## 5. Contenido y SEO on-page

### 5.1 Títulos

**[CRÍTICO] Todos los títulos siguen el patrón "MYXA - X" (15 a 31 caracteres):** marca primero, sin la keyword de negocio ni la ubicación. "MYXA - Servicios" o "MYXA - Contacto" no dicen a qué se dedica la empresa. El problema se agrava porque "MYXA" es un nombre compartido con otras entidades (una banda de Seattle, aplicaciones, la planta *Cordia myxa*): en la búsqueda `"myxa" incendio` el sitio aparece segundo, detrás de la banda.

| URL | Título actual | Título propuesto (caracteres) |
|---|---|---|
| `/` | MYXA - Sistemas contra incendio | Tableros para bombas contra incendio NFPA 20 · MYXA Argentina (61) |
| `/tableros` | MYXA - Tableros de Control | Tableros de comando para bombas contra incendio · NFPA 20 e IRAM 3597 · MYXA (73) |
| `/presurizacion` | MYXA - Equipos de Presurización | Reparación de equipos de presurización contra incendio · MYXA (61) |
| `/servicios` | MYXA - Servicios | Instalación y mantenimiento de sistemas contra incendio · MYXA (61) |
| `/contacto` | MYXA - Contacto | Contacto y presupuestos · MYXA, José C. Paz, Buenos Aires (57) |

Para `/tableros` conviene acortar a menos de 65 caracteres si se prioriza que no se trunque; la versión larga sirve si se prefiere cubrir ambas normas.

### 5.2 Meta descriptions

**[ALTO] Longitudes fuera de rango y sin llamado a la acción.** La home tiene 213 caracteres (Google corta alrededor de 155 a 160), `/contacto` 73 y `/presurizacion` 91 (demasiado cortas, sin ubicación ni beneficio). La afirmación "más de 20 años de experiencia" aparece solo en la meta description y en ningún lugar visible del sitio: ni Google ni un modelo de lenguaje pueden citarla.

| URL | Description propuesta (caracteres) |
|---|---|
| `/` | Fabricamos tableros de control para bombas contra incendio según NFPA 20 e IRAM 3597 e instalamos y mantenemos equipos de presurización. José C. Paz, Buenos Aires. (157) |
| `/tableros` | Tableros de comando para bombas principales y jockey: gabinete IP40, arranque directo hasta 15 HP o estrella-triángulo, comando a 24 V y planos con QR. Pedí tu presupuesto. (158) |
| `/presurizacion` | Diagnóstico y reparación de equipos de presurización contra incendio: colectores, cañerías, válvulas y bombas. Visita técnica y cotización en menos de 48 horas. (154) |
| `/servicios` | Instalación, puesta en marcha, capacitación y mantenimiento preventivo de sistemas contra incendio en Buenos Aires y todo el país. Informe certificado de puesta en marcha. (156) |
| `/contacto` | Consultas y presupuestos de tableros y equipos contra incendio. WhatsApp +54 9 11 5815-1959, info@myxa.com.ar. Respondemos en menos de 48 horas. (145) |

### 5.3 Encabezados

**[ALTO] La home tiene 30 etiquetas `<h2>` con solo tres textos distintos.** El componente de marquesina animada (`Title`) repite diez veces cada palabra ("Tableros" ×10, "Presurización" ×10, "Servicios" ×10) dentro de `<h2>`. Para Google y para un lector de pantalla el esquema de la página es ruido. En las subpáginas la jerarquía salta de H1 a H3 sin H2, y en `/tableros` las ocho características técnicas (Protección Superior, Control, Señalización, Arranque Optimizado, Conexionado, Protección Eléctrica, Circuito de Comando Seguro, Planos) son párrafos en negrita, no encabezados.

Corrección: marquesina con `aria-hidden="true"` y `<div>` en lugar de `<h2>`, un único H2 real por sección, y en `/tableros` un `<h2>Características técnicas</h2>` con un `<h3>` por ítem (Anexo A.8).

### 5.4 Imágenes

**[ALTO] Textos alternativos de relleno.** `alt="Hero"` en la imagen principal y `alt="Picture of the author"` en cuatro imágenes, incluida la foto del tablero en `/tableros`. Google Imágenes no puede asociar esas fotos a "tablero de comando para bombas contra incendio" si el alt no lo dice. Solo `/servicios` tiene alt correctos (usa el título del servicio).

| Archivo | Alt actual | Alt propuesto |
|---|---|---|
| `hero.webp` | Hero | Tablero de control MYXA para bombas de sistema contra incendio, gabinete rojo bermellón |
| `tableros_1.png` (home) | Picture of the author | Tablero de comando MYXA para bomba contra incendio, vista frontal con pilotos LED |
| `instalaciones_1.jpeg` (home y `/presurizacion`) | Picture of the author | Equipo de presurización contra incendio instalado por MYXA: bombas, colector y válvulas |
| `tableros_*.png` (`/tableros`, imagen dinámica) | Picture of the author | Alt dinámico según la característica activa, p. ej. "Interior del tablero: llave seccionadora y fusibles NH" |

### 5.5 Profundidad del contenido

**[ALTO] Contenido escaso en las páginas que deberían vender.** `/presurizacion` tiene 136 palabras y `/contacto` 96; `/servicios` describe cuatro servicios sin ejemplos, plazos ni entregables concretos; `/tableros` tiene buen material técnico (IP40, 15 HP, 24 V, 220 V, fusibles NH) pero no explica qué exigen NFPA 20 e IRAM 3597, no tiene tabla de especificaciones (potencias, tensiones, cantidad de bombas, dimensiones), ni modelos, ni ficha técnica descargable, ni fotos de instalaciones con epígrafe.

No existe una página "Nosotros" con historia, planta, equipo, certificaciones y cifras: esto es exactamente lo que Google evalúa como experiencia y autoridad (E-E-A-T) y lo que un motor generativo necesita para presentar a MYXA como una entidad concreta. Tampoco hay blog, casos de éxito, testimonios ni preguntas frecuentes, por lo que el sitio no captura búsquedas de cola larga ni ofrece material citable.

### 5.6 Enlaces internos y redacción

**[MEDIO] Cuatro enlaces rotos en el pie de página de `/contacto`:** `/#instalacion`, `/#mantenimiento`, `/#reparacion` y `/#contacto` apuntan a anclas que no existen en la home (sus secciones se llaman `nosotros`, `tableros`, `presurizacion` y `servicios`). El pie de página está copiado y pegado en cada archivo en lugar de ser un componente compartido, lo que explica la divergencia.

**[BAJO]** Textos de enlace genéricos ("Más sobre nuestros tableros", "Ver Tableros"); registro mixto ("según tu proyecto" junto a "su sistema"); tres variantes de la misma expresión ("contra incendio", "contra incendios", "contraincendios"). Conviene unificar en "contra incendio" como forma principal y usar textos de enlace descriptivos ("Ver especificaciones de los tableros NFPA 20").

## 6. Datos estructurados

**[ALTO] Un único bloque JSON-LD, incompleto y solo en la home.** El objeto `Organization` declara `url` con `http://`, un nombre con sufijo ("MYXA - Sistemas contra incendio") y un `contactPoint`. Faltan `logo`, `address` (la dirección sí está en el pie de página), `email`, `sameAs` (LinkedIn), `description`, `areaServed`, `geo` y horarios. No hay `WebSite`, `BreadcrumbList`, `Product`, `Service` ni `FAQPage` en ninguna página.

Comparación con la competencia: Zensitec publica `Organization`, `BreadcrumbList` y `WebSite`; Stymel `Service`, `WebPage` y `WebSite`; IPCI `Article`, `WebSite` y `Person` (autoría de su blog). Los datos estructurados son uno de los factores que más correlacionan con la aparición en resúmenes generativos.

| Página | Tipos propuestos |
|---|---|
| Todas | `Organization` + `LocalBusiness` (mismo `@id`), `WebSite`, `BreadcrumbList` |
| `/tableros` | `Product` con `additionalProperty` (IP40, 15 HP, 24 V, normas) e `image` |
| `/servicios` | Un `Service` por servicio (`provider` → `@id` de la organización) |
| `/presurizacion` | `Service` "Reparación de equipos de presurización" |
| `/contacto` | `ContactPage` + `LocalBusiness` con `openingHoursSpecification` |
| Nueva FAQ | `FAQPage` con 8 a 10 preguntas |

El código está en los anexos A.5 y A.6. Validar después con la prueba de resultados enriquecidos de Google y con validator.schema.org.

## 7. Open Graph y redes sociales

**[ALTO] Vista previa deficiente al compartir.** La home no tiene `og:title` (sí `twitter:title`), `og:image` es `logo.jpeg` (15 KB, sin proporción 1,91:1) y las etiquetas Twitter usan `property=` en lugar de `name=`. Las subpáginas no tienen ninguna etiqueta Open Graph ni Twitter: al compartir `/tableros` por WhatsApp o LinkedIn (los dos canales naturales de una PyME B2B) no se muestra imagen ni título útil.

Corrección: un componente `<Seo>` común (Anexo A.4) que emita título, description, canonical, Open Graph, Twitter y JSON-LD por página, con una imagen `og-default.jpg` de 1200 × 630 px que combine producto, logo y claim, y variantes por página cuando exista foto de producto.

## 8. GEO: visibilidad en motores generativos

### 8.1 Situación actual

- **Acceso de rastreadores de IA:** sin `robots.txt`, GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended y Bingbot pueden rastrear el sitio. No hay bloqueo, pero tampoco una política explícita ni un archivo `llms.txt`.
- **Presencia en respuestas generativas:** en tres consultas comerciales con resumen generativo ("mejores fabricantes de tableros contra incendio argentina", "empresa tableros bombas contra incendio buenos aires", "tablero para bomba jockey argentina comprar") MYXA no aparece en ninguna. Bairestron aparece en dos; también Sehus, Grupo Ramoza, Zensitec, FAOelectric y WDM Pumps.
- **Dependencias de índice:** Copilot y ChatGPT se apoyan en el índice de Bing; Claude usa Brave Search. No se detecta verificación en Bing Webmaster Tools ni IndexNow, así que la indexación en Bing depende del rastreo espontáneo (no verificado desde afuera).
- **Entidad ambigua:** "MYXA" compite con homónimos y la home nunca define la entidad en su primer párrafo. Un modelo de lenguaje necesita una oración del tipo "MYXA es un fabricante argentino de tableros de control para bombas contra incendio, con planta en José C. Paz, Buenos Aires".

### 8.2 Citabilidad del contenido

Los nueve métodos del estudio de Princeton sobre optimización para motores generativos (Aggarwal et al., 2023) aplicados a MYXA:

| Método | Mejora de visibilidad estimada | Estado en MYXA | Acción |
|---|---|---|---|
| Citar fuentes | +40 % | Menciona NFPA 20 e IRAM 3597 sin explicarlas ni enlazarlas | Explicar cada norma en una oración y enlazar a NFPA e IRAM |
| Agregar estadísticas | +37 % | Hay datos técnicos (IP40, 15 HP, 24 V, 220 V) pero ninguna cifra de negocio visible | Años de trayectoria, tableros entregados, tiempo de respuesta, garantía |
| Citas de expertos | +30 % | Ninguna | Testimonios con nombre, cargo y empresa; cita del responsable técnico |
| Tono autoritativo | +25 % | Correcto en `/tableros`, genérico en el resto | Reescribir `/servicios` y `/presurizacion` con procesos, plazos y entregables |
| Fácil de entender | +20 % | Párrafos largos justificados | Párrafos de 2 a 3 oraciones, definiciones, listas |
| Términos técnicos | +18 % | Bien en `/tableros` | Mantener y extender a presurización (bomba jockey, presostato, colector) |
| Vocabulario diverso | +15 % | Repetitivo ("sistema contra incendios" ×20) | Sinónimos naturales, sin forzar |
| Fluidez | +15 a 30 % | Aceptable | Revisión de estilo y consistencia de registro |
| Relleno de keywords | −10 % | No se detecta | Evitarlo |

### 8.3 Acciones GEO específicas

1. Definir la entidad en la primera oración de la home y en el `description` del JSON-LD, con nombre completo consistente: "MYXA Sistemas contra incendio".
2. Publicar `robots.txt` explícito (Anexo A.1) y un `llms.txt` (Anexo A.9).
3. Crear una página de preguntas frecuentes con esquema `FAQPage` en formato "respuesta primero" (las 10 preguntas de la sección 9.3).
4. Publicar una ficha técnica en PDF de los tableros: Perplexity y Copilot priorizan documentos PDF como fuente.
5. Dar de alta Bing Webmaster Tools, importar desde Search Console y activar IndexNow.
6. Consolidar señales de entidad: perfil de Google Business, LinkedIn activo (hoy 5 seguidores), directorios industriales, `sameAs` en el JSON-LD.

## 9. Keywords y competencia

### 9.1 Indexación y presencia actual

| Consulta o canal | Resultado observado |
|---|---|
| `site:myxa.com.ar` | Solo la home. Las subpáginas no aparecen como resultados propios. |
| `"myxa" incendio` | Home en posición 2, detrás de una banda musical homónima. |
| `myxa tableros` | Home en posición 3, mismo problema de homónimos. |
| `fabricante tableros contra incendio argentina` | Home en posición 4, entre Bairestron y Zensitec, sin ninguna optimización: señal de relevancia temática real. |
| `fabricante tableros contra incendio buenos aires` | MYXA no aparece; compiten Bairestron, Fuego Norte, Dimotec, Stymel y WDM Pumps. |
| Google Business Profile / Maps | No se encontró ficha (no verificado desde la cuenta). |
| LinkedIn | Existe: "MYXA - Tableros de sistemas contra incendio", Fire Protection, 2 a 10 empleados, 5 seguidores. |
| MercadoLibre, Páginas Amarillas, Cylex, guías industriales | Sin presencia detectada; sin enlaces entrantes visibles. |

### 9.2 Keywords priorizadas

Sin datos de volumen (no hay API conectada); la competencia se estimó por lo que ocupa la primera página de resultados.

| Keyword | Intención | Competencia observada | Página destino | Comentario |
|---|---|---|---|---|
| tableros contra incendio argentina fabricante | Comercial | Alta | `/` | MYXA ya está en posición 4: la keyword con mejor retorno inmediato. |
| tablero de comando bombas contra incendio | Comercial e informativa | Media | `/tableros` | SERP dominada por vendedores de Colombia, México y Perú y por PDFs; sin argentinos fuertes. |
| tablero controlador bomba jockey | Comercial | Baja a media | `/tableros` (sección jockey) | Casi todo internacional; nadie posiciona localmente. |
| tablero NFPA 20 | Comercial e informativa | Media | `/tableros` + FAQ | Mezcla de MercadoLibre, YouTube y PDFs; poco contenido educativo. |
| IRAM 3597 tablero | Informativa | Baja | FAQ o artículo | Solo PDFs académicos; una explicación clara puede capturar la intención y derivar a contacto. |
| fabricante tableros contra incendio buenos aires | Comercial, alta intención | Media a alta | `/` + `/contacto` | Falta la ubicación en títulos y contenido. |
| equipo de presurización contra incendio | Comercial | Alta | `/presurizacion` | Jugadores consolidados (IPCI, Horus, Blugma, Refer, Tromba). |
| mantenimiento sistema contra incendio | Comercial recurrente | Alta | `/servicios` | Competidores con décadas de historial y certificación IRAM 3546. |
| tablero para bomba jockey comprar | Transaccional | Alta | Ficha propia en MercadoLibre o Google Ads | MercadoLibre domina; difícil orgánicamente. |

### 9.3 Cola larga y preguntas para la FAQ

1. ¿Qué es un tablero NFPA 20 y para qué sirve?
2. ¿Qué diferencia hay entre NFPA 20 e IRAM 3597 para tableros contra incendio?
3. ¿Cada cuánto se debe hacer mantenimiento a una bomba contra incendio?
4. ¿Qué es una bomba jockey y por qué es necesaria en un sistema de presurización?
5. ¿Cómo funciona un equipo de presurización contra incendio?
6. ¿Qué componentes tiene un tablero de comando para bomba contra incendio?
7. ¿Qué normativa argentina regula los tableros para bombas contra incendio?
8. ¿Quién fabrica tableros a medida para bombas contra incendio en Buenos Aires?
9. ¿Cómo es la puesta en marcha de un sistema contra incendio nuevo?
10. ¿Cuánto dura la vida útil de un tablero de bomba contra incendio?

### 9.4 Competencia directa (verificada)

| Empresa | Dominio | Blog o contenido técnico | JSON-LD | robots / sitemap | Ventaja SEO evidente |
|---|---|---|---|---|---|
| Bairestron | bairestron.com.ar | Sí ("Novedades") | No verificado | No verificado | Representante de SVE Corp, más de 10 años, foco regional; citado en resúmenes generativos. |
| Zensitec | zensitec.com.ar | No detectado | `Organization`, `BreadcrumbList`, `WebSite` | Sí / Sí | Aprobación UL/FM, cobertura AR, BO, CL, UY, PY. |
| Stymel | stymel.com.ar | Sí ("Novedades") | `Service`, `WebPage`, `WebSite` | Sí / Sí | Planta propia en Don Torcuato; generalista en tableros. |
| WDM Pumps | wdmpumps.com | Sí ("/noticias/") | No detectado | Sí / Sí | Página dedicada a tableros contra incendio segmentada por tipo (1 o 2 bombas + jockey). |
| IPCI | ipci.com.ar | Sí, blog activo con autoría | `Article`, `WebSite`, `Person` | Sí / Sí | Más de 30 años; mayor volumen de contenido indexable. |
| Tromba | tromba-sa.com.ar | No | No verificado | No verificado | Fabricante de bombas con catálogo técnico amplio. |

Otros que aparecen en las SERP: Sehus, Grupo Ramoza, FAOelectric, Dimotec, Fuego Norte, Dakari Group, Vinox, Brafemar, Grupo Incendio.

**Lectura estratégica:** el nicho "tableros de comando para bombas contra incendio" en Argentina no tiene un líder orgánico claro; los competidores mejor posicionados venden bombas o sistemas completos y tratan el tablero como accesorio. MYXA, especializada en el tablero, puede apropiarse de esa keyword y de "bomba jockey" con contenido técnico y datos estructurados de producto. Las keywords de presurización y mantenimiento son de largo plazo.

## 10. SEO local

La dirección (Dr. Enrique Finochietto 5345, José C. Paz, Buenos Aires) y el teléfono aparecen en el pie de página, pero no hay `PostalAddress` ni `LocalBusiness` en los datos estructurados, no hay mapa ni horarios, no se encontró ficha de Google Business Profile ni menciones en directorios, y ningún título incluye la ubicación.

Acciones:

1. Crear y verificar el perfil de Google Business con categoría principal "Empresa de protección contra incendios" (o "Fabricante"), fotos de planta y productos, servicios, horario y zona de cobertura.
2. Mantener nombre, dirección y teléfono idénticos en el sitio, LinkedIn, el perfil de Google y los directorios (consistencia NAP).
3. Agregar a `/contacto` un mapa embebido, horarios y la zona atendida (AMBA, GBA norte y oeste, Provincia de Buenos Aires, envíos al interior).
4. Alta en directorios industriales argentinos y en la guía de proveedores de las cámaras del sector.

## 11. Medición y analítica

**[CRÍTICO] PostHog no está funcionando.** El snippet de inicialización está dentro de `<Head>` de `_app.jsx` usando `next/script`, combinación que Next.js no renderiza (advierte "next/script should not be used in next/head"). El HTML servido no contiene el snippet y no se emite ningún `<script>` hacia `us.i.posthog.com` ni `us-assets.i.posthog.com` (el texto del snippet sí viaja dentro del bundle de `_app`, pero como propiedad de un componente que `next/head` descarta, nunca se ejecuta). No fue posible confirmarlo en un navegador real desde este entorno; verificarlo en producción abriendo la consola y ejecutando `typeof window.posthog?.capture`, o revisando en la pestaña Red si hay requests a `posthog.com`. Consecuencia: el sitio no registra visitas ni conversiones desde que se desplegó esa versión. Corrección en el Anexo A.7.

- No se detecta verificación de Google Search Console ni de Bing Webmaster Tools (sin meta de verificación; puede estar verificado por DNS, no comprobable desde afuera). Ambos son gratuitos y son la única forma de ver impresiones, consultas y errores de indexación.
- El formulario de contacto y el botón flotante de WhatsApp no disparan eventos de conversión.
- **Fuera del alcance SEO pero relevante:** `/api/send` acepta cualquier método HTTP y toma nombre, teléfono y fecha de la query string sin validación ni límite de frecuencia, así que cualquiera puede disparar correos desde una URL. Conviene exigir POST con cuerpo JSON, validar campos, añadir un honeypot o Turnstile y limitar por IP.

## 12. Performance y Core Web Vitals

**Nota sobre la medición.** Desde el entorno de auditoría no fue posible ejecutar Chromium contra hosts externos (el proxy de salida corta el handshake TLS del navegador), así que Lighthouse, LCP, CLS y las capturas de pantalla quedaron sin medir. Los datos siguientes son de red real (tiempo hasta el primer byte y bytes transferidos con compresión Brotli) obtenidos con un rastreador HTTP, y del análisis del HTML servido. Antes de aplicar cambios, conviene tomar una línea de base con PageSpeed Insights (https://pagespeed.web.dev/analysis?url=https://www.myxa.com.ar y la misma prueba para `/tableros`) y repetirla después.

### 12.1 Tiempo de respuesta del servidor

| Página | TTFB (perfil móvil) | TTFB (perfil escritorio) |
|---|---|---|
| `/` | 415 ms | 160 ms |
| `/tableros` | 346 ms | 256 ms |
| `/servicios` | 149 ms | 146 ms |
| `/presurizacion` | 172 ms | 159 ms |
| `/contacto` | 155 ms | 155 ms |

Medido desde EE. UU. (la región de Vercel es `iad1`); desde Argentina se suman 30 a 60 ms de latencia. Las páginas son estáticas y el servidor no es un problema.

### 12.2 Peso de cada página

| Página | Requests | Total transferido | JavaScript | Imágenes |
|---|---|---|---|---|
| `/` | 16 | 606 KB | 175 KB | 419 KB |
| `/tableros` | 23 | **18,24 MB** | 173 KB | **18,06 MB** |
| `/servicios` | 17 | 788 KB | 172 KB | 605 KB |
| `/presurizacion` | 13 | 218 KB | 171 KB | 38 KB |
| `/contacto` | 11 | 176 KB | 166 KB | 0 |

Igual en móvil y escritorio: el HTML no cambia según el dispositivo. No incluye la carga posterior a la hidratación. Ningún recurso estático devolvió error.

**[CRÍTICO] `/tableros` descarga 18,2 MB en cualquier dispositivo.** El `<Head>` de la página precarga con `<link rel="preload" as="image">` los nueve archivos originales de `/public` sin pasar por el optimizador de Next.js:

| Archivo | Tamaño | Dimensiones |
|---|---|---|
| `tableros_2.png` | 8,07 MB | 3192 × 2624 px |
| `tableros_10.png` | 3,47 MB | 1500 × 1702 px |
| `tableros_5.png` | 3,11 MB | 1584 × 1694 px |
| `tableros_1.png` | 1,06 MB | 1424 × 1144 px |
| `tableros_4.png` | 0,96 MB | 1200 × 1308 px |
| `tableros_9.png` | 0,71 MB | 992 × 1056 px |
| `tableros_7.png` | 0,65 MB | 750 × 711 px |
| `tableros_6.jpeg` | 0,13 MB | — |
| `tableros_8.jpg` | 0,11 MB | — |

La imagen visible se muestra a 500 px de ancho como máximo y la sirve `next/image` en una versión optimizada de unos 200 KB; los 18 MB precargados nunca se usan en pantalla. A 1,6 Mbps (4G lenta) la transferencia tarda unos 90 segundos y compite con el JavaScript y la imagen real, así que el LCP de la página más importante del sitio queda muy por encima de los 2,5 s recomendados. Además, decodificar un PNG de 3192 × 2624 px consume unos 33 MB de memoria en el teléfono. Este hallazgo es probablemente la causa principal de una mala experiencia móvil y de un puntaje de performance bajo en Lighthouse. Corrección en el Anexo A.10.

**[ALTO] La imagen del hero de la home se carga en diferido.** `hero.webp` es el elemento visual dominante del primer pantallazo (candidato a LCP) y tiene `loading="lazy"` porque no se le pasó `priority` a `next/image`. Además el `srcset` ofrece 1200 px para pantallas 1x y 3840 px (257 KB) para pantallas 2x, sin atributo `sizes`: casi todos los teléfonos descargan la versión de 3840 px para mostrarla a menos de 400 px.

**[MEDIO] JavaScript: 175 KB comprimidos (532 KB sin comprimir) en cada página.** El grueso es `framer-motion` (127 KB sin comprimir), usado para la marquesina, el menú inferior y detección de scroll. Para un sitio de cinco páginas es un costo evitable, pero no es la prioridad frente a las imágenes.

**[MEDIO] Sin caché de recursos.** Todos los archivos, incluidas las imágenes optimizadas, se sirven con `max-age=0, must-revalidate` (ver 4.2).

**Lo que está bien:** fuente variable autoalojada (dos subconjuntos de 22 a 27 KB), CSS de 24 KB, HTML de 4 a 6 KB por página, sin recursos de terceros en el camino crítico, atributos `width` y `height` en todas las imágenes (reduce el riesgo de saltos de diseño).

### 12.3 Prioridades de performance

1. Eliminar los nueve `preload` de `/tableros` y convertir los PNG a WebP o AVIF con un ancho máximo de 1200 px (objetivo: menos de 1 MB para toda la página).
2. `priority` y `sizes` en la imagen del hero.
3. Cabeceras de caché para `/public` y `minimumCacheTTL` para `/_next/image`.
4. Medir con PageSpeed Insights antes y después; objetivo móvil: LCP menor a 2,5 s, CLS menor a 0,1, puntaje de performance mayor a 85.

## 13. Plan de acción priorizado

Cada ítem indica el impacto esperado, el esfuerzo y el archivo del repositorio donde se aplica. Los ítems P0 son correcciones de bajo esfuerzo que destraban la indexación y la medición; conviene desplegarlos juntos en la primera semana.

### P0: primera semana

| # | Acción | Impacto | Esfuerzo | Dónde |
|---|---|---|---|---|
| 1 | Declarar `lang="es-AR"`, eliminar el bloque `i18n` y redirigir `/en/*` con 301 | Alto | Bajo | `next.config.mjs`, nuevo `src/pages/_document.jsx` |
| 2 | Publicar `robots.txt` con `Sitemap:` y bots de IA permitidos, `/api/` excluido | Alto | Bajo | `public/robots.txt` |
| 3 | Reescribir `sitemap.xml` (https, imágenes reales, `lastmod` verdadero) | Alto | Bajo | `public/sitemap.xml` |
| 4 | Sacar el snippet de PostHog de `<Head>` y registrar conversiones (formulario, WhatsApp) | Alto | Bajo | `src/pages/_app.jsx`, `contacto.jsx`, `whatsappFab.jsx` |
| 5 | Nuevos títulos y meta descriptions en las cinco páginas | Alto | Bajo | `src/pages/*.jsx` |
| 6 | Componente `<Seo>` con canonical, Open Graph, Twitter y JSON-LD en todas las páginas | Alto | Medio | `src/components/seo.jsx` |
| 7 | `priority` en la imagen del hero; quitar los nueve `preload` de `/tableros` | Alto | Bajo | `index.jsx`, `tableros.jsx` |
| 8 | Textos alternativos descriptivos | Medio | Bajo | `index.jsx`, `tableros.jsx`, `presurizacion.jsx` |
| 9 | Corregir las anclas rotas del pie de `/contacto` y extraer el footer a un componente | Medio | Bajo | `contacto.jsx`, nuevo `footer.jsx` |
| 10 | Dar de alta Google Search Console y Bing Webmaster Tools; enviar el sitemap; activar IndexNow | Alto | Bajo | Configuración externa |

### P1: semanas 2 a 4

| # | Acción | Impacto | Esfuerzo | Dónde |
|---|---|---|---|---|
| 11 | Convertir y redimensionar imágenes (WebP/AVIF, máximo 1200 px, menos de 200 KB) | Alto | Medio | `public/` |
| 12 | JSON-LD `Organization`+`LocalBusiness`, `WebSite`, `BreadcrumbList` en todas; `Product` en `/tableros`; `Service` en `/servicios` y `/presurizacion` | Alto | Medio | `src/components/seo.jsx`, `src/utils/schema.js` |
| 13 | Página de preguntas frecuentes con `FAQPage` (10 preguntas, respuesta primero) | Alto (GEO) | Medio | nuevo `src/pages/preguntas-frecuentes.jsx` |
| 14 | Página "Nosotros": historia, planta en José C. Paz, equipo, normas, cifras (años, tableros entregados) | Alto (E-E-A-T) | Medio | nuevo `src/pages/nosotros.jsx` |
| 15 | Ampliar `/tableros` (tabla de especificaciones, modelos por cantidad de bombas, ficha técnica PDF) y `/presurizacion` (proceso, plazos, fotos con epígrafe) | Alto | Medio | `tableros.jsx`, `presurizacion.jsx`, `public/fichas/` |
| 16 | Crear y verificar Google Business Profile; consistencia NAP; alta en directorios industriales | Alto (local) | Bajo | Externo |
| 17 | Encabezados: marquesina `aria-hidden`, un H2 real por sección, H3 en las características | Medio | Bajo | `title.jsx`, `index.jsx`, `tableros.jsx` |
| 18 | Cabeceras de caché, seguridad y `X-Robots-Tag: noindex` en `/api/*` | Medio | Bajo | `next.config.mjs` |
| 19 | Imagen Open Graph de 1200 × 630 px (general y por producto) | Medio | Bajo | `public/og-default.jpg` |
| 20 | Página 404 propia en español con navegación; `favicon.ico` | Bajo | Bajo | `src/pages/404.jsx`, `public/favicon.ico` |

### P2: meses 2 y 3

| # | Acción | Impacto | Esfuerzo | Dónde |
|---|---|---|---|---|
| 21 | Blog o sección de recursos técnicos: un artículo mensual (NFPA 20 explicada, IRAM 3597, mantenimiento de bombas, bomba jockey) con `Article` y autor | Alto (cola larga y GEO) | Alto | nuevo `src/pages/recursos/` |
| 22 | Casos de obra y testimonios con nombre, cargo y empresa | Medio | Medio | `nosotros.jsx`, home |
| 23 | LinkedIn activo: dos publicaciones al mes enlazando al sitio; invitar clientes a seguir la página | Medio | Medio | Externo |
| 24 | Endurecer `/api/send`: POST con cuerpo JSON, validación, honeypot o Turnstile, límite por IP | Seguridad | Bajo | `src/pages/api/send.js` |
| 25 | Reducir JavaScript: marquesina y bottom sheet con CSS en lugar de framer-motion | Bajo | Medio | `title.jsx`, `bottomsheet.jsx` |
| 26 | Publicar `llms.txt` | Bajo | Bajo | `public/llms.txt` |

### Cómo medir el resultado

- **Semana 1:** Search Console muestra las 5 URLs indexadas; `site:myxa.com.ar` devuelve 5 resultados; PostHog registra sesiones y eventos.
- **Mes 1:** impresiones y clics en Search Console para "tableros contra incendio" y "tablero bomba jockey"; Lighthouse móvil con LCP por debajo de 2,5 s en `/` y `/tableros`.
- **Mes 3:** MYXA aparece en al menos una de las tres consultas generativas de referencia; ficha de Google Business con reseñas; 3 artículos publicados; formularios y clics de WhatsApp medidos como conversiones.

## Anexo A. Código propuesto

### A.1 `public/robots.txt`

```
User-agent: *
Allow: /
Disallow: /api/

# Rastreadores de IA: permitidos explícitamente
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: OAI-SearchBot
User-agent: ClaudeBot
User-agent: anthropic-ai
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: Bingbot
Allow: /
Disallow: /api/

Sitemap: https://www.myxa.com.ar/sitemap.xml
```

### A.2 `public/sitemap.xml`

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>https://www.myxa.com.ar/</loc>
    <lastmod>2026-09-02</lastmod>
    <priority>1.0</priority>
    <image:image>
      <image:loc>https://www.myxa.com.ar/hero.webp</image:loc>
      <image:title>Tablero de control MYXA para bombas contra incendio</image:title>
    </image:image>
  </url>
  <url>
    <loc>https://www.myxa.com.ar/tableros</loc>
    <lastmod>2026-09-02</lastmod>
    <priority>0.9</priority>
    <image:image>
      <image:loc>https://www.myxa.com.ar/tableros_1.png</image:loc>
      <image:title>Tablero de comando para bomba contra incendio, vista frontal</image:title>
    </image:image>
    <image:image>
      <image:loc>https://www.myxa.com.ar/tableros_2.png</image:loc>
      <image:title>Tablero de comando para equipo de tres bombas</image:title>
    </image:image>
  </url>
  <url><loc>https://www.myxa.com.ar/presurizacion</loc><lastmod>2026-09-02</lastmod><priority>0.8</priority></url>
  <url><loc>https://www.myxa.com.ar/servicios</loc><lastmod>2026-09-02</lastmod><priority>0.8</priority></url>
  <url><loc>https://www.myxa.com.ar/contacto</loc><lastmod>2026-09-02</lastmod><priority>0.7</priority></url>
</urlset>
```

Actualizar `lastmod` con la fecha real de cada cambio (idealmente generándolo en el build con `next-sitemap`).

### A.3 `next.config.mjs`

Se elimina el bloque `i18n` (el idioma se declara en `_document.jsx`), se redirigen las rutas `/en/*`, se fijan cabeceras de caché, seguridad y `noindex` para la API, y se habilitan AVIF/WebP.

```js
const config = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 2592000, // 30 días
  },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico)",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800, stale-while-revalidate=86400" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default config;
```

Nuevo archivo `src/pages/_document.jsx`:

```jsx
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es-AR">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### A.4 Componente `src/components/seo.jsx`

```jsx
import Head from "next/head";

const SITE = "https://www.myxa.com.ar";
const DEFAULT_IMAGE = `${SITE}/og-default.jpg`; // 1200 x 630 px

export default function Seo({ title, description, path = "/", image = DEFAULT_IMAGE, jsonLd = [] }) {
  const url = `${SITE}${path === "/" ? "/" : path}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MYXA" />
      <meta property="og:locale" content="es_AR" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {jsonLd.map((obj, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(obj) }}
        />
      ))}
    </Head>
  );
}
```

Uso en `/tableros`:

```jsx
<Seo
  title="Tableros de comando para bombas contra incendio · NFPA 20 e IRAM 3597 · MYXA"
  description="Tableros de comando para bombas principales y jockey: gabinete IP40, arranque directo hasta 15 HP o estrella-triángulo, comando a 24 V y planos con QR. Pedí tu presupuesto."
  path="/tableros"
  image="https://www.myxa.com.ar/og-tableros.jpg"
  jsonLd={[ORGANIZATION, PRODUCTO_TABLERO, breadcrumb("Tableros", "/tableros")]}
/>
```

### A.5 JSON-LD de organización y sitio (todas las páginas)

Confirmar el código postal antes de publicar.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": "https://www.myxa.com.ar/#organization",
      "name": "MYXA",
      "alternateName": "MYXA Sistemas contra incendio",
      "url": "https://www.myxa.com.ar/",
      "logo": "https://www.myxa.com.ar/logo-512.png",
      "image": "https://www.myxa.com.ar/og-default.jpg",
      "description": "Fabricante argentino de tableros de control para bombas de sistemas contra incendio según NFPA 20 e IRAM 3597. Instalación, puesta en marcha, capacitación y mantenimiento de equipos de presurización.",
      "telephone": "+54-9-11-5815-1959",
      "email": "info@myxa.com.ar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dr. Enrique Finochietto 5345",
        "addressLocality": "José C. Paz",
        "addressRegion": "Buenos Aires",
        "postalCode": "1665",
        "addressCountry": "AR"
      },
      "areaServed": ["Área Metropolitana de Buenos Aires", "Provincia de Buenos Aires", "Argentina"],
      "sameAs": ["https://www.linkedin.com/company/myxa-incendio"],
      "contactPoint": [{
        "@type": "ContactPoint",
        "telephone": "+54-9-11-5815-1959",
        "contactType": "sales",
        "availableLanguage": "es"
      }],
      "knowsAbout": ["NFPA 20", "IRAM 3597", "tableros de comando para bombas contra incendio", "bombas jockey", "sistemas de presurización contra incendio"]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.myxa.com.ar/#website",
      "url": "https://www.myxa.com.ar/",
      "name": "MYXA Sistemas contra incendio",
      "inLanguage": "es-AR",
      "publisher": { "@id": "https://www.myxa.com.ar/#organization" }
    }
  ]
}
```

### A.6 JSON-LD de producto (`/tableros`) y FAQ

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Tablero de control para bombas contra incendio MYXA",
  "brand": { "@type": "Brand", "name": "MYXA" },
  "manufacturer": { "@id": "https://www.myxa.com.ar/#organization" },
  "url": "https://www.myxa.com.ar/tableros",
  "image": ["https://www.myxa.com.ar/tableros_1.png", "https://www.myxa.com.ar/tableros_2.png"],
  "description": "Tablero de comando para bombas principales y jockey de sistemas contra incendio, fabricado según NFPA 20 e IRAM 3597. Gabinete metálico IP40, arranque directo hasta 15 HP o estrella-triángulo, circuito de comando a 24 V, señalización LED a 220 V y planos multifilares en formato físico y digital (QR).",
  "category": "Tableros eléctricos para sistemas contra incendio",
  "additionalProperty": [
    { "@type": "PropertyValue", "name": "Grado de protección del gabinete", "value": "IP40" },
    { "@type": "PropertyValue", "name": "Arranque directo", "value": "hasta 15 HP" },
    { "@type": "PropertyValue", "name": "Arranque estrella-triángulo", "value": "más de 15 HP" },
    { "@type": "PropertyValue", "name": "Tensión de comando", "value": "24 V" },
    { "@type": "PropertyValue", "name": "Normas", "value": "NFPA 20, IRAM 3597" }
  ]
}
```

No incluir `offers` sin precio: Google lo marca como error en la prueba de resultados enriquecidos. Sin `offers`, el `Product` sigue siendo válido como dato de entidad.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es un tablero NFPA 20?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Es el tablero de comando de las bombas de un sistema contra incendio construido según la norma NFPA 20 (Standard for the Installation of Stationary Pumps for Fire Protection). Debe arrancar la bomba en forma automática ante una caída de presión, permitir el arranque manual, señalizar el estado y proteger los circuitos de potencia y comando."
      }
    },
    {
      "@type": "Question",
      "name": "¿Qué es una bomba jockey y por qué es necesaria?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La bomba jockey es una bomba pequeña que mantiene presurizada la red contra incendio y compensa pérdidas menores, para que la bomba principal solo arranque ante una demanda real. Su tablero incluye presostato, arranque automático y señalización de falla."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cada cuánto se debe hacer mantenimiento a una bomba contra incendio?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NFPA 25 recomienda una prueba de arranque semanal para bombas diésel y mensual para eléctricas, además de una prueba anual de caudal. MYXA ofrece planes de mantenimiento preventivo con informe de cada visita."
      }
    }
  ]
}
```

Las respuestas deben coincidir palabra por palabra con el texto visible en la página.

### A.7 `_app.jsx`: PostHog fuera de `<Head>`

```jsx
import Script from "next/script";
import { Toaster } from "sonner";
import "../styles/globals.css";
import "@fontsource-variable/plus-jakarta-sans";
import WhatsappFab from "../components/whatsappFab";

const POSTHOG_SNIPPET = `...snippet actual de PostHog...
posthog.init('phc_...', { api_host: 'https://us.i.posthog.com' })`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script id="posthog" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: POSTHOG_SNIPPET }} />
      <Toaster richColors />
      <WhatsappFab />
      <Component {...pageProps} />
    </>
  );
}
```

Luego registrar conversiones: `posthog.capture('contacto_enviado')` al resolver el formulario y `posthog.capture('whatsapp_click')` en el botón flotante.

### A.8 Marquesina accesible (`src/components/title.jsx`)

```jsx
<div className={cl("w-screen overflow-hidden", className)} aria-hidden="true">
  <motion.div className="flex w-fit items-center justify-start" style={{ x }}>
    {contentsElements.map((content, index) => (
      <Fragment key={index}>
        <div className="h-1 w-12 md:mt-6 md:h-4 md:w-52" style={{ backgroundColor: color }} />
        <span className={`mx-4 w-max font-bold ${size}`} style={{ color }}>{content}</span>
        <div className="h-1 w-12 md:mt-6 md:h-4 md:w-52" style={{ backgroundColor: color }} />
      </Fragment>
    ))}
  </motion.div>
</div>
```

Y en cada sección de la home un único encabezado real, por ejemplo `<h2 className="sr-only">Tableros de control para bombas contra incendio</h2>` o, mejor, visible.

### A.9 `public/llms.txt`

```
# MYXA Sistemas contra incendio

> Fabricante argentino de tableros de control para bombas de sistemas contra incendio
> (NFPA 20, IRAM 3597) con planta en José C. Paz, Buenos Aires. Instalación, puesta en
> marcha, capacitación y mantenimiento de equipos de presurización.

## Páginas
- [Tableros de comando](https://www.myxa.com.ar/tableros): gabinete IP40, arranque directo
  hasta 15 HP o estrella-triángulo, comando a 24 V, planos con QR.
- [Equipos de presurización](https://www.myxa.com.ar/presurizacion): diagnóstico y reparación.
- [Servicios](https://www.myxa.com.ar/servicios): instalación, capacitación, puesta en marcha,
  mantenimiento.
- [Contacto](https://www.myxa.com.ar/contacto): WhatsApp +54 9 11 5815-1959, info@myxa.com.ar.
```

### A.10 Imagen principal e imágenes de `/tableros`

```jsx
// Home: la imagen del hero es el elemento LCP, no debe cargarse en diferido
<Image
  src="/hero.webp"
  alt="Tablero de control MYXA para bombas de sistema contra incendio"
  width={1200}
  height={600}
  priority
  sizes="(max-width: 1024px) 100vw, 900px"
/>
```

En `/tableros`, eliminar los nueve `<link rel="preload" as="image">` del `<Head>` (precargan los archivos originales sin optimizar, 18,7 MB en total) y dejar que `next/image` sirva versiones optimizadas; si se quiere precargar la imagen inicial, usar `priority` solo en ella. Convertir los PNG originales a WebP o AVIF con un máximo de 1200 px de ancho: `tableros_2.png` pasa de 8,3 MB a menos de 200 KB.

## Anexo B. Checklist de verificación

| Ítem | Estado |
|---|---|
| Texto renderizado en servidor (rastreable sin JS) | ✅ |
| HTTPS, HSTS, redirecciones canónicas (http, apex, barra final) | ✅ |
| Fuente autoalojada, sin bloqueo de terceros | ✅ |
| `robots.txt` | ❌ 404 |
| `sitemap.xml` válido y referenciado | ❌ http, imágenes 404, lastmod fijo |
| Atributo `lang` correcto | ❌ `en` |
| Sin URLs duplicadas | ❌ `/en/*` responde 200 |
| Canonical en todas las páginas | ❌ solo home |
| Títulos con keyword y menos de 60 caracteres | ❌ |
| Meta descriptions de 120 a 160 caracteres | ❌ 1 de 5 |
| Un H1 por página | ✅ |
| Jerarquía H1 > H2 > H3 coherente | ❌ |
| Alt descriptivos en imágenes | ❌ 4 de 8 |
| Open Graph y Twitter completos | ❌ solo home, incompleto |
| JSON-LD `Organization` completo | ❌ incompleto |
| JSON-LD `Product`, `Service`, `FAQPage`, `BreadcrumbList` | ❌ |
| Página 404 propia | ❌ |
| `favicon.ico` | ❌ 404 |
| Imágenes optimizadas (peso y formato) | ❌ PNG de hasta 8,3 MB |
| Imagen LCP con `priority` | ❌ `loading="lazy"` |
| Cabeceras de caché | ❌ `max-age=0` |
| Cabeceras de seguridad | ❌ |
| Analítica funcionando | ❌ PostHog no carga |
| Search Console y Bing Webmaster | ❓ no verificable |
| Google Business Profile | ❌ no encontrado |
| Bots de IA permitidos | ✅ por defecto (sin política explícita) |
| `llms.txt` | ❌ |
| Contenido citable (FAQ, cifras, fuentes) | ❌ |

## Anexo C. Fuentes y referencias

- Sitio auditado: https://www.myxa.com.ar/ y su repositorio `myxa-landing` (Next.js 13).
- LinkedIn de MYXA: https://www.linkedin.com/company/myxa-incendio
- Competidores revisados: bairestron.com.ar, zensitec.com.ar, stymel.com.ar, wdmpumps.com, ipci.com.ar, tromba-sa.com.ar.
- Norma IRAM 3597 (resumen de CAS Seguridad): https://www.cas-seguridad.org.ar/normativa/norma-iram-3597-sistemas-de-hidrantes-y-bocas-de-incendio-para-extincion-de-incendios/
- NFPA 20, Standard for the Installation of Stationary Pumps for Fire Protection: https://www.nfpa.org/codes-and-standards/nfpa-20-standard-development/20
- Aggarwal, P. et al. (2023). *GEO: Generative Engine Optimization*. arXiv:2311.09735.
- Google Search Central: documentación de robots.txt, sitemaps, datos estructurados y Core Web Vitals (https://developers.google.com/search).
- Next.js 13: `next/script` en `next/head` no soportado (https://nextjs.org/docs/messages/no-script-component-in-head).
