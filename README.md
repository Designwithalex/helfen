# Helfen — Global Class Caregiving

Sitio web institucional de **Cuidados Especiales en Salud S.A.** (marca comercial *Helfen*),
empresa de cuidados e internación domiciliaria habilitada por el Ministerio de Salud de la Nación.

Landing de una sola página (one-pager con anclas), estática, orientada a familiares que
consultan desde el celular en un momento sensible: tipografía grande, contraste alto,
cero ruido visual y contacto por WhatsApp siempre a un toque.

El contenido y el lenguaje visual replican el **brochure institucional** de Helfen:
bloques de color con texto blanco, tarjetas de borde fino, íconos de línea y mucho aire
vertical. La identidad es **turquesa** `#5EB1B9`, el tono de las láminas del brochure.

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
│  ├─ api/contacto/route.ts  # endpoint del formulario (envía el email)
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
│     └─ Contacto.tsx      # formulario + WhatsApp, email y domicilio
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

Todo (WhatsApp, email, domicilio, habilitaciones, menú) sale de
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
"Helfen" + claim) se usa siempre sobre fondo turquesa: header, hero y footer.
Si aparece una variante en color, agregarla y extender `src/components/Logo.tsx`.

---

## Formulario de contacto

El formulario envía la consulta **por email** a la casilla de Helfen a través
de `POST /api/contacto` (Route Handler, runtime Node). La API key vive sólo en
el servidor: nunca llega al bundle del cliente.

### Puesta en marcha

1. Crear una API key en <https://resend.com/api-keys>.
2. Verificar el dominio en <https://resend.com/domains> para poder enviar
   desde `contacto@helfensalud.com`. Para probar sin verificar, usar el
   remitente `Helfen <onboarding@resend.dev>`.
3. Copiar `.env.example` a `.env.local` y completar las variables.
4. En producción, cargar las mismas variables en el hosting
   (Vercel → *Settings* → *Environment Variables*).

| Variable | Obligatoria | Para qué |
|---|---|---|
| `RESEND_API_KEY` | sí | Autenticación con Resend |
| `CONTACTO_TO` | no | Destinatario (por defecto `site.email`) |
| `CONTACTO_FROM` | no | Remitente verificado |

**Sin `RESEND_API_KEY` el endpoint responde 503** y el formulario muestra el
error con un botón de WhatsApp: nunca se pierde el contacto en silencio.

### Comportamiento

- Validación en el cliente (respuesta inmediata) **y** en el servidor
  (no se confía en el cliente). Los errores se marcan con `aria-invalid` +
  `aria-describedby` y el foco salta al primer campo con problema.
- **Honeypot** (`empresa`, oculto y `aria-hidden`): si viene completo se
  responde 200 sin enviar nada, para no darle señal al bot.
- El `servicio` se valida contra la lista blanca de `serviciosFormulario`
  (`src/lib/content.ts`), compartida entre el form y la API.
- Los valores se escapan antes de armar el HTML del mail.
- `reply_to` apunta al email del consultante: responder en el cliente de
  correo le llega directo.

### Cambiar de proveedor

Toda la integración está en la función `enviarEmail` de
`src/app/api/contacto/route.ts`. Para pasar a Formspree, Web3Forms o SMTP,
se reemplaza esa función: la validación y el contrato con el cliente
(`{ok}` / `{errores}` / `{error}`) quedan igual.

---

## Accesibilidad y performance

- Contraste verificado contra **WCAG 2.1 AA** (texto ≥ 4.5:1, elementos de UI ≥ 3:1).
- **Dos degradés de marca** (ver `globals.css`): `#5EB1B9` es un turquesa
  claro — da 5.03:1 con texto oscuro pero sólo **2.48:1 con blanco**, por
  debajo incluso del 3:1 de texto grande. Por eso queda en
  `.bg-brand-gradient-bright`, para superficies decorativas o con texto
  oscuro. Toda superficie con texto blanco usa `.bg-brand-gradient`
  (`#2E7B82 → #256167 → #1E4B4F`), cuyas paradas superan 4.9:1.
- Regla de la escala: **50–500** sólo para fondos, bordes y rellenos;
  **700+** para texto de marca sobre blanco y para fondos con texto blanco.
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
WhatsApp +54 9 11 3299-0001
info@cuidadosespecialesensalud.com

Habilitaciones: Ministerio de Salud de la Nación · GCBA Disposición N° 2943/2016 ·
Registro Nacional de Prestadores Disposición N° 40371/2016
