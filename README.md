# Helfen — Global Class Caregiving

Sitio web institucional de **Cuidados Especiales en Salud S.A.** (marca comercial *Helfen*),
empresa de cuidados e internación domiciliaria habilitada por el Ministerio de Salud de la Nación.

Landing de una sola página (one-pager con anclas), estática, orientada a familiares que
consultan desde el celular en un momento sensible: tipografía grande, contraste alto,
cero ruido visual y contacto por WhatsApp siempre a un toque.

El contenido y el lenguaje visual replican el **brochure institucional** de Helfen:
bloques de color con texto blanco, tarjetas de borde fino, íconos de línea y mucho aire
vertical. La identidad es **azul** (`#018AC1` / `#01A5D9` / `#005596`).

---

## Stack

| | |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 (tokens en `src/app/globals.css`) |
| Tipografía | Lexend (títulos) + Source Sans 3 (texto), vía `next/font` |
| Render | 100% estático (SSG) — sin backend ni base de datos |

## Puesta en marcha

```bash
npm install
npm run dev        # http://localhost:3000
```

Otros comandos:

```bash
npm run build      # build de producción
npm run start      # sirve el build
npm run lint       # ESLint
```

Requiere Node.js 20 o superior.

---

## Estructura

```
src/
├─ app/
│  ├─ layout.tsx        # metadata SEO/OG, fuentes, header, footer, botón flotante
│  ├─ page.tsx          # composición de la home + JSON-LD (MedicalBusiness)
│  ├─ globals.css       # tokens de marca: color, tipografía, motion
│  ├─ sitemap.ts        # /sitemap.xml
│  └─ robots.ts         # /robots.txt
├─ components/
│  ├─ Header.tsx        # nav fija + menú móvil
│  ├─ Footer.tsx        # datos legales + sellos de habilitación
│  ├─ WhatsAppFab.tsx   # botón flotante persistente
│  ├─ Logo.tsx          # símbolo + logotipo
│  ├─ icons.tsx         # set de íconos lineales propios (SVG, sin dependencias)
│  ├─ PhotoSlot.tsx     # espacio reservado para fotografía
│  ├─ Reveal.tsx        # aparición al hacer scroll (mejora progresiva)
│  ├─ ui.tsx            # primitivas: Container, Section, BlockHeading, ButtonLink, Card…
│  └─ sections/         # una sección de la home por archivo
│     ├─ Hero.tsx          # portada: logo, claim y sello de habilitaciones
│     ├─ Intro.tsx         # cuidados e internación domiciliaria
│     ├─ Beneficios.tsx    # 4 beneficios de la internación domiciliaria
│     ├─ Valores.tsx       # integridad · respeto · compromiso · cuidado
│     ├─ Metodo.tsx        # capacitación permanente + cuidado integral
│     └─ Contacto.tsx      # contacto mínimo (WhatsApp, teléfono, email)
└─ lib/
   ├─ site.ts           # ⭐ datos de contacto, habilitaciones y navegación
   └─ content.ts        # ⭐ copy institucional — transcripción textual del brochure
```

### Editar textos

El copy institucional es **verbatim del brochure** y vive en
**`src/lib/content.ts`**. No editarlo sin validar contra el PDF.

Ese archivo conserva además el copy de las **secciones retiradas** del sitio
(niveles de atención, grilla de servicios, tecnología / Helfen View® y cuidados
paliativos), agrupado bajo el comentario *"Secciones retiradas"*. Está transcrito
para poder reponer cualquiera de ellas sin volver al PDF: alcanza con crear el
componente en `src/components/sections/`, sumarlo a `src/app/page.tsx` y, si
necesita ancla, agregarla a `nav` en `src/lib/site.ts`.

### Cambiar datos de contacto

Todo (teléfono, WhatsApp, email, dirección, habilitaciones, menú) sale de
**`src/lib/site.ts`**. Al editar ese archivo se actualizan header, footer, CTAs,
metadata y datos estructurados.

