# Portafolio — Daniel Alejandro Estrada Olalde (`alnuxE`)

Portafolio personal y generador de currículum imprimible. La portada está
construida como un **keynote de lanzamientos**: un escenario neutro y, encima, un
capítulo por producto bañado entero en su color de marca, con sus cifras a escala
de escenario. La idea es que quien filtra candidatos entienda en segundos qué se
ha construido y cuánto se ha probado, sin leer un párrafo.

## Qué contiene

* **Portada (`/`).** Héroe con el nombre, el tiempo en producción calculado en
  vivo y las 808 pruebas desglosadas por app en una barra proporcional que lleva a
  cada capítulo. Después, un capítulo por app (SwitchIot, PromptEngine, Classly)
  con sus decisiones de ingeniería, la trayectoria como un único hilo, el stack por
  capas y el cierre con los tres formatos del CV.
* **Currículum (`/cv`).** Tres presentaciones conmutables, las tres imprimibles
  en A4: **Clásico** (formato Harvard, serif, blanco y negro), **Destacado**
  (para empresa, con jerarquía visual y color contenido, legible fotocopiado) y
  **Soporte TI** (el mismo expediente reordenado para ofertas de operaciones y
  mesa de ayuda).
* **Dos temas de primera clase** (claro, oscuro y sistema).

## Decisiones que conviene conocer antes de tocar nada

* **La portada vive en `app/page.tsx` + `app/home.css`**, todo bajo `.escena` y
  con tokens `--e-*`. `/cv` sigue usando `app/globals.css` y sus propias fuentes;
  ninguna de las dos hojas le cambia una medida a la otra.
* **Una sola familia en la portada: Archivo variable.** La jerarquía la dan los
  ejes de anchura y peso (condensada negra para cifras, semiexpandida para
  rótulos). Martian Mono, IBM Plex y EB Garamond solo los usa `/cv` y no se
  precargan en la portada.
* **El color de marca es el capítulo.** `--e-switch`, `--e-prompt` y
  `--e-classly` bañan su sección entera; el texto secundario se mezcla del
  blanco con el tono (≥ 4,5:1 calculado en los tres).
* **El contenido vive en `content/site.ts`**, tipado y como fuente única. Las
  cifras agregadas (808 pruebas, 218 ficheros) se **calculan**. Cada app tiene
  `decisiones` (solo hechos defendibles en entrevista) y un campo opcional
  `enlaces` para tienda, demo o repo: si se llena, la portada pinta los botones.
* **Movimiento: un solo momento.** El rodillo de dígitos rueda una vez (≤ 900 ms)
  y el estado de reposo ya es el final, así que con `prefers-reduced-motion`, sin
  JS o antes de entrar en pantalla la cifra se lee igual.
* **Los logotipos son SVG en línea** (`components/brand/`), no ficheros de
  `public/`, para que funcionen bajo el `basePath` de GitHub Pages.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 · App Router · Turbopack |
| Interfaz | React 19 · TypeScript estricto |
| Estilos | Tailwind CSS v4 con tokens propios |
| Temas | `next-themes` (claro · oscuro · sistema) |
| Tipografía | Archivo variable (portada) · Martian Mono · IBM Plex Sans / Mono · EB Garamond (`/cv`) |
| Iconos | `lucide-react`, más trazados propios para GitHub y LinkedIn |
| Despliegue | GitHub Actions → GitHub Pages (exportación estática) |

## Desarrollo

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # compilación de producción
npm run lint         # ESLint
```

El currículum se imprime desde `/cv` con el botón de la barra o con `Ctrl+P`. El
formato elegido viaja en la URL (`/cv?formato=destacado`,
`/cv?formato=operaciones`), así que el enlace que se comparta abre la
presentación que se quiere que se vea.

**Para adaptar el CV a una oferta nueva**: el contenido dirigido vive en un
único bloque de `content/site.ts` (`cvOperaciones` es el ejemplo) y la
presentación reutiliza la retícula de «Destacado». No se duplica ni un hecho:
lo que cambia es el orden de lectura y qué parte de cada hecho va delante.
El presupuesto es **una página**, y se comprueba imprimiendo, no a ojo.

## Autor

**Daniel Alejandro Estrada Olalde** — Desarrollador backend · Ingeniería en
Informática, IPN. [github.com/alnuxE](https://github.com/alnuxE)