La dirección postal ya no se muestra en el sitio; se conserva en `site.ts` porque
alimenta el JSON-LD de `MedicalBusiness` (SEO local).

El WhatsApp está configurado en **+54 9 11 3299-0001** →
`https://wa.me/5491132990001` con mensaje prellenado.

### Fotografía

El sitio usa dos fotos de stock de Unsplash (Unsplash License: uso comercial
permitido, sin atribución obligatoria), elegidas por ser cálidas y domésticas en vez
de clínicas.

| Archivo | Ubicación | Autor |
|---|---|---|
| `cuidadora-acompanando-en-casa.jpg` | Hero (fondo, bajo el degradé) | Age Cymru |
| `familia-en-casa.jpg` | Cuidados e internación domiciliaria | Centre for Ageing Better |

**Para reemplazarlas por fotos propias de Helfen** (recomendado apenas estén
disponibles): dejar el archivo en `public/images/` y cambiar el `src` del
componente `PhotoSlot` en la sección correspondiente. `PhotoSlot` usa `next/image`
y, si se le quita el `src`, vuelve solo a una composición de marca (degradé +
ilustración lineal) en vez de romperse.

Mantener siempre un `alt` descriptivo en español.

### Logo

`public/logo-helfen-blanco.png` es el símbolo institucional en blanco sobre
transparente — la única variante disponible. Por eso el lockup (símbolo +
"Helfen" + claim) se usa siempre sobre fondo azul: header, hero y footer.
Si aparece una variante en color, agregarla y extender `src/components/Logo.tsx`.

---

## Accesibilidad y performance

- Contraste verificado contra **WCAG 2.1 AA** (texto ≥ 4.5:1, elementos de UI ≥ 3:1).
- **Dos degradés de marca** (ver `globals.css`): el degradé original
  (`#01A5D9 → #018AC1 → #005596`) no alcanza AA con texto blanco en sus dos
  primeras paradas (2.84:1 y 3.88:1), así que se reserva para superficies
  decorativas (`.bg-brand-gradient-bright`). Toda superficie con texto usa
  `.bg-brand-gradient`, una versión profunda cuyas paradas superan 5.4:1.
- Cuerpo de texto en 17px, objetivos táctiles de 48px mínimo, foco visible en todo el sitio.
- Jerarquía de encabezados correcta, `alt` en imágenes, link "Saltar al contenido".
- `prefers-reduced-motion` respetado: sin animaciones si el usuario las desactivó.
- Sin librerías de animación ni de íconos: los SVG son propios y el JS del cliente es mínimo.

---

## Despliegue

### Vercel (recomendado)

1. Entrar a [vercel.com/new](https://vercel.com/new) e importar el repositorio
   `Designwithalex/helfen`.
2. Vercel detecta Next.js automáticamente — no hace falta configurar nada
   (build: `next build`, output: `.next`).
3. **Deploy**. Cada push a `main` publica una nueva versión.

Por CLI:

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # producción
```

### Dominio propio

En Vercel → *Settings → Domains* agregar `cuidadosespecialesensalud.com` y apuntar
el DNS según las instrucciones del panel. Después actualizar `site.url` en
`src/lib/site.ts` si el dominio final fuese otro (afecta canonical, Open Graph y sitemap).

### URL pública

> Pendiente de completar tras el primer deploy: `https://<proyecto>.vercel.app`

---

## Datos de la empresa

**Cuidados Especiales en Salud S.A.**
Enrique Santos Discépolo 1859, Piso 2 — 1051, CABA, Argentina
Tel. 54 11 6019.1111 · WhatsApp +54 9 11 3299-0001
info@cuidadosespecialesensalud.com

Habilitaciones: Ministerio de Salud de la Nación · GCBA Disposición N° 2943/2016 ·
Registro Nacional de Prestadores Disposición N° 40371/2016
